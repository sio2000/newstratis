import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('gold');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--gold) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold rounded-full opacity-60 floating" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-gold rounded-full opacity-40 floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-gradient-to-r from-gold to-gold-light rounded-full opacity-30 floating" style={{animationDelay: '4s'}}></div>

      {/* Video Background Effect */}
      <div className="absolute inset-0 bg-black/50">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-shadow-gold">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gold font-light tracking-wide">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <button 
            onClick={scrollToProducts}
            className="luxury-button text-lg px-8 py-4 rounded-none hover-glow"
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-bounce cursor-pointer" onClick={scrollToProducts}>
        <ChevronDown className="h-8 w-8" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </section>
  );
};

export default Hero;