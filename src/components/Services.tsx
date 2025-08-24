import React, { useState } from 'react';
import { Wrench, Settings, Sparkles, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import jewelleryImage from '../assets/jewellery.jpg';
import jewelleryserviceImage from '../assets/jewelleryservice.jpg';
import millingImage from '../assets/milling.jpg';

const Services: React.FC = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: ''
  });
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Wrench,
      title: t('services.repair.title'),
      description: t('services.repair.desc'),
      image: jewelleryImage
    },
    {
      icon: Settings,
      title: t('services.correction.title'),
      description: t('services.correction.desc'),
      image: jewelleryserviceImage
    },
    {
      icon: Sparkles,
      title: t('services.polishing.title'),
      description: t('services.polishing.desc'),
      image: millingImage
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with booking data
    const subject = encodeURIComponent('Νέο Ραντεβού - Επισκευή Κοσμημάτων');
    const body = encodeURIComponent(`
Όνομα: ${bookingData.name}
Email: ${bookingData.email}
Τηλέφωνο: ${bookingData.phone}
Υπηρεσία: ${bookingData.service}
Περιγραφή: ${bookingData.description}

Αυτό είναι ένα αίτημα για ραντεβού από την ιστοσελίδα.
    `);
    
    const mailtoLink = `mailto:stratisfinejewels@gmail.com?subject=${subject}&body=${body}`;
    
    try {
      // Open default email client
      window.open(mailtoLink);
      
      // Reset form and close modal without showing message
      setBookingData({ name: '', email: '', phone: '', service: '', description: '' });
      setShowBookingForm(false);
    } catch (error) {
      // Fallback: copy email to clipboard and show instructions
      navigator.clipboard.writeText('stratisfinejewels@gmail.com');
      alert(`Το email μας αντιγράφηκε στο clipboard: stratisfinejewels@gmail.com\n\nΠαρακαλώ στείλτε το αίτημά σας για ραντεβού με τα εξής στοιχεία:\n\nΌνομα: ${bookingData.name}\nEmail: ${bookingData.email}\nΤηλέφωνο: ${bookingData.phone}\nΥπηρεσία: ${bookingData.service}\nΠεριγραφή: ${bookingData.description}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gold">
            {t('services.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">{t('services.subtitle')}</p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16 [&>*]:!ring-gold [&>*]:!ring-opacity-30">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-effect rounded-lg overflow-hidden hover-glow group ${
                service.title === t('services.polishing.title') 
                  ? 'ring-4 ring-gold ring-opacity-70 shadow-2xl shadow-gold/30 transform hover:scale-105 bg-gradient-to-br from-black via-black to-black border-2 border-gold/40' 
                  : 'ring-2 ring-gold ring-opacity-60 shadow-lg shadow-gold/30 transform hover:scale-102 bg-gradient-to-br from-black via-black to-black border-2 border-gold/40'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <service.icon className="h-10 w-10 text-gold" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-gold">
                    {service.title}
                  </h3>
                  {service.title === t('services.polishing.title') && (
                    <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold text-black px-4 py-2 rounded-full text-sm font-bold shadow-2xl shadow-gold/50 animate-bounce border-2 border-white/20">
                      🎁 ΔΩΡΕΑΝ 🎁
                    </span>
                  )}
                  {service.title === t('services.repair.title') && (
                    <span className="bg-gradient-to-r from-gold to-gold-light text-white px-3 py-1 rounded-full text-xs font-bold shadow-md border border-gold/30">
                      🔧 ΕΠΙΣΚΕΥΗ
                    </span>
                  )}
                  {service.title === t('services.correction.title') && (
                    <span className="bg-gradient-to-r from-gold to-gold-light text-white px-3 py-1 rounded-full text-xs font-bold shadow-md border border-gold/30">
                      ⚙️ ΔΙΟΡΘΩΣΗ
                    </span>
                  )}
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  {service.description}
                </p>
                {service.title === t('services.polishing.title') && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border-2 border-gold/30 rounded-xl shadow-lg shadow-gold/20">
                    <div className="text-center space-y-2">
                      <p className="text-gold text-lg font-bold">
                        ✨ Εξαιρετική Προσφορά ✨
                      </p>
                      <p className="text-gold/90 text-sm">
                        Για τα κοσμήματά σας
                      </p>
                      <div className="flex justify-center space-x-2">
                        <span className="text-gold text-xs">💎</span>
                        <span className="text-gold text-xs">⭐</span>
                        <span className="text-gold text-xs">💎</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Section */}
        <div className="text-center">
          <button
            onClick={() => setShowBookingForm(true)}
            className="luxury-button text-lg px-8 py-4 rounded-none hover-glow inline-flex items-center space-x-3"
          >
            <Calendar className="h-5 w-5" />
            <span>{t('services.bookAppointment')}</span>
          </button>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="glass-effect rounded-lg p-8 w-full max-w-md">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gold text-center">
                Κλείστε Ραντεβού
              </h3>
              <form onSubmit={handleBooking} className="space-y-4">
                <input
                  type="text"
                  placeholder="Όνομα"
                  required
                  name="name"
                  value={bookingData.name}
                  onChange={handleChange}
                  className="w-full luxury-input rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={bookingData.email}
                  onChange={handleChange}
                  className="w-full luxury-input rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Τηλέφωνο"
                  required
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleChange}
                  className="w-full luxury-input rounded-lg"
                />
                <select required name="service" value={bookingData.service} onChange={handleChange} className="w-full luxury-input rounded-lg">
                  <option value="">Επιλέξτε Υπηρεσία</option>
                  <option value="repair">Επισκευή Κοσμημάτων</option>
                  <option value="correction">Διορθώσεις</option>
                  <option value="polishing">Γυάλισμα</option>
                </select>
                <textarea
                  placeholder="Περιγραφή"
                  rows={3}
                  name="description"
                  value={bookingData.description}
                  onChange={handleChange}
                  className="w-full luxury-input rounded-lg resize-none"
                ></textarea>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 luxury-button py-3 rounded-lg"
                  >
                    Κλείστε Ραντεβού
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Ακύρωση
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;