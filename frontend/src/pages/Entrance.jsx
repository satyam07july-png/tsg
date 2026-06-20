import React from "react";
import {
FaRocket,
FaGraduationCap,
FaBook,
FaBrain,
FaCalculator,
FaShieldAlt,
FaSearch,
} from "react-icons/fa";

function Entrance() {
const exams = [
{
title: "JEE",
icon: <FaRocket />,
courses: [
"Class 6 to JEE",
"Class 8 to JEE",
"Class 9 to JEE",
"JEE Advanced",
],
},
{
title: "NEET",
icon: <FaBrain />,
courses: [
"Class 6 to NEET",
"Class 8 to NEET",
"Class 9 to NEET",
"NEET Advanced Biology",
],
},
{
title: "CA",
icon: <FaCalculator />,
courses: [
"CA Foundation",
"CA Intermediate",
"Class 11 Commerce",
"Class 12 Commerce",
],
},
{
title: "CUET",
icon: <FaBook />,
courses: [
"CUET Science",
"CUET Commerce",
"CUET Arts",
"CUET Crash Course",
],
},
{
title: "NDA",
icon: <FaShieldAlt />,
courses: [
"NDA Foundation",
"Class 10 NDA",
"Defence Preparation",
"SSB Training",
],
},
{
title: "CS",
icon: <FaGraduationCap />,
courses: [
"CS Foundation",
"CS Executive",
"Commerce + CS",
"Advanced CS",
],
},
];

return ( <div className="p-8 bg-slate-50 min-h-screen">

```
  {/* Header */}

  <div className="mb-10">
    <h1 className="text-4xl font-bold text-slate-800">
      Entrance Programs
    </h1>

    <p className="text-slate-500 mt-2">
      Access preparation programs for competitive exams.
    </p>
  </div>

  {/* Search */}

  <div className="bg-white rounded-xl shadow-sm border p-4 mb-10 flex items-center gap-3">
    <FaSearch className="text-slate-400" />

    <input
      type="text"
      placeholder="Search exam or course..."
      className="outline-none w-full"
    />
  </div>

  {/* Cards */}

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

    {exams.map((exam, index) => (
      <div
        key={index}
        className="
          bg-white
          rounded-xl
          border
          shadow-sm
          hover:shadow-lg
          transition-all
          duration-300
          overflow-hidden
        "
      >

        <div className="border-b p-6">

          <div className="flex items-center gap-4">

            <div
              className="
                h-14
                w-14
                rounded-lg
                bg-blue-100
                text-blue-700
                flex
                items-center
                justify-center
                text-2xl
              "
            >
              {exam.icon}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {exam.title}
              </h2>

              <p className="text-sm text-slate-500">
                {exam.courses.length} Programs
              </p>
            </div>

          </div>

        </div>

        <div className="p-5">

          <div className="space-y-3">

            {exam.courses.map((course, i) => (
              <div
                key={i}
                className="
                  bg-slate-50
                  border
                  rounded-lg
                  px-4
                  py-3
                  hover:bg-blue-50
                  hover:border-blue-300
                  cursor-pointer
                  transition
                "
              >
                {course}
              </div>
            ))}

          </div>

        </div>

      </div>
    ))}

  </div>

</div>


);
}

export default Entrance;
