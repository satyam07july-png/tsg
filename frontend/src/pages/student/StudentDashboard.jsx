import { Link } from "react-router-dom";

function StudentDashboard() {

  const courses = [

    {

      id: 1,

      title: "Full Stack Web Development",

      progress: "74%",

      mentor: "Divyansh Mishra",

      nextLesson: "React Hooks & API",

      completion: "5 Days",

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    },

    {

      id: 2,

      title: "Data Science & AI",

      progress: "52%",

      mentor: "Rahul Sharma",

      nextLesson: "Machine Learning Basics",

      completion: "12 Days",

      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

    },

  ];

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
                  src="https://i.pravatar.cc/300?img=12"
                  alt="student"
                  className="w-36 h-36 rounded-full object-cover border-[5px] border-white shadow-2xl"
                />

                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-white animate-pulse"></div>

              </div>

              <div>

                <h1 className="text-6xl font-black text-white">

                  Divyansh Mishra

                </h1>

                <p className="text-blue-200 text-2xl mt-3">

                  Full Stack Developer 🚀

                </p>

                <p className="text-slate-300 text-lg mt-4 max-w-2xl leading-8">

                  Building modern applications, mastering development
                  skills and becoming industry ready with DIZITAL ADDA.

                </p>

                {/* BADGES */}

                <div className="flex gap-4 mt-8 flex-wrap">

                  <span className="bg-blue-500/20 border border-blue-400/20 text-blue-200 px-5 py-3 rounded-2xl font-semibold">

                    👨‍🎓 Student

                  </span>

                  <span className="bg-purple-500/20 border border-purple-400/20 text-purple-200 px-5 py-3 rounded-2xl font-semibold">

                    ⚡ Top Performer

                  </span>

                  <span className="bg-emerald-500/20 border border-emerald-400/20 text-emerald-200 px-5 py-3 rounded-2xl font-semibold">

                    🔥 18 Days Streak

                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="text-right">

              <h2 className="text-slate-300 text-xl">

                Overall Progress

              </h2>

              <p className="text-8xl font-black text-white mt-5">

                74%

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

              <button className="bg-blue-500/20 text-blue-200 px-6 py-3 rounded-2xl">

                View All

              </button>

            </div>

            <div className="space-y-8 mt-10">

              {courses.map((course) => (

                <div
                  key={course.id}
                  className="bg-black/20 border border-white/10 rounded-[35px] p-6 flex gap-8 items-center"
                >

                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-72 h-52 object-cover rounded-3xl"
                  />

                  <div className="flex-1">

                    <div className="flex justify-between items-start">

                      <div>

                        <h2 className="text-4xl font-black text-white leading-tight">

                          {course.title}

                        </h2>

                        <p className="text-slate-300 mt-5 text-lg">

                          Mentor: {course.mentor}

                        </p>

                        <p className="text-blue-200 mt-2 text-lg">

                          Next Lesson: {course.nextLesson}

                        </p>

                        <p className="text-slate-400 mt-2 text-lg">

                          Estimated Completion: {course.completion}

                        </p>

                      </div>

                      <Link
                        to={`/learn/${course.id}`}
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
                      >

                        Continue

                      </Link>

                    </div>

                    {/* PROGRESS */}

                    <div className="mt-8">

                      <div className="w-full bg-white/10 rounded-full h-5 overflow-hidden">

                        <div
                          className="bg-gradient-to-r from-blue-400 to-cyan-300 h-5 rounded-full"
                          style={{
                            width: course.progress,
                          }}
                        ></div>

                      </div>

                      <p className="text-slate-300 mt-4 text-lg">

                        {course.progress} Completed

                      </p>

                    </div>

                  </div>

                </div>

              ))}

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

    </div>

  );

}

export default StudentDashboard;