function StudentLayout({ children }) {

  return (

    <div className="min-h-screen bg-slate-100 flex">

      {/* SIDEBAR */}

      <div className="w-72 bg-white shadow-xl p-8 fixed h-screen">

        <h1 className="text-3xl font-bold text-blue-900 mb-12">

          DIZITAL ADDA

        </h1>

        <div className="space-y-5 text-lg">

          <button className="block w-full text-left bg-blue-900 text-white px-5 py-4 rounded-xl">

            Dashboard

          </button>

          <button className="block w-full text-left hover:bg-slate-100 px-5 py-4 rounded-xl">

            My Courses

          </button>

          <button className="block w-full text-left hover:bg-slate-100 px-5 py-4 rounded-xl">

            Certificates

          </button>

          <button className="block w-full text-left hover:bg-slate-100 px-5 py-4 rounded-xl">

            Assignments

          </button>

          <button className="block w-full text-left hover:bg-slate-100 px-5 py-4 rounded-xl">

            Profile

          </button>

        </div>

      </div>

      {/* CONTENT */}

      <div className="ml-72 w-full p-10">

        {children}

      </div>

    </div>

  );

}

export default StudentLayout;