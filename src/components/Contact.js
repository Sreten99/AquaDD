import React, { useState } from 'react';
import { Phone, MapPin, Truck } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Provera da li su popunjena obavezna polja
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Molimo popunite sva obavezna polja!');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    // OVDE STAVI SVOJ GOOGLE APPS SCRIPT URL!
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyG5bh7ehuUUj_gr3O6EAqKFVL5_FeDn_X4DjCGDjmM3POKUtSloKfKiT4hPRjh6788vw/exec';
    
    try {
       await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Important za Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Sa no-cors, ne možemo čitati response, ali ako nema greške, znači je uspelo
      setSubmitMessage('✅ Hvala! Vaša porudžbina je primljena. Kontaktiraćemo vas uskoro.');
      
      // Resetuj formu
      setFormData({
        name: '',
        phone: '',
        address: '',
        message: ''
      });

    } catch (error) {
      console.error('Greška:', error);
      setSubmitMessage('❌ Došlo je do greške. Molimo pozovite nas direktno na +381 64 123 4567');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="kontakt">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Kontaktirajte nas</h2>
          <p>
            Dostupni smo svakog dana od 08:00 do 20:00. 
            Popunite formu i primićemo vašu porudžbinu odmah.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <Phone size={24} />
              <span>+381 64 123 4567</span>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <span>Novi Sad, Vojvodina</span>
            </div>
            <div className="contact-item">
              <Truck size={24} />
              <span>Dostava istog dana</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('✅') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
          
          <div className="form-group">
            <label>Ime i prezime *</label>
            <input 
              type="text" 
              name="name"
              placeholder="Vaše ime" 
              value={formData.name}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label>Telefon *</label>
            <input 
              type="tel" 
              name="phone"
              placeholder="+381 64 123 4567" 
              value={formData.phone}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label>Adresa dostave *</label>
            <input 
              type="text" 
              name="address"
              placeholder="Ulica i broj" 
              value={formData.address}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label>Poruka (opciono)</label>
            <textarea 
              name="message"
              placeholder="Količina i dodatne napomene..."
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Šalje se...' : 'Pošalji porudžbinu'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;