import { useEffect, useRef, useState } from 'react';

const manifestoLines = [
  "In the age of artificial minds,",
  "the sovereign author stands apart.",
  "",
  "Not by volume of content,",
  "but by depth of signal.",
  "",
  "We build platforms that command authority.",
  "We forge experiences that convert belief.",
  "",
  "This is the Phoenix Protocol.",
  "This is your sovereignty.",
];

export function Manifesto() {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedLines, setRevealedLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reveal lines sequentially
  useEffect(() => {
    if (!isVisible) return;

    manifestoLines.forEach((_, index) => {
      setTimeout(() => {
        setRevealedLines(prev => [...prev, index]);
      }, index * 400);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#0a0505]"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FF4500 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF4500]/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono text-[#FF4500] uppercase tracking-widest border border-[#FF4500]/30 rounded-full">
            The Philosophy
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-section font-bold text-white">
            The <span className="text-phoenix-gradient">Manifesto</span>
          </h2>
        </div>

        {/* Manifesto text */}
        <div className="space-y-2 text-center">
          {manifestoLines.map((line, index) => (
            <p
              key={index}
              className={`font-cinzel text-xl sm:text-2xl lg:text-3xl transition-all duration-700 ${
                revealedLines.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              } ${
                line === '' 
                  ? 'h-8' 
                  : index === manifestoLines.length - 1 || index === manifestoLines.length - 2
                    ? 'text-phoenix-gradient font-bold'
                    : 'text-white/80'
              }`}
              style={{ 
                transitionDelay: revealedLines.includes(index) ? '0ms' : '0ms',
                textShadow: index >= manifestoLines.length - 2 ? '0 0 40px rgba(255, 69, 0, 0.3)' : 'none',
              }}
            >
              {line || '\u00A0'}
            </p>
          ))}
        </div>

        {/* Seal */}
        <div 
          className={`mt-16 flex justify-center transition-all duration-700 delay-1000 ${
            isVisible && revealedLines.length === manifestoLines.length
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90'
          }`}
        >
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-2 border-[#FF4500]/30 rounded-full animate-pulse-glow" />
            <div className="absolute inset-2 border border-[#FF4500]/20 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-cinzel text-2xl text-phoenix-gradient">Ω</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
