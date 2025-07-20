import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const KifnaFooter = () => {
  const products = [
    { name: "Pastry", path: "/products/pastry" },
    { name: "Karak Tea", path: "/products/karak-tea" },
    { name: "Ice Cream", path: "/products/ice-cream" },
    { name: "Ice Drinks", path: "/products/ice-drinks" },
    { name: "Hot Drinks", path: "/products/hot-drinks" },
    { name: "Coffee", path: "/products/coffee" },
    { name: "Paste", path: "/products/paste" },
    { name: "Base Gelato", path: "/products/base-gelato" }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "https://www.facebook.com/share/1Aw5hFst8a/" },
    { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/keifna.coffee?igsh=MXFnNWo5eHRwbjh6cQ==" }
  ];

  return (
    <footer style={{ backgroundColor: '#27001F' }}>
      {/* Main Footer Content */}
      <div className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Brand Section */}
            <div>
              <div className="mb-10">
                <div className="mb-8">
                  <h3 
                    className="text-3xl lg:text-4xl font-light mb-3"
                    style={{ 
                      color: '#FFF6E4',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    Kifna Company
                  </h3>
                  <p 
                    className="text-base tracking-wide"
                    style={{ color: '#DA2917', opacity: 0.9 }}
                  >
                    Premium Food Excellence Since 2020
                  </p>
                </div>
                
                <p 
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: '#F2B2A8', opacity: 0.95 }}
                >
                  Crafting exceptional food experiences with traditional Jordanian quality and modern international standards. From artisan pastries to premium beverages, we bring authenticity to every product.
                </p>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone size={18} style={{ color: '#DA2917' }} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium" style={{ color: '#FFF6E4' }}>
                        +962799500148
                      </p>
                      <p className="text-sm opacity-75" style={{ color: '#F2B2A8' }}>
                        Sunday - Thursday, 8AM - 6PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail size={18} style={{ color: '#DA2917' }} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium" style={{ color: '#FFF6E4' }}>
                        info@kifna.com
                      </p>
                      <p className="text-sm opacity-75" style={{ color: '#F2B2A8' }}>
                        Business inquiries welcome
                      </p>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-start space-x-4">
                    <MapPin size={18} style={{ color: '#DA2917' }} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium" style={{ color: '#FFF6E4' }}>
                        Zarqa Industrial Zone
                      </p>
                      <p className="text-sm opacity-75" style={{ color: '#F2B2A8' }}>
                        Zarqa, Jordan
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Products & Social Section */}
            <div>
              <div className="mb-10">
                <h4 
                  className="text-2xl font-light mb-8"
                  style={{ 
                    color: '#FFF6E4',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  Our Product Range
                </h4>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {products.map((product, index) => (
                    <a
                      key={index}
                      href={product.path}
                      className="group flex items-center text-base transition-all duration-300 hover:translate-x-1"
                      style={{ color: '#F2B2A8' }}
                      onMouseEnter={(e) => e.target.style.color = '#FFF6E4'}
                      onMouseLeave={(e) => e.target.style.color = '#F2B2A8'}
                    >
                      <span className="relative">
                        {product.name}
                        <span 
                          className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                          style={{ backgroundColor: '#DA2917' }}
                        />
                      </span>
                      <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 
                  className="text-xl font-light mb-6"
                  style={{ 
                    color: '#FFF6E4',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  Connect With Us
                </h4>
                
                <div className="flex items-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 transition-all duration-300"
                      style={{ color: '#F2B2A8' }}
                      onMouseEnter={(e) => e.target.style.color = '#FFF6E4'}
                      onMouseLeave={(e) => e.target.style.color = '#F2B2A8'}
                    >
                      <div 
                        className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: 'rgba(218, 41, 23, 0.1)',
                          border: '1px solid rgba(218, 41, 23, 0.3)'
                        }}
                      >
                        <social.icon size={18} style={{ color: '#DA2917' }} />
                      </div>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div 
        className="py-6 border-t"
        style={{ 
          borderColor: 'rgba(255, 246, 228, 0.15)'
        }}
      >
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
             <p 
              className="text-sm"
              style={{ color: '#F2B2A8', opacity: 0.7 }}
            >
              © {new Date().getFullYear()} Kifna Company. Proudly made in Jordan.
            </p>

            {/* Legal Links */}
         
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KifnaFooter;