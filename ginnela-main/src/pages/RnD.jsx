import './RnD.css';

function RnD() {
  const initiatives = [
    {
      icon: '🏆',
      title: 'Patent Architecture & Royalties',
      description: 'Building and commercializing proprietary technologies with focus on long-term royalty streams'
    },
    {
      icon: '🌍',
      title: 'Open Innovation Ecosystems',
      description: 'Participating in global challenges, reward projects, and competitive problem-solving arenas'
    },
    {
      icon: '🤝',
      title: 'Strategic Government Alignment',
      description: 'Leveraging government schemes to accelerate high-growth technology initiatives'
    },
    {
      icon: '💼',
      title: 'Idea to Execution',
      description: 'Securing grants and transforming high-potential concepts into production models'
    }
  ];

  return (
    <section id="rnd" className="rnd">
      <div className="container">
        <h2 className="section-title">R&D Strategy & Innovation</h2>
        <p className="section-subtitle">Building the Technology Empire of Tomorrow</p>
        
        <div className="rnd-intro">
          <p>Our long-term roadmap focuses on sustainable innovation, commercial monetization, and staying ahead of the industry curve through rigorous Research & Development.</p>
        </div>

        <div className="initiatives-grid">
          {initiatives.map((init, idx) => (
            <div key={idx} className="initiative-card" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="init-icon">{init.icon}</div>
              <h3>{init.title}</h3>
              <p>{init.description}</p>
            </div>
          ))}
        </div>

        <div className="rnd-value">
          <div className="value-card">
            <h3>Our Ultimate Goal</h3>
            <p>Building a long-term technology and product empire rooted in rigorous R&D, creating solutions that are intellectually superior and commercially unrefusable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RnD;
