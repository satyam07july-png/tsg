import React from "react";

import {
  FaRocket,
  FaBook,
  FaBrain,
  FaGraduationCap,
} from "react-icons/fa";

function Entrance() {

  const exams = [

    {
      title: "JEE",
      courses: [
        "Class 6 to JEE",
        "Class 8 to JEE",
        "Class 9 to JEE",
        "Class 11 JEE Advanced",
      ],
    },

    {
      title: "NEET",
      courses: [
        "Class 6 to NEET",
        "Class 8 to NEET",
        "Class 9 to NEET",
        "NEET Advanced Biology",
      ],
    },

    {
      title: "CA",
      courses: [
        "Class 9 to CA",
        "Class 11 Commerce",
        "CA Foundation",
        "CA Intermediate",
      ],
    },

    {
      title: "CUET",
      courses: [
        "CUET Science",
        "CUET Commerce",
        "CUET Arts",
        "CUET Crash Course",
      ],
    },

    {
      title: "NDA",
      courses: [
        "NDA Foundation",
        "Class 10 NDA",
        "Defence Preparation",
        "SSB Interview Training",
      ],
    },
{
  title: "CS",
  courses: [
    "Class 6 to CS",
    "Class 8 to CS",
    "CS Foundation",
    "Company Secretary Executive",
  ],
},

  ];

  return (

    <div className="min-h-screen bg-[#f8fafc] px-6 py-16">

      {/* HERO */}

      <div
        className="
        bg-gradient-to-br
        from-[#0B1220]
        via-[#111827]
        to-[#7C2D12]
        rounded-[40px]
        text-white
        p-16
        text-center
        shadow-2xl
        "
      >

        <div className="text-8xl mb-8">

          🚀

        </div>

        <h1
          className="
          text-5xl
          md:text-7xl
          font-black
          "
        >

          Entrance Portal

        </h1>

        <p
          className="
          text-2xl
          text-orange-200
          mt-8
          max-w-4xl
          mx-auto
          leading-10
          "
        >

          India's Smart Entrance
          Preparation Ecosystem
          For Future Achievers

        </p>

      </div>

      {/* EXAMS */}

      <div className="max-w-7xl mx-auto mt-24">

        <h2
          className="
          text-5xl
          font-black
          text-center
          text-[#7C2D12]
          mb-16
          "
        >

          Choose Your Goal

        </h2>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-12
          "
        >

          {exams.map((exam, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-[40px]
              shadow-2xl
              overflow-hidden
              hover:-translate-y-3
              transition-all
              border
              border-orange-100
              "
            >

              {/* HEADER */}

              <div
                className="
                bg-[#7C2D12]
                text-white
                py-10
                text-center
                "
              >

                <FaGraduationCap
                  className="
                  text-6xl
                  mx-auto
                  mb-6
                  "
                />

                <h1
                  className="
                  text-5xl
                  font-black
                  "
                >

                  {exam.title}

                </h1>

              </div>

              {/* COURSES */}

              <div className="p-10 space-y-6">

                {exam.courses.map(
                  (course, i) => (

                    <div
                      key={i}
                      className="
                      bg-orange-50
                      rounded-2xl
                      p-5
                      font-bold
                      text-lg
                      flex
                      items-center
                      gap-4
                      hover:bg-[#7C2D12]
                      hover:text-white
                      transition-all
                      cursor-pointer
                      "
                    >

                      <FaRocket />

                      {course}

                    </div>

                  )
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Entrance;