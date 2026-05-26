import React, {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import Features from "../../components/landing/Features";

import Testimonials from "../../components/landing/Testimonials";

import Footer from "../../components/landing/Footer";

import {
  FaClock,
  FaSignal,
} from "react-icons/fa";

function LandingPage() {

  // ==========================
  // STATES
  // ==========================

  const [courses, setCourses] =
    useState([]);

  // ==========================
  // FETCH COURSES
  // ==========================

  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses =
    async () => {

      try {

        const response =
          await axios.get(

            `${import.meta.env.VITE_API_URL}/api/courses`

          );

        console.log(
          "COURSE API:",
          response.data
        );

        const courseData =

          response.data?.courses ||

          response.data ||

          [];

        setCourses(

          Array.isArray(courseData)

            ? courseData

            : []

        );

      }

      catch (error) {

        console.log(
          "COURSE FETCH ERROR:",
          error
        );

      }

    };

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      {/* ==========================
          VIKSHIT BHARAT HEADER
      ========================== */}

      <div className="bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#7C2D12] text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">

          {/* LOGO */}

          <div
            className="
            w-[170px]
            h-[170px]
            rounded-full
            border-[6px]
            border-orange-300
            flex
            items-center
            justify-center
            text-5xl
            font-black
            bg-black
            shadow-[0_0_50px_rgba(255,180,0,0.4)]
            "
          >

            TGS

          </div>

          {/* TITLE */}

          <h1
            className="
            text-5xl
            md:text-8xl
            font-black
            mt-10
            text-center
            text-orange-200
            tracking-[4px]
            leading-tight
            drop-shadow-[0_0_35px_rgba(255,180,0,0.5)]
            "
          >

            A MISSION FOR
            <br />
            VIKSHIT BHARAT 2047

          </h1>

          {/* INDIA FIRST */}

          <h2
            className="
            text-2xl
            md:text-4xl
            font-bold
            mt-8
            tracking-[6px]
            text-amber-300
            "
          >

             🇮🇳

          </h2>

          {/* FOUNDATION */}

          <div className="mt-16 text-center">

            <h3
              className="
              text-2xl
              md:text-4xl
              font-bold
              text-orange-300
              tracking-[3px]
              "
            >

              ASSOCIATED BY

            </h3>

            <p
              className="
              text-3xl
              md:text-5xl
              font-black
              mt-6
              text-white
              tracking-[4px]
              "
            >

              TIMELESS FOUNDATION

            </p>

          </div>

        </div>

      </div>

      {/* ==========================
          NAVBAR
      ========================== */}

      <div className="bg-[#0B1220] sticky top-0 z-50 shadow-2xl">

        {/* FIRST ROW */}

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6">

          <Link
            to="/"
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            hover:bg-[#7C2D12]
            transition
            text-lg
            md:text-xl
            font-semibold
            "
          >

            HOME

          </Link>

          <Link
            to="/login"
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            hover:bg-[#7C2D12]
            transition
            text-lg
            md:text-xl
            font-semibold
            "
          >

            STUDENT PORTAL

          </Link>

          <Link
            to="/login"
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            hover:bg-[#7C2D12]
            transition
            text-lg
            md:text-xl
            font-semibold
            "
          >

            ADMIN PORTAL

          </Link>

          <Link
            to="/login"
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            hover:bg-[#7C2D12]
            transition
            text-lg
            md:text-xl
            font-semibold
            "
          >

            TEACHER PORTAL

          </Link>

          <Link
  to="/government-partners"
  className="
  text-white
  py-6
  text-center
  border
  border-orange-400/20
  hover:bg-[#7C2D12]
  transition
  text-lg
  md:text-xl
  font-semibold
  "
>

  GOVERNMENT PARTNERS

</Link>

          <div
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            text-lg
            md:text-xl
            font-semibold
            "
          >

            CONTACT

          </div>

        </div>

        {/* SECOND ROW */}

        <div className="bg-[#1E293B]">

          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5">

            <div
              className="
              text-orange-200
              py-5
              text-center
              border
              border-orange-400/20
              hover:bg-[#7C2D12]
              transition
              text-lg
              md:text-xl
              font-bold
              cursor-pointer
              "
            >

              Academic

            </div>

            <div
              className="
              text-orange-200
              py-5
              text-center
              border
              border-orange-400/20
              hover:bg-[#7C2D12]
              transition
              text-lg
              md:text-xl
              font-bold
              cursor-pointer
              "
            >

              Entrance

            </div>

            <div
              className="
              text-orange-200
              py-5
              text-center
              border
              border-orange-400/20
              hover:bg-[#7C2D12]
              transition
              text-lg
              md:text-xl
              font-bold
              cursor-pointer
              "
            >

              Competition

            </div>

            <div
              className="
              text-orange-200
              py-5
              text-center
              border
              border-orange-400/20
              hover:bg-[#7C2D12]
              transition
              text-lg
              md:text-xl
              font-bold
              cursor-pointer
              "
            >

              Skilling

            </div>

            <div
              className="
              text-orange-200
              py-5
              text-center
              border
              border-orange-400/20
              hover:bg-[#7C2D12]
              transition
              text-lg
              md:text-xl
              font-bold
              cursor-pointer
              "
            >

              Placement

            </div>

          </div>

        </div>

      </div>

      {/* ==========================
          TOP NEWS TICKER
      ========================== */}

      <marquee
  behavior="scroll"
  direction="left"
  scrollamount="8"
  className="text-black text-xl font-bold"
>

  🤖 Artificial Intelligence Revolution
  &nbsp;&nbsp;&nbsp;&nbsp;

  🚀 Machine Learning Development Program
  &nbsp;&nbsp;&nbsp;&nbsp;

  🧠 Deep Learning Research Mission
  &nbsp;&nbsp;&nbsp;&nbsp;

  📊 Data Science & Analytics Training
  &nbsp;&nbsp;&nbsp;&nbsp;

  💻 Full Stack AI Engineering Bootcamp
  &nbsp;&nbsp;&nbsp;&nbsp;

  🔥 Generative AI Innovation Lab
  &nbsp;&nbsp;&nbsp;&nbsp;

  🛰️ AI Powered Digital India Mission
  &nbsp;&nbsp;&nbsp;&nbsp;

  📈 AI For Business Transformation
  &nbsp;&nbsp;&nbsp;&nbsp;

  🤝 Human + AI Future Workforce Program
  &nbsp;&nbsp;&nbsp;&nbsp;

  ⚡ AI Automation & Robotics Training
  &nbsp;&nbsp;&nbsp;&nbsp;

  🌐 Future Tech & Innovation Ecosystem
  &nbsp;&nbsp;&nbsp;&nbsp;

  🧬 AI Research & Development Initiative
  &nbsp;&nbsp;&nbsp;&nbsp;

  🏆 India's Largest AI Learning Platform
  &nbsp;&nbsp;&nbsp;&nbsp;

  📚 Learn Python, AI & Data Science
  &nbsp;&nbsp;&nbsp;&nbsp;

  🎯 AI Career & Placement Mission
  &nbsp;&nbsp;&nbsp;&nbsp;

  🖥️ Cloud Computing & AI Infrastructure
  &nbsp;&nbsp;&nbsp;&nbsp;

  🤖 AI Chatbot & Automation Systems
  &nbsp;&nbsp;&nbsp;&nbsp;

  🔬 Computer Vision & NLP Programs
  &nbsp;&nbsp;&nbsp;&nbsp;

  📱 AI App Development Training
  &nbsp;&nbsp;&nbsp;&nbsp;

  🌍 Building AI Powered Vikshit Bharat 2047 🇮🇳

</marquee>

      {/* ==========================
          WELCOME TEXT
      ========================== */}

      <div className="max-w-7xl mx-auto text-center py-20 px-6">

        <h1 className="text-5xl md:text-7xl font-black text-[#7C2D12]">

          Empowering India Through Education

        </h1>

        <p className="text-2xl text-gray-700 mt-10 leading-10 max-w-5xl mx-auto">

          A Mission For Vikshit Bharat 2047
          is dedicated towards empowering
          youth with modern education,
          technology, AI innovation,
          digital transformation,
          and nation-building skills
          for a stronger India.

        </p>

      </div>

      {/* ==========================
          POPULAR COURSES
      ========================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-black text-[#7C2D12]">

            Popular Courses

          </h1>

          <p className="text-gray-600 mt-6 text-lg">

            Explore high quality programs
            designed for India’s future leaders.

          </p>

        </div>

        {/* COURSES GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {
            courses?.length > 0 ? (

              courses?.map(
                (course) => (

                  <div
                    key={course.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
                  >

                    {/* IMAGE */}

                    <div className="h-[220px] bg-gradient-to-r from-black to-[#7C2D12] flex items-center justify-center">

                      <h1 className="text-white text-3xl font-bold text-center px-4">

                        {course.title}

                      </h1>

                    </div>

                    {/* CONTENT */}

                    <div className="p-8">

                      <h2 className="text-3xl font-bold">

                        {course.title}

                      </h2>

                      <p className="text-gray-600 mt-4 leading-7">

                        {course.description}

                      </p>

                      <div className="flex flex-wrap gap-4 mt-6">

                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-sm">

                          <FaClock />

                          {course.duration}

                        </div>

                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-sm">

                          <FaSignal />

                          {course.level}

                        </div>

                      </div>

                      <div className="mt-8 flex justify-between items-center">

                        <h3 className="text-3xl font-bold text-[#7C2D12]">

                          ₹{course.price}

                        </h3>

                        <Link
                          to={`/course/${course.id}`}
                          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-[#7C2D12] transition"
                        >

                          Explore

                        </Link>

                      </div>

                    </div>

                  </div>

                )
              )

            ) : (

              <div className="col-span-3 text-center text-2xl text-gray-400">

                No Courses Found

              </div>

            )
          }

        </div>

      </section>

      <Features />

      <Testimonials />

      {/* CONTACT */}

      <section className="bg-black text-white py-16 mt-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-black text-orange-300">

            Contact Us

          </h1>

          <p className="text-2xl mt-8">

            📞 +91 9876543210

          </p>

          <p className="text-2xl mt-4">

            📧 support@vikshitbharat2047.in

          </p>

          <p className="text-xl mt-6 text-orange-200">

            A Mission For Vikshit Bharat 2047

          </p>

        </div>

      </section>

      <Footer />

    </div>

  );

}

export default LandingPage;