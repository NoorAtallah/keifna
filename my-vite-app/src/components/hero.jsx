import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const KifnaHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://www.shutterstock.com/image-photo/belgian-waffles-sprinkled-powdered-sugar-600nw-2480562673.jpg",
      title: "Premium Ready-Made Dough",
      subtitle: "Crafted with Excellence",
      description: "Experience the finest ready-made dough crafted with international standards and competitive prices.",
      cta: "Discover More"
    },
    {
      id: 2,
      image: "https://cdn.prod.website-files.com/642f26ea0d34e0594a51fef5/642f26ea0d34e06e2e520136_63e14efcd861144083954869_courtney-cook-QYsRxRPygwU-unsplash.jpg",
      title: "Artisan Ice Cream",
      subtitle: "Pure Indulgence",
      description: "Indulge in our premium ice cream made with the finest ingredients and traditional recipes.",
      cta: "Explore Flavors"
    },
    {
      id: 3,
      image: "https://gelq-1fb55.kxcdn.com/10765-large_default/leagel-easy-banana-milk-12-kg-ready-ice-cream.jpg",
      title: "Professional Ice Cream Base",
      subtitle: "Commercial Excellence",
      description: "High-quality ice cream base designed for businesses seeking consistency and excellence.",
      cta: "Learn More"
    },
    {
      id: 4,
      image: "https://kunjaninaples.com/cdn/shop/collections/specialty_small_batch_coffee-Kunjani_roasters.jpg",
      title: "Premium Coffee Collection",
      subtitle: "Rich & Aromatic",
      description: "Discover our exquisite range of premium coffee and traditional hot beverages.",
      cta: "Shop Collection"
    },
    {
      id: 5,
      image: "https://keifna.com/wp-content/uploads/2023/09/93426596_1054839424894694_2693954542051000320_n-600x600.jpg",
      title: "Kifna Company",
      subtitle: "Jordanian Heritage",
      description: "Leading food manufacturing with innovation, quality, and international standards.",
      cta: "Our Story"
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
              
              {/* Elegant Gradient Overlay */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `
                    linear-gradient(135deg, rgba(39, 0, 31, 0.9) 0%, rgba(39, 0, 31, 0.6) 50%, rgba(218, 41, 23, 0.7) 100%)
                  `
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-8 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <div className={`transition-all duration-1000 delay-300 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}>
                    {/* Subtitle */}
                    <div className="mb-6">
                      <span 
                        className="inline-block text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-sm"
                        style={{ 
                          color: '#FFF6E4',
                          backgroundColor: 'rgba(218, 41, 23, 0.9)',
                          letterSpacing: '0.2em'
                        }}
                      >
                        {slide.subtitle}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
                      style={{ 
                        color: '#FFF6E4',
                        fontFamily: 'Georgia, serif'
                      }}
                    >
                      {slide.title}
                    </h1>
                    
                    {/* Description */}
                    <p 
                      className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
                      style={{ color: '#F2B2A8' }}
                    >
                      {slide.description}
                    </p>
                    
                    {/* CTA Button */}
                    <button
                      className="group relative inline-flex items-center px-8 py-4 text-base font-medium transition-all duration-300 overflow-hidden"
                      style={{ 
                        color: '#27001F',
                        backgroundColor: '#FFF6E4',
                        border: '1px solid #FFF6E4'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#FFF6E4';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#27001F';
                        e.target.style.backgroundColor = '#FFF6E4';
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
                      className={`w-80 h-80 rounded-full transition-all duration-1000 delay-500 ${
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
        <div className="max-w-7xl mx-auto px-8 lg:px-16 pb-12">
          <div className="flex items-center justify-between">
            
            {/* Slide Counter */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-light" style={{ color: '#F2B2A8' }}>
                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                >
                  <div
                    className={`h-0.5 transition-all duration-500 ${
                      index === currentSlide ? 'w-12' : 'w-6 hover:w-8'
                    }`}
                    style={{ 
                      backgroundColor: index === currentSlide ? '#DA2917' : '#FFF6E4',
                      opacity: index === currentSlide ? 1 : 0.4
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 transition-all duration-300 hover:scale-110"
                style={{ color: '#FFF6E4' }}
              >
                <ChevronLeft size={20} strokeWidth={1} />
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 transition-all duration-300 hover:scale-110"
                style={{ color: '#FFF6E4' }}
              >
                {isPlaying ? <Pause size={18} strokeWidth={1} /> : <Play size={18} strokeWidth={1} />}
              </button>
              
              <button
                onClick={nextSlide}
                className="p-2 transition-all duration-300 hover:scale-110"
                style={{ color: '#FFF6E4' }}
              >
                <ChevronRight size={20} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: 'rgba(255, 246, 228, 0.1)' }}>
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            backgroundColor: '#DA2917',
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      {/* Elegant Side Navigation */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
          >
            <div
              className={`w-0.5 h-8 transition-all duration-300 ${
                index === currentSlide ? 'scale-y-125' : 'hover:scale-y-110'
              }`}
              style={{ 
                backgroundColor: index === currentSlide ? '#DA2917' : '#FFF6E4',
                opacity: index === currentSlide ? 1 : 0.3
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
      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center space-x-3">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ 
              backgroundColor: '#FFF6E4', 
              color: '#27001F'
            }}
          >
            K
          </div>
          <span className="text-sm font-light" style={{ color: '#FFF6E4' }}>
            Kifna Company
          </span>
        </div>
      </div>
    </div>
  );
};

export default KifnaHeroSlider;