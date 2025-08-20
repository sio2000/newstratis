import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Icon from './ui/Icon';
import Image from './ui/Image';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();

  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      titleEn: "Timeless Greek Elegance",
      titleGr: "Αιώνια Ελληνική Κομψότητα",
      subtitleEn: "Where Mediterranean heritage meets contemporary luxury",
      subtitleGr: "Όπου η μεσογειακή κληρονομιά συναντά τη σύγχρονη πολυτέλεια",
      ctaEn: "Explore Collections",
      ctaGr: "Εξερευνήστε τις Συλλογές"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      titleEn: "Crafted with Passion",
      titleGr: "Δημιουργημένα με Πάθος",
      subtitleEn: "Every piece tells your unique story",
      subtitleGr: "Κάθε κόσμημα αφηγείται τη μοναδική σας ιστορία",
      ctaEn: "Book Consultation",
      ctaGr: "Κλείστε Συνάντηση"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      titleEn: "Swiss Horological Excellence",
      titleGr: "Ελβετική Ωρολογοποιική Αριστεία",
      subtitleEn: "Precision timepieces for discerning collectors",
      subtitleGr: "Ακριβή χρονόμετρα για απαιτητικούς συλλέκτες",
      ctaEn: "View Watches",
      ctaGr: "Δείτε Ρολόγια"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides?.length]);

  const handleCTAClick = (slideId: number) => {
    // Scroll to appropriate section instead of navigation
    switch (slideId) {
      case 1:
        document.getElementById('gold')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        document.getElementById('watches')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        document.getElementById('gold')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSlideData = heroSlides?.[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Image
          src={currentSlideData?.image}
          alt="Luxury jewelry hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </motion.div>



      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
                {language === 'en' ? currentSlideData?.titleEn : currentSlideData?.titleGr}
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                {language === 'en' ? currentSlideData?.subtitleEn : currentSlideData?.subtitleGr}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => handleCTAClick(currentSlideData?.id)}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-gradient-to-r from-gold to-gold-light text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {language === 'en' ? currentSlideData?.ctaEn : currentSlideData?.ctaGr}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
                  iconName="BookOpen"
                  iconPosition="left"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  {language === 'en' ? 'Our Heritage' : 'Η Κληρονομιά μας'}
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center space-x-2 text-white/80">
                  <Icon name="Award" size={20} />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'Certified Artisans' : 'Πιστοποιημένοι Τεχνίτες'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Icon name="Shield" size={20} />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'Lifetime Warranty' : 'Εγγύηση Ζωής'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Icon name="Truck" size={20} />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'Free Shipping' : 'Δωρεάν Αποστολή'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {heroSlides?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gold shadow-lg'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs font-medium mb-2 rotate-90 origin-center">
            {language === 'en' ? 'SCROLL' : 'ΚΥΛΙΣΤΕ'}
          </span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
