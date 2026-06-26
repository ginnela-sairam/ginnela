import './About.css';

function About() {
  const creatorInfo = {
    name: 'Sairam Ginnela',
    fullName: 'Ginnela Someswara Sairam Prasad',
    title: 'Founder & Tech Lead',
    mission: 'Build breakthrough technologies that advance science, help humanity, and establish a globally recognized research and innovation ecosystem.',
    education: {
      degree: 'B.Tech (Lateral Entry)',
      branch: 'Electronics and Communication Engineering',
      college: 'VVIT, Nambur, Guntur',
      university: 'JNTUK',
      diplomaPercentage: '90.5%'
    },
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/ginnela-sairam',
        icon: '🐙',
        label: 'View Code'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/someswara-sai-ram-prasad-ginnela',
        icon: '💼',
        label: 'Connect'
      },
      {
        name: 'Email',
        url: 'mailto:rsairam488@gmail.com',
        icon: '✉️',
        label: 'Email'
      }
    ]
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About The Vision</h2>
        
        <div className="about-content">
          {/* Left Side - Mission & Vision */}
          <div className="about-mission">
            <div className="mission-card">
              <h3>🎯 Our Mission</h3>
              <p className="mission-text">
                {creatorInfo.mission}
              </p>
              <div className="mission-pillars">
                <div className="pillar">
                  <span className="pillar-icon">🚀</span>
                  <p><strong>Breakthrough Innovation</strong></p>
                </div>
                <div className="pillar">
                  <span className="pillar-icon">🔬</span>
                  <p><strong>Science-Driven</strong></p>
                </div>
                <div className="pillar">
                  <span className="pillar-icon">🌍</span>
                  <p><strong>Humanity-Focused</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Creator Info */}
          <div className="about-creator">
            <div className="creator-card">
              <div className="creator-header">
                <div className="creator-avatar">
                  <span>{creatorInfo.name.split(' ')[0][0]}{creatorInfo.name.split(' ')[1][0]}</span>
                </div>
                <div className="creator-name-info">
                  <h3>{creatorInfo.name}</h3>
                  <p className="creator-title">{creatorInfo.title}</p>
                  <p className="creator-full-name">{creatorInfo.fullName}</p>
                </div>
              </div>

              <div className="creator-education">
                <p className="edu-label">📚 Education</p>
                <p className="edu-degree">{creatorInfo.education.degree}</p>
                <p className="edu-branch">{creatorInfo.education.branch}</p>
                <p className="edu-college">{creatorInfo.education.college}, {creatorInfo.education.university}</p>
                <p className="edu-achievement">Diploma: {creatorInfo.education.diplomaPercentage} Excellence</p>
              </div>

              <div className="creator-socials">
                <p className="socials-label">Connect & Follow</p>
                <div className="socials-grid">
                  {creatorInfo.socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="social-btn"
                      title={link.name}
                      target={link.name === 'Email' ? '_self' : '_blank'}
                      rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                    >
                      <span className="social-icon">{link.icon}</span>
                      <span className="social-label">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="creator-contact">
                <p className="contact-label">📞 Reach Out</p>
                <div className="contact-links">
                  <a href="mailto:rsairam488@gmail.com" className="contact-link">
                    <span>✉️</span>
                    <span>rsairam488@gmail.com</span>
                  </a>
                  <a href="tel:+919490639055" className="contact-link">
                    <span>📱</span>
                    <span>+91 9490639055</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;