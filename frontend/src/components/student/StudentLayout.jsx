function StudentLayout({ children }) {

  return (

    <div className="min-h-screen bg-[#F8FAFC] flex font-sans">

      {/* SIDEBAR */}

      <div className="w-72 bg-white border-r border-slate-200 shadow-sm p-6 fixed h-screen flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-full border-2 border-[#D4A017] bg-black flex items-center justify-center text-xs font-black text-[#D4A017]">
              DA
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#0B1220] leading-none">
                DIZITAL ADDA
              </h1>
              <p className="text-[10px] text-[#D4A017] font-semibold uppercase tracking-wider mt-0.5">
                Student Portal
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm font-semibold">
            <button className="block w-full text-left bg-[#0B1220] text-white px-4 py-3 rounded-xl shadow-sm">
              Dashboard
            </button>

            <button className="block w-full text-left text-slate-600 hover:bg-slate-100 hover:text-slate-900 px-4 py-3 rounded-xl transition">
              My Enrolled Courses
            </button>

            <button className="block w-full text-left text-slate-600 hover:bg-slate-100 hover:text-slate-900 px-4 py-3 rounded-xl transition">
              Curriculum & Notes
            </button>

            <button className="block w-full text-left text-slate-600 hover:bg-slate-100 hover:text-slate-900 px-4 py-3 rounded-xl transition">
              Mentor Doubts
            </button>

            <button className="block w-full text-left text-slate-600 hover:bg-slate-100 hover:text-slate-900 px-4 py-3 rounded-xl transition">
              Verified Certificates
            </button>
          </div>
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