import { useState } from "react";
import axios from "axios";

function AddCourse() {

  const [formData, setFormData] = useState({

    title: "",
    description: "",
    price: "",
    duration: "",
    teacher: "",
    thumbnail: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://https://https://dizitaladda.onrender.com/api/admin/add-course",

        formData

      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Course creation failed");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black flex items-center justify-center p-10 text-white">

      <div className="w-full max-w-4xl bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

        <h1 className="text-5xl font-black">

          Add New Course 🚀

        </h1>

        <p className="text-slate-400 text-lg mt-4">

          Create professional LMS courses for students.

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
              placeholder="Enter course title"
              className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
              required
            />

          </div>

          {/* DESCRIPTION */}
          <div>

            <label className="text-xl font-bold">

              Course Description

            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter course description"
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
                placeholder="₹9999"
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
                placeholder="6 Months"
                className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
                required
              />

            </div>

          </div>

          {/* TEACHER */}
          <div>

            <label className="text-xl font-bold">

              Teacher Name

            </label>

            <input
              type="text"
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              placeholder="Assigned Teacher"
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
              placeholder="Paste image URL"
              className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
              required
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-5 rounded-3xl text-2xl font-black shadow-2xl"
          >

            Create Course

          </button>

        </form>

      </div>

    </div>

  );

}

export default AddCourse;