import React, { useState } from "react";
import CourseCard from "../components/course/CourseCard";
import courses from "../data/courses";

function CourseListing() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100">

     {/* ==========================
      HERO SECTION
========================== */}

<section className="bg-[#0B1220] text-white border-b-4 border-[#D4A017]">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <h1 className="text-5xl md:text-6xl font-bold">

      Academic Courses

    </h1>

    <p className="text-orange-300 text-xl mt-5">

      Find the perfect course for your academic journey.

    </p>

    <div className="w-28 h-1 bg-[#D4A017] mt-6 rounded-full"></div>

    <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">

      <span className="bg-white/10 px-4 py-2 rounded-full">
        📚 Schooling
      </span>

      <span>›</span>

      <span className="bg-white/10 px-4 py-2 rounded-full">
        CBSE
      </span>

      <span>›</span>

      <span className="bg-white/10 px-4 py-2 rounded-full">
        Class 10
      </span>

      <span>›</span>

      <span className="bg-[#D4A017] text-black px-4 py-2 rounded-full font-semibold">
        Mathematics
      </span>

    </div>

    <div className="mt-8 flex items-center justify-between flex-wrap gap-5">

      <p className="text-slate-300">

        Showing <span className="text-[#D4A017] font-bold">12</span> Courses

      </p>

      <button
        className="
        bg-[#D4A017]
        text-black
        px-6
        py-3
        rounded-lg
        font-semibold
        hover:bg-yellow-500
        transition
        "
      >

        Explore Courses

      </button>

    </div>

  </div>

</section>
      {/* Search */}

      <div className="max-w-7xl mx-auto px-6 py-8">

        <input
          type="text"
          placeholder="Search Courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          border
          border-slate-300
          rounded-lg
          p-4
          outline-none
          focus:border-[#D4A017]
          "
        />

      </div>

      {/* Cards */}

      <div className="max-w-7xl mx-auto px-6 pb-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredCourses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default CourseListing;