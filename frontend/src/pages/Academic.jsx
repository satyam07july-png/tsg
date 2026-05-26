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

          🎓

        </div>

        <h1
          className="
          text-5xl
          md:text-7xl
          font-black
          "
        >

          Academic Portal

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

          India's AI Powered Smart Education
          Ecosystem For Future Ready Students

        </p>

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
            onClick={() =>
              setBoard("STATE")
            }
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