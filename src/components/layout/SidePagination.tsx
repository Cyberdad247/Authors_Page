import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
    { id: 'hero', label: '1' },
    { id: 'raw-data', label: '3' },
    { id: 'gravity-anchor', label: '6' },
    { id: 'shelf', label: '3' },
    { id: 'alchemy-shop', label: '8' },
    { id: 'singularity', label: '0' },
];

export const SidePagination = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-8">
            {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                    <button
                        key={section.id}
                        onClick={() => scrollTo(section.id)}
                        className="group relative flex flex-col items-center"
                    >
                        {/* Number Label */}
                        <span className={`text-[10px] font-mono transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/20'}`}>
                            {section.label}
                        </span>

                        {/* Indicator Dot */}
                        <div className={`w-[2px] h-4 mt-2 transition-all duration-300 ${isActive ? 'bg-orange-500 h-8 shadow-[0_0_10px_#ff4500]' : 'bg-white/10'}`} />

                        {/* Hover Tooltip */}
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 10 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="absolute left-4 top-0 bg-white/5 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[10px] uppercase tracking-widest text-white whitespace-nowrap"
                                >
                                    {section.id.replace('-', ' ')}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                );
            })}
        </div>
    );
};
