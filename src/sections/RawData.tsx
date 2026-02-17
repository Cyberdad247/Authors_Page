import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollCard {
    id: number;
    content: string;
}

const cards: ScrollCard[] = [
    {
        id: 1,
        content: "Before the philosophy, there was the feeling.",
    },
    {
        id: 2,
        content: "The raw data of a mind in processing.",
    },
    {
        id: 3,
        content: "When no-things inside my skill is done,\nAre leaving your nao.\nThat brings to feel!",
    },
    {
        id: 4,
        content: "A lifely unill head woow,\nAnd then came to me,\nAnd tile things are pought.",
    },
    {
        id: 5,
        content: "But this scuffle our coon,\nAnd he cerve to view,\nAnd the more you freight youd.",
    },
    {
        id: 6,
        content: "And thou alight the poeery\nIn the Phoenix Wiem.",
    },
];

export function RawData() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', checkScroll);
            checkScroll();
        }
        return () => el?.removeEventListener('scroll', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const amount = 400;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative w-full py-24 bg-[#0a0505] overflow-hidden">
            {/* Background Lava Texture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/phoenix-frame-bg.png')] bg-cover opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[#0a0505]/80" />
            </div>

            {/* Central Lava Stream (SVG Wave) */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-64 z-0 pointer-events-none opacity-80">
                <svg
                    className="w-full h-full min-w-[1200px]"
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,100 C150,150 300,50 450,100 C600,150 750,50 900,100 C1050,150 1200,50 1350,100"
                        fill="none"
                        stroke="url(#lavaGradient)"
                        strokeWidth="40"
                        filter="url(#glow)"
                        className="animate-pulse-slow"
                    />
                    <path
                        d="M0,100 C150,150 300,50 450,100 C600,150 750,50 900,100 C1050,150 1200,50 1350,100"
                        fill="none"
                        stroke="url(#coreGradient)"
                        strokeWidth="10"
                        className="animate-flow-slow"
                        strokeDasharray="20 10"
                    />
                    <defs>
                        <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF4500" stopOpacity="0" />
                            <stop offset="20%" stopColor="#FF4500" />
                            <stop offset="50%" stopColor="#FFD700" />
                            <stop offset="80%" stopColor="#FF4500" />
                            <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FFF" stopOpacity="0" />
                            <stop offset="50%" stopColor="#FFF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="15" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                        The Raw Data
                    </span>
                </div>

                {/* Scroll Container */}
                <div className="relative group">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 bg-black/50 backdrop-blur-sm rounded-full border border-[#FF4500]/30 text-[#FF4500] hover:bg-[#FF4500]/10 transition-all ${showLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center"
                            >
                                {/* Parchment Card */}
                                <div className="relative aspect-[3/4] p-8 flex items-center justify-center text-center transform transition-transform duration-500 hover:-translate-y-2">

                                    {/* Parchment Background */}
                                    <div className="absolute inset-0 bg-[#dacca8] rounded sm:rounded-md shadow-2xl parchment-texture transform rotate-1" />

                                    {/* Torn Edge Effect (Top/Bottom) - Simulated with CSS clip-path or simple borders for now */}
                                    <div className="absolute inset-0 border-[6px] border-black/5 rounded sm:rounded-md pointer-events-none" />

                                    {/* Content */}
                                    <div className="relative z-10 font-cinzel text-black/80 font-medium leading-relaxed italic">
                                        <span className="text-4xl absolute -top-4 -left-2 text-[#8B1A1A]/20">“</span>
                                        {card.content.split('\n').map((line, i) => (
                                            <span key={i} className="block mb-2 last:mb-0">
                                                {line}
                                            </span>
                                        ))}
                                        <span className="text-4xl absolute -bottom-8 -right-2 text-[#8B1A1A]/20 rotate-180">“</span>
                                    </div>

                                    {/* Burnt/Shadow Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/10 via-transparent to-[#8B4513]/20 rounded sm:rounded-md pointer-events-none mix-blend-multiply" />
                                </div>
                            </div>
                        ))}

                        {/* Spacer for right padding */}
                        <div className="w-4 flex-shrink-0" />
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 bg-black/50 backdrop-blur-sm rounded-full border border-[#FF4500]/30 text-[#FF4500] hover:bg-[#FF4500]/10 transition-all ${showRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
