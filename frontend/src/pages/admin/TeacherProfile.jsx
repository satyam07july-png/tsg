import { useParams } from "react-router-dom";

import {
  FaEnvelope,
  FaPhone,
  FaBookOpen,
  FaMoneyBillWave,
  FaStar,
  FaUsers,
  FaChalkboardTeacher,
  FaCalendarAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import api from "../../lib/api";

function TeacherProfile() {
const [courses, setCourses] = useState([]);
useEffect(() => {

  fetchCourses();

}, []);


  const { id } = useParams();

  // ALL TEACHERS
  const teachers = [

    {
      id: 1,
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
      specialization: "Full Stack Development",
      rating: "4.9",
      revenue: "₹4.2L",
      students: 420,
      image: "https://i.pravatar.cc/300?img=12",
    },

    {
      id: 2,
      name: "Amit Sharma",
      email: "amit@gmail.com",
      phone: "+91 9999999999",
      specialization: "Data Science",
      rating: "4.8",
      revenue: "₹3.1L",
      students: 310,
      image: "https://i.pravatar.cc/300?img=15",
    },

    {
      id: 3,
      name: "Anjali Verma",
      email: "anjali@gmail.com",
      phone: "+91 8888888888",
      specialization: "UI/UX Design",
      rating: "4.7",
      revenue: "₹1.8L",
      students: 180,
      image: "https://i.pravatar.cc/300?img=32",
    },

  ];

  // SELECTED TEACHER
  const teacher = teachers.find(
    (t) => t.id === parseInt(id)
  );

  // SAFETY
  if (!teacher) {

    return (

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-5xl font-black">

        Teacher Not Found

      </div>

    );

  }

  const fetchCourses = async () => {

  try {

    const response = await api.get(

      `${import.meta.env.VITE_API_URL}/api/courses`

    );

    setCourses(response.data);

  }

  catch (error) {

    console.log(error);

  }

};

  // LIVE CLASSES
  const liveClasses = [

    {
      id: 1,
      title: "React Advanced Concepts",
      date: "12 May 2026",
      students: 120,
      status: "Completed",
    },

    {
      id: 2,
      title: "Node.js API Mastery",
      date: "15 May 2026",
      students: 95,
      status: "Upcoming",
    },

  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-white/10 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl">

        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex justify-between items-center">

          {/* LEFT */}
          <div className="flex items-center gap-8">

            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-40 h-40 rounded-full border-[6px] border-cyan-400 shadow-2xl"
            />

            <div>

              <h1 className="text-6xl font-black">
                {teacher.name} 👨‍🏫
              </h1>

              <p className="text-cyan-300 text-2xl mt-3">
                {teacher.specialization}
              </p>

              <div className="flex gap-8 mt-6 flex-wrap">

                <div className="flex items-center gap-3 text-slate-300">
                  <FaEnvelope />
                  {teacher.email}
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <FaPhone />
                  {teacher.phone}
                </div>

              </div>

              <div className="flex gap-4 mt-8 flex-wrap">

                <span className="bg-cyan-500/20 border border-cyan-400/20 text-cyan-300 px-5 py-3 rounded-2xl font-bold">
                  Active Teacher
                </span>

                <span className="bg-yellow-500/20 border border-yellow-400/20 text-yellow-300 px-5 py-3 rounded-2xl font-bold">
                  ⭐ {teacher.rating} Rating
                </span>

                <span className="bg-emerald-500/20 border border-emerald-400/20 text-emerald-300 px-5 py-3 rounded-2xl font-bold">
                  Revenue {teacher.revenue}
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="text-right">

            <h2 className="text-slate-400 text-xl">
              Total Students
            </h2>

            <p className="text-8xl font-black mt-5 text-cyan-400">
              {teacher.students}
            </p>

            <p className="text-emerald-400 mt-4 text-xl">
              Excellent Teaching Performance 🚀
            </p>

          </div>

        </div>

      </div>

      {/* ANALYTICS */}
      <div className="grid grid-cols-4 gap-8 mt-12">

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaBookOpen className="text-5xl text-cyan-400" />

          <h2 className="text-slate-400 mt-5">
            Courses
          </h2>

          <p className="text-5xl font-black mt-4">
            8
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaUsers className="text-5xl text-purple-400" />

          <h2 className="text-slate-400 mt-5">
            Students
          </h2>

          <p className="text-5xl font-black mt-4">
            {teacher.students}
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaMoneyBillWave className="text-5xl text-emerald-400" />

          <h2 className="text-slate-400 mt-5">
            Revenue
          </h2>

          <p className="text-5xl font-black mt-4">
            {teacher.revenue}
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaStar className="text-5xl text-yellow-400" />

          <h2 className="text-slate-400 mt-5">
            Rating
          </h2>

          <p className="text-5xl font-black mt-4">
            {teacher.rating}
          </p>

        </div>

      </div>

      {/* COURSES */}
      <div className="bg-white/10 border border-white/10 rounded-[40px] p-10 mt-12">

        <h1 className="text-4xl font-black">
          Assigned Courses 📚
        </h1>

        <div className="space-y-8 mt-10">

          {courses.map((course) => (

            <div
              key={course.id}
              className="bg-black/20 border border-white/10 rounded-[30px] p-8"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-3xl font-black">
                    {course.name}
                  </h2>

                  <p className="text-slate-400 mt-3">
                    Duration: {course.duration}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-cyan-400 text-3xl font-black">
                    {course.students} Students
                  </p>

                  <p className="text-emerald-400 mt-3">
                    {course.earnings}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* LIVE CLASSES */}
      <div className="bg-white/10 border border-white/10 rounded-[40px] p-10 mt-12">

        <h1 className="text-4xl font-black">
          Live Classes 🎥
        </h1>

        <div className="space-y-6 mt-10">

          {liveClasses.map((live) => (

            <div
              key={live.id}
              className="bg-black/20 border border-white/10 rounded-[30px] p-8 flex justify-between items-center"
            >

              <div>

                <h2 className="text-2xl font-black">
                  {live.title}
                </h2>

                <p className="text-slate-400 mt-3">
                  {live.date}
                </p>

              </div>

              <div className="text-right">

                <p className="text-cyan-400 text-3xl font-black">
                  {live.students} Students
                </p>

                <span className="bg-emerald-500 text-white px-5 py-2 rounded-2xl font-bold mt-3 inline-block">
                  {live.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default TeacherProfile;