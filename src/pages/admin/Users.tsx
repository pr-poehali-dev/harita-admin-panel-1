import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Анна Петрова",
      email: "anna.petrova@email.com",
      phone: "+7 (999) 123-45-67",
      status: "Активен",
      registrationDate: "15 мая 2025",
      totalOrders: 12,
      totalSpent: "₽38,400",
      lastOrder: "10 июня 2025",
    },
    {
      id: 2,
      name: "Сергей Иванов",
      email: "sergey.ivanov@email.com",
      phone: "+7 (999) 234-56-78",
      status: "Активен",
      registrationDate: "3 июня 2025",
      totalOrders: 5,
      totalSpent: "₽15,600",
      lastOrder: "12 июня 2025",
    },
    {
      id: 3,
      name: "Мария Сидорова",
      email: "maria.sidorova@email.com",
      phone: "+7 (999) 345-67-89",
      status: "Заблокирован",
      registrationDate: "28 апреля 2025",
      totalOrders: 8,
      totalSpent: "₽22,100",
      lastOrder: "25 мая 2025",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активен":
        return "bg-green-100 text-green-800";
      case "Заблокирован":
        return "bg-red-100 text-red-800";
      case "Неактивен":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout title="Управление пользователями">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Пользователи
            </h2>
            <p className="text-sm text-gray-600">
              Управление аккаунтами и активностью
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="space-x-2">
              <Icon name="Mail" size={16} />
              <span>Email-рассылка</span>
            </Button>
            <Button className="space-x-2">
              <Icon name="UserPlus" size={16} />
              <span>Добавить пользователя</span>
            </Button>
          </div>
        </div>

        {/* Статистика пользователей */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Всего пользователей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">8,429</div>
              <p className="text-xs text-green-600">+127 за месяц</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Активных сегодня
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <p className="text-xs text-green-600">+18% от вчера</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Новых за неделю
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">89</div>
              <p className="text-xs text-green-600">+12% от прошлой</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Постоянных клиентов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">2,156</div>
              <p className="text-xs text-green-600">+5% от месяца</p>
            </CardContent>
          </Card>
        </div>

        {/* Список пользователей */}
        <Card>
          <CardHeader>
            <CardTitle>Список пользователей</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Icon name="User" className="text-white" size={20} />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900">
                            {user.name}
                          </h3>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-sm text-gray-600">{user.phone}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 text-sm">
                      <div className="text-center">
                        <p className="text-gray-500">Заказов</p>
                        <p className="font-medium text-gray-900">
                          {user.totalOrders}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500">Потрачено</p>
                        <p className="font-medium text-gray-900">
                          {user.totalSpent}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500">Последний заказ</p>
                        <p className="font-medium text-gray-900">
                          {user.lastOrder}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Eye" size={14} className="mr-1" />
                        Профиль
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Mail" size={14} className="mr-1" />
                        Написать
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Users;
