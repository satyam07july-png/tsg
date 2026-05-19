import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaPlus,
  FaUsers,
  FaClock,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import axios from "axios";
function Courses() {
const [courses, setCourses] = useState([]);
useEffect(() => {

  fetchCourses();

}, []);

const fetchCourses = async () => {

  try {

    const response = await axios.get(

      `${import.meta.env.VITE_API_URL}/api/courses`

    );

    setCourses(response.data);

  }

  catch (error) {

    console.log(error);

  }

};
  

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-6xl font-black">

            Course Management 📚

          </h1>

          <p className="text-slate-400 text-xl mt-4">

            Manage all LMS courses, teachers and students.

          </p>

        </div>

        <Link
         to="/admin/add-course"
         className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-5 rounded-3xl text-xl font-bold flex items-center gap-4 shadow-2xl"
        >

         <FaPlus />

          Add New Course

        </Link>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-8 mt-12">

        <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-[35px] p-8">

          <FaBookOpen className="text-5xl text-cyan-400" />

          <h2 className="text-slate-300 mt-5">
            Total Courses
          </h2>

          <p className="text-5xl font-black mt-4">
            24
          </p>

        </div>

        <div className="bg-purple-500/10 border border-purple-400/20 rounded-[35px] p-8">

          <FaUsers className="text-5xl text-purple-400" />

          <h2 className="text-slate-300 mt-5">
            Total Students
          </h2>

          <p className="text-5xl font-black mt-4">
            12K
          </p>

        </div>

        <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-[35px] p-8">

          <FaClock className="text-5xl text-emerald-400" />

          <h2 className="text-slate-300 mt-5">
            Active Courses
          </h2>

          <p className="text-5xl font-black mt-4">
            18
          </p>

        </div>

        <div className="bg-pink-500/10 border border-pink-400/20 rounded-[35px] p-8">

          <FaBookOpen className="text-5xl text-pink-400" />

          <h2 className="text-slate-300 mt-5">
            Revenue
          </h2>

          <p className="text-5xl font-black mt-4">
            ₹24L
          </p>

        </div>

      </div>

      {/* COURSES GRID */}
      <div className="grid grid-cols-3 gap-10 mt-12">

        {courses.map((course) => (

          <div
            key={course.id}
            className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] overflow-hidden shadow-2xl"
          >

            <img
              src={course.image}
              alt={course.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h1 className="text-3xl font-black leading-tight">

                {course.title}

              </h1>

              <p className="text-cyan-300 mt-4 text-lg">

                👨‍🏫 {course.teacher}

              </p>

              <div className="space-y-4 mt-8 text-lg">

                <p className="text-slate-300">

                  👨‍🎓 Students:
                  <span className="text-white font-bold ml-3">

                    {course.students}

                  </span>

                </p>

                <p className="text-slate-300">

                  ⏳ Duration:
                  <span className="text-white font-bold ml-3">

                    {course.duration}

                  </span>

                </p>

                <p className="text-slate-300">

                  💰 Price:
                  <span className="text-emerald-400 font-bold ml-3">

                    {course.price}

                  </span>

                </p>

              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-10">

              <Link
               to={`/admin/edit-course/${course.id}`}
               className="flex-1 bg-blue-500 hover:bg-blue-400 transition py-4 rounded-2xl font-bold flex items-center justify-center gap-3"
              >

               <FaEdit />

                Edit

               </Link>
              <button
               onClick={() => handleDelete(course.id)}
               className="flex-1 bg-red-500 hover:bg-red-400 transition py-4 rounded-2xl font-bold flex items-center justify-center gap-3"
              >

                 <FaTrash />

                 Delete

                </button>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Courses;