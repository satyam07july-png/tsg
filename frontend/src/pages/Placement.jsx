import React, {
  useState,
} from "react";

import {
  FaBuilding,
  FaGlobe,
  FaLaptopCode,
  FaMoneyBillWave,
  FaUpload,
} from "react-icons/fa";

function Placement() {

  const [activeTab, setActiveTab] =
    useState("mnc");

  const mncCompanies = [

    {
      company: "Google",
      role: "Software Engineer",
      package: "₹45 LPA",
      skills:
        "DSA, React, NodeJS",
      eligibility:
        "B.Tech / MCA",
    },

    {
      company: "Microsoft",
      role: "Frontend Developer",
      package: "₹38 LPA",
      skills:
        "React, TypeScript",
      eligibility:
        "B.Tech / BCA",
    },

    {
      company: "Amazon",
      role: "Cloud Engineer",
      package: "₹32 LPA",
      skills:
        "AWS, DevOps",
      eligibility:
        "Any Graduate",
    },

    {
      company: "Meta",
      role: "AI Engineer",
      package: "₹50 LPA",
      skills:
        "Python, ML, AI",
      eligibility:
        "B.Tech / MCA",
    },

  ];

  const domesticCompanies = [

    {
      company: "TCS",
      role: "System Engineer",
      package: "₹7 LPA",
      skills:
        "Java, SQL",
      eligibility:
        "Any Graduate",
    },

    {
      company: "Infosys",
      role: "Frontend Developer",
      package: "₹6.5 LPA",
      skills:
        "React, JavaScript",
      eligibility:
        "BCA / MCA",
    },

    {
      company: "Wipro",
      role: "Backend Developer",
      package: "₹8 LPA",
      skills:
        "NodeJS, MongoDB",
      eligibility:
        "Any Graduate",
    },

    {
      company: "HCL",
      role: "Cloud Associate",
      package: "₹9 LPA",
      skills:
        "AWS, Linux",
      eligibility:
        "B.Tech",
    },

  ];

  const companies =
    activeTab === "mnc"
      ? mncCompanies
      : domesticCompanies;

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

          💼

        </div>

        <h1
          className="
          text-5xl
          md:text-7xl
          font-black
          "
        >

          Placement Portal

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

          India's Smart Career &
          Placement Ecosystem

        </p>

      </div>

      {/* TABS */}

      <div
        className="
        max-w-4xl
        mx-auto
        mt-20
        flex
        justify-center
        gap-8
        "
      >

        <button
          onClick={() =>
            setActiveTab("mnc")
          }
          className={`
          px-10
          py-5
          rounded-2xl
          text-2xl
          font-black
          transition-all

          ${
            activeTab === "mnc"

              ? "bg-[#7C2D12] text-white"

              : "bg-white text-black"
          }
          `}
        >

          🌍 MNC Companies

        </button>

        <button
          onClick={() =>
            setActiveTab("domestic")
          }
          className={`
          px-10
          py-5
          rounded-2xl
          text-2xl
          font-black
          transition-all

          ${
            activeTab ===
            "domestic"

              ? "bg-[#7C2D12] text-white"

              : "bg-white text-black"
          }
          `}
        >

          🇮🇳 Domestic Companies

        </button>

      </div>

      {/* COMPANY CARDS */}

      <div className="max-w-7xl mx-auto mt-24">

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >

          {companies.map(
            (company, index) => (

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

                  <FaBuilding
                    className="
                    text-5xl
                    mx-auto
                    mb-5
                    "
                  />

                  <h1
                    className="
                    text-3xl
                    font-black
                    "
                  >

                    {
                      company.company
                    }

                  </h1>

                </div>

                {/* DETAILS */}

                <div className="p-8 space-y-6">

                  <div
                    className="
                    bg-orange-50
                    rounded-2xl
                    p-4
                    font-bold
                    "
                  >

                    💻 Role:
                    {" "}
                    {company.role}

                  </div>

                  <div
                    className="
                    bg-orange-50
                    rounded-2xl
                    p-4
                    font-bold
                    "
                  >

                    💰 Package:
                    {" "}
                    {
                      company.package
                    }

                  </div>

                  <div
                    className="
                    bg-orange-50
                    rounded-2xl
                    p-4
                    font-bold
                    "
                  >

                    🧠 Skills:
                    {" "}
                    {
                      company.skills
                    }

                  </div>

                  <div
                    className="
                    bg-orange-50
                    rounded-2xl
                    p-4
                    font-bold
                    "
                  >

                    🎓 Eligibility:
                    {" "}
                    {
                      company.eligibility
                    }

                  </div>

                  {/* APPLY BUTTON */}

                  <button
                    className="
                    w-full
                    bg-[#7C2D12]
                    text-white
                    py-4
                    rounded-2xl
                    text-xl
                    font-black
                    hover:opacity-90
                    transition
                    "
                  >

                    Apply Now

                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </div>

      {/* RESUME UPLOAD */}

      <div className="max-w-4xl mx-auto mt-28 mb-20">

        <div
          className="
          bg-white
          rounded-[40px]
          shadow-2xl
          p-14
          border
          border-orange-100
          text-center
          "
        >

          <FaUpload
            className="
            text-7xl
            mx-auto
            text-[#7C2D12]
            mb-8
            "
          />

          <h1
            className="
            text-5xl
            font-black
            "
          >

            Upload Your Resume

          </h1>

          <p
            className="
            text-xl
            text-gray-600
            mt-6
            "
          >

            Upload your resume for
            top placement opportunities

          </p>

          <input
            type="file"
            className="
            mt-10
            w-full
            border
            border-gray-300
            p-5
            rounded-2xl
            "
          />

          <button
            className="
            mt-8
            bg-[#7C2D12]
            text-white
            px-10
            py-5
            rounded-2xl
            text-2xl
            font-black
            hover:opacity-90
            transition
            "
          >

            Upload Resume

          </button>

        </div>

      </div>

    </div>

  );

}

export default Placement;