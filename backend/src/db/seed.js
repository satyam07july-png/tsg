const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const envPaths = [
  path.join(__dirname, "..", ".env"),
  path.join(__dirname, "..", "..", ".env"),
  path.join(__dirname, "..", "..", "..", ".env"),
];

for (const envPath of envPaths) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
  }
}

const pool = require("../config/db");

async function seedDatabase() {
  console.log("Seeding Dizital Adda LMS database...");

  if (!process.env.DATABASE_URL) {
    console.error("Error: DATABASE_URL is not set!");
    process.exit(1);
  }

  try {
    const adminPassword = await bcrypt.hash("Admin@12345", 10);
    const teacherPassword = await bcrypt.hash("Teacher@12345", 10);
    const studentPassword = await bcrypt.hash("Student@12345", 10);

    // 1. Seed Admin
    const adminRes = await pool.query(
      `INSERT INTO users (name, full_name, email, password, role, phone, specialization)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (email) DO UPDATE SET password = EXCLUDED.password
       RETURNING id, email, role`,
      [
        "System Admin",
        "System Admin",
        "admin@dizitaladda.com",
        adminPassword,
        "admin",
        "+919876543210",
        "LMS Administration",
      ]
    );
    console.log("Admin seeded:", adminRes.rows[0]);

    // 2. Seed Teacher
    const teacherRes = await pool.query(
      `INSERT INTO users (name, full_name, email, password, role, phone, specialization)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (email) DO UPDATE SET password = EXCLUDED.password
       RETURNING id, email, role`,
      [
        "Er. Rahul Verma",
        "Er. Rahul Verma",
        "teacher@dizitaladda.com",
        teacherPassword,
        "teacher",
        "+919876543211",
        "Full Stack Web Development",
      ]
    );
    console.log("Teacher seeded:", teacherRes.rows[0]);

    // 3. Seed Student
    const studentRes = await pool.query(
      `INSERT INTO users (name, full_name, email, password, role, phone)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (email) DO UPDATE SET password = EXCLUDED.password
       RETURNING id, email, role`,
      [
        "Aman Sharma",
        "Aman Sharma",
        "student@dizitaladda.com",
        studentPassword,
        "student",
        "+919876543212",
      ]
    );
    console.log("Student user seeded:", studentRes.rows[0]);

    // Also link student profile in students table
    await pool.query(
      `INSERT INTO students (user_id, student_id, name, email, password, phone, course, teacher, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       ON CONFLICT (student_id) DO NOTHING`,
      [
        studentRes.rows[0].id,
        "STU-1001",
        "Aman Sharma",
        "student@dizitaladda.com",
        studentPassword,
        "+919876543212",
        "Full Stack Web Development",
        "Er. Rahul Verma",
        "Active",
      ]
    );

    // 4. Seed Course
    const courseRes = await pool.query(
      `INSERT INTO courses (title, description, price, original_price, duration, level, category, teacher, teacher_id, thumbnail, is_published)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING id, title`,
      [
        "Mastering Modern MERN Full-Stack Development",
        "Complete industry-ready full stack web development covering React, Node.js, Express, and PostgreSQL.",
        4999,
        9999,
        "12 Weeks",
        "Intermediate",
        "Web Development",
        "Er. Rahul Verma",
        teacherRes.rows[0].id,
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
        true,
      ]
    );
    const courseId = courseRes.rows[0].id;
    console.log("Course seeded:", courseRes.rows[0]);

    // 5. Seed Section
    const sectionRes = await pool.query(
      `INSERT INTO sections (course_id, title, order_num)
       VALUES ($1, $2, $3)
       RETURNING id, title`,
      [courseId, "Module 1: Introduction to Full Stack Architecture", 1]
    );
    const sectionId = sectionRes.rows[0].id;

    // 6. Seed Lectures
    await pool.query(
      `INSERT INTO lectures (course_id, section_id, title, description, video_url, pdf_url, duration, order_num, is_free_preview)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        courseId,
        sectionId,
        "1.1 Course Overview and Architecture",
        "Welcome to the complete full stack course. Here is what we will build.",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "15m",
        1,
        true,
      ]
    );

    await pool.query(
      `INSERT INTO lectures (course_id, section_id, title, description, video_url, pdf_url, duration, order_num, is_free_preview)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        courseId,
        sectionId,
        "1.2 Setting Up Modern Development Environment",
        "Configuring Node, Vite, Git, and VS Code for production development.",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "22m",
        2,
        false,
      ]
    );

    console.log("Database seeded successfully! 🎉");
    process.exit(0);
  } catch (error) {
    console.error("Seeding Failed! ❌", error);
    process.exit(1);
  }
}

if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
