import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from 'lucide-react';
import img from '../assets/7.jpeg'
import img2 from '../assets/5.jpeg'
const KifnaGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://www.tasteofhome.com/wp-content/uploads/2018/01/True-Belgian-Waffles_EXPS_FT24_4869_JR_0214_3.jpg",
      title: "Premium Dough Products",
      category: "Ready-Made Dough",
      description: "Artisanal quality dough crafted with traditional methods"
    },
    {
      id: 2,
      src: img,
      title: "Artisan Ice Cream",
      category: "Ice Cream",
      description: "Creamy perfection made with finest ingredients"
    },
    {
      id: 3,
      src: "https://gelq-1fb55.kxcdn.com/10765-large_default/leagel-easy-banana-milk-12-kg-ready-ice-cream.jpg",
      title: "Professional Base",
      category: "Ice Cream Base",
      description: "Commercial grade ice cream foundation"
    },
    {
      id: 4,
      src: "https://kunjaninaples.com/cdn/shop/collections/specialty_small_batch_coffee-Kunjani_roasters.jpg",
      title: "Coffee Collection",
      category: "Coffee & Beverages",
      description: "Premium coffee blends and traditional beverages"
    },
    {
      id: 5,
      src: img2,
      title: "Our Facility",
      category: "Manufacturing",
      description: "State-of-the-art production facility"
    },
    {
      id: 6,
      src: "https://images.ctfassets.net/grb5fvwhwnyo/75FngiKNYXRUUGKLq4AXGO/ba6296b5796bc580aa63f79d94a06efa/card-food-quality-control-procedures.jpg",
      title: "Quality Control",
      category: "Process",
      description: "Rigorous quality testing and standards"
    },
    {
      id: 7,
      src: "https://adeptpackaging.com/getmedia/c35faf9f-b16b-4dc1-9a1e-a3c05178bd9a/center-of-excellence.jpeg",
      title: "Packaging Excellence",
      category: "Packaging",
      description: "Premium packaging for product protection"
    },
    {
      id: 8,
      src: "https://www.schuitemagroup.com/wp-content/uploads/2022/04/team-excellence-schuitema-group.jpg",
      title: "Team Excellence",
      category: "Team",
      description: "Skilled professionals ensuring quality"
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: '#27001F' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span 
              className="inline-block text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-sm"
              style={{ 
                color: '#27001F',
                backgroundColor: '#F2B2A8',
                letterSpacing: '0.2em'
              }}
            >
              Our Gallery
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
            style={{ 
              color: '#FFF6E4',
              fontFamily: 'Georgia, serif'
            }}
          >
            Behind the Scenes
          </h2>
          
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#F2B2A8', opacity: 0.9 }}
          >
            Take a visual journey through our world-class facilities, premium products, and the dedication that goes into every item we create.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ${
                index === 0 || index === 4 ? 'md:col-span-2 md:row-span-2' : ''
              } ${hoveredImage === image.id ? 'scale-105 z-10' : ''}`}
              style={{
                height: index === 0 || index === 4 ? '400px' : '200px',
                backgroundColor: 'rgba(255, 246, 228, 0.05)',
                border: '1px solid rgba(255, 246, 228, 0.1)'
              }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => openLightbox(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredImage === image.id ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  filter: hoveredImage === image.id ? 'brightness(0.8) contrast(1.1)' : 'brightness(0.7)',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.background = `linear-gradient(135deg, #DA2917 0%, #27001F 100%)`;
                }}
              />
              
              {/* Overlay */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredImage === image.id ? 'opacity-70' : 'opacity-40'
                }`}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(39, 0, 31, 0.8) 0%, rgba(218, 41, 23, 0.6) 100%)'
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className={`transition-all duration-500 ${
                  hoveredImage === image.id ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-80'
                }`}>
                  <span 
                    className="inline-block text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-sm mb-2"
                    style={{ 
                      backgroundColor: '#DA2917',
                      color: '#FFF6E4'
                    }}
                  >
                    {image.category}
                  </span>
                  
                  <h3 
                    className="text-lg md:text-xl font-medium mb-2"
                    style={{ 
                      color: '#FFF6E4',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    {image.title}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: '#F2B2A8', opacity: 0.9 }}
                  >
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Hover Icon */}
              <div 
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredImage === image.id ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
                }`}
                style={{ 
                  backgroundColor: 'rgba(255, 246, 228, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 246, 228, 0.3)'
                }}
              >
                <ZoomIn size={16} style={{ color: '#FFF6E4' }} />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-16">
          <button
            className="group inline-flex items-center px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
            style={{ 
              color: '#FFF6E4',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 246, 228, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 246, 228, 0.1)';
              e.target.style.borderColor = '#FFF6E4';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = 'rgba(255, 246, 228, 0.3)';
            }}
          >
            <span className="relative z-10 mr-3">View Full Gallery</span>
            <ExternalLink size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div> */}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
              style={{ 
                backgroundColor: 'rgba(255, 246, 228, 0.1)',
                color: '#FFF6E4'
              }}
            >
              <X size={20} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
              style={{ 
                backgroundColor: 'rgba(255, 246, 228, 0.1)',
                color: '#FFF6E4'
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
              style={{ 
                backgroundColor: 'rgba(255, 246, 228, 0.1)',
                color: '#FFF6E4'
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div 
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{ 
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span 
                className="inline-block text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-sm mb-2"
                style={{ 
                  backgroundColor: '#DA2917',
                  color: '#FFF6E4'
                }}
              >
                {selectedImage.category}
              </span>
              <h3 
                className="text-2xl font-medium mb-2"
                style={{ 
                  color: '#FFF6E4',
                  fontFamily: 'Georgia, serif'
                }}
              >
                {selectedImage.title}
              </h3>
              <p 
                className="text-base"
                style={{ color: '#F2B2A8' }}
              >
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KifnaGallerySection;