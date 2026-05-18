import { useState } from "react";

function StudentManagement() {

  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      course: "Web Development",
      status: "Active",
    },

    {
      id: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      course: "Data Science",
      status: "Pending",
    },

    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      course: "Graphic Designing",
      status: "Active",
    },
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm mt-12">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Student Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all students
          </p>

        </div>

        <button className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">

          Add Student

        </button>

      </div>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border px-5 py-4 rounded-xl outline-none mb-8"
      />

      {/* TABLE */}

      <table className="w-full">

        <thead>

          <tr className="border-b text-left">

            <th className="pb-5">
              Name
            </th>

            <th className="pb-5">
              Email
            </th>

            <th className="pb-5">
              Course
            </th>

            <th className="pb-5">
              Status
            </th>

            <th className="pb-5">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {filteredStudents.map((student) => (

            <tr
              key={student.id}
              className="border-b hover:bg-slate-50 transition"
            >

              <td className="py-6">
                {student.name}
              </td>

              <td className="py-6">
                {student.email}
              </td>

              <td className="py-6">
                {student.course}
              </td>

              <td className="py-6">

                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  student.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}>

                  {student.status}

                </span>

              </td>

              <td className="py-6 flex gap-4">

                <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">

                  Edit

                </button>

                <button className="bg-red-100 text-red-700 px-4 py-2 rounded-lg">

                  Delete

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentManagement;