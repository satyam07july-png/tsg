import React, { useState } from "react";

import {
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";

function Academic() {

  const [educationType, setEducationType] = useState("school");

  const [board, setBoard] = useState("");

  const [selectedState, setSelectedState] = useState("");

  const [selectedClass, setSelectedClass] = useState("");

  const [selectedCourse, setSelectedCourse] = useState("");

  const [selectedSemester, setSelectedSemester] = useState("");

  const [stream, setStream] = useState("");

  const [step, setStep] = useState(1);

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

  <section className="bg-[#0B1220] text-white border-b-4 border-[#D4A017]">

    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center">

        <h1 className="text-5xl md:text-6xl font-bold">

          Academic Portal

        </h1>

        <p className="text-orange-300 mt-6 text-xl">

          National Education & Learning Platform

        </p>

        <div className="w-28 h-1 bg-[#D4A017] mx-auto mt-6"></div>

        <p className="text-slate-300 mt-8 max-w-4xl mx-auto leading-8">

          Explore School Education,
          Undergraduate and Postgraduate
          Programs through one
          integrated academic portal.

        </p>

      </div>

    </div>

  </section>

  {/* ==========================
          STEPPER
  ========================== */}

  <div className="max-w-6xl mx-auto px-6 mt-12">

    <div className="flex items-center justify-center gap-4">

      {[1,2,3,4,5].map((item)=>(

        <div
          key={item}
          className={`
          w-12
          h-12
          rounded-full
          flex
          items-center
          justify-center
          font-bold
          border-2
          transition-all
          ${
            step >= item
            ? "bg-[#0B1220] text-white border-[#D4A017]"
            : "bg-white border-slate-300"
          }
          `}
        >

          {item}

        </div>

      ))}

    </div>

  </div>

  {/* ==========================
          MAIN CARD
  ========================== */}

  <div className="max-w-6xl mx-auto px-6 py-12">

    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-10">

      {/* STEP 1 */}

      {step === 1 && (

        <>

          <h2 className="text-4xl font-bold text-center text-[#0B1220]">

            Select Academic Category

          </h2>

          <p className="text-center text-slate-500 mt-4">

            Choose your education level.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            <button

              onClick={()=>{
                setEducationType("school");
                setStep(2);
              }}

              className="border p-10 hover:border-[#7C2D12] transition"

            >

              <FaBookOpen className="text-5xl mx-auto mb-6"/>

              <h3 className="text-2xl font-bold">

                Schooling

              </h3>

            </button>

            <button

              onClick={()=>{
                setEducationType("ug");
                setStep(2);
              }}

              className="border p-10 hover:border-[#7C2D12] transition"

            >

              <FaGraduationCap className="text-5xl mx-auto mb-6"/>

              <h3 className="text-2xl font-bold">

                Undergraduate

              </h3>

            </button>

            <button

              onClick={()=>{
                setEducationType("pg");
                setStep(2);
              }}

              className="border p-10 hover:border-[#7C2D12] transition"

            >

              <FaGraduationCap className="text-5xl mx-auto mb-6"/>

              <h3 className="text-2xl font-bold">

                Postgraduate

              </h3>

            </button>

          </div>

        </>

      )}
    
        {/* ==========================
            STEP 2
      ========================== */}

      {step === 2 && (

        <>

          {/* SCHOOLING */}

          {educationType === "school" && (

            <>

              <h2 className="text-4xl font-bold text-center text-[#0B1220]">
                Select Education Board
              </h2>

              <p className="text-center text-slate-500 mt-4">
                Choose your education board
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                <button
                  onClick={() => {
                    setBoard("CBSE");
                    setStep(3);
                  }}
                  className="border rounded-xl p-10 hover:border-[#7C2D12] hover:bg-slate-50 hover:shadow-lg transition-all"
                >
                  <h3 className="text-3xl font-bold">
                    CBSE
                  </h3>

                  <p className="mt-3 text-slate-500">
                    Central Board of Secondary Education
                  </p>

                </button>

                <button
                  onClick={() => {
                    setBoard("STATE");
                    setStep(3);
                  }}
                  className="border rounded-xl p-10 hover:border-[#7C2D12] hover:bg-slate-50 hover:shadow-lg transition-all"
                >
                  <h3 className="text-3xl font-bold">
                    State Board
                  </h3>

                  <p className="mt-3 text-slate-500">
                    Choose your State Education Board
                  </p>

                </button>

              </div>

            </>

          )}

          {/* UG */}

          {educationType === "ug" && (

            <>

              <h2 className="text-4xl font-bold text-center text-[#0B1220]">
                Select Undergraduate Course
              </h2>

              <p className="text-center text-slate-500 mt-4">
                Choose your UG program
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">

                {ugCourses.map((course) => (

                  <button
                    key={course}
                    onClick={() => {
                      setSelectedCourse(course);
                      setStep(3);
                    }}
                    className="border rounded-lg p-6 hover:border-[#7C2D12] hover:bg-slate-50 transition-all"
                  >
                    {course}
                  </button>

                ))}

              </div>

            </>

          )}

          {/* PG */}

          {educationType === "pg" && (

            <>

              <h2 className="text-4xl font-bold text-center text-[#0B1220]">
                Select Postgraduate Course
              </h2>

              <p className="text-center text-slate-500 mt-4">
                Choose your PG program
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">

                {pgCourses.map((course) => (

                  <button
                    key={course}
                    onClick={() => {
                      setSelectedCourse(course);
                      setStep(3);
                    }}
                    className="border rounded-lg p-6 hover:border-[#7C2D12] hover:bg-slate-50 transition-all"
                  >
                    {course}
                  </button>

                ))}

              </div>

            </>

          )}

          <div className="flex justify-center mt-12">

            <button
              onClick={() => setStep(1)}
              className="bg-[#0B1220] text-white px-8 py-3 rounded-lg hover:bg-[#7C2D12] transition"
            >
              Back
            </button>

          </div>

        </>

      )}
      {/* ==========================
            STEP 3
      ========================== */}

      {step === 3 && (

        <>

          {/* ================= SCHOOL ================= */}

          {educationType === "school" && (

            <>

              {/* STATE BOARD */}

              {board === "STATE" && !selectedState && (

                <>

                  <h2 className="text-4xl font-bold text-center text-[#0B1220]">
                    Select State
                  </h2>

                  <p className="text-center text-slate-500 mt-4">
                    Choose your State Board
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">

                    {indianStates.map((state) => (

                      <button
                        key={state}
                        onClick={() => setSelectedState(state)}
                        className="border rounded-lg p-5 hover:border-[#7C2D12] hover:bg-slate-50 transition"
                      >
                        {state}
                      </button>

                    ))}

                  </div>

                </>

              )}

              {/* CLASS */}

              {(board === "CBSE" || selectedState) && (

                <>

                  <h2 className="text-4xl font-bold text-center text-[#0B1220] mt-4">
                    Select Class
                  </h2>

                  <p className="text-center text-slate-500 mt-4">
                    Choose your class
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-12">

                    {["5","6","7","8","9","10","11","12"].map((cls) => (

                      <button
                        key={cls}
                        onClick={() => {
                          setSelectedClass(cls);
                          setStep(4);
                        }}
                        className="border rounded-lg py-6 hover:border-[#7C2D12] hover:bg-slate-50 transition"
                      >
                        Class {cls}
                      </button>

                    ))}

                  </div>

                </>

              )}

            </>

          )}

          {/* ================= UG ================= */}

          {educationType === "ug" && (

            <>

              <h2 className="text-4xl font-bold text-center text-[#0B1220]">
                Select Semester
              </h2>

              <p className="text-center text-slate-500 mt-4">
                {selectedCourse}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

                {[1,2,3,4,5,6,7,8].map((sem) => (

                  <button
                    key={sem}
                    onClick={() => {
                      setSelectedSemester(sem);
                      setStep(4);
                    }}
                    className="border rounded-lg py-6 hover:border-[#7C2D12] hover:bg-slate-50 transition"
                  >
                    Semester {sem}
                  </button>

                ))}

              </div>

            </>

          )}

          {/* ================= PG ================= */}

          {educationType === "pg" && (

            <>

              <h2 className="text-4xl font-bold text-center text-[#0B1220]">
                Select Semester
              </h2>

              <p className="text-center text-slate-500 mt-4">
                {selectedCourse}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

                {[1,2,3,4].map((sem) => (

                  <button
                    key={sem}
                    onClick={() => {
                      setSelectedSemester(sem);
                      setStep(4);
                    }}
                    className="border rounded-lg py-6 hover:border-[#7C2D12] hover:bg-slate-50 transition"
                  >
                    Semester {sem}
                  </button>

                ))}

              </div>

            </>

          )}

          <div className="flex justify-center mt-12">

            <button
              onClick={() => setStep(2)}
              className="bg-[#0B1220] text-white px-8 py-3 rounded-lg hover:bg-[#7C2D12] transition"
            >
              Back
            </button>

          </div>

        </>

      )}

      {/* ==========================
            STEP 4
      ========================== */}

      {step === 4 && (

        <>

          {/* ================= SCHOOL ================= */}

          {educationType === "school" && (

            <>

              {/* CLASS 11 & 12 */}

              {(selectedClass === "11" || selectedClass === "12") && !stream && (

                <>

                  <h2 className="text-4xl font-bold text-center text-[#0B1220]">
                    Select Stream
                  </h2>

                  <p className="text-center text-slate-500 mt-4">
                    Choose your stream
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                    {["Science","Commerce","Arts"].map((item)=>(

                      <button
                        key={item}
                        onClick={()=>setStream(item)}
                        className="border rounded-lg p-10 hover:border-[#7C2D12] hover:bg-slate-50 transition"
                      >
                        {item}
                      </button>

                    ))}

                  </div>

                </>

              )}

              {/* SUBJECTS */}

              {(selectedClass !== "11" && selectedClass !== "12") || stream ? (

                <>

                  <h2 className="text-4xl font-bold text-center text-[#0B1220]">
                    Select Subject
                  </h2>

                  <p className="text-center text-slate-500 mt-4">
                    Choose your subject
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">

                    {(
                      selectedClass === "11" || selectedClass === "12"
                        ? stream === "Science"
                          ? ["Physics","Chemistry","Mathematics","Biology","Computer Science"]
                          : stream === "Commerce"
                          ? ["Accountancy","Business Studies","Economics","Mathematics","English"]
                          : ["History","Political Science","Geography","Economics","English"]
                        : [
                            "Mathematics",
                            "Science",
                            "English",
                            "Hindi",
                            "Social Science",
                            "Computer Science",
                          ]
                    ).map((subject)=>(

                      <button
                        key={subject}
                        onClick={()=>{
                          setStep(5);
                        }}
                        className="border rounded-lg py-8 hover:border-[#7C2D12] hover:bg-slate-50 transition"
                      >
                        {subject}
                      </button>

                    ))}

                  </div>

                </>

              ) : null}

            </>

          )}

          {/* ================= UG ================= */}

          {(educationType === "ug" || educationType === "pg") && (

            <>

              <h2 className="text-4xl font-bold text-center text-[#0B1220]">
                Select Subject
              </h2>

              <p className="text-center text-slate-500 mt-4">
                {selectedCourse} • Semester {selectedSemester}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">

                {[
                  "Core Subject",
                  "Practical",
                  "Lab",
                  "Assignment",
                  "Project",
                  "Elective",
                  "Skill Enhancement",
                  "Open Elective",
                ].map((subject)=>(

                  <button
                    key={subject}
                    onClick={()=>{
                      setStep(5);
                    }}
                    className="border rounded-lg py-8 hover:border-[#7C2D12] hover:bg-slate-50 transition"
                  >
                    {subject}
                  </button>

                ))}

              </div>

            </>

          )}

          <div className="flex justify-center mt-12">

            <button
              onClick={()=>setStep(3)}
              className="bg-[#0B1220] text-white px-8 py-3 rounded-lg hover:bg-[#7C2D12] transition"
            >
              Back
            </button>

          </div>

        </>

      )}

      {/* ==========================
            STEP 5
      ========================== */}

      {step === 5 && (

        <>

          <h2 className="text-4xl font-bold text-center text-[#0B1220]">

            {selectedSubject || "Learning Resources"}

          </h2>

          <p className="text-center text-slate-500 mt-4">

            Choose a learning resource

          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

            {[
              "Video Lectures",
              "Study Notes",
              "Assignments",
              "Mock Tests",
              "Previous Year Papers",
              "Books & PDFs",
              "Quiz",
              "Discussion Forum",
            ].map((item) => (

              <button
                key={item}
                className="
                  border
                  rounded-lg
                  py-8
                  px-4
                  hover:border-[#7C2D12]
                  hover:bg-slate-50
                  transition
                "
              >

                {item}

              </button>

            ))}

          </div>

          <div className="flex justify-center mt-12">

            <button
              onClick={() => setStep(4)}
              className="
                bg-[#0B1220]
                text-white
                px-8
                py-3
                rounded-lg
                hover:bg-[#7C2D12]
                transition
              "
            >

              Back

            </button>

          </div>

        </>

      )}

    </div>

  </div>

</div>

);

}

export default Academic;

