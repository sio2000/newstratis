import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Certifications: React.FC = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      icon: Shield,
      title: t('cert.gold.title'),
      description: t('cert.gold.desc'),
      badge: '24K',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Award,
      title: t('cert.silver.title'),
      description: t('cert.silver.desc'),
      badge: '925',
      color: 'from-gray-300 to-gray-500'
    },
    {
      icon: Clock,
      title: t('cert.watch.title'),
      description: t('cert.watch.desc'),
      badge: '2 ΕΤΗ',
      color: 'from-gold via-yellow-300 to-gold-light'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gold">
            {t('cert.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">{t('cert.subtitle')}</p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative glass-effect rounded-lg p-8 text-center hover-glow group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r ${cert.color} ${cert.badge === '2 ΕΤΗ' ? 'text-white' : 'text-black'} font-bold rounded-full text-sm shadow-lg`}>
                {cert.badge}
              </div>

              {/* Icon */}
              <div className="mb-6 mt-4">
                <cert.icon className="h-16 w-16 text-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-bold mb-4 text-gold">
                {cert.title}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {cert.description}
              </p>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">30+</div>
            <div className="text-white">Χρόνια Εμπειρίας</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">10K+</div>
            <div className="text-white">Ικανοποιημένοι Πελάτες</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">100%</div>
            <div className="text-white">Εγγύηση Ποιότητας</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">24/7</div>
            <div className="text-white">Υποστήριξη</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;