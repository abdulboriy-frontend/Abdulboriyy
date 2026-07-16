import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className="hdr">
      <div className="hdr-l">
        <div className="logo-img">
          <i className="fas fa-box-open"></i>
        </div>
        <span className="logo-txt">Minibaba</span>
      </div>
      
      <div className="hdr-r">
        <div className="lang">
          <i className="fas fa-globe"></i>
          <span>O'zbekcha</span>
        </div>
        <button className="btn">Yordam</button>
      </div>
    </header>
  );
}