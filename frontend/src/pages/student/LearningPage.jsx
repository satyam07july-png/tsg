import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

function LearningPage() {

  const { courseId } = useParams();

  const [lectures, setLectures] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const [showAllVideos, setShowAllVideos] = useState(false);


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

      if (response.data.length > 0) {

        setSelectedVideo(response.data[0]);

      }

    }

    catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="min-h-screen bg-zinc-100 p-10">

      {

        selectedVideo && (

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            {/* TITLE */}

            <h1 className="text-4xl font-bold mb-6">

              {selectedVideo.title}

            </h1>

            {/* VIDEO */}

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

            {/* DESCRIPTION */}

            <div className="mt-8">

              <h2 className="text-2xl font-bold mb-3">

                About This Lecture

              </h2>

              <p className="text-slate-600 text-lg leading-8">

                {selectedVideo.description}

              </p>

            </div>

            {/* DOWNLOAD NOTES */}

            {

              selectedVideo.notes_url && (

                <a
                  href={selectedVideo.notes_url}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="inline-block mt-8 bg-blue-900 text-white px-8 py-4 rounded-2xl"
                >

                  Download Notes

                </a>

              )

            }

          </div>

        )

      }


      {/* NEXT VIDEOS */}

      <div className="mt-12">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">

            Next Videos

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

  );

}

export default LearningPage;