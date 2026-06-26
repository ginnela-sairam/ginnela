import { useState } from 'react';
import './Contact.css';

function Contact() {
  const creatorEmail = 'rsairam488@gmail.com';
  const creatorPhone = '+91 9490639055';
  const bankDetails = {
    name: 'GINNELA SOMESWARA SAI RAM PRASAD',
    accountNumber: '41351762293',
    ifscCode: 'SBIN0020542',
    bankName: 'State Bank of India'
  };
  const upiDetails = [
    '9490639055@inhdfc',
    '9490639055-3@ybl'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'problem',
    message: ''
  });

  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', type: 'problem', message: '' });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Build Something Unrefusable</h2>
        <p className="section-subtitle">Connect with us today</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>How We Can Work Together</h3>
            
            <div className="info-item">
              <h4>🏢 For Enterprises & Founders</h4>
              <p>Request a detailed tech audit or product development suggestion report for your platform</p>
            </div>
            
            <div className="info-item">
              <h4>💰 For Investors & VCs</h4>
              <p>Access our current pipeline of functional prototypes and patent-pending R&D projects</p>
            </div>
            
            <div className="info-item">
              <h4>🤝 Collaborate With Us</h4>
              <p>High-level technical briefings, Zoom syncs, and strategic calls with global high-achievers</p>
            </div>

            {/* Direct Contact Section */}
            <div className="direct-contact">
              <h4>📞 Direct Contact</h4>
              <div className="contact-methods">
                <a href={`mailto:${creatorEmail}`} className="contact-method-link">
                  <span className="method-icon">✉️</span>
                  <div className="method-info">
                    <p className="method-label">Email</p>
                    <p className="method-value">{creatorEmail}</p>
                  </div>
                </a>
                <a href={`tel:${creatorPhone}`} className="contact-method-link">
                  <span className="method-icon">📱</span>
                  <div className="method-info">
                    <p className="method-label">Phone</p>
                    <p className="method-value">{creatorPhone}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Payment Details Section */}
            <div className="payment-section">
              <button 
                className="btn btn-secondary payment-toggle"
                onClick={() => setShowPaymentDetails(!showPaymentDetails)}
              >
                💳 {showPaymentDetails ? 'Hide' : 'Show'} Payment Details
              </button>
              
              {showPaymentDetails && (
                <div className="payment-details">
                  {/* UPI Details */}
                  <div className="payment-method">
                    <h4>📱 UPI Payment</h4>
                    <div className="payment-method-content">
                      {upiDetails.map((upi, index) => (
                        <div key={index} className="payment-item">
                          <span className="payment-value">{upi}</span>
                          <button 
                            className="copy-btn"
                            onClick={() => copyToClipboard(upi)}
                            title="Copy to clipboard"
                          >
                            📋
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bank Account Details */}
                  <div className="payment-method">
                    <h4>🏦 Bank Account</h4>
                    <div className="payment-method-content">
                      <div className="bank-detail-row">
                        <span className="label">Account Holder:</span>
                        <div className="value-with-copy">
                          <span className="payment-value">{bankDetails.name}</span>
                          <button 
                            className="copy-btn"
                            onClick={() => copyToClipboard(bankDetails.name)}
                            title="Copy to clipboard"
                          >
                            📋
                          </button>
                        </div>
                      </div>
                      <div className="bank-detail-row">
                        <span className="label">Account Number:</span>
                        <div className="value-with-copy">
                          <span className="payment-value">{bankDetails.accountNumber}</span>
                          <button 
                            className="copy-btn"
                            onClick={() => copyToClipboard(bankDetails.accountNumber)}
                            title="Copy to clipboard"
                          >
                            📋
                          </button>
                        </div>
                      </div>
                      <div className="bank-detail-row">
                        <span className="label">IFSC Code:</span>
                        <div className="value-with-copy">
                          <span className="payment-value">{bankDetails.ifscCode}</span>
                          <button 
                            className="copy-btn"
                            onClick={() => copyToClipboard(bankDetails.ifscCode)}
                            title="Copy to clipboard"
                          >
                            📋
                          </button>
                        </div>
                      </div>
                      <div className="bank-detail-row">
                        <span className="label">Bank:</span>
                        <span className="payment-value">{bankDetails.bankName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">I am interested in:</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="problem">Submitting a Problem Statement</option>
                <option value="tech-call">Scheduling a Technical Call</option>
                <option value="partnership">Partnership & Collaboration</option>
                <option value="investment">Investment Opportunity</option>
                <option value="payment">Payment Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project or inquiry..."
                rows="5"
              />
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
