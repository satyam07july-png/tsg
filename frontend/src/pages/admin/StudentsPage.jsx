import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaEye,
  FaTrash,
  FaUserGraduate,
  FaBookOpen,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import api from "../../lib/api";
import {
 useEffect,
 useState
} from "react";

function Students() {

  const navigate = useNavigate();

 const [students,setStudents] =
useState([]);

useEffect(() => {
  getStudents();
}, []);

const getStudents = async () => {
  try {

    const res = await api.get(
      "https://tsg-qlb1.onrender.com/api/students"
    );

    console.log(res.data);

    setStudents(res.data);

  } catch (error) {

    console.log(
      "Student Fetch Error:",
      error
    );

  }
};

  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-6xl font-black">
            Student Management 👨‍🎓
          </h1>

          <p className="text-slate-400 text-xl mt-4">
            Complete LMS student supervision and analytics system.
          </p>

        </div>

        <button
         onClick={() =>
         navigate("/admin/add-student")
        }
         className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl"
        >
         + Add New Student
        </button>

      </div>

      {/* SEARCH */}
      <div className="bg-white/10 border border-white/10 rounded-[30px] p-6 mt-10 flex items-center gap-5 backdrop-blur-xl">

        <FaSearch className="text-cyan-400 text-3xl" />

        <input
          type="text"
          placeholder="Search students, courses, teachers..."
          className="bg-transparent outline-none w-full text-xl"
        />

      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-8 mt-10">

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">

          <FaUserGraduate className="text-5xl text-cyan-400" />

          <h2 className="text-slate-400 mt-6 text-lg">
            Total Students
          </h2>

          <p className="text-6xl font-black mt-4">
            2,540
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">

          <FaBookOpen className="text-5xl text-purple-400" />

          <h2 className="text-slate-400 mt-6 text-lg">
            Active Courses
          </h2>

          <p className="text-6xl font-black mt-4">
            126
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">

          <FaMoneyBillWave className="text-5xl text-emerald-400" />

          <h2 className="text-slate-400 mt-6 text-lg">
            Revenue
          </h2>

          <p className="text-6xl font-black mt-4">
            ₹8.4L
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">

          <FaChartLine className="text-5xl text-yellow-400" />

          <h2 className="text-slate-400 mt-6 text-lg">
            Avg Performance
          </h2>

          <p className="text-6xl font-black mt-4">
            88%
          </p>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white/10 border border-white/10 rounded-[40px] p-8 mt-12 overflow-x-auto backdrop-blur-2xl shadow-2xl">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-black">
              All Students
            </h1>

            <p className="text-slate-400 mt-3">
              Monitor every student activity, courses and performance.
            </p>

          </div>

        </div>

        <table className="w-full min-w-[1700px]">

          <thead>

            <tr className="border-b border-white/10 text-slate-400 text-left">

              <th className="pb-6 text-lg">Student</th>

              <th className="pb-6 text-lg">Course</th>

              <th className="pb-6 text-lg">Teacher</th>

              <th className="pb-6 text-lg">Assignments</th>

              <th className="pb-6 text-lg">Progress</th>

              <th className="pb-6 text-lg">Performance</th>

              <th className="pb-6 text-lg">Payment</th>

              <th className="pb-6 text-lg">Status</th>

              <th className="pb-6 text-lg">Actions</th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-b border-white/5 hover:bg-white/5 transition-all duration-300"
              >

                {/* STUDENT */}
                <td className="py-8">

                  <div className="flex items-center gap-5">

                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-20 h-20 rounded-full border-[3px] border-cyan-400 shadow-xl"
                    />

                    <div>

                      <h2 className="text-2xl font-black">
                        {student.name}
                      </h2>

                      <p className="text-slate-400 mt-2">
                        {student.email}
                      </p>

                    </div>

                  </div>

                </td>

                {/* COURSE */}
                <td className="py-8">

                  <div>

                    <h2 className="text-xl font-bold">
                      {student.course}
                    </h2>

                    <p className="text-slate-400 mt-2">
                      Premium Program
                    </p>

                  </div>

                </td>

                {/* TEACHER */}
                <td className="py-8 text-lg font-semibold">
                  {student.teacher}
                </td>

                {/* ASSIGNMENTS */}
                <td className="py-8">

                  <div className="bg-purple-500/20 text-purple-300 px-5 py-3 rounded-2xl font-bold inline-block">

                    {student.assignments} Submitted

                  </div>

                </td>

                {/* PROGRESS */}
                <td className="py-8">

                  <div>

                    <div className="w-[180px] h-4 bg-black/30 rounded-full overflow-hidden">

                      <div
                        style={{
                          width: student.progress,
                        }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      ></div>

                    </div>

                    <p className="mt-3 text-cyan-400 font-bold text-lg">
                      {student.progress}
                    </p>

                  </div>

                </td>

                {/* PERFORMANCE */}
                <td className="py-8">

                  <div className="bg-emerald-500/20 text-emerald-300 px-5 py-3 rounded-2xl font-bold inline-block">

                    {student.performance}

                  </div>

                </td>

                {/* PAYMENT */}
                <td className="py-8 text-yellow-400 font-black text-xl">
                  {student.payment}
                </td>

                {/* STATUS */}
                <td className="py-8">

                  <span
                    className={`px-6 py-3 rounded-2xl font-bold ${
                      student.status === "Completed"
                        ? "bg-emerald-500 text-white"
                        : student.status === "Active"
                        ? "bg-cyan-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >

                    {student.status}

                  </span>

                </td>

                {/* ACTIONS */}
                <td className="py-8">

                  <div className="flex gap-4">

                   <button
                    onClick={() =>
                    navigate(`/admin/students/${student.id}`)
                  }
                   className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-4 rounded-2xl shadow-xl font-bold text-lg"
                  >

                   View Profile

                  </button>
                    <button className="bg-red-500 hover:bg-red-400 transition p-5 rounded-2xl shadow-xl">

                      <FaTrash className="text-xl" />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Students;