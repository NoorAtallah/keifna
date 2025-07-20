import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import video from '../assets/3.mp4'

const KifnaVideoPlayer = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const videoSrc = video;

  // Throttled scroll handler for better performance
  const throttledScrollHandler = useCallback(() => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = rect.height;
    
    const visibleTop = Math.max(0, windowHeight - rect.top);
    const visibleHeight = Math.min(elementHeight, visibleTop, rect.bottom);
    const progress = Math.max(0, Math.min(1, visibleHeight / (elementHeight * 0.8)));
    
    setScrollProgress(progress);
  }, []);

  // Use requestAnimationFrame for smooth scroll handling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          throttledScrollHandler();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Reduce scroll event frequency on mobile
    const scrollOptions = isMobile ? { passive: true } : {};
    window.addEventListener('scroll', handleScroll, scrollOptions);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttledScrollHandler, isMobile]);

  // Intersection Observer with reduced sensitivity on mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current && !isMobile) {
          // Auto-play only on desktop
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            setIsPlaying(false);
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: isMobile ? 0.3 : 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
    };
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

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: '#27001F' }}
    >
      {/* Simplified Background Elements - Reduced for mobile */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div 
            className="absolute w-64 h-64 rounded-full opacity-10 transition-transform duration-1000 will-change-transform"
            style={{ 
              backgroundColor: '#DA2917',
              top: '20%',
              left: `${20 + scrollProgress * 15}%`,
              transform: `scale(${0.8 + scrollProgress * 0.2})`,
              filter: 'blur(40px)'
            }}
          />
          <div 
            className="absolute w-48 h-48 rounded-full opacity-8 transition-transform duration-1000 will-change-transform"
            style={{ 
              backgroundColor: '#F2B2A8',
              top: '60%',
              right: `${10 + scrollProgress * 20}%`,
              transform: `scale(${0.6 + scrollProgress * 0.3})`,
              filter: 'blur(30px)'
            }}
          />
        </div>
      )}

      {/* Simplified Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #FFF6E4 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-32 relative z-10">
        
        {/* Simplified Section Header */}
        <div 
          className="text-center mb-16 transition-opacity duration-1000"
          style={{
            opacity: 0.6 + scrollProgress * 0.4
          }}
        >
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 relative"
            style={{ backgroundColor: '#DA2917' }}
          >
            <Play size={24} className="ml-1" style={{ color: '#FFF6E4' }} strokeWidth={2} />
          </div>
          
          <h2 
            className="text-4xl lg:text-6xl font-light mb-6 leading-tight"
            style={{ 
              color: '#FFF6E4',
              fontFamily: 'Georgia, serif'
            }}
          >
            Our Legacy in Motion
          </h2>
          <p 
            className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#F2B2A8' }}
          >
            Watch how passion meets precision in every product we create
          </p>
        </div>

        {/* Optimized Video Player */}
        <div 
          className="relative group transition-opacity duration-1000"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          onTouchStart={() => setShowControls(true)}
          style={{
            opacity: 0.4 + scrollProgress * 0.6
          }}
        >
          {/* Simplified Outer Glow - Desktop Only */}
          {!isMobile && (
            <div 
              className="absolute -inset-4 rounded-3xl transition-opacity duration-700"
              style={{ 
                background: 'radial-gradient(ellipse, rgba(218, 41, 23, 0.2) 0%, transparent 70%)',
                filter: 'blur(20px)',
                opacity: isInView ? 0.5 : 0
              }}
            />
          )}
          
          {/* Video Container */}
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, rgba(39, 0, 31, 0.9) 0%, rgba(27, 0, 22, 0.95) 100%)',
              aspectRatio: '16/9',
              border: '1px solid rgba(255, 246, 228, 0.1)'
            }}
          >
            {/* Video Element - Simplified filters on mobile */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
              preload={isMobile ? "metadata" : "auto"}
              style={{ 
                filter: isMobile ? 'none' : 'brightness(0.85) contrast(1.05)',
              }}
              onError={(e) => {
                console.log('Video failed to load');
                e.target.style.display = 'none';
              }}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Simplified Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ 
                background: `linear-gradient(135deg, rgba(39, 0, 31, 0.2) 0%, rgba(218, 41, 23, 0.1) 100%)`
              }}
            />

            {/* Loading State */}
            {isLoading && (
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(39, 0, 31, 0.9)' }}
              >
                <div className="text-center">
                  <div 
                    className="w-12 h-12 border-3 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    style={{ borderColor: '#DA2917' }}
                  />
                  <p className="text-sm font-light" style={{ color: '#FFF6E4' }}>
                    Loading...
                  </p>
                </div>
              </div>
            )}

            {/* Optimized Controls */}
            <div 
              className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
                showControls || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Progress Bar */}
              <div className="px-6 pb-4">
                <div 
                  className="relative h-1 rounded-full cursor-pointer"
                  style={{ backgroundColor: 'rgba(255, 246, 228, 0.3)' }}
                  onClick={handleSeek}
                >
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
                    style={{ 
                      background: 'linear-gradient(90deg, #DA2917 0%, #F2B2A8 100%)',
                      width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`
                    }}
                  />
                </div>
              </div>

              {/* Control Panel */}
              <div 
                className="px-6 pb-6"
                style={{ 
                  background: 'linear-gradient(to top, rgba(39, 0, 31, 0.95) 0%, transparent 100%)'
                }}
              >
                <div className="flex items-center justify-between">
                  
                  {/* Left Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'rgba(255, 246, 228, 0.15)',
                        border: '1px solid rgba(255, 246, 228, 0.3)'
                      }}
                    >
                      {isPlaying ? 
                        <Pause size={16} style={{ color: '#FFF6E4' }} strokeWidth={1.5} /> : 
                        <Play size={16} style={{ color: '#FFF6E4' }} strokeWidth={1.5} />
                      }
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'rgba(255, 246, 228, 0.15)',
                        border: '1px solid rgba(255, 246, 228, 0.3)'
                      }}
                    >
                      {isMuted ? 
                        <VolumeX size={16} style={{ color: '#F2B2A8' }} strokeWidth={1.5} /> : 
                        <Volume2 size={16} style={{ color: '#FFF6E4' }} strokeWidth={1.5} />
                      }
                    </button>
                    
                    {!isMobile && (
                      <div className="text-sm font-light" style={{ color: '#F2B2A8' }}>
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </div>
                    )}
                  </div>

                  {/* Center Info - Desktop Only */}
                  {!isMobile && (
                    <div className="text-center">
                      <p className="text-sm font-light" style={{ color: '#FFF6E4' }}>
                        Crafting Excellence Since 1985
                      </p>
                    </div>
                  )}

                  {/* Right Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handleFullscreen}
                      className="w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'rgba(255, 246, 228, 0.15)',
                        border: '1px solid rgba(255, 246, 228, 0.3)'
                      }}
                    >
                      <Maximize2 size={16} style={{ color: '#FFF6E4' }} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Scroll Indicator */}
        <div 
          className="text-center mt-12 transition-opacity duration-1000"
          style={{
            opacity: 0.4 + scrollProgress * 0.6
          }}
        >
          <p className="text-sm font-light" style={{ color: '#F2B2A8' }}>
            {scrollProgress > 0.8 ? 'Experience Complete' : 'Scroll to experience our story'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KifnaVideoPlayer;