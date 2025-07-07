import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Award, Globe } from 'lucide-react';
import img from '../assets/2.png'
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    "Ready-Made Dough",
    "Premium Ice Cream", 
    "Karak Tea",
    "Hot Beverages"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Traditional Jordanian pattern background
  const jordanianPattern = (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.06 }}>
      <defs>
        <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" fill="transparent"/>
          {/* Traditional shemagh diagonal pattern */}
          <path d="M0,0 L60,60 M0,60 L60,0" stroke="#B91646" strokeWidth="1.5" opacity="0.4"/>
          <path d="M0,15 L15,0 M45,0 L60,15 M0,45 L15,60 M45,60 L60,45" stroke="#B91646" strokeWidth="1" opacity="0.3"/>
          <path d="M0,30 L30,0 M30,0 L60,30 M0,30 L30,60 M30,60 L60,30" stroke="#B91646" strokeWidth="0.8" opacity="0.2"/>
          {/* Grid lines */}
          <path d="M15,0 L15,60 M30,0 L30,60 M45,0 L45,60" stroke="#105652" strokeWidth="0.5" opacity="0.3"/>
          <path d="M0,15 L60,15 M0,30 L60,30 M0,45 L60,45" stroke="#105652" strokeWidth="0.5" opacity="0.3"/>
          {/* Traditional geometric elements */}
          <polygon points="30,10 40,20 30,30 20,20" fill="#105652" opacity="0.1"/>
          <circle cx="15" cy="15" r="2" fill="#B91646" opacity="0.3"/>
          <circle cx="45" cy="45" r="2" fill="#B91646" opacity="0.3"/>
          <circle cx="15" cy="45" r="2" fill="#105652" opacity="0.3"/>
          <circle cx="45" cy="15" r="2" fill="#105652" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-pattern)"/>
    </svg>
  );

  // Decorative border patterns
  const decorativeBorder = (
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r" style={{ 
      background: `linear-gradient(90deg, #105652 0%, #B91646 25%, #105652 50%, #B91646 75%, #105652 100%)` 
    }}></div>
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#FBF3E4' }}>
      {/* Decorative top border */}
      {decorativeBorder}
      
      {/* Background pattern */}
      {jordanianPattern}
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 80,25 80,75 50,95 20,75 20,25" fill="#B91646" opacity="0.6"/>
          <polygon points="50,15 70,30 70,70 50,85 30,70 30,30" fill="#105652" opacity="0.8"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-10 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="#105652" opacity="0.6"/>
          <polygon points="50,20 65,35 65,65 50,80 35,65 35,35" fill="#B91646" opacity="0.8"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Welcome greeting with decorative elements */}
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium relative" 
                   style={{ backgroundColor: '#DFD8CA', color: '#105652' }}>
                <Star className="w-4 h-4 mr-2" style={{ color: '#B91646' }} />
                Welcome to Kaifna
                <Star className="w-4 h-4 ml-2" style={{ color: '#B91646' }} />
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#105652' }}>
              <span className="block">Kaifna</span>
              <span className="block text-5xl md:text-7xl bg-gradient-to-r bg-clip-text text-transparent" 
                    style={{ backgroundImage: `linear-gradient(45deg, #105652, #B91646)` }}>
                Company
              </span>
              <span className="block text-2xl md:text-3xl mt-2" style={{ color: '#B91646' }}>
                Food Industries
              </span>
            </h1>

            {/* Animated product showcase */}
            <div className="mb-8">
              <p className="text-lg md:text-xl mb-4" style={{ color: '#105652' }}>
                Proudly crafting the finest
              </p>
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-2xl md:text-3xl font-bold transition-all duration-500" 
                      style={{ color: '#B91646' }}>
                  {products[currentSlide]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0" 
               style={{ color: '#105652' }}>
              With international specifications and competitive prices, we strive to be one of the strongest Jordanian companies in food manufacturing with our systematic approach focused on innovation and quality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                      style={{ backgroundColor: '#B91646' }}>
                <span className="flex items-center justify-center">
                  Explore Our Products
                  <ChevronRight className="w-5 h-5 ml-2" />
                </span>
              </button>
              
              <button className="px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:transform hover:scale-105"
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
                      }}>
                Contact Us
              </button>
            </div>

            {/* Quality badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2" style={{ color: '#B91646' }} />
                <span className="text-sm font-medium" style={{ color: '#105652' }}>Global Quality</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 mr-2" style={{ color: '#B91646' }} />
                <span className="text-sm font-medium" style={{ color: '#105652' }}>International Standards</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2" style={{ color: '#B91646' }} />
                <span className="text-sm font-medium" style={{ color: '#105652' }}>Made in Jordan</span>
              </div>
            </div>
          </div>

          {/* Right content - Product showcase */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main product image placeholder with Jordanian frame */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl opacity-20" 
                     style={{ background: `linear-gradient(45deg, #105652, #B91646, #105652)` }}></div>
                
                <div className="relative bg-white rounded-xl shadow-2xl p-8 border-4" 
                     style={{ borderColor: '#DFD8CA' }}>
                  <img
                    src={img}
                    alt="Kaifna Products"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  {/* Product info overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 border-2" 
                       style={{ borderColor: '#DFD8CA' }}>
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#105652' }}>
                      Our Premium Products
                    </h3>
                    <p className="text-sm" style={{ color: '#B91646' }}>
                      Ready-Made Dough • Ice Cream • Hot Beverages
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating feature cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border-2 rotate-3" 
                   style={{ borderColor: '#B91646' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#B91646' }}>100%</div>
                  <div className="text-xs" style={{ color: '#105652' }}>Natural</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border-2 -rotate-3" 
                   style={{ borderColor: '#105652' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#105652' }}>24/7</div>
                  <div className="text-xs" style={{ color: '#B91646' }}>Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r" style={{ 
        background: `linear-gradient(90deg, #B91646 0%, #105652 50%, #B91646 100%)` 
      }}></div>
      
      {/* Traditional geometric corner decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,0 L100,0 L0,100 Z" fill="#105652"/>
          <path d="M0,0 L60,0 L0,60 Z" fill="#B91646"/>
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M100,100 L0,100 L100,0 Z" fill="#105652"/>
          <path d="M100,100 L40,100 L100,40 Z" fill="#B91646"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;