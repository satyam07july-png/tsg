import React, { useState } from "react";

function LearningPage() {

  const [activeTab, setActiveTab] = useState("videos");

  return (

    <div className="flex min-h-screen bg-zinc-100">

      {/* SIDEBAR */}

      <div className="w-72 bg-black text-white p-8">

        <h1 className="text-3xl font-bold mb-12">

          Learning Panel

        </h1>

        <div className="space-y-5">

          <button
            onClick={() => setActiveTab("videos")}
            className="w-full text-left p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700"
          >

            Videos

          </button>

          <button
            onClick={() => setActiveTab("assignments")}
            className="w-full text-left p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700"
          >

            Assignments

          </button>

          <button
            onClick={() => setActiveTab("tests")}
            className="w-full text-left p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700"
          >

            Tests

          </button>

          <button
            onClick={() => setActiveTab("marks")}
            className="w-full text-left p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700"
          >

            Marks

          </button>

        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="flex-1 p-10">

        {/* VIDEOS */}

        {

          activeTab === "videos" && (

            <div>

              <h1 className="text-5xl font-bold mb-10">

                Course Videos

              </h1>

              <div className="bg-white p-8 rounded-3xl shadow-lg">

                <video
                  controls
                  className="w-full rounded-2xl"
                >

                  <source
                    src="YOUR_VIDEO_URL"
                    type="video/mp4"
                  />

                </video>

              </div>

            </div>

          )

        }


        {/* ASSIGNMENTS */}

        {

          activeTab === "assignments" && (

            <div>

              <h1 className="text-5xl font-bold mb-10">

                Assignments

              </h1>

              <div className="bg-white p-8 rounded-3xl shadow-lg">

                <a
                  href="#"
                  className="bg-blue-900 text-white px-8 py-4 rounded-2xl"
                >

                  Download Assignment

                </a>

              </div>

            </div>

          )

        }


        {/* TESTS */}

        {

          activeTab === "tests" && (

            <div>

              <h1 className="text-5xl font-bold mb-10">

                Online Tests

              </h1>

              <div className="bg-white p-8 rounded-3xl shadow-lg">

                <button
                  className="bg-green-600 text-white px-8 py-4 rounded-2xl"
                >

                  Start Test

                </button>

              </div>

            </div>

          )

        }


        {/* MARKS */}

        {

          activeTab === "marks" && (

            <div>

              <h1 className="text-5xl font-bold mb-10">

                Your Marks

              </h1>

              <div className="bg-white p-8 rounded-3xl shadow-lg">

                <h2 className="text-3xl font-bold">

                  85 / 100

                </h2>

              </div>

            </div>

          )

        }

      </div>

    </div>

  );

}

export default LearningPage;