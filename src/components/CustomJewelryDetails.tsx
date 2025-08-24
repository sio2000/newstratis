import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Diamond, 
  Sparkles, 
  Crown, 
  Palette, 
  Award, 
  Shield, 
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  Gem,
  Hammer
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import customJewelsImage from '../assets/custom_jewels.png';

const CustomJewelryDetails: React.FC = () => {
  const { language } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processDetails = [
    {
      icon: Palette,
      title: language === 'en' ? 'Design Consultation' : 'Συμβουλευτική Σχεδιασμού',
      description: language === 'en' ? 'Personalized meeting to understand your vision' : 'Εξατομικευμένη συνάντηση για να κατανοήσουμε το όραμά σας',
      details: language === 'en' 
        ? 'We begin with a comprehensive consultation where we discuss your ideas, preferences, and requirements. Our design experts will help you refine your concept and create detailed sketches.'
        : 'Ξεκινάμε με μια ολοκληρωμένη συνάντηση όπου συζητάμε τις ιδέες, τις προτιμήσεις και τις απαιτήσεις σας. Οι ειδικοί σχεδιασμού μας θα σας βοηθήσουν να βελτιώσετε την έννοιά σας και να δημιουργήσουν λεπτομερείς σκίτσα.',
      color: 'from-amber-400 via-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Diamond,
      title: language === 'en' ? 'Material Selection' : 'Επιλογή Υλικών',
      description: language === 'en' ? 'Choose from the finest precious materials' : 'Επιλέξτε από τα καλύτερα πολύτιμα υλικά',
      details: language === 'en'
        ? 'Select from our curated collection of the world\'s finest precious metals and certified gemstones. We offer 18K gold, platinum, palladium, and ethically sourced diamonds and colored stones.'
        : 'Επιλέξτε από τη συλλογή μας με τα καλύτερα πολύτιμα μέταλλα και πιστοποιημένους πολύτιμους λίθους του κόσμου. Προσφέρουμε 18K χρυσό, λευκόχρυσο, παλλάδιο και ηθικά προερχόμενα διαμάντια και έγχρωμους λίθους.',
      color: 'from-emerald-400 via-teal-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Sparkles,
      title: language === 'en' ? 'Artisan Crafting' : 'Τεχνική Δημιουργία',
      description: language === 'en' ? 'Handcrafted with precision and passion' : 'Χειροποίητα με ακρίβεια και πάθος',
      details: language === 'en'
        ? 'Our master artisans bring your design to life using traditional techniques combined with modern precision. Each piece is carefully crafted by hand, ensuring the highest quality and attention to detail.'
        : 'Οι κύριοι τεχνίτες μας δίνουν ζωή στο σχέδιό σας χρησιμοποιώντας παραδοσιακές τεχνικές σε συνδυασμό με σύγχρονη ακρίβεια. Κάθε κομμάτι κατασκευάζεται προσεκτικά με το χέρι, διασφαλίζοντας την υψηλότερη ποιότητα και προσοχή στη λεπτομέρεια.',
      color: 'from-rose-400 via-pink-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Crown,
      title: language === 'en' ? 'Quality Assurance' : 'Εξασφάλιση Ποιότητας',
      description: language === 'en' ? 'Rigorous testing and certification' : 'Αυστηρός έλεγχος και πιστοποίηση',
      details: language === 'en'
        ? 'Every custom piece undergoes rigorous quality control, including gemological testing, metal purity verification, and structural integrity checks. We provide detailed certification for all materials used.'
        : 'Κάθε εξατομικευμένο κομμάτι περνά από αυστηρό έλεγχο ποιότητας, συμπεριλαμβανομένων γεμολογικών ελέγχων, επαλήθευσης καθαρότητας μετάλλων και ελέγχων δομικής ακεραιότητας. Παρέχουμε λεπτομερή πιστοποίηση για όλα τα υλικά που χρησιμοποιούνται.',
      color: 'from-violet-400 via-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const materials = [
    {
      icon: Diamond,
      title: language === 'en' ? 'Precious Metals' : 'Πολύτιμα Μέταλλα',
      items: language === 'en' 
        ? ['18K Yellow Gold', '18K White Gold', 'Platinum', 'Palladium', 'Sterling Silver']
        : ['18K Κίτρινος Χρυσός', '18K Λευκός Χρυσός', 'Λευκόχρυσος', 'Παλλάδιο', 'Αργυρός 925']
    },
    {
      icon: Gem,
      title: language === 'en' ? 'Gemstones' : 'Πολύτιμοι Λίθοι',
      items: language === 'en'
        ? ['Diamonds', 'Sapphires', 'Rubies', 'Emeralds', 'Pearls', 'Custom Cuts']
        : ['Διαμάντια', 'Ζαφείρια', 'Ρουμπίνια', 'Σμαράγδια', 'Μαργαριτάρια', 'Εξατομικευμένες Κοπές']
    },
    {
      icon: Hammer,
      title: language === 'en' ? 'Techniques' : 'Τεχνικές',
      items: language === 'en'
        ? ['Hand Engraving', 'Stone Setting', 'Filigree Work', 'Granulation', 'Repoussé']
        : ['Χειροποίητη Γλυπτική', 'Τοποθέτηση Λίθων', 'Φιλιγκράν', 'Κοκκίωση', 'Ρεπουσέ']
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: language === 'en' ? 'Lifetime Warranty' : 'Εγγύηση Ζωής',
      description: language === 'en' ? 'Every piece is guaranteed for life' : 'Κάθε κομμάτι είναι εγγυημένο για τη ζωή'
    },
    {
      icon: CheckCircle,
      title: language === 'en' ? 'Quality Certification' : 'Πιστοποίηση Ποιότητας',
      description: language === 'en' ? 'Certified materials and craftsmanship' : 'Πιστοποιημένα υλικά και τεχνική'
    },
    {
      icon: Award,
      title: language === 'en' ? 'Expert Craftsmanship' : 'Εξειδικευμένη Τεχνική',
      description: language === 'en' ? 'Master artisans with decades of experience' : 'Κύριοι τεχνίτες με δεκαετίες εμπειρίας'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 mt-8"
        >
          {/* Background Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
            <img
              src={customJewelsImage}
              alt="Luxury jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Floating Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mb-6"
                >
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-2xl"
                >
                  {language === 'en' ? 'Your Vision, Our Mastery' : 'Το Όραμα σας, Η Τεχνική Μας'}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
                >
                  {language === 'en' 
                    ? 'Transform your dreams into timeless treasures. Our master artisans combine traditional techniques with modern innovation to create jewelry that tells your unique story.'
                    : 'Μετατρέψτε τα όνειρά σας σε αιώνιους θησαυρούς. Οι κύριοι τεχνίτες μας συνδυάζουν παραδοσιακές τεχνικές με σύγχρονη καινοτομία για να δημιουργήσουν κοσμήματα που αφηγούνται τη μοναδική σας ιστορία.'
                  }
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Details */}
        <div className="mb-32 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-gold/20 to-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gold/10 to-yellow-400/10 rounded-full blur-3xl"></div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-6 mb-8"
            >
              <div className="w-28 h-28 bg-gradient-to-br from-gold via-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-gold/40 border-4 border-white/20 relative overflow-hidden">
                <Crown className="h-14 w-14 text-black drop-shadow-lg" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-60"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-transparent opacity-20 animate-pulse"></div>
              </div>
              <div className="text-left">
                <span className="text-gold text-4xl font-medium uppercase tracking-widest bg-black/60 backdrop-blur-md px-10 py-6 rounded-3xl border-2 border-gold/40 shadow-2xl">
                  {language === 'en' ? 'Our Process' : 'Η Διαδικασία Μας'}
                </span>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent mt-3"></div>
              </div>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-8xl font-serif font-bold text-white mb-10 leading-tight"
            >
              
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light"
            >
              {language === 'en' 
                ? 'Every masterpiece begins with a vision and evolves through our meticulous process of creation, where tradition meets innovation.'
                : 'Κάθε αριστούργημα ξεκινά με μια όραση και εξελίσσεται μέσα από την προσεκτική μας διαδικασία δημιουργίας, όπου η παράδοση συναντά την καινοτομία.'
              }
            </motion.p>
          </div>
          
          {/* Luxury Process Grid */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {processDetails.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="group relative"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 z-20">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold via-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-gold/40 border-4 border-white/20 relative overflow-hidden">
                      <span className="text-black font-bold text-2xl drop-shadow-lg">{index + 1}</span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-60"></div>
                    </div>
                  </div>

                  {/* Main Content Card */}
                  <div className="relative">
                    {/* Luxury Card Container */}
                    <div className="relative p-1 rounded-3xl bg-gradient-to-br from-gold/30 via-yellow-400/20 to-amber-500/10 shadow-2xl shadow-gold/30 border border-gold/40 overflow-hidden">
                      <div className="bg-black/90 backdrop-blur-md rounded-3xl p-12 h-full relative">
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 opacity-5">
                          <div className={`absolute top-8 right-8 w-48 h-48 bg-gradient-to-br ${step.color} rounded-full blur-3xl animate-pulse`}></div>
                          <div className={`absolute bottom-8 left-8 w-40 h-40 bg-gradient-to-br ${step.color} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
                        </div>
                        
                        {/* Content Header */}
                        <div className="relative z-10 mb-8">
                          <div className="flex items-center space-x-6 mb-6">
                            <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20 relative overflow-hidden`}>
                              <step.icon className="h-10 w-10 text-white drop-shadow-lg" />
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-60"></div>
                            </div>
                            <div>
                              <h4 className="text-4xl font-serif font-bold text-gold mb-3 group-hover:text-yellow-400 transition-colors duration-500">
                                {step.title}
                              </h4>
                              <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Body */}
                        <div className="relative z-10 space-y-6 pr-12">
                          <p className="text-white/95 text-xl font-medium leading-relaxed">
                            {step.description}
                          </p>
                          
                          <p className="text-white/80 leading-relaxed text-lg">
                            {step.details}
                          </p>
                        </div>
                        
                        {/* Hover Effects */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gold/60 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                        
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                      </div>
                    </div>

                    {/* Luxury Image Overlay - Repositioned */}
                    <div className={`absolute ${index === 3 ? '-bottom-8 -right-8' : '-bottom-6 -right-6'} z-10`}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        className="relative group"
                      >
                        <div className={`${index === 3 ? 'w-32 h-32' : 'w-36 h-36'} rounded-2xl overflow-hidden shadow-2xl shadow-gold/30 border-2 border-gold/40 group-hover:border-gold/60 transition-all duration-500 transform group-hover:rotate-2 group-hover:scale-105`}>
                          <img
                            src={step.image}
                            alt={`Luxury jewelry ${step.title.toLowerCase()}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        </div>
                        
                        {/* Floating Icon Overlay */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                          <div className="w-5 h-5 bg-white rounded-full"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Bottom Luxury Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-center mt-32"
          >
            <div className="inline-flex items-center space-x-8">
              <div className="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
              <div className="w-8 h-8 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-12 h-12 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-8 h-8 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
              <div className="w-4 h-4 bg-gold rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            </div>
            
            {/* Luxury Divider */}
            <div className="mt-12 flex items-center justify-center space-x-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <div className="w-6 h-6 bg-gradient-to-br from-gold to-yellow-400 rounded-full shadow-lg"></div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Materials & Techniques */}
        <div className="mb-24">
          <h3 className="text-3xl font-serif font-bold text-gold text-center mb-16">
            {language === 'en' ? 'Materials & Techniques' : 'Υλικά & Τεχνικές'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {materials.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 border border-gold/20 text-center hover:border-gold/40 transition-all duration-300 hover:scale-105 bg-black/60 backdrop-blur-md"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/20">
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-gold mb-6">
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-white/90 text-base font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-24">
          <h3 className="text-3xl font-serif font-bold text-gold text-center mb-16">
            {language === 'en' ? 'Our Guarantees' : 'Οι Εγγυήσεις Μας'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-10 border border-gold/20 text-center hover:border-gold/40 transition-all duration-300 hover:scale-105 bg-black/60 backdrop-blur-md"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-gold/20">
                  <guarantee.icon className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-gold mb-6">
                  {guarantee.title}
                </h4>
                <p className="text-white/90 leading-relaxed text-lg font-medium">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              {language === 'en' ? 'Ready to Start Your Journey?' : 'Έτοιμοι να Ξεκινήσετε το Ταξίδι Σας;'}
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Contact us today to schedule your personalized consultation and begin creating your dream jewelry piece.'
                : 'Επικοινωνήστε μαζί μας σήμερα για να κλείσετε την εξατομικευμένη συνάντησή σας και να ξεκινήσετε τη δημιουργία του κοσμήματος των ονείρων σας.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center space-x-3 text-gold hover:text-gold-light transition-colors cursor-pointer bg-black/30 hover:bg-black/50 px-6 py-4 rounded-xl border border-gold/30 hover:border-gold/50 hover:scale-105"
              >
                <Calendar className="h-6 w-6" />
                <span className="font-medium">
                  {language === 'en' ? 'Book Consultation' : 'Κλείστε Συνάντηση'}
                </span>
              </button>
              <button
                onClick={() => window.open('tel:+302681022345')}
                className="flex items-center justify-center space-x-3 text-gold hover:text-gold-light transition-colors cursor-pointer bg-black/30 hover:bg-black/50 px-6 py-4 rounded-xl border border-gold/30 hover:border-gold/50 hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span className="font-medium">
                  {language === 'en' ? 'Call Us' : 'Καλέστε Μας'}
                </span>
              </button>
              <button
                onClick={() => window.open('mailto:stratisfinejewels@gmail.com')}
                className="flex items-center justify-center space-x-3 text-gold hover:text-gold-light transition-colors cursor-pointer bg-black/30 hover:bg-black/50 px-6 py-4 rounded-xl border border-gold/30 hover:border-gold/50 hover:scale-105"
              >
                <Mail className="h-6 w-6" />
                <span className="font-medium">
                  {language === 'en' ? 'Email Us' : 'Στείλτε Email'}
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomJewelryDetails;
