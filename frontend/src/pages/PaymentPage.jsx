import { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

function PaymentPage() {

  const { id } = useParams();

  const [course, setCourse] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {

    fetchCourse();

  }, []);

  const fetchCourse = async () => {

    try {

      const response = await axios.get(

        `http://https://https://dizitaladda.onrender.com/api/courses/${id}`

      );

      setCourse(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  // PAYMENT FUNCTION

  const handlePayment = async () => {

    try {

      const amount = Number(

        course.price.replace(/[^0-9.]/g, "")

      );

      const { data } = await axios.post(

        "http://https://https://dizitaladda.onrender.com/api/payment/create-order",

        {

          amount,

        }

      );

      const options = {

        key: "rzp_test_So2xmNcOeAoQRR",

        amount: data.amount,

        currency: data.currency,

        name: "DIZITAL ADDA",

        description: course.title,

        order_id: data.id,

        handler: async function (response) {

          try {

            const user = JSON.parse(

              localStorage.getItem("user")

            );

            // SAVE ENROLLMENT

            await axios.post(

              "http://https://https://dizitaladda.onrender.com/api/enrollments/enroll",

              {

                student_id: user.id,

                course_id: course.id,

              }

            );

            alert("Payment Successful & Course Enrolled 🚀");

            // REDIRECT TO STUDENT DASHBOARD

            window.location.href = "/student";

          }

          catch (error) {

            console.log(error);

            alert("Enrollment Failed");

          }

        },

        theme: {

          color: "#1e3a8a",

        },

      };

      const razor = new window.Razorpay(options);

      razor.open();

    }

    catch (error) {

      console.log(error);

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

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-14">

        {/* LEFT SIDE */}

        <div>

          <h1 className="text-6xl font-bold text-slate-800 leading-tight">

            Complete Your <br /> Enrollment

          </h1>

          <p className="text-slate-500 text-xl mt-8 leading-9">

            Secure your seat and get instant access to
            premium learning content, assignments,
            tests, certificates, and live classes.

          </p>

          {/* COURSE CARD */}

          <div className="bg-white rounded-[35px] shadow-xl p-8 mt-12">

            <img
              src={course.image}
              alt="course"
              className="rounded-3xl h-72 w-full object-cover"
            />

            <div className="mt-8">

              <div className="flex justify-between items-center">

                <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">

                  {course.category}

                </span>

                <span className="text-4xl font-bold text-blue-900">

                  {course.price}

                </span>

              </div>

              <h2 className="text-4xl font-bold text-slate-800 mt-6">

                {course.title}

              </h2>

              <p className="text-slate-500 text-lg mt-4 leading-8">

                {course.description}

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-white rounded-[35px] shadow-xl p-10">

          <h1 className="text-5xl font-bold text-slate-800">

            Payment Details

          </h1>

          {/* PAYMENT METHODS */}

          <div className="flex gap-5 mt-10">

            <button
              onClick={() => setPaymentMethod("card")}
              className={`px-8 py-4 rounded-2xl font-semibold transition ${
                paymentMethod === "card"
                  ? "bg-blue-900 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >

              Card

            </button>

            <button
              onClick={() => setPaymentMethod("upi")}
              className={`px-8 py-4 rounded-2xl font-semibold transition ${
                paymentMethod === "upi"
                  ? "bg-blue-900 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >

              UPI

            </button>

            <button
              onClick={() => setPaymentMethod("netbanking")}
              className={`px-8 py-4 rounded-2xl font-semibold transition ${
                paymentMethod === "netbanking"
                  ? "bg-blue-900 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >

              Net Banking

            </button>

          </div>

          {/* FORM */}

          <div className="space-y-6 mt-10">

            <input
              type="text"
              placeholder="Card Holder Name"
              className="w-full border p-5 rounded-2xl outline-none"
            />

            <input
              type="text"
              placeholder="Card Number"
              className="w-full border p-5 rounded-2xl outline-none"
            />

            <div className="grid grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Expiry Date"
                className="border p-5 rounded-2xl outline-none"
              />

              <input
                type="text"
                placeholder="CVV"
                className="border p-5 rounded-2xl outline-none"
              />

            </div>

          </div>

          {/* BILLING */}

          <div className="bg-slate-100 rounded-3xl p-8 mt-10">

            <div className="flex justify-between items-center">

              <p className="text-lg text-slate-600">

                Course Price

              </p>

              <p className="text-xl font-bold">

                {course.price}

              </p>

            </div>

            <div className="flex justify-between items-center mt-4">

              <p className="text-lg text-slate-600">

                Platform Fee

              </p>

              <p className="text-xl font-bold">

                ₹99

              </p>

            </div>

            <div className="border-t mt-6 pt-6 flex justify-between items-center">

              <p className="text-2xl font-bold text-slate-800">

                Total

              </p>

              <p className="text-4xl font-bold text-blue-900">

                ₹{parseFloat(course.price) + 99}

              </p>

            </div>

          </div>

          {/* PAY BUTTON */}

          <button
            onClick={handlePayment}
            className="w-full mt-10 bg-blue-900 text-white py-5 rounded-3xl text-2xl font-semibold hover:bg-blue-800 transition"
          >

            Proceed To Payment

          </button>

          {/* SECURITY */}

          <p className="text-center text-slate-400 mt-6">

            🔒 100% Secure Payment Gateway

          </p>

        </div>

      </div>

    </div>

  );

}

export default PaymentPage;