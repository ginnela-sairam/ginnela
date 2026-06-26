import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Ginnela</h4>
          <p>Building the future of tech, R&D, and unrefusable innovation.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#rnd">R&D Strategy</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <p>Let's build something extraordinary together</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ginnela. All rights reserved. Building the technology empire of tomorrow.</p>
      </div>
    </footer>
  );
}

export default Footer;
