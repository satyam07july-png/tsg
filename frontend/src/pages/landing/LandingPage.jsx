import React, {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import Navbar from "../../components/navbar/Navbar";

import Features from "../../components/landing/Features";

import Testimonials from "../../components/landing/Testimonials";

import Footer from "../../components/landing/Footer";

import {

  FaPhoneAlt,

  FaEnvelope,

  FaClock,

  FaSignal,

} from "react-icons/fa";

import heroImage
from "../../assets/hero.jpg";

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

        setCourses(
          response.data.courses
        );

      }

      catch (error) {

        console.log(error);

      }

    };

  return (

    <div className="bg-white min-h-screen">

      {/* ==========================
          TOP BAR
      ========================== */}

      <div className="bg-slate-100 border-b">

        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 text-sm text-gray-600">

          <div className="flex gap-6">

            <div className="flex items-center gap-2">

              <FaPhoneAlt />

              +91 9876543210

            </div>

            <div className="flex items-center gap-2">

              <FaEnvelope />

              support@dizitaladda.com

            </div>

          </div>

          <div className="flex gap-6">

            <Link to="/login">

              Login

            </Link>

          </div>

        </div>

      </div>

      {/* ==========================
          NAVBAR
      ========================== */}

      <Navbar />

      {/* ==========================
          HERO SECTION
      ========================== */}

      <section
        id="home"
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${heroImage})`,
        }}
      >

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-blue-950/75"></div>

        {/* CONTENT */}

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

          <div className="max-w-4xl text-white">

            <h1 className="text-7xl font-bold leading-tight">

              Learn Skills
              That Build
              Your Future

            </h1>

            <p className="text-xl text-gray-200 mt-8 leading-9">

              Professional institutional learning
              management system for students,
              teachers, and administrators.

            </p>

            {/* BUTTONS */}

            <div className="flex gap-6 mt-10">

              <Link

                to="/login"

                className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl text-lg font-semibold"

              >

                Join With Us

              </Link>

              <Link

                to="/login"

                className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-semibold"

              >

                Login

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================
          POPULAR COURSES
      ========================== */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        {/* HEADING */}

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold">

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
            courses?.map(
              (course) => (

                <div

                  key={course.id}

                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"

                >

                  {/* IMAGE */}

                  <div className="h-[220px] bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">

                    <h1 className="text-white text-3xl font-bold">

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

                      <h3 className="text-3xl font-bold text-red-500">

                        ₹{course.price}

                      </h3>

                      <Link

                        to={`/course/${course.id}`}

                        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition"

                      >

                        Explore

                      </Link>

                    </div>

                  </div>

                </div>

              )
            )
          }

        </div>

      </section>

      {/* ==========================
          FEATURES
      ========================== */}

      <Features />

      {/* ==========================
          TESTIMONIALS
      ========================== */}

      <Testimonials />

      {/* ==========================
          FOOTER
      ========================== */}

      <Footer />

    </div>

  );

}

export default LandingPage;