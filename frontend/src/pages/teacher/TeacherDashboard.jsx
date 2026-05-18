import React from "react";

import TeacherSidebar from "../../components/teacher/TeacherSidebar";

import {

  Users,

  BookOpen,

  IndianRupee,

  FileText

} from "lucide-react";

const TeacherDashboard = () => {

  const stats = [

    {

      title: "Total Students",

      value: "1,240",

      icon: <Users size={28} />,

    },

    {

      title: "My Courses",

      value: "12",

      icon: <BookOpen size={28} />,

    },

    {

      title: "Revenue",

      value: "₹85,000",

      icon: <IndianRupee size={28} />,

    },

    {

      title: "Assignments",

      value: "18",

      icon: <FileText size={28} />,

    },

  ];

  return (

    <div className="flex bg-zinc-100 min-h-screen">

      <TeacherSidebar />

      <div className="flex-1 p-8">
       
       <h1 className="text-red-500 text-5xl">
      NEW DASHBOARD
      </h1>

        <h1 className="text-3xl font-bold mb-8">

          Teacher Dashboard

        </h1>

        {/* Teacher Profile Section */}

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-5">

              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Teacher"
                className="w-24 h-24 rounded-full object-cover border-4 border-black"
              />

              <div>

                <h2 className="text-3xl font-bold">

                  Rahul Sharma

                </h2>

                <p className="text-zinc-500 text-lg">

                  rahul@gmail.com

                </p>

                <div className="flex gap-3 mt-3">

                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm">

                    Senior Teacher

                  </span>

                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">

                    Active

                  </span>

                </div>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-zinc-100 p-4 rounded-xl text-center">

                <h3 className="text-2xl font-bold">

                  4.9★

                </h3>

                <p className="text-zinc-500">

                  Rating

                </p>

              </div>

              <div className="bg-zinc-100 p-4 rounded-xl text-center">

                <h3 className="text-2xl font-bold">

                  1.2K

                </h3>

                <p className="text-zinc-500">

                  Students

                </p>

              </div>

              <div className="bg-zinc-100 p-4 rounded-xl text-center">

                <h3 className="text-2xl font-bold">

                  12

                </h3>

                <p className="text-zinc-500">

                  Courses

                </p>

              </div>

              <div className="bg-zinc-100 p-4 rounded-xl text-center">

                <h3 className="text-2xl font-bold">

                  96%

                </h3>

                <p className="text-zinc-500">

                  Performance

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {

            stats.map((item, index) => (

              <div

                key={index}

                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"

              >

                <div className="flex justify-between items-center mb-4">

                  <div className="text-zinc-600">

                    {item.icon}

                  </div>

                </div>

                <h2 className="text-lg text-zinc-500">

                  {item.title}

                </h2>

                <p className="text-3xl font-bold mt-2">

                  {item.value}

                </p>

              </div>

            ))

          }

        </div>

        {/* Recent Activity */}

        <div className="mt-10 bg-white p-6 rounded-2xl shadow-md">

          <h2 className="text-2xl font-semibold mb-4">

            Recent Activity

          </h2>

          <div className="space-y-4">

            <div className="p-4 bg-zinc-100 rounded-lg">

              New student enrolled in React Course

            </div>

            <div className="p-4 bg-zinc-100 rounded-lg">

              Assignment submitted by Aman Sharma

            </div>

            <div className="p-4 bg-zinc-100 rounded-lg">

              New doubt received from student

            </div>

            <div className="p-4 bg-zinc-100 rounded-lg">

              New course uploaded successfully

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default TeacherDashboard;