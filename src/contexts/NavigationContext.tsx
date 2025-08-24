import React, { createContext, useContext, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationContextType {
  navigateToSection: (sectionId: string) => void;
  navigateToHome: () => void;
  scrollToTop: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle hash changes and scroll to sections
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      // Use a longer timeout to ensure the page has fully loaded
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location.hash]);

  const navigateToSection = useCallback((sectionId: string) => {
    // If we're not on the home page, navigate there first with hash
    if (location.pathname !== '/') {
      // Use window.location.href for reliable hash navigation
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  const navigateToHome = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, [navigate, location.pathname]);

  const scrollToTop = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [navigate, location.pathname]);

  const value = {
    navigateToSection,
    navigateToHome,
    scrollToTop
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
