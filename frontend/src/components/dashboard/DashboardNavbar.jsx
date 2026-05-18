import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

function DashboardNavbar() {
  return (
    <div className="bg-white h-20 shadow-sm flex items-center justify-between px-10 rounded-2xl">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-6">

        {/* SEARCH */}

        <div className="flex items-center bg-slate-100 px-4 py-3 rounded-xl w-80">

          <FaSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 w-full"
          />

        </div>

        {/* NOTIFICATION */}

        <div className="relative">

          <FaBell className="text-2xl text-slate-700" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

            2

          </span>

        </div>

        {/* PROFILE */}

        <img
          src="https://i.pravatar.cc/45"
          alt="profile"
          className="w-12 h-12 rounded-full"
        />

      </div>

    </div>
  );
}

export default DashboardNavbar;