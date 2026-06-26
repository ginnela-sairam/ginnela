import './Services.css';

function Services() {
  const services = [
    {
      icon: '🔧',
      title: 'Enterprise Problem Solving',
      description: 'Solve critical technical and operational challenges for enterprises of all sizes with targeted optimization and gap-filling analysis.',
      features: ['Technical Audits', 'Gap Analysis', 'Optimization Reports']
    },
    {
      icon: '🚀',
      title: 'End-to-End Product Engineering',
      description: 'Transform ideas into production-ready products with full-stack development, mobile deployment, and rapid prototyping.',
      features: ['Mobile Development', 'Rapid Prototyping', 'Deployment Services']
    },
    {
      icon: '🤖',
      title: 'Human-Centric Tech Audits',
      description: 'Identify where software fails human expectations and fill functional and emotional gaps with better tools.',
      features: ['UX Analysis', 'Performance Audits', 'Innovation Recommendations']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">Core Services & Capabilities</p>
        
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="services-highlight">
          <h3>Our Approach</h3>
          <div className="highlight-items">
            <div className="highlight-item">
              <h4>🎯 Targeted Optimization</h4>
              <p>We solve critical technical challenges for major, medium, and minor companies</p>
            </div>
            <div className="highlight-item">
              <h4>📊 Gap-Filling Analysis</h4>
              <p>Systematically find limitations and deliver detailed optimization reports</p>
            </div>
            <div className="highlight-item">
              <h4>💡 Proactive Development</h4>
              <p>Provide development advice backed by comprehensive analysis and POCs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
