import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('gold');
  const { t } = useLanguage();

  const products = {
    gold: [
      {
        id: 1,
        name: 'Χρυσό Κολιέ Διαμάντια',
        price: '€2,450',
        image: 'https://images.pexels.com/photos/1031641/pexels-photo-1031641.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        id: 2,
        name: 'Χρυσά Σκουλαρίκια',
        price: '€1,280',
        image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        id: 3,
        name: 'Χρυσό Δαχτυλίδι',
        price: '€890',
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        id: 4,
        name: 'Χρυσό Βραχιόλι',
        price: '€1,650',
        image: 'https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    silver: [
      {
        id: 5,
        name: 'Ασημένιο Κολιέ',
        price: '€420',
        image: 'https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        id: 6,
        name: 'Ασημένια Σκουλαρίκια',
        price: '€230',
        image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        id: 7,
        name: 'Ασημένιο Δαχτυλίδι',
        price: '€180',
        image: 'https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        id: 8,
        name: 'Ασημένιο Βραχιόλι',
        price: '€320',
        image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    watches: [
      {
        id: 9,
        name: 'Πολυτελές Ρολόι Χρυσό',
        price: '€8,500',
        image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        id: 10,
        name: 'Κλασικό Ρολόι',
        price: '€3,200',
        image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        id: 11,
        name: 'Σπορ Ρολόι',
        price: '€1,850',
        image: 'https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        id: 12,
        name: 'Vintage Ρολόι',
        price: '€4,500',
        image: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ]
  };

  const categories = [
    { id: 'gold', title: t('products.gold.title'), subtitle: t('products.gold.subtitle') },
    { id: 'silver', title: t('products.silver.title'), subtitle: t('products.silver.subtitle') },
    { id: 'watches', title: t('products.watches.title'), subtitle: t('products.watches.subtitle') }
  ];

  return (
    <section className="py-20 bg-luxury-gradient">
      {/* Gold Jewelry Section */}
      <div id="gold" className="container mx-auto px-4 mb-32">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gold">
            {t('products.gold.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">{t('products.gold.subtitle')}</p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.gold.map((product, index) => (
            <div
              key={product.id}
              className="product-card rounded-lg p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors">
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-gold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Silver Jewelry Section */}
      <div id="silver" className="container mx-auto px-4 mb-32">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gold">
            {t('products.silver.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">{t('products.silver.subtitle')}</p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.silver.map((product, index) => (
            <div
              key={product.id}
              className="product-card rounded-lg p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors">
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-gold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Watches Section */}
      <div id="watches" className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gold">
            {t('products.watches.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">{t('products.watches.subtitle')}</p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.watches.map((product, index) => (
            <div
              key={product.id}
              className="product-card rounded-lg p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors">
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-gold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;