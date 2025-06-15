import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Finances = () => {
  const monthlyData = [
    { month: "Январь", revenue: 890000, expenses: 120000, profit: 770000 },
    { month: "Февраль", revenue: 1100000, expenses: 135000, profit: 965000 },
    { month: "Март", revenue: 1350000, expenses: 150000, profit: 1200000 },
    { month: "Апрель", revenue: 1200000, expenses: 140000, profit: 1060000 },
    { month: "Май", revenue: 1450000, expenses: 160000, profit: 1290000 },
    { month: "Июнь", revenue: 1234567, expenses: 145000, profit: 1089567 },
  ];

  const paymentMethods = [
    {
      method: "Банковские карты",
      amount: "₽856,340",
      percentage: 69.3,
      color: "bg-purple-500",
    },
    {
      method: "Наличные (касса)",
      amount: "₽234,567",
      percentage: 19.0,
      color: "bg-blue-500",
    },
    {
      method: "СБП",
      amount: "₽98,760",
      percentage: 8.0,
      color: "bg-green-500",
    },
    {
      method: "Электронные кошельки",
      amount: "₽44,900",
      percentage: 3.7,
      color: "bg-orange-500",
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <AdminLayout title="Финансы и аналитика">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Финансовая отчетность
            </h2>
            <p className="text-sm text-gray-600">
              Анализ доходов и расходов театра
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="space-x-2">
              <Icon name="Download" size={16} />
              <span>Экспорт в Excel</span>
            </Button>
            <Button className="space-x-2">
              <Icon name="FileText" size={16} />
              <span>Создать отчет</span>
            </Button>
          </div>
        </div>

        {/* Основные показатели */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Выручка за месяц
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">₽1,234,567</div>
              <p className="text-xs text-green-600">+15% от прошлого месяца</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Прибыль
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">₽1,089,567</div>
              <p className="text-xs text-green-600">+18% от прошлого месяца</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Расходы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">₽145,000</div>
              <p className="text-xs text-red-600">+5% от прошлого месяца</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Рентабельность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">88.3%</div>
              <p className="text-xs text-green-600">+2.1% от прошлого месяца</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Динамика по месяцам */}
          <Card>
            <CardHeader>
              <CardTitle>Динамика доходов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {data.month}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {formatCurrency(data.revenue)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all"
                        style={{ width: `${(data.revenue / 1500000) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Способы оплаты */}
          <Card>
            <CardHeader>
              <CardTitle>Способы оплаты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {method.method}
                      </span>
                      <div className="text-right">
                        <span className="text-sm font-bold text-gray-900">
                          {method.amount}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          {method.percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${method.color} h-2 rounded-full transition-all`}
                        style={{ width: `${method.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Интеграции с платежными системами */}
        <Card>
          <CardHeader>
            <CardTitle>Платежные системы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name="CreditCard"
                      className="text-green-600"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Сбербанк</p>
                    <p className="text-sm text-green-600">Подключен</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Настроить
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name="CreditCard"
                      className="text-yellow-600"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Тинькофф</p>
                    <p className="text-sm text-green-600">Подключен</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Настроить
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="Wallet" className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">ЮMoney</p>
                    <p className="text-sm text-gray-500">Не подключен</p>
                  </div>
                </div>
                <Button size="sm">Подключить</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Finances;
