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
      🇮🇳
    </div>

    <h1
      className="
      text-5xl
      md:text-7xl
      font-black
      "
    >
      Competition Portal
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
      India's Smart Government
      Examination Preparation
      Ecosystem
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
            <FaUniversity
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
