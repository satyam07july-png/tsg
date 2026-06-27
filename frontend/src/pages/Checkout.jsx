import { useLocation, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Star,
  Users,
  Clock3,
  Globe,
  Award,
  ChevronRight,
} from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const course = state?.course;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Course Not Found
          </h2>
          <button
            onClick={() => navigate("/courses")}
            className="mt-6 bg-[#0B1220] text-white px-6 py-3 rounded-xl"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const discount =
    course.originalPrice - course.price;

  return (
    <div className="bg-[#F8FAFC] min-h-screen">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-r from-[#0B1220] via-[#16243D] to-[#0B1220] text-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}

          <div className="flex items-center text-sm text-gray-300 mb-5">

            <span
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/")}
            >
              Home
            </span>

            <ChevronRight size={16} className="mx-2" />

            <span
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/courses")}
            >
              Courses
            </span>

            <ChevronRight size={16} className="mx-2" />

            <span className="text-[#D4A017]">
              Checkout
            </span>

          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-10">

            {/* Left */}

            <div className="flex-1">

              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400 px-4 py-2 rounded-full text-green-300 text-sm mb-5">

                <ShieldCheck size={18} />

                256-bit SSL Secure Checkout

              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">

                Complete Your Enrollment

              </h1>

              <p className="mt-5 text-lg text-gray-300 max-w-2xl">

                You're just one step away from accessing premium learning
                resources and expert guidance.

              </p>

            </div>

            {/* Right */}

            <div className="bg-white text-slate-800 rounded-3xl shadow-2xl p-6 w-full lg:w-[420px]">

              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl h-52 w-full object-cover"
              />

              <h2 className="mt-5 text-2xl font-bold">
                {course.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {course.description}
              </p>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500" size={18} />
                  <span>{course.rating} Rating</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="text-blue-600" size={18} />
                  <span>{course.students} Students</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 className="text-green-600" size={18} />
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Globe className="text-purple-600" size={18} />
                  <span>{course.language}</span>
                </div>

                <div className="flex items-center gap-2 col-span-2">
                  <Award className="text-[#D4A017]" size={18} />
                  <span>Certificate Included</span>
                </div>

              </div>

              {/* Price */}

              <div className="mt-8 flex items-center gap-4">

                <span className="text-4xl font-bold text-[#0B1220]">

                  ₹{course.price}

                </span>

                <span className="line-through text-gray-400">

                  ₹{course.originalPrice}

                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

                  Save ₹{discount}

                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= NEXT PART ================= */}
       <div className="max-w-7xl mx-auto px-6 py-14">

  <div className="grid lg:grid-cols-3 gap-10">

    {/* ================= LEFT SECTION ================= */}

    <div className="lg:col-span-2 space-y-8">

      {/* Billing Details */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-[#0B1220] mb-8">
          Billing Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              First Name
            </label>

            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Last Name
            </label>

            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              State
            </label>

            <input
              type="text"
              placeholder="Enter State"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              City
            </label>

            <input
              type="text"
              placeholder="Enter City"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-slate-700">
              Address
            </label>

            <textarea
              rows="4"
              placeholder="Enter Complete Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
            />
          </div>

        </div>

      </div>

      {/* Coupon */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-[#0B1220] mb-6">
          Apply Coupon
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">

          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
          />

          <button
            className="
            bg-[#D4A017]
            hover:bg-[#b88a10]
            text-white
            px-8
            rounded-xl
            font-semibold
            transition
            "
          >
            Apply
          </button>

        </div>

      </div>

      {/* Payment Method */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-[#0B1220] mb-6">
          Payment Method
        </h2>

        <label className="flex items-center gap-4 border rounded-2xl p-5 cursor-pointer hover:border-[#D4A017] transition">

          <input
            type="radio"
            checked
            readOnly
          />

          <div>

            <h4 className="font-bold">
              Razorpay Secure Payment
            </h4>

            <p className="text-sm text-gray-500">
              Credit Card • Debit Card • UPI • Wallet • Net Banking
            </p>

          </div>

        </label>

      </div>

      {/* Terms */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <label className="flex gap-3 items-start">

          <input
            type="checkbox"
            className="mt-1"
          />

          <span className="text-gray-600 leading-7">

            I agree to the Terms & Conditions and understand that
            course access will be provided only after payment verification
            and admin approval.

          </span>

        </label>

      </div>

    </div>

    {/* Right Side (Order Summary Part 3 me banega) */}

    {/* ================= ORDER SUMMARY ================= */}

<div>

  <div className="sticky top-24 bg-white rounded-3xl shadow-xl overflow-hidden">

    {/* Header */}

    <div className="bg-[#0B1220] text-white p-6">

      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <p className="text-gray-300 mt-2 text-sm">
        Review your order before proceeding.
      </p>

    </div>

    {/* Content */}

    <div className="p-6">

      {/* Course */}

      <div className="flex gap-4">

        <img
          src={course.image}
          alt={course.title}
          className="w-20 h-20 rounded-xl object-cover"
        />

        <div>

          <h3 className="font-bold text-[#0B1220]">
            {course.title}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {course.instructor}
          </p>

        </div>

      </div>

      <hr className="my-6" />

      {/* Price Details */}

      <div className="space-y-4">

        <div className="flex justify-between">

          <span className="text-gray-600">
            Original Price
          </span>

          <span>
            ₹{course.originalPrice}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-600">
            Course Discount
          </span>

          <span className="text-green-600 font-semibold">
            - ₹{discount}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-600">
            Coupon Discount
          </span>

          <span className="text-green-600">
            - ₹0
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-600">
            GST (18%)
          </span>

          <span>
            ₹{Math.round(course.price * 0.18)}
          </span>

        </div>

      </div>

      <hr className="my-6" />

      {/* Total */}

      <div className="flex justify-between text-2xl font-bold text-[#0B1220]">

        <span>Total</span>

        <span>
          ₹{course.price + Math.round(course.price * 0.18)}
        </span>

      </div>

      {/* Security */}

      <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-4">

        <div className="flex items-center gap-3">

          <ShieldCheck
            className="text-green-600"
            size={26}
          />

          <div>

            <h4 className="font-semibold">
              Secure Payment
            </h4>

            <p className="text-sm text-gray-600">
              Protected with 256-bit SSL Encryption.
            </p>

          </div>

        </div>

      </div>

      {/* Button */}

     <button
  onClick={() =>
    navigate(`/payment/${course.id}`, {
      state: {
        course,
      },
    })
  }
  className="
  w-full
  mt-8
  bg-[#D4A017]
  hover:bg-[#b88a10]
  text-white
  py-4
  rounded-2xl
  text-lg
  font-bold
  transition-all
  duration-300
  shadow-lg
  hover:shadow-xl
  "
>
  Proceed To Payment →
</button>

      <p className="text-center text-gray-500 text-xs mt-4 leading-6">

        By proceeding, your payment will be securely processed.
        Course access will be activated only after admin approval.

      </p>

    </div>

  </div>

</div>

  </div>

</div>
    </div>
  );
};

export default Checkout;