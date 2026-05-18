import React, { useState } from "react";

import TeacherSidebar from "../../components/teacher/TeacherSidebar";

const UploadLecture = () => {

  const [lectureData, setLectureData] = useState({

    title: "",

    course: "",

    video: null,

    notes: null

  });

  const handleChange = (e) => {

    setLectureData({

      ...lectureData,

      [e.target.name]: e.target.value

    });

  };

  const handleVideoChange = (e) => {

    setLectureData({

      ...lectureData,

      video: e.target.files[0]

    });

  };

  const handleNotesChange = (e) => {

    setLectureData({

      ...lectureData,

      notes: e.target.files[0]

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(lectureData);

    alert("Lecture Uploaded Successfully");

  };

  return (

    <div className="flex bg-zinc-100 min-h-screen">

      <TeacherSidebar />

      <div className="flex-1 p-8">

        <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">

            Upload Lecture

          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Lecture Title */}

            <div>

              <label className="block mb-2 font-medium">

                Lecture Title

              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter lecture title"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleChange}
              />

            </div>

            {/* Select Course */}

            <div>

              <label className="block mb-2 font-medium">

                Select Course

              </label>

              <select
                name="course"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleChange}
              >

                <option value="">

                  Choose Course

                </option>

                <option>

                  React JS

                </option>

                <option>

                  Data Science

                </option>

                <option>

                  Machine Learning

                </option>

              </select>

            </div>

            {/* Upload Video */}

            <div>

              <label className="block mb-2 font-medium">

                Upload Video

              </label>

              <input
                type="file"
                accept="video/*"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleVideoChange}
              />

            </div>

            {/* Upload Notes */}

            <div>

              <label className="block mb-2 font-medium">

                Upload Notes PDF

              </label>

              <input
                type="file"
                accept=".pdf"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleNotesChange}
              />

            </div>

            {/* Submit Button */}

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl hover:bg-zinc-800 transition-all"
            >

              Upload Lecture

            </button>

          </form>

        </div>

      </div>

    </div>

  );

};

export default UploadLecture;