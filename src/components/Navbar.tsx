import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'it' ? 'en' : 'it';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold tracking-tight"
          >
            <span className="border-b-2 border-foreground pb-1">LORENZO</span>
          </button>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-sm font-medium"
            >
              {i18n.language.toUpperCase()}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-6 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-lg hover:opacity-70 transition-opacity"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-lg hover:opacity-70 transition-opacity"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('rooms')}
              className="block w-full text-left text-lg hover:opacity-70 transition-opacity"
            >
              {t('nav.rooms')}
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="block w-full text-left text-lg hover:opacity-70 transition-opacity"
            >
              {t('nav.amenities')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-lg hover:opacity-70 transition-opacity"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
