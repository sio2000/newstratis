import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/Logo.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-luxury-gradient border-t border-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Stratis Fine Jewels" className="h-20 w-20 object-contain" />
              <div>
                <h3 className="text-2xl font-serif font-bold text-gold">Stratis Fine Jewels</h3>
                <p className="text-sm text-white/60">Luxury it's in purest form</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              {t('footer.aboutText')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold text-gold mb-6">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a onClick={() => scrollToSection('hero')} className="text-white/80 hover:text-gold transition-colors cursor-pointer">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('gold')} className="text-white/80 hover:text-gold transition-colors cursor-pointer">
                  {t('nav.gold')}
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('silver')} className="text-white/80 hover:text-gold transition-colors cursor-pointer">
                  {t('nav.silver')}
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('watches')} className="text-white/80 hover:text-gold transition-colors cursor-pointer">
                  {t('nav.watches')}
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('services')} className="text-white/80 hover:text-gold transition-colors cursor-pointer">
                  {t('nav.services')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif font-bold text-gold mb-6">
              {t('nav.services')}
            </h4>
            <ul className="space-y-3">
              <li className="text-white/80">Επισκευή Κοσμημάτων</li>
              <li className="text-white/80">Διορθώσεις & Προσαρμογές</li>
              <li className="text-white/80">Δωρεάν Γυάλισμα</li>
              <li className="text-white/80">Πιστοποιήσεις</li>
              <li className="text-white/80">Συμβουλευτικές Υπηρεσίες</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-bold text-gold mb-6">
              Επικοινωνία
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <a 
                  href="tel:+302310123456"
                  className="text-white/80 hover:text-gold transition-colors duration-200 cursor-pointer"
                >
                  +30 2310 123 456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <a 
                  href="mailto:stratisfinejewels@gmail.com"
                  className="text-white/80 hover:text-gold transition-colors duration-200 cursor-pointer"
                >
                  stratisfinejewels@gmail.com
                </a>
              </div>
              <div className="text-white/80">
                <p>Αρτα, Ηπειρος</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-center md:text-left">
              © 2024 Stratis Fine Jewels. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                Πολιτική Απορρήτου
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                Όροι Χρήσης
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </footer>
  );
};

export default Footer;