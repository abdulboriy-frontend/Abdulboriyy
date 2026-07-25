import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetail({ onAddToCart }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [sanoq, setSanoq] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [variant, setVariant] = useState("Pro-Max X1");

  useEffect(() => {
    fetch("https://uzum-api.onrender.com/api/products")
      .then((res) => res.json())
      .then((json) => {
        if (json?.success) {
          const topilgan = json.data.find((item) => (item.slug || item.id) == slug);
          setProduct(topilgan);
        }
      })
      .catch(console.error);
  }, [slug]);

  if (!product) return <div className="loading">Yuklanmoqda...</div>;

  
  const basePrice1 = product.price || 1200;
  const basePrice2 = product.discountedPrice || 1050;
  const basePrice3 = 890;

  const price1 = basePrice1 * sanoq;
  const price2 = basePrice2 * sanoq;
  const price3 = basePrice3 * sanoq;

  
  const jamiNarx = sanoq > 50 ? price3 : sanoq >= 11 ? price2 : price1;

  const rasmlar = product.images || Array(5).fill(product.imageUrl || "https://via.placeholder.com/400");
  const variants = ["Standard", "Eco-Flow", "Pro-Max X1", "Heavy Duty", "Compact"];

 
  const handleCartClick = () => {
    if (onAddToCart) {
      onAddToCart(sanoq);
    }
  };

  return (
    <div className="product-detail-page">
      <div className="detail-container">
        <div className="top-header-line">
          <button className="back-btn" onClick={() => navigate(-1)}>← Orqaga</button>
        </div>

        <div className="detail-main-grid">
          <div className="gallery-section">
            <div className="main-image-box">
              <img src={rasmlar[0]} alt={product.name} />
            </div>
            <div className="thumbnail-list">
              {rasmlar.slice(0, 5).map((img, i) => (
                <div key={i} className={`thumb-item ${i === 0 ? "active" : ""}`}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="info-section">
            <div className="badge-row">
              <span className="badge-new">Yangi mahsulot</span>
              <span className="product-id">ID: {product.slug || product.id || "48293021-X200"}</span>
            </div>

            <h1 className="product-title">{product.name}</h1>

            <div className="rating-row">
              <span className="stars">☆☆☆☆☆ 4.8</span>
              <span>• 124 ta sharh</span>
              <span>• 500+ sotilgan</span>
            </div>

            <div className="wholesale-box">
              <div className="wholesale-header">
                <h3>Ulgurji narxlar</h3>
                <span className="moq-badge">📦 MOQ: {product.minOrderQuantity || 2} dona</span>
              </div>

              <div className="price-cards-grid">
                <div className={`price-card ${sanoq <= 10 ? "active" : ""}`} onClick={() => setSanoq(1)}>
                  <small>1 - 10 dona</small>
                  <span className="price-value">${price1}</span>
                </div>

                <div className={`price-card ${sanoq >= 11 && sanoq <= 50 ? "active" : ""}`} onClick={() => setSanoq(11)}>
                  <small className="badge-popular">OMMABOP</small>
                  <small>11 - 50 dona</small>
                  <span className="price-value orange">${price2}</span>
                </div>

                <div className={`price-card ${sanoq > 50 ? "active" : ""}`} onClick={() => setSanoq(51)}>
                  <small>50+ dona</small>
                  <span className="price-value">${price3}</span>
                </div>
              </div>
            </div>

            <div className="variant-section">
              <label>KONFIGURATSIYANI TANLANG (VARIANT 5 / 10)</label>
              <div className="variant-buttons">
                {variants.map((v) => (
                  <button
                    key={v}
                    className={`variant-btn ${variant === v ? "active" : ""}`}
                    onClick={() => setVariant(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="seller-card">
              <div className="seller-info">
                <img src={product.seller?.logoUrl || "https://via.placeholder.com/48"} alt="" />
                <div>
                  <h4>{product.seller?.name || "TechnoMach Tashkent MCHJ"}</h4>
                  <div className="seller-tags">
                    <span className="verified-tag">✔ TASDIQLANGAN</span>
                    <span className="location-tag">📍 Tashkent, UZ • 8 yillik tajriba</span>
                  </div>
                </div>
              </div>
              <button className="store-btn">Do'konni ko'rish</button>
            </div>
          </div>
        </div>

        {/* Tablar */}
        <div className="tabs-container">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
              onClick={() => setActiveTab("description")}
            >
              Tavsif
            </button>
            <button
              className={`tab-btn ${activeTab === "delivery" ? "active" : ""}`}
              onClick={() => setActiveTab("delivery")}
            >
              Yetkazib berish
            </button>
            <button
              className={`tab-btn ${activeTab === "review" ? "active" : ""}`}
              onClick={() => setActiveTab("review")}
            >
              Sharhlar (124)
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && (
              <div className="description-layout">
                <div className="desc-left">
                  <h3>Mahsulot haqida ma'lumot</h3>
                  <p>{product.description || "Model X200 sanoat konveyer tizimi yuqori yuklamalar ostida ishlashga mo'ljallangan. Uning modulli tuzilishi istalgan ishlab chiqarish liniyasiga oson integratsiya qilish imkonini beradi."}</p>

                  <div className="specs-grid">
                    <div className="spec-item"><small>QUVVATI</small><strong>5.5 kW / 7.5 HP</strong></div>
                    <div className="spec-item"><small>TEZLIGI</small><strong>0.5 - 2.0 m/s</strong></div>
                    <div className="spec-item"><small>YUK KO'TARISHI</small><strong>500 kg / m</strong></div>
                    <div className="spec-item"><small>KAFOLAT</small><strong>24 oy kafolat</strong></div>
                  </div>
                </div>

                <div className="desc-right">
                  <h3>Logistika</h3>
                  <div className="logistics-item">
                    <span>🚚</span>
                    <div>
                      <strong>Tezkor yetkazib berish</strong>
                      <p>Toshkent bo'ylab 24 soat ichida.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "delivery" && (
              <div className="tab-simple-text">
                <p>🚚 Toshkent bo'ylab 24 soat ichida yetkaziladi.</p>
                <p>📦 Viloyatlarga 2-5 ish kunida.</p>
              </div>
            )}

            {activeTab === "review" && (
              <div className="tab-simple-text">
                <h3>⭐⭐⭐⭐⭐ 4.8</h3>
                <p>Juda sifatli va zo'r mahsulot!</p>
              </div>
            )}
          </div>
        </div>

        <div className="bottom-bar-panel">
          <div className="summary-price">
            <small>Umumiy miqdor:</small>
            <h2>${Number(jamiNarx).toFixed(2)}</h2>
          </div>

          <div className="counter-controls">
            <button onClick={() => setSanoq((p) => Math.max(1, p - 1))}>-</button>
            <span>{sanoq}</span>
            <button onClick={() => setSanoq((p) => p + 1)}>+</button>
          </div>

          <div className="action-buttons">
            <button className="btn-chat">💬 Chat orqali yozish</button>
            <button className="btn-rfq">📋 RFQ</button>
            <button className="btn-cart" onClick={handleCartClick}>
              🛒 Savatga qo'shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;