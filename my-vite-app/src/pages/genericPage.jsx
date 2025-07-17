import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Heart, Eye, Info } from 'lucide-react';
import { productsData } from '../data/productsData';

const GenericCategoryPage = ({ categoryKey, categoryIcon }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();

  const categoryData = productsData[categoryKey];
  const IconComponent = categoryIcon;

  const handleBack = () => {
    navigate(-1);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  // Function to get preparation instructions based on product type
  const getPreparationInstructions = (product) => {
    const instructions = {
      'waffle': {
        ready: 'Ready-to-prepare waffle mix - just add water',
        preparation: 'Preparation Method:',
        steps: 'Add 900ml of water per 1kg of waffle mix and enjoy the delicious taste'
      },
      'pan-cake': {
        ready: 'Ready-to-prepare pancake mix - just add water and eggs',
        preparation: 'Preparation Method:',
        steps: 'Add 800ml of water and 2 eggs per 1kg of pancake mix, mix well and cook on medium heat'
      },
      'crepe': {
        ready: 'Ready-to-prepare crêpe mix - just add milk',
        preparation: 'Preparation Method:',
        steps: 'Add 1 liter of milk per 1kg of crêpe mix, whisk until smooth and let rest for 30 minutes'
      },
      'muffin-cake': {
        ready: 'Ready-to-prepare muffin mix - just add water and oil',
        preparation: 'Preparation Method:',
        steps: 'Add 600ml of water and 200ml of oil per 1kg of muffin mix, bake at 180°C for 20-25 minutes'
      },
      'sponge-cake': {
        ready: 'Ready-to-prepare sponge cake mix - just add water and eggs',
        preparation: 'Preparation Method:',
        steps: 'Add 500ml of water and 4 eggs per 1kg of mix, beat for 5 minutes and bake at 170°C for 30 minutes'
      },
      'bubbles': {
        ready: 'Ready-to-prepare bubble pastry mix - just add water',
        preparation: 'Preparation Method:',
        steps: 'Add 700ml of warm water per 1kg of mix, knead well and deep fry until golden'
      },
      'qatayef': {
        ready: 'Traditional qatayef mix - just add water',
        preparation: 'Preparation Method:',
        steps: 'Add 1.2 liters of water per 1kg of mix, let batter rest for 1 hour, cook on special qatayef pan'
      },
      'awameh': {
        ready: 'Ready-to-prepare awameh mix - just add water and yeast',
        preparation: 'Preparation Method:',
        steps: 'Add 800ml of warm water and 5g yeast per 1kg of mix, let rise for 2 hours, then deep fry'
      },
      'umm-ali': {
        ready: 'Premium umm ali mix - just add hot milk',
        preparation: 'Preparation Method:',
        steps: 'Add 1 liter of hot milk per 500g of mix, let soak for 10 minutes and serve warm'
      },
      'karak-tea-original': {
        ready: 'Authentic karak tea blend - just add hot water and milk',
        preparation: 'Preparation Method:',
        steps: 'Add 200ml hot water and 100ml milk per 2 teaspoons of karak, boil for 3 minutes'
      },
      'hot-chocolate': {
        ready: 'Premium hot chocolate mix - just add hot milk',
        preparation: 'Preparation Method:',
        steps: 'Add 250ml of hot milk per 3 tablespoons of mix, stir well and enjoy'
      },
      'cappuccino': {
        ready: 'Instant cappuccino mix - just add hot water',
        preparation: 'Preparation Method:',
        steps: 'Add 180ml of hot water per 2 tablespoons of mix, stir well and top with foam'
      },
      'pistachio-paste': {
        ready: '100% natural pistachio paste - ready to use',
        preparation: 'Usage Instructions:',
        steps: 'Use directly in desserts, pastries, or mix with cream for fillings. Store in cool, dry place'
      },
      'chocolate-paste': {
        ready: 'Premium chocolate paste - ready to use',
        preparation: 'Usage Instructions:',
        steps: 'Perfect for fillings, toppings, or direct consumption. Can be heated for smoother consistency'
      }
    };

    // Return specific instructions or default ones
    return instructions[product.id] || {
      ready: 'Premium quality product - ready to serve',
      preparation: 'Serving Suggestion:',
      steps: 'Serve fresh and enjoy the authentic taste of traditional Middle Eastern cuisine'
    };
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF6E4' }}>
      {/* Header Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={categoryData.mainImage}
          alt={categoryData.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(135deg, rgba(39, 0, 31, 0.7) 0%, rgba(218, 41, 23, 0.5) 100%)'
          }}
        />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="mb-4">
            <span 
              className="inline-block text-xs sm:text-sm font-medium tracking-widest uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm"
              style={{ 
                color: '#FFF6E4',
                backgroundColor: '#DA2917',
                letterSpacing: '0.2em'
              }}
            >
              {categoryData.badge}
            </span>
          </div>
          
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight"
            style={{ 
              color: '#FFF6E4',
              fontFamily: 'Georgia, serif'
            }}
          >
            {categoryData.title}
          </h1>
          
          <p 
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: '#FFF6E4', opacity: 0.9 }}
          >
            {categoryData.description}
          </p>
        </div>

        <button
          onClick={handleBack}
          className="absolute top-6 left-6 flex items-center space-x-2 px-4 py-2 transition-all duration-300 hover:scale-105"
          style={{ 
            backgroundColor: 'rgba(255, 246, 228, 0.2)',
            color: '#FFF6E4',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 246, 228, 0.3)',
            borderRadius: '6px'
          }}
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4"
            style={{ 
              color: '#27001F',
              fontFamily: 'Georgia, serif'
            }}
          >
            Our {categoryData.title} Collection
          </h2>
          <p 
            className="text-base sm:text-lg leading-relaxed max-w-3xl"
            style={{ color: '#27001F', opacity: 0.8 }}
          >
            Discover our complete range of {categoryData.title.toLowerCase()} products, each crafted with premium ingredients and traditional methods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {categoryData.products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative overflow-hidden transition-all duration-500 cursor-pointer ${
                hoveredProduct === product.id ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleProductSelect(product)}
              style={{
                backgroundColor: '#FFF6E4',
                border: '1px solid rgba(39, 0, 31, 0.1)',
                borderRadius: '8px',
                boxShadow: hoveredProduct === product.id ? '0 10px 30px rgba(39, 0, 31, 0.1)' : '0 4px 15px rgba(39, 0, 31, 0.05)'
              }}
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden" style={{ borderRadius: '8px 8px 0 0' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-40' : 'opacity-0'
                  }`}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(39, 0, 31, 0.3) 0%, rgba(218, 41, 23, 0.2) 100%)'
                  }}
                />

                <div 
                  className={`absolute top-3 right-3 flex flex-col space-y-2 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ 
                      backgroundColor: 'rgba(255, 246, 228, 0.9)',
                      color: '#27001F'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart size={14} />
                  </button>
                </div>

                <div className="absolute bottom-3 left-3">
                  <span 
                    className="inline-block text-sm font-bold px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: '#DA2917',
                      color: '#FFF6E4'
                    }}
                  >
                    
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 
                      className="text-lg sm:text-xl font-medium leading-tight"
                      style={{ 
                        color: '#27001F',
                        fontFamily: 'Georgia, serif'
                      }}
                    >
                      {product.name}
                    </h3>
                    <IconComponent size={16} style={{ color: '#DA2917' }} />
                  </div>
                  
                  <p 
                    className="text-sm mb-2"
                    style={{ color: '#DA2917', fontWeight: '500' }}
                  >
                    {product.nameArabic}
                  </p>
                  
                  <p 
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: '#27001F', opacity: 0.8 }}
                  >
                    {product.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ 
                          backgroundColor: 'rgba(218, 41, 23, 0.1)',
                          color: '#DA2917'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: '#27001F',
                      color: '#FFF6E4',
                      borderRadius: '6px'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye size={14} />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12}
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
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(39, 0, 31, 0.8)' }}
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            style={{ 
              backgroundColor: '#FFF6E4',
              borderRadius: '12px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover"
                style={{ borderRadius: '12px 12px 0 0' }}
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold"
                style={{ 
                  backgroundColor: 'rgba(255, 246, 228, 0.9)',
                  color: '#27001F'
                }}
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 
                  className="text-2xl font-light mb-2"
                  style={{ 
                    color: '#27001F',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  {selectedProduct.name}
                </h3>
                <p 
                  className="text-lg mb-4"
                  style={{ color: '#DA2917', fontWeight: '500' }}
                >
                  {selectedProduct.nameArabic}
                </p>
                <p 
                  className="text-base leading-relaxed mb-4"
                  style={{ color: '#27001F', opacity: 0.8 }}
                >
                  {selectedProduct.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: '#DA2917' }}
                  >
                    {selectedProduct.price}
                  </span>
                </div>
              </div>

              {/* Preparation Instructions */}
              <div className="mb-6 p-4" style={{ backgroundColor: 'rgba(218, 41, 23, 0.05)', borderRadius: '8px' }}>
                <div className="flex items-center mb-3">
                  <Info size={20} style={{ color: '#DA2917' }} className="mr-2" />
                  <h4 
                    className="text-lg font-medium"
                    style={{ color: '#27001F' }}
                  >
                    Product Information
                  </h4>
                </div>
                
                <p 
                  className="text-base font-medium mb-3"
                  style={{ color: '#27001F' }}
                >
                  {getPreparationInstructions(selectedProduct).ready}
                </p>
                
                <h5 
                  className="text-base font-medium mb-2"
                  style={{ color: '#DA2917' }}
                >
                  {getPreparationInstructions(selectedProduct).preparation}
                </h5>
                
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: '#27001F', opacity: 0.8 }}
                >
                  {getPreparationInstructions(selectedProduct).steps}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 
                  className="text-lg font-medium mb-3"
                  style={{ color: '#27001F' }}
                >
                  Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: '#DA2917' }}
                      />
                      <span 
                        className="text-sm"
                        style={{ color: '#27001F' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flavors if available */}
              {selectedProduct.flavors && (
                <div className="mb-6">
                  <h4 
                    className="text-lg font-medium mb-3"
                    style={{ color: '#27001F' }}
                  >
                    Available Flavors:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.flavors.map((flavor, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ 
                          backgroundColor: 'rgba(218, 41, 23, 0.1)',
                          color: '#DA2917'
                        }}
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Close button */}
              <div className="text-center">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#27001F',
                    color: '#FFF6E4',
                    borderRadius: '8px'
                  }}
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenericCategoryPage;