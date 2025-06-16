import React, { useState, useEffect } from 'react';
import '../css/AboutUs.css';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.about-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🌤️',
      title: 'Real-time Weather Updates',
      description: 'Get accurate weather forecasts to plan your farming activities'
    },
    {
      icon: '🏛️',
      title: 'Government Schemes',
      description: 'Stay informed about latest agricultural policies and subsidies'
    },
    {
      icon: '💰',
      title: 'Market Prices',
      description: 'Access current market rates for various crops and commodities'
    },
    {
      icon: '👥',
      title: 'Community Forum',
      description: 'Connect with fellow farmers and share knowledge'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access all features on your smartphone anytime, anywhere'
    },
    {
      icon: '🌾',
      title: 'Crop Advisory',
      description: 'Get expert advice on crop selection and farming techniques'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Farmers Connected' },
    { number: '500+', label: 'Villages Reached' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Free to Use' }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Project Inception',
      description: 'Born from the desire to support farming communities'
    },
    {
      year: '2024',
      title: 'Platform Development',
      description: 'Building comprehensive tools for farmers'
    },
    {
      year: '2025',
      title: 'Community Growth',
      description: 'Expanding reach across Tamil Nadu villages'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Scaling to support farmers across all of India'
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About Back Bone</h1>
          <p className="hero-subtitle">Empowering Farmers, Connecting Communities</p>
          <div className="hero-tagline">
            <span>Building bridges between tradition and technology</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element wheat">🌾</div>
            <div className="element sun">☀️</div>
            <div className="element cloud">☁️</div>
            <div className="element leaf">🍃</div>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <nav className="section-nav">
        <div className="nav-pills">
          <a href="#overview" className="nav-pill">Overview</a>
          <a href="#features" className="nav-pill">Features</a>
          <a href="#creator" className="nav-pill">Creator</a>
          <a href="#mission" className="nav-pill">Mission</a>
          <a href="#story" className="nav-pill">Our Story</a>
          <a href="#contact" className="nav-pill">Contact</a>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className={`about-section fade-in ${isVisible.overview ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">Platform Overview</h2>
          <div className="overview-grid">
            <div className="overview-text">
              <p className="lead-text">
                Back Bone is more than just a platform—it's a movement dedicated to revolutionizing 
                how farmers access information, connect with communities, and make informed decisions 
                about their agricultural practices.
              </p>
              <p>
                In a world where technology often overlooks agriculture, Back Bone bridges this gap 
                by providing farmers with essential tools: real-time weather updates, comprehensive 
                government scheme information, current market prices, and a thriving community forum 
                for knowledge sharing and support.
              </p>
            </div>
            <div className="overview-visual">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`about-section alt-bg fade-in ${isVisible.features ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section id="creator" className={`about-section fade-in ${isVisible.creator ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">Meet the Creator</h2>
          <div className="creator-profile">
            <div className="creator-info">
              <div className="creator-avatar">
                <span className="avatar-text">RP</span>
              </div>
              <div className="creator-details">
                <h3 className="creator-name">R. Pravin</h3>
                <p className="creator-location">
                  <span className="location-icon">📍</span>
                  Vinayagapuram Village, Tiruvannamalai, Tamil Nadu
                </p>
                <div className="creator-badges">
                  <span className="badge">Solo Developer</span>
                  <span className="badge">Agriculture Advocate</span>
                  <span className="badge">Community Builder</span>
                </div>
              </div>
            </div>
            <div className="creator-story">
              <p>
                <strong>R. Pravin</strong> is a passionate developer who believes in the power of 
                technology to transform lives. Born and raised in a farming family in Vinayagapuram 
                Village, Pravin has witnessed firsthand the challenges and struggles that farmers 
                face daily.
              </p>
              <p>
                With a deep respect for agriculture and an understanding of modern technology, 
                Pravin embarked on this solo journey to create a platform that could make a real 
                difference in the lives of farmers across Tamil Nadu and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={`about-section alt-bg fade-in ${isVisible.mission ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <div className="mission-statement">
              <div className="quote-icon">"</div>
              <blockquote>
                To inspire the next generation to recognize agriculture as a noble and essential 
                profession, while providing farmers with the tools and community support they 
                need to thrive in the modern world.
              </blockquote>
            </div>
            <div className="mission-points">
              <div className="mission-point">
                <div className="point-icon">🎯</div>
                <div className="point-content">
                  <h4>Changing Perspectives</h4>
                  <p>Showing youth that farming is as noble and important as any other profession</p>
                </div>
              </div>
              <div className="mission-point">
                <div className="point-icon">🤝</div>
                <div className="point-content">
                  <h4>Building Community</h4>
                  <p>Creating connections between farmers for knowledge sharing and mutual support</p>
                </div>
              </div>
              <div className="mission-point">
                <div className="point-icon">💡</div>
                <div className="point-content">
                  <h4>Innovation in Agriculture</h4>
                  <p>Bringing modern solutions to traditional farming practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className={`about-section fade-in ${isVisible.story ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">The Story Behind Back Bone</h2>
          <div className="story-content">
            <div className="story-text">
              <p className="story-intro">
                <strong>Every great project has a story.</strong> Back Bone's story begins in the 
                fields of Vinayagapuram Village, where Pravin watched his parents work tirelessly 
                as farmers.
              </p>
              <p>
                Despite their hard work and dedication, they often struggled with access to 
                timely information—weather updates that came too late, government schemes they 
                learned about after deadlines, market prices that fluctuated without warning, 
                and isolation from other farming communities.
              </p>
              <p>
                This personal experience sparked an idea: What if there was a single platform 
                where farmers could access all the information they needed? What if technology 
                could solve these age-old problems?
              </p>
              <p>
                Back Bone was born from this vision—to create a comprehensive support system 
                for farmers, by someone who truly understands their struggles.
              </p>
            </div>
            <div className="timeline">
              <h3>Project Timeline</h3>
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">{item.year}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`about-section contact-section fade-in ${isVisible.contact ? 'visible' : ''}`}>
        <div className="section-content">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Connect with the Creator</h3>
              <p>
                Have questions, suggestions, or want to contribute to the project? 
                I'd love to hear from you!
              </p>
              <div className="contact-methods">
                <a href="mailto:rpravin4422@gmail.com" className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">rpravin4422@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+919943885265" className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 99438 85265</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-cta">
              <h3>Join the Movement</h3>
              <p>
                Back Bone is more than a platform—it's a community. Whether you're a farmer, 
                developer, or someone who believes in supporting agriculture, there's a place 
                for you here.
              </p>
              <div className="cta-buttons">
                <button className="cta-button primary">Join Community</button>
                <button className="cta-button secondary">Contribute</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="footer-content">
          <p>&copy; 2025 Back Bone. Made with ❤️ for farmers everywhere.</p>
          <p className="footer-tagline">
            "From the soil of Vinayagapuram to farmers across India"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;