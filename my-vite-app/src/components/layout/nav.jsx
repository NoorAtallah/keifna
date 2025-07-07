import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import img from '../../assets/1.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Jordanian Shemagh-inspired pattern as inline SVG
  const jordanianPattern = (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.08 }}>
      <defs>
        <pattern id="jordanian-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="transparent"/>
          {/* Diagonal grid pattern like shemagh */}
          <path d="M0,0 L24,24 M0,24 L24,0" stroke="#B91646" strokeWidth="0.8" opacity="0.6"/>
          <path d="M0,8 L8,0 M16,0 L24,8 M0,16 L8,24 M16,24 L24,16" stroke="#B91646" strokeWidth="0.5" opacity="0.4"/>
          {/* Cross-hatch pattern */}
          <path d="M6,0 L6,24 M12,0 L12,24 M18,0 L18,24" stroke="#105652" strokeWidth="0.3" opacity="0.3"/>
          <path d="M0,6 L24,6 M0,12 L24,12 M0,18 L24,18" stroke="#105652" strokeWidth="0.3" opacity="0.3"/>
          {/* Small dots at intersections */}
          <circle cx="6" cy="6" r="0.5" fill="#B91646" opacity="0.4"/>
          <circle cx="12" cy="12" r="0.5" fill="#B91646" opacity="0.4"/>
          <circle cx="18" cy="18" r="0.5" fill="#B91646" opacity="0.4"/>
          <circle cx="6" cy="18" r="0.5" fill="#105652" opacity="0.4"/>
          <circle cx="18" cy="6" r="0.5" fill="#105652" opacity="0.4"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jordanian-pattern)"/>
    </svg>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 relative overflow-hidden" style={{ backgroundColor: '#FBF3E4' }}>
      {jordanianPattern}
      
      {/* Decorative border with Jordanian colors */}
      <div className="h-1 bg-gradient-to-r" style={{ 
        background: `linear-gradient(90deg, #105652 0%, #B91646 50%, #105652 100%)` 
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo with decorative elements */}
          <div className="flex items-center">
            <div className="relative">
              <img
                src={img}
                alt="Kaifna Company Logo"
                className="h-10 w-auto mr-3 relative z-10"
              />
              {/* Decorative frame around logo */}
              <div className="absolute -inset-1 rounded-lg opacity-20" style={{ 
                background: `linear-gradient(45deg, #105652, #B91646)`,
                transform: 'scale(1.1)'
              }}></div>
            </div>
            <div className="text-xl font-bold relative" style={{ color: '#105652' }}>
              Kaifna
              {/* Small decorative accent */}
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r" style={{ 
                background: `linear-gradient(90deg, #B91646, transparent)` 
              }}></div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-opacity-80"
              style={{ color: '#105652' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Home
            </a>
            
            <div className="relative">
              <button
                onClick={() => toggleDropdown('products')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-opacity-80"
                style={{ color: '#105652' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'products' && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 relative overflow-hidden" style={{ backgroundColor: '#FBF3E4' }}>
                  {/* Subtle pattern for dropdown */}
                  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.05 }}>
                    <defs>
                      <pattern id="dropdown-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect width="20" height="20" fill="transparent"/>
                        <circle cx="10" cy="10" r="2" fill="#105652" opacity="0.3"/>
                        <path d="M5,5 L15,5 L10,15 Z" fill="#B91646" opacity="0.2"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dropdown-pattern)"/>
                  </svg>
                  
                  <div className="py-1 relative z-10">
                    <a href="#ready-dough" className="block px-4 py-2 text-sm transition-colors duration-200 relative" style={{ color: '#105652' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                      <span className="relative z-10">Ready-Made Dough</span>
                    </a>
                    <a href="#ice-cream" className="block px-4 py-2 text-sm transition-colors duration-200 relative" style={{ color: '#105652' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                      <span className="relative z-10">Ice Cream</span>
                    </a>
                    <a href="#ice-cream-base" className="block px-4 py-2 text-sm transition-colors duration-200 relative" style={{ color: '#105652' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                      <span className="relative z-10">Ice Cream Base</span>
                    </a>
                    <a href="#plain-coffee" className="block px-4 py-2 text-sm transition-colors duration-200 relative" style={{ color: '#105652' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                      <span className="relative z-10">Plain Coffee</span>
                    </a>
                    <a href="#karak-tea" className="block px-4 py-2 text-sm transition-colors duration-200 relative" style={{ color: '#105652' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                      <span className="relative z-10">Karak Tea</span>
                    </a>
                    <a href="#hot-beverages" className="block px-4 py-2 text-sm transition-colors duration-200 relative" style={{ color: '#105652' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                      <span className="relative z-10">Hot Beverages</span>
                    </a>
                    <a href="#coffee" className="block px-4 py-2 text-sm transition-colors duration-200 relative" style={{ color: '#105652' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                      <span className="relative z-10">Coffee</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#about"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-opacity-80"
              style={{ color: '#105652' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              About Us
            </a>
            
            <a
              href="#quality"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-opacity-80"
              style={{ color: '#105652' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Quality Standards
            </a>
            
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-opacity-80"
              style={{ color: '#105652' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Contact
            </a>
            
            <button
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:opacity-90 mr-3"
              style={{ backgroundColor: '#B91646', color: 'white' }}
            >
              Get Quote
            </button>
            
            <button
              className="px-4 py-2 rounded-md text-sm font-medium border-2 transition-colors duration-200 hover:opacity-90"
              style={{ 
                borderColor: '#105652', 
                color: '#105652',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#105652';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#105652';
              }}
            >
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
              style={{ color: '#105652' }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden relative overflow-hidden" style={{ backgroundColor: '#FBF3E4' }}>
          {/* Mobile pattern */}
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.05 }}>
            <defs>
              <pattern id="mobile-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <rect width="30" height="30" fill="transparent"/>
                <polygon points="15,2 25,12 15,22 5,12" fill="#105652" opacity="0.3"/>
                <circle cx="15" cy="15" r="2" fill="#B91646" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mobile-pattern)"/>
          </svg>
          
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 relative z-10">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 relative"
              style={{ color: '#105652' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <span className="relative z-10">Home</span>
            </a>
            
            <div>
              <button
                onClick={() => toggleDropdown('mobile-products')}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                style={{ color: '#105652' }}
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'mobile-products' && (
                <div className="pl-4 space-y-1">
                  <a href="#ready-dough" className="block px-3 py-2 text-sm transition-colors duration-200" style={{ color: '#105652' }}>
                    Ready-Made Dough
                  </a>
                  <a href="#ice-cream" className="block px-3 py-2 text-sm transition-colors duration-200" style={{ color: '#105652' }}>
                    Ice Cream
                  </a>
                  <a href="#ice-cream-base" className="block px-3 py-2 text-sm transition-colors duration-200" style={{ color: '#105652' }}>
                    Ice Cream Base
                  </a>
                  <a href="#plain-coffee" className="block px-3 py-2 text-sm transition-colors duration-200" style={{ color: '#105652' }}>
                    Plain Coffee
                  </a>
                  <a href="#karak-tea" className="block px-3 py-2 text-sm transition-colors duration-200" style={{ color: '#105652' }}>
                    Karak Tea
                  </a>
                  <a href="#hot-beverages" className="block px-3 py-2 text-sm transition-colors duration-200" style={{ color: '#105652' }}>
                    Hot Beverages
                  </a>
                  <a href="#coffee" className="block px-3 py-2 text-sm transition-colors duration-200" style={{ color: '#105652' }}>
                    Coffee
                  </a>
                </div>
              )}
            </div>

            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              style={{ color: '#105652' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              About Us
            </a>
            
            <a
              href="#quality"
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              style={{ color: '#105652' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Quality Standards
            </a>
            
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              style={{ color: '#105652' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DFD8CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Contact
            </a>
            
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:opacity-90 mb-2"
              style={{ backgroundColor: '#B91646', color: 'white' }}
            >
              Get Quote
            </button>
            
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium border-2 transition-colors duration-200 hover:opacity-90"
              style={{ 
                borderColor: '#105652', 
                color: '#105652',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#105652';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#105652';
              }}
            >
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;