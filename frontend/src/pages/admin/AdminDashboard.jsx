import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaMoneyBillWave,
  FaChartLine,
  FaCog,
  FaBell,
  FaClipboardList,
} from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();
  const admin = JSON.parse(
  localStorage.getItem("adminSettings")
);

  const cards = [
    {
      title: "Total Students",
      value: "2,540",
      icon: <FaUserGraduate />,
    },

    {
      title: "Total Teachers",
      value: "48",
      icon: <FaChalkboardTeacher />,
    },

    {
      title: "Total Courses",
      value: "126",
      icon: <FaBookOpen />,
    },

    {
      title: "Revenue",
      value: "₹8.4L",
      icon: <FaMoneyBillWave />,
    },
  ];

  return (

    <div className="min-h-screen flex bg-slate-950 text-white">

      {/* SIDEBAR */}
      <div className="w-[280px] bg-slate-900 border-r border-white/10 p-8">

        <h1 className="text-3xl font-black text-cyan-400">
          DIZITALADDA
        </h1>

        <div className="space-y-4 mt-12">

          <button className="w-full flex items-center gap-4 bg-cyan-500 text-white px-5 py-4 rounded-2xl font-bold">
            <FaChartLine />
            Dashboard
          </button>

          <button
            onClick={() => navigate("/admin/students")}
            className="w-full flex items-center gap-4 hover:bg-white/10 px-5 py-4 rounded-2xl transition"
          >
            <FaUserGraduate />
             Students
            </button>

          <button
           onClick={() => navigate("/admin/teachers")}
           className="w-full flex items-center gap-4 hover:bg-white/10 px-5 py-4 rounded-2xl transition"
          >
            <FaChalkboardTeacher />
           Teachers
          </button>

             <button
           onClick={() => navigate("/admin/courses")}
           className="w-full flex items-center gap-4 hover:bg-white/10 px-5 py-4 rounded-2xl transition"
          >
            <FaChalkboardTeacher />
           courses
          </button>

          <button
            onClick={() => navigate("/admin/payments")}
           className="w-full flex items-center gap-4 hover:bg-white/10 px-5 py-4 rounded-2xl transition">
            <FaMoneyBillWave />
            Payments
          </button>
          
         <Link
          to="/admin/notifications"
          className="flex items-center gap-4 bg-white/10 hover:bg-cyan-500/20 transition px-6 py-4 rounded-2xl font-bold text-white"
        >

          🔔 Notification Board

        </Link>

         <Link
          to="/admin/settings"
        >

          ⚙️ Settings

        </Link>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">

        {/* TOPBAR */}
        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-2xl font-black">

           {admin?.name || "Admin"}

          </h1>
            <p className="text-slate-400 text-lg mt-3">
              Complete LMS supervision and analytics panel.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="admin"
              className="w-16 h-16 rounded-full border-4 border-cyan-400"
            />

          </div>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-8 mt-12">

          {cards.map((card, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl"
            >

              <div className="text-5xl text-cyan-400">
                {card.icon}
              </div>

              <h2 className="text-slate-300 mt-6">
                {card.title}
              </h2>

              <p className="text-5xl font-black mt-4">
                {card.value}
              </p>

            </div>

          ))}

        </div>

        {/* TABLES SECTION */}
        <div className="grid grid-cols-2 gap-10 mt-12">

          {/* STUDENTS */}
          <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

            <h1 className="text-3xl font-black">
              Recent Students 👨‍🎓
            </h1>

            <div className="space-y-5 mt-8">

              <div className="bg-black/20 rounded-2xl p-5 flex justify-between">

                <div>
                  <h2 className="font-bold text-xl">
                    Aman Sharma
                  </h2>

                  <p className="text-slate-400">
                    Full Stack Development
                  </p>
                </div>

                <span className="text-cyan-400 font-bold">
                  Active
                </span>

              </div>

              <div className="bg-black/20 rounded-2xl p-5 flex justify-between">

                <div>
                  <h2 className="font-bold text-xl">
                    Priya Verma
                  </h2>

                  <p className="text-slate-400">
                    Data Science
                  </p>
                </div>

                <span className="text-emerald-400 font-bold">
                  Completed
                </span>

              </div>

            </div>

          </div>

          {/* PAYMENTS */}
          <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

            <h1 className="text-3xl font-black">
              Recent Payments 💳
            </h1>

            <div className="space-y-5 mt-8">

              <div className="bg-black/20 rounded-2xl p-5 flex justify-between">

                <div>
                  <h2 className="font-bold text-xl">
                    React Mastery Course
                  </h2>

                  <p className="text-slate-400">
                    Paid by Aman Sharma
                  </p>
                </div>

                <span className="text-emerald-400 font-bold">
                  ₹4,999
                </span>

              </div>

              <div className="bg-black/20 rounded-2xl p-5 flex justify-between">

                <div>
                  <h2 className="font-bold text-xl">
                    Data Science Bootcamp
                  </h2>

                  <p className="text-slate-400">
                    Paid by Priya Verma
                  </p>
                </div>

                <span className="text-cyan-400 font-bold">
                  ₹7,999
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;