import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import PopularCourses from "../../components/landing/PopularCourses";
import Features from "../../components/landing/Features";
import Testimonials from "../../components/landing/Testimonials";
import Footer from "../../components/landing/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";

import heroImage from "../../assets/hero.jpg";

function LandingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* TOP BAR */}

      <div className="bg-slate-100 border-b">

        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 text-sm text-gray-600">

          <div className="flex gap-6">

            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              +91 9876543210
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope />
              support@dizitaladda.com
            </div>

          </div>

          <div className="flex gap-6">

            <Link to="/login">
              Login
            </Link>

          </div>

        </div>

      </div>

     <Navbar />

      {/* HERO SECTION */}
      <section id="home"></section>
      <section
        className="relative h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-blue-950/70"></div>

        {/* CONTENT */}

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

          <div className="max-w-4xl text-white">

            <h1 className="text-6xl font-bold leading-tight">

              We Help You
              Learn What
              You Love

            </h1>

            <p className="text-xl text-gray-200 mt-8 leading-9">

              Professional institutional learning management
              system for students, teachers, and administrators.

            </p>

            <div className="flex gap-6 mt-10">

              <Link
                to="/login"
                className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Join With Us
              </Link>

              <Link
                to="/login"
                className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Login
              </Link>

            </div>

          </div>

        </div>

      </section>
     <PopularCourses />

     <Features />

     <Testimonials />

     <Footer />
    </div>
  );
}

export default LandingPage;