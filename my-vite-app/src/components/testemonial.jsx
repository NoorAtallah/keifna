import React, { useState, useEffect } from 'react';
import { 
  Quote, 
  Star, 
  MapPin, 
  Users, 
  TrendingUp, 
  Award, 
  Heart,
  ChevronLeft,
  ChevronRight,
  Building,
  Target,
  Zap
} from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmad Al-Mahmoud",
      position: "Restaurant Owner",
      company: "Al-Quds Restaurant",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Kaifna has been our trusted partner for over 3 years. Their ready-made dough consistently delivers perfect results, and their customer service is exceptional. Highly recommended!",
      location: "Amman, Jordan"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "Cafe Manager",
      company: "Corner Cafe",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The quality of Kaifna's ice cream base is outstanding. Our customers always compliment the rich, creamy texture. It's helped us build a loyal customer base.",
      location: "Irbid, Jordan"
    },
    {
      id: 3,
      name: "Omar Khatib",
      position: "Head Chef",
      company: "Petra Palace Hotel",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with Kaifna has elevated our beverage menu. Their Karak tea blend is authentic and perfectly spiced. Our guests love the traditional taste.",
      location: "Petra, Jordan"
    },
    {
      id: 4,
      name: "Layla Hassan",
      position: "Bakery Owner",
      company: "Golden Wheat Bakery",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Kaifna's products have transformed our bakery operations. The consistency and quality allow us to focus on creativity while maintaining excellent standards.",
      location: "Zarqa, Jordan"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      color: "#B91646"
    },
    {
      icon: Building,
      number: "1000+",
      label: "Products Delivered",
      color: "#105652"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      color: "#B91646"
    },
    {
      icon: MapPin,
      number: "50+",
      label: "Cities Served",
      color: "#105652"
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started with a vision to bring quality food products to Jordan",
      icon: Target
    },
    {
      year: "2012",
      title: "Product Expansion",
      description: "Added ice cream and beverage lines to our portfolio",
      icon: TrendingUp
    },
    {
      year: "2018",
      title: "Quality Certification",
      description: "Achieved international quality standards and certifications",
      icon: Award
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Became one of Jordan's leading food manufacturing companies",
      icon: Zap
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Jordanian pattern background
  const jordanianPattern = (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.04 }}>
      <defs>
        <pattern id="testimonial-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="transparent"/>
          {/* Traditional shemagh pattern */}
          <path d="M0,0 L100,100 M0,100 L100,0" stroke="#B91646" strokeWidth="1.5" opacity="0.3"/>
          <path d="M0,25 L25,0 M75,0 L100,25 M0,75 L25,100 M75,100 L100,75" stroke="#B91646" strokeWidth="1" opacity="0.2"/>
          <path d="M25,0 L25,100 M50,0 L50,100 M75,0 L75,100" stroke="#105652" strokeWidth="0.6" opacity="0.3"/>
          <path d="M0,25 L100,25 M0,50 L100,50 M0,75 L100,75" stroke="#105652" strokeWidth="0.6" opacity="0.3"/>
          {/* Decorative elements */}
          <polygon points="50,20 70,35 50,50 30,35" fill="#105652" opacity="0.1"/>
          <circle cx="25" cy="25" r="3" fill="#B91646" opacity="0.2"/>
          <circle cx="75" cy="75" r="3" fill="#B91646" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#testimonial-pattern)"/>
    </svg>
  );

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FBF3E4' }}>
      {/* Background pattern */}
      {jordanianPattern}
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" style={{ 
        background: `linear-gradient(90deg, #B91646 0%, #105652 50%, #B91646 100%)` 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-6" 
                 style={{ backgroundColor: '#DFD8CA', color: '#105652' }}>
              <Heart className="w-4 h-4 mr-2" style={{ color: '#B91646' }} />
              What Our Clients Say
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#105652' }}>
              Trusted by 
              <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3" 
                    style={{ backgroundImage: `linear-gradient(45deg, #B91646, #105652)` }}>
                Jordanian Businesses
              </span>
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 relative overflow-hidden" 
                 style={{ borderColor: '#DFD8CA' }}>
              
              {/* Decorative quote pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 128 128" className="w-full h-full">
                  <path d="M0,0 L128,0 L0,128 Z" fill="#B91646"/>
                  <path d="M0,0 L64,0 L0,64 Z" fill="#105652"/>
                </svg>
              </div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 mb-6" style={{ color: '#B91646' }} />
                
                {/* Testimonial Content */}
                <div className="min-h-[200px] flex flex-col justify-center">
                  <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-700">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  
                  {/* Star Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#B91646' }} />
                    ))}
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-4"
                      style={{ borderColor: '#DFD8CA' }}
                    />
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: '#105652' }}>
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                      </p>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" style={{ color: '#B91646' }} />
                        <span className="text-sm text-gray-500">
                          {testimonials[currentTestimonial].location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: '#B91646' }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: '#B91646' }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === currentTestimonial ? '#B91646' : '#DFD8CA'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                       style={{ backgroundColor: '#DFD8CA' }}>
                    <IconComponent className="w-10 h-10" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Story Timeline */}
        <div className="relative">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#105652' }}>
              Our Journey of Excellence
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Jordan's trusted food manufacturing partner
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
                 style={{ backgroundColor: '#DFD8CA' }}></div>

            {/* Mobile Timeline line - Left side */}
            <div className="md:hidden absolute left-6 top-0 w-1 h-full rounded-full"
                 style={{ backgroundColor: '#DFD8CA' }}></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-start`}>
                    {/* Mobile Layout */}
                    <div className="md:hidden w-full">
                      <div className="flex items-start ml-16">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 w-full"
                             style={{ borderColor: '#DFD8CA' }}>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                                 style={{ backgroundColor: index % 2 === 0 ? '#B91646' : '#105652' }}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-2xl font-bold" style={{ color: '#105652' }}>
                              {milestone.year}
                            </div>
                          </div>
                          <h4 className="text-xl font-bold mb-3" style={{ color: '#105652' }}>
                            {milestone.title}
                          </h4>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      {/* Mobile Timeline dot */}
                      <div className="absolute left-3 w-6 h-6 rounded-full border-4 border-white shadow-lg"
                           style={{ backgroundColor: index % 2 === 0 ? '#B91646' : '#105652', top: '1.5rem' }}></div>
                    </div>

                    {/* Desktop Layout */}
                    <div className={`hidden md:block w-full max-w-md ${isEven ? 'mr-8' : 'ml-8'} ${isEven ? 'text-right' : 'text-left'}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${isEven ? 'mr-8' : 'ml-8'}`}
                           style={{ borderColor: '#DFD8CA' }}>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                               style={{ backgroundColor: index % 2 === 0 ? '#B91646' : '#105652' }}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-2xl font-bold" style={{ color: '#105652' }}>
                            {milestone.year}
                          </div>
                        </div>
                        <h4 className="text-xl font-bold mb-3" style={{ color: '#105652' }}>
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg"
                         style={{ backgroundColor: index % 2 === 0 ? '#B91646' : '#105652' }}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 opacity-10">
        <svg viewBox="0 0 96 96" className="w-full h-full">
          <circle cx="48" cy="48" r="40" fill="#B91646"/>
          <polygon points="48,16 72,32 72,64 48,80 24,64 24,32" fill="#105652"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-10 w-20 h-20 opacity-10">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <polygon points="40,8 64,24 64,56 40,72 16,56 16,24" fill="#105652"/>
          <circle cx="40" cy="40" r="16" fill="#B91646"/>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection;