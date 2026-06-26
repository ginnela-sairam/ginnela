import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import FloatingLines from './components/FloatingLines.jsx';
import ginnelaLogo from './assets/ginnela-logo-real.jpg';
import './App.css';

/* ─────────────────────────────────────────
   SHARED LAYOUT (Background + Nav + WhatsApp)
───────────────────────────────────────── */
function SharedLayout({ children, currentPage, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#030c1c] text-gray-200 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">

      {/* ── ANIMATED BACKGROUND — shader native dark blue + more electric lines ── */}
      <div className="background-container">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[7, 12, 7]}
          lineDistance={[8, 6, 7]}
          topWavePosition={{ x: 10.0, y: 0.5, rotate: -0.4 }}
          middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.2 }}
          bottomWavePosition={{ x: 2.0, y: -0.7, rotate: -1.0 }}
          animationSpeed={0.5}
          interactive={true}
          bendRadius={15}
          bendStrength={-0.3}
          parallax={true}
          parallaxStrength={0.1}
          mouseDamping={0.05}
          mixBlendMode="normal"
        />
      </div>

      <div className="relative z-10 flex flex-col w-full min-h-screen">

        {/* ── NAVIGATION ── */}
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">

            {/* Logo */}
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 group">
              <img
                src={ginnelaLogo}
                alt="Ginnela Logo"
                className="w-12 h-12 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-200"
                style={{filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.4))'}}
              />
              <span className="text-xl font-black tracking-tight text-white">
                Ginnela
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-400">
              <button onClick={() => navigate('/')} className={`hover:text-white transition-colors ${currentPage === '/' ? 'text-cyan-400' : ''}`}>Home</button>
              <button onClick={() => navigate('/about')} className={`hover:text-white transition-colors ${currentPage === '/about' ? 'text-cyan-400' : ''}`}>About</button>
              <button onClick={(e) => { if (currentPage !== '/') { navigate('/'); setTimeout(() => document.querySelector('#services')?.scrollIntoView({behavior:'smooth'}), 150); } else { document.querySelector('#services')?.scrollIntoView({behavior:'smooth'}); } }} className="hover:text-white transition-colors">Services</button>
              <button onClick={() => navigate('/web-services')} className={`hover:text-white transition-colors ${currentPage === '/web-services' ? 'text-orange-400' : ''}`}>
                <span className="flex items-center gap-1.5">🌐 Web Services <span className="text-[10px] px-1.5 py-0.5 bg-orange-500/20 border border-orange-500/40 text-orange-400 rounded-full font-bold tracking-wide">NEW</span></span>
              </button>
              <button onClick={() => { if (currentPage !== '/') { navigate('/'); setTimeout(() => document.querySelector('#rd')?.scrollIntoView({behavior:'smooth'}), 150); } else { document.querySelector('#rd')?.scrollIntoView({behavior:'smooth'}); } }} className="hover:text-white transition-colors">R&amp;D</button>
              <button onClick={() => { if (currentPage !== '/') { navigate('/'); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}), 150); } else { document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); } }} className="hover:text-white transition-colors">Contact</button>
            </div>

            {/* CTA */}
            <a href="#contact" onClick={(e) => { if (currentPage !== '/') { e.preventDefault(); navigate('/'); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}), 150); } }}
              className="hidden lg:block px-5 py-2.5 bg-cyan-500 text-sm font-bold text-black rounded-xl hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/30">
              Get in Touch
            </a>

            {/* Hamburger */}
            <button className="lg:hidden text-gray-400" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-3">
              {[['Home','/'],['About','/about'],['Services','#services'],['🌐 Web Services (NEW)','/web-services'],['R&D','#rd'],['Contact','#contact']].map(([label, href]) => (
                <button key={label} onClick={() => { setMobileOpen(false); if (href.startsWith('/')) navigate(href); else document.querySelector(href)?.scrollIntoView({behavior:'smooth'}); }}
                  className="block w-full text-left text-gray-300 hover:text-white py-2 text-sm font-semibold">
                  {label}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* ── PAGE CONTENT ── */}
        {children}

      </div>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <a
        href="https://wa.me/917730974773?text=Hello%20Ginnela%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 hover:shadow-green-400/60 transition-all duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────── */
function HomePage({ navigate }) {
  const [activeTab, setActiveTab] = useState('enterprise');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  const upiIds = ['9490639055@inhdfc', '9490639055-3@ybl'];
  const bankDetails = { name: 'GINNELA SOMESWARA SAI RAM PRASAD', account: '41351762293', ifsc: 'SBIN0020542', bank: 'State Bank of India' };

  return (
    <>
      {/* ── HERO ── */}
      <header id="mission" className="relative pt-28 pb-20 px-6 lg:px-12 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-cyan-400/50 bg-black/60 backdrop-blur-sm text-cyan-300 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Deep Tech · R&amp;D · Product Engineering</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6" style={{textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,1)'}}>
          Building the Future of<br className="hidden md:block" />
          Tech, R&amp;D, and{' '}
          <span style={{color: '#67e8f9', textShadow: '0 0 30px rgba(6,182,212,1), 0 0 60px rgba(6,182,212,0.6), 0 2px 4px rgba(0,0,0,1)'}}>
            Unrefusable Innovation.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4 bg-black/40 backdrop-blur-sm p-5 rounded-2xl border border-white/10 shadow-xl">
          We solve complex technical problems for businesses, build high-value intellectual property, and engineer human-centered products from the ground up — across electronics, software, and research.
        </p>

        <div className="p-5 border border-cyan-500/20 bg-black/40 backdrop-blur-md rounded-2xl max-w-xl shadow-2xl mb-10">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-2">Our Philosophy</span>
          <p className="text-sm text-gray-300 italic">
            "We focus on deep problem-solving, continuous gap-filling, and creating high-impact tech solutions that companies simply cannot refuse."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-lg mx-auto">
          <a href="#contact" className="px-8 py-4 font-bold text-black transition-all duration-300 bg-cyan-400 rounded-xl hover:bg-cyan-300 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/40">
            Submit a Problem Statement
          </a>
          <a href="#services" className="px-8 py-4 font-bold text-gray-300 transition-all duration-300 border border-white/20 rounded-xl hover:text-white hover:border-cyan-400/60 hover:bg-cyan-600/10">
            Explore Services
          </a>
        </div>
      </header>

      {/* ── WHAT WE DO / SERVICES ── */}
      <section id="services" className="py-24 px-6 lg:px-12 bg-black/50 backdrop-blur-lg border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-3">What We Do</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Services & Capabilities</h2>
            </div>
            <div className="inline-flex p-1.5 bg-black/60 border border-white/10 rounded-2xl">
              <button onClick={() => setActiveTab('enterprise')} className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${activeTab === 'enterprise' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}>
                Enterprise Consulting
              </button>
              <button onClick={() => setActiveTab('engineering')} className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${activeTab === 'engineering' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}>
                Product Engineering
              </button>
            </div>
          </div>

          {activeTab === 'enterprise' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>,
                  title: 'Targeted Problem Solving',
                  desc: 'We identify and resolve your most critical technical and operational bottlenecks — delivering working solutions, not just reports.'
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.003 9.003 0 1020.945 11H11V3.055z"/>,
                  title: 'Gap Analysis & Audits',
                  desc: 'We scan your existing systems to find what\'s failing end-users and where your biggest growth opportunities are hiding.'
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>,
                  title: 'Optimization Reports',
                  desc: 'Actionable technical reports with proof-of-concepts — delivered directly to your team or executive leadership.'
                }
              ].map((s, i) => (
                <div key={i} className="p-7 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="w-11 h-11 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-5 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'engineering' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>,
                  title: 'Idea to Real Product',
                  desc: 'Turning raw ideas into fully built products — we help secure grants and fund the entire journey from concept to launch.'
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V7a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z"/>,
                  title: 'Mobile App Development',
                  desc: 'Full-stack mobile applications built, tested, and deployed — with security audits and performance optimization included.'
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>,
                  title: 'Rapid Prototyping',
                  desc: 'Fast, functional prototypes with detailed technical breakdowns — built for VCs and founders who need to validate concepts quickly.'
                }
              ].map((s, i) => (
                <div key={i} className="p-7 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="w-11 h-11 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-5 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon.props?.d}/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── R&D ── */}
      <section id="rd" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-3">Long-Term Strategy</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">R&amp;D Roadmap &amp; IP Strategy</h2>
            <p className="text-gray-400 text-sm">Building sustainable innovation through intellectual property, open challenges, and strategic partnerships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              { tag: 'IP', title: 'Patents & Royalties', desc: 'Building proprietary technologies designed for long-term commercial value — developing patent portfolios and generating royalty streams from owned intellectual property.' },
              { tag: 'AU', title: 'Human-Centered Audits', desc: 'Daily diagnostics across consumer software to find exactly where products fail real users — then building better tools to fill those gaps.' },
              { tag: 'OI', title: 'Open Innovation', desc: 'Consistently entering global open challenges, client reward projects, and competitive problem-solving arenas to push our capabilities to the edge.' },
              { tag: 'GO', title: 'Government Schemes', desc: 'Aligning our research roadmap with central and state government startup acceleration programs to unlock additional support and resources.' }
            ].map(item => (
              <div key={item.tag} className="p-7 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6 lg:px-12 bg-black/50 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Let's Build Something Unrefusable</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Whether you're a VC looking for early-stage prototypes, a business with a technical problem, or an organization with a project grant — we want to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left */}
            <div className="space-y-5">
              {[
                { icon: '🏢', title: 'For Enterprises & Founders', desc: 'Request a tech audit or product development report for your platform.' },
                { icon: '💰', title: 'For Investors & VCs', desc: 'Access our pipeline of functional prototypes and R&D projects.' },
                { icon: '🤝', title: 'Collaborate', desc: 'Technical calls, Zoom syncs, and strategy sessions worldwide.' }
              ].map(item => (
                <div key={item.title} className="p-5 bg-black/40 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all">
                  <h4 className="font-bold text-white text-sm mb-1">{item.icon} {item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}

              {/* Direct contact */}
              <div className="p-5 bg-black/40 border border-white/10 rounded-xl space-y-3">
                <h4 className="font-bold text-white text-sm mb-2">📞 Direct Contact</h4>
                <a href="mailto:rsairam488@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  rsairam488@gmail.com
                </a>
                <a href="tel:+919490639055" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  +91 9490639055
                </a>
              </div>

              {/* Payment */}
              <div className="p-5 bg-black/40 border border-white/10 rounded-xl">
                <button onClick={() => setShowPayment(!showPayment)} className="w-full flex items-center justify-between text-sm font-bold text-white">
                  <span>💳 Payment Details</span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${showPayment ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {showPayment && (
                  <div className="mt-5 space-y-5">
                    <div>
                      <p className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">📱 UPI IDs</p>
                      {upiIds.map(upi => (
                        <div key={upi} className="flex items-center justify-between py-2 border-b border-white/5">
                          <span className="text-sm text-gray-200 font-mono">{upi}</span>
                          <button onClick={() => copyToClipboard(upi, upi)} className="text-xs px-2 py-1 rounded-lg bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-600/40 transition-all">
                            {copied === upi ? '✓' : 'Copy'}
                          </button>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">🏦 Bank Account</p>
                      {[{l:'Name',v:bankDetails.name},{l:'Account No.',v:bankDetails.account},{l:'IFSC',v:bankDetails.ifsc},{l:'Bank',v:bankDetails.bank}].map(item => (
                        <div key={item.l} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <div><p className="text-xs text-gray-500">{item.l}</p><p className="text-sm text-white font-mono">{item.v}</p></div>
                          {item.l !== 'Bank' && <button onClick={() => copyToClipboard(item.v, item.l)} className="text-xs px-2 py-1 rounded-lg bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-600/40 transition-all">{copied === item.l ? '✓' : 'Copy'}</button>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="p-7 border border-white/10 bg-black/50 backdrop-blur-xl rounded-2xl shadow-2xl">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <p className="text-emerald-400 font-bold mb-2">Message Sent!</p>
                  <p className="text-xs text-gray-400 mb-5">We'll get back to you soon.</p>
                  <button onClick={() => setFormSubmitted(false)} className="text-xs text-cyan-400 underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">Name</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition text-sm" placeholder="Your name"/>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">Email</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition text-sm" placeholder="you@company.com"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">Organization</label>
                    <input type="text" name="organization" value={formData.organization} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition text-sm" placeholder="Your company"/>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">Message</label>
                    <textarea name="message" required rows="4" value={formData.message} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition resize-none text-sm" placeholder="Describe your project or challenge..."/>
                  </div>
                  <button type="submit" className="w-full px-8 py-3.5 font-bold text-black bg-cyan-400 rounded-xl hover:bg-cyan-300 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30 transition-all">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WEB SERVICES TEASER ── */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-black/60 to-orange-950/20 border-t border-orange-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>New Service
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                🌐 Ginnela Web Services
              </h2>
              <p className="text-orange-300 font-bold text-lg mb-1">Your Partner in Digital Bharat!</p>
              <p className="text-gray-400 text-sm max-w-lg">Get your business online today. Professional websites built fast, affordable, and right — starting at just ₹1,999.</p>
            </div>
            <button onClick={() => navigate('/web-services')}
              className="shrink-0 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black rounded-xl hover:scale-105 transition-all shadow-xl shadow-orange-500/30 text-sm">
              View All Plans →
            </button>
          </div>

          {/* Mini pricing preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: 'The Business Launchpad', sub: 'Start-up & Solo Ventures', price: '₹1,999', color: 'border-blue-500/30 bg-blue-900/10', tag: 'text-blue-400', features: ['3-Page Website', '.IN/.COM Domain', 'Mobile-Optimized'] },
              { name: 'The Professional', sub: 'Scaling & Services Businesses', price: '₹4,999', color: 'border-emerald-500/40 bg-emerald-900/10 ring-1 ring-emerald-500/30', tag: 'text-emerald-400', badge: '⭐ Popular', features: ['8 Pages', 'WhatsApp Integration', 'Custom Design + SEO'] },
              { name: 'The Custom Cloud', sub: 'Enterprise & Full-Stack', price: '₹12,999+', color: 'border-indigo-500/30 bg-indigo-900/10', tag: 'text-indigo-400', features: ['User Logins', 'Supabase Database', 'File Cloud Storage'] }
            ].map(p => (
              <div key={p.name} className={`p-6 border rounded-2xl ${p.color} relative`}>
                {p.badge && <span className="absolute -top-3 left-4 text-xs bg-emerald-500 text-black px-3 py-1 rounded-full font-black">{p.badge}</span>}
                <h4 className="text-white font-black text-base mb-1">{p.name}</h4>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${p.tag}`}>{p.sub}</p>
                <p className="text-3xl font-black text-white mb-4">{p.price} <span className="text-gray-500 text-sm font-normal">one-time</span></p>
                <ul className="space-y-1 mb-5">
                  {p.features.map(f => <li key={f} className="text-xs text-gray-300 flex items-center gap-1.5"><span className="text-cyan-400">✓</span>{f}</li>)}
                </ul>
                <button onClick={() => navigate('/web-services')}
                  className="w-full py-2 text-xs font-bold border border-white/20 rounded-xl text-gray-300 hover:border-orange-400/60 hover:text-white hover:bg-orange-500/10 transition-all">
                  See Full Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black/70 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-8 mb-6 border-b border-white/5">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <img src={ginnelaLogo} alt="Ginnela Logo" className="w-8 h-8 object-contain" />
                <span className="text-lg font-black text-white">Ginnela</span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">Building breakthrough technologies that advance science and help humanity.</p>
            </div>
            <div className="flex gap-12">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Links</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                  <li><button onClick={() => navigate('/web-services')} className="hover:text-orange-400 transition-colors text-left">🌐 Web Services</button></li>
                  <li><a href="#rd" className="hover:text-cyan-400 transition-colors">R&D</a></li>
                  <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Reach Us</p>
                <ul className="space-y-2 text-xs font-mono text-gray-400">
                  <li><a href="tel:+919490639055" className="hover:text-cyan-400">+91 9490639055</a></li>
                  <li><a href="mailto:rsairam488@gmail.com" className="hover:text-cyan-400">rsairam488@gmail.com</a></li>
                  <li><a href="https://www.linkedin.com/in/someswara-sai-ram-prasad-ginnela" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} Ginnela. All rights reserved.</p>
            <p className="font-mono tracking-wider text-[10px]">ANDHRA PRADESH, INDIA</p>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─────────────────────────────────────────
   ABOUT PAGE (Separate Page)
───────────────────────────────────────── */
function AboutPage({ navigate }) {
  return (
    <main className="py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <button onClick={() => navigate('/')} className="hover:text-cyan-400 transition-colors">Home</button>
          <span>/</span>
          <span className="text-white">About</span>
        </div>

        {/* Page Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-3">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">About Ginnela</h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            We're a deep-tech startup focused on solving real problems, building intellectual property, and engineering products that actually work for people.
          </p>
        </div>

        {/* Mission */}
        <div className="p-7 bg-black/50 border border-cyan-500/20 rounded-2xl mb-10 backdrop-blur-md">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-3">Mission</span>
          <p className="text-lg md:text-xl text-white font-semibold italic leading-relaxed">
            "Build breakthrough technologies that advance science, help humanity, and establish a globally recognized research and innovation ecosystem."
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            { icon: '🚀', title: 'Breakthrough Innovation', desc: 'We don\'t just improve existing solutions — we find gaps others miss and build from the ground up.' },
            { icon: '🔬', title: 'Science-Driven', desc: 'Every decision is grounded in rigorous R&D, academic foundations, and deep technical thinking.' },
            { icon: '🌍', title: 'Humanity-Focused', desc: 'Technology should serve people. We build with end-users at the center of every design decision.' }
          ].map(p => (
            <div key={p.title} className="p-6 bg-black/40 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-white font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Founder Section */}
        <div className="border-t border-white/10 pt-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-8">Leadership</span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Card */}
            <div className="p-7 bg-black/50 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-cyan-500/20">SG</div>
                <div>
                  <h2 className="text-xl font-black text-white">Sairam Ginnela</h2>
                  <p className="text-cyan-400 text-sm font-semibold">Founder & Tech Lead</p>
                  <p className="text-gray-500 text-xs">Ginnela Someswara Sairam Prasad</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Electronics & Communication Engineering student (B.Tech Lateral Entry, 3rd Year) at VVIT, Nambur, Guntur — affiliated with JNTUK. Achieved 90.5% in Diploma in ECE.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                From Ponnur, Guntur District, Andhra Pradesh. My goal is to become a world-class scientist while building technology companies that genuinely help people — and eventually contribute through public service and leadership.
              </p>

              {/* Social links */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/someswara-sai-ram-prasad-ginnela', color: 'hover:border-blue-400/60' },
                  { label: 'GitHub', href: 'https://github.com/ginnela-sairam', color: 'hover:border-gray-400/60' },
                  { label: 'Instagram', href: 'https://www.instagram.com/sairam_ginnela', color: 'hover:border-pink-400/60' },
                  { label: 'Email', href: 'mailto:rsairam488@gmail.com', color: 'hover:border-cyan-400/60' }
                ].map(s => (
                  <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl ${s.color} transition-all text-sm text-gray-300 hover:text-white`}>
                    <span className="font-semibold">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right – Skills & Background */}
            <div className="space-y-5">
              <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
                <h4 className="text-sm font-bold text-white mb-4">🎓 Education</h4>
                <div className="space-y-2 font-mono text-xs">
                  {[
                    ['Degree', 'B.Tech ECE — Lateral Entry, 3rd Year'],
                    ['College', 'VVIT, Nambur, Guntur'],
                    ['University', 'JNTUK'],
                    ['Diploma', '90.5% — ECE']
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-gray-500">{k}:</span>
                      <span className="text-white font-bold text-right max-w-[60%]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
                <h4 className="text-sm font-bold text-white mb-4">🎯 Goals & Vision</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {['Become a world-class scientist', 'Build innovative technology companies', 'Contribute to humanity through science & engineering', 'Public service and leadership'].map(g => (
                    <li key={g} className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5 shrink-0">→</span>{g}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
                <h4 className="text-sm font-bold text-white mb-4">🔧 Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['VLSI Design', 'Signal Processing', 'Embedded Systems', 'Full-Stack Dev', 'Modulation Theory', 'AI & Automation', 'R&D Strategy', 'Patent Architecture'].map(s => (
                    <span key={s} className="px-3 py-1 text-xs font-bold text-cyan-300 bg-cyan-900/20 border border-cyan-500/20 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/20 rounded-2xl text-center">
          <h3 className="text-2xl font-black text-white mb-3">Want to Work Together?</h3>
          <p className="text-gray-400 text-sm mb-6">Whether you have a technical problem, a project idea, or an investment opportunity — let's talk.</p>
          <button onClick={() => { navigate('/'); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}), 150); }}
            className="px-8 py-3.5 bg-cyan-400 text-black font-bold rounded-xl hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/30">
            Get in Touch →
          </button>
        </div>
      </div>
    </main>
  );
}

/* ─────────────────────────────────────────
   WEB SERVICES PAGE
───────────────────────────────────────── */
function WebServicesPage({ navigate }) {
  const plans = [
    {
      id: 'launchpad',
      name: 'The Business Launchpad',
      subtitle: 'Start-up & Solo Ventures',
      price: '₹1,999',
      period: 'One-Time',
      color: 'blue',
      borderColor: 'border-blue-500/40',
      bgColor: 'bg-blue-900/10',
      accentColor: 'text-blue-400',
      btnColor: 'bg-blue-500 hover:bg-blue-400',
      badgeColor: 'bg-blue-500/20 border-blue-500/40 text-blue-300',
      emoji: '🏪',
      popular: false,
      features: [
        { text: 'Custom .IN / .COM Domain', icon: '🌐' },
        { text: 'Fast 3-Page Website', icon: '⚡' },
        { text: 'Mobile-Optimized Design', icon: '📱' },
        { text: 'Contact Form Included', icon: '📋' },
        { text: 'Basic Google-Ready Setup', icon: '🔍' },
      ]
    },
    {
      id: 'professional',
      name: 'The Professional',
      subtitle: 'Scaling & Services Businesses',
      price: '₹4,999',
      period: 'One-Time',
      color: 'green',
      borderColor: 'border-emerald-500/50',
      bgColor: 'bg-emerald-900/10',
      accentColor: 'text-emerald-400',
      btnColor: 'bg-emerald-500 hover:bg-emerald-400 text-black',
      badgeColor: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300',
      emoji: '🏥',
      popular: true,
      features: [
        { text: 'Up to 8 Pages', icon: '📄' },
        { text: 'WhatsApp Integration', icon: '💬' },
        { text: 'Basic SEO Setup', icon: '🔍' },
        { text: 'Custom Design', icon: '🎨' },
        { text: 'Mobile-Optimized', icon: '📱' },
        { text: 'Contact & Enquiry Forms', icon: '📋' },
      ]
    },
    {
      id: 'cloud',
      name: 'The Custom Cloud',
      subtitle: 'Enterprise & Full-Stack Solutions',
      price: '₹12,999+',
      period: 'One-Time',
      color: 'indigo',
      borderColor: 'border-indigo-500/40',
      bgColor: 'bg-indigo-900/10',
      accentColor: 'text-indigo-400',
      btnColor: 'bg-indigo-500 hover:bg-indigo-400',
      badgeColor: 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300',
      emoji: '☁️',
      popular: false,
      features: [
        { text: 'User Logins & Profiles', icon: '👤' },
        { text: 'Secure Supabase Database', icon: '🔒' },
        { text: 'File & Cloud Storage', icon: '💾' },
        { text: 'Full-Stack Custom App', icon: '🛠️' },
        { text: 'Admin Dashboard', icon: '📊' },
        { text: 'Advanced SEO + Analytics', icon: '📈' },
        { text: 'Priority Support', icon: '⭐' },
      ]
    }
  ];

  const whatsappMsg = encodeURIComponent('Hello Ginnela! I want to book a website package. Please share more details.');

  return (
    <main className="py-14 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <button onClick={() => navigate('/')} className="hover:text-cyan-400 transition-colors">Home</button>
          <span>/</span>
          <span className="text-white">Web Services</span>
        </div>

        {/* Hero Banner */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
            <span>New Service — Launching Now</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Ginnela <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Web Services</span>
          </h1>
          <p className="text-xl font-bold text-white mb-2">Your Partner in Digital Bharat!</p>
          <p className="text-2xl font-black text-orange-400 mb-4">Making Digital India Affordable for Everyone!</p>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Break the cost barrier. Get your business online today with a professional website — built fast, built right, built for growth.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { icon: '🛡️', label: 'Full Accountability' },
            { icon: '🚀', label: 'Instant Development' },
            { icon: '🔒', label: '100% Transparent' },
          ].map(b => (
            <div key={b.label} className="flex items-center gap-2 px-5 py-2.5 bg-black/40 border border-white/10 rounded-full text-sm text-gray-300 font-semibold">
              <span>{b.icon}</span><span>{b.label}</span>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
          {plans.map(plan => (
            <div key={plan.id}
              className={`relative p-7 ${plan.bgColor} border ${plan.borderColor} rounded-2xl flex flex-col backdrop-blur-md ${
                plan.popular ? 'ring-2 ring-emerald-500/50 scale-[1.02]' : ''
              } transition-all duration-300 hover:scale-[1.02]`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-emerald-500 text-black text-xs font-black rounded-full uppercase tracking-wider shadow-lg shadow-emerald-500/40">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{plan.emoji}</div>

              {/* Name */}
              <h3 className="text-lg font-black text-white mb-1">{plan.name}</h3>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-5 ${plan.accentColor}`}>{plan.subtitle}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f.text} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <span>{f.icon}</span>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/917730974773?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-sm text-center text-white transition-all duration-200 shadow-lg ${plan.btnColor} hover:scale-105 active:scale-95 block`}
              >
                Book Now — {plan.price}
              </a>
            </div>
          ))}
        </div>

        {/* What's Included — All Plans */}
        <div className="p-8 bg-black/50 border border-white/10 rounded-2xl mb-14 backdrop-blur-md">
          <h3 className="text-xl font-black text-white mb-6 text-center">✅ Every Plan Includes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🎨', text: 'Professional Design' },
              { icon: '📱', text: 'Mobile Responsive' },
              { icon: '⚡', text: 'Fast Loading' },
              { icon: '🔧', text: 'Free Revisions' },
              { icon: '🌐', text: 'Domain Setup Help' },
              { icon: '📦', text: 'Hosting Guidance' },
              { icon: '🛡️', text: 'Secure & Safe' },
              { icon: '💬', text: 'WhatsApp Support' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-gray-300 py-2">
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Ginnela Web Services */}
        <div className="mb-14">
          <h3 className="text-2xl font-black text-white text-center mb-8">Why Choose Ginnela?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '💰', title: 'Unbeatable Pricing', desc: 'Starting at just ₹1,999 — the most affordable professional web presence in India. No hidden charges.' },
              { icon: '⚡', title: 'Instant Development', desc: 'We move fast. Your website goes from brief to live faster than anyone else — no unnecessary delays.' },
              { icon: '🤝', title: 'Real Accountability', desc: 'You deal directly with the founder. Full transparency, no middlemen, no outsourcing.' },
            ].map(item => (
              <div key={item.title} className="p-6 bg-black/40 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-orange-900/20 to-yellow-900/10 border border-orange-500/20 rounded-2xl text-center">
          <h3 className="text-3xl font-black text-white mb-3">Book Yours Now!</h3>
          <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
            Ready to get your business online? DM us on WhatsApp and we'll get started immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/917730974773?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-black rounded-xl hover:bg-[#20bc59] hover:scale-105 transition-all shadow-xl shadow-green-500/30 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
              DM on WhatsApp
            </a>
            <a
              href="mailto:rsairam488@gmail.com?subject=Website Package Inquiry"
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:border-cyan-400/60 hover:bg-cyan-600/10 transition-all flex items-center justify-center gap-2"
            >
              📧 Email Us Instead
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}

/* ─────────────────────────────────────────
   ROOT APP WITH SIMPLE ROUTER
───────────────────────────────────────── */
export default function App() {
  const getPath = () => window.location.pathname || '/';
  const [currentPage, setCurrentPage] = useState(getPath);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPage(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePop = () => setCurrentPage(getPath());
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  return (
    <>
      <SharedLayout currentPage={currentPage} navigate={navigate}>
        {currentPage === '/about'
          ? <AboutPage navigate={navigate} />
          : currentPage === '/web-services'
          ? <WebServicesPage navigate={navigate} />
          : <HomePage navigate={navigate} />
        }
      </SharedLayout>
      <Analytics />
    </>
  );
}
