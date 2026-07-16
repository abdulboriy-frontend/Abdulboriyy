import React from "react";
import "./hero.css";
import {
  ChevronRight,
  Menu,
  Tv,
  Shirt,
  Wrench,
  Apple,
  Car,
  Home as HomeIcon,
  Baby,
  Sparkles,
} from "lucide-react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <Menu size={18} />
            <span>Kategoriyalar</span>
          </div>

          <div className="category-list">
            <div className="category-item">
              <div className="category-info">
                <Tv className="category-icon" />
                <span>Elektronika</span>
              </div>
              <ChevronRight className="category-arrow" />
            </div>

            <div className="category-item">
              <div className="category-info">
                <Shirt className="category-icon" />
                <span>Kiyim-kechak</span>
              </div>
              <ChevronRight className="category-arrow" />
            </div>

            <div className="category-item">
              <div className="category-info">
                <Wrench className="category-icon" />
                <span>Qurilish mollari</span>
              </div>
              <ChevronRight className="category-arrow" />
            </div>

            <div className="category-item">
              <div className="category-info">
                <Apple className="category-icon" />
                <span>Ulgurji oziq-ovqat</span>
              </div>
              <ChevronRight className="category-arrow" />
            </div>

            <div className="category-item">
              <div className="category-info">
                <Car className="category-icon" />
                <span>Avto qismlar</span>
              </div>
              <ChevronRight className="category-arrow" />
            </div>

            <div className="category-item">
              <div className="category-info">
                <HomeIcon className="category-icon" />
                <span>Uy buyumlari</span>
              </div>
              <ChevronRight className="category-arrow" />
            </div>

            <div className="category-item">
              <div className="category-info">
                <Baby className="category-icon" />
                <span>Bolalar uchun</span>
              </div>
              <ChevronRight className="category-arrow" />
            </div>

            <div className="category-item">
              <div className="category-info">
                <Sparkles className="category-icon" />
                <span>Go'zallik</span>
              </div>
              <ChevronRight className="category-arrow" />
            </div>
          </div>
        </div>

        <div className="hero-banner">
          <div className="hero-content">
            <span className="hero-tag">MINIBABA LOGISTICS</span>

            <h1>O‘zbekiston bo‘ylab tez yetkazib berish</h1>

            <p>
              Eng arzon ulgurji narxlar va ishonchli sotuvchilar bitta
              platformada.
            </p>

            <button className="hero-btn">Batafsil</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;