import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import img from '../../assets/1.png'
const KifnaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    "Ready-Made Dough",
    "Ice Cream", 
    "Ice Cream Base",
    "Plain Coffee",
    "Karak Tea",
    "Hot Beverages",
    "Coffee"
  ];

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg" style={{ backgroundColor: '#27001F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src={img} 
              alt="Kifna Company Logo" 
              className="w-12 h-12 rounded-full object-cover border-2"
              style={{ borderColor: '#DA2917' }}
              onError={(e) => {
                // Fallback if image doesn't load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-2"
              style={{ 
                backgroundColor: '#FFF6E4', 
                color: '#27001F',
                borderColor: '#DA2917',
                display: 'none'
              }}
            >
              K
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#FFF6E4' }}>
                Kifna Company
              </h1>
              <p className="text-xs" style={{ color: '#F2B2A8' }}>
                Premium Food Manufacturing
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-opacity-20"
              style={{ 
                color: '#FFF6E4',
                ':hover': { backgroundColor: '#DA2917' }
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DA2917'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Home
            </a>
            
            <a 
              href="#about" 
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              style={{ color: '#FFF6E4' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DA2917'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              About Us
            </a>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                style={{ color: '#FFF6E4' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#DA2917'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg py-1 z-50"
                  style={{ backgroundColor: '#FFF6E4' }}
                >
                  {products.map((product, index) => (
                    <a
                      key={index}
                      href={`#${product.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm transition-colors duration-200"
                      style={{ 
                        color: '#27001F',
                        ':hover': { backgroundColor: '#F2B2A8' }
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#F2B2A8'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      {product}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#quality" 
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              style={{ color: '#FFF6E4' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DA2917'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Quality Standards
            </a>

            <a 
              href="#contact" 
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-2"
              style={{ 
                color: '#FFF6E4',
                borderColor: '#DA2917'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#DA2917';
                e.target.style.color = '#FFF6E4';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#FFF6E4';
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md"
              style={{ color: '#FFF6E4' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#home" 
                className="block px-3 py-2 rounded-md text-base font-medium"
                style={{ color: '#FFF6E4' }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 rounded-md text-base font-medium"
                style={{ color: '#FFF6E4' }}
              >
                About Us
              </a>
              
              {/* Mobile Products */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium"
                  style={{ color: '#FFF6E4' }}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="ml-4 space-y-1">
                    {products.map((product, index) => (
                      <a
                        key={index}
                        href={`#${product.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-3 py-2 rounded-md text-sm"
                        style={{ color: '#F2B2A8' }}
                      >
                        {product}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a 
                href="#quality" 
                className="block px-3 py-2 rounded-md text-base font-medium"
                style={{ color: '#FFF6E4' }}
              >
                Quality Standards
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 rounded-md text-base font-medium border-2 mt-2"
                style={{ 
                  color: '#FFF6E4',
                  borderColor: '#DA2917'
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Company Description Section */}
      {/* <div className="hidden lg:block py-2 px-4" style={{ backgroundColor: '#F2B2A8' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-center" style={{ color: '#27001F' }}>
            <strong>Kifna Company</strong> - A proud Jordanian company manufacturing ready-made dough, ice cream, and hot beverages with international standards and competitive prices. We strive to be one of the strongest Jordanian food manufacturing companies through our methodical approach, always seeking innovation in our manufacturing with quality as our top priority.
          </p>
        </div>
      </div> */}
    </nav>
  );
};

export default KifnaNavbar;