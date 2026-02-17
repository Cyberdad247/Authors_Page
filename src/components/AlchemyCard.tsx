import type { LucideIcon } from 'lucide-react';

interface AlchemyCardProps {
    id: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
    color: string;
    delay: number;
    isVisible: boolean;
}

export function AlchemyCard({ title, subtitle, icon: Icon, color, delay, isVisible }: AlchemyCardProps) {
    return (
        <a
            href="https://headartworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col items-center text-center transition-all duration-700 cursor-pointer`}
            style={{
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
            }}
        >
            {/* Card/Container */}
            <div className="relative w-full max-w-sm aspect-[4/5] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/20 transition-colors duration-500">

                {/* Inner Glow Gradient */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(circle at center, ${color}30, transparent 70%)` }}
                />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">

                    {/* Icon / Product Placeholder */}
                    <div className="relative mb-8">
                        {/* Glowing Orb behind icon */}
                        <div
                            className="absolute inset-0 rounded-full blur-xl animate-pulse-glow"
                            style={{ backgroundColor: `${color}40` }}
                        />
                        <div
                            className="relative w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-black/40 shadow-2xl group-hover:scale-110 transition-transform duration-500"
                            style={{ borderColor: `${color}60` }}
                        >
                            <Icon
                                size={40}
                                style={{ color: color, filter: `drop-shadow(0 0 10px ${color})` }}
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                        {title}
                    </h3>
                    <p className="font-mono text-xs text-white/60 uppercase tracking-widest">
                        {subtitle}
                    </p>

                </div>

                {/* Beam passing through logic (Visual only) */}
                <div className="absolute top-1/2 w-full h-px bg-white/10 group-hover:bg-white/30 transition-colors" />

            </div>

            {/* Reflection/Shadow at bottom */}
            <div
                className="mt-8 h-4 w-3/4 rounded-[100%] blur-xl transition-all duration-500"
                style={{
                    backgroundColor: color,
                    opacity: isVisible ? 0.3 : 0,
                    transform: 'scaleY(0.5)'
                }}
            />

        </a>
    );
}
