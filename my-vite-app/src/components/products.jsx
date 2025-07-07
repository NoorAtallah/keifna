import React, { useState } from 'react';
import { ArrowUpRight, Star, Award, Zap, Coffee, IceCream, ChefHat } from 'lucide-react';

const KifnaProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "Ready-Made Dough",
      subtitle: "Artisan Collection",
      description: "Premium quality dough crafted with traditional methods and finest ingredients for exceptional baking results.",
      image: "https://www.shutterstock.com/image-photo/belgian-waffles-sprinkled-powdered-sugar-600nw-2480562673.jpg",
      icon: ChefHat,
      features: ["Premium Flour", "Traditional Recipe", "Ready to Use"],
      badge: "Best Seller",
      color: "#E8B4A0"
    },
    {
      id: 2,
      title: "Artisan Ice Cream",
      subtitle: "Luxury Series",
      description: "Creamy perfection made with the finest ingredients, delivering an unforgettable taste experience.",
      image: "https://cdn.prod.website-files.com/642f26ea0d34e0594a51fef5/642f26ea0d34e06e2e520136_63e14efcd861144083954869_courtney-cook-QYsRxRPygwU-unsplash.jpg",
      icon: IceCream,
      features: ["Natural Ingredients", "Creamy Texture", "Multiple Flavors"],
      badge: "Premium",
      color: "#A8C8EC"
    },
    {
      id: 3,
      title: "Ice Cream Base",
      subtitle: "Professional Line",
      description: "High-quality foundation for commercial ice cream production, ensuring consistency and excellence.",
      image: "https://gelq-1fb55.kxcdn.com/10765-large_default/leagel-easy-banana-milk-12-kg-ready-ice-cream.jpg",
      icon: Award,
      features: ["Commercial Grade", "Consistent Quality", "Easy to Use"],
      badge: "Pro Choice",
      color: "#B8E6B8"
    },
    {
      id: 4,
      title: "Coffee Collection",
      subtitle: "Heritage Blends",
      description: "From traditional Karak to premium blends, discover authentic flavors and rich heritage.",
      image: "https://kunjaninaples.com/cdn/shop/collections/specialty_small_batch_coffee-Kunjani_roasters.jpg",
      icon: Coffee,
      features: ["Premium Beans", "Traditional Karak", "Rich Aroma"],
      badge: "Traditional",
      color: "#DDB892"
    }
  ];

  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: '#FFF6E4' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span 
              className="inline-block text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-sm"
              style={{ 
                color: '#FFF6E4',
                backgroundColor: '#DA2917',
                letterSpacing: '0.2em'
              }}
            >
              Our Products
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
            style={{ 
              color: '#27001F',
              fontFamily: 'Georgia, serif'
            }}
          >
            Crafted with Excellence
          </h2>
          
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#27001F', opacity: 0.8 }}
          >
            Discover our premium range of food products, each crafted with meticulous attention to quality and traditional methods that define Jordanian excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative overflow-hidden transition-all duration-700 ${
                hoveredProduct === product.id ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                backgroundColor: '#FFF6E4',
                border: '1px solid rgba(39, 0, 31, 0.1)',
                borderRadius: '0px'
              }}
            >
              {/* Product Image */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                  }`}
                  style={{
                    filter: hoveredProduct === product.id ? 'brightness(0.8) contrast(1.1)' : 'brightness(0.9)',
                  }}
                />
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-60' : 'opacity-40'
                  }`}
                  style={{ 
                    background: `linear-gradient(135deg, rgba(39, 0, 31, 0.7) 0%, rgba(39, 0, 31, 0.4) 50%, rgba(218, 41, 23, 0.6) 100%)`
                  }}
                />

                {/* Product Badge */}
                <div className="absolute top-6 left-6">
                  <span 
                    className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full"
                    style={{ 
                      backgroundColor: '#DA2917',
                      color: '#FFF6E4'
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Product Icon */}
                <div className="absolute top-6 right-6">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredProduct === product.id ? 'scale-110' : ''
                    }`}
                    style={{ 
                      backgroundColor: 'rgba(255, 246, 228, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 246, 228, 0.3)'
                    }}
                  >
                    <product.icon size={20} style={{ color: '#FFF6E4' }} />
                  </div>
                </div>

                {/* Hover Overlay Content */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    className="flex items-center space-x-3 px-6 py-3 transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: 'rgba(255, 246, 228, 0.9)',
                      color: '#27001F',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8 lg:p-10">
                <div className="mb-6">
                  <p 
                    className="text-sm font-medium tracking-wider uppercase mb-3"
                    style={{ color: '#DA2917' }}
                  >
                    {product.subtitle}
                  </p>
                  
                  <h3 
                    className="text-2xl lg:text-3xl font-light mb-4 leading-tight"
                    style={{ 
                      color: '#27001F',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    {product.title}
                  </h3>
                  
                  <p 
                    className="text-base leading-relaxed mb-6"
                    style={{ color: '#27001F', opacity: 0.8 }}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Product Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div 
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: '#DA2917' }}
                      />
                      <span 
                        className="text-sm"
                        style={{ color: '#27001F', opacity: 0.7 }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Product Action */}
                <div className="flex items-center justify-between">
                  <button
                    className="group flex items-center space-x-2 text-sm font-medium transition-all duration-300"
                    style={{ color: '#DA2917' }}
                  >
                    <span>Explore Product</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill="#DA2917" 
                        style={{ color: '#DA2917' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-20">
          <button
            className="group inline-flex items-center px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
            style={{ 
              color: '#FFF6E4',
              backgroundColor: '#27001F',
              border: '1px solid #27001F'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#27001F';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#27001F';
              e.target.style.color = '#FFF6E4';
            }}
          >
            <span className="relative z-10 mr-3">View All Products</span>
            <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KifnaProductsSection;