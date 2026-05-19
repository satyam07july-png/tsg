import React, { useState } from "react";

import axios from "axios";

import TeacherSidebar from "../../components/teacher/TeacherSidebar";

const UploadLecture = () => {

  const [lectureData, setLectureData] = useState({

    title: "",

    course_id: "",

    video_url: "",

    notes_url: ""

  });

  // INPUT CHANGE

  const handleChange = (e) => {

    setLectureData({

      ...lectureData,

      [e.target.name]: e.target.value

    });

  };

  // SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}/api/lectures/upload`,

        lectureData

      );

      alert("Lecture Uploaded Successfully 🚀");

      console.log(response.data);

    }

    catch (error) {

      console.log(error);

      alert("Upload Failed");

    }

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

            {/* TITLE */}

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

            {/* COURSE ID */}

            <div>

              <label className="block mb-2 font-medium">

                Course ID

              </label>

              <input
                type="number"
                name="course_id"
                placeholder="Enter course ID"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleChange}
              />

            </div>

            {/* VIDEO URL */}

            <div>

              <label className="block mb-2 font-medium">

                Video URL

              </label>

              <input
                type="text"
                name="video_url"
                placeholder="Paste Cloudinary Video URL"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleChange}
              />

            </div>

            {/* NOTES URL */}

            <div>

              <label className="block mb-2 font-medium">

                Notes PDF URL

              </label>

              <input
                type="text"
                name="notes_url"
                placeholder="Paste Cloudinary PDF URL"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleChange}
              />

            </div>

            {/* BUTTON */}

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