import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const phoneNumber = '381692371757'; // Promeni sa svojim brojem (bez + i razmaka)
  const message = 'Pozdrav! Želim da poručim AquaDD vodu.';
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="Kontaktirajte nas na WhatsApp">
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">Poruči na WhatsApp</span>
    </button>
  );
}

export default WhatsAppButton;