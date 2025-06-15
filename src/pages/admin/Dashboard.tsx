import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    {
      title: "Проданных билетов",
      value: "2,847",
      change: "+12%",
      icon: "Ticket",
      color: "text-green-600",
    },
    {
      title: "Выручка за месяц",
      value: "₽1,234,567",
      change: "+8%",
      icon: "DollarSign",
      color: "text-blue-600",
    },
    {
      title: "Активных спектаклей",
      value: "15",
      change: "+2",
      icon: "Theater",
      color: "text-purple-600",
    },
    {
      title: "Пользователей",
      value: "8,429",
      change: "+5%",
      icon: "Users",
      color: "text-orange-600",
    },
  ];

  const recentActivity = [
    {
      action: "Новый заказ билетов",
      show: "Ромео и Джульетта",
      time: "2 мин назад",
      amount: "₽3,200",
    },
    {
      action: "Возврат билета",
      show: "Гамлет",
      time: "15 мин назад",
      amount: "₽1,600",
    },
    {
      action: "Новая регистрация",
      show: "Пользователь",
      time: "25 мин назад",
      amount: "",
    },
    {
      action: "Обновление афиши",
      show: "Макбет",
      time: "1 час назад",
      amount: "",
    },
  ];

  return (
    <AdminLayout title="Дашборд">
      <div className="space-y-6">
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon name={stat.icon} className={stat.color} size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <p className="text-xs text-green-600 mt-1">
                  {stat.change} от прошлого месяца
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Последние заказы */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Последняя активность</span>
                <Button variant="outline" size="sm">
                  <Icon name="RefreshCw" size={16} className="mr-2" />
                  Обновить
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600">{activity.show}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{activity.time}</p>
                      {activity.amount && (
                        <p className="font-medium text-green-600">
                          {activity.amount}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Быстрые действия */}
          <Card>
            <CardHeader>
              <CardTitle>Быстрые действия</CardTitle>
              <CardDescription>Часто используемые функции</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full justify-start space-x-2"
                variant="outline"
              >
                <Icon name="Plus" size={16} />
                <span>Добавить спектакль</span>
              </Button>
              <Button
                className="w-full justify-start space-x-2"
                variant="outline"
              >
                <Icon name="Ticket" size={16} />
                <span>Продать билет</span>
              </Button>
              <Button
                className="w-full justify-start space-x-2"
                variant="outline"
              >
                <Icon name="FileText" size={16} />
                <span>Создать отчет</span>
              </Button>
              <Button
                className="w-full justify-start space-x-2"
                variant="outline"
              >
                <Icon name="Mail" size={16} />
                <span>Отправить рассылку</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
