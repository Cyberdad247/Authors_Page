import { useEffect, useRef, useState } from 'react';

interface Book {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  color: string;
}

const books: Book[] = [
  {
    id: 'one-mans-opinion',
    title: "One Man's Opinion",
    subtitle: 'Perspective & Philosophy',
    cover: '/book-one-mans-opinion.svg',
    color: '#6B2E2E',
  },
  {
    id: 'rise-of-phoenix',
    title: 'Rise of the Phoenix',
    subtitle: 'Illusions Revealed',
    cover: '/book-rise-of-the-phoenix.svg',
    color: '#7A1F1F',
  },
];

interface BookCardProps {
  book: Book;
  index: number;
  isVisible: boolean;
}

function BookCard({ book, index, isVisible }: BookCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: -25, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateY = (mouseX / (rect.width / 2)) * 15;
    const rotateX = -(mouseY / (rect.height / 2)) * 15;
    
    setTransform({ rotateX, rotateY, scale: 1.05 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: -25, scale: 1 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Book label */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
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
        style={{ width: '160px', height: '240px' }}
      >
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
              background: `linear-gradient(to right, ${book.color}, ${book.color}dd)`,
              transform: 'rotateY(90deg) translateZ(-4px)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className="font-cinzel text-xs text-[#FF4500]/80 tracking-wider"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                {book.title}
              </span>
            </div>
          </div>

          {/* Book Cover (front) */}
          <div
            className={`absolute inset-0 rounded-r-sm overflow-hidden transition-shadow duration-300 ${
              isHovered ? 'shadow-book-hover' : 'shadow-book'
            }`}
            style={{
              transform: 'translateZ(4px)',
            }}
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Gloss overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                transform: `translateX(${(transform.rotateY / 15) * 20}%)`,
              }}
            />
          </div>

          {/* Book pages (right edge) */}
          <div
            className="absolute right-0 top-1 bottom-1 w-2 origin-right bg-gradient-to-l from-stone to-stone/80"
            style={{
              transform: 'rotateY(90deg) translateZ(156px)',
            }}
          />

          {/* Bottom shadow */}
          <div
            className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 bg-black/40 rounded-full blur-xl transition-all duration-300 ${
              isHovered ? 'opacity-60 scale-110' : 'opacity-40 scale-100'
            }`}
            style={{
              transform: `translateX(-50%) translateY(${isHovered ? '10px' : '0'})`,
            }}
          />
        </div>
      </div>

      {/* Book title below */}
      <div className="mt-6 text-center">
        <h3 className="font-cinzel text-lg font-bold text-white">{book.title}</h3>
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
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono text-[#FF4500] uppercase tracking-widest border border-[#FF4500]/30 rounded-full">
            The Library
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-section font-bold text-white mb-4">
            The <span className="text-phoenix-gradient">Shelf</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Two featured titles in 3D format — your flagship works presented on the interactive shelf.
          </p>
        </div>

        {/* Books grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {books.map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Shelf base decoration */}
        <div 
          className={`mt-20 mx-auto max-w-4xl transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="h-2 bg-gradient-to-r from-transparent via-[#FF4500]/30 to-transparent rounded-full" />
          <div className="h-px mt-2 bg-gradient-to-r from-transparent via-[#FF4500]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
