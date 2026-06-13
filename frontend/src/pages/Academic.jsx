import React, {
  useState,
} from "react";

import {
  FaBookOpen,
  FaGraduationCap,
  FaBrain,
  FaAtom,
  FaCalculator,
  FaFlask,
  FaGlobe,
} from "react-icons/fa";

function Academic() {

  const [board, setBoard] =
    useState("");

  const [selectedState, setSelectedState] =
    useState("");

  const [selectedClass, setSelectedClass] =
    useState("");

  const [stream, setStream] =
    useState("");

  const indianStates = [

    "Uttar Pradesh",
    "Delhi",
    "Haryana",
    "Punjab",
    "Rajasthan",
    "Maharashtra",
    "Bihar",
    "Gujarat",
    "West Bengal",
    "Tamil Nadu",
    "Karnataka",
    "Kerala",
    "Assam",
    "Odisha",
    "Madhya Pradesh",

  ];

  return (

    <div className="min-h-screen bg-[#f8fafc] px-6 py-16">

      {/* HERO SECTION */}

<div
  className="
  bg-white
  border
  border-slate-300
  overflow-hidden
  "
>

  {/* HEADER */}

  <div
    className="
    bg-[#0B1220]
    text-white
    border-b-4
    border-[#D4A017]
    py-10
    px-6
    "
  >

    <h1
      className="
      text-4xl
      md:text-5xl
      font-bold
      text-center
      "
    >

      Academic Portal

    </h1>

    <p
      className="
      text-center
      text-orange-200
      mt-4
      text-lg
      "
    >

      National Education & Learning Resources Platform

    </p>

  </div>

  {/* CONTENT */}

  <div className="p-10 text-center">

    <h2
      className="
      text-2xl
      md:text-3xl
      font-semibold
      text-[#0B1220]
      "
    >

      Access Curriculum Based Learning Resources

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-4"></div>

    <p
      className="
      text-slate-600
      text-lg
      leading-8
      mt-6
      max-w-4xl
      mx-auto
      "
    >

      Explore board specific academic resources,
      class wise study materials, subject wise content,
      digital learning modules and future ready education
      programs designed for students across India.

    </p>

    {/* QUICK STATS */}

    <div
      className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-6
      mt-10
      "
    >

      <div className="border border-slate-300 p-5">

        <h3 className="text-3xl font-bold text-[#0B1220]">
          15+
        </h3>

        <p className="text-slate-500 mt-2">
          State Boards
        </p>

      </div>

      <div className="border border-slate-300 p-5">

        <h3 className="text-3xl font-bold text-[#0B1220]">
          7
        </h3>

        <p className="text-slate-500 mt-2">
          Classes
        </p>

      </div>

      <div className="border border-slate-300 p-5">

        <h3 className="text-3xl font-bold text-[#0B1220]">
          50+
        </h3>

        <p className="text-slate-500 mt-2">
          Subjects
        </p>

      </div>

      <div className="border border-slate-300 p-5">

        <h3 className="text-3xl font-bold text-[#0B1220]">
          24x7
        </h3>

        <p className="text-slate-500 mt-2">
          Access
        </p>

      </div>

    </div>

  </div>

</div>

      {/* BOARD SELECTION */}

      <div className="max-w-6xl mx-auto mt-24">

        <h2
          className="
          text-5xl
          font-black
          mb-14
          text-center
          text-[#7C2D12]
          "
        >

          Choose Your Board

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* CBSE */}

          <button
            onClick={() => {

              setBoard("CBSE");

              setSelectedState("");

            }}
            className="
            bg-gradient-to-br
            from-white
            to-orange-50
            border
            border-orange-200
            shadow-2xl
            rounded-[40px]
            py-20
            hover:scale-105
            transition-all
            "
          >

            <FaGraduationCap
              className="
              text-7xl
              mx-auto
              text-[#7C2D12]
              mb-8
              "
            />

            <h1
              className="
              text-5xl
              font-black
              "
            >

              CBSE

            </h1>

          </button>

          {/* STATE BOARD */}
<button
  onClick={() => {

    setBoard("STATE");

    setSelectedState("");

    setSelectedClass("");

    setStream("");

  }}
            className="
            bg-gradient-to-br
            from-white
            to-orange-50
            border
            border-orange-200
            shadow-2xl
            rounded-[40px]
            py-20
            hover:scale-105
            transition-all
            "
          >

            <FaBookOpen
              className="
              text-7xl
              mx-auto
              text-[#7C2D12]
              mb-8
              "
            />

            <h1
              className="
              text-5xl
              font-black
              "
            >

              STATE BOARD

            </h1>

          </button>

        </div>

      </div>

      {/* STATE SELECTION */}

      {board === "STATE" && (

        <div className="max-w-7xl mx-auto mt-24">

          <h2
            className="
            text-5xl
            font-black
            text-center
            mb-14
            text-[#7C2D12]
            "
          >

            Choose Your State

          </h2>

          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-8
            "
          >

            {indianStates.map((state) => (

              <button
                key={state}
                onClick={() =>
                  setSelectedState(state)
                }
                className="
                bg-white
                rounded-3xl
                shadow-xl
                py-8
                px-4
                text-xl
                font-bold
                hover:bg-[#7C2D12]
                hover:text-white
                hover:scale-105
                transition-all
                border
                border-orange-100
                "
              >

                {state}

              </button>

            ))}

          </div>

        </div>

      )}

      {/* CLASS SECTION */}

      {(board === "CBSE" ||
        (board === "STATE" &&
          selectedState)) && (

        <div className="max-w-7xl mx-auto mt-28">

          <h2
            className="
            text-5xl
            font-black
            text-center
            mb-14
            text-[#7C2D12]
            "
          >

            Choose Class

          </h2>

          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-4
            lg:grid-cols-7
            gap-8
            "
          >

            {[
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ].map((cls) => (

              <button
                key={cls}
                onClick={() =>
                  setSelectedClass(cls)
                }
                className="
                bg-white
                rounded-3xl
                shadow-xl
                py-10
                text-3xl
                font-black
                hover:bg-[#7C2D12]
                hover:text-white
                hover:scale-105
                transition-all
                border
                border-orange-100
                "
              >

                Class {cls}

              </button>

            ))}

          </div>

        </div>

      )}

      {/* SUBJECTS 6-10 */}

      {selectedClass &&
        selectedClass <= 10 && (

        <div className="max-w-7xl mx-auto mt-28">

          <h2
            className="
            text-5xl
            font-black
            text-center
            mb-14
            text-[#7C2D12]
            "
          >

            Subjects

          </h2>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
            "
          >

            {[
              {
                name: "Mathematics",
                icon: <FaCalculator />,
              },

              {
                name: "Science",
                icon: <FaFlask />,
              },

              {
                name: "English",
                icon: <FaBookOpen />,
              },

              {
                name: "Hindi",
                icon: <FaBookOpen />,
              },

              {
                name: "Social Science",
                icon: <FaGlobe />,
              },

              {
                name: "Computer Science",
                icon: <FaBrain />,
              },

            ].map((subject) => (

              <div
                key={subject.name}
                className="
                bg-white
                rounded-[35px]
                shadow-xl
                p-12
                text-center
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                border
                border-orange-100
                "
              >

                <div
                  className="
                  text-6xl
                  text-[#7C2D12]
                  mb-8
                  flex
                  justify-center
                  "
                >

                  {subject.icon}

                </div>

                <h1
                  className="
                  text-3xl
                  font-black
                  "
                >

                  {subject.name}

                </h1>

              </div>

            ))}

          </div>

        </div>

      )}

      {/* STREAM SECTION */}

      {(selectedClass === "11" ||
        selectedClass === "12") && (

        <div className="max-w-7xl mx-auto mt-28">

          <h2
            className="
            text-5xl
            font-black
            text-center
            mb-14
            text-[#7C2D12]
            "
          >

            Choose Stream

          </h2>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-12
            "
          >

            {[
              "Science",
              "Commerce",
              "Arts",
            ].map((item) => (

              <button
                key={item}
                onClick={() =>
                  setStream(item)
                }
                className="
                bg-white
                rounded-[40px]
                shadow-2xl
                py-20
                text-5xl
                font-black
                hover:bg-[#7C2D12]
                hover:text-white
                hover:scale-105
                transition-all
                border
                border-orange-100
                "
              >

                {item}

              </button>

            ))}

          </div>

        </div>

      )}

      {/* STREAM SUBJECTS */}

      {stream && (

        <div className="max-w-7xl mx-auto mt-28 mb-20">

          <h2
            className="
            text-5xl
            font-black
            text-center
            mb-14
            text-[#7C2D12]
            "
          >

            {stream} Subjects

          </h2>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
            "
          >

            {(stream === "Science"

              ? [
                  "Physics",
                  "Chemistry",
                  "Mathematics",
                  "Biology",
                  "Computer Science",
                ]

              : stream === "Commerce"

              ? [
                  "Accountancy",
                  "Business Studies",
                  "Economics",
                  "Mathematics",
                  "English",
                ]

              : [
                  "History",
                  "Political Science",
                  "Geography",
                  "Economics",
                  "English",
                ]

            ).map((subject) => (

              <div
                key={subject}
                className="
                bg-white
                rounded-[35px]
                shadow-xl
                p-12
                text-center
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                border
                border-orange-100
                "
              >

                <FaAtom
                  className="
                  text-6xl
                  mx-auto
                  text-[#7C2D12]
                  mb-8
                  "
                />

                <h1
                  className="
                  text-3xl
                  font-black
                  "
                >

                  {subject}

                </h1>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>

  );

}

export default Academic;