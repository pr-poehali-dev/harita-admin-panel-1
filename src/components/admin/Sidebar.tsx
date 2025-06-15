import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const menuItems = [
  { path: "/admin/dashboard", label: "Дашборд", icon: "BarChart3" },
  { path: "/admin/shows", label: "Спектакли", icon: "Theater" },
  { path: "/admin/tickets", label: "Билеты", icon: "Ticket" },
  { path: "/admin/users", label: "Пользователи", icon: "Users" },
  { path: "/admin/finances", label: "Финансы", icon: "DollarSign" },
  { path: "/admin/settings", label: "Настройки", icon: "Settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Icon name="Theater" className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Харита</h1>
            <p className="text-sm text-gray-500">Админ-панель</p>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors",
              location.pathname === item.path &&
                "bg-purple-50 text-purple-700 border-r-2 border-purple-500",
            )}
          >
            <Icon name={item.icon} size={20} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
