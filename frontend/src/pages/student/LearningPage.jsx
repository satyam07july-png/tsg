import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

function LearningPage() {

  const { courseId } = useParams();

  const [lectures, setLectures] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const [showAllVideos, setShowAllVideos] = useState(false);

  const [activeTab, setActiveTab] = useState("videos");


  // FETCH LECTURES

  useEffect(() => {

    fetchLectures();

  }, []);


  const fetchLectures = async () => {

    try {

      const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/api/lectures/course/${courseId}`

      );

      setLectures(response.data);

      // FIRST VIDEO AUTO PLAY

      if (response.data.length > 0) {

        setSelectedVideo(response.data[0]);

      }

    }

    catch (error) {

      console.log(error);

    }

  };


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


        {/* VIDEOS TAB */}

        {

          activeTab === "videos" && (

            <div>

              {/* MAIN VIDEO */}

              {

                selectedVideo && (

                  <div className="bg-white p-8 rounded-3xl shadow-lg">

                    <h1 className="text-4xl font-bold mb-6">

                      {selectedVideo.title}

                    </h1>

                    <video
                      controls
                      controlsList="nodownload"
                      className="w-full rounded-2xl"
                    >

                      <source
                        src={selectedVideo.video_url}
                        type="video/mp4"
                      />

                    </video>

                  </div>

                )

              }


              {/* NEXT VIDEOS */}

              <div className="mt-12">

                <div className="flex justify-between items-center mb-8">

                  <h2 className="text-3xl font-bold">

                    Course Videos

                  </h2>

                  <button
                    onClick={() =>
                      setShowAllVideos(!showAllVideos)
                    }
                    className="bg-black text-white px-6 py-3 rounded-xl"
                  >

                    {

                      showAllVideos

                        ? "Show Less"

                        : "View All"

                    }

                  </button>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                  {

                    (showAllVideos

                      ? lectures

                      : lectures.slice(0, 3)

                    ).map((lecture) => (

                      <div
                        key={lecture.id}
                        onClick={() =>
                          setSelectedVideo(lecture)
                        }
                        className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-all"
                      >

                        <video
                          className="w-full h-56 object-cover"
                        >

                          <source
                            src={lecture.video_url}
                            type="video/mp4"
                          />

                        </video>

                        <div className="p-5">

                          <h3 className="text-2xl font-bold">

                            {lecture.title}

                          </h3>

                        </div>

                      </div>

                    ))

                  }

                </div>

              </div>

            </div>

          )

        }


        {/* ASSIGNMENTS TAB */}

        {

          activeTab === "assignments" && (

            <div>

              <h1 className="text-5xl font-bold mb-10">

                Assignments

              </h1>

              <div className="space-y-6">

                {

                  lectures.map((lecture) => (

                    lecture.notes_url && (

                      <div
                        key={lecture.id}
                        className="bg-white p-8 rounded-3xl shadow-lg flex justify-between items-center"
                      >

                        <h2 className="text-2xl font-bold">

                          {lecture.title}

                        </h2>

                        <a
                          href={lecture.notes_url}
                          target="_blank"
                          rel="noreferrer"
                          download
                          className="bg-blue-900 text-white px-8 py-4 rounded-2xl"
                        >

                          Download Notes

                        </a>

                      </div>

                    )

                  ))

                }

              </div>

            </div>

          )

        }


        {/* TESTS TAB */}

        {

          activeTab === "tests" && (

            <div>

              <h1 className="text-5xl font-bold mb-10">

                Tests

              </h1>

              <div className="bg-white p-10 rounded-3xl shadow-lg">

                <button
                  className="bg-green-600 text-white px-8 py-4 rounded-2xl"
                >

                  Start Test

                </button>

              </div>

            </div>

          )

        }


        {/* MARKS TAB */}

        {

          activeTab === "marks" && (

            <div>

              <h1 className="text-5xl font-bold mb-10">

                Your Marks

              </h1>

              <div className="bg-white p-10 rounded-3xl shadow-lg">

                <h2 className="text-4xl font-bold">

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