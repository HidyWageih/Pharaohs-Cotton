import React from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <div 
      className={`fixed inset-y-0 right-0 w-64 bg-pharaoh-black border-l border-pharaoh-gold/20 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pharaoh-gold hover:text-pharaoh-gold-light"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="mt-8 space-y-4">
          <h3 className="text-pharaoh-gold font-cinzel text-xl mb-4">Menu</h3>
          
          <div className="space-y-2">
            <a href="#" className="block text-pharaoh-gold hover:text-pharaoh-gold-light py-2 px-4 rounded transition-colors">
              {t('categories.valleyOfKings.title')}
            </a>
            <a href="#" className="block text-pharaoh-gold hover:text-pharaoh-gold-light py-2 px-4 rounded transition-colors">
              {t('categories.pyramidThreads.title')}
            </a>
            <a href="#" className="block text-pharaoh-gold hover:text-pharaoh-gold-light py-2 px-4 rounded transition-colors">
              {t('categories.templeSimplicity.title')}
            </a>
            <a href="#" className="block text-pharaoh-gold hover:text-pharaoh-gold-light py-2 px-4 rounded transition-colors">
              {t('categories.goldenTreasures.title')}
            </a>
          </div>

          <div className="border-t border-pharaoh-gold/20 pt-4 mt-4">
            <a href="#" className="block text-pharaoh-gold hover:text-pharaoh-gold-light py-2 px-4 rounded transition-colors">
              {t('nav.about')}
            </a>
            <a href="#" className="block text-pharaoh-gold hover:text-pharaoh-gold-light py-2 px-4 rounded transition-colors">
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;