import React from "react";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

import {

  LayoutDashboard,

  Upload,

  FileText,

  Users,

  MessageSquare,

  BarChart3,

  LogOut,

  ClipboardList

} from "lucide-react";

const TeacherSidebar = () => {
  const navigate = useNavigate();

const handleLogout = () => {

  localStorage.clear();

  navigate("/login");

};

  const menuItems = [

    {

      title: "Dashboard",

      path: "/teacher-dashboard",

      icon: <LayoutDashboard size={20} />,

    },

    {

      title: "Upload Lecture",

      path: "/upload-lecture",

      icon: <Upload size={20} />,

    },

    {

      title: "Assignments",

      path: "/assignments",

      icon: <FileText size={20} />,

    },

    {

      title: "Tests",

      path: "/tests",

      icon: <ClipboardList size={20} />,

    },

    {

      title: "Students",

      path: "/students",

      icon: <Users size={20} />,

    },

    {

      title: "Doubts",

      path: "/doubts",

      icon: <MessageSquare size={20} />,

    },

    {

      title: "Analytics",

      path: "/analytics",

      icon: <BarChart3 size={20} />,

    },
   <button
  onClick={handleLogout}
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
>
  Logout
</button>
  ];

  

  return (

    <div className="w-[260px] h-screen bg-black text-white p-5 flex flex-col justify-between">

      <div>

        <h1 className="text-2xl font-bold mb-10">

          Teacher Panel

        </h1>

        <div className="space-y-3">

          {

            menuItems.map((item, index) => (

              <NavLink

                key={index}

                to={item.path}

                end

                className={({ isActive }) =>

                  `flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    isActive

                      ? "bg-white text-black font-semibold"

                      : "hover:bg-zinc-800 text-white"

                  }`

                }

              >

                {item.icon}

                <span className="text-[15px]">

                  {item.title}

                </span>

              </NavLink>

            ))

          }

        </div>

      </div>

      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 cursor-pointer transition-all">

        <LogOut size={20} />

        <span>

          Logout

        </span>

      </div>

    </div>

  );

};

export default TeacherSidebar;