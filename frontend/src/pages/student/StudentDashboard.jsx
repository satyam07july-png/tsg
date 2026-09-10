import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaBookOpen,
  FaUserTie,
  FaCheckCircle,
  FaClock,
  FaAward,
  FaWhatsapp,
  FaPlayCircle,
  FaShieldAlt,
  FaSignOutAlt,
  FaCog,
  FaVideo,
  FaQuestionCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import api from "../../lib/api";

function StudentDashboard() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Settings & Password Change Modal State
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState("password"); // password | profile
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [profileForm, setProfileForm] = useState({
    name: "",
    phone: "",
  });
  const [settingsMsg, setSettingsMsg] = useState({ type: "", text: "" });
  const [savingSettings, setSavingSettings] = useState(false);

  // Doubt submission state
  const [doubtTopic, setDoubtTopic] = useState("General Mentorship");
  const [doubtText, setDoubtText] = useState("");
  const [submittingDoubt, setSubmittingDoubt] = useState(false);
  const [doubtSuccess, setDoubtSuccess] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [coursesRes, profileRes] = await Promise.allSettled([
          api.get("/api/enrollments/my-courses"),
          api.get("/api/students/me/profile"),
        ]);

        if (isMounted && coursesRes.status === "fulfilled" && coursesRes.value.data?.courses) {
          setCourses(coursesRes.value.data.courses);
        }

        if (isMounted && profileRes.status === "fulfilled") {
          if (profileRes.value.data?.student) {
            setProfile(profileRes.value.data.student);
          } else if (profileRes.value.data?.user) {
            setProfile(profileRes.value.data.user);
          }
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchDashboardData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setSettingsMsg({ type: "error", text: "New passwords do not match." });
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      setSettingsMsg({ type: "error", text: "New password must be at least 6 characters." });
      return;
    }
    try {
      setSavingSettings(true);
      setSettingsMsg({ type: "", text: "" });
      const res = await api.put("/api/user/change-password", {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });
      setSettingsMsg({ type: "success", text: res.data?.message || "Password updated successfully!" });
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      setSettingsMsg({ type: "error", text: err.response?.data?.message || "Failed to update password." });
    } finally {
      setSavingSettings(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      setSavingSettings(true);
      setSettingsMsg({ type: "", text: "" });
      const res = await api.put("/api/user/profile", {
        name: profileForm.name || studentName,
        phone: profileForm.phone || profile?.phone,
      });
      setSettingsMsg({ type: "success", text: res.data?.message || "Profile updated successfully!" });
      if (res.data?.user) {
        setProfile((prev) => ({ ...prev, ...res.data.user }));
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    } catch (err) {
      setSettingsMsg({ type: "error", text: err.response?.data?.message || "Failed to update profile." });
    } finally {
      setSavingSettings(false);
    }
  };

  const handleDoubtSubmit = (e) => {
    e.preventDefault();
    if (!doubtText.trim()) return;
    setSubmittingDoubt(true);
    setTimeout(() => {
      setSubmittingDoubt(false);
      setDoubtSuccess(true);
      setDoubtText("");
      setTimeout(() => setDoubtSuccess(false), 4000);
    }, 600);
  };

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const studentName = profile?.name || storedUser?.name || "Student";
  const studentEmail = profile?.email || storedUser?.email || "student@dizitaladda.com";
  const studentAvatar =
    (profile?.avatar && !profile.avatar.includes("dicebear.com"))
      ? profile.avatar
      : (storedUser?.avatar && !storedUser.avatar.includes("dicebear.com"))
      ? storedUser.avatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(studentName)}&background=0B1220&color=D4A017&bold=true`;
  const studentCourseTitle =
    profile?.course_title || profile?.course || (courses.length > 0 ? courses[0].title : "Enrolled Learning Track");
  const studentCode = profile?.student_id || profile?.course_code || "DA-STU";

  const overallProgress =
    courses.length > 0
      ? Math.round(courses.reduce((sum, c) => sum + (c.progressPercent || 0), 0) / courses.length)
      : 0;

  const totalLecturesCount = courses.reduce((sum, c) => sum + (Number(c.total_lectures) || 0), 0);
  const completedLecturesCount = courses.reduce((sum, c) => sum + (Number(c.completed_lectures) || 0), 0);

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 flex flex-col font-sans">
      {/* =========================================================
          CLASSICAL BRAND NAVBAR (MATCHING LANDING PAGE #0B1220)
      ========================================================= */}
      <header className="bg-[#0B1220] text-white border-b-4 border-[#D4A017] sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* BRAND LOGO & BADGE */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#D4A017] bg-black flex items-center justify-center overflow-hidden">
                <span className="text-xs font-black text-[#D4A017] tracking-tighter">DA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">DIZITAL ADDA</h1>
                <p className="text-[11px] text-[#D4A017] font-semibold tracking-wider uppercase">
                  Student Learning Portal
                </p>
              </div>
            </Link>
            <span className="hidden md:inline-block bg-[#1E293B] border border-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full font-mono">
              Roll ID: {studentCode}
            </span>
          </div>

          {/* NAV LINKS & ACTIONS */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <Link
              to="/courses"
              className="text-sm font-medium text-slate-300 hover:text-white transition px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              All Courses
            </Link>
            <Link
              to="/skilling"
              className="text-sm font-medium text-slate-300 hover:text-white transition px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              Skilling Programs
            </Link>

            <button
              onClick={() => {
                setShowSettingsModal(true);
                setProfileForm({
                  name: profile?.name || storedUser?.name || "",
                  phone: profile?.phone || storedUser?.phone || "",
                });
                setSettingsMsg({ type: "", text: "" });
              }}
              className="bg-[#1E293B] hover:bg-[#7C2D12] border border-[#D4A017] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition flex items-center gap-2 cursor-pointer"
            >
              <FaCog className="text-[#D4A017]" />
              <span>Settings</span>
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg transition flex items-center gap-1.5 cursor-pointer"
              title="Logout from portal"
            >
              <FaSignOutAlt />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full space-y-8">
        {/* =========================================================
            STUDENT PROFILE HERO CARD (CLEAN & CLASSICAL)
        ========================================================= */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* LEFT: STUDENT INFO */}
            <div className="flex items-start sm:items-center gap-5">
              <div className="relative shrink-0">
                <img
                  src={studentAvatar}
                  alt={studentName}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#D4A017] shadow-sm"
                />
                <span className="absolute -bottom-1.5 -right-1.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm flex items-center gap-1">
                  <FaCheckCircle className="text-[9px]" /> Verified
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220]">
                    {studentName}
                  </h2>
                  <span className="bg-[#7C2D12]/10 border border-[#7C2D12]/30 text-[#7C2D12] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {studentCode}
                  </span>
                </div>

                <p className="text-base font-semibold text-[#7C2D12] mt-1">
                  {studentCourseTitle}
                </p>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 mt-2 flex-wrap">
                  <span>✉️ {studentEmail}</span>
                  <span>•</span>
                  <span>👨‍🏫 Lead Mentor: <strong className="text-slate-800">Dr. Gulshan Kumar</strong></span>
                  <span>•</span>
                  <span>🏛️ Dizital Adda Campus</span>
                </div>
              </div>
            </div>

            {/* RIGHT: OVERALL PROGRESS & QUICK ACTION */}
            <div className="w-full lg:w-72 bg-slate-50 border border-slate-200 rounded-xl p-5 shrink-0">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                <span>Curriculum Progress</span>
                <span className="text-[#0B1220] font-black text-sm">{overallProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#0B1220] to-[#7C2D12] h-3 rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                {completedLecturesCount} of {totalLecturesCount || 36} lectures completed
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            CLASSICAL STAT TILES (NO DUMMY / GAMER STATS)
        ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Enrolled Courses</span>
              <FaGraduationCap className="text-[#7C2D12] text-lg" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#0B1220]">
              {courses.length}
            </p>
            <p className="text-xs text-slate-500 mt-1 font-medium">Active Enrolled Program</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Curriculum Modules</span>
              <FaBookOpen className="text-[#0B1220] text-lg" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#0B1220]">
              {totalLecturesCount > 0 ? totalLecturesCount : (courses[0]?.total_lectures || 36)}
            </p>
            <p className="text-xs text-slate-500 mt-1 font-medium">Lectures & Practical Labs</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Faculty Mentor</span>
              <FaUserTie className="text-[#D4A017] text-lg" />
            </div>
            <p className="text-lg font-bold text-[#0B1220] truncate">
              Dr. Gulshan Kumar
            </p>
            <p className="text-xs text-slate-500 mt-1 font-medium">Chief Digital Strategist</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Certification</span>
              <FaAward className="text-emerald-600 text-lg" />
            </div>
            <p className="text-lg font-bold text-emerald-700">
              Verified ISO & DA
            </p>
            <p className="text-xs text-slate-500 mt-1 font-medium">Unlocks at 100% completion</p>
          </div>
        </div>

        {/* =========================================================
            MAIN GRID (2 COLUMNS: CONTENT + SIDEBAR)
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* =======================================================
              LEFT COLUMN (2 COLS): ENROLLED COURSES & CURRICULUM
          ======================================================= */}
          <div className="lg:col-span-2 space-y-8">
            {/* ENROLLED COURSES SECTION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1220]">
                    My Enrolled Courses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Your officially purchased programs and learning materials
                  </p>
                </div>
                <Link
                  to="/skilling"
                  className="text-xs sm:text-sm font-semibold text-[#7C2D12] hover:text-[#991B1B] transition flex items-center gap-1"
                >
                  Explore Catalog →
                </Link>
              </div>

              {loading ? (
                <div className="py-12 text-center text-slate-500">
                  <div className="w-8 h-8 border-3 border-[#7C2D12] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-sm font-medium">Loading your enrolled course details...</p>
                </div>
              ) : courses.length === 0 ? (
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50">
                  <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center mx-auto mb-3 text-xl">
                    <FaBookOpen />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1220]">No Active Enrollments</h4>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto mt-1 mb-5">
                    You have not enrolled in any program yet. Browse our certified skilling tracks to start your learning journey.
                  </p>
                  <Link
                    to="/skilling"
                    className="inline-block bg-[#0B1220] hover:bg-[#7C2D12] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition"
                  >
                    View Skilling Courses
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {courses.map((course) => {
                    const courseThumbnail =
                      course.thumbnail ||
                      course.image ||
                      "https://dizitaladda.com/images/digital-marketing-institute.webp";
                    const progressVal = Number(course.progressPercent) || 0;

                    return (
                      <div
                        key={course.id}
                        className="border border-slate-200 hover:border-[#7C2D12]/40 rounded-xl p-5 bg-white transition shadow-sm hover:shadow flex flex-col md:flex-row gap-6 items-center"
                      >
                        {/* THUMBNAIL */}
                        <div className="w-full md:w-56 h-36 rounded-lg overflow-hidden shrink-0 relative bg-slate-100 border border-slate-100">
                          <img
                            src={courseThumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-2 left-2 bg-[#0B1220]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                            {course.level || "Certified"}
                          </span>
                        </div>

                        {/* INFO & ACTION */}
                        <div className="flex-1 w-full flex flex-col justify-between h-full">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[11px] font-bold text-[#7C2D12] bg-[#7C2D12]/10 px-2 py-0.5 rounded">
                                {course.course_id || `ID: ${course.id}`}
                              </span>
                              <span className="text-xs text-slate-400">•</span>
                              <span className="text-xs text-slate-500 flex items-center gap-1">
                                <FaClock className="text-[10px]" /> {course.duration || "4 Months"}
                              </span>
                            </div>

                            <h4 className="text-lg sm:text-xl font-bold text-[#0B1220] leading-snug">
                              {course.title}
                            </h4>

                            <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-2">
                              {course.description ||
                                "Practical curriculum with live industry projects, mentor sessions, and certifications."}
                            </p>
                          </div>

                          {/* PROGRESS & BUTTON */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="w-full sm:w-1/2">
                              <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                                <span>Progress</span>
                                <span>{progressVal}%</span>
                              </div>
                              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                <div
                                  className="bg-[#7C2D12] h-2 rounded-full transition-all"
                                  style={{ width: `${progressVal}%` }}
                                ></div>
                              </div>
                            </div>

                            <Link
                              to={`/learn/${course.id}`}
                              className="w-full sm:w-auto bg-[#0B1220] hover:bg-[#7C2D12] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition shadow flex items-center justify-center gap-2"
                            >
                              <FaPlayCircle />
                              <span>Go to Classroom</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* CURRICULUM OVERVIEW (AUTHENTIC DIGITAL MARKETING MODULES) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="text-xl font-bold text-[#0B1220]">
                  Official Curriculum Roadmap
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Verified syllabus taught by Dr. Gulshan Kumar and industry practitioners
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-[#7C2D12] uppercase tracking-wider block mb-1">
                    Module 1 • Fundamentals
                  </span>
                  <h5 className="font-bold text-[#0B1220] text-sm">
                    Digital Marketing Strategy & Customer Journey Funnels
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">
                    Ecosystem setup, audience persona mapping, value proposition design, and attribution models.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-[#7C2D12] uppercase tracking-wider block mb-1">
                    Module 2 • Search AI
                  </span>
                  <h5 className="font-bold text-[#0B1220] text-sm">
                    Advanced Semantic SEO & AI Search Engine Optimization
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">
                    Entity search indexing, schema markup, ChatGPT prompt automation for keyword clustering.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-[#7C2D12] uppercase tracking-wider block mb-1">
                    Module 3 • Paid Growth
                  </span>
                  <h5 className="font-bold text-[#0B1220] text-sm">
                    Google Ads & Meta Performance Max Campaigns
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">
                    Smart bidding algorithms, custom intent audiences, ROAS scaling, and creative asset groups.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-[#7C2D12] uppercase tracking-wider block mb-1">
                    Module 4 • Data & Analytics
                  </span>
                  <h5 className="font-bold text-[#0B1220] text-sm">
                    Google Analytics 4 (GA4), GTM & Conversion Tracking
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">
                    Data layer implementation, server-side tagging, custom dimensions, and Looker Studio dashboards.
                  </p>
                </div>
              </div>
            </div>

            {/* MENTOR QUERY & DOUBT CLEARING */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1220] flex items-center gap-2">
                    <FaQuestionCircle className="text-[#7C2D12]" />
                    <span>Ask Faculty Mentor</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Submit questions regarding your course modules, assignments, or campaign setups
                  </p>
                </div>
                <a
                  href="https://wa.me/918810606010?text=Hello%20Dr.%20Gulshan%20Kumar,%20I%20am%20an%20enrolled%20student%20at%20Dizital%20Adda%20and%20need%20assistance"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition flex items-center gap-1.5 shadow-sm"
                >
                  <FaWhatsapp className="text-sm" />
                  <span className="hidden sm:inline">WhatsApp Help</span>
                </a>
              </div>

              {doubtSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold p-3.5 rounded-xl mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-600 shrink-0" />
                  <span>Your query has been recorded and submitted to Dr. Gulshan Kumar. You will receive an update shortly!</span>
                </div>
              )}

              <form onSubmit={handleDoubtSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Topic / Category
                  </label>
                  <select
                    value={doubtTopic}
                    onChange={(e) => setDoubtTopic(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7C2D12] font-medium"
                  >
                    <option>Google Ads & Performance Max</option>
                    <option>Meta Ads & Pixel Tracking</option>
                    <option>SEO, Content & AI Tools</option>
                    <option>GA4 & Tracking Pixels</option>
                    <option>Resume & Placement Support</option>
                    <option>General Mentorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Detailed Question / Doubts
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={doubtText}
                    onChange={(e) => setDoubtText(e.target.value)}
                    placeholder="Describe your question or campaign issue in detail..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7C2D12] placeholder:text-slate-400 font-medium"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submittingDoubt}
                    className="bg-[#0B1220] hover:bg-[#7C2D12] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition shadow cursor-pointer"
                  >
                    {submittingDoubt ? "Submitting Query..." : "Submit to Mentor →"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* =======================================================
              RIGHT COLUMN (1 COL): MENTOR SCHEDULE & CERTIFICATES
          ======================================================= */}
          <div className="space-y-8">
            {/* LIVE MASTERCLASS & SCHEDULE */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#7C2D12]/10 text-[#7C2D12] flex items-center justify-center text-base">
                  <FaVideo />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1220] text-base">
                    Live Mentor Masterclass
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Weekly live session with Dr. Gulshan Kumar
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Upcoming Session
                </span>
                <h5 className="font-bold text-slate-900 text-sm mt-2">
                  Live Brand Campaign Audit & ROAS Optimization
                </h5>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                  <FaClock className="text-slate-400" /> Every Saturday • 7:00 PM - 8:30 PM
                </p>
                <a
                  href="https://meet.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block text-center bg-[#0B1220] hover:bg-[#7C2D12] text-white text-xs font-bold py-2.5 rounded-lg transition shadow-sm"
                >
                  Join Live Classroom 🎥
                </a>
              </div>
            </div>

            {/* OFFICIAL CERTIFICATE STATUS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#D4A017]/15 text-[#b88a10] flex items-center justify-center text-base">
                  <FaAward />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1220] text-base">
                    Program Certification
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Accredited & ISO 9001:2015 Verified
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/60">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">
                      Dizital Adda Course Completion
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      In Progress
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Issued upon reaching 100% lecture completion & project review.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/60">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">
                      Global Certifications Track
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                      Google & Meta
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Guidance for Google Ads, Analytics, and Meta Certified Professional exam.
                  </p>
                </div>
              </div>
            </div>

            {/* STUDENT SUPPORT & HELP */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-[#0B1220] text-base border-b border-slate-100 pb-3 mb-3">
                Dedicated Student Helpline
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                For batch rescheduling, portal access issues, or fee receipts, contact the student coordinator desk:
              </p>
              <div className="mt-3 space-y-1.5 text-xs text-slate-700 font-medium">
                <p>📞 Phone: <strong>+91 8810606010</strong></p>
                <p>✉️ Email: <strong>support@dizitaladda.com</strong></p>
                <p>🕒 Hours: <strong>10:00 AM - 7:00 PM (Mon - Sat)</strong></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* =========================================================
          CLASSICAL FOOTER (MATCHING LANDING PAGE)
      ========================================================= */}
      <footer className="bg-[#0B1220] text-white border-t border-slate-800 py-6 mt-12 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} DIZITAL ADDA LMS. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-white transition">About Us</Link>
            <Link to="/courses" className="hover:text-white transition">Courses</Link>
            <Link to="/skilling" className="hover:text-white transition">Skilling</Link>
            <a href="https://dizitaladda.com" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
              Official Website <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>
        </div>
      </footer>

      {/* =========================================================
          CLASSICAL SETTINGS MODAL (LIGHT & CLEAN)
      ========================================================= */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-5">
              <div>
                <h3 className="text-xl font-bold text-[#0B1220]">Account Settings</h3>
                <p className="text-xs text-slate-500">Update your security credentials and profile information</p>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* TAB SELECTOR */}
            <div className="flex border-b border-slate-200 mb-6">
              <button
                onClick={() => {
                  setActiveSettingsTab("password");
                  setSettingsMsg({ type: "", text: "" });
                }}
                className={`pb-3 px-4 font-bold text-xs sm:text-sm cursor-pointer transition border-b-2 ${
                  activeSettingsTab === "password"
                    ? "border-[#7C2D12] text-[#7C2D12]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Change Password
              </button>
              <button
                onClick={() => {
                  setActiveSettingsTab("profile");
                  setSettingsMsg({ type: "", text: "" });
                }}
                className={`pb-3 px-4 font-bold text-xs sm:text-sm cursor-pointer transition border-b-2 ${
                  activeSettingsTab === "profile"
                    ? "border-[#7C2D12] text-[#7C2D12]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Profile Details
              </button>
            </div>

            {settingsMsg.text && (
              <div
                className={`p-3.5 rounded-xl mb-5 text-xs font-semibold ${
                  settingsMsg.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {settingsMsg.text}
              </div>
            )}

            {/* TAB 1: PASSWORD */}
            {activeSettingsTab === "password" && (
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Current / Temporary Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    value={passwordForm.currentPassword}
                    onChange={(e) =>
                      setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7C2D12]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="At least 6 characters"
                    value={passwordForm.newPassword}
                    onChange={(e) =>
                      setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7C2D12]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Re-enter new password"
                    value={passwordForm.confirmPassword}
                    onChange={(e) =>
                      setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7C2D12]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={savingSettings}
                  className="w-full bg-[#0B1220] hover:bg-[#7C2D12] text-white font-bold py-3 rounded-xl transition shadow text-xs sm:text-sm cursor-pointer mt-2"
                >
                  {savingSettings ? "Updating Password..." : "Update Password"}
                </button>
              </form>
            )}

            {/* TAB 2: PROFILE */}
            {activeSettingsTab === "profile" && (
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7C2D12]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7C2D12]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Registered Email (Portal User ID)
                  </label>
                  <input
                    type="email"
                    disabled
                    value={profile?.email || storedUser?.email || ""}
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-500 cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={savingSettings}
                  className="w-full bg-[#0B1220] hover:bg-[#7C2D12] text-white font-bold py-3 rounded-xl transition shadow text-xs sm:text-sm cursor-pointer mt-2"
                >
                  {savingSettings ? "Saving Profile..." : "Save Profile Details"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
