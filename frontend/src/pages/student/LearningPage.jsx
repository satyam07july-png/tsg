import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import {
  FaPlayCircle,
  FaCheckCircle,
  FaArrowLeft,
  FaFilePdf,
  FaSignOutAlt,
  FaClock,
  FaBookOpen,
  FaChalkboardTeacher,
  FaExternalLinkAlt,
  FaWhatsapp,
} from "react-icons/fa";
import api from "../../lib/api";

const LearningPage = () => {
  const navigate = useNavigate();
  const { id: courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [marking, setMarking] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // overview | notes | doubts

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const fetchCourseAndLectures = useCallback(async () => {
    try {
      const endpoint = courseId
        ? `/api/lectures?courseId=${courseId}`
        : "/api/lectures";

      const [lecRes, courseRes] = await Promise.allSettled([
        api.get(endpoint),
        courseId ? api.get(`/api/courses/${courseId}`) : Promise.reject(),
      ]);

      if (lecRes.status === "fulfilled") {
        const lectureData = lecRes.value.data?.lectures || lecRes.value.data || [];
        setLectures(lectureData);
        if (lectureData.length > 0) {
          setSelectedLecture((prev) => prev || lectureData[0]);
        }
      }

      if (courseRes.status === "fulfilled" && courseRes.value.data?.course) {
        setCourse(courseRes.value.data.course);
      }
    } catch (error) {
      console.error("FETCH ERROR:", error);
    }
  }, [courseId]);

  useEffect(() => {
    fetchCourseAndLectures();
  }, [fetchCourseAndLectures]);

  const handleMarkComplete = async (lecId) => {
    try {
      setMarking(true);
      await api.post("/api/progress/mark-complete", {
        lectureId: lecId,
        courseId,
        completed: true,
      });
      fetchCourseAndLectures();
    } catch (err) {
      console.error("Error marking lecture complete:", err);
    } finally {
      setMarking(false);
    }
  };

  const completedCount = lectures.filter((l) => l.is_completed).length;
  const progressPercent = lectures.length > 0 ? Math.round((completedCount / lectures.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      {/* =========================================================
          CLASSICAL HEADER (NAVY #0B1220 + GOLD #D4A017)
      ========================================================= */}
      <header className="bg-[#0B1220] text-white border-b-4 border-[#D4A017] sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/student"
              className="bg-[#1E293B] hover:bg-[#7C2D12] text-white text-xs font-semibold px-3 py-2 rounded-lg transition flex items-center gap-1.5 border border-slate-700"
            >
              <FaArrowLeft />
              <span>Back to Dashboard</span>
            </Link>

            <div className="hidden sm:block border-l border-slate-700 pl-4">
              <h1 className="text-base font-bold text-white truncate max-w-md">
                {course?.title || "Dizital Adda Classroom"}
              </h1>
              <p className="text-[11px] text-[#D4A017] font-semibold">
                Instructor: {course?.teacher || "Dr. Gulshan Kumar"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-300">
              <span>Progress: {progressPercent}%</span>
              <div className="w-24 bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#D4A017] h-2 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition flex items-center gap-1 cursor-pointer"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          CLASSROOM MAIN LAYOUT
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex-1 w-full flex flex-col lg:flex-row gap-6">
        {/* =======================================================
            LEFT/MAIN CONTENT: VIDEO PLAYER & DETAILS
        ======================================================= */}
        <div className="flex-1 space-y-6">
          {selectedLecture ? (
            <div>
              {/* VIDEO CONTAINER */}
              <div className="bg-black rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                {selectedLecture.video_url && selectedLecture.video_url.includes("youtube.com") ? (
                  <iframe
                    title={selectedLecture.title}
                    src={selectedLecture.video_url.replace("watch?v=", "embed/")}
                    className="w-full aspect-video"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    controls
                    key={selectedLecture.id}
                    src={selectedLecture.video_url}
                    className="w-full aspect-video bg-black"
                  >
                    Your browser does not support HTML video.
                  </video>
                )}
              </div>

              {/* LECTURE HEADER & ACTIONS */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mt-5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="bg-[#7C2D12]/10 text-[#7C2D12] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {selectedLecture.section_title || "Official Curriculum"}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0B1220] mt-2">
                      {selectedLecture.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                      <FaClock className="text-slate-400" />
                      <span>Duration: {selectedLecture.duration || "Self-Paced Lab"}</span>
                      <span>•</span>
                      <span>Mentor: Dr. Gulshan Kumar</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 flex-wrap">
                    {(selectedLecture.pdf_url || selectedLecture.notes_url) && (
                      <a
                        href={selectedLecture.pdf_url || selectedLecture.notes_url}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1.5"
                      >
                        <FaFilePdf className="text-[#7C2D12]" />
                        <span>Download Notes</span>
                      </a>
                    )}

                    <button
                      onClick={() => handleMarkComplete(selectedLecture.id)}
                      disabled={marking || selectedLecture.is_completed}
                      className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm ${
                        selectedLecture.is_completed
                          ? "bg-emerald-700 text-white cursor-default"
                          : "bg-[#0B1220] hover:bg-[#7C2D12] text-white cursor-pointer"
                      }`}
                    >
                      <FaCheckCircle />
                      <span>{selectedLecture.is_completed ? "Completed ✅" : marking ? "Saving..." : "Mark Complete"}</span>
                    </button>
                  </div>
                </div>

                {/* TABS: OVERVIEW / NOTES / MENTOR */}
                <div className="flex border-b border-slate-200 mt-5">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`pb-3 px-4 font-bold text-xs sm:text-sm cursor-pointer border-b-2 transition ${
                      activeTab === "overview"
                        ? "border-[#7C2D12] text-[#7C2D12]"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Lecture Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("notes")}
                    className={`pb-3 px-4 font-bold text-xs sm:text-sm cursor-pointer border-b-2 transition ${
                      activeTab === "notes"
                        ? "border-[#7C2D12] text-[#7C2D12]"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Class Notes & Links
                  </button>
                  <button
                    onClick={() => setActiveTab("doubts")}
                    className={`pb-3 px-4 font-bold text-xs sm:text-sm cursor-pointer border-b-2 transition ${
                      activeTab === "doubts"
                        ? "border-[#7C2D12] text-[#7C2D12]"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Mentor Assistance
                  </button>
                </div>

                <div className="pt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeTab === "overview" && (
                    <p>
                      {selectedLecture.description ||
                        "In this lecture, Dr. Gulshan Kumar demonstrates standard industrial frameworks, actionable campaign blueprints, and real brand case studies."}
                    </p>
                  )}

                  {activeTab === "notes" && (
                    <div className="space-y-2">
                      <p className="font-semibold text-slate-800">Resources for this lecture:</p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600">
                        <li>Official Dizital Adda Lecture Blueprint & Slide Deck</li>
                        <li>Standard Operating Procedures (SOPs) for Google Ads & SEO audits</li>
                        <li>Recommended AI tool integrations (ChatGPT, Canva Pro, Looker Studio)</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === "doubts" && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div>
                        <h4 className="font-bold text-[#0B1220]">Have questions about this session?</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Directly message mentor Dr. Gulshan Kumar on the student WhatsApp hotline.
                        </p>
                      </div>
                      <a
                        href="https://wa.me/918810606010?text=Hi%20Dr.%20Gulshan,%20I%20have%20a%20doubt%20in%20lecture%20session"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition flex items-center gap-1.5 shrink-0 shadow-sm"
                      >
                        <FaWhatsapp className="text-sm" />
                        <span>Chat with Mentor</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
              <FaBookOpen className="text-4xl text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#0B1220]">No Lectures Selected</h3>
              <p className="text-slate-500 text-sm mt-1">
                Select a lecture from the curriculum playlist on the right to start watching.
              </p>
            </div>
          )}
        </div>

        {/* =======================================================
            RIGHT COLUMN: CURRICULUM PLAYLIST (CLEAN & CLASSICAL)
        ======================================================= */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden sticky top-24">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-[#0B1220] text-sm sm:text-base">
                  Curriculum Playlist
                </h3>
                <p className="text-[11px] text-slate-500">
                  {completedCount} of {lectures.length} lessons completed
                </p>
              </div>
              <span className="text-xs font-bold text-[#7C2D12] bg-[#7C2D12]/10 px-2.5 py-1 rounded-md">
                {lectures.length} Lectures
              </span>
            </div>

            <div className="max-h-[600px] overflow-y-auto divide-y divide-slate-100">
              {lectures.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-500">
                  No lectures have been uploaded for this course yet.
                </div>
              ) : (
                lectures.map((lec, idx) => {
                  const isSelected = selectedLecture?.id === lec.id;
                  return (
                    <div
                      key={lec.id}
                      onClick={() => setSelectedLecture(lec)}
                      className={`p-3.5 cursor-pointer transition flex items-start gap-3 ${
                        isSelected
                          ? "bg-[#0B1220] text-white"
                          : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {lec.is_completed ? (
                          <FaCheckCircle className="text-emerald-500 text-sm" />
                        ) : (
                          <FaPlayCircle
                            className={`text-sm ${isSelected ? "text-[#D4A017]" : "text-slate-400"}`}
                          />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              isSelected ? "text-[#D4A017]" : "text-slate-400"
                            }`}
                          >
                            Lesson {idx + 1}
                          </span>
                          <span
                            className={`text-[10px] font-medium ${
                              isSelected ? "text-slate-300" : "text-slate-400"
                            }`}
                          >
                            {lec.duration || "25m"}
                          </span>
                        </div>
                        <h4
                          className={`text-xs sm:text-sm font-semibold truncate mt-0.5 ${
                            isSelected ? "text-white" : "text-slate-800"
                          }`}
                        >
                          {lec.title}
                        </h4>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
