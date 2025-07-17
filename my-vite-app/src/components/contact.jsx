import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const KifnaContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactMethods = [
    {
      id: 1,
      icon: Phone,
      title: "Call Us",
      primary: "+962799500148",
      secondary: "+962799500148",
      description: "Saterday - Thursday, 8AM - 6PM",
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
      link: "mailto:info@kifna.com"
    },
    {
      id: 3,
      icon: MapPin,
      title: "Visit Us",
      primary: "Zarqa Industrial Zone",
      secondary: "Zarqa, Jordan",
      description: "Factory & Office Location",
      action: "Get Directions",
      color: "#DA2917",
      link: "https://maps.google.com"
    },
    {
      id: 4,
      icon: Instagram,
      title: "Instagram",
      primary: "@kifnacompany",
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
      primary: "Kifna Company",
      secondary: "Join our community",
      description: "News, updates & customer stories",
      action: "Like Page",
      color: "#DA2917",
      link: "https://www.facebook.com/share/1Aw5hFst8a/"
    }
  ];

  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: '#FFF6E4' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span 
              className="inline-block text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-sm"
              style={{ 
                color: '#FFF6E4',
                backgroundColor: '#DA2917',
                letterSpacing: '0.2em'
              }}
            >
              Get in Touch
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
            style={{ 
              color: '#27001F',
              fontFamily: 'Georgia, serif'
            }}
          >
            Let's Start a Conversation
          </h2>
          
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#27001F', opacity: 0.8 }}
          >
            Ready to experience the finest in Jordanian food manufacturing? Reach out to us through any of the channels below and discover how Kifna can serve your business needs.
          </p>
        </div>

        {/* Contact Methods Grid */}
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
                textDecoration: 'none'
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
                style={{ backgroundColor: method.color }}
              />
            </a>
          ))}
        </div>

        {/* Additional Info Section */}
        <div 
          className="text-center p-12 lg:p-16"
          style={{ 
            backgroundColor: 'rgba(39, 0, 31, 0.05)',
            border: '1px solid rgba(39, 0, 31, 0.1)'
          }}
        >
          <div className="flex items-center justify-center mb-6">
            <Clock size={24} style={{ color: '#DA2917' }} className="mr-3" />
            <h3 
              className="text-2xl font-light"
              style={{ 
                color: '#27001F',
                fontFamily: 'Georgia, serif'
              }}
            >
              Business Hours
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-medium mb-2" style={{ color: '#27001F' }}>
                Sunday - Thursday
              </p>
              <p className="text-lg" style={{ color: '#DA2917' }}>
                8:00 AM - 6:00 PM
              </p>
            </div>
            
            <div className="text-center">
              <p className="font-medium mb-2" style={{ color: '#27001F' }}>
                Saturday
              </p>
              <p className="text-lg" style={{ color: '#DA2917' }}>
                9:00 AM - 4:00 PM
              </p>
            </div>
            
            <div className="text-center">
              <p className="font-medium mb-2" style={{ color: '#27001F' }}>
                Friday
              </p>
              <p className="text-lg opacity-60" style={{ color: '#27001F' }}>
                Closed
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p 
              className="text-sm"
              style={{ color: '#27001F', opacity: 0.7 }}
            >
              For urgent inquiries outside business hours, please use email
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 
            className="text-3xl font-light mb-6"
            style={{ 
              color: '#27001F',
              fontFamily: 'Georgia, serif'
            }}
          >
            Ready to Partner with Excellence?
          </h3>
          
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: '#27001F', opacity: 0.8 }}
          >
            Join the growing family of businesses that trust Kifna Company for their premium food manufacturing needs.
          </p>

 
        </div>
      </div>
    </section>
  );
};

export default KifnaContactSection;