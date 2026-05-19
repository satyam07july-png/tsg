import { Link } from "react-router-dom";
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

    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-bold text-slate-800">

              Popular Courses

            </h1>

            <p className="text-gray-500 mt-5 text-lg">

              Explore our most trending professional courses.

            </p>

          </div>

          {/* EXPLORE BUTTON */}

          <Link
            to="/courses"
            className="bg-blue-900 text-white px-6 py-4 rounded-xl hover:bg-blue-800 transition"
          >

            Explore More Courses

          </Link>

        </div>

        {/* COURSES */}

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {courses.map((course, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="course"
                className="h-60 w-full object-cover"
              />

              <div className="p-8">

                <h2 className="text-2xl font-bold text-slate-800">

                  {course.title}

                </h2>

                <p className="text-gray-500 mt-3">

                  {course.students}

                </p>

                <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">

                  Enroll Now

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default PopularCourses;