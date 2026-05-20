import React, { useState } from 'react';
import { MapPin, Clock, Truck, Phone, CheckCircle } from 'lucide-react';
import './Delivery.css';

function Delivery() {
  const [selectedZone, setSelectedZone] = useState(null);

  const zones = [
    {
      id: 1,
      name: 'Zona 1 - Centar Novog Sada',
      areas: ['Centar', 'Liman', 'Grbavica', 'Novo Naselje', 'Telep'],
      price: 'Besplatna dostava',
      time: '1-2 sata',
      color: '#10b981'
    },
    {
      id: 2,
      name: 'Zona 2 - Šira okolina NS',
      areas: ['Futog', 'Veternik', 'Petrovaradin', 'Sremska Kamenica', 'Ledinci'],
      price: '100 RSD',
      time: '2-3 sata',
      color: '#0891b2'
    },
    {
      id: 3,
      name: 'Zona 3 - Okolina',
      areas: ['Begeč', 'Kisač', 'Stepanovićevo', 'Čenej', 'Budisava'],
      price: '150 RSD',
      time: '3-4 sata',
      color: '#6366f1'
    }
  ];

  const features = [
    {
      icon: <Clock size={32} />,
      title: 'Dostava istog dana',
      description: 'Porudžbine do 15h stižu istog dana'
    },
    {
      icon: <Truck size={32} />,
      title: 'Sigurna dostava',
      description: 'Baloni se dostavljaju u originalnom pakovanju'
    },
    {
      icon: <Phone size={32} />,
      title: 'Obaveštenje o dostavi',
      description: 'Poziv kurira 15-30 min pre dolaska'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Garancija kvaliteta',
      description: 'Zamena balona u slučaju oštećenja'
    }
  ];

  return (
    <section className="delivery" id="dostava">
      <div className="delivery-header">
        <h2 className="section-title">Dostava</h2>
        <p className="section-subtitle">Brza i pouzdana dostava u Novom Sadu i okolini</p>
      </div>

      {/* Delivery Features */}
      <div className="delivery-features">
        {features.map((feature, index) => (
          <div key={index} className="delivery-feature-card">
            <div className="delivery-feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Zones Section */}
      <div className="zones-section">
        <h3 className="zones-title">Zone dostave</h3>
        <div className="zones-grid">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className={`zone-card ${selectedZone === zone.id ? 'active' : ''}`}
              onClick={() => setSelectedZone(zone.id)}
              style={{ '--zone-color': zone.color }}
            >
              <div className="zone-header">
                <MapPin size={24} />
                <span className="zone-number">Zona {zone.id}</span>
              </div>
              <h4 className="zone-name">{zone.name}</h4>
              <div className="zone-areas">
                {zone.areas.map((area, index) => (
                  <span key={index} className="zone-area">{area}</span>
                ))}
              </div>
              <div className="zone-info">
                <div className="zone-price">
                  <strong>{zone.price}</strong>
                </div>
                <div className="zone-time">
                  <Clock size={16} />
                  {zone.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Visualization */}
      <div className="map-section">
        <h3 className="map-title">Mapa pokrivenosti</h3>
        <div className="map-container">
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91290.31384868729!2d19.76827404863281!3d45.26717657910156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10e52e59530d%3A0x300a883a0cf930a!2sNovi%20Sad!5e0!3m2!1sen!2srs!4v1234567890123!5m2!1sen!2srs"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Novog Sada"
            ></iframe>
          </div>
          <div className="map-legend">
            <h4>Legenda</h4>
            {zones.map((zone) => (
              <div key={zone.id} className="legend-item">
                <span className="legend-color" style={{ background: zone.color }}></span>
                <div className="legend-text">
                  <strong>{zone.name}</strong>
                  <p className="legend-price">{zone.price}</p>
                </div>
              </div>
            ))}
            <div className="map-note">
              <p><strong>📍 Centar:</strong> Novi Sad</p>
              <p>Kliknite na mapu za veću verziju</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="delivery-info">
        <div className="info-card">
          <h4>📦 Minimalna porudžbina</h4>
          <p>1 balon (5L ili 10L)</p>
        </div>
        <div className="info-card">
          <h4>💳 Način plaćanja</h4>
          <p>Gotovina, kartica ili virman</p>
        </div>
        <div className="info-card">
          <h4>🕐 Radno vreme</h4>
          <p>Svakog dana od 08:00 do 20:00</p>
        </div>
        <div className="info-card">
          <h4>📞 Hitne porudžbine</h4>
          <p>Pozovite: +381 64 123 4567</p>
        </div>
      </div>
    </section>
  );
}

export default Delivery;