import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Building the Future of Tech, R&D, and <span className="highlight">Unrefusable Innovation</span>
        </h1>
        <p className="hero-subtitle">
          Solving complex technical bottlenecks for enterprises, building high-value intellectual property, and engineering human-centric products from the ground up.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => {
            const contact = document.querySelector('#contact');
            contact?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Submit a Problem Statement
          </button>
          <button className="btn btn-secondary" onClick={() => {
            const contact = document.querySelector('#contact');
            contact?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Schedule a Technical Call
          </button>
        </div>
        <div className="hero-philosophy">
          <p><strong>Our Philosophy:</strong> We focus on deep problem-solving, continuous gap-filling, and creating high-impact tech solutions that companies simply cannot refuse.</p>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Hero;
