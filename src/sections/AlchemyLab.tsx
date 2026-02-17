import { useRef, useEffect, useState } from 'react';
import { Sparkles, Flame, Droplets } from 'lucide-react';

interface AlchemyItem {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    color: string;
    beamColor: string;
    delay: number;
}

const items: AlchemyItem[] = [
    {
        id: 'oils',
        title: 'Oils',
        subtitle: 'Essence for the Ascent.',
        icon: Droplets,
        color: '#10B981', // Emerald Green
        beamColor: 'from-emerald-500/50 to-emerald-500/10',
        delay: 0,
    },
    {
        id: 'candles',
        title: 'Candles',
        subtitle: 'Light for the Void.',
        icon: Flame,
        color: '#F59E0B', // Amber/Gold
        beamColor: 'from-amber-500/50 to-amber-500/10',
        delay: 200,
    },
    {
        id: 'jewelry',
        title: 'Jewelry',
        subtitle: 'Armor for the Spirit.',
        icon: Sparkles,
        color: '#06B6D4', // Cyan/Teal
        beamColor: 'from-cyan-500/50 to-cyan-500/10',
        delay: 400,
    },
];

export function AlchemyLab() {
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
            id="alchemy-lab"
            className="relative w-full py-32 overflow-hidden bg-[#0a0505]"
        >
            {/* Background - Deep Space / Nebula */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
                <div className="absolute inset-0 bg-[#0a0505]/90" />
                {/* Stars */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.1 }} />
            </div>

            {/* Vertical Connecting Beam (from Gravity Anchor) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-[#10B981] to-[#06B6D4] opacity-60 blur-sm z-10" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className={`mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest pl-2 border-l-2 border-[#06B6D4]">
                        The Alchemy Lab
                    </span>
                </div>

                {/* The Connection Line container */}
                <div className="relative">

                    {/* Horizontal Energy Stream connecting items */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 hidden lg:block">
                        <div className={`w-full h-full bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent blur-md transition-opacity duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`} />
                        <div className={`w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-[3s] ease-out ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                        {items.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.id}
                                    className={`group relative flex flex-col items-center text-center transition-all duration-700`}
                                    style={{
                                        transitionDelay: `${item.delay}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                                    }}
                                >
                                    {/* Card/Container */}
                                    <div className="relative w-full max-w-sm aspect-[4/5] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/20 transition-colors duration-500">

                                        {/* Inner Glow Gradient */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                            style={{ background: `radial-gradient(circle at center, ${item.color}30, transparent 70%)` }}
                                        />

                                        {/* Content Container */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">

                                            {/* Icon / Product Placeholder */}
                                            <div className="relative mb-8">
                                                {/* Glowing Orb behind icon */}
                                                <div
                                                    className="absolute inset-0 rounded-full blur-xl animate-pulse-glow"
                                                    style={{ backgroundColor: `${item.color}40` }}
                                                />
                                                <div
                                                    className="relative w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-black/40 shadow-2xl group-hover:scale-110 transition-transform duration-500"
                                                    style={{ borderColor: `${item.color}60` }}
                                                >
                                                    <Icon
                                                        size={40}
                                                        style={{ color: item.color, filter: `drop-shadow(0 0 10px ${item.color})` }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Text */}
                                            <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="font-mono text-xs text-white/60 uppercase tracking-widest">
                                                {item.subtitle}
                                            </p>

                                        </div>

                                        {/* Beam passing through logic (Visual only) */}
                                        <div className="absolute top-1/2 w-full h-px bg-white/10 group-hover:bg-white/30 transition-colors" />

                                    </div>

                                    {/* Reflection/Shadow at bottom */}
                                    <div
                                        className="mt-8 h-4 w-3/4 rounded-[100%] blur-xl transition-all duration-500"
                                        style={{
                                            backgroundColor: item.color,
                                            opacity: isVisible ? 0.3 : 0,
                                            transform: 'scaleY(0.5)'
                                        }}
                                    />

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>

            {/* Energy Beam Connector (Going down to Singularity) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-[#06B6D4] to-[#10B981] opacity-60 blur-sm z-10" />

        </section>
    );
}
