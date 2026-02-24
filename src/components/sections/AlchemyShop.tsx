import { motion } from 'framer-motion';

const shopItems = [
    { id: 1, name: 'Oils', desc: 'Essence for the Ascent', imgPlaceholder: '🧪' },
    { id: 2, name: 'Candle', desc: 'Light for the Void', imgPlaceholder: '🕯️' },
    { id: 3, name: 'Jewelry', desc: 'Armor for the Spirit', imgPlaceholder: '🦅' },
];

export const AlchemyShop = () => {
    return (
        <section id="alchemy-shop" className="relative w-full py-24 bg-black overflow-hidden flex flex-col items-center">
            {/* Background Starfield/Nebula (Simulated) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black opacity-80" />

            {/* Header */}
            <div className="relative z-10 text-center mb-16">
                <p className="text-green-400 text-xs tracking-[0.2em] uppercase mb-2">Portfolio Series</p>
                <h2 className="text-white text-4xl md:text-5xl font-serif tracking-wide">THE ALCHEMY LAB</h2>
            </div>

            {/* Content Container */}
            <div className="relative w-full max-w-5xl px-4">
                {/* The Continuous Horizontal Glowing Line */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-green-400 -translate-y-1/2 shadow-[0_0_15px_rgba(74,222,128,0.8),_0_0_30px_rgba(74,222,128,0.4)] z-0" />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {shopItems.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 hover:border-green-400/50 hover:bg-white/10"
                        >
                            {/* Asset Container */}
                            <div className="h-40 w-40 flex items-center justify-center mb-6 relative">
                                {/* Internal glow behind the item */}
                                <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-6xl relative z-10 drop-shadow-[0_0_15px_rgba(74,222,128,0.6)]">
                                    {item.imgPlaceholder}
                                </span>
                                {/* Replace span above with actual image: <img src={item.src} alt={item.name} className="object-contain drop-shadow-2xl" /> */}
                            </div>

                            {/* Text */}
                            <h3 className="text-white text-2xl font-medium mb-2">{item.name}</h3>
                            <p className="text-gray-400 text-sm tracking-wide">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
