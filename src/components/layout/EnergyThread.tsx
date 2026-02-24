import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const EnergyThread = () => {
    const { scrollYProgress } = useScroll();
    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Dynamic colors based on scroll progress
    // Fire Red (Section 1) -> Purple (Section 3) -> Alchemy Green (Section 4) -> Singularity Green (Section 5)
    const strokeColor = useTransform(
        scrollYProgress,
        [0, 0.4, 0.7, 1],
        ['#FF4500', '#8B5CF6', '#10B981', '#00FF66']
    );

    const glowColor = useTransform(
        scrollYProgress,
        [0, 0.4, 0.7, 1],
        ['rgba(255, 69, 0, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(0, 255, 102, 0.8)']
    );

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* The Base Energy Thread */}
                <motion.path
                    d="M 50 0 V 100"
                    stroke={strokeColor}
                    strokeWidth="0.2"
                    style={{ pathLength }}
                    strokeDasharray="0 1"
                />

                {/* The Glow Layer */}
                <motion.path
                    d="M 50 0 V 100"
                    stroke={glowColor}
                    strokeWidth="0.8"
                    style={{ pathLength }}
                    strokeDasharray="0 1"
                    filter="blur(2px)"
                    opacity={0.4}
                />

                {/* Intense Core Glow (Top Pulse) */}
                <motion.circle
                    cx="50"
                    cy={useTransform(pathLength, [0, 1], [0, 100])}
                    r="0.5"
                    fill={strokeColor}
                    style={{
                        filter: 'blur(3px)',
                        opacity: useTransform(pathLength, [0, 0.01, 0.99, 1], [0, 1, 1, 0])
                    }}
                >
                    <animate attributeName="r" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
                </motion.circle>
            </svg>
        </div>
    );
};
