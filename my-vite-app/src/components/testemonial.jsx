import React, { useState } from 'react';
import { ArrowUpRight, Target, Users, Award, Globe, Factory, Heart, Calendar, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
const KifnaAboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      id: 1,
      number: "2005",
      label: "Established",
      icon: Calendar,
      description: "Nearly 20 years of excellence"
    },
    {
      id: 2,
      number: "100+",
      label: "Products",
      icon: Award,
      description: "Ready-made mixes & beverages"
    },
    {
      id: 3,
      number: "6+",
      label: "Countries",
      icon: Globe,
      description: "Global distribution network"
    },
    {
      id: 4,
      number: "5★",
      label: "Quality",
      icon: Target,
      description: "International standards"
    }
  ];

  const values = [
    {
      id: 1,
      title: "Excellence",
      description: "In every blend and every flavor, we maintain the highest standards to deliver exceptional products.",
      icon: Award,
      color: "#DA2917"
    },
    {
      id: 2,
      title: "Continuous Innovation",
      description: "To meet the dynamic needs of the market, we constantly evolve our products and technologies.",
      icon: Target,
      color: "#27001F"
    },
    {
      id: 3,
      title: "Reliability",
      description: "Building long-term partnerships with our customers and agents through consistent quality and support.",
      icon: Users,
      color: "#F2B2A8"
    },
    {
      id: 4,
      title: "Sustainability",
      description: "Adopting production practices that respect the environment and prioritize consumer health.",
      icon: Heart,
      color: "#DA2917"
    }
  ];

  const productLines = [
    "Ready-made cake mixes – just add water",
    "Premium crepe and waffle mixes with perfectly balanced texture and taste",
    "Hot chocolate drinks and milk coffee blends",
    "Soft serve ice cream powder and gelato bases with professional-grade flavors",
    "Specialized products for the HoReCa sector (hotels, restaurants, cafes)"
  ];

  const countries = [
    "United States of America",
    "Saudi Arabia", 
    "Iraq",
    "Palestine",
    "Egypt",
    "Kuwait"
  ];

  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: '#27001F' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <span 
                className="inline-block text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-sm mb-6"
                style={{ 
                  color: '#27001F',
                  backgroundColor: '#F2B2A8',
                  letterSpacing: '0.2em'
                }}
              >
                About Us
              </span>
              
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
                style={{ 
                  color: '#FFF6E4',
                  fontFamily: 'Georgia, serif'
                }}
              >
                Crafting Flavor & Quality Since 2005
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#F2B2A8' }}>
                <p>
                  At Keifna Food Industries, we craft a story of flavor and quality that began with our founding in 2005. 
                  Driven by a passion for creating innovative food products, we strive to deliver offerings that cater to 
                  the tastes of both Arab and international consumers.
                </p>
                
                <p>
                  Based in Jordan, our vision is clear: to be a leading manufacturer of ready-made mixes and creative 
                  beverages that make delicious experiences simple and accessible.
                </p>
                
                <p>
                  For over 20 years, we have been refining our blends and flavors in collaboration with international 
                  experts in food additives and manufacturing technologies, delivering integrated solutions that meet 
                  evolving market needs.
                </p>
              </div>
            </div>

      
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`group relative p-8 transition-all duration-500 hover:scale-105 ${
                  hoveredStat === stat.id ? 'scale-105' : ''
                }`}
                style={{
                  backgroundColor: 'rgba(255, 246, 228, 0.05)',
                  border: '1px solid rgba(255, 246, 228, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredStat === stat.id ? 'scale-110' : ''
                    }`}
                    style={{ 
                      backgroundColor: hoveredStat === stat.id ? '#DA2917' : 'rgba(218, 41, 23, 0.2)',
                      border: '1px solid rgba(218, 41, 23, 0.3)'
                    }}
                  >
                    <stat.icon 
                      size={20} 
                      style={{ 
                        color: hoveredStat === stat.id ? '#FFF6E4' : '#DA2917' 
                      }} 
                    />
                  </div>
                </div>

                {/* Number */}
                <h3 
                  className="text-3xl lg:text-4xl font-bold mb-2"
                  style={{ 
                    color: '#FFF6E4',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  {stat.number}
                </h3>

                {/* Label */}
                <p 
                  className="text-lg font-medium mb-2"
                  style={{ color: '#F2B2A8' }}
                >
                  {stat.label}
                </p>

                {/* Description */}
                <p 
                  className="text-sm opacity-80"
                  style={{ color: '#F2B2A8' }}
                >
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 transition-all duration-300 ${
                    hoveredStat === stat.id ? 'w-full' : 'w-0'
                  }`}
                  style={{ backgroundColor: '#DA2917' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Lines Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ 
                color: '#FFF6E4',
                fontFamily: 'Georgia, serif'
              }}
            >
              Our Product Lines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productLines.map((product, index) => (
              <div
                key={index}
                className="group p-6 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255, 246, 228, 0.05)',
                  border: '1px solid rgba(255, 246, 228, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#DA2917' }}
                  />
                  <p 
                    className="text-base leading-relaxed"
                    style={{ color: '#F2B2A8' }}
                  >
                    {product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ 
                color: '#FFF6E4',
                fontFamily: 'Georgia, serif'
              }}
            >
              Our Agents Worldwide
            </h3>
            <p 
              className="text-lg max-w-3xl mx-auto mb-8"
              style={{ color: '#F2B2A8', opacity: 0.9 }}
            >
              We are proud of our extensive network of official agents and distributors representing Keifna in various countries. 
              We believe our agents are partners in success, and we continuously provide them with technical and marketing support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="group text-center p-4 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255, 246, 228, 0.05)',
                  border: '1px solid rgba(255, 246, 228, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="mb-3 flex justify-center">
                  <Globe size={24} style={{ color: '#DA2917' }} />
                </div>
                <p 
                  className="text-sm font-medium"
                  style={{ color: '#F2B2A8' }}
                >
                  {country}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div 
            className="p-8 lg:p-12"
            style={{ 
              backgroundColor: 'rgba(255, 246, 228, 0.05)',
              border: '1px solid rgba(255, 246, 228, 0.1)'
            }}
          >
            <div className="mb-6">
              <Target size={32} style={{ color: '#DA2917' }} />
            </div>
            <h4 
              className="text-2xl font-light mb-4"
              style={{ 
                color: '#FFF6E4',
                fontFamily: 'Georgia, serif'
              }}
            >
              Our Vision
            </h4>
            <p 
              className="text-base leading-relaxed"
              style={{ color: '#F2B2A8', opacity: 0.9 }}
            >
              To become the preferred manufacturer for food and beverage providers across the Middle East by 
              committing to quality and innovation.
            </p>
          </div>

          <div 
            className="p-8 lg:p-12"
            style={{ 
              backgroundColor: 'rgba(255, 246, 228, 0.05)',
              border: '1px solid rgba(255, 246, 228, 0.1)'
            }}
          >
            <div className="mb-6">
              <Building size={32} style={{ color: '#DA2917' }} />
            </div>
            <h4 
              className="text-2xl font-light mb-4"
              style={{ 
                color: '#FFF6E4',
                fontFamily: 'Georgia, serif'
              }}
            >
              Our Mission
            </h4>
            <p 
              className="text-base leading-relaxed"
              style={{ color: '#F2B2A8', opacity: 0.9 }}
            >
              To deliver expertly crafted products that save time and effort while preserving authentic taste 
              and industrial-grade quality.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t pt-20" style={{ borderColor: 'rgba(255, 246, 228, 0.1)' }}>
          <div className="text-center mb-16">
            <h3 
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ 
                color: '#FFF6E4',
                fontFamily: 'Georgia, serif'
              }}
            >
              Our Values
            </h3>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: '#F2B2A8', opacity: 0.9 }}
            >
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="group text-center p-6 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: 'rgba(255, 246, 228, 0.1)',
                      border: '2px solid rgba(255, 246, 228, 0.2)'
                    }}
                  >
                    <value.icon 
                      size={24} 
                      style={{ color: value.color }} 
                    />
                  </div>
                </div>

                {/* Title */}
                <h4 
                  className="text-xl font-medium mb-4"
                  style={{ 
                    color: '#FFF6E4',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  {value.title}
                </h4>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#F2B2A8', opacity: 0.8 }}
                >
                  {value.description}
                </p>

                {/* Decorative Element */}
                <div 
                  className="w-8 h-0.5 mx-auto mt-6 transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: value.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className="text-center mt-20 p-12 lg:p-16"
          style={{ 
            backgroundColor: 'rgba(255, 246, 228, 0.05)',
            border: '1px solid rgba(255, 246, 228, 0.1)'
          }}
        >
          <h3 
            className="text-3xl md:text-4xl font-light mb-6"
            style={{ 
              color: '#FFF6E4',
              fontFamily: 'Georgia, serif'
            }}
          >
            Ready to Experience Excellence?
          </h3>
          
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: '#F2B2A8', opacity: 0.9 }}
          >
            Discover how Keifna Food Industries can bring quality and innovation to your business with our premium food products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='./contact'>
            <button
              className="group inline-flex items-center px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ 
                color: '#27001F',
                backgroundColor: '#FFF6E4',
                border: '1px solid #FFF6E4'
              }}
            >
              <span className="relative z-10 mr-3">Contact Us</span>
              <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
</Link>
            <Link to='./products'> 
            <button
              className="group inline-flex items-center px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ 
                color: '#FFF6E4',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 246, 228, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 246, 228, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <span className="relative z-10 mr-3">View Products</span>
              <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KifnaAboutSection;