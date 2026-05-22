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

    <div className="bg-[#f1f1f1] min-h-screen">

      {/* ==========================
          TGS HEADER
      ========================== */}

      <div className="bg-[#9d0033] text-white">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center">

          {/* LOGO */}

          <div className="w-[140px] h-[140px] rounded-full border-[6px] border-white flex items-center justify-center text-5xl font-bold bg-[#6d0023]">

            TGS

          </div>

          {/* TITLE */}

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 text-center">

            TEAM GULSHAN SING (TGS)

          </h1>

          {/* WEBSITE */}

          <h2 className="text-2xl md:text-3xl font-bold mt-4">

            WWW.TGS.GMAIL.COM

          </h2>

          {/* OTHER BRANDS */}

          <div className="mt-8 text-center">

            <h3 className="text-2xl font-semibold">

              OUR OTHER BRANDS

            </h3>

            <div className="flex flex-wrap justify-center gap-8 mt-4 text-3xl md:text-4xl font-bold">

              <span>

                DIZITALADDA

              </span>

              <span>

                NIDADS

              </span>

              <span>

                NIGAPE

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ==========================
          NAVBAR
      ========================== */}

      <div className="bg-black">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5">

          {/* HOME */}

          <Link

            to="/"

            className="text-white py-6 text-center border border-zinc-700 hover:bg-[#9d0033] transition text-lg md:text-xl font-semibold"

          >

            HOME

          </Link>

          {/* STUDENT */}

          <Link

            to="/login"

            className="text-white py-6 text-center border border-zinc-700 hover:bg-[#9d0033] transition text-lg md:text-xl font-semibold"

          >

            STUDENT PORTAL

          </Link>

          {/* ADMIN */}

          <Link

            to="/login"

            className="text-white py-6 text-center border border-zinc-700 hover:bg-[#9d0033] transition text-lg md:text-xl font-semibold"

          >

            ADMIN

          </Link>

          {/* TEACHER */}

          <Link

            to="/login"

            className="text-white py-6 text-center border border-zinc-700 hover:bg-[#9d0033] transition text-lg md:text-xl font-semibold"

          >

            TEACHER

          </Link>

          {/* CONTACT */}

          <div

            className="text-white py-6 text-center border border-zinc-700 text-lg md:text-xl font-semibold"

          >

            CONTACT

          </div>

        </div>

      </div>

      {/* ==========================
          WELCOME TEXT
      ========================== */}

      <div className="max-w-7xl mx-auto text-center py-16 px-6">

        <h1 className="text-5xl md:text-6xl font-bold text-[#9d0033]">

          Welcome To No.1 Educational Platform

        </h1>

        <p className="text-2xl text-gray-700 mt-8 leading-10">

          TEAM GULSHAN SING (TGS)
          provides quality education,
          digital learning solutions,
          competition preparation,
          and skill development programs.

        </p>

      </div>

      {/* ==========================
          POPULAR COURSES
      ========================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* HEADING */}

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-[#9d0033]">

            Popular Courses

          </h1>

          <p className="text-gray-600 mt-6 text-lg">

            Explore our most popular
            professional programs.

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

                    <div className="h-[220px] bg-gradient-to-r from-[#9d0033] to-[#6d0023] flex items-center justify-center">

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

                        {
                          course.description
                        }

                      </p>

                      {/* DETAILS */}

                      <div className="flex flex-wrap gap-4 mt-6">

                        {/* DURATION */}

                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-sm">

                          <FaClock />

                          {
                            course.duration
                          }

                        </div>

                        {/* LEVEL */}

                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-sm">

                          <FaSignal />

                          {
                            course.level
                          }

                        </div>

                      </div>

                      {/* PRICE */}

                      <div className="mt-8 flex justify-between items-center">

                        <h3 className="text-3xl font-bold text-[#9d0033]">

                          ₹{course.price}

                        </h3>

                        <Link

                          to={`/course/${course.id}`}

                          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-[#9d0033] transition"

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

      {/* ==========================
          INFO SECTIONS
      ========================== */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ACADEMY */}

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <div className="bg-[#9d0033] text-white text-center py-5 text-3xl font-bold">

              Academy

            </div>

            <div className="p-6 space-y-5">

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                Full Stack Development Program

              </a>

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                Data Science Masterclass

              </a>

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                AI Engineering Bootcamp

              </a>

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                Python For Beginners

              </a>

            </div>

          </div>

          {/* COMPETITION */}

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <div className="bg-[#9d0033] text-white text-center py-5 text-3xl font-bold">

              Competition

            </div>

            <div className="p-6 space-y-5">

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                SSC CGL Preparation

              </a>

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                Railway Exams Preparation

              </a>

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                Banking Exams Course

              </a>

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                UPSC Interview Training

              </a>

            </div>

          </div>

          {/* SKILLS */}

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <div className="bg-[#9d0033] text-white text-center py-5 text-3xl font-bold">

              Skills

            </div>

            <div className="p-6 space-y-5">

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                Communication Skills

              </a>

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                Interview Preparation

              </a>

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                Resume Building

              </a>

              <a
                href="#"
                className="block text-blue-700 hover:underline"
              >

                Public Speaking

              </a>

            </div>

          </div>

          {/* VIDEOS */}

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <div className="bg-[#9d0033] text-white text-center py-5 text-3xl font-bold">

              Latest Videos

            </div>

            <div className="p-6 space-y-5">

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="block text-blue-700 hover:underline"
              >

                React Full Course 2026

              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="block text-blue-700 hover:underline"
              >

                AI Tutorial For Beginners

              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="block text-blue-700 hover:underline"
              >

                Data Analyst Roadmap

              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="block text-blue-700 hover:underline"
              >

                Machine Learning Projects

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <Features />

      {/* TESTIMONIALS */}

      <Testimonials />

      {/* CONTACT SECTION */}

      <section className="bg-[#9d0033] text-white py-16 mt-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">

            Contact Us

          </h1>

          <p className="text-2xl mt-8">

            📞 +91 9876543210

          </p>

          <p className="text-2xl mt-4">

            📧 support@tgs.com

          </p>

          <p className="text-xl mt-6 text-gray-200">

            TEAM GULSHAN SING (TGS)

          </p>

        </div>

      </section>

      {/* FOOTER */}

      <Footer />

    </div>

  );

}

export default LandingPage;