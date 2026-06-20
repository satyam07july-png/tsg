import React from "react";
import {
FaGraduationCap,
FaUsers,
FaTrophy,
FaChalkboardTeacher,
FaRocket,
FaBook,
FaShieldAlt,
FaCalculator,
FaBrain,
} from "react-icons/fa";

function Entrance() {
const exams = [
{
title: "JEE",
icon: <FaRocket />,
courses: [
"Class 6 to JEE",
"Class 8 to JEE",
"Class 9 to JEE",
"JEE Advanced",
],
},
{
title: "NEET",
icon: <FaBrain />,
courses: [
"Class 6 to NEET",
"Class 8 to NEET",
"Class 9 to NEET",
"NEET Advanced Biology",
],
},
{
title: "CA",
icon: <FaCalculator />,
courses: [
"CA Foundation",
"CA Intermediate",
"Commerce XI-XII",
"Professional Mentorship",
],
},
{
title: "CUET",
icon: <FaBook />,
courses: [
"CUET Science",
"CUET Commerce",
"CUET Arts",
"Crash Course",
],
},
{
title: "NDA",
icon: <FaShieldAlt />,
courses: [
"NDA Foundation",
"Defence Preparation",
"SSB Training",
"Interview Guidance",
],
},
{
title: "CS",
icon: <FaGraduationCap />,
courses: [
"CS Foundation",
"CS Executive",
"Commerce Pathway",
"Professional Training",
],
},
];

return ( <div className="bg-slate-50 min-h-screen">

```
  {/* Navbar */}

  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      <div className="flex items-center gap-3">
        <FaGraduationCap className="text-3xl text-blue-700" />
        <h1 className="font-bold text-2xl text-slate-800">
          EduEntrance
        </h1>
      </div>

      <div className="hidden md:flex gap-8 font-medium text-slate-700">
        <a href="#">Courses</a>
        <a href="#">Faculty</a>
        <a href="#">Results</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold">
        Login
      </button>

    </div>
  </nav>

  {/* Hero */}

  <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-24">
    <div className="max-w-7xl mx-auto px-6 text-center">

      <p className="uppercase tracking-widest text-blue-300 font-semibold">
        Established Since 2014
      </p>

      <h1 className="text-5xl md:text-7xl font-black mt-4">
        India's Trusted Entrance
        Preparation Platform
      </h1>

      <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto">
        Comprehensive preparation programs for JEE,
        NEET, CA, CUET, NDA and CS with expert faculty,
        advanced study material and proven results.
      </p>

      <div className="mt-10 flex justify-center gap-5 flex-wrap">
        <button className="bg-blue-600 px-8 py-4 rounded-lg font-bold">
          Explore Courses
        </button>

        <button className="border border-white px-8 py-4 rounded-lg font-bold">
          View Results
        </button>
      </div>

    </div>
  </section>

  {/* Stats */}

  <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <FaUsers className="mx-auto text-4xl text-blue-700 mb-4" />
        <h2 className="text-4xl font-black">25,000+</h2>
        <p className="text-slate-600 mt-2">Students Trained</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <FaTrophy className="mx-auto text-4xl text-blue-700 mb-4" />
        <h2 className="text-4xl font-black">500+</h2>
        <p className="text-slate-600 mt-2">Top Selections</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <FaChalkboardTeacher className="mx-auto text-4xl text-blue-700 mb-4" />
        <h2 className="text-4xl font-black">50+</h2>
        <p className="text-slate-600 mt-2">Expert Faculty</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <FaGraduationCap className="mx-auto text-4xl text-blue-700 mb-4" />
        <h2 className="text-4xl font-black">10+</h2>
        <p className="text-slate-600 mt-2">Years Experience</p>
      </div>

    </div>
  </section>

  {/* Courses */}

  <section className="max-w-7xl mx-auto px-6 py-10">

    <h2 className="text-5xl font-black text-center text-slate-800 mb-14">
      Entrance Programs
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {exams.map((exam, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
        >

          <div className="bg-blue-800 text-white p-8 text-center">
            <div className="text-5xl mb-4 flex justify-center">
              {exam.icon}
            </div>

            <h3 className="text-3xl font-black">
              {exam.title}
            </h3>
          </div>

          <div className="p-6 space-y-4">

            {exam.courses.map((course, i) => (
              <div
                key={i}
                className="bg-slate-100 hover:bg-blue-700 hover:text-white transition-all p-4 rounded-lg font-semibold cursor-pointer"
              >
                {course}
              </div>
            ))}

          </div>

        </div>
      ))}

    </div>

  </section>

  {/* Why Choose Us */}

  <section className="bg-white py-20 mt-20">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-5xl font-black text-center mb-14">
        Why Students Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="shadow-lg rounded-xl p-8">
          <h3 className="font-bold text-2xl mb-4">
            Expert Faculty
          </h3>
          <p>
            Learn from IITians, Doctors, Chartered
            Accountants and Defence Experts.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          <h3 className="font-bold text-2xl mb-4">
            Proven Results
          </h3>
          <p>
            Consistent selections across national
            entrance examinations.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          <h3 className="font-bold text-2xl mb-4">
            Personal Mentorship
          </h3>
          <p>
            Individual performance tracking and
            guidance for every student.
          </p>
        </div>

      </div>

    </div>
  </section>

  {/* Footer */}

  <footer className="bg-slate-900 text-white py-12 mt-20">
    <div className="max-w-7xl mx-auto px-6 text-center">

      <h2 className="text-3xl font-bold">
        EduEntrance
      </h2>

      <p className="text-slate-400 mt-3">
        Trusted by students across India since 2014
      </p>

      <p className="text-slate-500 mt-6">
        © 2026 EduEntrance. All Rights Reserved.
      </p>

    </div>
  </footer>

</div>


);
}

export default Entrance;
