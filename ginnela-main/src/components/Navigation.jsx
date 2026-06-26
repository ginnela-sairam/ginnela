import { useState } from 'react';
import './Navigation.css';
import SecureComms from './SecureComms'; // 1. We imported the portal here!

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">⚡</span>
          <span>Ginnela</span>
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#services" onClick={() => scrollToSection('#services')}>Services</a></li>
          <li><a href="#about" onClick={() => scrollToSection('#about')}>About</a></li>
          <li><a href="#rnd" onClick={() => scrollToSection('#rnd')}>R&D</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('#contact')}>Contact</a></li>
          
          {/* 2. We placed the portal button perfectly inside your menu! */}
          <li style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
            <SecureComms />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
