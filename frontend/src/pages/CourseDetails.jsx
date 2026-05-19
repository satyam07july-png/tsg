import { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function CourseDetails() {

  const { id } = useParams();

  const [course, setCourse] = useState(null);

  const [lectures, setLectures] = useState([]);


  useEffect(() => {

    fetchCourse();

    fetchLectures();

  }, []);


  // FETCH COURSE

  const fetchCourse = async () => {

    try {

      const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/api/courses/${id}`

      );

      setCourse(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };


  // FETCH LECTURES

  const fetchLectures = async () => {

    try {

      const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/api/lectures/course/${id}`

      );

      setLectures(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };


  // ENROLL FUNCTION

  const handleEnroll = async () => {

    try {

      const user = JSON.parse(

        localStorage.getItem("user")

      );

      // LOGIN CHECK

      if (!user) {

        alert("Please Login First");

        return;

      }

      // ENROLL API

      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}/api/enrollments/enroll`,

        {

          student_id: user.id,

          course_id: course.id,

        }

      );

      alert(response.data.message);

    }

    catch (error) {

      console.log(error);

      alert(

        error.response?.data?.message ||

        "Enrollment Failed"

      );

    }

  };


  // LOADING

  if (!course) {

    return (

      <div className="min-h-screen flex justify-center items-center text-4xl font-bold">

        Loading...

      </div>

    );

  }


  return (

    <div className="min-h-screen bg-slate-100 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 gap-14">

          {/* LEFT */}

          <div>

            <img
              src={course.image}
              alt={course.title}
              className="rounded-3xl h-[450px] w-full object-cover shadow-xl"
            />

          </div>

          {/* RIGHT */}

          <div>

            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full">

              Professional Course

            </span>

            <h1 className="text-6xl font-bold text-slate-800 mt-8">

              {course.title}

            </h1>

            <p className="text-slate-500 text-xl mt-6 leading-9">

              {course.description}

            </p>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white p-6 rounded-2xl shadow-sm">

                <h2 className="text-slate-500">

                  Duration

                </h2>

                <p className="text-3xl font-bold mt-3">

                  {course.duration}

                </p>

              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">

                <h2 className="text-slate-500">

                  Assignments

                </h2>

                <p className="text-3xl font-bold mt-3">

                  {course.assignments}

                </p>

              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">

                <h2 className="text-slate-500">

                  Video Classes

                </h2>

                <p className="text-3xl font-bold mt-3">

                  {course.videos}

                </p>

              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">

                <h2 className="text-slate-500">

                  Instructor

                </h2>

                <p className="text-3xl font-bold mt-3">

                  {course.instructor}

                </p>

              </div>

            </div>

            {/* PRICE */}

            <div className="mt-10 flex justify-between items-center bg-white p-8 rounded-3xl shadow-sm">

              <div>

                <h2 className="text-slate-500 text-lg">

                  Course Price

                </h2>

                <p className="text-5xl font-bold text-blue-900 mt-3">

                  {course.price}

                </p>

              </div>

              <Link
                to={`/payment/${course.id}`}
                className="bg-blue-900 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-blue-800 transition"
              >

                Proceed To Payment

              </Link>

            </div>

          </div>

        </div>


        {/* LECTURES SECTION */}

        <div className="mt-20">

          <h1 className="text-4xl font-bold mb-10">

            Course Lectures

          </h1>

          <div className="space-y-10">

            {

              lectures.map((lecture) => (

                <div
                  key={lecture.id}
                  className="bg-white p-6 rounded-3xl shadow-lg"
                >

                  <h2 className="text-2xl font-bold mb-5">

                    {lecture.title}

                  </h2>

                  <video
                    controls
                    className="w-full rounded-2xl"
                  >

                    <source
                      src={lecture.video_url}
                      type="video/mp4"
                    />

                  </video>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default CourseDetails;