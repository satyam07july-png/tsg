import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  useState,
  useEffect
} from "react";

function AddStudent() {

 const [teachers,setTeachers] =
 useState([]);
    
  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    student_id: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    course: "",
    teacher_id: "",
    image: "",
    status: "Active",

  });

  useEffect(() => {
  fetchTeachers();
}, []);

const fetchTeachers = async () => {

  try {

    const res = await axios.get(
      "https://tsg-qlb1.onrender.com/api/teachers"
    );

    setTeachers(res.data);

  } catch(error){

    console.log(error);

  }

};

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://tsg-qlb1.onrender.com/api/students",
        formData
      );

      alert("Student Added Successfully ✅");

      navigate("/admin/students");

    } catch (error) {

      console.log(error);

      alert("Failed To Add Student ❌");

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-black mb-10">

        Add New Student 👨‍🎓

      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-10 rounded-[40px] max-w-5xl mx-auto backdrop-blur-xl"
      >

        <div className="grid grid-cols-2 gap-6">

          <input
            type="text"
            name="student_id"
            placeholder="Student ID"
            value={formData.student_id}
            onChange={handleChange}
            className="p-5 rounded-xl bg-slate-800"
            required
          />

          <input
            type="text"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-5 rounded-xl bg-slate-800"
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            className="p-5 rounded-xl bg-slate-800"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-5 rounded-xl bg-slate-800"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-5 rounded-xl bg-slate-800"
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            className="p-5 rounded-xl bg-slate-800"
          />

         <select
  name="teacher_id"
  value={formData.teacher_id}
  onChange={handleChange}
  className="p-5 rounded-xl bg-slate-800"
  required
>

  <option value="">
    Select Teacher
  </option>

  {teachers.map((teacher) => (

    <option
      key={teacher.id}
      value={teacher.id}
    >
      {teacher.name}
    </option>

  ))}

</select>

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="p-5 rounded-xl bg-slate-800"
          />

        </div>

        <button
          type="submit"
          className="mt-8 bg-cyan-500 hover:bg-cyan-400 px-10 py-5 rounded-2xl font-bold text-xl"
        >

          Add Student

        </button>

      </form>

    </div>

  );

}

export default AddStudent;