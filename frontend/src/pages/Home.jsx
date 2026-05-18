import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>

      <div>

        <h1 className="text-3xl font-bold mb-8">
          Welcome Back 👋
        </h1>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-gray-500">
              Total Students
            </h2>

            <h1 className="text-3xl font-bold mt-2">
              1,250
            </h1>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-gray-500">
              Total Courses
            </h2>

            <h1 className="text-3xl font-bold mt-2">
              85
            </h1>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-gray-500">
              Revenue
            </h2>

            <h1 className="text-3xl font-bold mt-2">
              ₹2.5L
            </h1>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-gray-500">
              Active Users
            </h2>

            <h1 className="text-3xl font-bold mt-2">
              920
            </h1>
          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Home;