import {
  FaClipboardList,
  FaPlus,
  FaClock,
  FaCheckCircle,
  FaFileUpload,
} from "react-icons/fa";

function Assignments() {

  const assignments = [

    {
      id: 1,
      title: "React Dashboard Project",
      course: "Full Stack Development",
      deadline: "20 May 2026",
      marks: 100,
      submissions: 82,
      status: "Active",
    },

    {
      id: 2,
      title: "Machine Learning Model",
      course: "Data Science & AI",
      deadline: "25 May 2026",
      marks: 150,
      submissions: 56,
      status: "Pending",
    },

  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-6xl font-black">

            Assignment Management 📚

          </h1>

          <p className="text-slate-400 text-xl mt-4">

            Create, manage and monitor student assignments professionally.

          </p>

        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-5 rounded-3xl text-xl font-bold flex items-center gap-4 shadow-2xl">

          <FaPlus />

          Create Assignment

        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-8 mt-12">

        <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-[35px] p-8">

          <FaClipboardList className="text-5xl text-cyan-400" />

          <h2 className="text-slate-300 mt-5">
            Total Assignments
          </h2>

          <p className="text-5xl font-black mt-4">
            24
          </p>

        </div>

        <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-[35px] p-8">

          <FaCheckCircle className="text-5xl text-emerald-400" />

          <h2 className="text-slate-300 mt-5">
            Completed
          </h2>

          <p className="text-5xl font-black mt-4">
            18
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-[35px] p-8">

          <FaClock className="text-5xl text-yellow-400" />

          <h2 className="text-slate-300 mt-5">
            Pending Review
          </h2>

          <p className="text-5xl font-black mt-4">
            42
          </p>

        </div>

        <div className="bg-purple-500/10 border border-purple-400/20 rounded-[35px] p-8">

          <FaFileUpload className="text-5xl text-purple-400" />

          <h2 className="text-slate-300 mt-5">
            Submissions
          </h2>

          <p className="text-5xl font-black mt-4">
            248
          </p>

        </div>

      </div>

      {/* ASSIGNMENT LIST */}
      <div className="space-y-8 mt-12">

        {assignments.map((assignment) => (

          <div
            key={assignment.id}
            className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl"
          >

            <div className="flex justify-between items-center">

              {/* LEFT */}
              <div>

                <h1 className="text-4xl font-black">

                  {assignment.title}

                </h1>

                <p className="text-cyan-300 text-lg mt-3">

                  {assignment.course}

                </p>

                <div className="flex gap-8 mt-6 text-lg text-slate-300">

                  <p>

                    📅 Deadline:
                    <span className="text-white font-bold ml-2">

                      {assignment.deadline}

                    </span>

                  </p>

                  <p>

                    📝 Marks:
                    <span className="text-white font-bold ml-2">

                      {assignment.marks}

                    </span>

                  </p>

                  <p>

                    👨‍🎓 Submissions:
                    <span className="text-white font-bold ml-2">

                      {assignment.submissions}

                    </span>

                  </p>

                </div>

              </div>

              {/* RIGHT */}
              <div className="text-right">

                <span
                  className={`px-6 py-3 rounded-2xl font-bold text-lg
                  ${
                    assignment.status === "Active"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >

                  {assignment.status}

                </span>

                <div className="flex gap-4 mt-6">

                  <button className="bg-blue-500 hover:bg-blue-400 transition px-6 py-3 rounded-2xl font-bold">

                    View

                  </button>

                  <button className="bg-red-500 hover:bg-red-400 transition px-6 py-3 rounded-2xl font-bold">

                    Delete

                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Assignments;