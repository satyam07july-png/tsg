import React from "react";

import {
FaUniversity,
FaShieldAlt,
FaTrain,
FaBookOpen,
} from "react-icons/fa";

function Competition() {

const exams = [
{
title: "UPSC",
courses: [
"IAS Foundation",
"UPSC Prelims",
"UPSC Mains",
"Interview Preparation",
],
},

```
{
  title: "SSC",
  courses: [
    "SSC CGL",
    "SSC CHSL",
    "SSC GD",
    "SSC MTS",
  ],
},

{
  title: "BANKING",
  courses: [
    "IBPS PO",
    "SBI PO",
    "Clerk Preparation",
    "RBI Assistant",
  ],
},

{
  title: "RAILWAY",
  courses: [
    "RRB NTPC",
    "Railway Group D",
    "RRB JE",
    "ALP Preparation",
  ],
},

{
  title: "STATE PCS",
  courses: [
    "UPPCS",
    "BPSC",
    "HPSC",
    "RAS Preparation",
  ],
},

{
  title: "DEFENCE",
  courses: [
    "NDA",
    "CDS",
    "AFCAT",
    "Navy SSR",
  ],
},

{
  title: "POLICE",
  courses: [
    "Delhi Police",
    "UP Police",
    "Constable Exams",
    "SI Preparation",
  ],
},

{
  title: "TEACHING",
  courses: [
    "CTET",
    "UGC NET",
    "DSSSB",
    "KVS Preparation",
  ],
},
```

];

return (

```
<div className="min-h-screen bg-[#f5f6f8]">

  {/* HERO */}

  <div className="bg-[#001437] border-b-4 border-[#D4A017] py-16">

    <div className="text-center">

      <h1 className="text-white text-6xl font-bold">
        Competition Portal
      </h1>

      <p className="text-[#f0c27b] text-2xl mt-5">
        Government & Public Sector Examination Resources
      </p>

    </div>

  </div>

  {/* INTRO SECTION */}

  <div className="max-w-[1800px] mx-auto bg-white border border-gray-300 p-14">

    <h2 className="text-center text-[#001437] text-5xl font-semibold">
      Access Government Examination Programs
    </h2>

    <div className="w-28 h-1 bg-[#D4A017] mx-auto mt-6"></div>

    <p className="text-center text-gray-600 text-xl mt-10 max-w-6xl mx-auto leading-relaxed">
      Explore comprehensive preparation resources,
      exam specific study plans, practice modules,
      previous year papers and expert guidance for
      India's leading government recruitment examinations.
    </p>

    {/* STATS */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      <div className="border border-gray-300 bg-white p-10 text-center">

        <h3 className="text-5xl font-bold text-[#001437]">
          8
        </h3>

        <p className="text-gray-600 text-xl mt-3">
          Exam Categories
        </p>

      </div>

      <div className="border border-gray-300 bg-white p-10 text-center">

        <h3 className="text-5xl font-bold text-[#001437]">
          32+
        </h3>

        <p className="text-gray-600 text-xl mt-3">
          Learning Programs
        </p>

      </div>

      <div className="border border-gray-300 bg-white p-10 text-center">

        <h3 className="text-5xl font-bold text-[#001437]">
          500+
        </h3>

        <p className="text-gray-600 text-xl mt-3">
          Practice Tests
        </p>

      </div>

      <div className="border border-gray-300 bg-white p-10 text-center">

        <h3 className="text-5xl font-bold text-[#001437]">
          24x7
        </h3>

        <p className="text-gray-600 text-xl mt-3">
          Resource Access
        </p>

      </div>

    </div>

  </div>

  {/* EXAMS */}

  <div className="max-w-[1800px] mx-auto py-24">

    <h2 className="text-center text-[#001437] text-5xl font-semibold">
      Select Examination Category
    </h2>

    <div className="w-28 h-1 bg-[#D4A017] mx-auto mt-6"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {exams.map((exam, index) => (

        <div
          key={index}
          className="
          bg-white
          border
          border-gray-300
          overflow-hidden
          hover:border-[#D4A017]
          transition-all
          "
        >

          {/* HEADER */}

          <div className="bg-[#001437] text-white text-center py-8 border-b border-[#D4A017]">

            <FaUniversity
              className="
              text-4xl
              mx-auto
              mb-4
              "
            />

            <h1 className="text-2xl font-bold">
              {exam.title}
            </h1>

          </div>

          {/* COURSES */}

          <div className="p-5 space-y-3">

            {exam.courses.map((course, i) => (

              <div
                key={i}
                className="
                border
                border-gray-300
                p-4
                flex
                items-center
                gap-3
                text-[#001437]
                hover:bg-gray-50
                cursor-pointer
                "
              >

                <FaShieldAlt className="text-[#D4A017]" />

                {course}

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>

  </div>

  {/* FEATURES */}

  <div className="max-w-[1800px] mx-auto pb-24">

    <h2 className="text-center text-[#001437] text-5xl font-semibold">
      Preparation Resources
    </h2>

    <div className="w-28 h-1 bg-[#D4A017] mx-auto mt-6 mb-16"></div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="bg-white border border-gray-300 p-12 text-center">

        <FaBookOpen
          className="
          text-5xl
          mx-auto
          text-[#001437]
          mb-6
          "
        />

        <h3 className="text-3xl font-semibold text-[#001437]">
          Study Material
        </h3>

        <p className="text-gray-600 mt-4">
          Structured notes, topic-wise content
          and revision resources.
        </p>

      </div>

      <div className="bg-white border border-gray-300 p-12 text-center">

        <FaTrain
          className="
          text-5xl
          mx-auto
          text-[#001437]
          mb-6
          "
        />

        <h3 className="text-3xl font-semibold text-[#001437]">
          Mock Assessments
        </h3>

        <p className="text-gray-600 mt-4">
          Full-length practice tests and
          performance analytics.
        </p>

      </div>

      <div className="bg-white border border-gray-300 p-12 text-center">

        <FaUniversity
          className="
          text-5xl
          mx-auto
          text-[#001437]
          mb-6
          "
        />

        <h3 className="text-3xl font-semibold text-[#001437]">
          Expert Guidance
        </h3>

        <p className="text-gray-600 mt-4">
          Dedicated mentorship and
          examination strategy support.
        </p>

      </div>

    </div>

  </div>

</div>
```

);

}

export default Competition;
