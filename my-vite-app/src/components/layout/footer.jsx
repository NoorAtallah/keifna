import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ChevronRight,
  Award,
  Shield,
  Truck,
  Heart,
  Star,
  Globe,
  ArrowUp
} from 'lucide-react';
import img from '../../assets/1.png'
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = [
    "Ready-Made Dough",
    "Premium Ice Cream", 
    "Ice Cream Base",
    "Karak Tea",
    "Plain Coffee",
    "Hot Beverages"
  ];

  const companyLinks = [
    "About Kaifna",
    "Our Story",
    "Quality Standards",
    "Certifications",
    "Careers",
    "News & Updates"
  ];

  const supportLinks = [
    "Contact Us",
    "Customer Support",
    "FAQ",
    "Product Guides",
    "Bulk Orders",
    "Partnership"
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "#1877F2" },
    { icon: Instagram, name: "Instagram", color: "#E4405F" },
    { icon: Linkedin, name: "LinkedIn", color: "#0A66C2" },
    { icon: Twitter, name: "Twitter", color: "#1DA1F2" },
    { icon: Youtube, name: "YouTube", color: "#FF0000" }
  ];

  const certifications = [
    { icon: Award, name: "ISO 22000" },
    { icon: Shield, name: "HACCP" },
    { icon: Star, name: "Quality Assured" },
    { icon: Globe, name: "International Standards" }
  ];

  // Jordanian pattern background
  const jordanianPattern = (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.03 }}>
      <defs>
        <pattern id="footer-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
          <rect width="150" height="150" fill="transparent"/>
          {/* Traditional shemagh pattern */}
          <path d="M0,0 L150,150 M0,150 L150,0" stroke="#B91646" strokeWidth="2.5" opacity="0.4"/>
          <path d="M0,37.5 L37.5,0 M112.5,0 L150,37.5 M0,112.5 L37.5,150 M112.5,150 L150,112.5" stroke="#B91646" strokeWidth="2" opacity="0.3"/>
          <path d="M37.5,0 L37.5,150 M75,0 L75,150 M112.5,0 L112.5,150" stroke="#105652" strokeWidth="1" opacity="0.4"/>
          <path d="M0,37.5 L150,37.5 M0,75 L150,75 M0,112.5 L150,112.5" stroke="#105652" strokeWidth="1" opacity="0.4"/>
          {/* Decorative geometric elements */}
          <polygon points="75,20 100,45 75,70 50,45" fill="#105652" opacity="0.1"/>
          <circle cx="37.5" cy="37.5" r="5" fill="#B91646" opacity="0.2"/>
          <circle cx="112.5" cy="112.5" r="5" fill="#B91646" opacity="0.2"/>
          <circle cx="37.5" cy="112.5" r="5" fill="#105652" opacity="0.2"/>
          <circle cx="112.5" cy="37.5" r="5" fill="#105652" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
    </svg>
  );

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#105652' }}>
      {/* Background pattern */}
      {jordanianPattern}
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r" style={{ 
        background: `linear-gradient(90deg, #B91646 0%, #FBF3E4 25%, #B91646 50%, #FBF3E4 75%, #B91646 100%)` 
      }}></div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20"
        style={{ backgroundColor: '#B91646' }}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo and Company Name */}
              <div className="flex items-center mb-6">
                <img
                  src={img}
                  alt="Kaifna Company Logo"
                  className="h-8 w-auto mr-3"
                />
                <div>
                  <div className="text-2xl font-bold text-white">Kaifna</div>
                  <div className="text-sm" style={{ color: '#DFD8CA' }}>Food Industries</div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Jordan's trusted partner in food manufacturing, delivering premium quality products 
                with international standards and competitive pricing since 2008.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 flex-shrink-0" style={{ color: '#B91646' }} />
                  <span className="text-sm">Industrial Zone, Amman, Jordan</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 flex-shrink-0" style={{ color: '#B91646' }} />
                  <span className="text-sm">+962 6 123 4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 flex-shrink-0" style={{ color: '#B91646' }} />
                  <span className="text-sm">info@kaifna.jo</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                      }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Our Products
                <div className="absolute bottom-0 left-0 w-12 h-0.5" style={{ backgroundColor: '#B91646' }}></div>
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" 
                                   style={{ color: '#B91646' }} />
                      <span className="text-sm">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Company
                <div className="absolute bottom-0 left-0 w-12 h-0.5" style={{ backgroundColor: '#B91646' }}></div>
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" 
                                   style={{ color: '#B91646' }} />
                      <span className="text-sm">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Newsletter */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Support
                <div className="absolute bottom-0 left-0 w-12 h-0.5" style={{ backgroundColor: '#B91646' }}></div>
              </h3>
              <ul className="space-y-3 mb-8">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" 
                                   style={{ color: '#B91646' }} />
                      <span className="text-sm">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>

        
            </div>
          </div>

          {/* Certifications Section */}
          <div className="border-t border-white border-opacity-10 pt-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Quality Certifications & Standards
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                         style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <IconComponent className="w-8 h-8" style={{ color: '#B91646' }} />
                    </div>
                    <div className="text-white text-sm font-medium">{cert.name}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-[#DFD8CA] bg-opacity-5 rounded-lg p-6 mb-8 border border-white border-opacity-10">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 mr-3" style={{ color: '#B91646' }} />
              <h3 className="text-xl font-bold text-black">Business Hours</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <div className="text-gray-300">
                <div className="font-semibold text-black mb-1">Sunday - Thursday</div>
                <div className="text-sm text-black">8:00 AM - 6:00 PM</div>
              </div>
              <div className="text-gray-300">
                <div className="font-semibold text-black mb-1">Friday</div>
                <div className="text-sm text-black">8:00 AM - 2:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white border-opacity-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-300 mb-4 md:mb-0">
                <Heart className="w-4 h-4 mr-2" style={{ color: '#B91646' }} />
                <span className="text-sm">
                  © 2024 Kaifna Food Industries. Made with pride in Jordan.
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span className="text-gray-500">|</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span className="text-gray-500">|</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-5">
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <polygon points="64,8 104,40 104,88 64,120 24,88 24,40" fill="#B91646"/>
          <circle cx="64" cy="64" r="24" fill="#FBF3E4"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-20 w-28 h-28 opacity-5">
        <svg viewBox="0 0 112 112" className="w-full h-full">
          <circle cx="56" cy="56" r="48" fill="#FBF3E4"/>
          <polygon points="56,16 88,32 88,80 56,96 24,80 24,32" fill="#B91646"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;