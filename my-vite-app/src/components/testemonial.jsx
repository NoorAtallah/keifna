import React, { useState } from 'react';
import { ArrowUpRight, Target, Users, Award, Globe, Factory, Heart } from 'lucide-react';

const KifnaAboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      id: 1,
      number: "2020",
      label: "Established",
      icon: Factory,
      description: "Years of heritage and tradition"
    },
    {
      id: 2,
      number: "100+",
      label: "Products",
      icon: Award,
      description: "Premium quality offerings"
    },
    {
      id: 3,
      number: "50+",
      label: "Partners",
      icon: Users,
      description: "Trusted business relationships"
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
      title: "Quality Excellence",
      description: "We maintain the highest standards in every product we create, ensuring consistent quality that exceeds expectations.",
      icon: Award,
      color: "#DA2917"
    },
    {
      id: 2,
      title: "Jordanian Heritage",
      description: "Proudly rooted in Jordan, we celebrate our cultural heritage while embracing modern innovation.",
      icon: Heart,
      color: "#27001F"
    },
    {
      id: 3,
      title: "Innovation Focus",
      description: "Continuously evolving our processes and products to meet the changing needs of our customers.",
      icon: Target,
      color: "#F2B2A8"
    },
    {
      id: 4,
      title: "Global Standards",
      description: "Meeting international quality standards while maintaining competitive pricing for our valued customers.",
      icon: Globe,
      color: "#DA2917"
    }
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
                About Kifna
              </span>
              
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
                style={{ 
                  color: '#FFF6E4',
                  fontFamily: 'Georgia, serif'
                }}
              >
                Jordanian Excellence in Food Manufacturing
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#F2B2A8' }}>
                <p>
                  Kifna Company stands as one of Jordan's proudly distinguished food manufacturing companies, 
                  specializing in the production of ready-made dough, premium ice cream, and traditional hot beverages.
                </p>
                
                <p>
                  Our commitment to excellence drives us to maintain international standards and competitive pricing, 
                  ensuring that quality remains our foremost priority in every product we create.
                </p>
                
                <p>
                  Through our methodical approach and continuous pursuit of innovation, we aspire to become 
                  one of the strongest Jordanian companies in the food manufacturing industry.
                </p>
              </div>
            </div>

            <button
              className="group inline-flex items-center px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                color: '#27001F',
                backgroundColor: '#FFF6E4',
                border: '1px solid #FFF6E4'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#FFF6E4';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FFF6E4';
                e.target.style.color = '#27001F';
              }}
            >
              <span className="relative z-10 mr-3">Learn Our Story</span>
              <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
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
              Our Core Values
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
            Discover how Kifna Company can bring quality and innovation to your business with our premium food products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group inline-flex items-center px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                color: '#27001F',
                backgroundColor: '#FFF6E4',
                border: '1px solid #FFF6E4'
              }}
            >
              <span className="relative z-10 mr-3">Contact Us</span>
              <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              className="group inline-flex items-center px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default KifnaAboutSection;