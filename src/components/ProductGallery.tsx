import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ProductDetail from './ProductDetail';

const ProductGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('gold');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { t } = useLanguage();

  const products = {
    gold: [
      {
        id: 1,
        name: 'Χρυσό Κολιέ Διαμάντια',
        price: '€2,450',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'gold',
        description: 'Εξαιρετικό χρυσό κολιέ διαμάντια, δημιουργημένο με την υψηλότερη ποιότητα και προσοχή στη λεπτομέρεια. Ιδανικό για ειδικές στιγμές.',
        features: [
          '24K καθαρός χρυσός',
          'Φυσικοί διαμάντες',
          'Χειροποίητο',
          'Εγγύηση ποιότητας',
          'Πιστοποίηση αυθεντικότητας'
        ],
        specifications: {
          material: '24K Χρυσός',
          weight: '12.5g',
          dimensions: '45cm μήκος',
          certification: 'ISO 9001'
        }
      },
      {
        id: 2,
        name: 'Χρυσά Σκουλαρίκια',
        price: '€1,280',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'gold',
        description: 'Κλασικά χρυσά σκουλαρίκια με κομψό design. Τέλεια για καθημερινή χρήση και επίσημες εκδηλώσεις.',
        features: [
          '18K χρυσός',
          'Κλασικό design',
          'Άνετη εφαρμογή',
          'Αντιαλλεργικά',
          'Εγγύηση ζωής'
        ],
        specifications: {
          material: '18K Χρυσός',
          weight: '3.2g',
          dimensions: '2.5cm',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 3,
        name: 'Χρυσό Δαχτυλίδι',
        price: '€890',
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'gold',
        description: 'Ελεγαντό χρυσό δαχτυλίδι με λεπτομερές σχέδιο. Συμβολίζει την αιώνια αγάπη και την κομψότητα.',
        features: [
          '22K χρυσός',
          'Λεπτομερές σχέδιο',
          'Προσαρμογή μεγέθους',
          'Εγγύηση ποιότητας',
          'Πιστοποιημένο'
        ],
        specifications: {
          material: '22K Χρυσός',
          weight: '4.8g',
          dimensions: 'Εξαρτάται',
          certification: 'ISO 9001'
        }
      },
      {
        id: 4,
        name: 'Χρυσό Βραχιόλι',
        price: '€1,650',
        image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'gold',
        description: 'Κομψό χρυσό βραχιόλι με ευέλικτο σχέδιο. Ιδανικό για κάθε στυλ και περίσταση.',
        features: [
          '21K χρυσός',
          'Ευέλικτο σχέδιο',
          'Ασφαλής κλείστρα',
          'Εγγύηση ποιότητας',
          'Πιστοποιημένο'
        ],
        specifications: {
          material: '21K Χρυσός',
          weight: '8.3g',
          dimensions: '18cm μήκος',
          certification: 'ΕΛΟΤ'
        }
      }
    ],
    silver: [
      {
        id: 5,
        name: 'Ασημένιο Κολιέ',
        price: '€420',
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'silver',
        description: 'Κομψό ασημένιο κολιέ με λεπτομερές σχέδιο. Ιδανικό για καθημερινή χρήση και επίσημες εκδηλώσεις.',
        features: [
          '925 ασήμι',
          'Λεπτομερές σχέδιο',
          'Χειροποίητο',
          'Αντιαλλεργικό',
          'Εγγύηση ποιότητας'
        ],
        specifications: {
          material: '925 Ασήμι',
          weight: '8.7g',
          dimensions: '42cm μήκος',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 6,
        name: 'Ασημένια Σκουλαρίκια',
        price: '€230',
        image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'silver',
        description: 'Ελεγαντά ασημένια σκουλαρίκια με μοντέρνο design. Τέλεια για κάθε στυλ και περίσταση.',
        features: [
          '925 ασήμι',
          'Μοντέρνο design',
          'Άνετη εφαρμογή',
          'Αντιαλλεργικά',
          'Εγγύηση ποιότητας'
        ],
        specifications: {
          material: '925 Ασήμι',
          weight: '2.1g',
          dimensions: '2.8cm',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 7,
        name: 'Ασημένιο Δαχτυλίδι',
        price: '€180',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'silver',
        description: 'Κλασικό ασημένιο δαχτυλίδι με απλό και κομψό design. Ιδανικό για καθημερινή χρήση.',
        features: [
          '925 ασήμι',
          'Κλασικό design',
          'Προσαρμογή μεγέθους',
          'Αντιαλλεργικό',
          'Εγγύηση ποιότητας'
        ],
        specifications: {
          material: '925 Ασήμι',
          weight: '3.5g',
          dimensions: 'Εξαρτάται',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 8,
        name: 'Ασημένιο Βραχιόλι',
        price: '€320',
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'silver',
        description: 'Ευέλικτο ασημένιο βραχιόλι με κομψό σχέδιο. Τέλειο για κάθε στυλ και περίσταση.',
        features: [
          '925 ασήμι',
          'Ευέλικτο σχέδιο',
          'Ασφαλής κλείστρα',
          'Αντιαλλεργικό',
          'Εγγύηση ποιότητας'
        ],
        specifications: {
          material: '925 Ασήμι',
          weight: '6.2g',
          dimensions: '19cm μήκος',
          certification: 'ΕΛΟΤ'
        }
      }
    ],
    watches: [
      {
        id: 9,
        name: 'Πολυτελές Ρολόι Χρυσό',
        price: '€8,500',
        image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'watches',
        description: 'Εξαιρετικό πολυτελές χρυσό ρολόι με ελβετικό μηχανισμό. Συμβολίζει την κομψότητα και την αξιοπιστία.',
        features: [
          '18K χρυσός case',
          'Ελβετικός μηχανισμός',
          'Σαπφάιρ κρύσταλλο',
          'Εγγύηση 2 ετών',
          'Πιστοποιημένο'
        ],
        specifications: {
          material: '18K Χρυσός',
          weight: '85g',
          dimensions: '42mm',
          certification: 'Swiss Made'
        }
      },
      {
        id: 10,
        name: 'Κλασικό Ρολόι',
        price: '€3,200',
        image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'watches',
        description: 'Κλασικό ρολόι με απλό και κομψό design. Ιδανικό για κάθε περίσταση και στυλ.',
        features: [
          'Ανοξείδωτο χάλυβας',
          'Ιαπωνικός μηχανισμός',
          'Ανθεκτικό κρύσταλλο',
          'Εγγύηση 1 έτους',
          'Αντιαλλεργικό'
        ],
        specifications: {
          material: 'Ανοξείδωτο Χάλυβας',
          weight: '65g',
          dimensions: '38mm',
          certification: 'ISO 9001'
        }
      },
      {
        id: 11,
        name: 'Σπορ Ρολόι',
        price: '€1,850',
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'watches',
        description: 'Αθλητικό ρολόι με ανθεκτικό design και πολλές λειτουργίες. Τέλειο για ενεργούς ανθρώπους.',
        features: [
          'Ανθεκτικό case',
          'Σπορ λειτουργίες',
          'Αντι-νερό',
          'Εγγύηση 1 έτους',
          'Αντιαλλεργικό'
        ],
        specifications: {
          material: 'Ανθεκτικό Πλαστικό',
          weight: '45g',
          dimensions: '44mm',
          certification: 'ISO 9001'
        }
      },
      {
        id: 12,
        name: 'Vintage Ρολόι',
        price: '€4,500',
        image: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'watches',
        description: 'Vintage ρολόι με ιστορία και χαρακτήρα. Μοναδικό κομμάτι για τους λάτρεις των κλασικών ρολογιών.',
        features: [
          'Vintage design',
          'Μηχανικός μηχανισμός',
          'Ιστορική αξία',
          'Εγγύηση αυθεντικότητας',
          'Πιστοποιημένο'
        ],
        specifications: {
          material: 'Χρυσό/Ασήμι',
          weight: '75g',
          dimensions: '36mm',
          certification: 'Vintage Certified'
        }
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
              className="product-card rounded-lg p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                      className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                      className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors"
                    >
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
              className="product-card rounded-lg p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                      className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                      className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors"
                    >
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
              className="product-card rounded-lg p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                      className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                      className="p-3 bg-gold rounded-full text-black hover:bg-gold-light transition-colors"
                    >
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductGallery;