import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const KifnaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: "Pastry", path: "/products/pastry" },
    { name: "Karak Tea", path: "/products/karak-tea" },
    { name: "Ice Cream", path: "/products/ice-cream" },
    { name: "Ice Drinks", path: "/products/ice-drinks" },
    { name: "Hot Drinks", path: "/products/hot-drinks" },
    { name: "Coffee", path: "/products/coffee" },
    { name: "Paste", path: "/products/paste" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg" style={{ backgroundColor: '#27001F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-2"
              style={{ 
                backgroundColor: '#FFF6E4', 
                color: '#27001F',
                borderColor: '#DA2917'
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-opacity-20"
              style={{ 
                color: '#FFF6E4'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DA2917'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Home
            </Link>

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
                    <Link
                      key={index}
                      to={product.path}
                      className="block px-4 py-2 text-sm transition-colors duration-200"
                      style={{ 
                        color: '#27001F'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#F2B2A8'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
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
            </Link>
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
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium"
                style={{ color: '#FFF6E4' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
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
                      <Link
                        key={index}
                        to={product.path}
                        className="block px-3 py-2 rounded-md text-sm"
                        style={{ color: '#F2B2A8' }}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductsOpen(false);
                        }}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium border-2 mt-2"
                style={{ 
                  color: '#FFF6E4',
                  borderColor: '#DA2917'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default KifnaNavbar;