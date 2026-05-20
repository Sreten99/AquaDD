import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Kako se vrši dostava?',
      answer: 'Dostavljamo direktno na vašu adresu u dogovorenom terminu. Naš dostavljač donosi pune balone i odnosi prazne. Dostava je besplatna za Zonu 1 (centar Novog Sada).'
    },
    {
      question: 'Da li je voda testirana?',
      answer: 'Apsolutno! Naša voda prolazi rigorozne testove u sertifikovanim laboratorijama. Svaki balon dolazi zapečaćen i sa sertifikatom o kvalitetu. Testiramo sve parametre prema HACCP standardima.'
    },
    {
      question: 'Kako se vraćaju prazni baloni?',
      answer: 'Prilikom svake dostave, dostavljač uzima vaše prazne balone. Ne morate da brinete o vraćanju - sve je uključeno u našu uslugu. Baloni se zatim profesionalno čiste i dezinfikuju.'
    },
    {
      question: 'Šta ako balon procuri ili bude oštećen?',
      answer: 'Ako primetite bilo kakvo oštećenje ili curenje, odmah nas pozovite i zamenićemo balon istog dana bez dodatne naplate. Vaše zadovoljstvo i bezbednost su nam prioritet.'
    },
    {
      question: 'Koliko se drži voda u balonu?',
      answer: 'Nakon otvaranja, voda u balonu ostaje sveža do 7 dana ako se čuva na hladnom i tamnom mestu. Preporučujemo da otvoreni balon potrošite u roku od 5 dana za najbolji ukus.'
    },
    {
      question: 'Da li radite vikendom?',
      answer: 'Da, dostavljamo svakog dana uključujući vikende i praznike od 08:00 do 20:00. Neradeljom možete naručiti preko našeg sajta ili WhatsApp-a za dostavu sledećeg dana.'
    },
    {
      question: 'Koje načine plaćanja prihvatate?',
      answer: 'Prihvatamo gotovinu, platne kartice i virmansko plaćanje za preduzeća. Za firme nudimo mesečno fakturisanje sa mogućnošću odloženog plaćanja.'
    },
    {
      question: 'Da li imate popuste za veće količine?',
      answer: 'Da! Za porudžbine preko 10 balona mesečno nudimo 10% popusta. Stalnim kupcima dajemo loyalty karticu sa dodatnim benefitima. Kontaktirajte nas za personalizovanu ponudu.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <h2 className="section-title">Često postavljana pitanja</h2>
        <p className="section-subtitle">Sve što trebate da znate o AquaDD vodi</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;