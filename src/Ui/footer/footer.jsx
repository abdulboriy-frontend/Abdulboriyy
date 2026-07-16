import "./footer.css";

import { Package, Globe, Mail, Phone, ChevronRight, Apple, Play,} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer_top">

        <div className="footer_box">
          <div className="logo">
            <Package size={28} />
            <h2>Minibaba</h2>
          </div>

          <p className="desc">
            O'zbekistondagi eng yirik ulgurji savdo platformasi.
            Biz tadbirkorlar va zavodlarni bitta joyga jamlaymiz.
          </p>

          <div className="social">

            <a href="#" className="icon">
              <Globe size={18} />
            </a>

            <a href="#" className="icon">
              <Mail size={18} />
            </a>

            <a href="#" className="icon">
              <Phone size={18} />
            </a>

          </div>
        </div>

        <div className="footer_box">
          <h3>Xaridorlar uchun</h3>

          <a href="#">
            <ChevronRight size={16} />
            Qanday buyurtma berish
          </a>

          <a href="#">
            <ChevronRight size={16} />
            To'lov usullari
          </a>

          <a href="#">
            <ChevronRight size={16} />
            Yetkazib berish
          </a>

          <a href="#">
            <ChevronRight size={16} />
            Kafolat va qaytarish
          </a>
        </div>

        <div className="footer_box">
          <h3>Sotuvchilar uchun</h3>

          <a href="#">
            <ChevronRight size={16} />
            Sotuvchi bo'lish
          </a>

          <a href="#">
            <ChevronRight size={16} />
            Sotuvchilar qoidalari
          </a>

          <a href="#">
            <ChevronRight size={16} />
            Reklama va marketing
          </a>

          <a href="#">
            <ChevronRight size={16} />
            Logistika yordami
          </a>
        </div>

        <div className="footer_box">
          <h3>Ilovamizni yuklang</h3>

          <p className="desc">
            Har doim aloqada bo'ling va eng yaxshi
            narxlardan xabardor bo'ling.
          </p>

          <button className="store">
            <Apple size={22} />
            <div>
              <small>Download on the</small>
              <span>App Store</span>
            </div>
          </button>

          <button className="store">
            <Play size={20} />
            <div>
              <small>GET IT ON</small>
              <span>Google Play</span>
            </div>
          </button>

        </div>

      </div>

      <div className="footer_bottom">
        © 2024 Minibaba Marketplace. Barcha huquqlar himoyalangan.
      </div>

    </footer>
  );
}

export default Footer;