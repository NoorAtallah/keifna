import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  Building,
  Truck,
  Shield,
  Star,
  CheckCircle,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: ''
  });

  const [hoveredService, setHoveredService] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Factory",
      details: ["Industrial Zone, Amman", "Jordan - P.O. Box 12345"],
      color: "#B91646"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+962 6 123 4567", "+962 79 123 4567"],
      color: "#105652"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@kaifna.jo", "sales@kaifna.jo"],
      color: "#B91646"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sunday - Thursday: 8AM - 6PM", "Friday: 8AM - 2PM"],
      color: "#105652"
    }
  ];

  const services = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery across Amman and next-day for other cities",
      color: "#B91646"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with international quality standards",
      color: "#105652"
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your inquiries",
      color: "#B91646"
    },
    {
      icon: Star,
      title: "Custom Solutions",
      description: "Tailored products and services to meet your specific needs",
      color: "#105652"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "#1877F2" },
    { icon: Instagram, name: "Instagram", color: "#E4405F" },
    { icon: Linkedin, name: "LinkedIn", color: "#0A66C2" },
    { icon: Twitter, name: "Twitter", color: "#1DA1F2" }
  ];

  // Jordanian pattern background
  const jordanianPattern = (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.04 }}>
      <defs>
        <pattern id="contact-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="transparent"/>
          {/* Traditional shemagh pattern */}
          <path d="M0,0 L120,120 M0,120 L120,0" stroke="#B91646" strokeWidth="2" opacity="0.3"/>
          <path d="M0,30 L30,0 M90,0 L120,30 M0,90 L30,120 M90,120 L120,90" stroke="#B91646" strokeWidth="1.5" opacity="0.2"/>
          <path d="M30,0 L30,120 M60,0 L60,120 M90,0 L90,120" stroke="#105652" strokeWidth="0.8" opacity="0.3"/>
          <path d="M0,30 L120,30 M0,60 L120,60 M0,90 L120,90" stroke="#105652" strokeWidth="0.8" opacity="0.3"/>
          {/* Decorative geometric elements */}
          <polygon points="60,15 85,40 60,65 35,40" fill="#105652" opacity="0.1"/>
          <circle cx="30" cy="30" r="4" fill="#B91646" opacity="0.2"/>
          <circle cx="90" cy="90" r="4" fill="#B91646" opacity="0.2"/>
          <circle cx="30" cy="90" r="4" fill="#105652" opacity="0.2"/>
          <circle cx="90" cy="30" r="4" fill="#105652" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-pattern)"/>
    </svg>
  );

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FBF3E4' }}>
      {/* Background pattern */}
      {jordanianPattern}
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" style={{ 
        background: `linear-gradient(90deg, #105652 0%, #B91646 25%, #105652 50%, #B91646 75%, #105652 100%)` 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-6" 
               style={{ backgroundColor: '#DFD8CA', color: '#105652' }}>
            <Building className="w-4 h-4 mr-2" style={{ color: '#B91646' }} />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#105652' }}>
            Let's Start a 
            <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3" 
                  style={{ backgroundImage: `linear-gradient(45deg, #B91646, #105652)` }}>
              Partnership
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the finest food products Jordan has to offer? 
            Contact us today and discover why businesses across the kingdom trust Kaifna.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 relative overflow-hidden" 
                 style={{ borderColor: '#DFD8CA' }}>
              
              {/* Decorative corner pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-8">
                <svg viewBox="0 0 96 96" className="w-full h-full">
                  <path d="M0,0 L96,0 L0,96 Z" fill="#B91646" opacity="0.1"/>
                  <path d="M0,0 L48,0 L0,48 Z" fill="#105652" opacity="0.15"/>
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#105652' }}>
                  Send Us a Message
                </h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#105652' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                        style={{ 
                          borderColor: '#DFD8CA'
                        }}
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#105652' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                        style={{ 
                          borderColor: '#DFD8CA'
                        }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#105652' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                        style={{ 
                          borderColor: '#DFD8CA'
                        }}
                        placeholder="+962 79 123 4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#105652' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                        style={{ 
                          borderColor: '#DFD8CA'
                        }}
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#105652' }}>
                      Product Interest
                    </label>
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        borderColor: '#DFD8CA'
                      }}
                    >
                      <option value="">Select a product</option>
                      <option value="ready-dough">Ready-Made Dough</option>
                      <option value="ice-cream-base">Ice Cream Base</option>
                      <option value="karak-tea">Karak Tea</option>
                      <option value="plain-coffee">Plain Coffee</option>
                      <option value="hot-beverages">Hot Beverages</option>
                      <option value="all">All Products</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#105652' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                      style={{ 
                        borderColor: '#DFD8CA'
                      }}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg flex items-center justify-center"
                    style={{ backgroundColor: '#B91646' }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 hover:shadow-xl transition-all duration-300"
                       style={{ borderColor: '#DFD8CA' }}>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                           style={{ backgroundColor: '#DFD8CA' }}>
                        <IconComponent className="w-6 h-6" style={{ color: info.color }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#105652' }}>
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-2 shadow-lg border-2" style={{ borderColor: '#DFD8CA' }}>
              <div className="w-full h-64 rounded-xl overflow-hidden relative" style={{ backgroundColor: '#DFD8CA' }}>
                <img
                  src="/api/placeholder/500/300"
                  alt="Kaifna Factory Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Kaifna Factory - Amman, Jordan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#105652' }}>
            Why Choose Kaifna?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                       style={{ 
                         backgroundColor: hoveredService === index ? service.color : '#DFD8CA'
                       }}>
                    <IconComponent 
                      className="w-10 h-10 transition-colors duration-300" 
                      style={{ color: hoveredService === index ? 'white' : service.color }}
                    />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 transition-colors duration-300" 
                      style={{ color: hoveredService === index ? service.color : '#105652' }}>
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#105652' }}>
            Follow Us & Stay Connected
          </h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{ backgroundColor: social.color }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                    style={{ backgroundColor: '#B91646' }}>
              <span className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +962 6 123 4567
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
              <span className="flex items-center justify-center">
                <Globe className="w-5 h-5 mr-2" />
                Visit Our Website
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-32 right-16 w-28 h-28 opacity-10">
        <svg viewBox="0 0 112 112" className="w-full h-full">
          <polygon points="56,8 88,32 88,80 56,104 24,80 24,32" fill="#B91646"/>
          <circle cx="56" cy="56" r="20" fill="#105652"/>
        </svg>
      </div>
      
      <div className="absolute bottom-32 left-16 w-24 h-24 opacity-10">
        <svg viewBox="0 0 96 96" className="w-full h-full">
          <circle cx="48" cy="48" r="40" fill="#105652"/>
          <polygon points="48,16 72,32 72,64 48,80 24,64 24,32" fill="#B91646"/>
        </svg>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r" style={{ 
        background: `linear-gradient(90deg, #B91646 0%, #105652 50%, #B91646 100%)` 
      }}></div>
    </section>
  );
};

export default ContactSection;