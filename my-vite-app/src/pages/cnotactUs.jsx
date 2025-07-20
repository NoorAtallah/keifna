import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Clock, Instagram, Facebook, Building, Users, Award, Globe } from 'lucide-react';

const ContactPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactMethods = [
    {
      id: 1,
      icon: Phone,
      title: "Call Us",
      primary: "+962799500148",
      secondary: "+962799500148",
      description: "Sunday - Thursday, 8AM - 6PM",
      action: "Call Now",
      color: "#DA2917",
      link: "tel:962799500148"
    },
    {
      id: 2,
      icon: Mail,
      title: "Email Us",
      primary: "info@keifna.com",
      secondary: "info@keifna.com",
      description: "We'll respond within 24 hours",
      action: "Send Email",
      color: "#F2B2A8",
      link: "mailto:info@keifna.com"
    },
    {
      id: 3,
      icon: MapPin,
      title: "Visit Us",
      primary: "المقابلين - الحسنية",
      secondary: "بجانب مسجد خالد بن الوليد",
      description: "Factory & Office Location",
      action: "Get Directions",
      color: "#DA2917",
      link: "https://maps.app.goo.gl/aJbZqayutyMBFE4g7"
    },
    {
      id: 4,
      icon: Instagram,
      title: "Instagram",
      primary: "@keifna.coffee",
      secondary: "Follow our journey",
      description: "Daily updates & behind the scenes",
      action: "Follow Us",
      color: "#F2B2A8",
      link: "https://www.instagram.com/keifna.coffee?igsh=MXFnNWo5eHRwbjh6cQ=="
    },
    {
      id: 5,
      icon: Facebook,
      title: "Facebook",
      primary: "Keifna Food Industries",
      secondary: "Join our community",
      description: "News, updates & customer stories",
      action: "Like Page",
      color: "#DA2917",
      link: "https://www.facebook.com/share/1Aw5hFst8a/"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "International standards meet traditional Jordanian craftsmanship"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to food excellence"
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description: "State-of-the-art manufacturing facility"
    },
    {
      icon: Globe,
      title: "Trusted Partner",
      description: "Serving businesses across Jordan and beyond"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF6E4' }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <div className="mb-8">
            <span 
              className="inline-block text-sm font-medium tracking-widest uppercase px-6 py-3 rounded-sm"
              style={{ 
                color: '#FFF6E4',
                backgroundColor: '#DA2917',
                letterSpacing: '0.2em'
              }}
            >
              Contact Keifna Food Industries
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight"
            style={{ 
              color: '#27001F',
              fontFamily: 'Georgia, serif'
            }}
          >
            Let's Create Something
            <br />
            <span style={{ color: '#DA2917' }}>Extraordinary Together</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12"
            style={{ color: '#27001F', opacity: 0.8 }}
          >
            From premium pastries to artisan beverages, we're here to bring your vision to life with authentic Jordanian quality and modern innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:962799500148"
              className="inline-flex items-center px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                color: '#FFF6E4',
                backgroundColor: '#27001F',
                border: '2px solid #27001F'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#27001F';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#27001F';
                e.target.style.color = '#FFF6E4';
              }}
            >
              <Phone size={20} className="mr-3" />
              Call Us Now
            </a>
            
            <a
              href="mailto:info@keifna.com"
              className="inline-flex items-center px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                color: '#27001F',
                backgroundColor: 'transparent',
                border: '2px solid #DA2917'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#DA2917';
                e.target.style.color = '#FFF6E4';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#27001F';
              }}
            >
              <Mail size={20} className="mr-3" />
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ 
                color: '#27001F',
                fontFamily: 'Georgia, serif'
              }}
            >
              Choose Your Preferred Way to Connect
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: '#27001F', opacity: 0.7 }}
            >
              We're here to assist you through multiple channels. Pick the one that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative p-8 transition-all duration-500 hover:-translate-y-2 block ${
                  hoveredCard === method.id ? 'scale-105' : ''
                }`}
                style={{
                  backgroundColor: '#FFF6E4',
                  border: '1px solid rgba(39, 0, 31, 0.1)',
                  boxShadow: hoveredCard === method.id ? '0 20px 40px rgba(39, 0, 31, 0.1)' : '0 5px 15px rgba(39, 0, 31, 0.05)',
                  textDecoration: 'none',
                  borderRadius: '8px'
                }}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === method.id ? 'scale-110' : ''
                    }`}
                    style={{ 
                      backgroundColor: hoveredCard === method.id ? method.color : 'rgba(39, 0, 31, 0.05)',
                      border: `2px solid ${hoveredCard === method.id ? method.color : 'rgba(39, 0, 31, 0.1)'}`
                    }}
                  >
                    <method.icon 
                      size={24} 
                      style={{ 
                        color: hoveredCard === method.id ? '#FFF6E4' : method.color 
                      }} 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 
                    className="text-xl font-medium mb-3"
                    style={{ 
                      color: '#27001F',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    {method.title}
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p 
                      className="font-medium"
                      style={{ color: '#27001F' }}
                    >
                      {method.primary}
                    </p>
                    <p 
                      className="text-sm opacity-80"
                      style={{ color: '#27001F' }}
                    >
                      {method.secondary}
                    </p>
                  </div>

                  <p 
                    className="text-sm"
                    style={{ color: '#27001F', opacity: 0.6 }}
                  >
                    {method.description}
                  </p>
                </div>

                {/* Action Button */}
                <div
                  className="group/btn flex items-center space-x-2 text-sm font-medium transition-all duration-300"
                  style={{ color: method.color }}
                >
                  <span>{method.action}</span>
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </div>

                {/* Hover Effect Line */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 transition-all duration-300 ${
                    hoveredCard === method.id ? 'w-full' : 'w-0'
                  }`}
                  style={{ backgroundColor: method.color, borderRadius: '0 0 8px 8px' }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" style={{ backgroundColor: 'rgba(39, 0, 31, 0.03)' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ 
                color: '#27001F',
                fontFamily: 'Georgia, serif'
              }}
            >
              Why Partner with Keifna?
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: '#27001F', opacity: 0.7 }}
            >
              Discover what makes us Jordan's trusted choice for premium food manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: '#FFF6E4',
                  border: '1px solid rgba(39, 0, 31, 0.1)',
                  borderRadius: '8px'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    backgroundColor: 'rgba(218, 41, 23, 0.1)',
                    border: '2px solid rgba(218, 41, 23, 0.2)'
                  }}
                >
                  <item.icon size={24} style={{ color: '#DA2917' }} />
                </div>
                
                <h3 
                  className="text-xl font-medium mb-4"
                  style={{ 
                    color: '#27001F',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  {item.title}
                </h3>
                
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: '#27001F', opacity: 0.7 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <div 
            className="text-center p-12 lg:p-16"
            style={{ 
              backgroundColor: 'rgba(39, 0, 31, 0.05)',
              border: '1px solid rgba(39, 0, 31, 0.1)',
              borderRadius: '12px'
            }}
          >
            <div className="flex items-center justify-center mb-8">
              <Clock size={28} style={{ color: '#DA2917' }} className="mr-3" />
              <h2 
                className="text-3xl font-light"
                style={{ 
                  color: '#27001F',
                  fontFamily: 'Georgia, serif'
                }}
              >
                Business Hours
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <p className="font-medium mb-2 text-lg" style={{ color: '#27001F' }}>
                  Sunday - Thursday
                </p>
                <p className="text-xl font-light" style={{ color: '#DA2917' }}>
                  8:00 AM - 6:00 PM
                </p>
              </div>
              
              <div className="text-center">
                <p className="font-medium mb-2 text-lg" style={{ color: '#27001F' }}>
                  Saturday
                </p>
                <p className="text-xl font-light" style={{ color: '#DA2917' }}>
                  9:00 AM - 4:00 PM
                </p>
              </div>
              
              <div className="text-center">
                <p className="font-medium mb-2 text-lg" style={{ color: '#27001F' }}>
                  Friday
                </p>
                <p className="text-xl font-light opacity-60" style={{ color: '#27001F' }}>
                  Closed
                </p>
              </div>
            </div>

            <div className="border-t pt-8" style={{ borderColor: 'rgba(39, 0, 31, 0.1)' }}>
              <p 
                className="text-base"
                style={{ color: '#27001F', opacity: 0.7 }}
              >
                For urgent inquiries outside business hours, please use email or leave us a message on social media.
                <br />
                We'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#27001F' }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 
            className="text-4xl md:text-5xl font-light mb-6"
            style={{ 
              color: '#FFF6E4',
              fontFamily: 'Georgia, serif'
            }}
          >
            Ready to Experience
            <br />
            <span style={{ color: '#DA2917' }}>Jordanian Excellence?</span>
          </h2>
          
          <p 
            className="text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: '#F2B2A8', opacity: 0.9 }}
          >
            Join the growing family of businesses that trust Keifna Food Industries for their premium food manufacturing needs. Let's create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:962799500148"
              className="inline-flex items-center px-10 py-5 text-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                color: '#27001F',
                backgroundColor: '#FFF6E4',
                border: '2px solid #FFF6E4'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#FFF6E4';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FFF6E4';
                e.target.style.color = '#27001F';
              }}
            >
              <Phone size={20} className="mr-3" />
              Start the Conversation
            </a>
            
            <a
              href="mailto:info@keifna.com"
              className="inline-flex items-center px-10 py-5 text-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                color: '#FFF6E4',
                backgroundColor: 'transparent',
                border: '2px solid #DA2917'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#DA2917';
                e.target.style.borderColor = '#DA2917';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = '#DA2917';
              }}
            >
              <Mail size={20} className="mr-3" />
              Send Us an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;