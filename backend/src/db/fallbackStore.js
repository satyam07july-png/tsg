const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const DATA_DIR = path.join(__dirname, "..", "..", "data");
const STORE_FILE = path.join(DATA_DIR, "lms_store.json");

// Pre-hashed default passwords for instant startup
const HASHED_ADMIN_PASS = bcrypt.hashSync("Admin@12345", 10);
const HASHED_TEACHER_PASS = bcrypt.hashSync("Teacher@12345", 10);

const INITIAL_COURSES = [
  {
    id: 1,
    course_id: "dm-advanced",
    title: "Advanced Digital Marketing Course",
    description: "6-month Advanced Digital Marketing Course — 10 live brand campaigns, 54+ AI tools, Google & Meta certifications, and agency internship.",
    price: 18999,
    original_price: 35999,
    duration: "6 Months",
    level: "Advanced",
    category: "Digital Marketing",
    teacher: "Dr. Gulshan Kumar",
    teacher_id: 2,
    thumbnail: "https://dizitaladda.com/images/digital-marketing-institute.webp",
    is_published: true,
    total_lectures: 60,
    total_students: 1420,
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    course_id: "dm-expert",
    title: "Expert in Digital Marketing",
    description: "12-month master program with 70 comprehensive modules, 60+ AI tools, 10 live brand projects, paid agency internship, and 100% placement guarantee.",
    price: 34999,
    original_price: 69999,
    duration: "12 Months",
    level: "Expert",
    category: "Digital Marketing",
    teacher: "Dr. Gulshan Kumar",
    teacher_id: 2,
    thumbnail: "https://dizitaladda.com/images/digital-marketing-institute.webp",
    is_published: true,
    total_lectures: 70,
    total_students: 890,
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    course_id: "dm-professionals",
    title: "Digital Marketing For Professionals",
    description: "4-month targeted upskilling track with 40 modules, 50+ AI tools, 10 live brand projects, and flexible evening/weekend batches.",
    price: 14999,
    original_price: 27999,
    duration: "4 Months",
    level: "Professional",
    category: "Digital Marketing",
    teacher: "Dr. Gulshan Kumar",
    teacher_id: 2,
    thumbnail: "https://dizitaladda.com/images/digital-marketing-institute.webp",
    is_published: true,
    total_lectures: 40,
    total_students: 650,
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    course_id: "dm-beginners",
    title: "Digital Marketing For Beginners",
    description: "3-month foundational course with 30 modules, 40+ AI tools, basic SEO, social media marketing, and guided capstone.",
    price: 9999,
    original_price: 19999,
    duration: "3 Months",
    level: "Beginner",
    category: "Digital Marketing",
    teacher: "Dr. Gulshan Kumar",
    teacher_id: 2,
    thumbnail: "https://dizitaladda.com/images/digital-marketing-institute.webp",
    is_published: true,
    total_lectures: 30,
    total_students: 2100,
    created_at: new Date().toISOString(),
  },
  {
    id: 5,
    course_id: "ds-advanced",
    title: "Data Science & Data Analytics",
    description: "Complete hands-on data science track covering Python, SQL, Power BI, predictive modeling, machine learning, and business intelligence.",
    price: 55000,
    original_price: 75000,
    duration: "6 Months",
    level: "Advanced",
    category: "Data Science",
    teacher: "Dr. Gulshan Kumar",
    teacher_id: 2,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    is_published: true,
    total_lectures: 50,
    total_students: 480,
    created_at: new Date().toISOString(),
  },
  {
    id: 6,
    course_id: "cyber-advanced",
    title: "Cyber Security & Ethical Hacking",
    description: "Comprehensive network security, penetration testing, CEH certification prep, incident response, and cloud security labs.",
    price: 50000,
    original_price: 70000,
    duration: "6 Months",
    level: "Advanced",
    category: "Cyber Security",
    teacher: "Dr. Gulshan Kumar",
    teacher_id: 2,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    is_published: true,
    total_lectures: 48,
    total_students: 390,
    created_at: new Date().toISOString(),
  },
  {
    id: 7,
    course_id: "ai-expert",
    title: "AI & Prompt Engineering Masterclass",
    description: "Master generative AI, large language models, autonomous AI agents, LangChain, API automation, and multi-modal creative tech.",
    price: 48000,
    original_price: 65000,
    duration: "6 Months",
    level: "Expert",
    category: "Artificial Intelligence",
    teacher: "Dr. Gulshan Kumar",
    teacher_id: 2,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop",
    is_published: true,
    total_lectures: 55,
    total_students: 720,
    created_at: new Date().toISOString(),
  },
];

const INITIAL_USERS = [
  {
    id: 1,
    name: "System Admin",
    full_name: "System Admin",
    email: "admin@dizitaladda.com",
    password: HASHED_ADMIN_PASS,
    role: "admin",
    phone: "+919876543210",
    specialization: "LMS Administration",
    status: "Active",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Dr. Gulshan Kumar",
    full_name: "Dr. Gulshan Kumar",
    email: "gulshan@dizitaladda.com",
    password: HASHED_TEACHER_PASS,
    role: "teacher",
    phone: "+918810606010",
    specialization: "Digital Marketing & Search AI",
    status: "Active",
    created_at: new Date().toISOString(),
  },
];

const INITIAL_SECTIONS = [
  { id: 1, course_id: 1, title: "Module 1: Digital Marketing Ecosystem & Strategy", order_num: 1 },
  { id: 2, course_id: 1, title: "Module 2: Advanced SEO & AI Search Optimization", order_num: 2 },
  { id: 3, course_id: 1, title: "Module 3: Google Ads & Performance Max Campaigns", order_num: 3 },
  { id: 4, course_id: 2, title: "Module 1: Comprehensive Master Strategy & AI Suite", order_num: 1 },
  { id: 5, course_id: 3, title: "Module 1: Rapid Executive Upskilling & Lead Gen", order_num: 1 },
  { id: 6, course_id: 3, title: "Module 2: Meta Ads, Funnels & GA4 Analytics", order_num: 2 },
  { id: 7, course_id: 4, title: "Module 1: Foundations of Digital Marketing & SEO", order_num: 1 },
  { id: 8, course_id: 4, title: "Module 2: Social Media Marketing & AI Tools", order_num: 2 },
];

const INITIAL_LECTURES = [
  // Course 1: Advanced Digital Marketing
  {
    id: 1,
    section_id: 1,
    course_id: 1,
    title: "1.1 Introduction to the Performance Marketing Framework",
    description: "Overview of customer journeys, acquisition funnels, and modern digital marketing technology stack.",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    pdf_url: "https://dizitaladda.com/curriculum/performance-framework.pdf",
    duration: "24:30",
    order_num: 1,
    is_free_preview: true,
  },
  {
    id: 2,
    section_id: 1,
    course_id: 1,
    title: "1.2 Setting Up Your Digital Workspace & Tracking Pixels",
    description: "Step-by-step setup of Google Tag Manager, GA4, Meta Pixel, and server-side tracking.",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    pdf_url: null,
    duration: "32:15",
    order_num: 2,
    is_free_preview: false,
  },
  {
    id: 3,
    section_id: 2,
    course_id: 1,
    title: "2.1 Semantic Search, Entity SEO & AI Automation",
    description: "How modern search engines index entities and using AI agents for keyword clustering.",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    pdf_url: null,
    duration: "45:00",
    order_num: 1,
    is_free_preview: false,
  },
  {
    id: 4,
    section_id: 3,
    course_id: 1,
    title: "3.1 Google Ads Search & Performance Max Mastery",
    description: "Architecting high-converting Search campaigns, smart bidding, and asset group optimization.",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    pdf_url: null,
    duration: "38:20",
    order_num: 1,
    is_free_preview: false,
  },
  // Course 3: Digital Marketing For Professionals
  {
    id: 5,
    section_id: 5,
    course_id: 3,
    title: "1.1 High-ROI Growth Frameworks for Professionals",
    description: "Modern lead generation funnels, B2B and BC client acquisition, and campaign strategy.",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    pdf_url: null,
    duration: "28:10",
    order_num: 1,
    is_free_preview: true,
  },
  {
    id: 6,
    section_id: 6,
    course_id: 3,
    title: "2.1 Meta Ads Architecture & Scaling Secrets",
    description: "Custom audiences, lookalikes, creative testing, and scaling budgets with positive ROAS.",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    pdf_url: null,
    duration: "35:45",
    order_num: 1,
    is_free_preview: false,
  },
  // Course 4: Digital Marketing For Beginners
  {
    id: 7,
    section_id: 7,
    course_id: 4,
    title: "1.1 Fundamentals of Digital Marketing & Online Presence",
    description: "Introduction to digital channels, search engines, websites, and brand presence.",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    pdf_url: null,
    duration: "20:15",
    order_num: 1,
    is_free_preview: true,
  },
  {
    id: 8,
    section_id: 8,
    course_id: 4,
    title: "2.1 Social Media Marketing & 40+ AI Tools Overview",
    description: "Creating engaging content with ChatGPT, Canva, and scheduling organic social media campaigns.",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    pdf_url: null,
    duration: "30:00",
    order_num: 1,
    is_free_preview: false,
  },
];

class FallbackStore {
  constructor() {
    this.data = {
      users: [...INITIAL_USERS],
      courses: [...INITIAL_COURSES],
      sections: [...INITIAL_SECTIONS],
      lectures: [...INITIAL_LECTURES],
      students: [],
      orders: [],
      enrollments: [],
      notifications: [],
    };
    this.loadFromDisk();
  }

  loadFromDisk() {
    try {
      if (fs.existsSync(STORE_FILE)) {
        const raw = fs.readFileSync(STORE_FILE, "utf8");
        const parsed = JSON.parse(raw);
        if (parsed.users && parsed.users.length > 0) this.data.users = parsed.users;
        if (parsed.courses && parsed.courses.length >= INITIAL_COURSES.length) {
          this.data.courses = parsed.courses;
        } else {
          this.data.courses = INITIAL_COURSES;
        }
        if (parsed.students) this.data.students = parsed.students;
        if (parsed.orders) this.data.orders = parsed.orders;
        if (parsed.enrollments) this.data.enrollments = parsed.enrollments;
        if (parsed.sections) this.data.sections = parsed.sections;
        if (parsed.lectures) this.data.lectures = parsed.lectures;
        if (parsed.notifications) this.data.notifications = parsed.notifications;
      }
    } catch (e) {
      console.warn("FallbackStore: Could not load disk cache, starting with default seed data.");
    }
  }

  saveToDisk() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(STORE_FILE, JSON.stringify(this.data, null, 2), "utf8");
    } catch (e) {
      console.warn("FallbackStore: Could not write to disk cache:", e.message);
    }
  }

  // Handle SQL-like queries gracefully
  async handleQuery(text, params = []) {
    const q = (text || "").trim();
    const upperQ = q.toUpperCase();

    // 1. Transactions
    if (upperQ === "BEGIN" || upperQ === "COMMIT" || upperQ === "ROLLBACK") {
      return { rows: [], rowCount: 0 };
    }

    // 2a. ENROLLED COURSES FOR LOGGED-IN USER (myCourses)
    if (
      upperQ.includes("FROM COURSES") &&
      (upperQ.includes("JOIN ENROLLMENTS") || upperQ.includes("JOIN STUDENTS") || upperQ.includes("ENROLLMENTS.USER_ID = $1") || upperQ.includes("STUDENTS.USER_ID = $1"))
    ) {
      const userId = Number(params[0]);
      const userStudents = this.data.students.filter((s) => Number(s.user_id) === userId);
      const userEnrollments = this.data.enrollments.filter((e) => Number(e.user_id) === userId);

      const enrolledCourses = this.data.courses.filter((c) => {
        const inStudent = userStudents.some(
          (s) =>
            (s.course_id && Number(s.course_id) === Number(c.id)) ||
            (s.course_code && s.course_code === c.course_id) ||
            (s.course && s.course.toLowerCase().trim() === c.title.toLowerCase().trim())
        );
        const inEnrollment = userEnrollments.some(
          (e) =>
            (e.course_id && Number(e.course_id) === Number(c.id)) ||
            (e.course_code && e.course_code === c.course_id)
        );
        return inStudent || inEnrollment;
      });

      const formatted = enrolledCourses.map((c) => {
        const sRec = userStudents.find(
          (s) =>
            (s.course_id && Number(s.course_id) === Number(c.id)) ||
            (s.course_code && s.course_code === c.course_id) ||
            (s.course && s.course.toLowerCase().trim() === c.title.toLowerCase().trim())
        );
        const eRec = userEnrollments.find(
          (e) =>
            (e.course_id && Number(e.course_id) === Number(c.id)) ||
            (e.course_code && e.course_code === c.course_id)
        );

        const lecCount = this.data.lectures.filter((l) => Number(l.course_id) === Number(c.id)).length;
        const totalLec = lecCount > 0 ? lecCount : (c.total_lectures || 36);

        return {
          ...c,
          enrolled_at: eRec?.enrolled_at || sRec?.created_at || new Date().toISOString(),
          enrollment_status: eRec?.status || sRec?.status || "Active",
          total_lectures: totalLec,
          completed_lectures: 0,
        };
      });

      return { rows: formatted, rowCount: formatted.length };
    }

    // 2b. General Courses Query
    if (upperQ.includes("FROM COURSES") && (upperQ.includes("TOTAL_LECTURES") || upperQ.includes("SELECT C.*") || upperQ.includes("SELECT * FROM COURSES"))) {
      let filtered = this.data.courses.filter((c) => c.is_published !== false);

      const categoryParam = params.find((p) => typeof p === "string" && !p.startsWith("%") && p !== "All");
      if (categoryParam) {
        filtered = filtered.filter((c) => c.category.toLowerCase() === categoryParam.toLowerCase());
      }

      const searchParam = params.find((p) => typeof p === "string" && p.startsWith("%") && p.endsWith("%"));
      if (searchParam) {
        const clean = searchParam.replace(/%/g, "").toLowerCase();
        filtered = filtered.filter(
          (c) => c.title.toLowerCase().includes(clean) || (c.description || "").toLowerCase().includes(clean)
        );
      }

      return { rows: filtered, rowCount: filtered.length };
    }

    // 2c. Single Course: SELECT * FROM courses WHERE id::text = $1 OR course_id = $1
    if (upperQ.includes("FROM COURSES") && (upperQ.includes("ID::TEXT = $1") || upperQ.includes("COURSE_ID = $1") || upperQ.includes("WHERE ID = $1"))) {
      const idOrSlug = String(params[0]);
      const course = this.data.courses.find(
        (c) => String(c.id) === idOrSlug || c.course_id === idOrSlug
      );
      return { rows: course ? [course] : [], rowCount: course ? 1 : 0 };
    }

    // 2d. Course Sections: SELECT * FROM sections WHERE course_id = $1
    if (upperQ.includes("FROM SECTIONS") && upperQ.includes("COURSE_ID = $1")) {
      const courseId = Number(params[0]);
      const sections = this.data.sections.filter((s) => s.course_id === courseId);
      return { rows: sections, rowCount: sections.length };
    }

    // 2e. Course Lectures (supports courseId numeric or slug)
    if (upperQ.includes("FROM LECTURES")) {
      let filtered = this.data.lectures;
      if (params.length > 0 && params[0] !== undefined) {
        const courseIdStr = String(params[0]);
        const targetCourse = this.data.courses.find(
          (c) => String(c.id) === courseIdStr || c.course_id === courseIdStr
        );
        const matchedCourseId = targetCourse ? targetCourse.id : Number(courseIdStr);
        filtered = filtered.filter((l) => Number(l.course_id) === Number(matchedCourseId));
      }
      return { rows: filtered, rowCount: filtered.length };
    }

    // 2e. Add Course: INSERT INTO courses (...) VALUES (...) RETURNING *
    if (upperQ.includes("INSERT INTO COURSES")) {
      const newCourse = {
        id: this.data.courses.length + 1,
        course_id: "course-" + Date.now().toString().slice(-4),
        title: params[0] || "Untitled Course",
        description: params[1] || "",
        duration: params[2] || "4 Weeks",
        level: params[3] || "Beginner",
        category: params[4] || "General",
        price: Number(params[5]) || 0,
        original_price: Number(params[6]) || Number(params[5]) || 0,
        teacher: params[7] || "Dizital Adda Trainer",
        teacher_id: params[8] || null,
        thumbnail: params[9] || "",
        is_published: true,
        total_lectures: 0,
        total_students: 0,
        created_at: new Date().toISOString(),
      };
      this.data.courses.push(newCourse);
      this.saveToDisk();
      return { rows: [newCourse], rowCount: 1 };
    }

    // 3. USERS QUERIES
    if (upperQ.includes("FROM USERS") && (upperQ.includes("WHERE LOWER(EMAIL)") || upperQ.includes("WHERE EMAIL"))) {
      const email = String(params[0] || "").toLowerCase().trim();
      const user = this.data.users.find((u) => u.email.toLowerCase() === email);
      return { rows: user ? [user] : [], rowCount: user ? 1 : 0 };
    }

    if (upperQ.includes("FROM USERS") && (upperQ.includes("WHERE ID =") || upperQ.includes("WHERE ID::TEXT ="))) {
      const id = Number(params[0]);
      const user = this.data.users.find((u) => u.id === id);
      return { rows: user ? [user] : [], rowCount: user ? 1 : 0 };
    }

    if (upperQ.includes("INSERT INTO USERS")) {
      const isLiteralStudent = upperQ.includes("'STUDENT'");
      const role = isLiteralStudent ? "student" : (params[4] || "student").toLowerCase();
      const phone = isLiteralStudent ? (params[4] || null) : (params[5] || null);
      const newUser = {
        id: this.data.users.length + 1,
        name: params[0] || "Student",
        full_name: params[1] || params[0] || "Student",
        email: (params[2] || "").toLowerCase().trim(),
        password: params[3],
        role,
        phone,
        status: "Active",
        avatar: "https://ui-avatars.com/api/?name=" + encodeURIComponent(params[0] || "Student") + "&background=0B1220&color=D4A017&bold=true",
        created_at: new Date().toISOString(),
      };
      this.data.users.push(newUser);
      this.saveToDisk();
      return { rows: [newUser], rowCount: 1 };
    }

    if (upperQ.includes("UPDATE USERS")) {
      let targetId = params[params.length - 1];
      const user = this.data.users.find((u) => u.id === Number(targetId));
      if (user) {
        if (upperQ.includes("PASSWORD = $1")) {
          user.password = params[0];
        }
        user.updated_at = new Date().toISOString();
        this.saveToDisk();
      }
      return { rows: user ? [user] : [], rowCount: user ? 1 : 0 };
    }

    // 4. STUDENTS QUERIES
    if (upperQ.includes("FROM STUDENTS") && upperQ.includes("USER_ID = $1")) {
      const userId = Number(params[0]);
      const student = [...this.data.students].reverse().find((s) => Number(s.user_id) === userId);
      if (!student) {
        return { rows: [], rowCount: 0 };
      }
      const user = this.data.users.find((u) => Number(u.id) === userId);
      const course = this.data.courses.find(
        (c) =>
          (student.course_id && Number(c.id) === Number(student.course_id)) ||
          (student.course_code && c.course_id === student.course_code) ||
          (student.course && c.title.toLowerCase().trim() === student.course.toLowerCase().trim())
      );
      const combined = {
        ...student,
        avatar: user?.avatar || null,
        role: user?.role || "student",
        course_numeric_id: course?.id || null,
        course_code_val: course?.course_id || student.course_code || null,
        course_title: course?.title || student.course || null,
        course_thumbnail: course?.thumbnail || null,
        course_duration: course?.duration || null,
        course_level: course?.level || null,
      };
      return { rows: [combined], rowCount: 1 };
    }

    if (upperQ.includes("INSERT INTO STUDENTS")) {
      const colMatch = q.match(/\((.*?)\)\s*VALUES/i);
      const cols = colMatch
        ? colMatch[1].split(",").map((c) => c.trim().toLowerCase())
        : ["user_id", "student_id", "name", "email", "password", "phone", "course", "course_id", "course_code", "status"];

      const record = {};
      cols.forEach((col, idx) => {
        if (params[idx] !== undefined) {
          record[col] = params[idx];
        }
      });

      const newStudent = {
        id: this.data.students.length + 1,
        user_id: Number(record.user_id || params[0]),
        student_id: record.student_id || params[1] || ("DIZ-" + Math.floor(100000 + Math.random() * 900000)),
        course_id: record.course_id ? Number(record.course_id) : null,
        course_code: record.course_code || null,
        name: record.name || "Student",
        email: (record.email || "").toLowerCase().trim(),
        password: record.password || null,
        phone: record.phone || null,
        course: record.course || "Advanced Digital Marketing",
        batch: record.batch || "Regular 2026",
        status: record.status || "Active",
        created_at: new Date().toISOString(),
      };
      this.data.students.push(newStudent);
      this.saveToDisk();
      return { rows: [newStudent], rowCount: 1 };
    }

    if (upperQ.includes("UPDATE STUDENTS")) {
      const targetId = Number(params[params.length - 1]);
      const student = this.data.students.find((s) => s.id === targetId || s.user_id === targetId);
      if (student) {
        if (upperQ.includes("COURSE_ID = $1")) {
          student.course_id = Number(params[0]);
          student.course_code = params[1];
          student.course = params[2];
          student.password = params[3];
        }
        student.updated_at = new Date().toISOString();
        this.saveToDisk();
      }
      return { rows: student ? [student] : [], rowCount: student ? 1 : 0 };
    }

    if (upperQ.includes("FROM STUDENTS") && !upperQ.includes("WHERE")) {
      const list = this.data.students.map((s) => {
        const u = this.data.users.find((user) => user.id === s.user_id);
        return {
          ...s,
          avatar: u?.avatar || null,
        };
      });
      return { rows: list, rowCount: list.length };
    }

    // 5. ORDERS QUERIES
    if (upperQ.includes("INSERT INTO ORDERS")) {
      const newOrder = {
        id: this.data.orders.length + 1,
        user_id: params[0] ? Number(params[0]) : null,
        student_id: params[1] ? Number(params[1]) : null,
        course_id: params[2] ? Number(params[2]) : null,
        razorpay_order_id: params[3],
        amount: Number(params[4]),
        currency: params[5] || "INR",
        status: "created",
        created_at: new Date().toISOString(),
      };
      this.data.orders.push(newOrder);
      this.saveToDisk();
      return { rows: [newOrder], rowCount: 1 };
    }

    if (upperQ.includes("FROM ORDERS") && upperQ.includes("RAZORPAY_ORDER_ID = $1")) {
      const orderId = String(params[0]);
      const order = this.data.orders.find((o) => o.razorpay_order_id === orderId);
      return { rows: order ? [order] : [], rowCount: order ? 1 : 0 };
    }

    if (upperQ.includes("UPDATE ORDERS")) {
      const rzpOrderId = String(params[1] || params[params.length - 1]);
      const order = this.data.orders.find((o) => o.razorpay_order_id === rzpOrderId);
      if (order) {
        order.payment_id = params[0];
        order.status = "paid";
        order.updated_at = new Date().toISOString();
        this.saveToDisk();
      }
      return { rows: order ? [order] : [], rowCount: order ? 1 : 0 };
    }

    // 6. ENROLLMENTS QUERIES
    if (upperQ.includes("INSERT INTO ENROLLMENTS")) {
      const newEnrollment = {
        id: this.data.enrollments.length + 1,
        user_id: Number(params[0]),
        student_id: Number(params[1]),
        course_id: Number(params[2]),
        course_code: params[3],
        enrollment_date: params[4] || new Date().toISOString(),
        status: params[5] || "Active",
        payment_status: params[6] || "Paid",
        progress: Number(params[7]) || 0,
        created_at: new Date().toISOString(),
      };
      this.data.enrollments.push(newEnrollment);
      this.saveToDisk();
      return { rows: [newEnrollment], rowCount: 1 };
    }

    // 7. NOTIFICATIONS QUERIES
    if (upperQ.includes("INSERT INTO NOTIFICATIONS")) {
      const newNotif = {
        id: this.data.notifications.length + 1,
        user_id: Number(params[0]),
        title: params[1],
        message: params[2],
        type: params[3] || "info",
        created_at: new Date().toISOString(),
      };
      this.data.notifications.push(newNotif);
      this.saveToDisk();
      return { rows: [newNotif], rowCount: 1 };
    }

    return { rows: [], rowCount: 0 };
  }
}

const fallbackStore = new FallbackStore();

module.exports = fallbackStore;
