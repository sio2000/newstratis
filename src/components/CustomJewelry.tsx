import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Diamond, Sparkles, Crown, Star, Gem, Palette, Clock, Award, Zap, Shield, Sparkle, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CustomJewelry: React.FC = () => {
  const [selectedProcess, setSelectedProcess] = useState(0);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const processSteps = [
    {
      icon: Palette,
      title: language === 'en' ? 'Design Consultation' : 'Συμβουλευτική Σχεδιασμού',
      description: language === 'en' ? 'We begin with a personalized consultation to understand your vision and requirements' : 'Ξεκινάμε με μια εξατομικευμένη συνάντηση για να κατανοήσουμε το όραμά σας και τις απαιτήσεις σας',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Diamond,
      title: language === 'en' ? 'Material Selection' : 'Επιλογή Υλικών',
      description: language === 'en' ? 'Choose from the finest precious metals and gemstones for your creation' : 'Επιλέξτε από τα καλύτερα πολύτιμα μέταλλα και πολύτιμους λίθους για τη δημιουργία σας',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sparkles,
      title: language === 'en' ? 'Artisan Crafting' : 'Τεχνική Δημιουργία',
      description: language === 'en' ? 'Our master artisans handcraft your piece with precision and passion' : 'Οι κύριοι τεχνίτες μας δημιουργούν το κομμάτι σας με ακρίβεια και πάθος',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Crown,
      title: language === 'en' ? 'Quality Assurance' : 'Εξασφάλιση Ποιότητας',
      description: language === 'en' ? 'Every piece undergoes rigorous quality control and certification' : 'Κάθε κομμάτι περνά από αυστηρό έλεγχο ποιότητας και πιστοποίηση',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: language === 'en' ? 'Unique Design' : 'Μοναδικό Σχεδιασμό',
      description: language === 'en' ? 'Your vision becomes reality with our bespoke design service' : 'Το όραμα σας γίνεται πραγματικότητα με την εξατομικευμένη υπηρεσία σχεδιασμού μας'
    },
    {
      icon: Diamond,
      title: language === 'en' ? 'Premium Materials' : 'Πρώτης κλάσης Υλικά',
      description: language === 'en' ? 'Only the finest precious metals and certified gemstones' : 'Μόνο τα καλύτερα πολύτιμα μέταλλα και πιστοποιημένοι πολύτιμοι λίθοι'
    },
    {
      icon: Sparkle,
      title: language === 'en' ? 'Timeless Craftsmanship' : 'Αιώνια Τεχνική',
      description: language === 'en' ? 'Traditional techniques combined with modern precision' : 'Παραδοσιακές τεχνικές σε συνδυασμό με σύγχρονη ακρίβεια'
    },
    {
      icon: Trophy,
      title: language === 'en' ? 'Lifetime Warranty' : 'Εγγύηση Ζωής',
      description: language === 'en' ? 'Every custom piece comes with our lifetime guarantee' : 'Κάθε εξατομικευμένο κομμάτι έρχεται με την εγγύηση ζωής μας'
    }
  ];

  return (
    <section id="custom-jewelry" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-20 h-20 lg:w-32 lg:h-32 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 lg:w-40 lg:h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-60 lg:h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 fade-in">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 lg:space-x-3 mb-4 lg:mb-6"
          >
            <Crown className="h-6 w-6 lg:h-8 lg:w-8 text-gold" />
            <span className="text-gold text-base lg:text-lg font-medium uppercase tracking-wider">
              {language === 'en' ? 'Bespoke Service' : 'Εξατομικευμένη Υπηρεσία'}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl lg:text-4xl xl:text-6xl font-serif font-bold mb-4 lg:mb-6 text-white"
          >
            {language === 'en' ? 'Custom Jewelry' : 'Custom Κοσμήματα'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {language === 'en' 
              ? 'Transform your vision into timeless elegance. Our master artisans create bespoke jewelry that tells your unique story.'
              : 'Μετατρέψτε την όρασή σας σε αιώνια κομψότητα. Οι κύριοι τεχνίτες μας δημιουργούν εξατομικευμένα κοσμήματα που αφηγούνται τη μοναδική σας ιστορία.'
            }
          </motion.p>
          
          <div className="section-divider mt-6 lg:mt-8"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group cursor-pointer`}
              onClick={() => setSelectedProcess(index)}
            >
              <div className={`bg-gradient-to-br ${step.color} p-1 rounded-xl lg:rounded-2xl transition-all duration-300 group-hover:scale-105`}>
                <div className="bg-black rounded-xl lg:rounded-2xl p-4 lg:p-6 h-full">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${step.color} rounded-full mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-serif font-bold text-white mb-2 lg:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-xs lg:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Selection Indicator */}
              {selectedProcess === index && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 bg-gold rounded-full flex items-center justify-center"
                >
                  <Star className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-black" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/20"
            >
              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-gold via-yellow-400 to-gold-light rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg shadow-gold/30 border border-gold/50">
                    <feature.icon className="h-5 w-5 lg:h-6 lg:w-6 text-black font-bold drop-shadow-sm" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-serif font-bold text-gold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-effect rounded-xl lg:rounded-2xl p-8 lg:p-12 border-2 border-gold/30 bg-gradient-to-br from-black/50 to-gray-900/50">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-gold mb-4 lg:mb-6">
              {language === 'en' ? 'Ready to Create Your Masterpiece?' : 'Είστε Έτοιμοι να Δημιουργήσετε το Αριστούργημά σας;'}
            </h3>
            <p className="text-lg lg:text-xl text-white/80 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
              {language === 'en'
                ? 'Book a consultation with our design experts and start your journey to a truly unique piece of jewelry.'
                : 'Κλείστε μια συνάντηση με τους ειδικούς σχεδιασμού μας και ξεκινήστε το ταξίδι σας προς ένα πραγματικά μοναδικό κομμάτι κοσμήματος.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-gold via-yellow-400 to-gold-light text-black font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-lg lg:rounded-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-gold/50 hover:border-gold/80 hover:scale-105"
              >
                <Palette className="h-5 w-5" />
                <span className="text-sm lg:text-base">
                  {language === 'en' ? 'Book Consultation' : 'Κλείστε Συνάντηση'}
                </span>
              </button>
              <button
                onClick={() => navigate('/custom-jewelry-details')}
                className="bg-gradient-to-r from-gold via-yellow-400 to-gold-light text-black font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-lg lg:rounded-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-gold/50 hover:border-gold/80 hover:scale-105"
              >
                <Clock className="h-5 w-5" />
                <span className="text-sm lg:text-base">
                  {language === 'en' ? 'Learn More' : 'Μάθετε Περισσότερα'}
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomJewelry;
