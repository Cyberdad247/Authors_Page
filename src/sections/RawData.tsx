import { useRef, useEffect } from 'react';

interface ScrollCard {
    id: number;
    header: string;
    content: React.ReactNode;
}

const cards: ScrollCard[] = [
    {
        id: 1,
        header: "The Genesis",
        content: (
            <>
                <p>Before the philosophy, there was the feeling.</p>
                <p>The raw data of a mind in processing.</p>
                <p><strong>1971.</strong> The Santa Line Slaying.</p>
                <p>A young boy witnesses violence that would forge a lifetime of deciphering the human condition.</p>
                <p>His trauma officially compared to a Vietnam veteran who served three tours.</p>
            </>
        ),
    },
    {
        id: 2,
        header: "The Illusion Revealed",
        content: (
            <>
                <p>The human mind as a <strong>computer hard drive</strong>, systematically cluttered with corrupted files.</p>
                <p>Controlled knowledge.</p>
                <p>Societal dogma.</p>
                <p>Historical manipulations.</p>
                <p>The <strong>"Fall of Babylon"</strong>—a state of confusion imposed by the 1% in power.</p>
            </>
        ),
    },
    {
        id: 3,
        header: "The Three Languages",
        content: (
            <>
                <p><strong>Mathematics</strong> — The language of logic, pattern, and order.</p>
                <p><strong>Music</strong> — The language of vibration, harmony, and emotional resonance.</p>
                <p><strong>Energy</strong> — The fundamental language of existence that connects all things.</p>
                <p>Master these to reconnect with the <strong>"Uni-Verse"</strong>—One Song, One Truth.</p>
            </>
        ),
    },
    {
        id: 4,
        header: "The Word Warrior",
        content: (
            <>
                <p>The journey completes when one becomes a <strong>Word Warrior</strong>.</p>
                <p>Masculine energy integrated with feminine energy.</p>
                <p>Power balanced with love.</p>
                <p>Strength united with caring.</p>
                <p>A healthy, balanced human with integrity.</p>
            </>
        ),
    },
    {
        id: 5,
        header: "The Future",
        content: (
            <>
                <p>Projected influence over the next <strong>25 years</strong>.</p>
                <p>Education transformed.</p>
                <p>Institutional religion declines.</p>
                <p>Government transparency demanded.</p>
                <p>A revolution of consciousness.</p>
                <p>Not of weapons, but of <strong>liberated minds</strong>.</p>
            </>
        ),
    },
];

export function RawData() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !trackRef.current || !progressRef.current) return;

            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // Check if we're in the section range
            if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight - windowHeight) {
                // Calculate progress (0 to 1) based on how far we've scrolled within the sticky timeframe
                // The sticky container is 100vh, so scrollable distance is sectionHeight - windowHeight
                const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / (sectionHeight - windowHeight)));

                // Calculate horizontal translation
                // We want to translate the track to the left as we scroll down
                const trackWidth = trackRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                // Total scrollable width = trackWidth - viewportWidth + padding
                const maxTranslate = trackWidth - viewportWidth + 200;

                // Apply transforms directly for performance
                const translateX = -progress * maxTranslate;
                trackRef.current.style.transform = `translateY(-50%) translateX(${translateX}px)`;

                // Update progress bar
                progressRef.current.style.width = `${progress * 100}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-[400vh] bg-[#000]"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/Gemini_Generated_ImagesJ5na2js5na2js5n(1).png')" }}>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                <h2 className="absolute top-[60px] left-1/2 -translate-x-1/2 font-cinzel text-4xl md:text-6xl text-[#f4e4c1] text-center z-10 tracking-[12px] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                    The Raw Data
                </h2>

                {/* Horizontal Track */}
                <div
                    ref={trackRef}
                    className="absolute top-1/2 left-0 flex gap-[100px] px-[100px] will-change-transform"
                    style={{ transform: 'translateY(-50%)' }}
                >
                    {cards.map((card) => (
                        <div key={card.id} className="parchment flex-shrink-0 w-[85vw] md:w-[500px] min-h-[500px] md:min-h-[600px] flex flex-col justify-center relative shadow-2xl">
                            <div className="parchment-texture absolute inset-0 rounded-[8px_20px_20px_8px] pointer-events-none" />

                            <div className="quote-mark open absolute top-[30px] left-[30px] font-tangerine text-[5rem] text-[#8b4513] opacity-40 leading-none">"</div>

                            <div className="parchment-content relative z-10 font-tangerine text-[1.8rem] md:text-[2.2rem] leading-relaxed text-[#1a0f05] text-center drop-shadow-sm">
                                <div className="content-header font-cinzel text-lg md:text-xl font-semibold text-[#5a3d2b] uppercase tracking-[4px] mb-[30px] pb-[15px] border-b-2 border-[#5a3d2b]/30">
                                    {card.header}
                                </div>
                                <div className="space-y-5">
                                    {card.content}
                                </div>
                            </div>

                            <div className="quote-mark close absolute bottom-[30px] right-[30px] font-tangerine text-[5rem] text-[#8b4513] opacity-40 leading-none">"</div>
                        </div>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[200px] h-[3px] bg-[#f4e4c1]/20 rounded-full overflow-hidden z-10">
                    <div
                        ref={progressRef}
                        className="h-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e] w-0 transition-[width] duration-100 ease-linear"
                    />
                </div>

            </div>
        </section>
    );
}
