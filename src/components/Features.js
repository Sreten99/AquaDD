import React from 'react';
import { Droplets, Shield, Truck, Leaf } from 'lucide-react';
import './Features.css';

function Features() {
  const features = [
    {
      icon: <Droplets size={40} />,
      title: '100% Prirodna',
      description: 'Naša voda dolazi iz najčistijih prirodnih izvora, bez hemijskih dodataka i tretmana.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Kontrola kvaliteta',
      description: 'Svaka kap prolazi rigoroznu kontrolu kvaliteta i testiranje u sertifikovanim laboratorijama.'
    },
    {
      icon: <Truck size={40} />,
      title: 'Brza dostava',
      description: 'Dostava istog dana za sve porudžbine do 15h. Besplatna dostava za porudžbine preko 5 balona.'
    },
    {
      icon: <Leaf size={40} />,
      title: 'Eko pakovanje',
      description: 'Koristimo 100% reciklabilne balone koji ne zagađuju životnu sredinu.'
    }
  ];

  return (
    <section className="features" id="o-nama">
      <h2 className="section-title">Zašto AquaDD?</h2>
      <p className="section-subtitle">Vaše zdravlje je naš prioritet</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
