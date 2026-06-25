import React from "react";

import {
FaUniversity,
FaShieldAlt,
FaBookOpen,
FaTrain,
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


];

return ( <div className="min-h-screen bg-[#f8fafc] px-6 py-16">


  {/* HERO */}

<div className="bg-white border border-slate-300 overflow-hidden">

  <div className="bg-[#0B1220] text-white border-b-4 border-[#D4A017] py-10">

    <h1 className="text-4xl md:text-5xl font-bold text-center">

      Competition Portal

    </h1>

    <p className="text-center mt-4 text-orange-200">

      Government Examination Preparation Platform

    </p>

  </div>

  <div className="p-10 text-center">

    <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1220]">

      National Competitive Examination Resources

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-4"></div>

    <p className="text-slate-600 text-lg mt-6 max-w-4xl mx-auto leading-8">

      Access examination specific study materials, mock tests,
      previous year papers, current affairs and expert guidance
      for central and state government examinations.

    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

      <div className="border border-slate-300 p-5">
        <h3 className="text-3xl font-bold">50+</h3>
        <p className="text-slate-500 mt-2">Exams</p>
      </div>

      <div className="border border-slate-300 p-5">
        <h3 className="text-3xl font-bold">500+</h3>
        <p className="text-slate-500 mt-2">Mock Tests</p>
      </div>

      <div className="border border-slate-300 p-5">
        <h3 className="text-3xl font-bold">1000+</h3>
        <p className="text-slate-500 mt-2">Study Notes</p>
      </div>

      <div className="border border-slate-300 p-5">
        <h3 className="text-3xl font-bold">24x7</h3>
        <p className="text-slate-500 mt-2">Access</p>
      </div>

    </div>

  </div>

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
      Government Exam Categories
    </h2>

    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-10
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
            py-8
            text-center
            "
          >
  --          <FaUniversity
              className="
              text-5xl
              mx-auto
              mb-4
              "
            />

            <h2
              className="
              text-3xl
              font-black
              "
            >
              {exam.title}
            </h2>
          </div>

          {/* COURSES */}

          <div className="p-8 space-y-4">

            {exam.courses.map((course, i) => (
              <div
                key={i}
                className="
                bg-orange-50
                rounded-2xl
                p-4
                font-bold
                text-lg
                flex
                items-center
                gap-3
                hover:bg-[#7C2D12]
                hover:text-white
                transition-all
                cursor-pointer
                "
              >
                <FaShieldAlt />
                {course}
              </div>
            ))}

          </div>

        </div>
      ))}
    </div>

  </div>

  {/* FEATURES */}

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
      Learning Resources
    </h2>

    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-10
      "
    >

      <div
        className="
        bg-white
        rounded-[35px]
        shadow-xl
        p-12
        text-center
        border
        border-orange-100
        "
      >
        <FaBookOpen
          className="
          text-6xl
          mx-auto
          text-[#7C2D12]
          mb-8
          "
        />

        <h3 className="text-3xl font-black">
          Smart Notes
        </h3>
      </div>

      <div
        className="
        bg-white
        rounded-[35px]
        shadow-xl
        p-12
        text-center
        border
        border-orange-100
        "
      >
        <FaTrain
          className="
          text-6xl
          mx-auto
          text-[#7C2D12]
          mb-8
          "
        />

        <h3 className="text-3xl font-black">
          Mock Tests
        </h3>
      </div>

      <div
        className="
        bg-white
        rounded-[35px]
        shadow-xl
        p-12
        text-center
        border
        border-orange-100
        "
      >
        <FaUniversity
          className="
          text-6xl
          mx-auto
          text-[#7C2D12]
          mb-8
          "
        />

        <h3 className="text-3xl font-black">
          Expert Mentorship
        </h3>
      </div>

    </div>

  </div>

</div>


);
}

export default Competition;
