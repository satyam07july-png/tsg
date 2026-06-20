import React from "react";
import {
FaRocket,
FaBrain,
FaCalculator,
FaBook,
FaShieldAlt,
FaGraduationCap,
} from "react-icons/fa";

function Entrance() {
const exams = [
{
title: "JEE",
icon: <FaRocket />,
description: "Engineering Entrance Preparation",
},
{
title: "NEET",
icon: <FaBrain />,
description: "Medical Entrance Preparation",
},
{
title: "CA",
icon: <FaCalculator />,
description: "Chartered Accountancy Programs",
},
{
title: "CUET",
icon: <FaBook />,
description: "University Entrance Preparation",
},
{
title: "NDA",
icon: <FaShieldAlt />,
description: "Defence Entrance Programs",
},
{
title: "CS",
icon: <FaGraduationCap />,
description: "Company Secretary Programs",
},
];

return ( <div className="bg-[#f5f6f8] min-h-screen">

```
  {/* Hero Section */}

  <div className="bg-[#001437] border-b-4 border-[#d4a017] py-16">

    <div className="text-center">

      <h1 className="text-white text-6xl font-bold">
        Entrance Portal
      </h1>

      <p className="text-[#f0c27b] text-2xl mt-5">
        National Competitive Examination Resources
      </p>

    </div>

  </div>

  {/* Main Content */}

  <div className="max-w-[1800px] mx-auto bg-white border border-gray-300 p-16">

    <h2 className="text-center text-[#001437] text-5xl font-semibold">
      Access Entrance Examination Programs
    </h2>

    <div className="w-28 h-1 bg-[#d4a017] mx-auto mt-6"></div>

    <p className="text-center text-gray-600 text-xl mt-10 max-w-5xl mx-auto leading-relaxed">
      Explore structured preparation programs,
      exam specific resources, mentorship support
      and digital learning modules for national
      level entrance examinations.
    </p>

    {/* Stats */}

    <div className="grid md:grid-cols-4 gap-8 mt-20">

      <div className="border border-gray-300 p-10 text-center">
        <h3 className="text-5xl font-bold text-[#001437]">
          6
        </h3>
        <p className="text-gray-600 mt-3 text-xl">
          Entrance Exams
        </p>
      </div>

      <div className="border border-gray-300 p-10 text-center">
        <h3 className="text-5xl font-bold text-[#001437]">
          100+
        </h3>
        <p className="text-gray-600 mt-3 text-xl">
          Courses
        </p>
      </div>

      <div className="border border-gray-300 p-10 text-center">
        <h3 className="text-5xl font-bold text-[#001437]">
          24x7
        </h3>
        <p className="text-gray-600 mt-3 text-xl">
          Learning Access
        </p>
      </div>

      <div className="border border-gray-300 p-10 text-center">
        <h3 className="text-5xl font-bold text-[#001437]">
          Live
        </h3>
        <p className="text-gray-600 mt-3 text-xl">
          Mentorship
        </p>
      </div>

    </div>

  </div>

  {/* Entrance Categories */}

  <div className="max-w-[1800px] mx-auto py-24">

    <h2 className="text-center text-[#001437] text-5xl font-semibold">
      Select Entrance Examination
    </h2>

    <div className="w-28 h-1 bg-[#d4a017] mx-auto mt-6"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {exams.map((exam, index) => (
        <div
          key={index}
          className="
            bg-white
            border
            border-gray-300
            p-10
            text-center
            hover:border-[#d4a017]
            hover:shadow-md
            transition-all
            cursor-pointer
          "
        >

          <div className="text-[#001437] text-5xl flex justify-center mb-6">
            {exam.icon}
          </div>

          <h3 className="text-3xl font-semibold text-[#001437]">
            {exam.title}
          </h3>

          <p className="text-gray-600 mt-4 text-lg">
            {exam.description}
          </p>

        </div>
      ))}
    </div>

  </div>

</div>


);
}

export default Entrance;
