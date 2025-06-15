import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";

const Settings = () => {
  return (
    <AdminLayout title="Настройки системы">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Настройки</h2>
            <p className="text-sm text-gray-600">
              Конфигурация сайта и системы
            </p>
          </div>
          <Button className="space-x-2">
            <Icon name="Save" size={16} />
            <span>Сохранить изменения</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Основные настройки */}
          <Card>
            <CardHeader>
              <CardTitle>Основные настройки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Название театра</Label>
                <Input id="siteName" defaultValue="Театр Харита" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="siteDescription">Описание</Label>
                <Textarea
                  id="siteDescription"
                  defaultValue="Московский театр Харита - место, где искусство встречается с душой"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email для связи</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  defaultValue="info@harita-theatre.ru"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone">Телефон</Label>
                <Input id="contactPhone" defaultValue="+7 (495) 123-45-67" />
              </div>
            </CardContent>
          </Card>

          {/* SEO настройки */}
          <Card>
            <CardHeader>
              <CardTitle>SEO оптимизация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  defaultValue="Театр Харита - Билеты на спектакли в Москве"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  defaultValue="Купить билеты на спектакли в театре Харита. Лучшие постановки, доступные цены, удобная покупка онлайн."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Ключевые слова</Label>
                <Input
                  id="keywords"
                  defaultValue="театр, спектакли, билеты, Москва, афиша"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Интеграции */}
        <Card>
          <CardHeader>
            <CardTitle>Интеграции и сервисы</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Аналитика</h3>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="BarChart" className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">
                        Google Analytics
                      </p>
                      <p className="text-sm text-gray-500">Веб-аналитика</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="TrendingUp"
                      className="text-red-600"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        Яндекс.Метрика
                      </p>
                      <p className="text-sm text-gray-500">
                        Российская аналитика
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Социальные сети</h3>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="MessageCircle"
                      className="text-blue-500"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-900">ВКонтакте</p>
                      <p className="text-sm text-gray-500">Социальные сети</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="Send" className="text-blue-400" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Telegram</p>
                      <p className="text-sm text-gray-500">Мессенджер</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Безопасность */}
        <Card>
          <CardHeader>
            <CardTitle>Безопасность</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Двухфакторная аутентификация
                </p>
                <p className="text-sm text-gray-500">
                  Дополнительная защита аккаунта
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Журнал действий</p>
                <p className="text-sm text-gray-500">
                  Логирование всех изменений
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Автоматический выход
                </p>
                <p className="text-sm text-gray-500">
                  Разлогинирование при бездействии
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Button variant="outline" className="space-x-2">
                  <Icon name="Download" size={16} />
                  <span>Резервная копия</span>
                </Button>
                <Button variant="outline" className="space-x-2">
                  <Icon name="Upload" size={16} />
                  <span>Восстановить</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Settings;
