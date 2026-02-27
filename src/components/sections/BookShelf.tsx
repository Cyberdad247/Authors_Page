import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface BookProps {
  title: string;
  coverImage: string;
}

const KineticBook = ({ title, coverImage }: BookProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Raw mouse coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply spring physics for smooth interpolation (The "Phoenix" feel)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse position to 3D rotation (-15deg to 15deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate mouse position relative to center of the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-64 h-96 rounded-xl shadow-2xl shadow-orange-500/20 cursor-pointer overflow-hidden group"
      title={title}
    >
      {/* Book Cover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${coverImage})`, transform: "translateZ(30px)" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-6" >
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-z-[50px]">
            <h3 className="text-white font-cinzel text-xl font-bold drop-shadow-lg">{title}</h3>
          </div>
        </div>
      </div>

      {/* Ember Glow Overlay (Follows Mouse) */}
      <motion.div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${useTransform(x, [-0.5, 0.5], ['0%', '100%'])} ${useTransform(y, [-0.5, 0.5], ['0%', '100%'])}, rgba(255,100,0,0.3) 0%, transparent 60%)`,
          transform: "translateZ(40px)"
        }}
      />
    </motion.div>
  );
};

export const BookShelf = () => {
  return (
    <section id="shelf" className="relative w-full bg-[#0a0505] flex items-center justify-center perspective-[1000px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <KineticBook title="Volume I" coverImage="/book-1.jpg" />
        <KineticBook title="Volume II" coverImage="/book-2.jpg" />
        <KineticBook title="Volume III" coverImage="/book-3.jpg" />
      </div>
    </section>
  );
};
