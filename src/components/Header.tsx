import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigation } from '../contexts/NavigationContext';
import { useFilters } from '../contexts/FilterContext';
import logo from '../assets/Logo.png';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { navigateToSection, scrollToTop } = useNavigation();
  const { setCategory, setSubcategory } = useFilters();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string) => {
    navigateToSection(sectionId);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleCategoryClick = (category: string) => {
    setCategory(category);
    setSubcategory(null);
    navigateToSection('product-gallery');
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleSubcategoryClick = (category: string, subcategory: string) => {
    setCategory(category);
    setSubcategory(subcategory);
    navigateToSection('product-gallery');
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const subcategories = [
    { id: 'rings', labelEn: 'Rings', labelGr: 'Δαχτυλίδια' },
    { id: 'necklaces', labelEn: 'Necklaces', labelGr: 'Περιδέραια' },
    { id: 'earrings', labelEn: 'Earrings', labelGr: 'Σκουλαρίκια' },
    { id: 'bracelets', labelEn: 'Bracelets', labelGr: 'Βραχιόλια' }
  ];

  // Get category labels
  const getCategoryLabel = (category: string) => {
    if (language === 'en') {
      return category === 'gold' ? 'All Gold Jewelry' : 'All Silver Jewelry';
    } else {
      return category === 'gold' ? 'Όλα τα Χρυσά Κοσμήματα' : 'Όλα τα Ασημένια Κοσμήματα';
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
            <img src={logo} alt="Stratis Fine Jewels" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-xl font-serif font-bold text-gold">Stratis Fine Jewels</h1>
              <p className="text-xs text-white/70 -mt-1">Luxury it's in purest form</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Gold Dropdown */}
            <div className="relative group dropdown-container">
              <button
                onClick={() => toggleDropdown('gold')}
                className="flex items-center space-x-1 text-white hover:text-gold transition-colors cursor-pointer font-medium"
              >
                <span>{t('nav.gold')}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'gold' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Gold Dropdown Menu */}
              {activeDropdown === 'gold' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-gold/30 rounded-lg shadow-2xl shadow-gold/20 z-50">
                  <div className="py-2">
                    <button
                      onClick={() => handleCategoryClick('gold')}
                      className="w-full text-left px-4 py-3 text-gold hover:bg-gold/10 transition-all duration-200 font-medium border-b border-gold/20"
                    >
                      {getCategoryLabel('gold')}
                    </button>
                    {subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubcategoryClick('gold', sub.id)}
                        className="w-full text-left px-4 py-3 text-white/90 hover:text-gold hover:bg-gold/10 transition-all duration-200"
                      >
                        {language === 'en' ? sub.labelEn : sub.labelGr}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Silver Dropdown */}
            <div className="relative group dropdown-container">
              <button
                onClick={() => toggleDropdown('silver')}
                className="flex items-center space-x-1 text-white hover:text-gold transition-colors cursor-pointer font-medium"
              >
                <span>{t('nav.silver')}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'silver' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Silver Dropdown Menu */}
              {activeDropdown === 'silver' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-gold/30 rounded-lg shadow-2xl shadow-gold/20 z-50">
                  <div className="py-2">
                    <button
                      onClick={() => handleCategoryClick('silver')}
                      className="w-full text-left px-4 py-3 text-gold hover:bg-gold/10 transition-all duration-200 font-medium border-b border-gold/20"
                    >
                      {getCategoryLabel('silver')}
                    </button>
                    {subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubcategoryClick('silver', sub.id)}
                        className="w-full text-left px-4 py-3 text-white/90 hover:text-gold hover:bg-gold/10 transition-all duration-200"
                      >
                        {language === 'en' ? sub.labelEn : sub.labelGr}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a onClick={() => {
              setCategory('watches');
              setSubcategory(null);
              navigateToSection('product-gallery');
            }} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.watches')}
            </a>
            <a onClick={() => handleNavClick('services')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.services')}
            </a>
            <a onClick={() => handleNavClick('custom-jewelry')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {language === 'en' ? 'Custom Jewelry' : 'Custom Κοσμήματα'}
            </a>
            <a onClick={() => handleNavClick('certifications')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
              {t('nav.certifications')}
            </a>
            <a onClick={() => handleNavClick('contact')} className="text-white hover:text-gold transition-colors cursor-pointer font-medium">
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
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gold/20 z-50">
            <nav className="flex flex-col py-4">
              {/* Gold Section */}
              <div className="border-b border-gold/20">
                <button
                  onClick={() => toggleDropdown('gold-mobile')}
                  className="w-full text-left px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{t('nav.gold')}</span>
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'gold-mobile' ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeDropdown === 'gold-mobile' && (
                  <div className="bg-black/50 border-l-2 border-gold/30 ml-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCategory('gold');
                        setSubcategory(null);
                        navigateToSection('product-gallery');
                        setIsMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-8 py-3 text-gold font-medium border-b border-gold/20"
                    >
                      {getCategoryLabel('gold')}
                    </button>
                    {subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCategory('gold');
                          setSubcategory(sub.id);
                          navigateToSection('product-gallery');
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-8 py-2 text-white/80 hover:text-gold transition-colors cursor-pointer"
                      >
                        {language === 'en' ? sub.labelEn : sub.labelGr}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Silver Section */}
              <div className="border-b border-gold/20">
                <button
                  onClick={() => toggleDropdown('silver-mobile')}
                  className="w-full text-left px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{t('nav.silver')}</span>
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'silver-mobile' ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeDropdown === 'silver-mobile' && (
                  <div className="bg-black/50 border-l-2 border-gold/30 ml-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCategory('silver');
                        setSubcategory(null);
                        navigateToSection('product-gallery');
                        setIsMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-8 py-3 text-gold font-medium border-b border-gold/20"
                    >
                      {getCategoryLabel('silver')}
                    </button>
                    {subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCategory('silver');
                          setSubcategory(sub.id);
                          navigateToSection('product-gallery');
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-8 py-2 text-white/80 hover:text-gold transition-colors cursor-pointer"
                      >
                        {language === 'en' ? sub.labelEn : sub.labelGr}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a onClick={() => {
                setCategory('watches');
                setSubcategory(null);
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.watches')}
              </a>
              <a onClick={() => {
                handleNavClick('services');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.services')}
              </a>
              <a onClick={() => {
                handleNavClick('custom-jewelry');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {language === 'en' ? 'Custom Jewelry' : 'Εξατομικευμένα Κοσμήματα'}
              </a>
              <a onClick={() => {
                handleNavClick('certifications');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
                {t('nav.certifications')}
              </a>
              <a onClick={() => {
                handleNavClick('contact');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-4 py-3 text-white hover:text-gold transition-colors cursor-pointer">
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