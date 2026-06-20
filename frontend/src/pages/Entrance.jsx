import React from "react";

function Entrance() {
return ( <div className="bg-[#f3f5f7] min-h-screen">

```
  {/* HEADER */}

  <div className="bg-[#001437] border-b-4 border-[#D4A017] py-16">

    <div className="text-center">

      <h1 className="text-white text-6xl font-bold">
        Academic Portal
      </h1>

      <p className="text-[#f0c27b] text-2xl mt-5">
        National Education & Learning Resources Platform
      </p>

    </div>

  </div>

  {/* MAIN SECTION */}

  <div className="max-w-[1800px] mx-auto border border-gray-300 bg-white p-16">

    <h2 className="text-center text-[#001437] font-semibold text-5xl">
      Access Curriculum Based Learning Resources
    </h2>

    {/* GOLD LINE */}

    <div className="w-32 h-1 bg-[#D4A017] mx-auto mt-6"></div>

    <p className="text-center text-gray-600 text-2xl mt-12 max-w-6xl mx-auto leading-relaxed">
      Explore board specific academic resources,
      class wise study materials, subject wise content,
      digital learning modules and future ready education
      programs designed for students across India.
    </p>

    {/* STATS */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      <div className="border border-gray-300 bg-white p-10 text-center">

        <h3 className="text-5xl font-bold text-[#001437]">
          15+
        </h3>

        <p className="text-gray-600 text-2xl mt-4">
          State Boards
        </p>

      </div>

      <div className="border border-gray-300 bg-white p-10 text-center">

        <h3 className="text-5xl font-bold text-[#001437]">
          7
        </h3>

        <p className="text-gray-600 text-2xl mt-4">
          Classes
        </p>

      </div>

      <div className="border border-gray-300 bg-white p-10 text-center">

        <h3 className="text-5xl font-bold text-[#001437]">
          50+
        </h3>

        <p className="text-gray-600 text-2xl mt-4">
          Subjects
        </p>

      </div>

      <div className="border border-gray-300 bg-white p-10 text-center">

        <h3 className="text-5xl font-bold text-[#001437]">
          24x7
        </h3>

        <p className="text-gray-600 text-2xl mt-4">
          Access
        </p>

      </div>

    </div>

  </div>

  {/* BOARD SECTION */}

  <div className="max-w-[1800px] mx-auto py-24">

    <h2 className="text-center text-[#001437] text-5xl font-semibold">
      Select Education Board
    </h2>

    <div className="w-32 h-1 bg-[#D4A017] mx-auto mt-6"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {[
        "CBSE",
        "ICSE",
        "UP Board",
        "Bihar Board",
        "RBSE",
        "MP Board",
        "HBSE",
        "Maharashtra Board"
      ].map((board) => (

        <div
          key={board}
          className="
            bg-white
            border
            border-gray-300
            p-8
            text-center
            hover:border-[#D4A017]
            hover:shadow-md
            transition-all
            cursor-pointer
          "
        >

          <h3 className="text-2xl font-semibold text-[#001437]">
            {board}
          </h3>

        </div>

      ))}

    </div>

  </div>

</div>


);
}

export default Entrance;
