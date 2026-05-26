import React from "react";

const states = [

  {
    name: "Uttar Pradesh",
    website: "https://up.gov.in",
  },

  {
    name: "Delhi",
    website: "https://delhi.gov.in",
  },

  {
    name: "Haryana",
    website: "https://haryana.gov.in",
  },

  {
    name: "Punjab",
    website: "https://punjab.gov.in",
  },

  {
    name: "Rajasthan",
    website: "https://rajasthan.gov.in",
  },

  {
    name: "Maharashtra",
    website: "https://maharashtra.gov.in",
  },

  {
    name: "Gujarat",
    website: "https://gujaratindia.gov.in",
  },

  {
    name: "Bihar",
    website: "https://state.bihar.gov.in",
  },

  {
    name: "Madhya Pradesh",
    website: "https://mp.gov.in",
  },

  {
    name: "West Bengal",
    website: "https://wb.gov.in",
  },

];

function GovernmentPartners() {

  return (

    <div className="min-h-screen bg-[#0B1220] text-white px-6 py-16">

      <div className="max-w-7xl mx-auto">

        <h1
          className="
          text-5xl
          md:text-7xl
          font-black
          text-center
          text-orange-300
          "
        >

          GOVERNMENT PARTNERS

        </h1>

        <p
          className="
          text-center
          text-xl
          text-gray-300
          mt-6
          "
        >

          Official Government Portals Of India

        </p>

        {/* STATES GRID */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-16
          "
        >

          {states.map((state, index) => (

            <a
              key={index}
              href={state.website}
              target="_blank"
              rel="noreferrer"
              className="
              bg-[#111827]
              border
              border-orange-400/20
              rounded-3xl
              p-8
              hover:bg-[#7C2D12]
              transition
              shadow-xl
              "
            >

              <h2 className="text-3xl font-bold">

                {state.name}

              </h2>

              <p className="mt-4 text-orange-200">

                Visit Official Website →

              </p>

            </a>

          ))}

        </div>

      </div>

    </div>

  );

}

export default GovernmentPartners;