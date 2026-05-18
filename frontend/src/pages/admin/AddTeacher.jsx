import { useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaBookOpen,
} from "react-icons/fa";

function AddTeacher() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    specialization: "",
    phone: "",

  });

  // INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  // SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://https://https://dizitaladda.onrender.com/api/admin/add-teacher",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            ...formData,
            role: "teacher",

          }),

        }
      );

      const data = await response.json();

      console.log(data);

      alert("Teacher Added Successfully 🚀");

      setFormData({

        name: "",
        email: "",
        password: "",
        specialization: "",
        phone: "",

      });

    } catch (error) {

      console.log(error);

      alert("Something Went Wrong");

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-10">

      <div className="w-full max-w-3xl bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl relative overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <h1 className="text-5xl font-black">
            Add Teacher 👨‍🏫
          </h1>

          <p className="text-slate-400 text-xl mt-4">
            Create teacher account and assign LMS access.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-8"
          >

            {/* NAME */}
            <div>

              <label className="text-lg font-semibold">
                Full Name
              </label>

              <div className="mt-3 bg-black/20 border border-white/10 rounded-2xl px-5 py-5 flex items-center gap-4">

                <FaUser className="text-cyan-400 text-2xl" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter teacher name"
                  className="bg-transparent outline-none w-full text-lg"
                  required
                />

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label className="text-lg font-semibold">
                Email Address
              </label>

              <div className="mt-3 bg-black/20 border border-white/10 rounded-2xl px-5 py-5 flex items-center gap-4">

                <FaEnvelope className="text-cyan-400 text-2xl" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter teacher email"
                  className="bg-transparent outline-none w-full text-lg"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-lg font-semibold">
                Password
              </label>

              <div className="mt-3 bg-black/20 border border-white/10 rounded-2xl px-5 py-5 flex items-center gap-4">

                <FaLock className="text-cyan-400 text-2xl" />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="bg-transparent outline-none w-full text-lg"
                  required
                />

              </div>

            </div>

            
            {/* PHONE */}
         {/* PHONE */}
<div>

  <label className="text-lg font-semibold">
    Phone Number
  </label>

  <div className="mt-3 bg-black/20 border border-white/10 rounded-2xl px-5 py-5 flex items-center gap-4">

    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Enter phone number"
      className="bg-transparent outline-none w-full text-lg"
      required
    />

  </div>

</div>


            {/* SPECIALIZATION */}
            <div>

              <label className="text-lg font-semibold">
                Specialization
              </label>

              <div className="mt-3 bg-black/20 border border-white/10 rounded-2xl px-5 py-5 flex items-center gap-4">

                <FaBookOpen className="text-cyan-400 text-2xl" />

                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  placeholder="e.g Full Stack Development"
                  className="bg-transparent outline-none w-full text-lg"
                  required
                />

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-[1.02] transition-all duration-300 py-5 rounded-2xl font-black text-xl shadow-2xl"
            >

              Create Teacher Account 🚀

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default AddTeacher;