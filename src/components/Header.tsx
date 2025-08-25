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

  const toggleDropdown = (dropdown: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
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
                onClick={(e) => toggleDropdown('gold', e)}
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
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCategoryClick('gold');
                      }}
                      className="w-full text-left px-4 py-3 text-gold hover:bg-gold/10 transition-all duration-200 font-medium border-b border-gold/20"
                    >
                      {getCategoryLabel('gold')}
                    </button>
                    {subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleSubcategoryClick('gold', sub.id);
                        }}
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
                onClick={(e) => toggleDropdown('silver', e)}
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
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCategoryClick('silver');
                      }}
                      className="w-full text-left px-4 py-3 text-gold hover:bg-gold/10 transition-all duration-200 font-medium border-b border-gold/20"
                    >
                      {getCategoryLabel('silver')}
                    </button>
                    {subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleSubcategoryClick('silver', sub.id);
                        }}
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
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-md border-t-2 border-gold/30 shadow-2xl shadow-gold/20 z-50 max-h-screen overflow-y-auto">
            <nav className="flex flex-col py-6">
              {/* Gold Section */}
              <a onClick={() => {
                setCategory('gold');
                setSubcategory(null);
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-6 py-4 text-white hover:text-gold transition-all duration-300 cursor-pointer border-b-2 border-gold/30 hover:border-gold/50 hover:bg-gold/5 font-medium text-lg">
                {t('nav.gold')}
              </a>
              
              {/* Gold Subcategories */}
              <a onClick={() => {
                setCategory('gold');
                setSubcategory('rings');
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-10 py-3 text-white/90 hover:text-gold transition-all duration-300 cursor-pointer hover:bg-gold/5 border-l-2 border-transparent hover:border-l-gold/30 text-base">
                {language === 'en' ? 'Rings' : 'Δαχτυλίδια'}
              </a>
              
              <a onClick={() => {
                setCategory('gold');
                setSubcategory('necklaces');
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-10 py-3 text-white/90 hover:text-gold transition-all duration-300 cursor-pointer hover:bg-gold/5 border-l-2 border-transparent hover:border-l-gold/30 text-base">
                {language === 'en' ? 'Necklaces' : 'Περιδέραια'}
              </a>
              
              <a onClick={() => {
                setCategory('gold');
                setSubcategory('earrings');
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-10 py-3 text-white/90 hover:text-gold transition-all duration-300 cursor-pointer hover:bg-gold/5 border-l-2 border-transparent hover:border-l-gold/30 text-base">
                {language === 'en' ? 'Earrings' : 'Σκουλαρίκια'}
              </a>
              
              <a onClick={() => {
                setCategory('gold');
                setSubcategory('bracelets');
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-10 py-3 text-white/90 hover:text-gold transition-all duration-300 cursor-pointer hover:bg-gold/5 border-l-2 border-transparent hover:border-l-gold/30 text-base">
                {language === 'en' ? 'Bracelets' : 'Βραχιόλια'}
              </a>

              {/* Silver Section */}
              <a onClick={() => {
                setCategory('silver');
                setSubcategory(null);
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-6 py-4 text-white hover:text-gold transition-all duration-300 cursor-pointer border-b-2 border-gold/30 hover:border-gold/50 hover:bg-gold/5 font-medium text-lg">
                {t('nav.silver')}
              </a>
              
              {/* Silver Subcategories */}
              <a onClick={() => {
                setCategory('silver');
                setSubcategory('rings');
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-10 py-3 text-white/90 hover:text-gold transition-all duration-300 cursor-pointer hover:bg-gold/5 border-l-2 border-transparent hover:border-l-gold/30 text-base">
                {language === 'en' ? 'Rings' : 'Δαχτυλίδια'}
              </a>
              
              <a onClick={() => {
                setCategory('silver');
                setSubcategory('necklaces');
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-10 py-3 text-white/90 hover:text-gold transition-all duration-300 cursor-pointer hover:bg-gold/5 border-l-2 border-transparent hover:border-l-gold/30 text-base">
                {language === 'en' ? 'Necklaces' : 'Περιδέραια'}
              </a>
              
              <a onClick={() => {
                setCategory('silver');
                setSubcategory('earrings');
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-10 py-3 text-white/90 hover:text-gold transition-all duration-300 cursor-pointer hover:bg-gold/5 border-l-2 border-transparent hover:border-l-gold/30 text-base">
                {language === 'en' ? 'Earrings' : 'Σκουλαρίκια'}
              </a>
              
              <a onClick={() => {
                setCategory('silver');
                setSubcategory('bracelets');
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-10 py-3 text-white/90 hover:text-gold transition-all duration-300 cursor-pointer hover:bg-gold/5 border-l-2 border-transparent hover:border-l-gold/30 text-base">
                {language === 'en' ? 'Bracelets' : 'Βραχιόλια'}
              </a>

              <a onClick={() => {
                setCategory('watches');
                setSubcategory(null);
                navigateToSection('product-gallery');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-6 py-4 text-white hover:text-gold transition-all duration-300 cursor-pointer border-b-2 border-gold/30 hover:border-gold/50 hover:bg-gold/5 font-medium text-lg">
                {t('nav.watches')}
              </a>
              <a onClick={() => {
                handleNavClick('services');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-6 py-4 text-white hover:text-gold transition-all duration-300 cursor-pointer border-b-2 border-gold/30 hover:border-gold/50 hover:bg-gold/5 font-medium text-lg">
                {t('nav.services')}
              </a>
              <a onClick={() => {
                handleNavClick('custom-jewelry');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-6 py-4 text-white hover:text-gold transition-all duration-300 cursor-pointer border-b-2 border-gold/30 hover:border-gold/50 hover:bg-gold/5 font-medium text-lg">
                {language === 'en' ? 'Custom Jewelry' : 'Εξατομικευμένα Κοσμήματα'}
              </a>
              <a onClick={() => {
                handleNavClick('certifications');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-6 py-4 text-white hover:text-gold transition-all duration-300 cursor-pointer border-b-2 border-gold/30 hover:border-gold/50 hover:bg-gold/5 font-medium text-lg">
                {t('nav.certifications')}
              </a>
              <a onClick={() => {
                handleNavClick('contact');
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }} className="px-6 py-4 text-white hover:text-gold transition-all duration-300 cursor-pointer border-b-2 border-gold/30 hover:border-gold/50 hover:bg-gold/5 font-medium text-lg">
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