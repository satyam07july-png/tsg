import { useParams } from "react-router-dom";
import { useState } from "react";

function LearningDashboard() {

  const { id } = useParams();

  const [message, setMessage] = useState("");

  const lessons = [

    {
      id: 1,
      title: "Introduction To React",
      duration: "12 Min",
      completed: true,
    },

    {
      id: 2,
      title: "JSX & Components",
      duration: "18 Min",
      completed: true,
    },

    {
      id: 3,
      title: "Props & State",
      duration: "22 Min",
      completed: false,
    },

    {
      id: 4,
      title: "React Hooks",
      duration: "30 Min",
      completed: false,
    },

    {
      id: 5,
      title: "API Integration",
      duration: "26 Min",
      completed: false,
    },

  ];

  const doubts = [

    {
      id: 1,
      question: "How does useEffect work in React?",
      status: "Pending",
      date: "2 Hours Ago",
    },

    {
      id: 2,
      question: "Difference between props and state?",
      answer:
        "Props are used to pass data while state manages dynamic component data.",
      status: "Answered",
      date: "Yesterday",
    },

  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black p-8">

      {/* TOP */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-black text-white">

            Full Stack Web Development 🚀

          </h1>

          <p className="text-slate-300 text-xl mt-4">

            Learn modern development with projects, assignments and live mentoring.

          </p>

        </div>

        <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl">

          Download Notes

        </button>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-3 gap-8">

        {/* LEFT */}

        <div className="col-span-2 space-y-8">

          {/* VIDEO PLAYER */}

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dGcsHMXbSOA"
                title="Course Video"
                allowFullScreen
              ></iframe>

            </div>

            {/* VIDEO INFO */}

            <div className="p-8">

              <div className="flex justify-between items-start">

                <div>

                  <h1 className="text-4xl font-black text-white">

                    React Hooks Explained

                  </h1>

                  <p className="text-slate-300 text-lg mt-5 leading-8 max-w-4xl">

                    Learn useState, useEffect and advanced React concepts
                    with practical projects and modern implementation.

                  </p>

                </div>

                <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-bold">

                  Mark Complete

                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-4 gap-5 mt-10">

                <div className="bg-black/20 border border-white/10 rounded-3xl p-5">

                  <h2 className="text-slate-400">

                    Duration

                  </h2>

                  <p className="text-white text-3xl font-black mt-3">

                    30 Min

                  </p>

                </div>

                <div className="bg-black/20 border border-white/10 rounded-3xl p-5">

                  <h2 className="text-slate-400">

                    Progress

                  </h2>

                  <p className="text-white text-3xl font-black mt-3">

                    74%

                  </p>

                </div>

                <div className="bg-black/20 border border-white/10 rounded-3xl p-5">

                  <h2 className="text-slate-400">

                    Assignments

                  </h2>

                  <p className="text-white text-3xl font-black mt-3">

                    12

                  </p>

                </div>

                <div className="bg-black/20 border border-white/10 rounded-3xl p-5">

                  <h2 className="text-slate-400">

                    Tests

                  </h2>

                  <p className="text-white text-3xl font-black mt-3">

                    4

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ASSIGNMENTS */}

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl">

            <div className="flex justify-between items-center">

              <h1 className="text-4xl font-black text-white">

                Assignments & Projects 📚

              </h1>

              <button className="bg-blue-500/20 text-blue-200 px-6 py-3 rounded-2xl">

                View All

              </button>

            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                <h2 className="text-2xl font-bold text-white">

                  Build React Dashboard

                </h2>

                <p className="text-slate-300 mt-3">

                  Due Tomorrow

                </p>

                <button className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-2xl font-bold">

                  Submit Assignment

                </button>

              </div>

              <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                <h2 className="text-2xl font-bold text-white">

                  API Integration Project

                </h2>

                <p className="text-slate-300 mt-3">

                  Due In 3 Days

                </p>

                <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-6 py-3 rounded-2xl font-bold">

                  Start Project

                </button>

              </div>

            </div>

          </div>

          {/* ASK MENTOR */}

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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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

                  {doubts.length} Questions

                </span>

              </div>

              <div className="space-y-6 mt-8">

                {doubts.map((doubt) => (

                  <div
                    key={doubt.id}
                    className={`rounded-3xl p-6 border ${
                      doubt.status === "Answered"
                        ? "bg-black/20 border-emerald-400/20"
                        : "bg-black/20 border-white/10"
                    }`}
                  >

                    <div className="flex justify-between items-center">

                      <div>

                        <h2 className="text-2xl font-bold text-white">

                          {doubt.question}

                        </h2>

                        <p className="text-slate-400 mt-3">

                          Asked {doubt.date}

                        </p>

                      </div>

                      <span
                        className={`px-5 py-2 rounded-2xl font-bold ${
                          doubt.status === "Answered"
                            ? "bg-emerald-500 text-white"
                            : "bg-yellow-500 text-black"
                        }`}
                      >

                        {doubt.status}

                      </span>

                    </div>

                    {doubt.answer && (

                      <div className="mt-6 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl p-5">

                        <h3 className="text-emerald-300 font-bold text-lg">

                          Teacher Reply 👨‍🏫

                        </h3>

                        <p className="text-slate-200 mt-3 leading-8">

                          {doubt.answer}

                        </p>

                      </div>

                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}

        <div className="space-y-8">

          {/* PROGRESS */}

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl">

            <h1 className="text-3xl font-black text-white">

              Course Progress 🚀

            </h1>

            <div className="mt-8">

              <div className="flex justify-between text-slate-300 mb-4">

                <span>Completed</span>

                <span>74%</span>

              </div>

              <div className="w-full bg-white/10 rounded-full h-5 overflow-hidden">

                <div
                  className="bg-gradient-to-r from-blue-400 to-cyan-300 h-5 rounded-full"
                  style={{ width: "74%" }}
                ></div>

              </div>

            </div>

          </div>

          {/* LESSONS */}

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl">

            <div className="flex justify-between items-center">

              <h1 className="text-3xl font-black text-white">

                Course Lessons

              </h1>

              <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-2xl">

                {lessons.length} Lessons

              </span>

            </div>

            <div className="space-y-5 mt-8">

              {lessons.map((lesson) => (

                <div
                  key={lesson.id}
                  className={`rounded-3xl p-5 border ${
                    lesson.completed
                      ? "bg-emerald-500/10 border-emerald-400/20"
                      : "bg-black/20 border-white/10"
                  }`}
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-white text-xl font-bold">

                        {lesson.title}

                      </h2>

                      <p className="text-slate-400 mt-2">

                        {lesson.duration}

                      </p>

                    </div>

                    <div>

                      {lesson.completed ? (

                        <span className="bg-emerald-500 text-white px-4 py-2 rounded-2xl text-sm font-bold">

                          Completed

                        </span>

                      ) : (

                        <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl text-sm font-bold">

                          Start

                        </span>

                      )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* CERTIFICATE */}

          <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-[40px] p-8 shadow-2xl text-white">

            <h1 className="text-3xl font-black">

              Certificate 🎓

            </h1>

            <p className="mt-5 text-lg leading-8">

              Complete the course and unlock your professional certificate.

            </p>

            <button className="mt-8 bg-white text-purple-700 px-6 py-4 rounded-2xl font-black w-full">

              Unlock Certificate

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default LearningDashboard;