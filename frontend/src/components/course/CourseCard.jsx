import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaClock, FaUsers } from "react-icons/fa";

function CourseCard({ course }) {
  return (
    <div
      className="
      bg-white
      rounded-xl
      overflow-hidden
      shadow-md
      border
      border-slate-200
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      {/* Image */}
      <div className="relative">

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-52 object-cover"
        />

        <span
          className="
          absolute
          top-3
          left-3
          bg-red-600
          text-white
          text-xs
          px-3
          py-1
          rounded-full
          font-semibold
          "
        >
          BEST SELLER
        </span>

        <span
          className="
          absolute
          top-3
          right-3
          bg-[#D4A017]
          text-black
          text-xs
          px-3
          py-1
          rounded-full
          font-semibold
          "
        >
          {Math.round(
            ((course.originalPrice - course.price) /
              course.originalPrice) *
              100
          )}
          % OFF
        </span>

      </div>

      {/* Content */}

      <div className="p-5">

        <div className="flex items-center justify-between text-sm">

          <div className="flex items-center gap-1 text-yellow-500">

            <FaStar />

            <span>{course.rating}</span>

          </div>

          <div className="flex items-center gap-1 text-slate-500">

            <FaUsers />

            <span>{course.students}</span>

          </div>

        </div>

        <h3
          className="
          mt-4
          text-lg
          font-bold
          text-[#0B1220]
          line-clamp-2
          "
        >
          {course.title}
        </h3>

        <div className="flex items-center gap-2 mt-4 text-slate-600">

          <FaClock />

          <span>{course.duration}</span>

        </div>

        <p className="mt-2 text-sm text-slate-500">

          {course.language}

        </p>

        {/* Instructor */}

<div className="flex items-center justify-between mt-4">

  <div>

    <p className="text-sm text-slate-500">

      Instructor

    </p>

    <h4 className="font-semibold text-[#0B1220]">

      {course.instructor}

    </h4>

  </div>

  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">

    Live Classes

  </span>

</div>

{/* Course Features */}

<div className="grid grid-cols-2 gap-3 mt-5 text-sm">

  <div className="bg-slate-50 rounded-lg p-3 text-center">

    <br />

    <span className="font-semibold">

      {course.videos}

    </span>

    <p className="text-slate-500">

      Videos

    </p>

  </div>

  <div className="bg-slate-50 rounded-lg p-3 text-center">

    <br />

    <span className="font-semibold">

      {course.notes}

    </span>

    <p className="text-slate-500">

      Notes

    </p>

  </div>

  <div className="bg-slate-50 rounded-lg p-3 text-center">

    <br />

    <span className="font-semibold">

      {course.tests}

    </span>

    <p className="text-slate-500">

      Tests

    </p>

  </div>

  <div className="bg-slate-50 rounded-lg p-3 text-center">

    <br />

    <span className="font-semibold">

      Yes

    </span>

    <p className="text-slate-500">

      Certificate

    </p>

  </div>

</div>

        {/* Price */}

        <div className="flex items-center gap-3 mt-5">

          <span className="text-2xl font-bold text-[#0B1220]">

            ₹{course.price}

          </span>

          <span className="line-through text-slate-400">

            ₹{course.originalPrice}

          </span>

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-3 mt-6">

          <Link
            to={`/course/${course.id}`}
            className="
            text-center
            border
            border-[#0B1220]
            py-3
            rounded-lg
            font-semibold
            hover:bg-[#0B1220]
            hover:text-white
            transition
            "
          >
            View Details
          </Link>

          <Link
            to="/checkout"
            className="
            text-center
            bg-[#D4A017]
            py-3
            rounded-lg
            font-semibold
            hover:bg-[#b88a10]
            transition
            "
          >
            Buy Now
          </Link>

        </div>

      </div>

    </div>
  );
}

export default CourseCard;