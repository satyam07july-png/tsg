import {
  FaLaptopCode,
  FaUserGraduate,
  FaCertificate,
} from "react-icons/fa";

function Features() {

  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Online Learning",
      desc: "Access courses anytime anywhere.",
    },

    {
      icon: <FaUserGraduate />,
      title: "Expert Mentors",
      desc: "Learn from industry professionals.",
    },

    {
      icon: <FaCertificate />,
      title: "Certification",
      desc: "Get professional certificates.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-slate-800">
          Why Choose Us
        </h1>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-slate-50 p-10 rounded-3xl text-center shadow-md hover:shadow-xl transition"
            >

              <div className="text-5xl text-blue-900 flex justify-center">

                {item.icon}

              </div>

              <h2 className="text-2xl font-bold mt-6">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-4">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;