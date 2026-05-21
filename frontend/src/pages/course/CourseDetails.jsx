import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import axios from "axios";

import {

  FaClock,

  FaSignal,

  FaRupeeSign,

  FaCheckCircle,

} from "react-icons/fa";

const CourseDetails = () => {

  const { id } =
    useParams();

  const [course, setCourse] =
    useState(null);

  // ==========================
  // FETCH COURSE
  // ==========================

  useEffect(() => {

    fetchCourse();

  }, []);

  const fetchCourse =
    async () => {

      try {

        const response =
          await axios.get(

            `${import.meta.env.VITE_API_URL}/api/courses/${id}`

          );

        setCourse(
          response.data.course
        );

      }

      catch (error) {

        console.log(error);

      }

    };

  // LOADING

  if (!course) {

    return (

      <div className="h-screen flex items-center justify-center text-4xl font-bold">

        Loading...

      </div>

    );

  }

  return (

    <div className="bg-slate-100 min-h-screen">

      {/* HERO */}

      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-6xl font-bold">

            {course.title}

          </h1>

          <p className="text-xl mt-8 max-w-3xl leading-9 text-gray-200">

            {
              course.description
            }

          </p>

          {/* DETAILS */}

          <div className="flex flex-wrap gap-6 mt-10">

            {/* DURATION */}

            <div className="bg-white/20 px-6 py-3 rounded-2xl flex items-center gap-3">

              <FaClock />

              {
                course.duration
              }

            </div>

            {/* LEVEL */}

            <div className="bg-white/20 px-6 py-3 rounded-2xl flex items-center gap-3">

              <FaSignal />

              {
                course.level
              }

            </div>

            {/* PRICE */}

            <div className="bg-white/20 px-6 py-3 rounded-2xl flex items-center gap-3">

              <FaRupeeSign />

              {
                course.price
              }

            </div>

          </div>

        </div>

      </div>

      {/* MAIN SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT */}

        <div className="lg:col-span-2">

          {/* WHAT YOU LEARN */}

          <div className="bg-white rounded-3xl p-10 shadow-md">

            <h2 className="text-4xl font-bold mb-8">

              What You'll Learn

            </h2>

            <div className="space-y-5 text-lg">

              <div className="flex items-center gap-4">

                <FaCheckCircle className="text-green-500" />

                Real World Projects

              </div>

              <div className="flex items-center gap-4">

                <FaCheckCircle className="text-green-500" />

                Industry Level Skills

              </div>

              <div className="flex items-center gap-4">

                <FaCheckCircle className="text-green-500" />

                Interview Preparation

              </div>

              <div className="flex items-center gap-4">

                <FaCheckCircle className="text-green-500" />

                Certification Program

              </div>

            </div>

          </div>

          {/* SYLLABUS */}

          <div className="bg-white rounded-3xl p-10 shadow-md mt-10">

            <h2 className="text-4xl font-bold mb-8">

              Course Syllabus

            </h2>

            <div className="space-y-6">

              <div className="border rounded-2xl p-6">

                Module 1 — Basics

              </div>

              <div className="border rounded-2xl p-6">

                Module 2 — Advanced Concepts

              </div>

              <div className="border rounded-2xl p-6">

                Module 3 — Projects

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div className="bg-white rounded-3xl p-10 shadow-md sticky top-10">

            <h2 className="text-5xl font-bold text-red-500">

              ₹{course.price}

            </h2>

            <button className="w-full bg-black text-white py-4 rounded-2xl text-xl font-semibold mt-8 hover:bg-slate-800 transition">

              Enroll Now

            </button>

            <div className="mt-10 space-y-5 text-lg">

              <div>

                ⏳ Duration:
                {" "}
                {
                  course.duration
                }

              </div>

              <div>

                📈 Level:
                {" "}
                {
                  course.level
                }

              </div>

              <div>

                📚 Full Lifetime Access

              </div>

              <div>

                🏆 Certificate Included

              </div>

            </div>

            <Link

              to="/"

              className="block text-center mt-10 text-blue-600 font-semibold"

            >

              ← Back To Courses

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

};

export default CourseDetails;