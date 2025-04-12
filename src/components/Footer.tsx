import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-pharaoh-black border-t border-pharaoh-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-pharaoh-gold font-cinzel text-xl mb-4">
              {t('footer.contact')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-pharaoh-gold-light">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center text-pharaoh-gold-light">
                <Phone className="h-5 w-5 mr-2" />
                <span>{t('footer.phone')}</span>
              </div>
              <div className="flex items-center text-pharaoh-gold-light">
                <Mail className="h-5 w-5 mr-2" />
                <span>{t('footer.email')}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-pharaoh-gold/20 mt-8 pt-8 text-center">
          <p className="text-pharaoh-gold-light">
            © {new Date().getFullYear()} Pharaoh's Cotton. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;