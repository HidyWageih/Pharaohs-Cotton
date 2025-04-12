import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const categories = [
  {
    id: 'valleyOfKings',
    image: 'https://images.unsplash.com/photo-1562903990-e45c8a4be690?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-pharaoh-black/80 to-transparent'
  },
  {
    id: 'pyramidThreads',
    image: 'https://images.unsplash.com/photo-1604343574242-f3c1fa7c1b11?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-pharaoh-black/80 to-transparent'
  },
  {
    id: 'templeSimplicity',
    image: 'https://images.unsplash.com/photo-1682686580950-960d1d513532?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-pharaoh-black/80 to-transparent'
  },
  {
    id: 'goldenTreasures',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-pharaoh-black/80 to-transparent'
  }
];

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-pharaoh-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-cinzel text-center mb-12 text-pharaoh-gold">
          Pharaoh's Cotton
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-lg h-96 group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient}`} />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h2 className="text-2xl font-cinzel text-pharaoh-gold mb-2">
                  {t(`categories.${category.id}.title`)}
                </h2>
                <p className="text-pharaoh-gold-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(`categories.${category.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;