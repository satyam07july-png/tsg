import React, { useState } from "react";

import axios from "axios";

import TeacherSidebar from "../../components/teacher/TeacherSidebar";

const UploadLecture = () => {

  const [lectureData, setLectureData] = useState({

    title: "",

    course_id: "",

    notes_url: ""

  });

  const [video, setVideo] = useState(null);

  const [loading, setLoading] = useState(false);


  // INPUT CHANGE

  const handleChange = (e) => {

    setLectureData({

      ...lectureData,

      [e.target.name]: e.target.value

    });

  };


  // VIDEO CHANGE

  const handleVideoChange = (e) => {

    setVideo(e.target.files[0]);

  };


  // CLOUDINARY VIDEO UPLOAD

  const uploadVideoToCloudinary = async () => {

    const data = new FormData();

    data.append("file", video);

    data.append(

      "upload_preset",

      "YOUR_UPLOAD_PRESET"

    );

    data.append(

      "cloud_name",

      "YOUR_CLOUD_NAME"

    );

    const response = await fetch(

      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/video/upload",

      {

        method: "POST",

        body: data,

      }

    );

    const result = await response.json();

    return result.secure_url;

  };


  // SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      // UPLOAD VIDEO TO CLOUDINARY

      const videoUrl = await uploadVideoToCloudinary();

      // SAVE TO DATABASE

      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}/api/lectures/upload`,

        {

          title: lectureData.title,

          course_id: lectureData.course_id,

          video_url: videoUrl,

          notes_url: lectureData.notes_url,

        }

      );

      alert("Lecture Uploaded Successfully 🚀");

      console.log(response.data);

      setLoading(false);

    }

    catch (error) {

      console.log(error);

      alert("Upload Failed");

      setLoading(false);

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

            {/* VIDEO FILE */}

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

              {

                loading

                  ? "Uploading..."

                  : "Upload Lecture"

              }

            </button>

          </form>

        </div>

      </div>

    </div>

  );

};

export default UploadLecture;