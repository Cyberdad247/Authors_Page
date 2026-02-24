import { motion } from 'framer-motion';

export const SingularityCTA = () => {
    return (
        <section id="singularity" className="relative w-full h-screen min-h-[600px] bg-black overflow-hidden flex flex-col items-center justify-center">
            {/* Deep Space Background */}
            <div className="absolute inset-0 bg-[url('/phoenix-frame-bg.png')] bg-cover bg-center opacity-40 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />

            {/* The Descending Vertical Glowing Line */}
            <div className="absolute top-0 left-1/2 w-[3px] h-1/2 bg-green-400 -translate-x-1/2 shadow-[0_0_20px_rgba(74,222,128,1),_0_0_40px_rgba(74,222,128,0.6)] z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center mt-32 px-4 w-full max-w-md">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-4xl md:text-5xl font-serif leading-tight mb-8 drop-shadow-lg"
                >
                    Secure Your Seat<br />on the Flight.
                </motion.h2>

                {/* Input Form */}
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full flex flex-col gap-4 relative"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="email"
                        placeholder="Enter Email to Defrag History."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 backdrop-blur-sm transition-all"
                    />

                    <button
                        type="submit"
                        className="w-full relative group overflow-hidden rounded-lg bg-[#00FF66] px-6 py-4 text-black font-bold tracking-widest transition-all duration-300 hover:scale-[1.02]"
                    >
                        {/* Intense button glow */}
                        <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -inset-1 bg-[#00FF66] blur-xl opacity-40 group-hover:opacity-60 transition-opacity -z-10" />

                        <span className="relative z-10">ENGAGE</span>
                    </button>
                </motion.form>

                {/* Flare at the connection point (simulating where the line hits the button) */}
                <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-16 h-16 bg-[#00FF66] rounded-full blur-[30px] opacity-60 pointer-events-none z-20" />
            </div>

            {/* Bottom right decorative star */}
            <div className="absolute bottom-8 right-8 text-white/30 text-4xl animate-pulse">✦</div>
        </section>
    );
};
