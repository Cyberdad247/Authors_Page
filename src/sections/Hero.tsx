import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#0a0505]"
    >
      {/* 1. THE PHOENIX BACKGROUND - Volcanic Portal Frame */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/phoenix-frame-bg.png')" }}
      >
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] via-transparent to-[#0a0505]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0505]/50 via-transparent to-[#0a0505]/50" />
      </div>

      {/* Ember particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FF4500] rounded-full animate-float"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${60 + Math.random() * 30}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.6,
              boxShadow: '0 0 6px #FF4500',
            }}
          />
        ))}
      </div>

      {/* 2. THE CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        
        {/* Headline: "The Protocol Has Begun" */}
        <div 
          className={`text-center mb-6 lg:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono text-[#00FF99] uppercase tracking-[0.3em] border border-[#00FF99]/30 rounded-full bg-[#00FF99]/5">
            The Protocol Has Begun
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight">
            THE RISE OF THE <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6B00] to-[#FFD700]">
              PHOENIX
            </span>
          </h1>
        </div>

        {/* 3. THE VIDEO FRAME (Centers into the image void) */}
        <div 
          className={`relative w-full max-w-3xl aspect-video transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          {/* Fire glow behind video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF4500]/20 via-[#FF6B00]/30 to-[#FFD700]/20 rounded-lg blur-2xl animate-pulse-glow" />
          
          {/* Video container with border */}
          <div className="relative w-full h-full rounded-lg border border-[#FF4500]/30 bg-black/80 overflow-hidden group cursor-pointer shadow-[0_0_60px_rgba(255,69,0,0.2)]">
            
            {isPlaying ? (
              /* Actual Video Player */
              <div className="w-full h-full flex items-center justify-center bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  poster="/book-sovereign.jpg"
                >
                  <source src="/trailer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              /* Video Placeholder / Thumbnail */
              <div 
                className="w-full h-full flex items-center justify-center relative"
                onClick={() => setIsPlaying(true)}
              >
                {/* Background thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundImage: "url('/book-sovereign.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
                
                {/* Play button */}
                <div className="relative z-20 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-[#00FF99]/30 group-hover:scale-110 group-hover:bg-[#FF4500]/20 transition-all duration-300 shadow-[0_0_40px_rgba(255,69,0,0.3)]">
                    <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
                  </div>
                  <span className="font-mono text-xs text-[#00FF99] tracking-[0.2em] uppercase">
                    Watch Trailer [02:30]
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-[#FF4500]/50" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-[#FF4500]/50" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-[#FF4500]/50" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-[#FF4500]/50" />
        </div>

        {/* CTA Buttons */}
        <div 
          className={`mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollToSection('magnet')}
            className="px-8 py-4 bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-semibold rounded-sm hover:from-[#FF6B00] hover:to-[#FF4500] transition-all duration-300 shadow-[0_0_30px_rgba(255,69,0,0.4)] hover:shadow-[0_0_50px_rgba(255,69,0,0.6)] uppercase tracking-wider text-sm"
          >
            Join the Round Table
          </button>
          <button
            onClick={() => scrollToSection('shelf')}
            className="px-8 py-4 border border-[#FF4500]/50 text-[#FF4500] font-semibold rounded-sm hover:bg-[#FF4500]/10 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Explore the Library
          </button>
        </div>

        {/* Social Proof */}
        <div 
          className={`mt-8 flex items-center gap-3 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4500]/40 to-[#FFD700]/20 border-2 border-[#0a0505] flex items-center justify-center"
              >
                <span className="text-xs text-[#FFD700]">⚔</span>
              </div>
            ))}
          </div>
          <span className="text-sm text-stone/80">
            Trusted by <strong className="text-white">12,000+</strong> Knights
          </span>
        </div>
      </div>

      {/* FIRE TRAIL START POINT - Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-xs text-[#FF4500]/60 uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF4500] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
