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
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <Crown className="h-8 w-8 text-gold" />
            <span className="text-gold text-lg font-medium uppercase tracking-wider">
              {language === 'en' ? 'Bespoke Service' : 'Εξατομικευμένη Υπηρεσία'}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white"
          >
            {language === 'en' ? 'Custom Jewelry' : 'Custom Κοσμήματα'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            {language === 'en' 
              ? 'Transform your vision into timeless elegance. Our master artisans create bespoke jewelry that tells your unique story.'
              : 'Μετατρέψτε την όρασή σας σε αιώνια κομψότητα. Οι κύριοι τεχνίτες μας δημιουργούν εξατομικευμένα κοσμήματα που αφηγούνται τη μοναδική σας ιστορία.'
            }
          </motion.p>
          
          <div className="section-divider mt-8"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group cursor-pointer`}
              onClick={() => setSelectedProcess(index)}
            >
              <div className={`bg-gradient-to-br ${step.color} p-1 rounded-2xl transition-all duration-300 group-hover:scale-105`}>
                <div className="bg-black rounded-2xl p-6 h-full">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
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
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center"
                >
                  <Star className="h-3 w-3 text-black" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/20"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold via-yellow-400 to-gold-light rounded-xl flex items-center justify-center shadow-lg shadow-gold/30 border border-gold/50">
                    <feature.icon className="h-6 w-6 text-black font-bold drop-shadow-sm" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
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
          <div className="glass-effect rounded-2xl p-12 border-2 border-gold/30 bg-gradient-to-br from-black/50 to-gray-900/50">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">
              {language === 'en' ? 'Ready to Create Your Masterpiece?' : 'Είστε Έτοιμοι να Δημιουργήσετε το Αριστούργημά σας;'}
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Book a consultation with our design experts and start your journey to a truly unique piece of jewelry.'
                : 'Κλείστε μια συνάντηση με τους ειδικούς σχεδιασμού μας και ξεκινήστε το ταξίδι σας προς ένα πραγματικά μοναδικό κομμάτι κοσμήματος.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-gold via-yellow-400 to-gold-light text-black font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-gold/50 hover:border-gold/80 hover:scale-105"
              >
                <Palette className="h-5 w-5" />
                <span>
                  {language === 'en' ? 'Book Consultation' : 'Κλείστε Συνάντηση'}
                </span>
              </button>
              <button
                onClick={() => navigate('/custom-jewelry-details')}
                className="bg-gradient-to-r from-gold via-yellow-400 to-gold-light text-black font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-gold/50 hover:border-gold/80 hover:scale-105"
              >
                <Clock className="h-5 w-5" />
                <span>
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
