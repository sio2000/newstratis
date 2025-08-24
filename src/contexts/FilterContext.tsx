import React, { createContext, useContext, useState, useCallback } from 'react';

interface FilterState {
  category: string | null;
  subcategory: string | null;
  material: string | null;
  priceRange: [number, number] | null;
}

interface FilterContextType {
  filters: FilterState;
  setCategory: (category: string | null) => void;
  setSubcategory: (subcategory: string | null) => void;
  setMaterial: (material: string | null) => void;
  setPriceRange: (range: [number, number] | null) => void;
  clearFilters: () => void;
  applyFilters: (products: any[]) => any[];
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};

interface FilterProviderProps {
  children: React.ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<FilterState>({
    category: null,
    subcategory: null,
    material: null,
    priceRange: null
  });

  const setCategory = useCallback((category: string | null) => {
    setFilters(prev => ({
      ...prev,
      category,
      subcategory: null // Reset subcategory when category changes
    }));
  }, []);

  const setSubcategory = useCallback((subcategory: string | null) => {
    setFilters(prev => ({
      ...prev,
      subcategory
    }));
  }, []);

  const setMaterial = useCallback((material: string | null) => {
    setFilters(prev => ({
      ...prev,
      material
    }));
  }, []);

  const setPriceRange = useCallback((range: [number, number] | null) => {
    setFilters(prev => ({
      ...prev,
      priceRange: range
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      category: null,
      subcategory: null,
      material: null,
      priceRange: null
    });
  }, []);

  const applyFilters = useCallback((products: any[]) => {
    return products.filter(product => {
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false;
      }

      // Subcategory filter
      if (filters.subcategory) {
        const productType = getProductType(product.name);
        if (productType !== filters.subcategory) {
          return false;
        }
      }

      // Material filter
      if (filters.material && product.specifications?.material !== filters.material) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        const price = extractPrice(product.price);
        if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  // Helper function to determine product type from name
  const getProductType = (productName: string): string => {
    const name = productName.toLowerCase();
    if (name.includes('δαχτυλίδι') || name.includes('ring')) return 'rings';
    if (name.includes('κολιέ') || name.includes('περιδέραιο') || name.includes('necklace')) return 'necklaces';
    if (name.includes('σκουλαρίκι') || name.includes('earring')) return 'earrings';
    if (name.includes('βραχιόλι') || name.includes('bracelet')) return 'bracelets';
    return 'other';
  };

  // Helper function to extract price from string
  const extractPrice = (priceString: string): number => {
    const match = priceString.match(/€([\d,]+)/);
    if (match) {
      return parseInt(match[1].replace(/,/g, ''));
    }
    return 0;
  };

  const value = {
    filters,
    setCategory,
    setSubcategory,
    setMaterial,
    setPriceRange,
    clearFilters,
    applyFilters
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
