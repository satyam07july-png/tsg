import { Link } from "react-router-dom";
function CourseManagement() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm mt-12">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Course Management
          </h1>

          <p className="text-gray-500 mt-2">
            Add, update and manage courses
          </p>

        </div>

        <button className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">

          <Link
           to="/admin/add-course"
           className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
          >

           Add Course

          </Link>

        </button>

      </div>

    </div>
  );
}

export default CourseManagement;