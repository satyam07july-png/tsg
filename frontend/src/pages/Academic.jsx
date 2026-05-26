import React, {
  useState,
} from "react";

function Academic() {

  const [board, setBoard] =
    useState("");

  const [selectedClass, setSelectedClass] =
    useState("");

  const [stream, setStream] =
    useState("");

  return (

    <div className="min-h-screen bg-[#f8fafc] px-6 py-16">

      {/* TITLE */}

      <div className="text-center">

        <h1
          className="
          text-5xl
          md:text-7xl
          font-black
          text-[#7C2D12]
          "
        >

          Academic Portal

        </h1>

        <p
          className="
          text-gray-600
          text-2xl
          mt-6
          "
        >

          Choose your board and class

        </p>

      </div>

      {/* BOARD SELECTION */}

      <div className="max-w-5xl mx-auto mt-20">

        <h2
          className="
          text-4xl
          font-black
          mb-10
          text-center
          "
        >

          Choose Your Board

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <button
            onClick={() =>
              setBoard("CBSE")
            }
            className="
            bg-white
            shadow-xl
            rounded-3xl
            py-16
            text-4xl
            font-black
            hover:bg-[#7C2D12]
            hover:text-white
            transition
            "
          >

            CBSE

          </button>

          <button
            onClick={() =>
              setBoard("STATE")
            }
            className="
            bg-white
            shadow-xl
            rounded-3xl
            py-16
            text-4xl
            font-black
            hover:bg-[#7C2D12]
            hover:text-white
            transition
            "
          >

            STATE BOARD

          </button>

        </div>

      </div>

      {/* CLASS SECTION */}

      {board && (

        <div className="max-w-7xl mx-auto mt-24">

          <h2
            className="
            text-4xl
            font-black
            text-center
            mb-12
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
            gap-6
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
                rounded-2xl
                shadow-lg
                py-8
                text-3xl
                font-black
                hover:bg-[#7C2D12]
                hover:text-white
                transition
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

        <div className="max-w-7xl mx-auto mt-24">

          <h2
            className="
            text-4xl
            font-black
            text-center
            mb-12
            "
          >

            Subjects

          </h2>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
            "
          >

            {[
              "Mathematics",
              "Science",
              "English",
              "Hindi",
              "Social Science",
              "Computer Science",
            ].map((subject) => (

              <div
                key={subject}
                className="
                bg-white
                rounded-3xl
                shadow-xl
                p-10
                text-center
                text-2xl
                font-bold
                hover:-translate-y-2
                transition
                "
              >

                {subject}

              </div>

            ))}

          </div>

        </div>

      )}

      {/* STREAM SECTION */}

      {(selectedClass === "11" ||
        selectedClass === "12") && (

        <div className="max-w-7xl mx-auto mt-24">

          <h2
            className="
            text-4xl
            font-black
            text-center
            mb-12
            "
          >

            Choose Stream

          </h2>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10
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
                rounded-3xl
                shadow-xl
                py-16
                text-4xl
                font-black
                hover:bg-[#7C2D12]
                hover:text-white
                transition
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

        <div className="max-w-7xl mx-auto mt-24">

          <h2
            className="
            text-4xl
            font-black
            text-center
            mb-12
            "
          >

            {stream} Subjects

          </h2>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
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
                rounded-3xl
                shadow-xl
                p-10
                text-center
                text-2xl
                font-bold
                hover:-translate-y-2
                transition
                "
              >

                {subject}

              </div>

            ))}

          </div>

        </div>

      )}

    </div>

  );

}

export default Academic;