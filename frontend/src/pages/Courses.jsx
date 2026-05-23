import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Courses() {

  const [courses, setCourses] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses = async () => {

    try {

      axios.get(
  `   ${import.meta.env.VITE_API_URL}/api/courses`
)
      setCourses(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

   const handleDelete = async (id) => {

  try {

    const response = await axios.delete(

      `http://https://https://tsg-qlb1.onrender.com/api/admin/delete-course/${id}`

    );

    alert(response.data.message);

    window.location.reload();

  } catch (error) {

    console.log(error);

    alert("Delete Failed");

  }

};

  return (

    <div className="min-h-screen bg-slate-100">

      {/* HERO */}

      <div className="bg-gradient-to-r from-blue-900 to-slate-900 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-7xl font-bold text-white leading-tight">

            Explore <br />

            Professional Courses

          </h1>

          <p className="text-slate-300 text-xl mt-8 max-w-2xl leading-9">

            Learn industry-ready skills from modern courses
            designed to help students build successful careers.

          </p>

          {/* SEARCH */}

          <div className="mt-12 relative w-full max-w-2xl">

            <input
              type="text"
              placeholder="Search your favorite course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-8 py-5 rounded-2xl outline-none text-lg bg-white shadow-2xl text-slate-800 placeholder:text-slate-400"
            />

            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">

              Search

            </button>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 -mt-12 px-6">

        <div className="bg-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-slate-500 text-lg">

            Total Courses

          </h2>

          <p className="text-5xl font-bold mt-4">

            {courses.length}+

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-slate-500 text-lg">

            Active Students

          </h2>

          <p className="text-5xl font-bold mt-4">

            15K+

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-slate-500 text-lg">

            Certificates

          </h2>

          <p className="text-5xl font-bold mt-4">

            8K+

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-slate-500 text-lg">

            Placement Rate

          </h2>

          <p className="text-5xl font-bold mt-4">

            92%

          </p>

        </div>

      </div>

      {/* COURSES */}

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-bold text-slate-800">

              Trending Courses

            </h1>

            <p className="text-slate-500 mt-4 text-lg">

              Upgrade your skills with our top programs.

            </p>

          </div>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {filteredCourses.map((course) => (

            <div
              key={course.id}
              className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300"
            >

              <div className="relative">

                <img
                  src={course.image}
                  alt={course.title}
                  className="h-72 w-full object-cover"
                />

                <span className="absolute top-5 left-5 bg-white text-blue-900 px-5 py-2 rounded-full font-semibold shadow-lg">

                  Featured

                </span>

              </div>

              <div className="p-8">

                <div className="flex justify-between items-center">

                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">

                    {course.category}

                  </span>

                  <span className="text-2xl font-bold text-blue-900">

                    {course.price}

                  </span>

                </div>

                <h2 className="text-3xl font-bold text-slate-800 mt-6">

                  {course.title}

                </h2>

                <p className="text-slate-500 mt-4 text-lg">

                  {course.duration}

                </p>

                <Link
                  to={`/course/${course.id}`}
                  className="block mt-8 w-full bg-blue-900 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-blue-800 transition text-center"
                >

                  Enroll Now

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Courses;