import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface AdminHeaderProps {
  title: string;
}

const AdminHeader = ({ title }: AdminHeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Управление театром Харита
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="space-x-2">
            <Icon name="Bell" size={16} />
            <span>Уведомления</span>
          </Button>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <Icon name="User" className="text-white" size={16} />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">Администратор</p>
              <p className="text-gray-500">admin@harita.ru</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
