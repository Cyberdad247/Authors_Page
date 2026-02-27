import { motion } from 'framer-motion';

export const GravityAnchor = () => {
    return (
        <section id="gravity-anchor" className="relative w-full bg-[#050505] overflow-hidden">
            {/* Background: Deep Purple Space / Nebula - Optimized Layering */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(139,92,246,0.1),_transparent_60%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-purple-900/5 to-transparent" />
                {/* Subtle Grain Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-overlay" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">

                    {/* Left: Portrait with Glowing Purple Ring */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="relative group cursor-crosshair"
                        >
                            {/* The Purple Glowing Ring - Optimized with backdrop-blur */}
                            <div className="absolute -inset-8 rounded-full bg-purple-500/10 blur-3xl animate-pulse group-hover:bg-purple-500/20 transition-colors duration-700" />

                            {/* Outer Glow Ring */}
                            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-purple-400 opacity-80 shadow-[0_0_40px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] group-hover:opacity-100 transition-all duration-500" />

                            {/* Image Frame */}
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-black z-10 bg-zinc-950 shadow-inner">
                                <img
                                    src="/profile-placeholder.svg"
                                    alt="VaShawn O. Head Portrait"
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                                />
                                {/* Glass shine overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Orbiting Spark - Merlin's Energy Logic */}
                            <div className="absolute -inset-12 animate-spin-slow pointer-events-none">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full blur-[2px] shadow-[0_0_20px_#a855f7]"
                                />
                            </div>

                            {/* Geometric Echoes */}
                            <div className="absolute -inset-4 border border-purple-500/10 rounded-full animate-ping-slow opacity-20" />
                        </motion.div>

                        {/* Status Glyph */}
                        <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-md border border-purple-500/30 px-3 py-1 rounded-full z-20 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-purple-400 tracking-tighter uppercase">Subject_71_Verified</span>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="max-w-xl text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                                <p className="text-purple-400 text-xs tracking-[0.4em] uppercase font-mono">The Gravity Anchor</p>
                                <div className="h-[1px] w-12 bg-purple-900/50 hidden lg:block" />
                            </div>

                            <h2 className="text-white text-5xl lg:text-7xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
                                Forged in the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-fuchsia-400 to-indigo-400 drop-shadow-sm">
                                    1971 Crucible.
                                </span>
                            </h2>

                            <div className="space-y-8 text-gray-400 text-lg lg:text-xl leading-relaxed font-serif italic relative">
                                <span className="absolute -left-8 -top-4 text-6xl text-purple-900/20 font-serif">"</span>
                                <p className="relative z-10">
                                    Trauma is not a life sentence; it is the raw material for transformation.
                                </p>
                                <p className="text-base font-normal not-italic text-gray-500 border-l-2 border-purple-900/30 pl-6 py-2">
                                    VaShawn O. Head's journey from a childhood witness to institutional violence to a <span className="text-purple-400/80">"Word Warrior"</span> is the kinetic weight that anchors this entire philosophy.
                                </p>
                            </div>

                            <div className="mt-14 flex flex-col items-center lg:items-start group">
                                <div className="text-[10px] font-mono text-purple-500/40 tracking-[0.3em] uppercase mb-2 group-hover:text-purple-400 transition-colors">Identity Verification</div>
                                <div className="h-[1px] w-48 bg-gradient-to-r from-purple-500/50 via-purple-500/10 to-transparent" />
                                <div className="text-[11px] font-mono text-gray-700 mt-3 flex items-center gap-2">
                                    <span className="opacity-50">#</span>
                                    <span>VFH_REBORN_V2.OPTIMIZED</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Visual Continuity Spark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-purple-500/50 to-transparent opacity-30" />
        </section>
    );
};
