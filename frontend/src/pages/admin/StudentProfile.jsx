import { useParams } from "react-router-dom";

import {
  FaEnvelope,
  FaPhone,
  FaBookOpen,
  FaClock,
  FaChartLine,
  FaFileAlt,
  FaMoneyBillWave,
  FaDownload,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import api from "../../lib/api";

function StudentProfile() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {

  fetchCourses();

}, []);

  const { id } = useParams();

  // ALL STUDENTS
  const students = [

    {
      id: 1,
      name: "Aman Sharma",
      email: "aman@gmail.com",
      phone: "+91 9876543210",
      role: "Full Stack Developer Student",
      performance: "89%",
      image: "https://i.pravatar.cc/300?img=11",
    },

    {
      id: 2,
      name: "Priya Verma",
      email: "priya@gmail.com",
      phone: "+91 9999999999",
      role: "Data Science Student",
      performance: "96%",
      image: "https://i.pravatar.cc/300?img=32",
    },

    {
      id: 3,
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
      phone: "+91 8888888888",
      role: "Machine Learning Student",
      performance: "74%",
      image: "https://i.pravatar.cc/300?img=15",
    },

  ];

  // FIND SELECTED STUDENT
  const student = students.find(
    (s) => s.id === parseInt(id)
  );

  // SAFETY CHECK
  if (!student) {

    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-5xl font-black">
        Student Not Found
      </div>
    );

  }
// course 
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
  // ASSIGNMENTS
  const assignments = [

    {
      id: 1,
      title: "React Dashboard UI",
      marks: "92/100",
      status: "Submitted",
      feedback: "Outstanding Work",
    },

    {
      id: 2,
      title: "AI Prediction Model",
      marks: "78/100",
      status: "Reviewed",
      feedback: "Good Logic Building",
    },

  ];

  // PAYMENTS
  const payments = [

    {
      id: 1,
      course: "Full Stack Development",
      amount: "₹12,000",
      status: "Paid",
      date: "12 Jan 2026",
    },

    {
      id: 2,
      course: "Machine Learning",
      amount: "₹8,000",
      status: "Paid",
      date: "4 Feb 2026",
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
              src={student.image}
              alt={student.name}
              className="w-40 h-40 rounded-full border-[6px] border-cyan-400 shadow-2xl"
            />

            <div>

              <h1 className="text-6xl font-black">
                {student.name} 👨‍🎓
              </h1>

              <p className="text-cyan-300 text-2xl mt-3">
                {student.role}
              </p>

              <div className="flex gap-8 mt-6 flex-wrap">

                <div className="flex items-center gap-3 text-slate-300">
                  <FaEnvelope />
                  {student.email}
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <FaPhone />
                  {student.phone}
                </div>

              </div>

              <div className="flex gap-4 mt-8 flex-wrap">

                <span className="bg-cyan-500/20 border border-cyan-400/20 text-cyan-300 px-5 py-3 rounded-2xl font-bold">
                  Active Student
                </span>

                <span className="bg-emerald-500/20 border border-emerald-400/20 text-emerald-300 px-5 py-3 rounded-2xl font-bold">
                  Premium Plan
                </span>

                <span className="bg-purple-500/20 border border-purple-400/20 text-purple-300 px-5 py-3 rounded-2xl font-bold">
                  Joined Jan 2026
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="text-right">

            <h2 className="text-slate-400 text-xl">
              Overall Performance
            </h2>

            <p className="text-8xl font-black mt-5 text-cyan-400">
              {student.performance}
            </p>

            <p className="text-emerald-400 mt-4 text-xl">
              Excellent Progress 🚀
            </p>

          </div>

        </div>

      </div>

      {/* ANALYTICS */}
      <div className="grid grid-cols-4 gap-8 mt-12">

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaBookOpen className="text-5xl text-cyan-400" />

          <h2 className="text-slate-400 mt-5">
            Courses Purchased
          </h2>

          <p className="text-5xl font-black mt-4">
            8
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaClock className="text-5xl text-purple-400" />

          <h2 className="text-slate-400 mt-5">
            Learning Hours
          </h2>

          <p className="text-5xl font-black mt-4">
            248h
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaFileAlt className="text-5xl text-yellow-400" />

          <h2 className="text-slate-400 mt-5">
            Assignments
          </h2>

          <p className="text-5xl font-black mt-4">
            42
          </p>

        </div>

        <div className="bg-white/10 border border-white/10 rounded-[35px] p-8">

          <FaMoneyBillWave className="text-5xl text-emerald-400" />

          <h2 className="text-slate-400 mt-5">
            Total Payments
          </h2>

          <p className="text-5xl font-black mt-4">
            ₹24K
          </p>

        </div>

      </div>

      {/* COURSE TRACKING */}
      <div className="bg-white/10 border border-white/10 rounded-[40px] p-10 mt-12">

        <h1 className="text-4xl font-black">
          Course Tracking 📚
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

                  <p className="text-slate-400 mt-3 text-lg">
                    Teacher: {course.teacher}
                  </p>

                  <p className="text-cyan-300 mt-2">
                    Duration: {course.duration}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-4xl font-black text-cyan-400">
                    {course.progress}
                  </p>

                  <p className="text-emerald-400 mt-2">
                    {course.performance}
                  </p>

                </div>

              </div>

              {/* PROGRESS BAR */}
              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden mt-8">

                <div
                  style={{
                    width: course.progress,
                  }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default StudentProfile;