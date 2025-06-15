import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Tickets = () => {
  const tickets = [
    {
      id: "TK001",
      show: "Ромео и Джульетта",
      customer: "Анна Петрова",
      date: "15 июня 2025",
      seats: "Ряд 5, места 12-13",
      price: "₽3,200",
      status: "Оплачен",
      orderDate: "10 июня 2025",
    },
    {
      id: "TK002",
      show: "Гамлет",
      customer: "Сергей Иванов",
      date: "20 июня 2025",
      seats: "Ряд 3, место 8",
      price: "₽4,000",
      status: "Оплачен",
      orderDate: "12 июня 2025",
    },
    {
      id: "TK003",
      show: "Золушка",
      customer: "Мария Сидорова",
      date: "25 июня 2025",
      seats: "Ряд 7, места 5-7",
      price: "₽2,400",
      status: "Возврат",
      orderDate: "8 июня 2025",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Оплачен":
        return "bg-green-100 text-green-800";
      case "Возврат":
        return "bg-red-100 text-red-800";
      case "Ожидание":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout title="Билеты и бронирования">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Управление билетами
            </h2>
            <p className="text-sm text-gray-600">Заказы, продажи и возвраты</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="space-x-2">
              <Icon name="FileText" size={16} />
              <span>Отчет по продажам</span>
            </Button>
            <Button className="space-x-2">
              <Icon name="Plus" size={16} />
              <span>Продать билет</span>
            </Button>
          </div>
        </div>

        {/* Статистика продаж */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Продано сегодня
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">47</div>
              <p className="text-xs text-green-600">+23% от вчера</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Выручка сегодня
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">₽89,400</div>
              <p className="text-xs text-green-600">+18% от вчера</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Возвратов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <p className="text-xs text-red-600">-2 от вчера</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Заполняемость
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">87%</div>
              <p className="text-xs text-green-600">+5% от недели</p>
            </CardContent>
          </Card>
        </div>

        {/* Список билетов */}
        <Card>
          <CardHeader>
            <CardTitle>Последние заказы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-900">
                          #{ticket.id}
                        </span>
                        <Badge className={getStatusColor(ticket.status)}>
                          {ticket.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Спектакль</p>
                          <p className="font-medium">{ticket.show}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Покупатель</p>
                          <p className="font-medium">{ticket.customer}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Дата спектакля</p>
                          <p className="font-medium">{ticket.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Места</p>
                          <p className="font-medium">{ticket.seats}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right space-y-2">
                      <div className="text-lg font-bold text-gray-900">
                        {ticket.price}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={14} className="mr-1" />
                          Просмотр
                        </Button>
                        {ticket.status === "Оплачен" && (
                          <Button variant="outline" size="sm">
                            <Icon name="RefreshCw" size={14} className="mr-1" />
                            Возврат
                          </Button>
                        )}
                      </div>
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

export default Tickets;
