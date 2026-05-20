import React from 'react';
import { CheckCircle } from 'lucide-react';
import './Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'AquaDD 5L',
      size: '5 litara',
      price: '250 RSD',
      image: '/5l.jpg',
      description: 'Idealna veličina za manje porodice i kancelarije',
      features: ['Lako se nosi', 'Praktično pakovanje', 'Svakodnevna upotreba']
    },
    {
      id: 2,
      name: 'AquaDD 10L',
      size: '10 litara',
      price: '450 RSD',
      image: '/10l.jpg',
      description: 'Najbolji izbor za veće potrebe i dužu upotrebu',
      features: ['Ekonomična opcija', 'Manje zamena', 'Bolja vrednost']
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="products" id="proizvodi">
      <h2 className="section-title">Naši proizvodi</h2>
      <p className="section-subtitle">Izaberite idealnu veličinu za vaše potrebe</p>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-header">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-size">{product.size}</p>
            </div>
            <div className="product-body">
              <div className="product-price">{product.price}</div>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircle size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary" onClick={scrollToContact}>
                Poruči sada
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;