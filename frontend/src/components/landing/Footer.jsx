function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>

          <h1 className="text-3xl font-bold">
            DIZITAL ADDA
          </h1>

          <p className="text-gray-300 mt-5 leading-8">

            Professional institutional learning
            management platform.

          </p>

        </div>

        <div>

          <h2 className="text-xl font-bold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-300">

            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
            <li>Contact</li>

          </ul>

        </div>

        <div>

          <h2 className="text-xl font-bold mb-5">
            Courses
          </h2>

          <ul className="space-y-3 text-gray-300">

            <li>Web Development</li>
            <li>Data Science</li>
            <li>Graphic Designing</li>

          </ul>

        </div>

        <div>

          <h2 className="text-xl font-bold mb-5">
            Contact
          </h2>

          <p className="text-gray-300">
            support@dizitaladda.com
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;