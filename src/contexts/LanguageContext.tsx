import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'el' | 'en';
  setLanguage: (lang: 'el' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.gold': 'Χρυσά Κοσμήματα',
    'nav.silver': 'Ασημένια Κοσμήματα',
    'nav.watches': 'Πολυτελή Ρολόγια',
    'nav.services': 'Υπηρεσίες',
    'nav.certifications': 'Πιστοποιήσεις',
    'nav.contact': 'Επικοινωνία',

    // Hero
    'hero.title': 'Πολυτελή Κοσμήματα & Ρολόγια',
    'hero.subtitle': 'Αποκαλύψτε την Αιώνια Ομορφιά',
    'hero.description': 'Ανακαλύψτε τη συλλογή μας από εξαιρετικά κοσμήματα και πολυτελή ρολόγια, δημιουργημένα με τη μεγαλύτερη επιμέλεια και πάθος για την τελειότητα.',
    'hero.cta': 'Εξερευνήστε τη Συλλογή',

    // Products
    'products.gold.title': 'Χρυσά Κοσμήματα',
    'products.gold.subtitle': 'Χειροποίητα Αριστουργήματα',
    'products.silver.title': 'Ασημένια Κοσμήματα',
    'products.silver.subtitle': 'Κομψότητα σε Κάθε Λεπτομέρεια',
    'products.watches.title': 'Πολυτελή Ρολόγια',
    'products.watches.subtitle': 'Χρόνος σε Τελειότητα',
    'products.viewCollection': 'Δείτε τη Συλλογή',

    // Services
    'services.title': 'Οι Υπηρεσίες μας',
    'services.subtitle': 'Εξειδικευμένη Φροντίδα για τα Κοσμήματά σας',
    'services.repair.title': 'Επισκευή Κοσμημάτων',
    'services.repair.desc': 'Εξειδικευμένες υπηρεσίες επισκευής από έμπειρους τεχνίτες',
    'services.correction.title': 'Διορθώσεις',
    'services.correction.desc': 'Προσαρμογές και βελτιώσεις για την τέλεια εφαρμογή',
    'services.polishing.title': 'Δωρεάν Γυάλισμα',
    'services.polishing.desc': 'Στείλτε τα κοσμήματά σας και θα τα γυαλίσουμε δωρεάν',
    'services.bookAppointment': 'Κλείστε Ραντεβού',

    // Certifications
    'cert.title': 'Πιστοποιήσεις & Εγγυήσεις',
    'cert.subtitle': 'Αυθεντικότητα & Ποιότητα Εγγυημένη',
    'cert.gold.title': 'Πιστοποίηση Χρυσού',
    'cert.gold.desc': 'Όλα τα χρυσά κοσμήματα πιστοποιούνται για καθαρότητα',
    'cert.silver.title': 'Εγγύηση Ασημιού',
    'cert.silver.desc': 'Υψηλής ποιότητας ασήμι με εγγύηση αυθεντικότητας',
    'cert.watch.title': 'Εγγύηση Ρολογιών',
    'cert.watch.desc': 'Επίσημη εγγύηση για όλα τα πολυτελή ρολόγια',

    // Contact
    'contact.title': 'Επικοινωνήστε μαζί μας',
    'contact.subtitle': 'Είμαστε εδώ για να σας εξυπηρετήσουμε',
    'contact.name': 'Όνομα',
    'contact.email': 'Email',
    'contact.phone': 'Τηλέφωνο',
    'contact.message': 'Μήνυμα',
    'contact.send': 'Στείλτε Μήνυμα',
    'contact.address': 'Διεύθυνση',
    'contact.hours': 'Ώρες Λειτουργίας',

    // Footer
    'footer.about': 'Σχετικά με Εμάς',
    'footer.aboutText': 'Ένα οικογενειακό κοσμηματοπωλείο με παράδοση τριών δεκαετιών στη δημιουργία εξαιρετικών κοσμημάτων από τη Stratis Fine Jewels.',
    'footer.quickLinks': 'Γρήγοροι Σύνδεσμοι',
    'footer.followUs': 'Ακολουθήστε μας',
    'footer.rights': 'Όλα τα δικαιώματα κατοχυρωμένα.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.gold': 'Gold Jewelry',
    'nav.silver': 'Silver Jewelry',
    'nav.watches': 'Luxury Watches',
    'nav.services': 'Services',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Luxury Jewelry & Watches',
    'hero.subtitle': 'Discover Timeless Elegance',
    'hero.description': 'Explore our collection of exquisite jewelry and luxury timepieces, crafted with the utmost care and passion for perfection.',
    'hero.cta': 'Explore Collection',

    // Products
    'products.gold.title': 'Gold Jewelry',
    'products.gold.subtitle': 'Handcrafted Masterpieces',
    'products.silver.title': 'Silver Jewelry',
    'products.silver.subtitle': 'Elegance in Every Detail',
    'products.watches.title': 'Luxury Watches',
    'products.watches.subtitle': 'Time Perfected',
    'products.viewCollection': 'View Collection',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Expert Care for Your Precious Jewelry',
    'services.repair.title': 'Jewelry Repairs',
    'services.repair.desc': 'Expert repair services by skilled craftsmen',
    'services.correction.title': 'Corrections',
    'services.correction.desc': 'Adjustments and improvements for perfect fit',
    'services.polishing.title': 'Free Polishing',
    'services.polishing.desc': 'Send us your jewelry and we\'ll polish it for free',
    'services.bookAppointment': 'Book Appointment',

    // Certifications
    'cert.title': 'Certifications & Guarantees',
    'cert.subtitle': 'Authenticity & Quality Assured',
    'cert.gold.title': 'Gold Certification',
    'cert.gold.desc': 'All gold jewelry certified for purity and authenticity',
    'cert.silver.title': 'Silver Guarantee',
    'cert.silver.desc': 'High-quality silver with authenticity guarantee',
    'cert.watch.title': 'Watch Warranty',
    'cert.watch.desc': 'Official warranty for all luxury timepieces',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'re Here to Serve You',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.address': 'Address',
    'contact.hours': 'Opening Hours',

    // Footer
    'footer.about': 'About Us',
    'footer.aboutText': 'A family jewelry store with three decades of tradition in creating exceptional jewelry pieces by Stratis Fine Jewels.',
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.'
  }
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'el' | 'en'>('el');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;