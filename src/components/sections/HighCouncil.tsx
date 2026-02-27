import { useEffect, useRef, useState } from 'react';
import {
  Coins,
  Palette,
  Timer,
  HandMetal
} from 'lucide-react';

interface Knight {
  id: string;
  name: string;
  title: string;
  role: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const knights: Knight[] = [
  {
    id: 'aurelius',
    name: 'Sir Aurelius',
    title: 'The Treasurer',
    role: 'Conversion Logic',
    description: 'Enforces the Law of Capital. Every pixel must drive ROI. Masters the Hook + Primary CTA architecture.',
    icon: Coins,
    color: '#FF4500',
  },
  {
    id: 'visage',
    name: 'Sir Visage',
    title: 'The Auteur',
    role: 'Visual Engineering',
    description: 'Commands the Aesthetic of Authority. Forges 3D Book Tilt physics and the Phoenix color palette.',
    icon: Palette,
    color: '#8B5CF6',
  },
  {
    id: 'kronos',
    name: 'Sir Kronos',
    title: 'The Time Lord',
    role: 'Performance',
    description: 'Enforces the Doherty Threshold (<400ms). Optimistic UI and Next.js Image optimization.',
    icon: Timer,
    color: '#10B981',
  },
  {
    id: 'lukas',
    name: 'Lukas',
    title: 'The Kinetic Hand',
    role: 'Execution',
    description: 'The builder who executes. Transforms strategy into reality through clean, performant code.',
    icon: HandMetal,
    color: '#FFD700',
  },
];

interface KnightCardProps {
  knight: Knight;
  index: number;
  isVisible: boolean;
}

function KnightCard({ knight, index, isVisible }: KnightCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = knight.icon;

  return (
    <div
      className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative p-6 lg:p-8 bg-white/5 border border-white/10 rounded-sm transition-all duration-300 ${isHovered ? 'shadow-xl border-[#FF4500]/50 -translate-y-1 bg-white/10' : ''
          }`}
      >
        {/* Corner accent */}
        <div
          className={`absolute top-0 right-0 w-16 h-16 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${knight.color}15 50%)`,
          }}
        />

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 transition-all duration-300 ${isHovered ? 'scale-110' : ''
            }`}
          style={{
            backgroundColor: `${knight.color}15`,
            color: knight.color,
          }}
        >
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-cinzel text-lg font-bold text-white">
              {knight.name}
            </h3>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-mono"
              style={{
                backgroundColor: `${knight.color}15`,
                color: knight.color,
              }}
            >
              {knight.title}
            </span>
          </div>

          <p className="text-sm font-mono text-[#FF4500] uppercase tracking-wider">
            {knight.role}
          </p>

          <p className="text-white/60 text-sm leading-relaxed pt-2">
            {knight.description}
          </p>
        </div>

        {/* Bottom line accent */}
        <div
          className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isHovered ? 'w-full' : 'w-0'
            }`}
          style={{ backgroundColor: knight.color }}
        />
      </div>
    </div>
  );
}

export function HighCouncil() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="council"
      className="relative w-full bg-[#0a0505]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono text-[#FF4500] uppercase tracking-widest border border-[#FF4500]/30 rounded-full">
            The Architects
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-section font-bold text-white mb-4">
            The <span className="text-phoenix-gradient">High Council</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Six knights. Six domains of expertise. Together, they forge the Sovereign Author Platform.
          </p>
        </div>

        {/* Knights grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knights.map((knight, index) => (
            <KnightCard
              key={knight.id}
              knight={knight}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Decorative element */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#FF4500]/30" />
            <div className="w-2 h-2 bg-[#FF4500]/50 rotate-45" />
            <div className="w-12 h-px bg-[#FF4500]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
