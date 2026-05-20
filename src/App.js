import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Delivery from './components/Delivery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InstallPrompt from './components/InstallPrompt';
import MyOrders from './components/MyOrders';
import './index.css';

// Glavna stranica sa svim sekcijama
function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Delivery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moje-porudzbine" element={<MyOrders />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <InstallPrompt />
      </div>
    </Router>
  );
}

export default App;