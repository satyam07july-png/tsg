import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const LearningPage = () => {

  const [lectures, setLectures] =
    useState([]);

  const [selectedLecture,
    setSelectedLecture] =
    useState(null);

  const [activeSection,
    setActiveSection] =
    useState("lectures");

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

        setLectures(
          response.data.lectures
        );

        if (
          response.data.lectures.length > 0
        ) {

          setSelectedLecture(
            response.data.lectures[0]
          );

        }

      } catch (error) {

        console.log(error);

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

            📝 Assignments

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

            🧠 Tests

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

            📄 Notes

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

            📈 Progress

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

            🏆 Certificate

          </div>

        </div>

        {/* FOOTER */}

        <div className="p-4 border-t">

          <button className="w-full bg-red-500 hover:bg-red-600 transition-all text-white py-3 rounded-xl">

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

              {/* LECTURE LIST */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

                {
                  lectures.map(
                    (lecture) => (

                      <div

                        key={lecture.id}

                        onClick={() =>
                          setSelectedLecture(
                            lecture
                          )
                        }

                        className={`p-5 rounded-2xl cursor-pointer transition-all shadow-md

                        ${
                          selectedLecture?.id === lecture.id

                            ? "bg-black text-white"

                            : "bg-white hover:scale-[1.02]"
                        }
                        `}
                      >

                        <h2 className="text-xl font-bold">

                          {lecture.title}

                        </h2>

                        <p className="mt-3 text-sm">

                          {
                            lecture.description
                          }

                        </p>

                      </div>

                    )
                  )
                }

              </div>

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

                  </div>

                )
              }

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