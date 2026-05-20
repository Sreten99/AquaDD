import React from 'react';
import { Droplets, Phone } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Čista voda, zdravo telo</h1>
        <p className="hero-subtitle">
          Prirodno osveženje u vašem domu - Dostavljamo najčistiju vodu direktno do vaših vrata
        </p>
        <div className="hero-cta">
          <a href="#proizvodi" className="btn btn-primary">
            Pogledajte ponudu
            <Droplets size={20} />
          </a>
          <a href="#kontakt" className="btn btn-secondary">
            Poručite odmah
            <Phone size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
