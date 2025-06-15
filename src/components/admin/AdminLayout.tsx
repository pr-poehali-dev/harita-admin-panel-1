import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <AdminHeader title={title} />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
