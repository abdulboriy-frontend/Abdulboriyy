import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [mahsulot, setMahsulot] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bittaMahsulotYuklash = async () => {
      try {
        const javob = await fetch(
          "https://uzum-api.onrender.com/api/products"
        );
        const json = await javob.json();

        if (json.success) {
          const topilgan = json.data.find(
            (item) => (item.slug || item.id) == slug
          );

          setMahsulot(topilgan);
        }
      } catch (xatolik) {
        console.error("Xatolik:", xatolik);
      } finally {
        setLoading(false);
      }
    };

    bittaMahsulotYuklash();
  }, [slug]);

  if (loading) return <div className="loading">Yuklanmoqda...</div>;
  if (!mahsulot) return <div className="loading">Mahsulot topilmadi!</div>;

  return (
    <div className="detail-konteyner">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Orqaga qaytish
      </button>

      <div className="detail-tana">
        <div className="detail-chap">
          <div className="katta-rasm">
            <img src={mahsulot.imageUrl} alt={mahsulot.name} />
          </div>
        </div>

        <div className="detail-ong">
          <div className="taglar">
            <span className="yangi-tag">Yangi mahsulot</span>
            <span className="id-tag">
              {mahsulot.slug || mahsulot.id}
            </span>
          </div>

          <h1>{mahsulot.name}</h1>

          <div className="reyting-qism">
            <span>⭐ 4.8</span>
            <span>• 124 ta sharh</span>
            <span>• 500+ sotilgan</span>
          </div>

          <div className="narx-blok">
            <h3>
              Ulgurji narxlar (MOQ: {mahsulot.minOrderQuantity} dona)
            </h3>

            <div className="narx-setka">
              <div className="narx-karta">
                <small>1 - 10 dona</small>
                <span>
                  {mahsulot.price?.toLocaleString()} UZS
                </span>
              </div>

              <div className="narx-karta aktiv">
                <small className="ommabop">OMMABOP</small>
                <small>11 - 50 dona</small>
                <span className="orange-text">
                  {mahsulot.discountedPrice?.toLocaleString()} UZS
                </span>
              </div>

              <div className="narx-karta">
                <small>50+ dona</small>
                <span>
                  {(mahsulot.discountedPrice * 0.95)?.toLocaleString()} UZS
                </span>
              </div>
            </div>
          </div>

          <div className="sotuvchi-blok">
            <div className="sotuvchi-info">
              <img
                src={
                  mahsulot.seller?.logoUrl ||
                  "https://via.placeholder.com/50"
                }
                alt="logo"
              />

              <div>
                <h4>{mahsulot.seller?.name || "Premium Store"}</h4>

                <p>
                  {mahsulot.isVerifiedSeller
                    ? "Tasdiqlangan sotuvchi"
                    : "Oddiy sotuvchi"}
                </p>
              </div>
            </div>

            <button className="dokon-btn">
              Do'konni ko'rish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;