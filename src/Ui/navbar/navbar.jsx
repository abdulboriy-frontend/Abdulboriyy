import "./navbar.css";
import { Link } from "react-router-dom";
import { User, ShoppingCart, Search } from "lucide-react";
import Background from "../../assets/Background.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Background} alt="Logo" className="logo-img" />
        <h2>Minibaba</h2>
      </div>

      <div className="search">
        <Search className="dd" />
        <input
          type="text"
          placeholder="Mahsulot yoki sotuvchini qidiring..."
        />
        <button>Qidirish</button>
      </div>

      <div className="menu">
        <a href="#">Kategoriyalar</a>
        <a href="#">Yordam</a>

        <div className="icon">
          <p></p>

          <Link to="/login" className="login-link">
            Kirish
            <User className="i" />
          </Link>
        </div>

        <div className="icon">
          <p></p>

          <div className="r">
            <ShoppingCart className="d" />
            Savat
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;