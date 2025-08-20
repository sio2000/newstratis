import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, ShoppingCart, Heart, Star, Shield, Award, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    description: string;
    features: string[];
    specifications: {
      material: string;
      weight: string;
      dimensions: string;
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
      
      window.open(`mailto:info@stratisjewels.gr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    } else {
      window.open('tel:+302310123456');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 overflow-y-auto">
      <div className="min-h-screen">
        {/* Header */}
        <div className="sticky top-0 bg-black/95 backdrop-blur-md border-b border-gold/20 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Επιστροφή</span>
              </button>
              <h1 className="text-xl font-serif font-bold text-gold">{product.name}</h1>
              <div className="w-20"></div>
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
                <h1 className="text-4xl font-serif font-bold text-gold mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-white">{product.price}</span>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-serif font-bold text-gold mb-4">Χαρακτηριστικά</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 text-white/80">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-serif font-bold text-gold mb-4">Προδιαγραφές</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm">Υλικό</p>
                    <p className="text-white font-medium">{product.specifications.material}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm">Βάρος</p>
                    <p className="text-white font-medium">{product.specifications.weight}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm">Διαστάσεις</p>
                    <p className="text-white font-medium">{product.specifications.dimensions}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm">Πιστοποίηση</p>
                    <p className="text-white font-medium">{product.specifications.certification}</p>
                  </div>
                </div>
              </div>

              {/* Order Section */}
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold text-gold mb-4">Παραγγελία</h3>
                
                {/* Quantity */}
                                 <div className="mb-6">
                   <label className="block text-white/80 mb-2">Ποσότητα</label>
                   <div className="flex items-center space-x-4">
                     <button
                       onClick={() => setQuantity(Math.max(1, quantity - 1))}
                       className="w-10 h-10 bg-gold text-white rounded-lg flex items-center justify-center hover:bg-gold-light transition-colors"
                     >
                       -
                     </button>
                     <span className="text-2xl font-bold text-white w-16 text-center">{quantity}</span>
                     <button
                       onClick={() => setQuantity(quantity + 1)}
                       className="w-10 h-10 bg-gold text-white rounded-lg flex items-center justify-center hover:bg-gold-light transition-colors"
                     >
                       +
                     </button>
                   </div>
                 </div>

                {/* Order Method */}
                <div className="mb-6">
                  <label className="block text-white/80 mb-2">Μέθοδος Παραγγελίας</label>
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
                       <span>Τηλέφωνο</span>
                     </button>
                  </div>
                </div>

                {/* Order Button */}
                                 <button
                   onClick={handleOrder}
                   className="w-full bg-gradient-to-r from-gold to-gold-light text-white font-bold py-4 rounded-lg hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center space-x-3"
                 >
                   <ShoppingCart className="h-6 w-6" />
                   <span className="text-lg">
                     {orderMethod === 'email' ? 'Παραγγελία via Email' : 'Κάλεσε Τώρα'}
                   </span>
                 </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-white/60 text-sm">Εγγύηση</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-white/60 text-sm">Ποιότητα</p>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-white/60 text-sm">Αποστολή</p>
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
