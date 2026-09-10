const Razorpay = require("razorpay");
const crypto = require("crypto");
const pool = require("../config/db");

// Initialize Razorpay instance with environment fallback
const getRazorpayInstance = () => {
  const key_id = process.env.RAZORPAY_KEY_ID || "rzp_test_T0bvuXdCpuKBMS";
  const key_secret = process.env.RAZORPAY_SECRET || "NX1rhhontSgIt2qDSBkS3r5H";
  return new Razorpay({ key_id, key_secret });
};

// ========================================================
// 1. CREATE PAYMENT ORDER
// Validates course price in DB to prevent price tampering
// ========================================================
const createOrder = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "courseId is required to create order",
      });
    }

    // Fetch real price from database
    const courseQuery = await pool.query(
      "SELECT id, title, price FROM courses WHERE id = $1",
      [courseId]
    );

    if (courseQuery.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    const course = courseQuery.rows[0];
    const amountInPaise = Math.round(Number(course.price) * 100);

    const razorpay = getRazorpayInstance();
    const receiptId = `order_${courseId}_${userId || "guest"}_${Date.now().toString().slice(-6)}`;

    const options = {
      amount: amountInPaise > 0 ? amountInPaise : 100, // min 1 INR for test
      currency: "INR",
      receipt: receiptId,
      notes: {
        courseId: String(course.id),
        courseTitle: course.title,
        userId: String(userId || ""),
      },
    };

    const order = await razorpay.orders.create(options);

    // Save order in database if user is authenticated
    if (userId) {
      await pool.query(
        `INSERT INTO orders (user_id, course_id, razorpay_order_id, amount, currency, status)
         VALUES ($1, $2, $3, $4, $5, 'created')
         ON CONFLICT (razorpay_order_id) DO NOTHING`,
        [userId, course.id, order.id, course.price, "INR"]
      );
    }

    res.status(200).json({
      success: true,
      order,
      keyId: process.env.RAZORPAY_KEY_ID || "rzp_test_T0bvuXdCpuKBMS",
      course: {
        id: course.id,
        title: course.title,
        price: course.price,
      },
    });
  } catch (error) {
    console.error("Payment Order Creation Error:", error);
    next(error);
  }
};

// ========================================================
// 2. VERIFY PAYMENT & AUTO-ENROLL
// Verifies HMAC-SHA256 signature and activates enrollment
// ========================================================
const verifyPayment = async (req, res, next) => {
  const client = await pool.connect();
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required to confirm enrollment",
      });
    }

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      courseId,
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing payment verification parameters",
      });
    }

    const secret = process.env.RAZORPAY_SECRET || "NX1rhhontSgIt2qDSBkS3r5H";
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return res.status(400).json({
        success: false,
        message: "Payment signature verification failed. Potential fraud attempt.",
      });
    }

    await client.query("BEGIN");

    // 1. Fetch course details
    const courseRes = await client.query(
      "SELECT id, title, price FROM courses WHERE id = $1",
      [courseId]
    );
    const course = courseRes.rows[0];

    // 2. Update order status
    await client.query(
      "UPDATE orders SET status = 'paid' WHERE razorpay_order_id = $1",
      [razorpay_order_id]
    );

    // 3. Insert payment record
    await client.query(
      `INSERT INTO payments
       (user_id, course_id, razorpay_payment_id, razorpay_order_id, razorpay_signature, amount, status)
       VALUES ($1, $2, $3, $4, $5, $6, 'Success')
       ON CONFLICT (razorpay_payment_id) DO NOTHING`,
      [
        userId,
        courseId,
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        course ? course.price : 0,
      ]
    );

    // 4. Create active enrollment
    await client.query(
      `INSERT INTO enrollments (user_id, student_id, course_id, status)
       VALUES ($1, $1, $2, 'Active')
       ON CONFLICT (user_id, course_id) DO UPDATE SET status = 'Active'`,
      [userId, courseId]
    );

    // 5. Add activity log
    await client.query(
      `INSERT INTO activities (user_id, title, description, type)
       VALUES ($1, 'Course Enrolled', $2, 'Enrollment')`,
      [userId, `User enrolled in course: ${course ? course.title : courseId}`]
    );

    await client.query("COMMIT");

    res.status(200).json({
      success: true,
      message: "Payment verified and enrollment activated successfully! 🚀",
      courseId,
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Payment Verification Error:", error);
    next(error);
  } finally {
    client.release();
  }
};

// ========================================================
// 3. GET PAYMENT HISTORY
// ========================================================
const getPaymentHistory = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const userRole = req.user.role;

    let query;
    let params = [];

    if (userRole === "admin") {
      query = `
        SELECT
          p.id,
          p.amount,
          p.status,
          p.created_at,
          p.razorpay_payment_id,
          u.name as student_name,
          u.email as student_email,
          c.title as course_title
        FROM payments p
        LEFT JOIN users u ON p.user_id = u.id
        LEFT JOIN courses c ON p.course_id = c.id
        ORDER BY p.id DESC
      `;
    } else {
      query = `
        SELECT
          p.id,
          p.amount,
          p.status,
          p.created_at,
          p.razorpay_payment_id,
          c.title as course_title
        FROM payments p
        LEFT JOIN courses c ON p.course_id = c.id
        WHERE p.user_id = $1
        ORDER BY p.id DESC
      `;
      params = [userId];
    }

    const result = await pool.query(query, params);

    res.json({
      success: true,
      payments: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  verifyPayment,
  getPaymentHistory,
};