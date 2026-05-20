import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Marko Petrović',
      role: 'Stalni kupac',
      text: 'Koristimo AquaDD vodu već dve godine i prezadovoljni smo! Dostava je uvek na vreme, voda je izuzetnog kvaliteta, a cena sasvim pristupačna. Preporučujem svima!',
      rating: 5,
      location: 'Novi Sad, Grbavica'
    },
    {
      name: 'Ana Jovanović',
      role: 'Vlasnica kafića',
      text: 'Za naš kafić naručujemo AquaDD već godinu dana. Profesionalni pristup, redovna dostava i odličan kvalitet. Gosti primećuju razliku u ukusu kafe!',
      rating: 5,
      location: 'Novi Sad, Centar'
    },
    {
      name: 'Stefan Nikolić',
      role: 'Porodica sa dvoje dece',
      text: 'Prelazak na AquaDD je bila najbolja odluka za našu porodicu. Deca piju mnogo više vode otkako koristimo ovaj sistem. Pouzdano i zdravo!',
      rating: 5,
      location: 'Petrovaradin'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Šta kažu naši kupci</h2>
        <p className="section-subtitle">Poverenje koje gradimo svakodnevno</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote">
                <Quote size={40} />
              </div>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <span className="author-location">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;