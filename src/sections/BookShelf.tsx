import { useEffect, useRef, useState } from 'react';

interface Book {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  color: string;
  author: string;
  edition: string;
  description: string;
  link?: string;
  featured?: boolean;
}

const books: Book[] = [
  {
    id: 'rise-of-phoenix',
    title: 'Rise of the Phoenix',
    subtitle: 'The Illusions Revealed',
    cover: '/cover-rise-of-the-phoenix.jpg',
    color: '#FF4500',
    author: 'VaShawn F. Head',
    edition: 'Fourth Edition · Volume 1',
    description:
      'The reference book of a lifetime. A multimedia extravaganza of knowledge — history, encyclopedia, and biography fused into one.',
    link: '#magnet',
    featured: true,
  },
  {
    id: 'one-mans-opinion',
    title: "One Man's Opinion",
    subtitle: 'Perspective & Philosophy',
    cover: '/cover-one-mans-opinion.jpg',
    color: '#8B1A1A',
    author: 'VaShawn F. Head',
    edition: 'First Edition',
    description:
      'Raw perspective distilled into prose. A philosophical journey through one mind\'s lens on life, culture, and truth.',
    link: '#magnet',
  },
];

interface BookCardProps {
  book: Book;
  index: number;
  isVisible: boolean;
}

function BookCard({ book, index, isVisible }: BookCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: -20, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / (rect.width / 2)) * 15;
    const rotateX = -(mouseY / (rect.height / 2)) * 10;

    setTransform({ rotateX, rotateY, scale: 1.05 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: -20, scale: 1 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`relative flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Featured badge */}
      {book.featured && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono text-[#FFD700] uppercase tracking-[0.2em] border border-[#FFD700]/40 rounded-full bg-[#FFD700]/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-pulse" />
            Flagship
          </span>
        </div>
      )}

      {/* Book subtitle label */}
      <div className="mb-5 text-center whitespace-nowrap">
        <span className="text-xs font-mono text-[#FF4500]/60 uppercase tracking-widest">
          {book.subtitle}
        </span>
      </div>

      {/* 3D Book Container */}
      <div
        ref={cardRef}
        className="relative perspective-1000 cursor-pointer group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{ width: '200px', height: '300px' }}
      >
        {/* Warm glow halo behind book */}
        <div
          className={`absolute -inset-6 rounded-xl blur-2xl transition-all duration-500 pointer-events-none ${isHovered ? 'opacity-50' : 'opacity-20'
            }`}
          style={{ background: `radial-gradient(ellipse, ${book.color}40, transparent 70%)` }}
        />

        <div
          className="relative w-full h-full preserve-3d transition-all duration-300 ease-out"
          style={{
            transform: `
              rotateX(${transform.rotateX}deg) 
              rotateY(${transform.rotateY}deg) 
              scale(${transform.scale})
            `,
          }}
        >
          {/* Book Spine (left side) */}
          <div
            className="absolute left-0 top-0 w-8 h-full origin-left"
            style={{
              background: `linear-gradient(to right, ${book.color}cc, ${book.color}88)`,
              transform: 'rotateY(90deg) translateZ(-4px)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-cinzel text-[10px] text-white/80 tracking-wider font-bold"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                {book.title}
              </span>
            </div>
          </div>

          {/* Book Cover (front) */}
          <div
            className={`absolute inset-0 rounded-r-sm overflow-hidden transition-shadow duration-300 ${isHovered ? 'shadow-book-hover' : 'shadow-book'
              }`}
            style={{ transform: 'translateZ(4px)' }}
          >
            <img
              src={book.cover}
              alt={`${book.title} by ${book.author}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Gloss / page-flip shimmer */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                background: `linear-gradient(
                  ${105 + (transform.rotateY / 15) * 30}deg,
                  transparent 30%,
                  rgba(255,255,255,0.15) 45%,
                  rgba(255,255,255,0.05) 55%,
                  transparent 70%
                )`,
              }}
            />
          </div>

          {/* Book pages (right edge) */}
          <div
            className="absolute right-0 top-1 bottom-1 w-2 origin-right"
            style={{
              background: 'linear-gradient(to left, #D4C5A9, #E8DCC8)',
              transform: 'rotateY(90deg) translateZ(196px)',
            }}
          />

          {/* Book bottom edge */}
          <div
            className="absolute bottom-0 left-1 right-1 h-2 origin-bottom"
            style={{
              background: 'linear-gradient(to top, #D4C5A9, #E8DCC8)',
              transform: 'rotateX(-90deg) translateZ(4px)',
            }}
          />

          {/* Bottom shadow */}
          <div
            className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-10 bg-black/50 rounded-full blur-xl transition-all duration-300 ${isHovered ? 'opacity-70 scale-110' : 'opacity-40 scale-100'
              }`}
            style={{
              transform: `translateX(-50%) translateY(${isHovered ? '8px' : '0'})`,
            }}
          />
        </div>
      </div>

      {/* Book info below */}
      <div className="mt-8 text-center max-w-[220px]">
        <h3 className="font-cinzel text-lg font-bold text-white leading-tight">
          {book.title}
        </h3>
        <p className="text-xs font-mono text-[#FF4500]/50 mt-1 uppercase tracking-wider">
          {book.edition}
        </p>
      </div>

      {/* Hover detail panel */}
      <div
        className={`mt-4 max-w-[240px] text-center transition-all duration-500 ${isHovered
            ? 'opacity-100 translate-y-0 max-h-40'
            : 'opacity-0 -translate-y-2 max-h-0'
          } overflow-hidden`}
      >
        <p className="text-sm text-white/50 leading-relaxed mb-3">
          {book.description}
        </p>
        {book.link && (
          <button
            onClick={() => scrollToSection(book.link!)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono text-[#FF4500] uppercase tracking-wider border border-[#FF4500]/30 rounded-full hover:bg-[#FF4500]/10 transition-colors"
          >
            Get Notified
          </button>
        )}
      </div>
    </div>
  );
}

export function BookShelf() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="shelf"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#0a0505]"
    >
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FF4500]/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF4500]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono text-[#FF4500] uppercase tracking-widest border border-[#FF4500]/30 rounded-full">
            The Library
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-section font-bold text-white mb-4">
            The <span className="text-phoenix-gradient">Shelf</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            The published works of{' '}
            <span className="text-white font-semibold">VaShawn F. Head</span> —
            presented in interactive 3D. Hover to explore.
          </p>
        </div>

        {/* Books display */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {books.map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Shelf base — wooden surface effect */}
        <div
          className={`mt-16 mx-auto max-w-3xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Shelf plank */}
          <div className="h-3 rounded-sm shelf-surface" />
          {/* Shelf shadow */}
          <div className="h-4 bg-gradient-to-b from-black/40 to-transparent rounded-b-lg" />
          {/* Decorative line */}
          <div className="h-px mt-4 bg-gradient-to-r from-transparent via-[#FF4500]/20 to-transparent" />
        </div>

        {/* Author byline */}
        <div
          className={`mt-10 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <p className="text-xs font-mono text-white/30 uppercase tracking-[0.3em]">
            Palmetto Publishing
          </p>
        </div>
      </div>
    </section>
  );
}
