import React, { useState } from 'react';
import { Wrench, Settings, Sparkles, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const { t } = useLanguage();

  const services = [
    {
      icon: Wrench,
      title: t('services.repair.title'),
      description: t('services.repair.desc'),
      image: 'https://images.pexels.com/photos/6291309/pexels-photo-6291309.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Settings,
      title: t('services.correction.title'),
      description: t('services.correction.desc'),
      image: 'https://images.pexels.com/photos/6291307/pexels-photo-6291307.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Sparkles,
      title: t('services.polishing.title'),
      description: t('services.polishing.desc'),
      image: 'https://images.pexels.com/photos/6291290/pexels-photo-6291290.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Το ραντεβού σας έχει καταγραφεί! Θα επικοινωνήσουμε μαζί σας σύντομα.');
    setShowBookingForm(false);
  };

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gold">
            {t('services.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">{t('services.subtitle')}</p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg overflow-hidden hover-glow group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <service.icon className="h-10 w-10 text-gold" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4 text-gold">
                  {service.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {service.description}
                </p>
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
                  className="w-full luxury-input rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full luxury-input rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Τηλέφωνο"
                  required
                  className="w-full luxury-input rounded-lg"
                />
                <select required className="w-full luxury-input rounded-lg">
                  <option value="">Επιλέξτε Υπηρεσία</option>
                  <option value="repair">Επισκευή Κοσμημάτων</option>
                  <option value="correction">Διορθώσεις</option>
                  <option value="polishing">Γυάλισμα</option>
                </select>
                <textarea
                  placeholder="Περιγραφή"
                  rows={3}
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