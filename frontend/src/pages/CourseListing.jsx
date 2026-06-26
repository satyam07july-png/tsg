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

      {/* Hero */}

      <section className="bg-[#0B1220] text-white py-14 border-b-4 border-[#D4A017]">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">

            Academic Courses

          </h1>

          <p className="mt-4 text-orange-300 text-lg">

            Choose the best course and start your learning journey.

          </p>

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