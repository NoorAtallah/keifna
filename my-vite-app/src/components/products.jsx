import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { ArrowUpRight, Star, Award, Zap, Coffee, IceCream, ChefHat, Droplets, Flame } from 'lucide-react';
import { productsData } from '../data/productsData'; // Import the data

const KifnaProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  // Convert the data structure to array format for the grid
  const products = [
    {
      id: 1,
      title: "Pastry",
      subtitle: "Artisan Collection",
      description: "Premium quality pastry products crafted with traditional methods and finest ingredients for exceptional taste.",
      image: productsData.pastry.mainImage,
      icon: ChefHat,
      features: ["Fresh Daily", "Traditional Recipe", "Premium Quality"],
      badge: "Best Seller",
      color: "#E8B4A0",
      route: "/products/pastry" // Add route for navigation
    },
    {
      id: 2,
      title: "Karak Tea",
      subtitle: "Heritage Blend",
      description: "Authentic Jordanian Karak tea with rich spices and traditional brewing methods for the perfect cup.",
      image: productsData.karakTea.mainImage,
      icon: Coffee,
      features: ["Traditional Spices", "Rich Flavor", "Authentic Recipe"],
      badge: "Traditional",
      color: "#DDB892",
      route: "/products/karak-tea"
    },
    {
      id: 3,
      title: "Ice Cream",
      subtitle: "Luxury Series",
      description: "Creamy perfection made with the finest ingredients, delivering an unforgettable taste experience.",
      image: productsData.iceCream.mainImage,
      icon: IceCream,
      features: ["Natural Ingredients", "Creamy Texture", "Multiple Flavors"],
      badge: "Premium",
      color: "#A8C8EC",
      route: "/products/ice-cream"
    },
    {
      id: 4,
      title: "Ice Drinks",
      subtitle: "Refreshing Choice",
      description: "Cool and refreshing beverages perfect for any occasion, made with quality ingredients.",
      image: productsData.iceDrinks.mainImage,
      icon: Droplets,
      features: ["Refreshing", "Quality Ingredients", "Perfect Temperature"],
      badge: "Cool",
      color: "#87CEEB",
      route: "/products/ice-drinks"
    },
    {
      id: 5,
      title: "Hot Drinks",
      subtitle: "Warming Collection",
      description: "Comforting hot beverages that warm the soul, crafted with premium ingredients and traditional methods.",
      image: productsData.hotDrinks.mainImage,
      icon: Flame,
      features: ["Premium Blend", "Warming", "Rich Aroma"],
      badge: "Comfort",
      color: "#CD853F",
      route: "/products/hot-drinks"
    },
    {
      id: 6,
      title: "Coffee",
      subtitle: "Premium Roast",
      description: "From traditional Arabic coffee to modern blends, discover authentic flavors and rich heritage.",
      image: productsData.coffee.mainImage,
      icon: Coffee,
      features: ["Premium Beans", "Expert Roasting", "Rich Flavor"],
      badge: "Premium",
      color: "#8B4513",
      route: "/products/coffee"
    },
    {
      id: 7,
      title: "Paste",
      subtitle: "Culinary Base",
      description: "High-quality paste products for culinary excellence, ensuring consistency and exceptional taste.",
      image: productsData.paste.mainImage,
      icon: Award,
      features: ["High Quality", "Consistent Taste", "Versatile Use"],
      badge: "Essential",
      color: "#B8860B",
      route: "/products/paste"
    }
  ];

  // Handle navigation to product category page
  const handleProductClick = (route) => {
    navigate(route);
  };

  // Handle explore product button click
  const handleExploreClick = (route) => {
    navigate(route);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32" style={{ backgroundColor: '#FFF6E4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-4 sm:mb-6">
            <span 
              className="inline-block text-xs sm:text-sm font-medium tracking-widest uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm"
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 sm:mb-8 leading-tight"
            style={{ 
              color: '#27001F',
              fontFamily: 'Georgia, serif'
            }}
          >
            Crafted with Excellence
          </h2>
          
          <p 
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#27001F', opacity: 0.8 }}
          >
            Discover our premium range of food products, each crafted with meticulous attention to quality and traditional methods that define Jordanian excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative overflow-hidden transition-all duration-700 cursor-pointer ${
                hoveredProduct === product.id ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleProductClick(product.route)}
              style={{
                backgroundColor: '#FFF6E4',
                border: '1px solid rgba(39, 0, 31, 0.1)',
                borderRadius: '0px'
              }}
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-64 lg:h-72 overflow-hidden">
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
                    background: `linear-gradient(135deg, rgba(39, 0, 31, 0.5) 0%, rgba(39, 0, 31, 0.3) 50%, rgba(218, 41, 23, 0.4) 100%)`
                  }}
                />

                {/* Product Badge */}
                <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6">
                  <span 
                    className="inline-block text-xs font-bold uppercase tracking-wider px-2 py-1 sm:px-3 sm:py-2 rounded-full"
                    style={{ 
                      backgroundColor: '#DA2917',
                      color: '#FFF6E4'
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Product Icon */}
                <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6">
                  <div 
                    className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredProduct === product.id ? 'scale-110' : ''
                    }`}
                    style={{ 
                      backgroundColor: 'rgba(255, 246, 228, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 246, 228, 0.3)'
                    }}
                  >
                    <product.icon size={16} className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" style={{ color: '#FFF6E4' }} />
                  </div>
                </div>

                {/* Hover Overlay Content */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    className="flex items-center space-x-2 sm:space-x-3 px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    style={{ 
                      backgroundColor: 'rgba(255, 246, 228, 0.9)',
                      color: '#27001F',
                      backdropFilter: 'blur(10px)'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.route);
                    }}
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="mb-4 sm:mb-6">
                  <p 
                    className="text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 sm:mb-3"
                    style={{ color: '#DA2917' }}
                  >
                    {product.subtitle}
                  </p>
                  
                  <h3 
                    className="text-lg sm:text-xl lg:text-2xl font-light mb-3 sm:mb-4 leading-tight"
                    style={{ 
                      color: '#27001F',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    {product.title}
                  </h3>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6"
                    style={{ color: '#27001F', opacity: 0.8 }}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Product Features */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 sm:space-x-3">
                      <div 
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: '#DA2917' }}
                      />
                      <span 
                        className="text-xs sm:text-sm"
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
                    className="group flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium transition-all duration-300"
                    style={{ color: '#DA2917' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExploreClick(product.route);
                    }}
                  >
                    <span>Explore Product</span>
                    <ArrowUpRight size={12} className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <div className="flex items-center space-x-0.5 sm:space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className="sm:w-3.5 sm:h-3.5"
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
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button
            className="group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
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
            onClick={() => navigate('/products')}
          >
            <span className="relative z-10 mr-2 sm:mr-3">View All Products</span>
            <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px] relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KifnaProductsSection;