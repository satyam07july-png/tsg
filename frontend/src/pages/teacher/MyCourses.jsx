import React from "react";

const MyCourses = () => {

  const courses = [

    {

      id: 1,

      title: "React JS Mastery",

      students: 420,

      lectures: 35,

      status: "Active",

      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee"

    },

    {

      id: 2,

      title: "Data Science Bootcamp",

      students: 310,

      lectures: 28,

      status: "Active",

      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71"

    },

    {

      id: 3,

      title: "Machine Learning",

      students: 210,

      lectures: 22,

      status: "Pending",

      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"

    }

  ];

  return (

    <div className="min-h-screen bg-zinc-100 p-8">

      <h1 className="text-4xl font-bold mb-8">

        My Courses

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {

          courses.map((course) => (

            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
            >

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <div className="flex items-center justify-between mb-3">

                  <h2 className="text-2xl font-bold">

                    {course.title}

                  </h2>

                  <span className={`px-3 py-1 rounded-full text-sm ${
                    course.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>

                    {course.status}

                  </span>

                </div>

                <div className="space-y-2 text-zinc-600 mb-5">

                  <p>

                    👨‍🎓 Students: {course.students}

                  </p>

                  <p>

                    🎥 Lectures: {course.lectures}

                  </p>

                </div>

                <button
                  className="w-full bg-black text-white py-3 rounded-xl hover:bg-zinc-800 transition-all"
                >

                  Manage Course

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

};

export default MyCourses;