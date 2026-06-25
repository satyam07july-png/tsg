import React, { useState } from "react";

import {
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";


const [educationType, setEducationType] = useState("school");

const [board, setBoard] = useState("");

const [selectedState, setSelectedState] = useState("");

const [selectedClass, setSelectedClass] = useState("");

const [selectedCourse, setSelectedCourse] = useState("");

const [selectedSemester, setSelectedSemester] = useState("");

const [stream, setStream] = useState("");

const pgCourses = [
  "MBA",
  "MCA",
  "M.Tech",
  "M.Com",
  "MA",
  "M.Sc",
  "LLM",
  "M.Ed",
  "PGDM",
  "MSW",
  "Data Science",
  "Artificial Intelligence",
];

const indianStates = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const ugCourses = [
  "B.Tech",
  "BCA",
  "BBA",
  "B.Com",
  "BA",
  "B.Sc",
  "LLB",
  "B.Ed",
  "B.Arch",
  "B.Des",
  "B.Pharmacy",
  "BHM",
];

return (

<div className="min-h-screen bg-[#f8fafc]">

{/* ==========================
      HERO SECTION
========================== */}

<div className="max-w-[1800px] mx-auto px-6 py-12">

  <div className="bg-white border border-slate-300 overflow-hidden">

    {/* HEADER */}

    <div className="bg-[#0B1220] border-b-4 border-[#D4A017] text-white py-10">

      <h1 className="text-center text-4xl md:text-5xl font-bold">

        Academic Portal

      </h1>

      <p className="text-center text-orange-200 mt-4 text-lg">

        National Education & Learning Resources Platform

      </p>

    </div>

    {/* CONTENT */}

    <div className="p-10 text-center">

      <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1220]">

        Access Curriculum Based Learning Resources

      </h2>

      <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-4"></div>

      <p
        className="
        mt-6
        text-lg
        text-slate-600
        leading-8
        max-w-5xl
        mx-auto
        "
      >

        Explore curriculum based learning resources,
        board specific education, undergraduate and
        postgraduate programs, digital study material,
        notes, mock tests and academic guidance designed
        for students across India.

      </p>

      {/* STATS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

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

            500+

          </h3>

          <p className="text-slate-500 mt-2">

            Courses

          </p>

        </div>

        <div className="border border-slate-300 p-5">

          <h3 className="text-3xl font-bold text-[#0B1220]">

            1000+

          </h3>

          <p className="text-slate-500 mt-2">

            Study Resources

          </p>

        </div>

        <div className="border border-slate-300 p-5">

          <h3 className="text-3xl font-bold text-[#0B1220]">

            24×7

          </h3>

          <p className="text-slate-500 mt-2">

            Learning Access

          </p>

        </div>

      </div>

    </div>

  </div>

</div>

{/* ==========================
    ACADEMIC CATEGORY
========================== */}

<div className="max-w-[1800px] mx-auto px-6 pb-10">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Academic Category

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-4"></div>

    <p className="mt-4 text-slate-600 text-lg">

      Choose your education level to continue

    </p>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* SCHOOLING */}

    <button
      onClick={() => {

        setEducationType("school");

        setBoard("");

        setSelectedState("");

        setSelectedClass("");

        setSelectedCourse("");

        setSelectedSemester("");

        setStream("");

      }}
      className={`
      border
      p-8
      transition-all
      ${
        educationType === "school"
          ? "bg-[#0B1220] text-white border-[#D4A017]"
          : "bg-white border-slate-300 hover:border-[#7C2D12]"
      }
      `}
    >

      <FaBookOpen className="text-5xl mx-auto mb-6" />

      <h3 className="text-2xl font-bold">

        Schooling

      </h3>

      <p className="mt-3">

        Class 5 to Class 12

      </p>

    </button>

    {/* UG */}

    <button
      onClick={() => {

        setEducationType("ug");

        setBoard("");

        setSelectedState("");

        setSelectedClass("");

        setSelectedCourse("");

        setSelectedSemester("");

        setStream("");

      }}
      className={`
      border
      p-8
      transition-all
      ${
        educationType === "ug"
          ? "bg-[#0B1220] text-white border-[#D4A017]"
          : "bg-white border-slate-300 hover:border-[#7C2D12]"
      }
      `}
    >

      <FaGraduationCap className="text-5xl mx-auto mb-6" />

      <h3 className="text-2xl font-bold">

        Undergraduate

      </h3>

      <p className="mt-3">

        Bachelor's Degree Programs

      </p>

    </button>

    {/* PG */}

    <button
      onClick={() => {

        setEducationType("pg");

        setBoard("");

        setSelectedState("");

        setSelectedClass("");

        setSelectedCourse("");

        setSelectedSemester("");

        setStream("");

      }}
      className={`
      border
      p-8
      transition-all
      ${
        educationType === "pg"
          ? "bg-[#0B1220] text-white border-[#D4A017]"
          : "bg-white border-slate-300 hover:border-[#7C2D12]"
      }
      `}
    >

      <FaGraduationCap className="text-5xl mx-auto mb-6" />

      <h3 className="text-2xl font-bold">

        Postgraduate

      </h3>

      <p className="mt-3">

        Master's Degree Programs

      </p>

    </button>

  </div>

</div>


{/* ==========================
    BOARD SELECTION
========================== */}

{educationType === "school" && (

<div className="max-w-[1800px] mx-auto px-6 pb-12">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Education Board

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

    <p className="mt-4 text-slate-600 text-lg">

      Choose your school education board

    </p>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* CBSE */}

    <button
      onClick={() => {

        setBoard("CBSE");

        setSelectedState("");

        setSelectedClass("");

      }}
      className={`
      border
      p-10
      transition-all
      ${
        board === "CBSE"
          ? "bg-[#0B1220] text-white border-[#D4A017]"
          : "bg-white border-slate-300 hover:border-[#7C2D12]"
      }
      `}
    >

      <h3 className="text-3xl font-bold">

        CBSE

      </h3>

      <p className="mt-4">

        Central Board of Secondary Education

      </p>

    </button>

    {/* STATE BOARD */}

    <button
      onClick={() => {

        setBoard("STATE");

        setSelectedState("");

        setSelectedClass("");

      }}
      className={`
      border
      p-10
      transition-all
      ${
        board === "STATE"
          ? "bg-[#0B1220] text-white border-[#D4A017]"
          : "bg-white border-slate-300 hover:border-[#7C2D12]"
      }
      `}
    >

      <h3 className="text-3xl font-bold">

        State Board

      </h3>

      <p className="mt-4">

        Select your respective state board

      </p>

    </button>

  </div>

</div>

)}

{/* ==========================
    STATE SELECTION
========================== */}

{educationType === "school" &&
 board === "STATE" && (

<div className="max-w-[1800px] mx-auto px-6 pb-12">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Your State

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

    <p className="mt-4 text-slate-600 text-lg">

      Choose your State Education Board

    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {indianStates.map((state) => (

      <button
        key={state}
        onClick={() => {

          setSelectedState(state);

          setSelectedClass("");

        }}
        className={`
        p-5
        border
        transition-all
        font-semibold
        ${
          selectedState === state
            ? "bg-[#0B1220] text-white border-[#D4A017]"
            : "bg-white border-slate-300 hover:border-[#7C2D12]"
        }
        `}
      >

        {state}

      </button>

    ))}

  </div>

</div>

)}

{/* ==========================
    CLASS SELECTION
========================== */}

{educationType === "school" &&
(
  board === "CBSE" ||
  (board === "STATE" && selectedState)
) && (

<div className="max-w-[1800px] mx-auto px-6 pb-12">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Your Class

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

    <p className="mt-4 text-slate-600 text-lg">

      Choose your current academic class

    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">

    {[
      "5",
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
        onClick={() => {

          setSelectedClass(cls);

          setStream("");

        }}
        className={`
        py-6
        border
        text-xl
        font-bold
        transition-all
        ${
          selectedClass === cls
            ? "bg-[#0B1220] text-white border-[#D4A017]"
            : "bg-white border-slate-300 hover:border-[#7C2D12]"
        }
        `}
      >

        Class {cls}

      </button>

    ))}

  </div>

</div>

)}

{/* ==========================
    SUBJECTS (CLASS 5-10)
========================== */}

{educationType === "school" &&
selectedClass &&
["5","6","7","8","9","10"].includes(selectedClass) && (

<div className="max-w-[1800px] mx-auto px-6 pb-12">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Subject

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

    <p className="mt-4 text-slate-600 text-lg">

      Choose your subject to continue

    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

    {[
      "Mathematics",
      "Science",
      "English",
      "Hindi",
      "Social Science",
      "Computer Science",
    ].map((subject) => (

      <button
        key={subject}
        className="
        bg-white
        border
        border-slate-300
        py-8
        font-semibold
        hover:border-[#7C2D12]
        hover:bg-slate-50
        transition-all
        "
      >

        {subject}

      </button>

    ))}

  </div>

</div>

)}

{/* ==========================
    STREAM SELECTION
========================== */}

{educationType === "school" &&
(selectedClass === "11" || selectedClass === "12") && (

<div className="max-w-[1800px] mx-auto px-6 pb-12">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Stream

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {[
      "Science",
      "Commerce",
      "Arts",
    ].map((item) => (

      <button
        key={item}
        onClick={() => setStream(item)}
        className={`
        py-10
        border
        text-2xl
        font-bold
        transition-all
        ${
          stream === item
            ? "bg-[#0B1220] text-white border-[#D4A017]"
            : "bg-white border-slate-300 hover:border-[#7C2D12]"
        }
        `}
      >

        {item}

      </button>

    ))}

  </div>

</div>

)}

{/* ==========================
    STREAM SUBJECTS
========================== */}

{stream && (

<div className="max-w-[1800px] mx-auto px-6 pb-20">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      {stream} Subjects

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

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

      <button
        key={subject}
        className="
        bg-white
        border
        border-slate-300
        py-8
        font-semibold
        hover:border-[#7C2D12]
        hover:bg-slate-50
        transition-all
        "
      >

        {subject}

      </button>

    ))}

  </div>

</div>

)}

{/* ==========================
    UNDERGRADUATE COURSES
========================== */}

{educationType === "ug" && (

<div className="max-w-[1800px] mx-auto px-6 pb-12">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Undergraduate Course

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

    <p className="mt-4 text-slate-600 text-lg">

      Choose your undergraduate program

    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {ugCourses.map((course) => (

      <button
        key={course}
        onClick={() => {

          setSelectedCourse(course);

          setSelectedSemester("");

        }}
        className={`
        py-8
        border
        text-xl
        font-semibold
        transition-all
        ${
          selectedCourse === course
            ? "bg-[#0B1220] text-white border-[#D4A017]"
            : "bg-white border-slate-300 hover:border-[#7C2D12]"
        }
        `}
      >

        {course}

      </button>

    ))}

  </div>

</div>

)}
{/* ==========================
    UG SEMESTER
========================== */}

{educationType === "ug" &&
selectedCourse && (

<div className="max-w-[1800px] mx-auto px-6 pb-12">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Semester

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[1,2,3,4,5,6,7,8].map((sem) => (

      <button
        key={sem}
        onClick={() => setSelectedSemester(sem)}
        className={`
        py-6
        border
        text-xl
        font-bold
        transition-all
        ${
          selectedSemester === sem
            ? "bg-[#0B1220] text-white border-[#D4A017]"
            : "bg-white border-slate-300 hover:border-[#7C2D12]"
        }
        `}
      >

        Semester {sem}

      </button>

    ))}

  </div>

</div>

)}

{/* ==========================
    UG SUBJECTS
========================== */}

{educationType === "ug" &&
selectedSemester && (

<div className="max-w-[1800px] mx-auto px-6 pb-20">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Subjects

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {[
      "Core Subject",
      "Practical",
      "Lab",
      "Assignment",
      "Project",
      "Elective",
      "Skill Enhancement",
      "Open Elective",
    ].map((subject) => (

      <button
        key={subject}
        className="
        bg-white
        border
        border-slate-300
        py-8
        font-semibold
        hover:border-[#7C2D12]
        hover:bg-slate-50
        transition-all
        "
      >

        {subject}

      </button>

    ))}

  </div>

</div>

)}

{/* ==========================
    POSTGRADUATE COURSES
========================== */}

{educationType === "pg" && (

<div className="max-w-[1800px] mx-auto px-6 pb-12">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Postgraduate Course

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

    <p className="mt-4 text-slate-600 text-lg">

      Choose your postgraduate program

    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {pgCourses.map((course) => (

      <button
        key={course}
        onClick={() => {

          setSelectedCourse(course);

          setSelectedSemester("");

        }}
        className={`
        py-8
        border
        text-xl
        font-semibold
        transition-all
        ${
          selectedCourse === course
            ? "bg-[#0B1220] text-white border-[#D4A017]"
            : "bg-white border-slate-300 hover:border-[#7C2D12]"
        }
        `}
      >

        {course}

      </button>

    ))}

  </div>

</div>

)}

{/* ==========================
    PG SEMESTER
========================== */}

{educationType === "pg" &&
selectedCourse && (

<div className="max-w-[1800px] mx-auto px-6 pb-12">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Select Semester

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[1,2,3,4].map((sem) => (

      <button
        key={sem}
        onClick={() => setSelectedSemester(sem)}
        className={`
        py-6
        border
        text-xl
        font-bold
        transition-all
        ${
          selectedSemester === sem
            ? "bg-[#0B1220] text-white border-[#D4A017]"
            : "bg-white border-slate-300 hover:border-[#7C2D12]"
        }
        `}
      >

        Semester {sem}

      </button>

    ))}

  </div>

</div>

)}

{/* ==========================
    PG SUBJECTS
========================== */}

{educationType === "pg" &&
selectedSemester && (

<div className="max-w-[1800px] mx-auto px-6 pb-20">

  <div className="text-center mb-10">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">

      Subjects

    </h2>

    <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3"></div>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {[
      "Core Papers",
      "Research Methodology",
      "Practical / Lab",
      "Elective",
      "Dissertation",
      "Seminar",
      "Project Work",
      "Industry Training",
    ].map((subject) => (

      <button
        key={subject}
        className="
        bg-white
        border
        border-slate-300
        py-8
        font-semibold
        hover:border-[#7C2D12]
        hover:bg-slate-50
        transition-all
        "
      >

        {subject}

      </button>

    ))}

  </div>

</div>

)}
</div>

);