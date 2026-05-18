import {
  FaHome,
  FaBook,
  FaUserGraduate,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 p-5">

      <h1 className="text-2xl font-bold mb-10">
        DIZITAL ADDA
      </h1>

      <ul className="space-y-6">

        <li className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 transition">
          <FaHome />
          Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 transition">
          <FaBook />
          Courses
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 transition">
          <FaUserGraduate />
          Students
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 transition">
          <FaCog />
          Settings
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;