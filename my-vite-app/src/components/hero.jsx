import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import video from '../assets/3.mp4'
const KifnaVideoHero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [hoveredBubble, setHoveredBubble] = useState(null);

  const categories = [
    { 
      id: 1, 
      name: "Ready-Made Dough", 
      description: "Premium quality dough"
    },
    { 
      id: 2, 
      name: "Ice Cream", 
      description: "Artisan frozen treats"
    },
    { 
      id: 3, 
      name: "Ice Cream Base", 
      description: "Professional base mix"
    },
    { 
      id: 4, 
      name: "Plain Coffee", 
      description: "Pure coffee beans"
    },
    { 
      id: 5, 
      name: "Karak Tea", 
      description: "Traditional spiced tea"
    },
    { 
      id: 6, 
      name: "Hot Beverages", 
      description: "Warming drink mixes"
    },
    { 
      id: 7, 
      name: "Coffee", 
      description: "Premium coffee blends"
    }
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
        setVideoError(true);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const bubblePositions = [
    { x: 10, y: 15, size: 120 },   // Ready-Made Dough
    { x: 85, y: 10, size: 110 },   // Ice Cream
    { x: 45, y: 5, size: 100 },    // Ice Cream Base
    { x: 15, y: 80, size: 115 },   // Plain Coffee
    { x: 80, y: 85, size: 105 },   // Karak Tea
    { x: 50, y: 75, size: 125 },   // Hot Beverages
    { x: 90, y: 50, size: 95 },    // Coffee
    // Empty decorative bubbles
    { x: 25, y: 40, size: 80, empty: true },
    { x: 65, y: 25, size: 70, empty: true },
    { x: 30, y: 60, size: 85, empty: true },
    { x: 70, y: 60, size: 75, empty: true },
    { x: 5, y: 50, size: 60, empty: true },
    { x: 95, y: 25, size: 65, empty: true },
    { x: 35, y: 5, size: 55, empty: true },
    { x: 60, y: 45, size: 90, empty: true },
    { x: 20, y: 95, size: 70, empty: true },
    { x: 75, y: 5, size: 50, empty: true }
  ];

  return (
    <div className="mt-12 relative w-full h-screen overflow-hidden" style={{ backgroundColor: '#27001F' }}>
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF6E4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Background Video */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onError={() => setVideoError(true)}
            style={{ filter: 'brightness(0.3) contrast(1.1)' }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div 
            className="w-full h-full"
            style={{ 
              background: `linear-gradient(135deg, #27001F 0%, #DA2917 100%)`,
            }}
          />
        )}
        
        {/* Elegant Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: `
              radial-gradient(circle at center, rgba(39, 0, 31, 0.4) 0%, rgba(39, 0, 31, 0.8) 100%)
            `
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <motion.span 
              className="inline-block text-sm md:text-base font-medium tracking-widest uppercase px-6 py-3 rounded-sm mb-8"
              style={{ 
                color: '#FFF6E4',
                backgroundColor: '#DA2917',
                letterSpacing: '0.2em'
              }}
              whileHover={{ scale: 1.02 }}
            >
              Jordanian Heritage
            </motion.span>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight"
              style={{ 
                color: '#FFF6E4',
                fontFamily: 'Georgia, serif'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kifna Company
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: '#F2B2A8' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Leading food manufacturing with innovation, quality, and international standards
            </motion.p>
          </motion.div>

          {/* Category Bubbles */}
          <div className="relative w-full max-w-6xl mx-auto h-96 md:h-[500px]">
            {bubblePositions.map((position, index) => {
              const category = categories[index];
              const isEmpty = position.empty;
              
              return (
                <motion.div
                  key={isEmpty ? `empty-${index}` : category.id}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    width: `${position.size}px`,
                    height: `${position.size}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.05 + 0.8,
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{ 
                    scale: isEmpty ? 1.02 : 1.08,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => !isEmpty && setHoveredBubble(category.id)}
                  onHoverEnd={() => setHoveredBubble(null)}
                >
                  {/* Bubble Container */}
                  <motion.div
                    className="w-full h-full rounded-full relative"
                    animate={{
                      y: [0, isEmpty ? -4 : -8, 0],
                    }}
                    transition={{
                      duration: isEmpty ? 6 + index * 0.2 : 4 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      background: isEmpty 
                        ? `
                          radial-gradient(circle at 30% 20%, 
                            rgba(255, 255, 255, 0.15) 0%, 
                            rgba(255, 246, 228, 0.1) 50%, 
                            rgba(218, 41, 23, 0.05) 100%
                          )
                        `
                        : `
                          radial-gradient(circle at 30% 20%, 
                            rgba(255, 255, 255, 0.3) 0%, 
                            rgba(255, 246, 228, 0.25) 30%, 
                            rgba(218, 41, 23, 0.05) 70%, 
                            rgba(39, 0, 31, 0.08) 100%
                          )
                        `,
                      border: isEmpty 
                        ? '1px solid rgba(255, 246, 228, 0.1)' 
                        : '1px solid rgba(255, 246, 228, 0.15)',
                      backdropFilter: 'blur(8px)',
                      boxShadow: isEmpty 
                        ? `
                          0 4px 16px rgba(39, 0, 31, 0.1),
                          inset 0 0 20px rgba(255, 255, 255, 0.05)
                        `
                        : `
                          0 4px 20px rgba(39, 0, 31, 0.15),
                          inset 0 0 15px rgba(255, 255, 255, 0.08),
                          0 0 30px rgba(218, 41, 23, 0.05)
                        `
                    }}
                  >
                    {/* Inner Glass Highlight */}
                    {!isEmpty && (
                      <div
                        className="absolute rounded-full"
                        style={{
                          width: `${position.size * 0.35}px`,
                          height: `${position.size * 0.35}px`,
                          top: '15%',
                          left: '25%',
                          background: `
                            radial-gradient(circle, 
                              rgba(255, 255, 255, 0.4) 0%, 
                              rgba(255, 255, 255, 0.15) 60%, 
                              transparent 100%
                            )
                          `,
                          filter: 'blur(1px)'
                        }}
                      />
                    )}
                    
                    {/* Empty bubble highlight */}
                    {isEmpty && (
                      <div
                        className="absolute rounded-full"
                        style={{
                          width: `${position.size * 0.25}px`,
                          height: `${position.size * 0.25}px`,
                          top: '20%',
                          left: '30%',
                          background: `
                            radial-gradient(circle, 
                              rgba(255, 255, 255, 0.3) 0%, 
                              rgba(255, 255, 255, 0.1) 60%, 
                              transparent 100%
                            )
                          `,
                          filter: 'blur(2px)'
                        }}
                      />
                    )}
                    
                    {/* Content - Only for category bubbles */}
                    {!isEmpty && (
                      <div className="w-full h-full rounded-full flex flex-col items-center justify-center p-4 relative">
                        {/* Category Name */}
                        <h3 
                          className="text-sm md:text-base font-semibold text-center leading-tight mb-2"
                          style={{ color: '#27001F' }}
                        >
                          {category.name}
                        </h3>
                        
                     
                        
                        {/* Hover Overlay */}
                        <AnimatePresence>
                          {hoveredBubble === category.id && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 rounded-full flex items-center justify-center"
                              style={{ 
                                background: 'rgba(39, 0, 31, 0.85)',
                                backdropFilter: 'blur(10px)'
                              }}
                            >
                              <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                className="text-center"
                                style={{ color: '#FFF6E4' }}
                              >
                                <ArrowRight className="w-8 h-8 mx-auto mb-2" />
                                <span className="text-sm font-medium">Explore</span>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="group relative inline-flex items-center px-8 py-4 text-lg font-medium rounded-sm overflow-hidden"
              style={{ 
                color: '#27001F',
                backgroundColor: '#FFF6E4',
                border: '1px solid #FFF6E4'
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FFF6E4';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = '#FFF6E4';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#27001F';
                e.target.style.backgroundColor = '#FFF6E4';
                e.target.style.borderColor = '#FFF6E4';
              }}
            >
              <span className="relative z-10 mr-2">Explore Our Products</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
              
              <motion.div 
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(218, 41, 23, 0.1)' }}
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Video Controls */}
      <motion.div 
        className="absolute bottom-8 right-8 z-20 flex items-center space-x-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.button
          onClick={togglePlay}
          className="p-3 rounded-full transition-all duration-300"
          style={{ 
            backgroundColor: 'rgba(255, 246, 228, 0.9)',
            color: '#27001F'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </motion.button>
        
        <motion.button
          onClick={toggleMute}
          className="p-3 rounded-full transition-all duration-300"
          style={{ 
            backgroundColor: 'rgba(255, 246, 228, 0.9)',
            color: '#27001F'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>
      </motion.div>

      {/* Company Logo */}
   
    </div>
  );
};

export default KifnaVideoHero;