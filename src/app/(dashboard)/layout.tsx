
import Navbar from "@/app/components/layout/Navbar";
import Sidebar from "../components/layout/SideNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen h-screen ">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}