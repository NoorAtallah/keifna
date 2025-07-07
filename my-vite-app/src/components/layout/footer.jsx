import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const KifnaFooter = () => {
  const footerLinks = {
    products: [
      "Ready-Made Dough",
      "Artisan Ice Cream", 
      "Ice Cream Base",
      "Coffee Collection",
      "Hot Beverages",
      "Karak Tea"
    ],
    company: [
      "About Us",
      "Our Story", 
      "Quality Standards",
      "Certifications",
      "News & Updates",
      "Careers"
    ],
    support: [
      "Contact Us",
      "Customer Service",
      "Technical Support", 
      "Product Information",
      "Bulk Orders",
      "Partnership"
    ]
  };

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Youtube, name: "YouTube", href: "#" }
  ];

  return (
    <footer style={{ backgroundColor: '#27001F' }}>
      {/* Main Footer Content */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-2"
                    style={{ 
                      backgroundColor: '#FFF6E4', 
                      color: '#27001F',
                      borderColor: '#DA2917'
                    }}
                  >
                    K
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: '#FFF6E4' }}>
                      Kifna Company
                    </h3>
                    <p className="text-sm" style={{ color: '#F2B2A8' }}>
                      Premium Food Excellence
                    </p>
                  </div>
                </div>
                
                <p 
                  className="text-base leading-relaxed mb-6"
                  style={{ color: '#F2B2A8', opacity: 0.9 }}
                >
                  Kifna Company is one of Jordan's proudly distinguished food manufacturing companies, 
                  specializing in premium ready-made dough, ice cream, and hot beverages with international standards.
                </p>

                {/* Quick Contact */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={16} style={{ color: '#DA2917' }} />
                    <span className="text-sm" style={{ color: '#FFF6E4' }}>
                      +962 6 123 4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={16} style={{ color: '#DA2917' }} />
                    <span className="text-sm" style={{ color: '#FFF6E4' }}>
                      info@kifna.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} style={{ color: '#DA2917' }} />
                    <span className="text-sm" style={{ color: '#FFF6E4' }}>
                      Zarqa, Jordan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Products */}
                <div>
                  <h4 
                    className="text-lg font-medium mb-6"
                    style={{ 
                      color: '#FFF6E4',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    Our Products
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.products.map((link, index) => (
                      <li key={index}>
                        <a 
                          href="#"
                          className="group flex items-center text-sm transition-all duration-300 hover:translate-x-1"
                          style={{ color: '#F2B2A8' }}
                          onMouseEnter={(e) => e.target.style.color = '#FFF6E4'}
                          onMouseLeave={(e) => e.target.style.color = '#F2B2A8'}
                        >
                          <span>{link}</span>
                          <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 
                    className="text-lg font-medium mb-6"
                    style={{ 
                      color: '#FFF6E4',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    Company
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a 
                          href="#"
                          className="group flex items-center text-sm transition-all duration-300 hover:translate-x-1"
                          style={{ color: '#F2B2A8' }}
                          onMouseEnter={(e) => e.target.style.color = '#FFF6E4'}
                          onMouseLeave={(e) => e.target.style.color = '#F2B2A8'}
                        >
                          <span>{link}</span>
                          <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 
                    className="text-lg font-medium mb-6"
                    style={{ 
                      color: '#FFF6E4',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    Support
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link, index) => (
                      <li key={index}>
                        <a 
                          href="#"
                          className="group flex items-center text-sm transition-all duration-300 hover:translate-x-1"
                          style={{ color: '#F2B2A8' }}
                          onMouseEnter={(e) => e.target.style.color = '#FFF6E4'}
                          onMouseLeave={(e) => e.target.style.color = '#F2B2A8'}
                        >
                          <span>{link}</span>
                          <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div 
        className="py-12"
        style={{ 
          backgroundColor: 'rgba(218, 41, 23, 0.1)',
          borderTop: '1px solid rgba(255, 246, 228, 0.1)',
          borderBottom: '1px solid rgba(255, 246, 228, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center">
            <h4 
              className="text-2xl font-light mb-4"
              style={{ 
                color: '#FFF6E4',
                fontFamily: 'Georgia, serif'
              }}
            >
              Stay Updated with Kifna
            </h4>
            <p 
              className="text-base mb-8 max-w-2xl mx-auto"
              style={{ color: '#F2B2A8', opacity: 0.9 }}
            >
              Get the latest news about our products, special offers, and company updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-base transition-all duration-300 focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: 'rgba(255, 246, 228, 0.1)',
                  border: '1px solid rgba(255, 246, 228, 0.2)',
                  color: '#FFF6E4',
                  borderRadius: '0px'
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 246, 228, 0.15)';
                  e.target.style.borderColor = '#DA2917';
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 246, 228, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 246, 228, 0.2)';
                }}
              />
              <button
                className="px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#DA2917',
                  color: '#FFF6E4',
                  border: '1px solid #DA2917'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FFF6E4';
                  e.target.style.color = '#DA2917';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#DA2917';
                  e.target.style.color = '#FFF6E4';
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-6">
              <p 
                className="text-sm"
                style={{ color: '#F2B2A8', opacity: 0.8 }}
              >
                © 2024 Kifna Company. All rights reserved.
              </p>
              <div className="hidden md:flex items-center space-x-4">
                <a 
                  href="#" 
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#F2B2A8' }}
                  onMouseEnter={(e) => e.target.style.color = '#FFF6E4'}
                  onMouseLeave={(e) => e.target.style.color = '#F2B2A8'}
                >
                  Privacy Policy
                </a>
                <span style={{ color: '#F2B2A8', opacity: 0.5 }}>•</span>
                <a 
                  href="#" 
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#F2B2A8' }}
                  onMouseEnter={(e) => e.target.style.color = '#FFF6E4'}
                  onMouseLeave={(e) => e.target.style.color = '#F2B2A8'}
                >
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span 
                className="text-sm mr-2"
                style={{ color: '#F2B2A8', opacity: 0.8 }}
              >
                Follow us:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: 'rgba(255, 246, 228, 0.1)',
                    border: '1px solid rgba(255, 246, 228, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#DA2917';
                    e.target.style.borderColor = '#DA2917';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 246, 228, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 246, 228, 0.2)';
                  }}
                  title={social.name}
                >
                  <social.icon size={16} style={{ color: '#FFF6E4' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KifnaFooter;