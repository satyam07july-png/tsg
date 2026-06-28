import React, { useState } from "react";

import api from "../../lib/api";

import TeacherSidebar from "../../components/teacher/TeacherSidebar";

const UploadLecture = () => {

  const [lectureData, setLectureData] = useState({
    title: "",
    description: "",
    course_id: "",
  });

  const [video, setVideo] = useState(null);

  const [pdf, setPdf] = useState(null);

  const [loading, setLoading] = useState(false);

  // INPUT CHANGE

  const handleChange = (e) => {

    setLectureData({
      ...lectureData,
      [e.target.name]: e.target.value,
    });

  };

  // VIDEO CHANGE

  const handleVideoChange = (e) => {

    setVideo(e.target.files[0]);

  };

  // PDF CHANGE

  const handlePdfChange = (e) => {

    setPdf(e.target.files[0]);

  };

  // SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (!video) {

        alert("Please select video");

        return;

      }

      if (!pdf) {

        alert("Please select PDF");

        return;

      }

      setLoading(true);

      const formData = new FormData();

      // TEXT DATA

      formData.append(
        "title",
        lectureData.title
      );

      formData.append(
        "description",
        lectureData.description
      );

      formData.append(
        "course_id",
        lectureData.course_id
      );

      // FILES

      formData.append(
        "video",
        video
      );

      formData.append(
        "pdf",
        pdf
      );

      console.log(
        "Sending Files To Backend..."
      );

      // API CALL

      const response = await api.post(

        `${import.meta.env.VITE_API_URL}/api/lectures/upload`,

        formData,

        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }

      );

      console.log(response.data);

      alert(
        "Lecture Uploaded Successfully 🚀"
      );

      // RESET FORM

      setLectureData({
        title: "",
        description: "",
        course_id: "",
      });

      setVideo(null);

      setPdf(null);

      setLoading(false);

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Upload Failed"
      );

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
                value={lectureData.title}
              />

            </div>

            {/* DESCRIPTION */}

            <div>

              <label className="block mb-2 font-medium">

                Lecture Description

              </label>

              <textarea
                name="description"
                placeholder="Enter lecture description"
                className="w-full border p-4 rounded-xl outline-none h-40"
                onChange={handleChange}
                value={lectureData.description}
              />

            </div>

            {/* COURSE ID */}

            <div>

              <label className="block mb-2 font-medium">

                Course ID

              </label>

              <input
                type="text"
                name="course_id"
                placeholder="Enter course ID"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleChange}
                value={lectureData.course_id}
              />

            </div>

            {/* VIDEO */}

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

            {/* PDF */}

            <div>

              <label className="block mb-2 font-medium">

                Upload Notes PDF

              </label>

              <input
                type="file"
                accept=".pdf"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handlePdfChange}
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