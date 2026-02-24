import { motion } from 'framer-motion';

export const GravityAnchor = () => {
    return (
        <section id="gravity-anchor" className="relative w-full py-32 bg-[#050505] overflow-hidden">
            {/* Background: Deep Purple Space / Clouds */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(139,92,246,0.15),_transparent_60%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-purple-900/10 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">

                    {/* Left: Portrait with Glowing Purple Ring */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative group"
                    >
                        {/* The Purple Glowing Ring */}
                        <div className="absolute -inset-6 rounded-full bg-purple-500/20 blur-2xl animate-pulse" />
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.6)]" />

                        {/* Image Frame */}
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-black z-10 bg-zinc-900">
                            <img
                                src="/profile-placeholder.svg"
                                alt="Author Portrait"
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                            />
                        </div>

                        {/* Orbiting Spark */}
                        <div className="absolute -inset-10 animate-spin-slow pointer-events-none">
                            <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-400 rounded-full blur-[2px] shadow-[0_0_15px_#a855f7]" />
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <div className="max-w-xl text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-6 font-mono">The Gravity Anchor</p>
                            <h2 className="text-white text-4xl lg:text-6xl font-cinzel font-bold mb-8 leading-tight">
                                Forged in the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-400">
                                    1971 Crucible.
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-serif italic">
                                <p>
                                    "Trauma is not a life sentence; it is the raw material for transformation."
                                </p>
                                <p className="text-base font-normal not-italic text-gray-500">
                                    VaShawn F. Head's journey from a childhood witness to institutional violence to a "Word Warrior" is the weight that anchors this entire philosophy.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-col items-center lg:items-start gap-2">
                                <div className="text-[10px] font-mono text-purple-500/60 tracking-widest uppercase">Identity Verification</div>
                                <div className="h-[1px] w-24 bg-gradient-to-r from-purple-500 to-transparent" />
                                <div className="text-xs font-mono text-gray-600 mt-2">VFH_REBORN_01.X</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
