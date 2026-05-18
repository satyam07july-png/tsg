import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

function EditCourse() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    title: "",
    description: "",
    price: "",
    duration: "",
    teacher: "",
    thumbnail: "",

  });

  // FETCH COURSE
  useEffect(() => {

    const fetchCourse = async () => {

      try {

        const response = await axios.get(

          `http://https://https://dizitaladda.onrender.com/api/admin/course/${id}`

        );

        setFormData(response.data.course);

      } catch (error) {

        console.log(error);

      }

    };

    fetchCourse();

  }, [id]);

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  // UPDATE COURSE
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.put(

        `http://https://https://dizitaladda.onrender.com/api/admin/edit-course/${id}`,

        formData

      );

      alert(response.data.message);

      navigate("/admin/courses");

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black flex items-center justify-center p-10 text-white">

      <div className="w-full max-w-5xl bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

        <h1 className="text-5xl font-black">

          Edit Course ✏️

        </h1>

        <p className="text-slate-400 text-lg mt-4">

          Update your LMS course details professionally.

        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 mt-10"
        >

          {/* TITLE */}
          <div>

            <label className="text-xl font-bold">

              Course Title

            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
              required
            />

          </div>

          {/* DESCRIPTION */}
          <div>

            <label className="text-xl font-bold">

              Description

            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl p-5 outline-none h-40"
              required
            />

          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-8">

            <div>

              <label className="text-xl font-bold">

                Price

              </label>

              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
                required
              />

            </div>

            <div>

              <label className="text-xl font-bold">

                Duration

              </label>

              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
                required
              />

            </div>

          </div>

          {/* TEACHER */}
          <div>

            <label className="text-xl font-bold">

              Teacher

            </label>

            <input
              type="text"
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
              required
            />

          </div>

          {/* THUMBNAIL */}
          <div>

            <label className="text-xl font-bold">

              Thumbnail URL

            </label>

            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
              required
            />

          </div>

          {/* PREVIEW */}
          <div>

            <img
              src={formData.thumbnail}
              alt="thumbnail"
              className="w-full h-72 object-cover rounded-3xl border border-white/10"
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-5 rounded-3xl text-2xl font-black shadow-2xl"
          >

            Update Course 🚀

          </button>

        </form>

      </div>

    </div>

  );

}

export default EditCourse;