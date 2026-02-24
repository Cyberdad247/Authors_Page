import { useRef } from 'react';
import { motion } from 'framer-motion';

const quotes = [
    {
        id: 1,
        header: "The Genesis",
        text: "Before the philosophy, there was the feeling. The raw data of a mind in processing. 1971. The Santa Line Slaying. A young boy witnesses violence that would forge a lifetime of deciphering the human condition."
    },
    {
        id: 2,
        header: "The Illusion",
        text: "The human mind as a computer hard drive, systematically cluttered with corrupted files. Controlled knowledge. Societal dogma. The 'Fall of Babylon'—a state of confusion imposed by the 1% in power."
    },
    {
        id: 3,
        header: "The Resonance",
        text: "Mathematics, Music, and Energy. Master these to reconnect with the 'Uni-Verse'—One Song, One Truth. Evolution is not a straight line; it is a fire."
    },
    {
        id: 4,
        header: "The Warrior",
        text: "The journey completes when one becomes a Word Warrior. Masculine energy integrated with feminine energy. Power balanced with love. Strength united with caring."
    },
    {
        id: 5,
        header: "The Future",
        text: "A revolution of consciousness. Not of weapons, but of liberated minds. Education transformed, institutional religion declines, and government transparency is demanded."
    }
];

export const QuoteCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="raw-data" className="relative w-full py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
            {/* Background: Cracked Earth */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('/Gemini_Generated_ImagesJ5na2js5na2js5n(1).png')] bg-cover bg-center" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
                <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-12 ml-4 font-mono">Archive: The Raw Data</p>

                {/* Carousel Wrapper */}
                <div className="relative flex items-center group">

                    {/* Left Navigation Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-4 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                    >
                        ←
                    </button>

                    {/* Scrollable Container (CSS Scroll Snapping) */}
                    <div
                        ref={scrollRef}
                        className="flex w-full overflow-x-auto snap-x snap-mandatory gap-8 pb-12 pt-4 px-4 scrollbar-hide hide-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {quotes.map((quote, index) => (
                            <motion.div
                                key={quote.id}
                                whileHover={{ scale: 1.02, rotate: 0 }}
                                initial={{ rotate: index % 2 === 0 ? -1 : 1 }}
                                className="snap-center shrink-0 w-[300px] md:w-[400px] relative flex flex-col items-center justify-center p-10 bg-[#e8e6e1] shadow-[10px_10px_30px_rgba(0,0,0,0.8)] transition-transform duration-300 min-h-[450px]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
                                    borderRadius: '2px 8px 3px 5px'
                                }}
                            >
                                <span className="text-gray-700 font-cinzel text-xs tracking-[0.2em] uppercase absolute top-8 left-1/2 -translate-x-1/2 opacity-60">
                                    {quote.header}
                                </span>

                                <span className="text-gray-400 text-6xl font-serif absolute top-4 left-6 opacity-40">“</span>

                                <div className="text-black font-serif text-lg md:text-xl text-center leading-relaxed relative z-10 mt-10 mb-6 px-4">
                                    {quote.text}
                                </div>

                                <span className="text-gray-400 text-6xl font-serif absolute bottom-0 right-6 opacity-40 translate-y-4">”</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-4 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                    >
                        →
                    </button>

                </div>
            </div>
        </section>
    );
};
