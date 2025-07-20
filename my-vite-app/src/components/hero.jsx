import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/3.jpeg'; 
import img2 from '../assets/7.jpeg';
import img3 from '../assets/6.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';

const KifnaHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();

  // Ice cream slide moved to first position
  const slides = [
    {
      id: 1,
      image: img2,
      title: "Artisan Ice Cream",
      subtitle: "Pure Indulgence",
      description: "Indulge in our premium ice cream made with the finest ingredients and traditional recipes.",
      cta: "Explore Flavors",
      link: "/products/ice-cream"
    },
    {
      id: 2,
      image: img,
      title: "Premium Ready-Made Dough",
      subtitle: "Crafted with Excellence",
      description: "Experience the finest ready-made dough crafted with international standards and competitive prices.",
      cta: "Discover More",
      link: "/products/pastry"
    },
    {
      id: 3,
      image: img3,
      title: "Professional Ice Cream Base",
      subtitle: "Commercial Excellence",
      description: "High-quality ice cream base designed for businesses seeking consistency and excellence.",
      cta: "Learn More",
      link: "/products/base-gelato"
    },
    {
      id: 4,
      image: img4,
      title: "Premium Coffee Collection",
      subtitle: "Rich & Aromatic",
      description: "Discover our exquisite range of premium coffee and traditional hot beverages.",
      cta: "Shop Collection",
      link: "/products/coffee"
    },
    {
      id: 5,
      image: img5,
      title: "Kifna Company",
      subtitle: "Jordanian Heritage",
      description: "Leading food manufacturing with innovation, quality, and international standards.",
      cta: "Our Story",
      link: "/contact"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleCTAClick = (link) => {
    navigate(link);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: '#27001F' }}>
      {/* Elegant Background Pattern */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF6E4' fill-opacity='0.03'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
                  index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  filter: 'brightness(0.4) contrast(1.1)',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.background = `linear-gradient(135deg, #27001F 0%, #DA2917 100%)`;
                }}
              />
              
              {/* Dark overlay for better text readability */}
              {/* <div 
                className="absolute inset-0"
                style={{ 
                  background: `
                    linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(39, 0, 31, 0.7) 100%)
                  `
                }}
              /> */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Text Content */}
                  <div className={`transition-all duration-1000 delay-300 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}>
                    {/* Subtitle */}
                    <div className="mb-4 sm:mb-6">
                      <span 
                        className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm"
                        style={{ 
                          color: '#FFFFFF',
                          backgroundColor: 'rgba(218, 41, 23, 0.9)',
                          letterSpacing: '0.2em',
                          textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                        }}
                      >
                        {slide.subtitle}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h1 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
                      style={{ 
                        color: '#FFFFFF',
                        fontFamily: 'Georgia, serif',
                        textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                      }}
                    >
                      {slide.title}
                    </h1>
                    
                    {/* Description */}
                    <p 
                      className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed max-w-xl font-medium"
                      style={{ 
                        color: '#FFFFFF',
                        textShadow: '0 1px 4px rgba(0,0,0,0.8)'
                      }}
                    >
                      {slide.description}
                    </p>
                    
                    {/* CTA Button */}
                    <button
                      onClick={() => handleCTAClick(slide.link)}
                      className="group relative inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold transition-all duration-300 overflow-hidden cursor-pointer"
                      style={{ 
                        color: '#27001F',
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #FFFFFF',
                        textShadow: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#FFFFFF';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#27001F';
                        e.target.style.backgroundColor = '#FFFFFF';
                      }}
                    >
                      <span className="relative z-10">{slide.cta}</span>
                      <div 
                        className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300"
                        style={{ backgroundColor: 'rgba(218, 41, 23, 0.1)' }}
                      />
                    </button>
                  </div>

                  {/* Decorative Element */}
                  <div className="hidden lg:flex justify-center items-center">
                    <div 
                      className={`w-64 h-64 xl:w-80 xl:h-80 rounded-full transition-all duration-1000 delay-500 ${
                        index === currentSlide 
                          ? 'opacity-20 scale-100' 
                          : 'opacity-0 scale-95'
                      }`}
                      style={{
                        background: `radial-gradient(circle, rgba(218, 41, 23, 0.3) 0%, rgba(242, 178, 168, 0.1) 50%, transparent 100%)`,
                        filter: 'blur(1px)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Elegant Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 pb-6 sm:pb-12">
          <div className="flex items-center justify-between">
            
            {/* Slide Counter */}
            <div className="flex items-center space-x-4">
              <span 
                className="text-xs sm:text-sm font-bold" 
                style={{ 
                  color: '#FFFFFF',
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                }}
              >
                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                >
                  <div
                    className={`h-0.5 transition-all duration-500 ${
                      index === currentSlide ? 'w-8 sm:w-12' : 'w-4 sm:w-6 hover:w-6 sm:hover:w-8'
                    }`}
                    style={{ 
                      backgroundColor: index === currentSlide ? '#DA2917' : '#FFFFFF',
                      opacity: index === currentSlide ? 1 : 0.6
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={prevSlide}
                className="p-1.5 sm:p-2 transition-all duration-300 hover:scale-110"
                style={{ 
                  color: '#FFFFFF',
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                }}
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 sm:p-2 transition-all duration-300 hover:scale-110"
                style={{ 
                  color: '#FFFFFF',
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                }}
              >
                {isPlaying ? <Pause size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2} /> : <Play size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2} />}
              </button>
              
              <button
                onClick={nextSlide}
                className="p-1.5 sm:p-2 transition-all duration-300 hover:scale-110"
                style={{ 
                  color: '#FFFFFF',
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                }}
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            backgroundColor: '#DA2917',
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      {/* Elegant Side Navigation - Hidden on mobile */}
      <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-4 xl:space-y-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
          >
            <div
              className={`w-0.5 h-6 xl:h-8 transition-all duration-300 ${
                index === currentSlide ? 'scale-y-125' : 'hover:scale-y-110'
              }`}
              style={{ 
                backgroundColor: index === currentSlide ? '#DA2917' : '#FFFFFF',
                opacity: index === currentSlide ? 1 : 0.6
              }}
            />
            {index === currentSlide && (
              <div 
                className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 rounded-full"
                style={{ backgroundColor: '#DA2917' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Company Logo/Watermark */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div 
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold"
            style={{ 
              backgroundColor: '#FFFFFF', 
              color: '#27001F'
            }}
          >
            K
          </div>
          <span 
            className="text-xs sm:text-sm font-bold" 
            style={{ 
              color: '#FFFFFF',
              textShadow: '0 1px 3px rgba(0,0,0,0.8)'
            }}
          >
            Kifna Company
          </span>
        </div>
      </div>
    </div>
  );
};

export default KifnaHeroSlider;