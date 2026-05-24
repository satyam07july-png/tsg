import { useNavigate } from "react-router-dom";
import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const LearningPage = () => {
  const navigate = useNavigate();

  const [lectures, setLectures] =
    useState([]);

  const [selectedLecture,
    setSelectedLecture] =
    useState(null);

  const [activeSection,
    setActiveSection] =
    useState("lectures");

const handleLogout = () => {

  localStorage.clear();

  navigate("/login");

};
  // ======================
  // FETCH LECTURES
  // ======================

  useEffect(() => {

    fetchLectures();

  }, []);

  const fetchLectures =
    async () => {

      try {

        const response =
          await axios.get(

            `${import.meta.env.VITE_API_URL}/api/lectures`

          );

        console.log(
          "LECTURES:",
          response.data
        );

        const lectureData =
          response.data?.lectures ||
          response.data ||
          [];

        setLectures(
          lectureData
        );

        if (
          lectureData?.length > 0
        ) {

          setSelectedLecture(
            lectureData[0]
          );

        }

      } catch (error) {

        console.log(
          "FETCH ERROR:",
          error
        );

      }

    };

  return (

    <div className="flex h-screen bg-zinc-100">

      {/* ======================
          SIDEBAR
      ====================== */}

      <div className="w-[320px] bg-white border-r flex flex-col">

        {/* LOGO */}

        <div className="p-6 border-b">

          <h1 className="text-3xl font-bold">

            LMS Panel

          </h1>

        </div>

        {/* MENU */}

        <div className="flex-1 p-4 space-y-3 overflow-y-auto">

          {/* LECTURES */}

          <div

            onClick={() =>
              setActiveSection(
                "lectures"
              )
            }

            className={`p-4 rounded-xl cursor-pointer transition-all

            ${
              activeSection ===
              "lectures"

                ? "bg-black text-white"

                : "bg-zinc-100 hover:bg-zinc-200"
            }
            `}
          >

            📚 Lectures

          </div>
          {
  activeSection ===
  "lectures" && (

    <div>

      {
        selectedLecture && (

          <div>

            {/* MAIN VIDEO */}

            <div className="bg-black rounded-3xl overflow-hidden shadow-xl">

              <video
                controls
                className="w-full h-[650px] bg-black"
              >

                <source
                  src={
                    selectedLecture.video_url
                  }

                  type="video/mp4"

                />

              </video>

            </div>

            {/* VIDEO DETAILS */}

            <div className="mt-8 bg-white rounded-3xl p-8 shadow-md">

              <h1 className="text-4xl font-bold">

                {
                  selectedLecture.title
                }

              </h1>

              <p className="text-zinc-600 mt-4 text-lg leading-relaxed">

                {
                  selectedLecture.description
                }

              </p>

              {/* ACTION BUTTONS */}

              <div className="flex gap-4 mt-8">

                {/* NOTES */}

                <a

                  href={
                    selectedLecture.notes_url
                  }

                  target="_blank"

                  rel="noreferrer"

                  className="bg-black text-white px-6 py-3 rounded-xl"

                >

                  Download Notes

                </a>

                {/* COMPLETE */}

                <button className="bg-green-500 text-white px-6 py-3 rounded-xl">

                  Mark Complete

                </button>

              </div>

            </div>

            {/* NEXT VIDEOS */}

            <div className="mt-12">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-bold">

                  Continue Learning

                </h2>

                <button

                  onClick={() =>
                    setActiveSection(
                      "allLectures"
                    )
                  }

                  className="text-blue-600 font-semibold text-lg"

                >

                  View All →

                </button>

              </div>

              {/* HORIZONTAL VIDEOS */}

              <div className="flex gap-6 overflow-x-auto pb-4">

                {
                  lectures

                    ?.filter(
                      (lecture) =>
                        lecture.id !==
                        selectedLecture.id
                    )

                    ?.map((lecture) => (

                      <div

                        key={lecture.id}

                        onClick={() =>
                          setSelectedLecture(
                            lecture
                          )
                        }

                        className="min-w-[350px] bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"

                      >

                        {/* VIDEO */}

                        <video
                          className="w-full h-[220px] object-cover"
                        >

                          <source
                            src={
                              lecture.video_url
                            }
                          />

                        </video>

                        {/* CONTENT */}

                        <div className="p-5">

                          <h3 className="text-2xl font-bold">

                            {lecture.title}

                          </h3>

                          <p className="text-zinc-600 mt-3">

                            {
                              lecture.description
                            }

                          </p>

                        </div>

                      </div>

                    ))
                }

              </div>

            </div>

          </div>

        )
      }

    </div>

  )
}

          {/* ASSIGNMENTS */}

          <div

            onClick={() =>
              setActiveSection(
                "assignments"
              )
            }

            className={`p-4 rounded-xl cursor-pointer transition-all

            ${
              activeSection ===
              "assignments"

                ? "bg-black text-white"

                : "bg-zinc-100 hover:bg-zinc-200"
            }
            `}
          >

             Assignments

          </div>

          {/* TESTS */}

          <div

            onClick={() =>
              setActiveSection(
                "tests"
              )
            }

            className={`p-4 rounded-xl cursor-pointer transition-all

            ${
              activeSection ===
              "tests"

                ? "bg-black text-white"

                : "bg-zinc-100 hover:bg-zinc-200"
            }
            `}
          >

             Tests

          </div>

          {/* NOTES */}

          <div

            onClick={() =>
              setActiveSection(
                "notes"
              )
            }

            className={`p-4 rounded-xl cursor-pointer transition-all

            ${
              activeSection ===
              "notes"

                ? "bg-black text-white"

                : "bg-zinc-100 hover:bg-zinc-200"
            }
            `}
          >

             Notes

          </div>

          {/* PROGRESS */}

          <div

            onClick={() =>
              setActiveSection(
                "progress"
              )
            }

            className={`p-4 rounded-xl cursor-pointer transition-all

            ${
              activeSection ===
              "progress"

                ? "bg-black text-white"

                : "bg-zinc-100 hover:bg-zinc-200"
            }
            `}
          >

             Progress

          </div>



          {/* CERTIFICATE */}

          <div

            onClick={() =>
              setActiveSection(
                "certificate"
              )
            }

            className={`p-4 rounded-xl cursor-pointer transition-all

            ${
              activeSection ===
              "certificate"

                ? "bg-black text-white"

                : "bg-zinc-100 hover:bg-zinc-200"
            }
            `}
          >

             Certificate

          </div>

        </div>

        {/* FOOTER */}

        <div className="p-4 border-t">

          <button
  onClick={handleLogout}
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
>
  Logout
</button>
        </div>

      </div>

      {/* ======================
          MAIN CONTENT
      ====================== */}

      <div className="flex-1 overflow-y-auto p-8">

        {/* ======================
            LECTURES SECTION
        ====================== */}

        {
          activeSection ===
          "lectures" && (

            <div>

              {/* VIDEO PLAYER */}

              {
                selectedLecture && (

                  <div>

                    <h1 className="text-4xl font-bold mb-4">

                      {
                        selectedLecture.title
                      }

                    </h1>

                    <p className="text-zinc-600 mb-8">

                      {
                        selectedLecture.description
                      }

                    </p>

                    {/* VIDEO */}

                    <div className="bg-black rounded-2xl overflow-hidden shadow-lg mb-8">

                      <video
                        controls
                        className="w-full h-[600px]"
                      >

                        <source

                          src={
                            selectedLecture.video_url
                          }

                          type="video/mp4"

                        />

                      </video>

                    </div>

                    {/* NOTES */}

                    <div className="bg-white p-6 rounded-2xl shadow-md">

                      <h2 className="text-2xl font-bold mb-4">

                        Lecture Notes

                      </h2>

                      <a

                        href={
                          selectedLecture.notes_url
                        }

                        target="_blank"

                        rel="noreferrer"

                        className="bg-black text-white px-6 py-3 rounded-xl inline-block"

                      >

                        Download PDF

                      </a>

                    </div>

                    {/* NEXT VIDEOS */}

                    <div className="mt-12">

                      <div className="flex justify-between items-center mb-6">

                        <h2 className="text-3xl font-bold">

                          Next Lectures

                        </h2>

                        <button

                          onClick={() =>
                            setActiveSection(
                              "allLectures"
                            )
                          }

                          className="text-blue-600 font-semibold"

                        >

                          View All →

                        </button>

                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {
                          lectures

                            ?.filter(
                              (lecture) =>
                                lecture.id !==
                                selectedLecture.id
                            )

                            ?.slice(0, 3)

                            ?.map((lecture) => (

                              <div

                                key={lecture.id}

                                onClick={() =>
                                  setSelectedLecture(
                                    lecture
                                  )
                                }

                                className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"

                              >

                                {/* VIDEO */}

                                <video
                                  className="w-full h-[200px] object-cover"
                                >

                                  <source
                                    src={lecture.video_url}
                                  />

                                </video>

                                {/* CONTENT */}

                                <div className="p-4">

                                  <h3 className="text-xl font-bold">

                                    {lecture.title}

                                  </h3>

                                  <p className="text-sm text-zinc-600 mt-2">

                                    {
                                      lecture.description
                                    }

                                  </p>

                                </div>

                              </div>

                            ))
                        }

                      </div>

                    </div>

                  </div>

                )
              }

            </div>

          )
        }

        {/* ======================
            ALL LECTURES
        ====================== */}

        {
          activeSection ===
          "allLectures" && (

            <div>

              <h1 className="text-4xl font-bold mb-8">

                All Lectures

              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                  lectures?.map(
                    (lecture) => (

                      <div

                        key={lecture.id}

                        onClick={() => {

                          setSelectedLecture(
                            lecture
                          );

                          setActiveSection(
                            "lectures"
                          );

                        }}

                        className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"

                      >

                        {/* VIDEO */}

                        <video
                          className="w-full h-[220px] object-cover"
                        >

                          <source
                            src={lecture.video_url}
                          />

                        </video>

                        {/* CONTENT */}

                        <div className="p-5">

                          <h2 className="text-2xl font-bold">

                            {lecture.title}

                          </h2>

                          <p className="mt-3 text-zinc-600">

                            {
                              lecture.description
                            }

                          </p>

                        </div>

                      </div>

                    )
                  )
                }

              </div>

            </div>

          )
        }

        {/* ======================
            ASSIGNMENTS
        ====================== */}

        {
          activeSection ===
          "assignments" && (

            <div className="bg-white p-8 rounded-2xl shadow-md">

              <h1 className="text-4xl font-bold mb-6">

                Assignments

              </h1>

              <p className="text-zinc-600">

                No assignments uploaded yet.

              </p>

            </div>

          )
        }

        {/* ======================
            TESTS
        ====================== */}

        {
          activeSection ===
          "tests" && (

            <div className="bg-white p-8 rounded-2xl shadow-md">

              <h1 className="text-4xl font-bold mb-6">

                Tests

              </h1>

              <p className="text-zinc-600">

                No tests available yet.

              </p>

            </div>

          )
        }

        {/* ======================
            NOTES
        ====================== */}

        {
          activeSection ===
          "notes" && (

            <div className="bg-white p-8 rounded-2xl shadow-md">

              <h1 className="text-4xl font-bold mb-6">

                Notes

              </h1>

              <p className="text-zinc-600">

                Download lecture notes here.

              </p>

            </div>

          )
        }

        {/* ======================
            PROGRESS
        ====================== */}

        {
          activeSection ===
          "progress" && (

            <div className="bg-white p-8 rounded-2xl shadow-md">

              <h1 className="text-4xl font-bold mb-6">

                Progress

              </h1>

              <div className="w-full bg-zinc-200 h-6 rounded-full overflow-hidden">

                <div className="bg-green-500 h-full w-[70%]"></div>

              </div>

              <p className="mt-4 text-lg">

                70% Course Completed

              </p>

            </div>

          )
        }

        {/* ======================
            CERTIFICATE
        ====================== */}

        {
          activeSection ===
          "certificate" && (

            <div className="bg-white p-8 rounded-2xl shadow-md">

              <h1 className="text-4xl font-bold mb-6">

                Certificate

              </h1>

              <p className="text-zinc-600 mb-6">

                Complete the course to unlock your certificate.

              </p>

              <button className="bg-black text-white px-6 py-3 rounded-xl">

                Download Certificate

              </button>

            </div>

          )
        }

      </div>

    </div>

  );

};

export default LearningPage;