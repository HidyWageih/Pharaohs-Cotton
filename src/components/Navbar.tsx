import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import Sidebar from './Sidebar';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'fil', name: 'Filipino' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-pharaoh-black border-b border-pharaoh-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img className="h-16" src="/logo.svg" alt="Pharaoh's Cotton" />
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-pharaoh-gold hover:text-pharaoh-gold-light px-3 py-2 rounded-md text-sm font-medium">
                  {t('nav.home')}
                </a>
                <a href="#" className="text-pharaoh-gold hover:text-pharaoh-gold-light px-3 py-2 rounded-md text-sm font-medium">
                  {t('nav.about')}
                </a>
                <a href="#" className="text-pharaoh-gold hover:text-pharaoh-gold-light px-3 py-2 rounded-md text-sm font-medium">
                  {t('nav.contact')}
                </a>
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center text-pharaoh-gold hover:text-pharaoh-gold-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Globe className="h-5 w-5 mr-1" />
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-pharaoh-black border border-pharaoh-gold/20">
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className="block w-full text-left px-4 py-2 text-sm text-pharaoh-gold hover:bg-pharaoh-gold/10"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-pharaoh-gold hover:text-pharaoh-gold-light px-3 py-2 rounded-md text-sm font-medium"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
            
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="text-pharaoh-gold hover:text-pharaoh-gold-light"
              >
                <Globe className="h-6 w-6" />
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-pharaoh-gold hover:text-pharaoh-gold-light"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-pharaoh-gold hover:text-pharaoh-gold-light block px-3 py-2 rounded-md text-base font-medium">
                {t('nav.home')}
              </a>
              <a href="#" className="text-pharaoh-gold hover:text-pharaoh-gold-light block px-3 py-2 rounded-md text-base font-medium">
                {t('nav.about')}
              </a>
              <a href="#" className="text-pharaoh-gold hover:text-pharaoh-gold-light block px-3 py-2 rounded-md text-base font-medium">
                {t('nav.contact')}
              </a>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="text-pharaoh-gold hover:text-pharaoh-gold-light block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;