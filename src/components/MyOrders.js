import React, { useState } from 'react';
import { Package, Phone, Calendar, MapPin, MessageSquare, Clock } from 'lucide-react';
import './MyOrders.css';

function MyOrders() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      setMessage('Molimo unesite broj telefona.');
      return;
    }

    setIsLoading(true);
    setMessage('');
    setHasSearched(true);
    setOrders([]);

    // Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyG5bh7ehuUUj_gr3O6EAqKFVL5_FeDn_X4DjCGDjmM3POKUtSloKfKiT4hPRjh6788vw/exec';
    
    try {
      const response = await fetch(`${scriptURL}?action=getOrders&phone=${encodeURIComponent(phoneNumber)}`);
      const data = await response.json();
      
      if (data.result === 'success' && data.orders) {
        if (data.orders.length === 0) {
          setMessage('Nema porudžbina za ovaj broj telefona.');
        } else {
          setOrders(data.orders);
          setMessage('');
        }
      } else {
        setMessage('Greška pri pretraživanju. Pokušajte ponovo.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Greška pri povezivanju. Proverite internet konekciju.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'nova': return 'status-new';
      case 'u obradi': return 'status-processing';
      case 'dostavljena': return 'status-delivered';
      case 'otkazana': return 'status-cancelled';
      default: return 'status-new';
    }
  };

  const getStatusIcon = (status) => {
    switch(status?.toLowerCase()) {
      case 'nova': return '🆕';
      case 'u obradi': return '🚚';
      case 'dostavljena': return '✅';
      case 'otkazana': return '❌';
      default: return '📦';
    }
  };

  return (
    <div className="my-orders">
      {/* Hero sekcija */}
      <section className="orders-hero">
        <div className="orders-hero-content">
          <Package size={64} className="orders-hero-icon" />
          <h1>Moje Porudžbine</h1>
          <p>Proverite status vaših porudžbina</p>
        </div>
      </section>

      {/* Search forma */}
      <section className="orders-search">
        <div className="orders-container">
          <div className="search-card">
            <h2>Unesite broj telefona</h2>
            <p className="search-subtitle">
              Prikazaćemo sve vaše porudžbine za uneti broj
            </p>
            
            <form onSubmit={handleSearch} className="search-form">
              <div className="input-group">
                <Phone size={20} />
                <input
                  type="tel"
                  placeholder="064 123 4567"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              
              <button 
                type="submit" 
                className="search-button"
                disabled={isLoading}
              >
                {isLoading ? 'Pretražujem...' : 'Proveri Porudžbine'}
              </button>
            </form>

            {message && (
              <div className={`search-message ${orders.length === 0 && hasSearched ? 'no-results' : 'error'}`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Rezultati */}
      {orders.length > 0 && (
        <section className="orders-results">
          <div className="orders-container">
            <div className="results-header">
              <h2>Vaše porudžbine</h2>
              <span className="results-count">{orders.length} {orders.length === 1 ? 'porudžbina' : 'porudžbina/e'}</span>
            </div>

            <div className="orders-list">
              {orders.map((order, index) => (
                <div key={index} className="order-card">
                  <div className="order-header">
                    <div className="order-date">
                      <Calendar size={18} />
                      <span>{order.datum}</span>
                      <Clock size={18} />
                      <span>{order.vreme}</span>
                    </div>
                    <div className={`order-status ${getStatusColor(order.status)}`}>
                      <span className="status-icon">{getStatusIcon(order.status)}</span>
                      <span>{order.status}</span>
                    </div>
                  </div>

                  <div className="order-body">
                    <div className="order-info">
                      <div className="info-item">
                        <MapPin size={18} />
                        <div>
                          <span className="info-label">Adresa dostave:</span>
                          <span className="info-value">{order.adresa}</span>
                        </div>
                      </div>

                      {order.poruka && (
                        <div className="info-item">
                          <MessageSquare size={18} />
                          <div>
                            <span className="info-label">Poruka:</span>
                            <span className="info-value">{order.poruka}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="order-products">
                      {order.qty5L > 0 && (
                        <div className="product-badge">
                          <span className="product-qty">{order.qty5L}x</span>
                          <span className="product-name">5L Balon</span>
                        </div>
                      )}
                      {order.qty10L > 0 && (
                        <div className="product-badge">
                          <span className="product-qty">{order.qty10L}x</span>
                          <span className="product-name">10L Balon</span>
                        </div>
                      )}
                      {order.qty5L === 0 && order.qty10L === 0 && (
                        <div className="product-badge product-badge-empty">
                          <span>Količina nije detektovana</span>
                        </div>
                      )}
                    </div>

                    {order.napomena && (
                      <div className="order-note">
                        <strong>Napomena:</strong> {order.napomena}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Info sekcija */}
      <section className="orders-info">
        <div className="orders-container">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">🆕</div>
              <h3>Nova</h3>
              <p>Vaša porudžbina je primljena i čeka obradu</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🚚</div>
              <h3>U obradi</h3>
              <p>Pripremamo vašu porudžbinu za dostavu</p>
            </div>
            <div className="info-card">
              <div className="info-icon">✅</div>
              <h3>Dostavljena</h3>
              <p>Vaša porudžbina je uspešno dostavljena</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyOrders;