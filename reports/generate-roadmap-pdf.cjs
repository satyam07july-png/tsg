const fs = require("fs");
const path = require("path");
const { jsPDF } = require("../frontend/node_modules/jspdf");

const outputPath = path.join(__dirname, "Dizital-Adda-LMS-Production-Roadmap.pdf");

const roadmap = [
  {
    title: "Production Roadmap Summary",
    body: [
      "Goal: convert the current LMS prototype into a secure, reliable, production-ready LMS.",
      "Fastest safe order: Authentication, Database, Course Management, Payment Verification, Enrollment, Learning Progress, Dashboards, Assignments, Quizzes, Certificates, Security, Testing, Deployment.",
      "Estimated timeline: 8 weeks for a focused production push.",
    ],
  },
  {
    title: "Phase 1: Stabilize Foundation",
    items: [
      "Use one backend entrypoint. Merge backend/src/app.js and backend/src/server.js into one runtime server.",
      "Move all secrets to environment variables. Remove hardcoded JWT secrets, Razorpay test keys, and broken URLs.",
      "Create .env.example for backend and frontend.",
      "Create one frontend API client using VITE_API_URL.",
      "Fix malformed URLs like http://https://https://...",
      "Mount all required backend routes in the real server file.",
    ],
  },
  {
    title: "Phase 2: Database First",
    items: [
      "Add migration files for all production tables.",
      "Create users, courses, categories, sections, lectures, enrollments, orders, payments, progress, assignments, quizzes, certificates, reviews, notifications, attendance, and audit_logs.",
      "Add foreign keys between users, courses, enrollments, payments, lectures, and progress.",
      "Add unique constraints for user email, student ID, order ID, payment ID, and certificate code.",
      "Add created_at and updated_at fields to every major table.",
      "Seed one admin user safely using a hashed password.",
    ],
  },
  {
    title: "Phase 3: Authentication And Security",
    items: [
      "Fix JWT signing and verification to use the same JWT_SECRET.",
      "Hash every password, including student-created passwords.",
      "Protect every admin API with verifyToken and checkRole('admin').",
      "Protect teacher APIs with teacher ownership checks.",
      "Protect student APIs so students can only access their own data.",
      "Add validation middleware for login, courses, lectures, payments, assignments, and quizzes.",
      "Add Helmet, rate limiting, strict CORS, body limits, and centralized error handling.",
    ],
  },
  {
    title: "Phase 4: Course, Section, Lecture System",
    items: [
      "Complete course CRUD with title, description, price, category, teacher, thumbnail, status, duration, and level.",
      "Add publish/unpublish status for courses.",
      "Create sections linked to courses.",
      "Create lectures linked to sections.",
      "Upload videos and PDFs to Cloudinary or another production storage provider.",
      "Save secure video/PDF URLs in the lectures table.",
      "Block lecture access for users who are not enrolled.",
    ],
  },
  {
    title: "Phase 5: Payment And Enrollment",
    items: [
      "Create backend Razorpay order API.",
      "Store order records before checkout.",
      "Verify Razorpay signature on backend after payment.",
      "Add Razorpay webhook for reliable payment confirmation.",
      "Store payment ID, order ID, amount, currency, status, user ID, and course ID.",
      "Create enrollment only after verified payment success.",
      "Show payment history in student and admin portals.",
    ],
  },
  {
    title: "Phase 6: Student Portal",
    items: [
      "Show enrolled courses from real enrollments.",
      "Build continue learning from latest lecture progress.",
      "Add video player with lecture list and PDF notes.",
      "Add mark-as-complete API for lectures.",
      "Show course progress percentage.",
      "Show assignments, quizzes, certificates, and payment history.",
      "Allow student profile and password update.",
    ],
  },
  {
    title: "Phase 7: Teacher Portal",
    items: [
      "Show only courses assigned to the logged-in teacher.",
      "Allow teacher to create sections and lectures for own courses.",
      "Allow teacher to create assignments and quizzes.",
      "Show student submissions and quiz attempts.",
      "Allow grading and feedback.",
      "Allow teacher to reply to doubts.",
      "Prevent teacher from accessing another teacher's course data.",
    ],
  },
  {
    title: "Phase 8: Admin Portal",
    items: [
      "Create real admin dashboard analytics from database queries.",
      "Manage students, teachers, courses, categories, enrollments, and payments.",
      "Add block/unblock user controls.",
      "Add course approval and featured course controls.",
      "Add payment reports with date/status filters.",
      "Add CSV/PDF export from real backend data.",
      "Add audit logs for all admin actions.",
    ],
  },
  {
    title: "Phase 9: Assignments, Quizzes, Certificates",
    items: [
      "Assignments: teacher creates, student submits, teacher grades, student sees feedback.",
      "Quizzes: teacher creates quiz and questions, student attempts, backend calculates score.",
      "Progress: include lecture completion, assignment status, and quiz score.",
      "Certificates: generate only after payment verified and course requirements completed.",
      "Certificate verification: public verify endpoint and page using unique certificate code.",
    ],
  },
  {
    title: "Phase 10: Production Quality",
    items: [
      "Fix all ESLint errors.",
      "Remove unused imports, undefined handlers, static dashboard numbers, and debug alerts.",
      "Add backend tests for auth, RBAC, courses, payments, enrollments, and progress.",
      "Add frontend tests for login, protected routes, course purchase, and learning flow.",
      "Add structured logging and monitoring.",
      "Add database backup and restore strategy.",
      "Add CI pipeline for lint, build, and tests.",
    ],
  },
  {
    title: "Recommended 8 Week Timeline",
    items: [
      "Week 1: architecture cleanup, env, JWT, RBAC, database schema.",
      "Week 2: course, category, section, lecture, file upload.",
      "Week 3: Razorpay order, payment verification, webhooks, enrollment.",
      "Week 4: student dashboard, learning page, progress tracking.",
      "Week 5: teacher portal and admin portal real data.",
      "Week 6: assignments, quizzes, certificates.",
      "Week 7: validation, security hardening, tests, lint cleanup.",
      "Week 8: deployment, QA, monitoring, backups, final production checklist.",
    ],
  },
  {
    title: "Immediate Top 20 Tasks",
    items: [
      "1. Merge backend entrypoints.",
      "2. Fix JWT secret mismatch.",
      "3. Protect admin routes.",
      "4. Add database migrations.",
      "5. Hash all passwords.",
      "6. Fix frontend API URLs.",
      "7. Create frontend API client.",
      "8. Complete course CRUD.",
      "9. Complete sections and lectures.",
      "10. Add secure file upload.",
      "11. Implement payment order storage.",
      "12. Verify Razorpay signatures.",
      "13. Create enrollment after verified payment.",
      "14. Implement lecture progress updates.",
      "15. Replace static dashboards with real APIs.",
      "16. Complete teacher course ownership checks.",
      "17. Complete assignments.",
      "18. Complete quizzes.",
      "19. Complete certificates.",
      "20. Fix lint, tests, deployment, monitoring.",
    ],
  },
];

const doc = new jsPDF({ unit: "pt", format: "a4" });
const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 46;
const contentWidth = pageWidth - margin * 2;
let y = margin;

const footer = () => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text(
    `Dizital Adda LMS Production Roadmap | Page ${doc.internal.getNumberOfPages()}`,
    margin,
    pageHeight - 24
  );
};

const newPageIfNeeded = (height) => {
  if (y + height > pageHeight - 54) {
    footer();
    doc.addPage();
    y = margin;
  }
};

const writeText = (text, options = {}) => {
  const fontSize = options.fontSize || 10;
  const lineHeight = options.lineHeight || 14;
  const indent = options.indent || 0;
  const lines = doc.splitTextToSize(text, contentWidth - indent);
  newPageIfNeeded(lines.length * lineHeight + 8);
  doc.setFont("helvetica", options.bold ? "bold" : "normal");
  doc.setFontSize(fontSize);
  doc.setTextColor(35, 35, 35);
  doc.text(lines, margin + indent, y);
  y += lines.length * lineHeight + (options.after || 6);
};

doc.setFillColor(11, 18, 32);
doc.rect(0, 0, pageWidth, 132, "F");
doc.setTextColor(255, 255, 255);
doc.setFont("helvetica", "bold");
doc.setFontSize(24);
doc.text("Dizital Adda LMS", margin, 54);
doc.setFontSize(16);
doc.text("Production Completion Roadmap", margin, 84);
doc.setFont("helvetica", "normal");
doc.setFontSize(10);
doc.text(`Generated on ${new Date().toLocaleDateString("en-IN")}`, margin, 108);
y = 158;

roadmap.forEach((section) => {
  newPageIfNeeded(42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(11, 18, 32);
  doc.text(section.title, margin, y);
  y += 22;

  if (section.body) {
    section.body.forEach((paragraph) => writeText(paragraph, { fontSize: 10, lineHeight: 14, after: 8 }));
  }

  if (section.items) {
    section.items.forEach((item) => writeText(`- ${item}`, { fontSize: 9.5, lineHeight: 13, indent: 10, after: 3 }));
  }

  y += 10;
});

footer();
fs.writeFileSync(outputPath, Buffer.from(doc.output("arraybuffer")));
console.log(outputPath);
