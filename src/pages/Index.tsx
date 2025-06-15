import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Icon name="Theater" className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Театр Харита
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Система управления театром
          </p>
          <p className="text-gray-500 mb-8">
            Добро пожаловать в административную панель театра Харита
          </p>

          <Link to="/admin">
            <Button size="lg" className="space-x-2">
              <Icon name="LogIn" size={20} />
              <span>Войти в админ-панель</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="BarChart3" className="text-purple-600" size={24} />
                <span>Аналитика</span>
              </CardTitle>
              <CardDescription>
                Отслеживайте продажи, посещаемость и финансы
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Theater" className="text-purple-600" size={24} />
                <span>Спектакли</span>
              </CardTitle>
              <CardDescription>
                Управляйте афишей, расписанием и билетами
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Users" className="text-purple-600" size={24} />
                <span>Пользователи</span>
              </CardTitle>
              <CardDescription>
                Управляйте клиентской базой и рассылками
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Ticket" className="text-purple-600" size={24} />
                <span>Билеты</span>
              </CardTitle>
              <CardDescription>
                Продажа, возврат и управление бронированиями
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="DollarSign" className="text-purple-600" size={24} />
                <span>Финансы</span>
              </CardTitle>
              <CardDescription>
                Отчеты по выручке и платежным системам
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Settings" className="text-purple-600" size={24} />
                <span>Настройки</span>
              </CardTitle>
              <CardDescription>
                SEO, интеграции и конфигурация системы
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
