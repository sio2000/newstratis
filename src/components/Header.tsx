import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/Logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="Stratis Fine Jewels" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-xl font-serif font-bold text-gold">Stratis Fine Jewels</h1>
              <p className="text-xs text-white/70 -mt-1">Luxury it's in purest form</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a onClick={() => scrollToSection('hero')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.home')}
            </a>
            <a onClick={() => scrollToSection('gold')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.gold')}
            </a>
            <a onClick={() => scrollToSection('silver')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.silver')}
            </a>
            <a onClick={() => scrollToSection('watches')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.watches')}
            </a>
            <a onClick={() => scrollToSection('services')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.services')}
            </a>
            <a onClick={() => scrollToSection('certifications')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.certifications')}
            </a>
            <a onClick={() => scrollToSection('contact')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gold/20 hover:bg-gold/30 transition-colors"
            >
              <Globe className="h-4 w-4 text-gold" />
              <span className="text-gold font-medium">{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gold/20">
            <nav className="flex flex-col py-4">
              <a onClick={() => scrollToSection('hero')} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.home')}
              </a>
              <a onClick={() => scrollToSection('gold')} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.gold')}
              </a>
              <a onClick={() => scrollToSection('silver')} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.silver')}
              </a>
              <a onClick={() => scrollToSection('watches')} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.watches')}
              </a>
              <a onClick={() => scrollToSection('services')} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.services')}
              </a>
              <a onClick={() => scrollToSection('certifications')} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.certifications')}
              </a>
              <a onClick={() => scrollToSection('contact')} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;