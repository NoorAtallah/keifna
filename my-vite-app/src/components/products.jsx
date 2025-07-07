import React, { useState } from 'react';
import { 
  Coffee, 
  Cookie, 
  IceCream, 
  Sparkles, 
  Shield, 
  Award, 
  Users, 
  ArrowRight,
  CheckCircle,
  Globe
} from 'lucide-react';
import img from '../assets/2.png'; // Adjust the path as necessary
const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "Ready-Made Dough",
      description: "Premium quality dough prepared with the finest ingredients for consistent results",
      icon: Cookie,
      image: img,
      color: "#B91646",
      features: ["Fresh Daily", "High Quality", "Ready to Use"]
    },
    {
      id: 2,
      title: "Premium Ice Cream",
      description: "Creamy, delicious ice cream made with natural ingredients and traditional methods",
      icon: IceCream,
      image: img,
      color: "#105652",
      features: ["Natural Ingredients", "Rich Texture", "Multiple Flavors"]
    },
    {
      id: 3,
      title: "Ice Cream Base",
      description: "Professional-grade ice cream base for consistent quality and perfect results",
      icon: Sparkles,
      image: img,
      color: "#B91646",
      features: ["Professional Grade", "Easy to Use", "Consistent Quality"]
    },
    {
      id: 4,
      title: "Karak Tea",
      description: "Authentic Middle Eastern spiced tea blend with traditional flavors and aroma",
      icon: Coffee,
      image: img,
      color: "#105652",
      features: ["Authentic Recipe", "Premium Spices", "Rich Flavor"]
    },
    {
      id: 5,
      title: "Plain Coffee",
      description: "Pure, high-quality coffee beans roasted to perfection for the perfect cup",
      icon: Coffee,
      image: img,
      color: "#B91646",
      features: ["Premium Beans", "Perfect Roast", "Rich Aroma"]
    },
    {
      id: 6,
      title: "Hot Beverages",
      description: "A complete range of hot beverage mixes for cafes and restaurants",
      icon: Coffee,
      image: img,
      color: "#105652",
      features: ["Variety of Options", "Cafe Quality", "Easy Preparation"]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "International standards with rigorous quality control processes"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the finest products with consistent quality"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting relationships through exceptional service and support"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Meeting international specifications with competitive pricing"
    }
  ];

  // Jordanian pattern background
  const jordanianPattern = (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.03 }}>
      <defs>
        <pattern id="section-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="transparent"/>
          {/* Traditional geometric pattern */}
          <path d="M0,0 L80,80 M0,80 L80,0" stroke="#B91646" strokeWidth="1" opacity="0.3"/>
          <path d="M0,20 L20,0 M60,0 L80,20 M0,60 L20,80 M60,80 L80,60" stroke="#B91646" strokeWidth="0.8" opacity="0.2"/>
          <path d="M20,0 L20,80 M40,0 L40,80 M60,0 L60,80" stroke="#105652" strokeWidth="0.4" opacity="0.3"/>
          <path d="M0,20 L80,20 M0,40 L80,40 M0,60 L80,60" stroke="#105652" strokeWidth="0.4" opacity="0.3"/>
          {/* Decorative elements */}
          <circle cx="40" cy="40" r="3" fill="#B91646" opacity="0.2"/>
          <polygon points="40,15 55,30 40,45 25,30" fill="#105652" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#section-pattern)"/>
    </svg>
  );

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FBF3E4' }}>
      {/* Background pattern */}
      {jordanianPattern}
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" style={{ 
        background: `linear-gradient(90deg, #105652 0%, #B91646 50%, #105652 100%)` 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-6" 
               style={{ backgroundColor: '#DFD8CA', color: '#105652' }}>
            <Sparkles className="w-4 h-4 mr-2" style={{ color: '#B91646' }} />
            Our Product Range
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#105652' }}>
            Crafted with 
            <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3" 
                  style={{ backgroundImage: `linear-gradient(45deg, #B91646, #105652)` }}>
              Jordanian Pride
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From traditional recipes to modern innovations, we deliver exceptional food products 
            that meet international standards while celebrating our Jordanian heritage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 cursor-pointer"
                style={{ borderColor: hoveredProduct === product.id ? product.color : '#DFD8CA' }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Image overlay with Jordanian pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                       style={{ 
                         backgroundColor: hoveredProduct === product.id ? product.color : 'rgba(255,255,255,0.9)'
                       }}>
                    <IconComponent 
                      className="w-6 h-6 transition-colors duration-300" 
                      style={{ color: hoveredProduct === product.id ? 'white' : product.color }}
                    />
                  </div>

                  {/* Decorative corner pattern on image */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 opacity-20">
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <path d="M0,64 L64,64 L64,0 Z" fill={product.color}/>
                      <path d="M0,64 L32,64 L32,32 Z" fill="white" opacity="0.3"/>
                    </svg>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 transition-colors duration-300" 
                      style={{ color: hoveredProduct === product.id ? product.color : '#105652' }}>
                    {product.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: product.color }} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm font-medium transition-colors duration-300"
                         style={{ color: product.color }}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    
                    {/* Product badge */}
                    <div className="px-3 py-1 rounded-full text-xs font-medium"
                         style={{ 
                           backgroundColor: hoveredProduct === product.id ? product.color : '#DFD8CA',
                           color: hoveredProduct === product.id ? 'white' : product.color
                         }}>
                      Premium
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 rounded-3xl opacity-5" 
               style={{ background: `linear-gradient(135deg, #105652, #B91646)` }}></div>
          
          <div className="relative z-10 text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#105652' }}>
              Our Commitment to Excellence
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on Jordanian values of quality, integrity, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                       style={{ backgroundColor: '#DFD8CA' }}>
                    <IconComponent 
                      className="w-10 h-10 transition-colors duration-300" 
                      style={{ color: index % 2 === 0 ? '#B91646' : '#105652' }}
                    />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#105652' }}>
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                    style={{ backgroundColor: '#B91646' }}>
              <span className="flex items-center justify-center">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
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
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Decorative bottom elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <polygon points="32,8 48,24 32,40 16,24" fill="#B91646"/>
          <circle cx="32" cy="24" r="6" fill="#105652"/>
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 w-20 h-20 opacity-10">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="40" cy="40" r="35" fill="#105652"/>
          <polygon points="40,15 60,30 60,50 40,65 20,50 20,30" fill="#B91646"/>
        </svg>
      </div>
    </section>
  );
};

export default ProductsSection;