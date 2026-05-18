function Testimonials() {

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-slate-800">
          Student Testimonials
        </h1>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="bg-white p-10 rounded-3xl shadow-lg"
            >

              <img
                src="https://i.pravatar.cc/80"
                alt="student"
                className="w-20 h-20 rounded-full"
              />

              <p className="text-gray-600 mt-6 leading-8">

                This LMS platform completely changed
                my learning experience. Highly recommended.

              </p>

              <h2 className="font-bold text-xl mt-6">
                Student Name
              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;