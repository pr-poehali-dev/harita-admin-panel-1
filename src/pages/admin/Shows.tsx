import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: "Ромео и Джульетта",
      category: "Драма",
      date: "15 июня 2025",
      time: "19:00",
      price: "₽1,200 - ₽3,500",
      status: "Активен",
      sold: 85,
      total: 120,
      poster:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Гамлет",
      category: "Трагедия",
      date: "20 июня 2025",
      time: "18:30",
      price: "₽1,500 - ₽4,000",
      status: "Активен",
      sold: 92,
      total: 120,
      poster:
        "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=300&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Золушка",
      category: "Детский",
      date: "25 июня 2025",
      time: "16:00",
      price: "₽800 - ₽2,000",
      status: "Скоро",
      sold: 23,
      total: 120,
      poster:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    },
  ];

  return (
    <AdminLayout title="Управление спектаклями">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Все спектакли
            </h2>
            <p className="text-sm text-gray-600">
              Управление афишей и расписанием
            </p>
          </div>
          <Button className="space-x-2">
            <Icon name="Plus" size={16} />
            <span>Добавить спектакль</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((show) => (
            <Card key={show.id} className="hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                <img
                  src={show.poster}
                  alt={show.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant={
                      show.status === "Активен" ? "default" : "secondary"
                    }
                  >
                    {show.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{show.title}</CardTitle>
                    <CardDescription>{show.category}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Icon name="Calendar" size={16} />
                  <span>
                    {show.date} в {show.time}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Icon name="DollarSign" size={16} />
                  <span>{show.price}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Продано билетов</span>
                    <span>
                      {show.sold}/{show.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${(show.sold / show.total) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon name="Edit" size={14} className="mr-1" />
                    Изменить
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon name="BarChart3" size={14} className="mr-1" />
                    Статистика
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Shows;
