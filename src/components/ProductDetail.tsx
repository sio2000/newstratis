import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, ShoppingCart, Heart, Star, Shield, Award, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    nameEn?: string;
    price: string;
    image: string;
    category: string;
    description: string;
    descriptionEn?: string;
    features: string[];
    featuresEn?: string[];
    specifications: {
      material: string;
      materialEn?: string;
      weight: string;
      dimensions: string;
      dimensionsEn?: string;
      certification: string;
    };
  };
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [orderMethod, setOrderMethod] = useState<'email' | 'phone'>('email');
  const { t, language } = useLanguage();

  const handleOrder = () => {
    if (orderMethod === 'email') {
      const subject = `Παραγγελία: ${product.name}`;
      const body = `Γεια σας,\n\nΘα ήθελα να παραγγείλω το εξής προϊόν:\n\nΠροϊόν: ${product.name}\nΤιμή: ${product.price}\nΠοσότητα: ${quantity}\n\nΠαρακαλώ επικοινωνήστε μαζί μου για περαιτέρω λεπτομέρειες.\n\nΕυχαριστώ!`;
      
      window.open(`mailto:stratisfinejewels@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    } else {
      window.open('tel:+302310123456');
    }
  };

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 overflow-y-auto">
      <div className="min-h-screen">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gold/20 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Back Button - Hidden on mobile, visible on md and up */}
              <button
                onClick={onClose}
                className="hidden md:flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>{language === 'en' ? 'Back' : 'Επιστροφή'}</span>
              </button>
              
              {/* Title - Centered on mobile, left-aligned on md and up */}
              <h1 className="text-xl font-serif font-bold text-gold md:flex-1 md:text-center">
                {language === 'en' ? product.nameEn || product.name : product.name}
              </h1>
              
              {/* Spacer for md and up to maintain layout */}
              <div className="hidden md:block w-32"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-3 bg-gold/20 backdrop-blur-md rounded-full text-gold hover:bg-gold/30 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all ${
                    selectedImage === product.image ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedImage(product.image)}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Title & Price */}
              <div>
                <h1 className="text-4xl font-serif font-bold text-gold mb-4">
                  {language === 'en' ? product.nameEn || product.name : product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-gray-800">{product.price}</span>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {language === 'en' ? product.descriptionEn || product.description : product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-gold mb-4">
                  {language === 'en' ? 'Features' : 'Χαρακτηριστικά'}
                </h3>
                <ul className="space-y-3">
                  {(language === 'en' ? product.featuresEn || product.features : product.features).map((feature, index) => (
                                      <li key={index} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-gold mb-4">
                  {language === 'en' ? 'Specifications' : 'Προδιαγραφές'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                                     <div className="bg-gray-100 p-4 rounded-lg">
                     <span className="text-gold font-medium">
                       {language === 'en' ? 'Material' : 'Υλικό'}
                     </span>
                     <p className="text-gray-800 mt-1">
                       {language === 'en' ? product.specifications?.materialEn || product.specifications?.material : product.specifications?.material}
                     </p>
                   </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="text-gold font-medium">
                      {language === 'en' ? 'Weight' : 'Βάρος'}
                    </span>
                    <p className="text-gray-800 mt-1">{product.specifications?.weight}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="text-gold font-medium">
                      {language === 'en' ? 'Dimensions' : 'Διαστάσεις'}
                    </span>
                    <p className="text-gray-800 mt-1">
                      {language === 'en' ? product.specifications?.dimensionsEn || product.specifications?.dimensions : product.specifications?.dimensions}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="text-gold font-medium">
                      {language === 'en' ? 'Certification' : 'Πιστοποίηση'}
                    </span>
                    <p className="text-gray-800 mt-1">{product.specifications?.certification}</p>
                  </div>
                </div>
              </div>

              {/* Order Section */}
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold text-gold mb-4">
                  {language === 'en' ? 'Order' : 'Παραγγελία'}
                </h3>
                
                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-gray-800 font-medium mb-2">
                    {language === 'en' ? 'Quantity' : 'Ποσότητα'}
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-gold text-black rounded-lg flex items-center justify-center hover:bg-gold-light transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-gray-800 w-16 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-gold text-black rounded-lg flex items-center justify-center hover:bg-gold-light transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Order Method */}
                <div className="mb-6">
                  <label className="block text-gray-800 font-medium mb-2">
                    {language === 'en' ? 'Order Method' : 'Μέθοδος Παραγγελίας'}
                  </label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setOrderMethod('email')}
                      className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg border-2 transition-all ${
                        orderMethod === 'email'
                          ? 'border-gold bg-gold text-white'
                          : 'border-gold/30 text-gold hover:border-gold/50'
                      }`}
                    >
                      <Mail className="h-5 w-5" />
                      <span>Email</span>
                    </button>
                    <button
                      onClick={() => setOrderMethod('phone')}
                      className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg border-2 transition-all ${
                        orderMethod === 'phone'
                          ? 'border-gold bg-gold text-white'
                          : 'border-gold/30 text-gold hover:border-gold/50'
                      }`}
                    >
                      <Phone className="h-5 w-5" />
                      <span>{language === 'en' ? 'Phone' : 'Τηλέφωνο'}</span>
                    </button>
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={handleOrder}
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-black font-bold py-4 rounded-lg hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span className="text-lg">
                    {orderMethod === 'email' 
                      ? (language === 'en' ? 'Order via Email' : 'Παραγγελία via Email')
                      : (language === 'en' ? 'Call Now' : 'Κάλεσε Τώρα')
                    }
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">
                    {language === 'en' ? 'Warranty' : 'Εγγύηση'}
                  </p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">
                    {language === 'en' ? 'Quality' : 'Ποιότητα'}
                  </p>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">
                    {language === 'en' ? 'Shipping' : 'Αποστολή'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
