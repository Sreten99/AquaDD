import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplet } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Ako smo na MyOrders stranici, prvo idi na home
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Droplet className="logo-icon" />
          <span>AquaDD</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {isHomePage ? (
            <>
              <button onClick={() => scrollToSection('pocetna')} className="nav-link">
                Početna
              </button>
              <button onClick={() => scrollToSection('proizvodi')} className="nav-link">
                Proizvodi
              </button>
              <button onClick={() => scrollToSection('dostava')} className="nav-link">
                Dostava
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="nav-link">
                Kontakt
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">
                Početna
              </Link>
              <Link to="/#proizvodi" className="nav-link">
                Proizvodi
              </Link>
              <Link to="/#dostava" className="nav-link">
                Dostava
              </Link>
              <Link to="/#kontakt" className="nav-link">
                Kontakt
              </Link>
            </>
          )}
          
          <Link to="/moje-porudzbine" className="nav-link nav-link-special">
            Moje Porudžbine
          </Link>
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;