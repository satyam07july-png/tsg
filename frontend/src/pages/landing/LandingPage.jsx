import React, {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import Features from "../../components/landing/Features";

import Testimonials from "../../components/landing/Testimonials";

import Footer from "../../components/landing/Footer";

import {
  FaClock,
  FaSignal,
} from "react-icons/fa";

function LandingPage() {
  

  // ==========================
  // STATES
  // ==========================

  const [courses, setCourses] =
    useState([]);


 const ministers = [

  {
    name: "Dharmendra Pradhan",
    state: "India",
    message:
      "Education is the foundation of a developed India and AI powered learning will shape the future generation.",
  },

  {
    name: "Atishi Marlena",
    state: "Delhi",
    message:
      "Modern digital classrooms and innovation based learning are transforming India’s education ecosystem.",
  },

  {
    name: "Sunil Kumar",
    state: "Bihar",
    message:
      "Skill development and quality education are empowering youth towards a stronger nation.",
  },

  {
    name: "Madhu Bangarappa",
    state: "Karnataka",
    message:
      "Technology integrated education will create future-ready students for global leadership.",
  },

  {
    name: "Ranoj Pegu",
    state: "Assam",
    message:
      "AI, innovation and smart education systems are essential for Vikshit Bharat 2047.",
  },

  {
    name: "Harjot Singh Bains",
    state: "Punjab",
    message:
      "Digital transformation in education will create new opportunities for every student in India.",
  },

  {
    name: "Deepak Kesarkar",
    state: "Maharashtra",
    message:
      "Future ready education and AI learning ecosystems are shaping India’s innovation economy.",
  },

  {
    name: "Brij Kishore Sharma",
    state: "Rajasthan",
    message:
      "Modern classrooms and technology driven education are essential for youth empowerment.",
  },

  {
    name: "Kanwar Pal",
    state: "Haryana",
    message:
      "Education reforms and skill development are accelerating India’s journey towards Vikshit Bharat.",
  },

  {
    name: "Dhan Singh Rawat",
    state: "Uttarakhand",
    message:
      "AI based learning systems will create smarter and globally competitive students.",
  },

  {
    name: "Sabita Indra Reddy",
    state: "Telangana",
    message:
      "Innovation and digital education will transform India into a knowledge superpower.",
  },

  {
    name: "K. Ponmudy",
    state: "Tamil Nadu",
    message:
      "Higher education and AI innovation are the pillars of India’s future economy.",
  },

  {
    name: "Jagdish Devda",
    state: "Madhya Pradesh",
    message:
      "Skill based education and technology training are empowering the next generation.",
  },

  {
    name: "Govind Singh Dotasra",
    state: "Rajasthan",
    message:
      "Educational excellence and digital literacy are building a stronger India.",
  },

  {
    name: "Brajesh Pathak",
    state: "Uttar Pradesh",
    message:
      "Modern education infrastructure and AI integration will empower millions of students.",
  },

  {
    name: "Partha Chatterjee",
    state: "West Bengal",
    message:
      "Innovation driven education ecosystems are shaping the leaders of tomorrow.",
  },

  {
    name: "P. Rajeeve",
    state: "Kerala",
    message:
      "Smart education and digital transformation are creating a future ready India.",
  },

  {
    name: "Ramesh Pokhriyal",
    state: "India",
    message:
      "Technology enabled learning will revolutionize education across the nation.",
  },

  {
    name: "Ashish Sood",
    state: "Goa",
    message:
      "Education, innovation and AI development are the future pillars of national growth.",
  },

  {
    name: "Anbil Mahesh Poyyamozhi",
    state: "Tamil Nadu",
    message:
      "AI, robotics and future technologies are redefining India’s educational vision.",
  },

];
const [currentSlide, setCurrentSlide] =
  useState(0);

const nextSlide = () => {

  setCurrentSlide(

    (prev) =>

      (prev + 1) %

      ministers.length

  );

};

const prevSlide = () => {

  setCurrentSlide(

    (prev) =>

      prev === 0

        ? ministers.length - 1

        : prev - 1

  );

};
  // ==========================
  // FETCH COURSES
  // ==========================

  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses =
    async () => {

      try {

        const response =
          await axios.get(

            `${import.meta.env.VITE_API_URL}/api/courses`

          );

        console.log(
          "COURSE API:",
          response.data
        );

        const courseData =

          response.data?.courses ||

          response.data ||

          [];

        setCourses(

          Array.isArray(courseData)

            ? courseData

            : []

        );

      }

      catch (error) {

        console.log(
          "COURSE FETCH ERROR:",
          error
        );

      }

    };

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      {/* ==========================
          VIKSHIT BHARAT HEADER
      ========================== */}

      <div className="bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#7C2D12] text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">

          {/* LOGO */}

          <div
            className="
            w-[170px]
            h-[170px]
            rounded-full
            border-[6px]
            border-orange-300
            flex
            items-center
            justify-center
            text-5xl
            font-black
            bg-black
            shadow-[0_0_50px_rgba(255,180,0,0.4)]
            "
          >

            TGS

          </div>

          {/* TITLE */}

          <h1
            className="
            text-5xl
            md:text-8xl
            font-black
            mt-10
            text-center
            text-orange-200
            tracking-[4px]
            leading-tight
            drop-shadow-[0_0_35px_rgba(255,180,0,0.5)]
            "
          >

            A MISSION FOR
            <br />
            VIKSHIT BHARAT 2047

          </h1>

          {/* INDIA FIRST */}

          <h2
            className="
            text-2xl
            md:text-4xl
            font-bold
            mt-8
            tracking-[6px]
            text-amber-300
            "
          >

             🇮🇳

          </h2>

          {/* FOUNDATION */}

          <div className="mt-16 text-center">

            <h3
              className="
              text-2xl
              md:text-4xl
              font-bold
              text-orange-300
              tracking-[3px]
              "
            >

              ASSOCIATED BY

            </h3>

            <p
              className="
              text-3xl
              md:text-5xl
              font-black
              mt-6
              text-white
              tracking-[4px]
              "
            >

              TIMELESS FOUNDATION

            </p>

          </div>

        </div>

      </div>

      {/* ==========================
          NAVBAR
      ========================== */}

      <div className="bg-[#0B1220] sticky top-0 z-50 shadow-2xl">

        {/* FIRST ROW */}

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6">

          <Link
            to="/"
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            hover:bg-[#7C2D12]
            transition
            text-lg
            md:text-xl
            font-semibold
            "
          >

            HOME

          </Link>

          <Link
            to="/login"
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            hover:bg-[#7C2D12]
            transition
            text-lg
            md:text-xl
            font-semibold
            "
          >

            STUDENT PORTAL

          </Link>

          <Link
            to="/login"
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            hover:bg-[#7C2D12]
            transition
            text-lg
            md:text-xl
            font-semibold
            "
          >

            ADMIN PORTAL

          </Link>

          <Link
            to="/login"
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            hover:bg-[#7C2D12]
            transition
            text-lg
            md:text-xl
            font-semibold
            "
          >

            TEACHER PORTAL

          </Link>

          <Link
  to="/government-partners"
  className="
  text-white
  py-6
  text-center
  border
  border-orange-400/20
  hover:bg-[#7C2D12]
  transition
  text-lg
  md:text-xl
  font-semibold
  "
>

  GOVERNMENT PARTNERS

</Link>

          <div
            className="
            text-white
            py-6
            text-center
            border
            border-orange-400/20
            text-lg
            md:text-xl
            font-semibold
            "
          >

            CONTACT

          </div>

        </div>

        {/* SECOND ROW */}

<div className="bg-[#1E293B]">

  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5">

    {/* ACADEMIC */}

    <Link
      to="/academic"
      className="
      text-orange-200
      py-5
      text-center
      border
      border-orange-400/20
      hover:bg-[#7C2D12]
      transition
      text-lg
      md:text-xl
      font-bold
      cursor-pointer
      block
      "
    >

      Academic

    </Link>

    {/* ENTRANCE */}

    <Link
      to="/entrance"
      className="
      text-orange-200
      py-5
      text-center
      border
      border-orange-400/20
      hover:bg-[#7C2D12]
      transition
      text-lg
      md:text-xl
      font-bold
      cursor-pointer
      block
      "
    >

      Entrance

    </Link>

    {/* COMPETITION */}

    <Link
      to="/competition"
      className="
      text-orange-200
      py-5
      text-center
      border
      border-orange-400/20
      hover:bg-[#7C2D12]
      transition
      text-lg
      md:text-xl
      font-bold
      cursor-pointer
      block
      "
    >

      Competition

    </Link>

    {/* SKILLING */}

    <Link
      to="/skilling"
      className="
      text-orange-200
      py-5
      text-center
      border
      border-orange-400/20
      hover:bg-[#7C2D12]
      transition
      text-lg
      md:text-xl
      font-bold
      cursor-pointer
      block
      "
    >

      Skilling

    </Link>

    {/* PLACEMENT */}

    <Link
      to="/placement"
      className="
      text-orange-200
      py-5
      text-center
      border
      border-orange-400/20
      hover:bg-[#7C2D12]
      transition
      text-lg
      md:text-xl
      font-bold
      cursor-pointer
      block
      "
    >

      Placement

    </Link>

  </div>

</div>
      </div>

      {/* ==========================
          TOP NEWS TICKER
      ========================== */}
    <div className="bg-yellow-400 border-y-4 border-[#7C2D12] py-3 overflow-hidden">

  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="8"
    className="text-black text-xl font-bold"
  >

    🤖 Artificial Intelligence Revolution
    &nbsp;&nbsp;&nbsp;&nbsp;

    🚀 Machine Learning Development Program
    &nbsp;&nbsp;&nbsp;&nbsp;

    🧠 Deep Learning Research Mission
    &nbsp;&nbsp;&nbsp;&nbsp;

    📊 Data Science & Analytics Training
    &nbsp;&nbsp;&nbsp;&nbsp;

    💻 Full Stack AI Engineering Bootcamp
    &nbsp;&nbsp;&nbsp;&nbsp;

    🔥 Generative AI Innovation Lab
    &nbsp;&nbsp;&nbsp;&nbsp;

    🛰️ AI Powered Digital India Mission
    &nbsp;&nbsp;&nbsp;&nbsp;

    📈 AI For Business Transformation
    &nbsp;&nbsp;&nbsp;&nbsp;

    🤝 Human + AI Future Workforce Program
    &nbsp;&nbsp;&nbsp;&nbsp;

    ⚡ AI Automation & Robotics Training
    &nbsp;&nbsp;&nbsp;&nbsp;

    🌐 Future Tech & Innovation Ecosystem
    &nbsp;&nbsp;&nbsp;&nbsp;

    🧬 AI Research & Development Initiative
    &nbsp;&nbsp;&nbsp;&nbsp;

    🏆 India's Largest AI Learning Platform
    &nbsp;&nbsp;&nbsp;&nbsp;

    📚 Learn Python, AI & Data Science
    &nbsp;&nbsp;&nbsp;&nbsp;

    🎯 AI Career & Placement Mission
    &nbsp;&nbsp;&nbsp;&nbsp;

    🖥️ Cloud Computing & AI Infrastructure
    &nbsp;&nbsp;&nbsp;&nbsp;

    🤖 AI Chatbot & Automation Systems
    &nbsp;&nbsp;&nbsp;&nbsp;

    🔬 Computer Vision & NLP Programs
    &nbsp;&nbsp;&nbsp;&nbsp;

    📱 AI App Development Training
    &nbsp;&nbsp;&nbsp;&nbsp;

    🌍 Building AI Powered Vikshit Bharat 2047 🇮🇳

  </marquee>

</div>
      

      {/* ==========================
          WELCOME TEXT
      ========================== */}

      <div className="max-w-7xl mx-auto text-center py-20 px-6">

        <h1 className="text-5xl md:text-7xl font-black text-[#7C2D12]">

          Empowering India Through Education

        </h1>

        <p className="text-2xl text-gray-700 mt-10 leading-10 max-w-5xl mx-auto">

          A Mission For Vikshit Bharat 2047
          is dedicated towards empowering
          youth with modern education,
          technology, AI innovation,
          digital transformation,
          and nation-building skills
          for a stronger India.

        </p>

      </div>

{/* ==========================
    INDIA EDUCATION SECTIONS
========================== */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* ACADEMIC */}

    <Link
      to="/academic"
      className="
      bg-white
      rounded-3xl
      shadow-xl
      overflow-hidden
      hover:-translate-y-2
      hover:shadow-2xl
      transition-all
      block
      "
    >

      <div className="bg-[#7C2D12] text-white py-5 text-center text-4xl font-black">

        Academic

      </div>

      <div className="p-8 space-y-5">

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          CBSE Digital Learning Program

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          Smart Classroom Education System

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          NEP 2020 Based Learning

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          AI Integrated School Curriculum

        </div>

      </div>

    </Link>

    {/* ENTRANCE */}

    <Link
      to="/entrance"
      className="
      bg-white
      rounded-3xl
      shadow-xl
      overflow-hidden
      hover:-translate-y-2
      hover:shadow-2xl
      transition-all
      block
      "
    >

      <div className="bg-[#7C2D12] text-white py-5 text-center text-4xl font-black">

        Entrance

      </div>

      <div className="p-8 space-y-5">

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          JEE Advanced Preparation

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          NEET Medical Entrance Coaching

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          CUET Preparation Program

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          NDA & Defence Entrance Mission

        </div>

      </div>

    </Link>

    {/* COMPETITION */}

    <Link
      to="/competition"
      className="
      bg-white
      rounded-3xl
      shadow-xl
      overflow-hidden
      hover:-translate-y-2
      hover:shadow-2xl
      transition-all
      block
      "
    >

      <div className="bg-[#7C2D12] text-white py-5 text-center text-4xl font-black">

        Competition

      </div>

      <div className="p-8 space-y-5">

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          SSC CGL Complete Program

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          Railway Recruitment Training

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          Banking Exam Masterclass

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          UPSC Civil Services Preparation

        </div>

      </div>

    </Link>

    {/* SKILLING */}

    <Link
      to="/skilling"
      className="
      bg-white
      rounded-3xl
      shadow-xl
      overflow-hidden
      hover:-translate-y-2
      hover:shadow-2xl
      transition-all
      block
      "
    >

      <div className="bg-[#7C2D12] text-white py-5 text-center text-4xl font-black">

        Skilling

      </div>

      <div className="p-8 space-y-5">

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          Artificial Intelligence & ML

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          Full Stack Development Program

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          Data Science & Analytics

        </div>

        <div className="bg-slate-100 p-5 rounded-2xl font-semibold">

          Digital Marketing & Branding

        </div>

      </div>

    </Link>

  </div>

</section>
      {/* ==========================
          POPULAR COURSES
      ========================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-black text-[#7C2D12]">

            Popular Courses

          </h1>

          <p className="text-gray-600 mt-6 text-lg">

            Explore high quality programs
            designed for India’s future leaders.

          </p>

        </div>

        {/* COURSES GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {
            courses?.length > 0 ? (

              courses?.map(
                (course) => (

                  <div
                    key={course.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
                  >

                    {/* IMAGE */}

                    <div className="h-[220px] bg-gradient-to-r from-black to-[#7C2D12] flex items-center justify-center">

                      <h1 className="text-white text-3xl font-bold text-center px-4">

                        {course.title}

                      </h1>

                    </div>

                    {/* CONTENT */}

                    <div className="p-8">

                      <h2 className="text-3xl font-bold">

                        {course.title}

                      </h2>

                      <p className="text-gray-600 mt-4 leading-7">

                        {course.description}

                      </p>

                      <div className="flex flex-wrap gap-4 mt-6">

                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-sm">

                          <FaClock />

                          {course.duration}

                        </div>

                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-sm">

                          <FaSignal />

                          {course.level}

                        </div>

                      </div>

                      <div className="mt-8 flex justify-between items-center">

                        <h3 className="text-3xl font-bold text-[#7C2D12]">

                          ₹{course.price}

                        </h3>

                        <Link
                          to={`/course/${course.id}`}
                          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-[#7C2D12] transition"
                        >

                          Explore

                        </Link>

                      </div>

                    </div>

                  </div>

                )
              )

            ) : (

              <div className="col-span-3 text-center text-2xl text-gray-400">

                No Courses Found

              </div>

            )
          }

        </div>

      </section>

      <Features />

    
{/* ==========================
    PREMIUM CONTACT SECTION
========================== */}

<section className="bg-[#070014] text-white py-20 mt-20">

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

    {/* ABOUT */}

    <div>

      <h1
        className="
        text-5xl
        font-black
        text-orange-300
        "
      >

       
       TGS(TEAM GULSHAN SIR)

      </h1>

      <p
        className="
        mt-8
        text-gray-300
        leading-10
        text-lg
        "
      >

        A Mission For Vikshit Bharat 2047
        is dedicated towards building
        a stronger India through
        education, innovation,
        AI development,
        digital transformation,
        and skill empowerment.

      </p>

      {/* SOCIALS */}

      <div className="flex gap-5 mt-10 text-4xl">

        <a href="#">

          🌐

        </a>

        <a href="#">

          📘

        </a>

        <a href="#">

          📸

        </a>

        <a href="#">

          ▶️

        </a>

      </div>

    </div>

    {/* QUICK LINKS */}

    <div>

      <h2
        className="
        text-4xl
        font-black
        text-cyan-400
        "
      >

        Quick Links

      </h2>

      <div className="mt-8 space-y-5 text-xl">

        <a
          href="#"
          className="block hover:text-orange-300"
        >

          🏠 Home

        </a>

        <a
          href="#"
          className="block hover:text-orange-300"
        >

          📚 Academic

        </a>

        <a
          href="#"
          className="block hover:text-orange-300"
        >

          🧠 AI Programs

        </a>

        <a
          href="#"
          className="block hover:text-orange-300"
        >

          🎯 Competition

        </a>

        <a
          href="#"
          className="block hover:text-orange-300"
        >

          💼 Placement

        </a>

      </div>

    </div>

    {/* CONTACT */}

    <div>

      <h2
        className="
        text-4xl
        font-black
        text-cyan-400
        "
      >

        Contact Us

      </h2>

      <div className="mt-8 space-y-6 text-xl text-gray-300">

        <p>

          📍 2nd Floor, Spacetime Management Pvt Ltd Design House, 
          behind Savitri Cinema Complex, Greater Kailash II, 
          Chittaranjan Park, New Delhi, Delhi 110048

        </p>

        <p>

          📞 +91 9876543210

        </p>

        <p>

          📧 support@vikshitbharat2047.in

        </p>

        <p>

          🌐 www.vikshitbharat2047.in

        </p>

      </div>

    </div>

    {/* LOCATION */}

    <div>

      <h2
        className="
        text-4xl
        font-black
        text-cyan-400
        "
      >

        Our Location

      </h2>

      <div
        className="
        mt-8
        bg-[#0B1220]
        rounded-3xl
        p-8
        border
        border-cyan-500/20
        h-[260px]
        flex
        flex-col
        justify-center
        items-center
        shadow-xl
        "
      >

        <div className="text-7xl">

          📍

        </div>

        <p className="mt-6 text-lg text-gray-300 text-center">

          New Delhi, India

        </p>

        <a
          href="https://www.google.com/maps/dir/28.5266773,77.2635499/DizitalAdda+Digital+Marketing+Institute,+2nd+Floor,+Spacetime+Management+Pvt+Ltd+Design+House,+behind+Savitri+Cinema+Complex,+Greater+Kailash+II,+Chittaranjan+Park,+New+Delhi,+Delhi+110048/@28.534149,77.2315623,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x390ce1b8032e0e7f:0x8d8484c29620d0c0!2m2!1d77.240722!2d28.541963!3e0?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
          target="_DizitalAdda Digital Marketing Institute, 2nd Floor, Spacetime Management Pvt Ltd Design House, behind Savitri Cinema Complex, Greater Kailash II, Chittaranjan Park, New Delhi, Delhi 110048"
          rel="noreferrer"
          className="
          mt-6
          bg-cyan-500
          hover:bg-cyan-600
          px-6
          py-3
          rounded-xl
          font-bold
          transition
          "
        >

          View On Google Maps

        </a>

      </div>

    </div>

  </div>

</section>


    </div>

  );

}

export default LandingPage;