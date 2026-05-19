import { Routes, Route } from "react-router-dom";


import About from "./pages/About";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/auth/Login";
import Courses from "./pages/Courses";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import CoursesPage from "./pages/admin/CoursesPage";
import StudentsPage from "./pages/admin/StudentsPage";
import RevenuePage from "./pages/admin/RevenuePage";
import UsersPage from "./pages/admin/UsersPage";
import CourseDetails from "./pages/CourseDetails";
import AddCourse from "./pages/admin/AddCourse";
import ActivityPage from "./pages/admin/ActivityPage";
import PaymentPage from "./pages/PaymentPage";
import LearningPage from "./pages/student/LearningPage";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import StudentProfile from "./pages/admin/StudentProfile";
import TeacherProfile from "./pages/admin/TeacherProfile";
import Teachers from "./pages/admin/Teachers";
import AddTeacher from "./pages/admin/AddTeacher";
import EditCourse from "./pages/admin/EditCourse";
import Payments from "./pages/admin/Payments";
import Assignments from "./pages/teacher/Assignments";
import Notifications from "./pages/admin/Notifications";
import Settings from "./pages/admin/Settings";
import MyCourses from "./pages/teacher/MyCourses";
import UploadLecture from "./pages/teacher/UploadLecture";
import PopularCourses from "../components/PopularCourses";
function App() {

  return (

    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />


      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="/student" element={<StudentDashboard />} />

      <Route path="/admin/courses" element={<CoursesPage />} />

      <Route path="/admin/students" element={<StudentsPage />} />

      <Route
        path="/teacher-dashboard"
        element={<TeacherDashboard />}
      />

      <Route
        path="/admin/revenue"
        element={<RevenuePage />}
      />

      <Route
        path="/admin/users"
        element={<UsersPage />}
      />

      <Route
        path="/courses"
        element={<Courses />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/course/:id"
        element={<CourseDetails />}
      />

      <Route
        path="/admin/add-course"
        element={<AddCourse />}
      />

      <Route
        path="/admin/activity"
        element={<ActivityPage />}
      />

      <Route
        path="/payment/:id"
        element={<PaymentPage />}
      />

      <Route
        path="/admin/students/:id"
        element={<StudentProfile />}
      />

      <Route
        path="/admin/teachers/:id"
        element={<TeacherProfile />}
      />

      <Route
        path="/learn/:id"
        element={<LearningPage />}
      />

      <Route
        path="/admin/teachers"
        element={<Teachers />}
      />

      <Route
        path="/admin/add-teacher"
        element={<AddTeacher />}
      />

      <Route
        path="/admin/edit-course/:id"
        element={<EditCourse />}
      />

      <Route
        path="/admin/payments"
        element={<Payments />}
      />

      <Route
        path="/admin/assignments"
        element={<Assignments />}
      />

      <Route
        path="/admin/notifications"
        element={<Notifications />}
      />

      <Route
        path="/admin/settings"
        element={<Settings />}
      />
      
      <Route
      path="/my-courses"
      element={<MyCourses />}
    />

    <Route
    path="/upload-lecture"
    element={<UploadLecture />}
  />

    </Routes>

  );

}

export default App;