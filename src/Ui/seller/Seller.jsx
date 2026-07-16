import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Seller.css';

const Seller = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate("");

 
  useEffect(() => {
    fetch('https://uzum-api.onrender.com/api/sellers')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ma'lumotlarni yuklashda xatolik yuz berdi");
        }
        return res.json();
      })
      .then((resData) => {
        
        setSellers(resData.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Yuklanmoqda...</div>;
  if (error) return <div className="error">Xatolik: {error}</div>;

  return (
    <div className="seller-container">
      <h2 className="title">
        <span className="shield-icon"></span> Tasdiqlangan sotuvchilar
      </h2>
      
      <div className="seller-grid">
        {sellers.map((seller) => (
          <div key={seller.id} className="seller-card">
            <div className="logo-wrapper">
              <img src={seller.logoUrl} alt={seller.name} className="seller-logo" />
            </div>

            <h3 className="seller-name">{seller.name}</h3>
            <p className="seller-meta">
              {seller.experienceLabel} • {seller.location}
            </p>

            <div className="stats-container">
              <div className="stat-box">
                <span className="stat-value">{seller.reliabilityScore}%</span>
                <span className="stat-label">Ishonchlilik</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">{seller.responseTimeLabel.split(' ')[0]}</span>
                <span className="stat-label">Javob vaqti</span>
              </div>
            </div>

            <button 
            onClick={(e)=>(e.preventDefault(),navigate(`/seller/${seller.slug}`))}
              className="details-btn" 
            >
              Sotuvchi sahifasi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seller;