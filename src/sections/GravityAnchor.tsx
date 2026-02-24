import { useRef, useEffect, useState } from 'react';

export function GravityAnchor() {
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
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="gravity-anchor"
            className="relative w-full pt-4 pb-24 lg:pb-32 overflow-hidden bg-[#0a0505]"
        >
            {/* Background - Purple Cosmic Nebula */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(76,29,149,0.4),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,5,5,0.8),rgba(10,5,5,0.4),rgba(10,5,5,0.8))]" />

                {/* Clouds overlay (simulated with CSS gradients/filters if image not available, or placeholder) */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0505] via-[#4c1d95]/20 to-transparent opacity-60" />
            </div>

            {/* Energy Beam Connector (Coming from top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-[#FF4500] to-[#8B5CF6] opacity-80 blur-sm z-10" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Label */}
                <div className={`absolute top-0 left-6 lg:left-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-widest">
                        The Gravity Anchor
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mt-4">

                    {/* Left: Profile Image with Gravity Ring */}
                    <div className={`relative flex-shrink-0 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        {/* The Gravity Ring */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#FF4500] via-[#8B5CF6] to-[#FF4500] opacity-80 blur-md animate-spin-slow" />
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#FF4500] via-[#8B5CF6] to-[#FF4500]" />

                        {/* Image Container */}
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#0a0505] z-10">
                            <img
                                src="/profile-placeholder.svg"
                                alt="VaShawn F. Head"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Orbiting Particle */}
                        <div className="absolute -inset-8 animate-spin-reverse-slow pointer-events-none">
                            <div className="absolute top-1/2 right-0 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_10px_#fff]" />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className={`max-w-xl text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Forged in the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#8B5CF6]">
                                1971 Crucible.
                            </span>
                        </h2>

                        <div className="space-y-4 text-lg text-white/70 font-sans leading-relaxed">
                            <p>
                                Santa Line Slaying event tour the life of VaShawn F. Head, up is now occown and toe Vaisman's tred, times, diness-ton, ine their miln and down exceted forged in and ouenmtors.
                            </p>
                            {/* Note: The above text is placeholder Lorem Ipsum-ish text from the image. 
                  I will replace it with something more coherent based on the prompt "The Gemini Generated Image" 
                  context if possible, or keep it close to the image text for now.
                  Actually, let's make it more generic but meaningful based on the "Raw Data" context.
              */}
                            <p className="text-sm font-mono text-[#8B5CF6]/80 mt-6 border-l-2 border-[#8B5CF6] pl-4">
                // SYSTEM_ID: VFH-1971<br />
                // STATUS: AWAKENED<br />
                // MISSION: DEFRAG_HISTORY
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Energy Beam Connector (Going down) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-[#8B5CF6] to-[#10B981] opacity-80 blur-sm z-10" />
        </section>
    );
}
