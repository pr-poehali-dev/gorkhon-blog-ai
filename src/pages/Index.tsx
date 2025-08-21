import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const stories = [
    {
      title: "Утро в Горхоне",
      excerpt: "Сегодня я проснулась под звуки пения птиц за окном. В нашем поселке так тихо и спокойно, что слышно каждый шорох листвы...",
      date: "15 августа 2025",
      readTime: "3 мин"
    },
    {
      title: "Бабушкины рецепты",
      excerpt: "Моя соседка Мария Ивановна поделилась секретом приготовления настоящих бурятских позов. Это такая семейная традиция...",
      date: "12 августа 2025", 
      readTime: "5 мин"
    },
    {
      title: "История нашего дома",
      excerpt: "Каждый дом в Горхоне хранит свою историю. Наш был построен еще в 1960-х годах моим дедушкой...",
      date: "10 августа 2025",
      readTime: "4 мин"
    }
  ];

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-wheat">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Home" className="text-warm" size={24} />
            <h1 className="text-xl font-bold text-warm">Блог Александры</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-warm transition-colors">О поселке</a>
            <a href="#stories" className="text-gray-600 hover:text-warm transition-colors">Истории</a>
            <a href="#gallery" className="text-gray-600 hover:text-warm transition-colors">Галерея</a>
            <a href="#contact" className="text-gray-600 hover:text-warm transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wheat to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-warm mb-4">Добро пожаловать в Горхон</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Меня зовут Александра, и я хочу рассказать вам о нашем уютном поселке Горхон 
                в Заиграевском районе Республики Бурятии. Здесь каждый день полон маленьких открытий 
                и теплых встреч с соседями.
              </p>
              <div className="flex items-center space-x-4">
                <Button className="bg-warm hover:bg-primary/90 text-white">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать истории
                </Button>
                <Button variant="outline" className="border-warm text-warm hover:bg-warm hover:text-white">
                  <Icon name="Camera" size={16} className="mr-2" />
                  Смотреть фото
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/50835305-84e5-4d65-b519-7abe3cb4dc62.jpg" 
                alt="Александра - блогер из Горхона"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src="/img/627ed5b1-40fa-42b0-a87f-91aca4483041.jpg" 
                alt="Поселок Горхон"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-warm mb-4">О поселке Горхон</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Горхон — небольшой уютный поселок в Заиграевском районе Бурятии. 
                Здесь живут добрые люди, которые помнят старые традиции и с радостью 
                делятся ими с гостями.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Наш поселок окружен живописными холмами и березовыми рощами. 
                Воздух здесь чистый, а темп жизни размеренный — как раз то, 
                что нужно для спокойной счастливой жизни.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="text-forest" size={20} />
                  <span className="text-sm text-gray-600">~500 жителей</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mountain" className="text-forest" size={20} />
                  <span className="text-sm text-gray-600">Холмистая местность</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TreePine" className="text-forest" size={20} />
                  <span className="text-sm text-gray-600">Березовые рощи</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" className="text-forest" size={20} />
                  <span className="text-sm text-gray-600">Дружная община</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-16 bg-beige">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-warm mb-4">Последние истории</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Каждый день в Горхоне происходит что-то особенное. Делюсь с вами 
              моими наблюдениями и встречами с замечательными людьми нашего поселка.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white border-wheat">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {story.date}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {story.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-warm hover:text-primary transition-colors cursor-pointer">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                  <Button variant="ghost" className="text-warm hover:text-primary hover:bg-wheat p-0">
                    Читать полностью 
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-warm mb-4">Галерея поселка</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Фотографии, которые показывают красоту нашего поселка в разные времена года.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-wheat rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Icon name="Image" className="text-warm" size={32} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-forest hover:bg-secondary/90 text-white">
              <Icon name="Camera" size={16} className="mr-2" />
              Посмотреть все фото
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-warm text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Свяжитесь со мной</h3>
          <p className="text-lg mb-8 opacity-90">
            У вас есть вопросы о поселке Горхон или хотите поделиться своей историей? 
            Буду рада общению!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={20} />
              <span>alexandra.gorkhon@email.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={20} />
              <span>+7 (XXX) XXX-XX-XX</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-warm">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Написать сообщение
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Home" size={20} />
            <span className="text-lg font-semibold">Блог Александры о Горхоне</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Истории из поселка Горхон, Заиграевский район, Республика Бурятия
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;