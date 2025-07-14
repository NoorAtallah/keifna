import React, { useState, useRef, useEffect } from 'react';
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

  // Sample video URL - replace with your actual video import
  const videoSrc = video;

  // Intersection Observer for auto-play on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Autoplay failed - browser policy
            setIsPlaying(false);
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll-based progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate scroll progress based on element visibility
      const visibleTop = Math.max(0, windowHeight - rect.top);
      const visibleHeight = Math.min(elementHeight, visibleTop, rect.bottom);
      const progress = Math.max(0, Math.min(1, visibleHeight / (elementHeight * 0.8)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div 
          className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl transition-all duration-[3000ms] ease-out"
          style={{ 
            backgroundColor: '#DA2917',
            top: '20%',
            left: `${20 + scrollProgress * 30}%`,
            transform: `scale(${0.8 + scrollProgress * 0.4}) rotate(${scrollProgress * 45}deg)`
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full opacity-5 blur-3xl transition-all duration-[4000ms] ease-out"
          style={{ 
            backgroundColor: '#FFF6E4',
            bottom: '10%',
            right: `${10 + scrollProgress * 40}%`,
            transform: `scale(${1 + scrollProgress * 0.3}) rotate(${-scrollProgress * 60}deg)`
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-8 blur-2xl transition-all duration-[2500ms] ease-out"
          style={{ 
            backgroundColor: '#F2B2A8',
            top: '60%',
            left: `${60 + scrollProgress * -20}%`,
            transform: `scale(${0.6 + scrollProgress * 0.5}) rotate(${scrollProgress * 90}deg)`
          }}
        />
      </div>

      {/* Elegant Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFF6E4 1px, transparent 1px), radial-gradient(circle at 75% 75%, #DA2917 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 80px 80px',
          backgroundPosition: '0 0, 40px 40px',
          transform: `translateX(${scrollProgress * 20}px) translateY(${scrollProgress * -15}px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-32 relative z-10">
        
        {/* Animated Section Header */}
        <div 
          className="text-center mb-16 transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${20 - scrollProgress * 20}px)`,
            opacity: 0.6 + scrollProgress * 0.4
          }}
        >
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 relative overflow-hidden"
            style={{ 
              backgroundColor: '#DA2917',
              transform: `scale(${0.8 + scrollProgress * 0.3}) rotate(${scrollProgress * 180}deg)`
            }}
          >
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{ backgroundColor: '#FFF6E4', opacity: 0.2 }}
            />
            <Play size={24} className="relative z-10 ml-1" style={{ color: '#FFF6E4' }} strokeWidth={2} />
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

        {/* Revolutionary Video Player */}
        <div 
          className="relative group transition-all duration-1000 ease-out"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          style={{
            transform: `translateY(${40 - scrollProgress * 40}px) scale(${0.9 + scrollProgress * 0.1})`,
            opacity: 0.3 + scrollProgress * 0.7
          }}
        >
          {/* Outer Glow Ring */}
          <div 
            className="absolute -inset-8 rounded-3xl transition-all duration-700"
            style={{ 
              background: `conic-gradient(from ${scrollProgress * 360}deg, 
                rgba(218, 41, 23, 0.3) 0deg, 
                rgba(255, 246, 228, 0.2) 120deg, 
                rgba(242, 178, 168, 0.25) 240deg, 
                rgba(218, 41, 23, 0.3) 360deg)`,
              filter: 'blur(20px)',
              opacity: isInView ? 1 : 0
            }}
          />
          
          {/* Video Container */}
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, rgba(39, 0, 31, 0.9) 0%, rgba(27, 0, 22, 0.95) 100%)',
              aspectRatio: '16/9',
              border: '1px solid rgba(255, 246, 228, 0.1)'
            }}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
              style={{ 
                filter: 'brightness(0.85) contrast(1.1) saturate(1.1)',
              }}
              onError={(e) => {
                console.log('Video failed to load');
                e.target.style.display = 'none';
              }}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dynamic Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none transition-all duration-500"
              style={{ 
                background: `linear-gradient(
                  135deg, 
                  rgba(39, 0, 31, ${0.3 - scrollProgress * 0.2}) 0%, 
                  rgba(39, 0, 31, ${0.1 - scrollProgress * 0.05}) 50%, 
                  rgba(218, 41, 23, ${0.2 - scrollProgress * 0.1}) 100%
                )`
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
                    className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    style={{ borderColor: '#DA2917' }}
                  />
                  <p className="text-sm font-light" style={{ color: '#FFF6E4' }}>
                    Loading experience...
                  </p>
                </div>
              </div>
            )}

            {/* Elegant Controls */}
            <div 
              className={`absolute bottom-0 left-0 right-0 transition-all duration-500 ${
                showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Glassmorphism Progress Bar */}
              <div className="px-8 pb-6">
                <div 
                  className="relative h-1 backdrop-blur-sm rounded-full cursor-pointer group"
                  style={{ backgroundColor: 'rgba(255, 246, 228, 0.2)' }}
                  onClick={handleSeek}
                >
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(90deg, #DA2917 0%, #F2B2A8 100%)',
                      width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`
                    }}
                  />
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#FFF6E4',
                      left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
                      marginLeft: '-8px',
                      boxShadow: '0 0 20px rgba(255, 246, 228, 0.5)'
                    }}
                  />
                </div>
              </div>

              {/* Control Panel */}
              <div 
                className="px-8 pb-8"
                style={{ 
                  background: 'linear-gradient(to top, rgba(39, 0, 31, 0.95) 0%, rgba(39, 0, 31, 0.8) 50%, transparent 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-center justify-between">
                  
                  {/* Left Controls */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'rgba(255, 246, 228, 0.1)',
                        border: '1px solid rgba(255, 246, 228, 0.2)'
                      }}
                    >
                      {isPlaying ? 
                        <Pause size={18} style={{ color: '#FFF6E4' }} strokeWidth={1.5} /> : 
                        <Play size={18} style={{ color: '#FFF6E4' }} strokeWidth={1.5} />
                      }
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'rgba(255, 246, 228, 0.1)',
                        border: '1px solid rgba(255, 246, 228, 0.2)'
                      }}
                    >
                      {isMuted ? 
                        <VolumeX size={18} style={{ color: '#F2B2A8' }} strokeWidth={1.5} /> : 
                        <Volume2 size={18} style={{ color: '#FFF6E4' }} strokeWidth={1.5} />
                      }
                    </button>
                    
                    <div className="text-sm font-light" style={{ color: '#F2B2A8' }}>
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>

                  {/* Center Info */}
                  <div className="text-center">
                    <p className="text-sm font-light" style={{ color: '#FFF6E4' }}>
                      Crafting Excellence Since 1985
                    </p>
                  </div>

                  {/* Right Controls */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handleFullscreen}
                      className="w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'rgba(255, 246, 228, 0.1)',
                        border: '1px solid rgba(255, 246, 228, 0.2)'
                      }}
                    >
                      <Maximize2 size={18} style={{ color: '#FFF6E4' }} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="text-center mt-12 transition-all duration-1000"
          style={{
            transform: `translateY(${20 - scrollProgress * 20}px)`,
            opacity: 0.4 + scrollProgress * 0.6
          }}
        >
          <div className="flex items-center justify-center space-x-4">
            <div 
              className="h-px flex-1 max-w-24"
              style={{ backgroundColor: 'rgba(242, 178, 168, 0.3)' }}
            />
            <p className="text-sm font-light" style={{ color: '#F2B2A8' }}>
              {scrollProgress > 0.8 ? 'Experience Complete' : 'Scroll to experience our story'}
            </p>
            <div 
              className="h-px flex-1 max-w-24"
              style={{ backgroundColor: 'rgba(242, 178, 168, 0.3)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KifnaVideoPlayer;