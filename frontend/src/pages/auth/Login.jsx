import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaGraduationCap,
} from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

 const response = await axios.post(

  "https://https://dizitaladda.onrender.com/api/auth/login",

  {

    email,

    password,

  }

);

      console.log(response.data);
      localStorage.clear();
      // SAVE TOKEN
      if (response?.data?.token) {

  localStorage.setItem(

    "token",

    response.data.token

  );

}

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful 🚀");

      // ROLE BASED REDIRECT
      if (response.data.user.role === "admin") {

        navigate("/admin");

      } else if (
        response.data.user.role === "teacher"
      ) {

        navigate("/teacher-dashboard");

      } else {

        navigate("/student");

      }

    } catch (error) {

      console.log(error);

      // SAFE ERROR MESSAGE
      if (error.response?.data?.message) {

        alert(error.response.data.message);

      } else {

        alert("Something Went Wrong");

      }

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black flex items-center justify-center px-6 py-10 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl top-[-120px] left-[-120px]"></div>

      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl bottom-[-120px] right-[-120px]"></div>

      {/* CARD */}
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-900 to-slate-950 p-16 text-white relative overflow-hidden">

          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_40%)]"></div>

          <div className="relative z-10">

            <div className="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center backdrop-blur-xl border border-white/10 shadow-xl">

              <FaGraduationCap className="text-5xl" />

            </div>

            <h1 className="text-6xl font-black leading-tight mt-10">

              Welcome To <br /> DIZITAL ADDA

            </h1>

            <p className="text-slate-300 text-xl leading-9 mt-8 max-w-xl">

              Learn modern industry skills with professional courses,
              live classes, assignments, tests, certificates and
              real-world projects.

            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-white p-10 lg:p-16 flex flex-col justify-center">

          <div>

            <h1 className="text-5xl font-black text-slate-900">

              Sign In

            </h1>

            <p className="text-slate-500 text-lg mt-4">

              Continue your learning journey with DIZITAL ADDA.

            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleLogin}
            className="space-y-8 mt-10"
          >

            {/* EMAIL */}
            <div>

              <label className="text-slate-700 font-semibold text-lg">

                Email Address

              </label>

              <div className="flex items-center mt-3 border-2 border-slate-200 rounded-2xl px-5 py-4 focus-within:border-blue-900 transition">

                <FaEnvelope className="text-slate-400 text-xl" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none ml-4 text-lg"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-slate-700 font-semibold text-lg">

                Password

              </label>

              <div className="flex items-center mt-3 border-2 border-slate-200 rounded-2xl px-5 py-4 focus-within:border-blue-900 transition">

                <FaLock className="text-slate-400 text-xl" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none ml-4 text-lg"
                  required
                />

              </div>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 hover:bg-blue-800 transition text-white py-5 rounded-2xl text-xl font-bold shadow-xl"
            >

              {
                loading
                  ? "Please Wait..."
                  : "Login To Dashboard"
              }

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Login;      