import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGallery from './components/ProductGallery';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageProvider from './contexts/LanguageContext';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-gold border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <h2 className="text-gold text-xl font-serif">Φόρτωση Stratis Fine Jewels...</h2>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <HeroSection />
        <ProductGallery />
        <Services />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;