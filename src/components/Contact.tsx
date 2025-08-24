import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Map from './Map';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Νέο Μήνυμα από την Ιστοσελίδα');
    const body = encodeURIComponent(`
Όνομα: ${formData.name}
Email: ${formData.email}
Τηλέφωνο: ${formData.phone}
Θέμα: ${formData.subject || 'Δεν έχει καθοριστεί'}

Μήνυμα:
${formData.message}
    `);
    
    const mailtoLink = `mailto:stratisfinejewels@gmail.com?subject=${subject}&body=${body}`;
    
    try {
      // Open default email client
      window.open(mailtoLink);
      
      // Reset form without showing message
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      // Fallback: copy email to clipboard and show instructions
      navigator.clipboard.writeText('stratisfinejewels@gmail.com');
      alert(`Το email μας αντιγράφηκε στο clipboard: stratisfinejewels@gmail.com\n\nΠαρακαλώ στείλτε το μήνυμά σας με τα εξής στοιχεία:\n\nΌνομα: ${formData.name}\nEmail: ${formData.email}\nΤηλέφωνο: ${formData.phone}\nΘέμα: ${formData.subject || 'Δεν έχει καθοριστεί'}\n\nΜήνυμα:\n${formData.message}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gold">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">{t('contact.subtitle')}</p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 slide-in-left">
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gold">
                Στοιχεία Επικοινωνίας
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('contact.address')}</h4>
                    <p className="text-white/80">
                      Αρτα, Ηπειρος
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Τηλέφωνο</h4>
                    <p className="text-white/80">
                      +30 2310 123 456<br />
                      +30 694 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:stratisfinejewels@gmail.com"
                      className="text-white/80 hover:text-gold transition-colors duration-200 cursor-pointer"
                    >
                      stratisfinejewels@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('contact.hours')}</h4>
                    <p className="text-white/80">
                      Δευτέρα - Παρασκευή: 9:00 - 20:00<br />
                      Σάββατο: 9:00 - 18:00<br />
                      Κυριακή: Κλειστά
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="glass-effect rounded-lg p-8 h-80">
              <Map className="w-full h-full" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gold">
                Στείλτε μας Μήνυμα
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full luxury-input rounded-lg"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full luxury-input rounded-lg"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full luxury-input rounded-lg"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={language === 'en' ? 'Subject (Optional)' : 'Θέμα (Προαιρετικό)'}
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full luxury-input rounded-lg"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder={t('contact.message')}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full luxury-input rounded-lg resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full luxury-button py-4 rounded-lg inline-flex items-center justify-center space-x-3"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('contact.send')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;