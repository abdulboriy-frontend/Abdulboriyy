import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SellerCard.css'   

const SellerCard = () => {
  const params = useParams()
  const [seller, setSeller] = useState(null)
  const slug = params.slug

  async function Get() {
    try {
      const res = await fetch(`https://uzum-api.onrender.com/api/sellers/${slug}`)
      const data = await res.json()
      setSeller(data.data)
      console.log(data.data)
    } catch (error) {
      console.error("Ma'lumot olishda xatolik yuz berdi:", error)
    }
  }

  useEffect(() => {
    if (slug) {
      Get()
    }
  }, [slug])

  if (!seller) {
    return <div style={{ textAlign: 'center', padding: '50px', color: '#6b7280' }}>Yuklanmoqda...</div>
  }

  return (
    <div className="seller-container">
      
      <div className="seller-header">
        <div className="seller-profile-info">
          <img 
            src={seller.logoUrl || "https://via.placeholder.com/80"} 
            alt={seller.name} 
            className="seller-logo"
          />
          <div>
            <div className="seller-title-row">
              <h1 className="seller-name">{seller.name}</h1>
              {seller.isVerified && (
                <span className="verified-badge">Ishonchli sotuvchi</span>
              )}
            </div>
            <p className="seller-desc">📍 {seller.location} • {seller.description}</p>
            
            {/* Tegglar / Statuslar */}
            <div className="seller-badges">
              <span className="badge badge-reliability">⭐ {seller.reliabilityLabel}</span>
              <span className="badge badge-time">⏱️ {seller.responseTimeLabel}</span>
              <span className="badge badge-experience">💼 {seller.experienceLabel}</span>
            </div>
          </div>
        </div>

        <div className="seller-actions">
          <button className="btn-follow">+ Kuzatish</button>
          <button className="btn-message">Xabar yuborish</button>
        </div>
      </div>

      <div className="seller-tabs">
        <button className="tab-btn active">Mahsulotlar</button>
        <button className="tab-btn">Kompaniya haqida</button>
      </div>

      <div className="products-grid">
        {seller.products && seller.products.length > 0 ? (
          seller.products.map((prod) => (
            <div key={prod.id} className="product-card">
              <div>
                <div className="product-img-wrapper">
                  <img 
                    src={prod.imageUrl} 
                    alt={prod.name} 
                    className="product-img"
                  />
                </div>
                <h3 className="product-name" title={prod.name}>
                  {prod.name}
                </h3>
              </div>

              <div className="product-footer">
                <div className="product-price">
                  {prod.price?.toLocaleString()} so'm
                </div>
                <div className="product-meta">
                  <span>Omborda bor</span>
                  <button className="btn-cart" title="Savatga qo'shish">🛒</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products">Hozircha mahsulotlar topilmadi.</div>
        )}
      </div>

    </div>
  )
}

export default SellerCard