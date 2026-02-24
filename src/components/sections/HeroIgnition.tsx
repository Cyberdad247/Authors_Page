import { motion } from 'framer-motion';

export const HeroIgnition = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background: Lava / Magma (Theme Asset) */}
      <div
        className="absolute inset-0 z-0 opacity-40 bg-[url('/phoenix-frame-bg.png')] bg-cover bg-center"
        style={{ mixBlendMode: 'luminosity' }}
      />
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">

        {/* Typographic Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4">The Ignition</p>
          <h1 className="text-white text-5xl md:text-7xl font-cinzel tracking-wide mb-4 drop-shadow-2xl font-bold">
            THE ILLUSION IS REVEALED.
          </h1>
          <p className="text-orange-300/80 text-xl font-serif italic">
            The Rise of the Phoenix.
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl aspect-video rounded-xl border border-white/10 bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(255,69,0,0.15)] flex items-center justify-center group overflow-hidden cursor-pointer"
        >
          {/* Internal Glow on Hover */}
          <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Play Button */}
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-orange-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,165,0,0.5)]">
              {/* SVG Play Icon */}
              <svg className="w-6 h-6 text-orange-400 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-orange-400 text-xs tracking-widest font-semibold font-mono">PLAY</span>
            <span className="text-gray-500 text-[10px] tracking-wider mt-1 font-mono">BOOK_TRAILER.mp4</span>
          </div>

          {/* Spark Origin (Where the EnergyThread visually begins) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-orange-500 rounded-full blur-[40px] opacity-60 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};
