import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 w-full bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
}

export default MainLayout;
