import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";
import "./Seller.css";

const Seller = () => {
  const navigate = useNavigate();

  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSellers() {
      try {
        const res = await fetch(
          "https://uzum-api.onrender.com/api/sellers"
        );

        const data = await res.json();

        setSellers(data.data || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getSellers();
  }, []);

  if (loading) {
    return (
      <div className="loading">
       
      </div>
    );
  }

  return (
    <div className="seller-container">

      <h1 className="seller-title">
        Tasdiqlangan sotuvchilar
      </h1>

      <div className="seller-grid">

        {sellers.map((seller) => (

          <div
            className="seller-card"
            key={seller.id}
          >

            <div className="seller-logo-box">

              <img
                src={seller.logoUrl}
                alt={seller.name}
                className="seller-logo"
              />

            </div>

            <h2 className="seller-name">
              {seller.name}
            </h2>

            <div className="seller-location">

              <MapPin size={15} />

              <span>
                {seller.location}
              </span>

            </div>

            <p className="seller-experience">
              {seller.experienceLabel}
            </p>

            <div className="seller-stats">

              <div className="stat-item">

                <ShieldCheck
                  size={16}
                  color="#ff6600"
                />

                <strong>
                  {seller.reliabilityScore}%
                </strong>

                <small>
                  Ishonchlilik
                </small>

              </div>

              <div className="stat-item">

                <Clock3
                  size={16}
                  color="#ff6600"
                />

                <strong>
                  {seller.responseTimeLabel}
                </strong>

                <small>
                  Javob vaqti
                </small>

              </div>

            </div>

            <button
              className="seller-btn"
              onClick={() =>
                navigate(`/seller/${seller.slug}`)
              }
            >
              Sotuvchi sahifasi

              <ArrowRight size={18} />

            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Seller;