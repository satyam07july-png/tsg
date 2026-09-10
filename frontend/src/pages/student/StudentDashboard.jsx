import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../lib/api";

function StudentDashboard() {
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

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const studentName = profile?.name || storedUser?.name || "Student";
  const studentAvatar = profile?.avatar || storedUser?.avatar || "https://i.pravatar.cc/300?img=12";
  const studentCourseTitle =
    profile?.course_title || profile?.course || (courses.length > 0 ? courses[0].title : "Tech & Marketing Track");
  const studentCode = profile?.student_id || profile?.course_code || "DA-STU";

  const overallProgress = courses.length > 0
    ? Math.round(courses.reduce((sum, c) => sum + (c.progressPercent || 0), 0) / courses.length)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black p-10">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden rounded-[40px] bg-white/10 backdrop-blur-2xl border border-white/10 p-10 shadow-2xl">
        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          {/* TOP */}
          <div className="flex justify-between items-center">
            {/* LEFT */}
            <div className="flex items-center gap-8">
              <div className="relative">
                <img
                  src={studentAvatar}
                  alt={studentName}
                  className="w-36 h-36 rounded-full object-cover border-[5px] border-white shadow-2xl"
                />
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-white animate-pulse"></div>
              </div>

              <div>
                <h1 className="text-6xl font-black text-white">
                  {studentName}
                </h1>

                <p className="text-blue-200 text-2xl mt-3">
                  {studentCourseTitle} 🚀
                </p>

                <p className="text-slate-300 text-lg mt-4 max-w-2xl leading-8">
                  Enrolled in official industry programs. Mastering high-demand tech and marketing skills with DIZITAL ADDA.
                </p>

                {/* BADGES & SETTINGS */}
                <div className="flex gap-4 mt-8 flex-wrap items-center">
                  <span className="bg-blue-500/20 border border-blue-400/20 text-blue-200 px-5 py-3 rounded-2xl font-semibold">
                    👨‍🎓 {studentCode}
                  </span>

                  <span className="bg-purple-500/20 border border-purple-400/20 text-purple-200 px-5 py-3 rounded-2xl font-semibold">
                    ⚡ Verified Student
                  </span>

                  <span className="bg-emerald-500/20 border border-emerald-400/20 text-emerald-200 px-5 py-3 rounded-2xl font-semibold">
                    🔥 Active Status
                  </span>

                  <button
                    onClick={() => {
                      setShowSettingsModal(true);
                      setProfileForm({
                        name: profile?.name || storedUser?.name || "",
                        phone: profile?.phone || storedUser?.phone || "",
                      });
                      setSettingsMsg({ type: "", text: "" });
                    }}
                    className="bg-white/15 hover:bg-white/25 border border-white/20 text-white px-5 py-3 rounded-2xl font-semibold transition flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    ⚙️ Change Password & Profile
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-right">
              <h2 className="text-slate-300 text-xl">
                Overall Progress
              </h2>

              <p className="text-8xl font-black text-white mt-5">
                {overallProgress}%
              </p>

              <p className="text-blue-200 mt-4 text-xl">
                Keep Growing 🚀
              </p>
            </div>
          </div>

          {/* MINI STATS */}
          <div className="grid grid-cols-4 gap-6 mt-12">

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-7">

              <h2 className="text-slate-300">

                Learning Streak

              </h2>

              <p className="text-5xl font-black text-white mt-4">

                18🔥

              </p>

            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-7">

              <h2 className="text-slate-300">

                XP Earned

              </h2>

              <p className="text-5xl font-black text-white mt-4">

                12.5K

              </p>

            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-7">

              <h2 className="text-slate-300">

                Rank

              </h2>

              <p className="text-5xl font-black text-white mt-4">

                #4

              </p>

            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-7">

              <h2 className="text-slate-300">

                Achievements

              </h2>

              <p className="text-5xl font-black text-white mt-4">

                🏆

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-3 gap-10 mt-12">

        {/* LEFT */}

        <div className="col-span-2 space-y-10">

          {/* COURSES */}

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl">

            <div className="flex justify-between items-center">

              <h1 className="text-4xl font-black text-white">

                Continue Learning

              </h1>

              <Link to="/skilling" className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 transition px-6 py-3 rounded-2xl">
                Explore More
              </Link>
            </div>

            <div className="space-y-8 mt-10">
              {loading ? (
                <div className="py-12 text-center text-slate-300">
                  <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p>Loading your courses...</p>
                </div>
              ) : courses.length === 0 ? (
                <div className="bg-black/30 border border-white/10 rounded-[35px] p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-3xl mx-auto mb-4">
                    📚
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    No Courses Enrolled Yet
                  </h3>
                  <p className="text-slate-300 mt-2 max-w-md mx-auto">
                    You have not enrolled in any programs yet. Browse our industry-recognized skilling programs to start learning immediately!
                  </p>
                  <Link
                    to="/skilling"
                    className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl hover:scale-105 transition"
                  >
                    Browse Skilling Programs 🚀
                  </Link>
                </div>
              ) : (
                courses.map((course) => {
                  const courseThumbnail =
                    course.thumbnail ||
                    course.image ||
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
                  const progressVal = Number(course.progressPercent) || 0;

                  return (
                    <div
                      key={course.id}
                      className="bg-black/20 border border-white/10 rounded-[35px] p-6 flex flex-col md:flex-row gap-8 items-center hover:border-blue-500/40 transition"
                    >
                      <img
                        src={courseThumbnail}
                        alt={course.title}
                        className="w-full md:w-72 h-52 object-cover rounded-3xl"
                      />

                      <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg border border-blue-400/20">
                                {course.course_id || `ID: ${course.id}`}
                              </span>
                              {course.level && (
                                <span className="text-xs font-semibold text-slate-400">
                                  • {course.level}
                                </span>
                              )}
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                              {course.title}
                            </h2>

                            <p className="text-slate-300 mt-4 text-base">
                              Mentor: <span className="font-semibold text-white">{course.teacher || "Dr. Gulshan Kumar"}</span>
                            </p>

                            <p className="text-blue-200 mt-1 text-base">
                              Lectures:{" "}
                              <span className="font-semibold">
                                {course.completed_lectures || 0} / {course.total_lectures || 0} Completed
                              </span>
                            </p>

                            <p className="text-slate-400 mt-1 text-sm">
                              Duration: {course.duration || "Self-Paced Track"}
                            </p>
                          </div>

                          <Link
                            to={`/learn/${course.id}`}
                            className="w-full md:w-auto text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition shrink-0"
                          >
                            Continue to Course 🚀
                          </Link>
                        </div>

                        {/* PROGRESS */}
                        <div className="mt-8">
                          <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-400 to-cyan-300 h-4 rounded-full transition-all duration-500"
                              style={{
                                width: `${progressVal}%`,
                              }}
                            ></div>
                          </div>

                          <p className="text-slate-300 mt-3 text-sm font-semibold">
                            {progressVal}% Completed
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* ASSIGNMENTS & TESTS */}

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl">

            <div className="flex justify-between items-center">

              <h1 className="text-4xl font-black text-white">

                Assignments & Tests

              </h1>

              <button className="bg-purple-500/20 text-purple-200 px-6 py-3 rounded-2xl">

                Open Workspace

              </button>

            </div>

            <div className="grid grid-cols-2 gap-8 mt-10">

              <div className="bg-black/20 border border-white/10 rounded-3xl p-7">

                <h2 className="text-3xl font-bold text-white">

                  React Dashboard UI

                </h2>

                <p className="text-slate-300 mt-4">

                  Due Tomorrow

                </p>

                <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold">

                  Submit Assignment

                </button>

              </div>

              <div className="bg-black/20 border border-white/10 rounded-3xl p-7">

                <h2 className="text-3xl font-bold text-white">

                  JavaScript Quiz

                </h2>

                <p className="text-slate-300 mt-4">

                  25 Questions • 30 Minutes

                </p>

                <button className="mt-8 bg-purple-500 text-white px-6 py-3 rounded-2xl font-semibold">

                  Start Test

                </button>

              </div>

            </div>

          </div>

          {/* DOUBT SECTION */}

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl">

            <div className="flex justify-between items-center">

              <div>

                <h1 className="text-4xl font-black text-white">

                  Ask Your Mentor 👨‍🏫

                </h1>

                <p className="text-slate-300 mt-3 text-lg">

                  Ask doubts related to your course and get answers from your teacher.

                </p>

              </div>

              <button className="bg-blue-500/20 text-blue-200 px-6 py-3 rounded-2xl">

                Live Support

              </button>

            </div>

            {/* INPUT */}

            <div className="mt-10">

              <textarea
                placeholder="Ask your doubt here..."
                rows="5"
                className="w-full bg-black/20 border border-white/10 rounded-3xl p-6 text-white placeholder:text-slate-400 outline-none text-lg"
              ></textarea>

              <div className="flex gap-5 mt-6">

                <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-2xl font-bold shadow-xl">

                  Submit Doubt

                </button>

                <button className="bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold">

                  Upload Screenshot

                </button>

              </div>

            </div>

            {/* PREVIOUS DOUBTS */}

            <div className="mt-14">

              <div className="flex justify-between items-center">

                <h1 className="text-3xl font-black text-white">

                  Previous Doubts

                </h1>

                <span className="bg-purple-500/20 text-purple-200 px-5 py-2 rounded-2xl">

                  3 Questions

                </span>

              </div>

              <div className="space-y-6 mt-8">

                {/* PENDING */}

                <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-2xl font-bold text-white">

                        How does useEffect work in React?

                      </h2>

                      <p className="text-slate-400 mt-3">

                        Asked 2 Hours Ago

                      </p>

                    </div>

                    <span className="bg-yellow-500 text-black px-5 py-2 rounded-2xl font-bold">

                      Pending

                    </span>

                  </div>

                </div>

                {/* ANSWERED */}

                <div className="bg-black/20 border border-emerald-400/20 rounded-3xl p-6">

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-2xl font-bold text-white">

                        Difference between props and state?

                      </h2>

                      <p className="text-slate-400 mt-3">

                        Asked Yesterday

                      </p>

                    </div>

                    <span className="bg-emerald-500 text-white px-5 py-2 rounded-2xl font-bold">

                      Answered

                    </span>

                  </div>

                  {/* ANSWER */}

                  <div className="mt-6 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl p-5">

                    <h3 className="text-emerald-300 font-bold text-lg">

                      Teacher Reply 👨‍🏫

                    </h3>

                    <p className="text-slate-200 mt-3 leading-8">

                      Props are used to pass data between components while state is used to manage dynamic data inside a component.

                    </p>
                    
                  </div>

                </div>

              </div>
     
            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}

        <div className="space-y-10">

          {/* DAILY GOAL */}

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[40px] p-8 shadow-2xl text-white">

            <h1 className="text-4xl font-black">

              Daily Goal 🎯

            </h1>

            <p className="mt-5 text-lg leading-8">

              Complete 2 lessons today.

            </p>

            <div className="w-full bg-white/20 rounded-full h-5 mt-8 overflow-hidden">

              <div
                className="bg-white h-5 rounded-full"
                style={{ width: "60%" }}
              ></div>

            </div>

            <p className="mt-4 text-lg">

              60% Completed

            </p>

          </div>

          {/* CERTIFICATES */}

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl">

            <h1 className="text-3xl font-black text-white">

              Certificates 🏆

            </h1>

            <div className="space-y-5 mt-8">

              <div className="bg-black/20 border border-white/10 rounded-2xl p-5">

                <h2 className="text-white text-xl font-bold">

                  HTML & CSS Mastery

                </h2>

                <p className="text-slate-400 mt-2">

                  Completed Successfully

                </p>

              </div>

              <div className="bg-black/20 border border-white/10 rounded-2xl p-5">

                <h2 className="text-white text-xl font-bold">

                  JavaScript Bootcamp

                </h2>

                <p className="text-slate-400 mt-2">

                  Completed Successfully

                </p>

              </div>

            </div>

          </div>

          {/* LIVE CLASSES */}

          <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-[40px] p-8 shadow-2xl text-white">

            <h1 className="text-3xl font-black">

              Live Classes 🎥

            </h1>

            <p className="mt-5 text-lg leading-8">

              Join your upcoming live mentor sessions and workshops.

            </p>

            <button className="mt-8 bg-white text-purple-700 px-6 py-4 rounded-2xl font-black w-full">

              Join Live Session

            </button>

          </div>

        </div>

      </div>

      {/* ========================================================
          ACCOUNT & PASSWORD SETTINGS MODAL
      ======================================================== */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-8 shadow-2xl relative text-white">
            <button
              onClick={() => setShowSettingsModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white font-bold text-xl cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A017] block">
                Security & Preferences
              </span>
              <h3 className="text-2xl font-black mt-1">
                Account & Password Settings
              </h3>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-800 mb-6">
              <button
                type="button"
                onClick={() => {
                  setActiveSettingsTab("password");
                  setSettingsMsg({ type: "", text: "" });
                }}
                className={`pb-3 px-4 font-bold text-sm cursor-pointer transition border-b-2 ${
                  activeSettingsTab === "password"
                    ? "border-[#D4A017] text-white"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                Change Password
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveSettingsTab("profile");
                  setSettingsMsg({ type: "", text: "" });
                }}
                className={`pb-3 px-4 font-bold text-sm cursor-pointer transition border-b-2 ${
                  activeSettingsTab === "profile"
                    ? "border-[#D4A017] text-white"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                Profile Details
              </button>
            </div>

            {settingsMsg.text && (
              <div
                className={`p-3.5 rounded-xl mb-5 text-xs font-semibold ${
                  settingsMsg.type === "success"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-red-500/20 text-red-300 border border-red-500/40"
                }`}
              >
                {settingsMsg.text}
              </div>
            )}

            {/* TAB 1: CHANGE PASSWORD */}
            {activeSettingsTab === "password" && (
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Current / Temporary Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    value={passwordForm.currentPassword}
                    onChange={(e) =>
                      setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
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
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
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
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={savingSettings}
                  className="w-full bg-[#D4A017] hover:bg-[#b88a10] text-[#0B1220] font-black py-3.5 rounded-xl transition shadow-lg mt-2 text-sm cursor-pointer"
                >
                  {savingSettings ? "Updating Password..." : "Update Password 🚀"}
                </button>
              </form>
            )}

            {/* TAB 2: PROFILE DETAILS */}
            {activeSettingsTab === "profile" && (
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Email Address (Portal ID)
                  </label>
                  <input
                    type="email"
                    disabled
                    value={profile?.email || storedUser?.email || ""}
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-400 cursor-not-allowed"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Contact admin to change your registered email address.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={savingSettings}
                  className="w-full bg-[#D4A017] hover:bg-[#b88a10] text-[#0B1220] font-black py-3.5 rounded-xl transition shadow-lg mt-2 text-sm cursor-pointer"
                >
                  {savingSettings ? "Saving Profile..." : "Save Profile Changes ✅"}
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