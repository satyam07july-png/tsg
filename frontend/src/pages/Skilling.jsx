import React from "react";

import {
  FaBrain,
  FaCode,
  FaShieldAlt,
  FaCloud,
  FaMobileAlt,
  FaChartLine,
  FaLaptopCode,
  FaDatabase,
} from "react-icons/fa";

function Skilling() {

  const skills = [

    {
      title: "Artificial Intelligence",
      icon: <FaBrain />,
      courses: [
        "AI Foundations",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
      ],
    },

    {
      title: "Full Stack Development",
      icon: <FaCode />,
      courses: [
        "Frontend Development",
        "Backend APIs",
        "React & NodeJS",
        "MERN Stack",
      ],
    },

    {
      title: "Cyber Security",
      icon: <FaShieldAlt />,
      courses: [
        "Ethical Hacking",
        "Network Security",
        "Penetration Testing",
        "Cyber Defence",
      ],
    },

    {
      title: "Cloud Computing",
      icon: <FaCloud />,
      courses: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "DevOps",
      ],
    },

    {
      title: "App Development",
      icon: <FaMobileAlt />,
      courses: [
        "Android Development",
        "Flutter",
        "React Native",
        "App Deployment",
      ],
    },

    {
      title: "Digital Marketing",
      icon: <FaChartLine />,
      courses: [
        "SEO",
        "Social Media",
        "Meta Ads",
        "Google Ads",
      ],
    },

    {
      title: "Data Science",
      icon: <FaDatabase />,
      courses: [
        "Python",
        "Pandas",
        "Visualization",
        "Analytics",
      ],
    },

    {
      title: "UI/UX Design",
      icon: <FaLaptopCode />,
      courses: [
        "Figma",
        "Wireframing",
        "UI Design",
        "User Experience",
      ],
    },

  ];

  return (

    <div className="min-h-screen bg-[#f8fafc] px-6 py-16">

      {/* HERO */}

      <div
        className="
        bg-gradient-to-br
        from-[#0B1220]
        via-[#111827]
        to-[#7C2D12]
        rounded-[40px]
        text-white
        p-16
        text-center
        shadow-2xl
        "
      >

        <div className="text-8xl mb-8">

          🚀

        </div>

        <h1
          className="
          text-5xl
          md:text-7xl
          font-black
          "
        >

          Future Skills Portal

        </h1>

        <p
          className="
          text-2xl
          text-orange-200
          mt-8
          max-w-4xl
          mx-auto
          leading-10
          "
        >

          India's AI Powered
          Future Technology Ecosystem

        </p>

      </div>

      {/* SKILLS */}

      <div className="max-w-7xl mx-auto mt-24">

        <h2
          className="
          text-5xl
          font-black
          text-center
          text-[#7C2D12]
          mb-16
          "
        >

          Explore Future Skills

        </h2>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >

          {skills.map((skill, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-[35px]
              shadow-2xl
              overflow-hidden
              hover:-translate-y-3
              transition-all
              border
              border-orange-100
              "
            >

              {/* HEADER */}

              <div
                className="
                bg-[#7C2D12]
                text-white
                py-8
                text-center
                "
              >

                <div
                  className="
                  text-5xl
                  flex
                  justify-center
                  mb-5
                  "
                >

                  {skill.icon}

                </div>

                <h1
                  className="
                  text-2xl
                  font-black
                  px-4
                  "
                >

                  {skill.title}

                </h1>

              </div>

              {/* COURSES */}

              <div className="p-8 space-y-5">

                {skill.courses.map(
                  (course, i) => (

                    <div
                      key={i}
                      className="
                      bg-orange-50
                      rounded-2xl
                      p-4
                      font-bold
                      text-lg
                      hover:bg-[#7C2D12]
                      hover:text-white
                      transition-all
                      cursor-pointer
                      "
                    >

                      {course}

                    </div>

                  )
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FEATURES */}

      <div className="max-w-7xl mx-auto mt-28 mb-20">

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
          "
        >

          <div
            className="
            bg-white
            rounded-[35px]
            shadow-xl
            p-12
            text-center
            border
            border-orange-100
            "
          >

            <FaBrain
              className="
              text-6xl
              mx-auto
              text-[#7C2D12]
              mb-8
              "
            />

            <h1
              className="
              text-3xl
              font-black
              "
            >

              AI Learning

            </h1>

          </div>

          <div
            className="
            bg-white
            rounded-[35px]
            shadow-xl
            p-12
            text-center
            border
            border-orange-100
            "
          >

            <FaCode
              className="
              text-6xl
              mx-auto
              text-[#7C2D12]
              mb-8
              "
            />

            <h1
              className="
              text-3xl
              font-black
              "
            >

              Real Projects

            </h1>

          </div>

          <div
            className="
            bg-white
            rounded-[35px]
            shadow-xl
            p-12
            text-center
            border
            border-orange-100
            "
          >

            <FaChartLine
              className="
              text-6xl
              mx-auto
              text-[#7C2D12]
              mb-8
              "
            />

            <h1
              className="
              text-3xl
              font-black
              "
            >

              Placement Support

            </h1>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Skilling;