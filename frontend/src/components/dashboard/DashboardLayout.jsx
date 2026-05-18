import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <DashboardSidebar />

      <div className="ml-72 w-full p-8">

        <DashboardNavbar />

        <div className="mt-10">
          {children}
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;