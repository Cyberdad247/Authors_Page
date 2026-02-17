import { useRef, useEffect, useState } from 'react';
import { Sparkles, Flame, Droplets, type LucideIcon } from 'lucide-react';
import { AlchemyCard } from '@/components/AlchemyCard';

interface AlchemyItem {
    id: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
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
                        {items.map((item) => (
                            <AlchemyCard
                                key={item.id}
                                {...item}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* Energy Beam Connector (Going down to Singularity) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-[#06B6D4] to-[#10B981] opacity-60 blur-sm z-10" />

        </section>
    );
}
