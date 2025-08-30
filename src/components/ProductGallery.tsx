import React, { useState, useEffect } from 'react';
import { Eye, Heart, ShoppingBag, Filter, X, Search, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useFilters } from '../contexts/FilterContext';
import ProductDetail from './ProductDetail';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import watch1 from '../assets/watch (1).jpg';
import watch2 from '../assets/watch (2).jpg';
import watch3 from '../assets/watch (3).jpg';

const ProductGallery: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const { t, language } = useLanguage();
  const { filters, applyFilters, setCategory, setSubcategory } = useFilters();

  const PRODUCTS_PER_PAGE = 12;

  // Close sorting dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.sorting-dropdown-container')) {
        setShowSorting(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sync category with filters
  useEffect(() => {
    if (filters.category && filters.category !== activeCategory) {
      setActiveCategory(filters.category);
    }
  }, [filters.category, activeCategory]);

  // Sync subcategory filters with category
  useEffect(() => {
    if (filters.subcategory) {
      // When subcategory is selected, also set the corresponding category
      if (filters.category) {
        setActiveCategory(filters.category);
      }
    }
  }, [filters.subcategory, filters.category]);

  // Sync category changes with filters
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    // Update filters when category changes
    if (categoryId === 'all') {
      setCategory(null);
      setSubcategory(null);
    } else {
      setCategory(categoryId);
    }
  };

  // Clear search when filters change
  useEffect(() => {
    if (filters.category || filters.subcategory) {
      setSearchQuery('');
    }
  }, [filters.category, filters.subcategory]);

  const products = {
    gold: [
      {
        id: 1,
        name: 'Χρυσό Κολιέ Διαμάντια',
        nameEn: 'Gold Diamond Necklace',
        price: '€2,450',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'gold',
        subcategory: 'necklaces',
        description: 'Εξαιρετικό χρυσό κολιέ διαμάντια, δημιουργημένο με την υψηλότερη ποιότητα και προσοχή στη λεπτομέρεια. Ιδανικό για ειδικές στιγμές.',
        descriptionEn: 'Exceptional gold diamond necklace, crafted with the highest quality and attention to detail. Perfect for special occasions.',
        features: [
          '24K καθαρός χρυσός',
          'Φυσικοί διαμάντες',
          'Χειροποίητο',
          'Εγγύηση ποιότητας',
          'Πιστοποιηση αυθεντικότητας'
        ],
        featuresEn: [
          '24K Pure Gold',
          'Natural Diamonds',
          'Handcrafted',
          'Quality Guarantee',
          'Authenticity Certificate'
        ],
        specifications: {
          material: '24K Χρυσός',
          materialEn: '24K Gold',
          weight: '12.5g',
          dimensions: '45cm μήκος',
          dimensionsEn: '45cm length',
          certification: 'ISO 9001'
        }
      },
      {
        id: 2,
        name: 'Χρυσά Σκουλαρίκια',
        nameEn: 'Gold Earrings',
        price: '€1,280',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'gold',
        subcategory: 'earrings',
        description: 'Κλασικά χρυσά σκουλαρίκια με κομψό design. Τέλεια για καθημερινή χρήση και επίσημες εκδηλώσεις.',
        descriptionEn: 'Classic gold earrings with elegant design. Perfect for daily wear and formal events.',
        features: [
          '18K χρυσός',
          'Κλασικό design',
          'Άνετη εφαρμογή',
          'Αντιαλλεργικά',
          'Εγγύηση ζωής'
        ],
        featuresEn: [
          '18K Gold',
          'Classic Design',
          'Comfortable Fit',
          'Hypoallergenic',
          'Lifetime Warranty'
        ],
        specifications: {
          material: '18K Χρυσός',
          materialEn: '18K Gold',
          weight: '3.2g',
          dimensions: '2.5cm',
          dimensionsEn: '2.5cm',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 3,
        name: 'Χρυσό Δαχτυλίδι',
        nameEn: 'Gold Ring',
        price: '€890',
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'gold',
        subcategory: 'rings',
        description: 'Ελεγαντό χρυσό δαχτυλίδι με λεπτομερές σχέδιο. Συμβολίζει την αιώνια αγάπη και την κομψότητα.',
        descriptionEn: 'Elegant gold ring with detailed design. Symbolizes eternal love and elegance.',
        features: [
          '22K χρυσός',
          'Λεπτομερές σχέδιο',
          'Προσαρμογή μεγέθους',
          'Εγγύηση ποιότητας',
          'Πιστοποιημένο'
        ],
        featuresEn: [
          '22K Gold',
          'Detailed Design',
          'Size Adjustment',
          'Quality Guarantee',
          'Certified'
        ],
        specifications: {
          material: '22K Χρυσός',
          materialEn: '22K Gold',
          weight: '4.8g',
          dimensions: 'Εξαρτάται',
          dimensionsEn: 'Adjustable',
          certification: 'ISO 9001'
        }
      },
      {
        id: 4,
        name: 'Χρυσό Βραχιόλι',
        nameEn: 'Gold Bracelet',
        price: '€1,650',
        image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'gold',
        subcategory: 'bracelets',
        description: 'Κομψό χρυσό βραχιόλι με ευέλικτο σχέδιο. Ιδανικό για κάθε στυλ και περίσταση.',
        descriptionEn: 'Elegant gold bracelet with flexible design. Perfect for every style and occasion.',
        features: [
          '21K χρυσός',
          'Ευέλικτο σχέδιο',
          'Ασφαλής κλείστρα',
          'Εγγύηση ποιότητας',
          'Πιστοποιημένο'
        ],
        featuresEn: [
          '21K Gold',
          'Flexible Design',
          'Secure Clasp',
          'Quality Guarantee',
          'Certified'
        ],
        specifications: {
          material: '21K Χρυσός',
          materialEn: '21K Gold',
          weight: '8.3g',
          dimensions: '18cm μήκος',
          dimensionsEn: '18cm length',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 5,
        name: 'Χρυσό Δαχτυλίδι Διαμάντια',
        nameEn: 'Gold Diamond Ring',
        price: '€3,200',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'gold',
        subcategory: 'rings',
        description: 'Εξαιρετικό χρυσό δαχτυλίδι με φυσικούς διαμάντες. Συμβολίζει την αιώνια αγάπη και την κομψότητα.',
        descriptionEn: 'Exceptional gold ring with natural diamonds. Symbolizes eternal love and elegance.',
        features: [
          '24K χρυσός',
          'Φυσικοί διαμάντες',
          'Λεπτομερές σχέδιο',
          'Προσαρμογή μεγέθους',
          'Εγγύηση ποιότητας'
        ],
        featuresEn: [
          '24K Gold',
          'Natural Diamonds',
          'Detailed Design',
          'Size Adjustment',
          'Quality Guarantee'
        ],
        specifications: {
          material: '24K Χρυσός',
          materialEn: '24K Gold',
          weight: '6.8g',
          dimensions: 'Εξαρτάται',
          dimensionsEn: 'Adjustable',
          certification: 'ISO 9001'
        }
      }
    ],
    silver: [
      {
        id: 6,
        name: 'Ασημένιο Κολιέ',
        nameEn: 'Silver Necklace',
        price: '€420',
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'silver',
        subcategory: 'necklaces',
        description: 'Κομψό ασημένιο κολιέ με λεπτομερές σχέδιο. Ιδανικό για καθημερινή χρήση και επίσημες εκδηλώσεις.',
        descriptionEn: 'Elegant silver necklace with detailed design. Perfect for daily wear and formal events.',
        features: [
          '925 ασήμι',
          'Λεπτομερές σχέδιο',
          'Χειροποίητο',
          'Αντιαλλεργικό',
          'Εγγύηση ποιότητας'
        ],
        featuresEn: [
          '925 Silver',
          'Detailed Design',
          'Handmade',
          'Hypoallergenic',
          'Quality Guarantee'
        ],
        specifications: {
          material: '925 Ασήμι',
          materialEn: '925 Silver',
          weight: '8.7g',
          dimensions: '42cm μήκος',
          dimensionsEn: '42cm length',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 7,
        name: 'Ασημένια Σκουλαρίκια',
        nameEn: 'Silver Earrings',
        price: '€230',
        image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'silver',
        subcategory: 'earrings',
        description: 'Ελεγαντά ασημένια σκουλαρίκια με μοντέρνο design. Τέλεια για κάθε στυλ και περίσταση.',
        descriptionEn: 'Modern silver earrings with elegant design. Perfect for every style and occasion.',
        features: [
          '925 ασήμι',
          'Μοντέρνο design',
          'Άνετη εφαρμογή',
          'Αντιαλλεργικά',
          'Εγγύηση ποιότητας'
        ],
        featuresEn: [
          '925 Silver',
          'Modern Design',
          'Comfortable Fit',
          'Hypoallergenic',
          'Quality Guarantee'
        ],
        specifications: {
          material: '925 Ασήμι',
          materialEn: '925 Silver',
          weight: '2.1g',
          dimensions: '2.8cm',
          dimensionsEn: '2.8cm',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 8,
        name: 'Ασημένιο Δαχτυλίδι',
        nameEn: 'Silver Ring',
        price: '€180',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'silver',
        subcategory: 'rings',
        description: 'Κλασικό ασημένιο δαχτυλίδι με απλό και κομψό design. Ιδανικό για καθημερινή χρήση.',
        descriptionEn: 'Classic silver ring with simple and elegant design. Perfect for daily wear.',
        features: [
          '925 ασήμι',
          'Κλασικό design',
          'Προσαρμογή μεγέθους',
          'Αντιαλλεργικό',
          'Εγγύηση ποιότητας'
        ],
        featuresEn: [
          '925 Silver',
          'Classic Design',
          'Size Adjustment',
          'Hypoallergenic',
          'Quality Guarantee'
        ],
        specifications: {
          material: '925 Ασήμι',
          materialEn: '925 Silver',
          weight: '3.5g',
          dimensions: 'Εξαρτάται',
          dimensionsEn: 'Adjustable',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 9,
        name: 'Ασημένιο Βραχιόλι',
        nameEn: 'Silver Bracelet',
        price: '€320',
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'silver',
        subcategory: 'bracelets',
        description: 'Ευέλικτο ασημένιο βραχιόλι με κομψό σχέδιο. Τέλειο για κάθε στυλ και περίσταση.',
        descriptionEn: 'Elegant silver bracelet with elegant design. Perfect for every style and occasion.',
        features: [
          '925 ασήμι',
          'Ευέλικτο σχέδιο',
          'Ασφαλής κλείστρα',
          'Αντιαλλεργικό',
          'Εγγύηση ποιότητας'
        ],
        featuresEn: [
          '925 Silver',
          'Flexible Design',
          'Secure Clasp',
          'Hypoallergenic',
          'Quality Guarantee'
        ],
        specifications: {
          material: '925 Ασήμι',
          materialEn: '925 Silver',
          weight: '6.2g',
          dimensions: '19cm μήκος',
          dimensionsEn: '19cm length',
          certification: 'ΕΛΟΤ'
        }
      },
      {
        id: 15,
        name: 'Ασημένιο Κολιέ Μαργαριταριών',
        nameEn: 'Silver Pearl Necklace',
        price: '€280',
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'silver',
        subcategory: 'necklaces',
        description: 'Κλασικό ασημένιο κολιέ με φυσικά μαργαριτάρια. Τέλειο για επίσημες εκδηλώσεις.',
        descriptionEn: 'Classic silver necklace with natural pearls. Perfect for formal events.',
        features: [
          '925 ασήμι',
          'Φυσικά μαργαριτάρια',
          'Κλασικό design',
          'Αντιαλλεργικό',
          'Εγγύηση ποιότητας'
        ],
        featuresEn: [
          '925 Silver',
          'Natural Pearls',
          'Classic Design',
          'Hypoallergenic',
          'Quality Guarantee'
        ],
        specifications: {
          material: '925 Ασήμι',
          materialEn: '925 Silver',
          weight: '5.8g',
          dimensions: '40cm μήκος',
          dimensionsEn: '40cm length',
          certification: 'ΕΛΟΤ'
        }
      }
    ],
    watches: [
      {
        id: 10,
        name: 'Πολυτελές Ρολόι Χρυσό',
        nameEn: 'Luxury Gold Watch',
        price: '€8,500',
        image: watch1,
        category: 'watches',
        subcategory: 'watches',
        description: 'Εξαιρετικό πολυτελές χρυσό ρολόι με ελβετικό μηχανισμό. Συμβολίζει την κομψότητα και την αξιοπιστία.',
        descriptionEn: 'Exceptional luxury gold watch with Swiss movement. Symbolizes elegance and reliability.',
        features: [
          '18K χρυσός case',
          'Ελβετικός μηχανισμός',
          'Σαπφάιρ κρύσταλλο',
          'Εγγύηση 2 ετών',
          'Πιστοποιημένο'
        ],
        featuresEn: [
          '18K Gold Case',
          'Swiss Movement',
          'Sapphire Crystal',
          '2-Year Warranty',
          'Certified'
        ],
        specifications: {
          material: '18K Χρυσός',
          materialEn: '18K Gold',
          weight: '45g',
          dimensions: '42mm',
          dimensionsEn: '42mm',
          certification: 'ISO 9001'
        }
      },
      {
        id: 11,
        name: 'Πολυτελές Ρολόι Ασημένιο',
        nameEn: 'Luxury Silver Watch',
        price: '€6,800',
        image: watch2,
        category: 'watches',
        subcategory: 'watches',
        description: 'Κομψό πολυτελές ασημένιο ρολόι με ελβετικό μηχανισμό. Ιδανικό για τους λάτρεις της κομψότητας.',
        descriptionEn: 'Elegant luxury silver watch with Swiss movement. Perfect for watch enthusiasts.',
        features: [
          '925 ασήμι case',
          'Ελβετικός μηχανισμός',
          'Σαπφάιρ κρύσταλλο',
          'Εγγύηση 2 ετών',
          'Πιστοποιημένο'
        ],
        featuresEn: [
          '925 Silver Case',
          'Swiss Movement',
          'Sapphire Crystal',
          '2-Year Warranty',
          'Certified'
        ],
        specifications: {
          material: '925 Ασήμι',
          materialEn: '925 Silver',
          weight: '38g',
          dimensions: '40mm',
          dimensionsEn: '40mm',
          certification: 'ISO 9001'
        }
      },
      {
        id: 12,
        name: 'Πολυτελές Ρολόι Χειροποίητο',
        nameEn: 'Handmade Luxury Watch',
        price: '€12,500',
        image: watch3,
        category: 'watches',
        subcategory: 'watches',
        description: 'Εξαιρετικό χειροποίητο πολυτελές ρολόι με μοναδικό σχέδιο. Κάθε κομμάτι είναι μοναδικό και δημιουργημένο με την υψηλότερη προσοχή.',
        descriptionEn: 'Exceptional handmade luxury watch with unique design. Each piece is unique and crafted with the highest attention to detail.',
        features: [
          '18K λευκός χρυσός case',
          'Χειροποίητος ελβετικός μηχανισμός',
          'Σαπφάιρ κρύσταλλο',
          'Εγγύηση 3 ετών',
          'Πιστοποιημένο'
        ],
        featuresEn: [
          '18K White Gold Case',
          'Handmade Swiss Movement',
          'Sapphire Crystal',
          '3-Year Warranty',
          'Certified'
        ],
        specifications: {
          material: '18K Λευκός Χρυσός',
          materialEn: '18K White Gold',
          weight: '52g',
          dimensions: '44mm',
          dimensionsEn: '44mm',
          certification: 'ISO 9001'
        }
      },
      {
        id: 13,
        name: 'Πολυτελές Ρολόι Vintage',
        nameEn: 'Vintage Luxury Watch',
        price: '€9,800',
        image: watch1,
        category: 'watches',
        subcategory: 'watches',
        description: 'Κλασικό vintage πολυτελές ρολόι με ιστορία και χαρακτήρα. Ιδανικό για τους συλλέκτες vintage κοσμημάτων.',
        descriptionEn: 'Classic vintage luxury watch with history and character. Perfect for vintage collectors.',
        features: [
          '14K χρυσός case',
          'Vintage ελβετικός μηχανισμός',
          'Ακρυλικό κρύσταλλο',
          'Εγγύηση 2 ετών',
          'Πιστοποιημένο'
        ],
        featuresEn: [
          '14K Gold Case',
          'Vintage Swiss Movement',
          'Acrylic Crystal',
          '2-Year Warranty',
          'Certified'
        ],
        specifications: {
          material: '14K Χρυσός',
          materialEn: '14K Gold',
          weight: '48g',
          dimensions: '38mm',
          dimensionsEn: '38mm',
          certification: 'ISO 9001'
        }
      },
      {
        id: 14,
        name: 'Πολυτελές Ρολόι Sport',
        nameEn: 'Luxury Sport Watch',
        price: '€7,200',
        image: watch2,
        category: 'watches',
        subcategory: 'watches',
        description: 'Αθλητικό πολυτελές ρολόι με σύγχρονο design. Ιδανικό για ενεργούς επαγγελματίες που θέλουν κομψότητα και λειτουργικότητα.',
        descriptionEn: 'Luxury sport watch with modern design. Perfect for active professionals who want elegance and functionality.',
        features: [
          'Τιτάνιο case',
          'Αυτόματος ελβετικός μηχανισμός',
          'Σαπφάιρ κρύσταλλο',
          'Ανθεκτικό σε νερό',
          'Εγγύηση 2 ετών'
        ],
        featuresEn: [
          'Titanium Case',
          'Automatic Swiss Movement',
          'Sapphire Crystal',
          'Water-Resistant',
          '2-Year Warranty'
        ],
        specifications: {
          material: 'Τιτάνιο',
          materialEn: 'Titanium',
          weight: '35g',
          dimensions: '41mm',
          dimensionsEn: '41mm',
          certification: 'ISO 9001'
        }
      }
    ]
  };

  // Get all products from all categories
  const allProducts = [
    ...products.gold,
    ...products.silver,
    ...products.watches
  ];

  // Apply filters and search
  const filteredProducts = allProducts.filter(product => {
    // Search filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Category filter
    if (activeCategory && activeCategory !== 'all') {
      if (activeCategory === 'gold' && product.category !== 'gold') return false;
      if (activeCategory === 'silver' && product.category !== 'silver') return false;
      if (activeCategory === 'watches' && product.category !== 'watches') return false;
    }

    // Subcategory filter
    if (filters.subcategory && product.subcategory !== filters.subcategory) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return parseFloat(a.price.replace('€', '').replace(',', '')) - parseFloat(b.price.replace('€', '').replace(',', ''));
      case 'price-high-low':
        return parseFloat(b.price.replace('€', '').replace(',', '')) - parseFloat(a.price.replace('€', '').replace(',', ''));
      case 'most-recent':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, filters.subcategory, searchQuery, sortBy]);

  // Get active filters count
  const activeFiltersCount = Object.values(filters).filter(value => value !== null).length;

  // Clear all filters function
  const clearFilters = () => {
    setCategory(null);
    setSubcategory(null);
    setSearchQuery('');
    setActiveCategory('all');
    setSortBy('default');
    setCurrentPage(1);
  };

  // Get filter display text
  const getFilterDisplayText = () => {
    const parts = [];
    if (filters.category) {
      parts.push(filters.category === 'gold' ? 'Χρυσά Κοσμήματα' : filters.category === 'silver' ? 'Ασημένια Κοσμήματα' : 'Πολυτελές Ρολόγια');
    }
    if (filters.subcategory) {
      const subcategoryLabels = {
        rings: 'Δαχτυλίδια',
        necklaces: 'Περιδέραια',
        earrings: 'Σκουλαρίκια',
        bracelets: 'Βραχιόλια'
      };
      parts.push(subcategoryLabels[filters.subcategory as keyof typeof subcategoryLabels] || filters.subcategory);
    }
    return parts.join(' - ');
  };

  // Category tabs
  const categories = [
    { id: 'all', label: language === 'en' ? 'All' : 'Όλα', count: allProducts.length },
    { id: 'gold', label: language === 'en' ? 'Gold Jewelry' : 'Χρυσά Κοσμήματα', count: products.gold.length },
    { id: 'silver', label: language === 'en' ? 'Silver Jewelry' : 'Ασημένια Κοσμήματα', count: products.silver.length },
    { id: 'watches', label: language === 'en' ? 'Luxury Watches' : 'Πολυτελές Ρολόγια', count: products.watches.length }
  ];

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll to the beginning of the section
      document.getElementById('product-gallery')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Scroll to the beginning of the section
      document.getElementById('product-gallery')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="product-gallery" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header with Search */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-serif font-bold mb-3 lg:mb-4 text-gold">
            {filters.category || filters.subcategory ? getFilterDisplayText() : t('products.title')}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8">
            {filters.category || filters.subcategory 
              ? `${filteredProducts.length} προϊόντα βρέθηκαν`
              : t('products.subtitle')
            }
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6 lg:mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-gold" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search products...' : 'Αναζήτηση προϊόντων...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 lg:pl-12 pr-4 py-3 lg:py-4 bg-white/80 border border-gold/30 rounded-lg lg:rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 backdrop-blur-md text-sm lg:text-base"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                data-category={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-3 md:px-6 py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 text-xs md:text-base ${
                  activeCategory === category.id
                    ? 'bg-gold text-black shadow-lg shadow-gold/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gold/20'
                }`}
              >
                <span className="block truncate text-center">{category.label}</span>
                <span className="ml-1 md:ml-2 px-1.5 md:px-2 py-0.5 md:py-1 bg-white/20 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-8 lg:mb-0">
            <h3 className="text-xl lg:text-2xl font-serif font-bold mb-3 lg:mb-4 text-gold">
              {activeCategory === 'all' 
                ? (language === 'en' ? 'All Products' : 'Όλα τα Προϊόντα')
                : activeCategory === 'gold'
                ? (language === 'en' ? 'Gold Jewelry' : 'Χρυσά Κοσμήματα')
                : activeCategory === 'silver'
                ? (language === 'en' ? 'Silver Jewelry' : 'Ασημένια Κοσμήματα')
                : (language === 'en' ? 'Luxury Watches' : 'Πολυτελές Ρολόγια')
              }
            </h3>
            <p className="text-gray-600 text-sm lg:text-base">
              {language === 'en' 
                ? `Showing ${filteredProducts.length} products`
                : `Εμφανίζονται ${filteredProducts.length} προϊόντα`
              }
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              {/* Sorting Options Button */}
              <div className="relative sorting-dropdown-container">
                <button
                  onClick={() => setShowSorting(!showSorting)}
                  className="flex items-center space-x-2 px-3 lg:px-4 py-2 bg-gold/20 hover:bg-gold/30 text-gold rounded-lg transition-colors border border-gold/30 text-sm lg:text-base"
                >
                  <span>{language === 'en' ? 'Sorting Options' : 'Επιλογές Ταξινόμησης'}</span>
                  <Filter className="h-4 w-4" />
                </button>

                {/* Sorting Options Dropdown */}
                {showSorting && (
                  <div className="absolute top-full right-0 mt-2 w-full sm:w-64 bg-white/95 backdrop-blur-md border border-gold/30 rounded-lg shadow-2xl shadow-gold/20 z-50">
                    <div className="p-3 sm:p-4">
                      <h4 className="text-gold font-medium mb-3 text-center text-sm sm:text-base">
                        {language === 'en' ? 'Sort Options' : 'Επιλογές Ταξινόμησης'}
                      </h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setSortBy('default');
                            setShowSorting(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                            sortBy === 'default'
                              ? 'bg-gold text-black'
                              : 'text-gray-700 hover:bg-gold/20'
                          }`}
                        >
                          {language === 'en' ? 'Default Order' : 'Προεπιλεγμένη Σειρά'}
                        </button>
                        <button
                          onClick={() => {
                            setSortBy('price-low-high');
                            setShowSorting(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                            sortBy === 'price-low-high'
                              ? 'bg-gold text-black'
                              : 'text-gray-700 hover:bg-gold/20'
                          }`}
                        >
                          {language === 'en' ? 'Price: Low to High' : 'Τιμή: Χαμηλή προς Υψηλή'}
                        </button>
                        <button
                          onClick={() => {
                            setSortBy('price-high-low');
                            setShowSorting(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                            sortBy === 'price-high-low'
                              ? 'bg-gold text-black'
                              : 'text-gray-700 hover:bg-gold/20'
                          }`}
                        >
                          {language === 'en' ? 'Price: High to Low' : 'Τιμή: Υψηλή προς Χαμηλή'}
                        </button>
                        <button
                          onClick={() => {
                            setSortBy('most-recent');
                            setShowSorting(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                            sortBy === 'most-recent'
                              ? 'bg-gold text-black'
                              : 'text-gray-700 hover:bg-gold/20'
                          }`}
                        >
                          {language === 'en' ? 'Most Recent' : 'Πιο Πρόσφατα'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Clear Filters Button */}
              {(activeFiltersCount > 0 || activeCategory !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-2 px-3 lg:px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm lg:text-base"
                >
                  <X className="h-4 w-4" />
                  <span>{language === 'en' ? 'Clear Filters' : 'Καθαρισμός Φίλτρων'}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(activeFiltersCount > 0 || activeCategory !== 'all') && (
          <div className="mb-6 lg:mb-8 p-3 lg:p-4 bg-gold/10 border border-gold/30 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gold font-medium text-sm lg:text-base">{t('filters.active')}</span>
              <div className="flex flex-wrap gap-2">
                {activeCategory !== 'all' && (
                  <span className="px-2 lg:px-3 py-1 bg-gold/20 text-gold rounded-full text-xs lg:text-sm">
                    {activeCategory === 'gold' ? 'Χρυσά Κοσμήματα' : 
                     activeCategory === 'silver' ? 'Ασημένια Κοσμήματα' : 
                     activeCategory === 'watches' ? 'Πολυτελές Ρολόγια' : activeCategory}
                  </span>
                )}
                {filters.subcategory && (
                  <span className="px-2 lg:px-3 py-1 bg-gold/20 text-gold rounded-full text-xs lg:text-sm">
                    {filters.subcategory === 'rings' ? 'Δαχτυλίδια' : 
                     filters.subcategory === 'necklaces' ? 'Περιδέραια' :
                     filters.subcategory === 'earrings' ? 'Σκουλαρίκια' :
                     filters.subcategory === 'bracelets' ? 'Βραχιόλια' : 
                     filters.subcategory === 'watches' ? 'Ρολόγια' : filters.subcategory}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card rounded-lg p-4 lg:p-6 group cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image */}
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={language === 'en' ? product.nameEn || product.name : product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-3 lg:top-4 right-3 lg:right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-1.5 lg:p-2 bg-gold/20 backdrop-blur-md rounded-full text-gold hover:bg-gold/30 transition-colors">
                      <Heart className="h-3 w-3 lg:h-4 lg:w-4" />
                    </button>
                    <button className="p-1.5 lg:p-2 bg-gold/20 backdrop-blur-md rounded-full text-gold hover:bg-gold/30 transition-colors">
                      <ShoppingBag className="h-3 w-3 lg:h-4 lg:w-4" />
                    </button>
                  </div>

                  {/* View Details Button */}
                  <div className="absolute bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-4 lg:px-6 py-2 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-colors flex items-center space-x-2 text-xs lg:text-sm"
                    >
                      <Eye className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>{language === 'en' ? 'View Details' : 'Προβολή Λεπτομερειών'}</span>
                    </button>
                  </div>
                </div>
                {/* Product Info */}
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-serif font-bold text-gold mb-2">
                    {language === 'en' ? product.nameEn || product.name : product.name}
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4 line-clamp-2">
                    {language === 'en' ? product.descriptionEn || product.description : product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl lg:text-2xl font-bold text-gray-800">{product.price}</span>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 lg:h-4 lg:w-4 text-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-gold/20">
                    <div className="flex items-center justify-between text-xs lg:text-sm">
                      <span className="text-gray-500">
                        {language === 'en' ? product.specifications?.materialEn || product.specifications?.material : product.specifications?.material}
                      </span>
                      <span className="text-gray-500">·</span>
                      <span className="text-gray-500">{product.specifications?.weight}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 lg:py-20">
            <div className="text-4xl lg:text-6xl mb-3 lg:mb-4">🔍</div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 mb-3 lg:mb-4">
              {t('filters.noResults')}
            </h3>
            <p className="text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base px-4">
              {t('filters.noResultsDesc')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                clearFilters();
              }}
              className="px-4 lg:px-6 py-2 lg:py-3 bg-gold hover:bg-gold-light text-black rounded-lg transition-colors text-sm lg:text-base"
            >
              {t('filters.clearAll')}
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 lg:mt-16">
            <nav className="flex items-center space-x-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-3 lg:px-4 py-2 bg-gold/20 text-gray-800 rounded-lg hover:bg-gold/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base border border-gold/30"
              >
                {language === 'en' ? 'Previous' : 'Προηγούμενη'}
              </button>
              <span className="text-gray-600 text-sm lg:text-base">
                {language === 'en' ? `Page ${currentPage} of ${totalPages}` : `Σελίδα ${currentPage} από ${totalPages}`}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-3 lg:px-4 py-2 bg-gold/20 text-gray-800 rounded-lg hover:bg-gold/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base border border-gold/30"
              >
                {language === 'en' ? 'Next' : 'Επόμενη'}
              </button>
            </nav>
          </div>
        )}
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