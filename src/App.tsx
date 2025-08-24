import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageProvider from './contexts/LanguageContext';
import { NavigationProvider } from './contexts/NavigationContext';
import { FilterProvider } from './contexts/FilterContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductGallery from './components/ProductGallery';
import Services from './components/Services';
import CustomJewelry from './components/CustomJewelry';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomJewelryDetails from './components/CustomJewelryDetails';
import './App.css';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <NavigationProvider>
          <FilterProvider>
            <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={
                  <>
                    <HeroSection />
                    <ProductGallery />
                    <Services />
                    <CustomJewelry />
                    <Certifications />
                    <Contact />
                  </>
                } />
                <Route path="/custom-jewelry-details" element={<CustomJewelryDetails />} />
              </Routes>
              <Footer />
            </div>
          </FilterProvider>
        </NavigationProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;