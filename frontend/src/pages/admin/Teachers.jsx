import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  FaSearch,
  FaChalkboardTeacher,
  FaBookOpen,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";


function Teachers() {

  useEffect(() => {

  fetchTeachers();

}, []);

const fetchTeachers =
  async () => {

    try {

      const response =
        await axios.get(

          "https://tsg-qlb1.onrender.com/api/admin/teachers"

        );

      console.log(response.data);

      setTeachers(
        response.data.teachers
      );

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-6xl font-black">
            Teacher Management 👨‍🏫
          </h1>

          <p className="text-slate-400 text-xl mt-4">
            Manage all teachers, courses and performance analytics.
          </p>

        </div>

        {/* ADD TEACHER BUTTON */}
        <button
          onClick={() => navigate("/admin/add-teacher")}
          className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl"
        >

          + Add Teacher

        </button>

      </div>

      {/* SEARCH */}
      <div className="bg-white/10 border border-white/10 rounded-[30px] p-6 mt-10 flex items-center gap-5 backdrop-blur-xl">

        <FaSearch className="text-cyan-400 text-3xl" />

        <input
          type="text"
          placeholder="Search teachers..."
          className="bg-transparent outline-none w-full text-xl"
        />

      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-8 mt-10">

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaChalkboardTeacher className="text-5xl text-cyan-400" />

          <h2 className="text-slate-400 mt-5">
            Total Teachers
          </h2>

          <p className="text-6xl font-black mt-4">
            48
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaBookOpen className="text-5xl text-purple-400" />

          <h2 className="text-slate-400 mt-5">
            Courses Managed
          </h2>

          <p className="text-6xl font-black mt-4">
            126
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaMoneyBillWave className="text-5xl text-emerald-400" />

          <h2 className="text-slate-400 mt-5">
            Revenue Generated
          </h2>

          <p className="text-6xl font-black mt-4">
            ₹12L
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaStar className="text-5xl text-yellow-400" />

          <h2 className="text-slate-400 mt-5">
            Avg Rating
          </h2>

          <p className="text-6xl font-black mt-4">
            4.8
          </p>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white/10 border border-white/10 rounded-[40px] p-8 mt-12 overflow-x-auto backdrop-blur-2xl shadow-2xl">

        <h1 className="text-4xl font-black mb-10">
          All Teachers
        </h1>

        <table className="w-full min-w-[1500px]">

          <thead>

            <tr className="border-b border-white/10 text-slate-400 text-left">

              <th className="pb-6 text-lg">
                Teacher
              </th>

              <th className="pb-6 text-lg">
                Specialization
              </th>

              <th className="pb-6 text-lg">
                Courses
              </th>

              <th className="pb-6 text-lg">
                Students
              </th>

              <th className="pb-6 text-lg">
                Revenue
              </th>

              <th className="pb-6 text-lg">
                Rating
              </th>

              <th className="pb-6 text-lg">
                Status
              </th>

              <th className="pb-6 text-lg">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {teachers.map((teacher) => (

              <tr
                key={teacher.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >

                {/* TEACHER */}
                <td className="py-8">

                  <div className="flex items-center gap-5">

                    <img
                      src={teacher.image}
                      alt={teacher.full_name}
                      className="w-20 h-20 rounded-full border-[3px] border-cyan-400"
                    />

                    <div>

                      <h2 className="text-2xl font-black">
                        {teacher.full_name}
                      </h2>

                      <p className="text-slate-400 mt-2">
                        {teacher.email}
                      </p>

                    </div>

                  </div>

                </td>

                {/* SPECIALIZATION */}
                <td className="py-8 text-xl font-semibold">
                  {teacher.specialization}
                </td>

                {/* COURSES */}
                <td className="py-8">

                  <div className="bg-purple-500/20 text-purple-300 px-5 py-3 rounded-2xl inline-block font-bold">

                    {teacher.courses} Courses

                  </div>

                </td>

                {/* STUDENTS */}
                <td className="py-8 text-cyan-400 font-black text-2xl">
                  {teacher.students}
                </td>

                {/* REVENUE */}
                <td className="py-8 text-emerald-400 font-black text-2xl">
                  {teacher.revenue}
                </td>

                {/* RATING */}
                <td className="py-8">

                  <div className="bg-yellow-500/20 text-yellow-300 px-5 py-3 rounded-2xl inline-block font-bold">

                    {teacher.rating}

                  </div>

                </td>

                {/* STATUS */}
                <td className="py-8">

                  <span
                    className={`px-6 py-3 rounded-2xl font-bold ${
                      teacher.status === "Active"
                        ? "bg-cyan-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >

                    {teacher.status}

                  </span>

                </td>

                {/* ACTIONS */}
                <td className="py-8">

                  <button
                    onClick={() =>
                      navigate(`/admin/teachers/${teacher.id}`)
                    }
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300 px-7 py-4 rounded-2xl shadow-2xl font-bold text-lg"
                  >

                    View Profile

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Teachers;