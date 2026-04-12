import { motion, useScroll, useTransform } from 'motion/react';

export default function ScrollingOceanBackground() {
  const { scrollYProgress } = useScroll();

  // Transform values for wave layers moving at different speeds
  const wave1Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const wave2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const patternY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep background layer with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAFB] via-[#E8F4F8] to-[#D5E7F2]/30" />

      {/* Seigaiha (wave scale) Japanese pattern - subtle */}
      <motion.div
        style={{ y: patternY }}
        className="absolute inset-0 opacity-[0.06]"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="seigaiha" x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
              {/* Left arc set - simplified */}
              <path d="M 0,60 Q 30,30 60,60" fill="none" stroke="#ABCEE2" strokeWidth="1.5" />
              <path d="M 0,60 Q 30,38 60,60" fill="none" stroke="#7DB1D4" strokeWidth="1" opacity="0.7" />

              {/* Right arc set - simplified */}
              <path d="M 60,60 Q 90,30 120,60" fill="none" stroke="#ABCEE2" strokeWidth="1.5" />
              <path d="M 60,60 Q 90,38 120,60" fill="none" stroke="#7DB1D4" strokeWidth="1" opacity="0.7" />

              {/* Offset row - simplified */}
              <path d="M -30,30 Q 0,5 30,30" fill="none" stroke="#BF8351" strokeWidth="1" opacity="0.5" />
              <path d="M 30,30 Q 60,5 90,30" fill="none" stroke="#BF8351" strokeWidth="1" opacity="0.5" />
              <path d="M 90,30 Q 120,5 150,30" fill="none" stroke="#BF8351" strokeWidth="1" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seigaiha)" />
        </svg>
      </motion.div>

      {/* Animated wave layer 1 - bottom layer with subtle seigaiha arcs */}
      <motion.div
        style={{ y: wave1Y }}
        className="absolute inset-0"
      >
        <svg className="absolute bottom-0 w-full h-[700px]" preserveAspectRatio="none" viewBox="0 0 1440 700">
          <path
            d="M0,350 Q360,200 720,350 T1440,350 L1440,700 L0,700 Z"
            fill="#ABCEE2"
            opacity="0.2"
          />
          {/* Subtle seigaiha arcs on wave crest */}
          <path d="M0,350 Q120,290 240,350" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />
          <path d="M240,350 Q360,290 480,350" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />
          <path d="M480,350 Q600,290 720,350" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />
          <path d="M720,350 Q840,290 960,350" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />
          <path d="M960,350 Q1080,290 1200,350" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />
          <path d="M1200,350 Q1320,290 1440,350" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Animated wave layer 2 - top layer with seigaiha arcs */}
      <motion.div
        style={{ y: wave2Y }}
        className="absolute inset-0"
      >
        <svg className="absolute bottom-0 w-full h-[550px]" preserveAspectRatio="none" viewBox="0 0 1440 550">
          <path
            d="M0,275 Q360,150 720,275 T1440,275 L1440,550 L0,550 Z"
            fill="#D5E7F2"
            opacity="0.25"
          />
          {/* Seigaiha arcs */}
          <path d="M0,275 Q120,220 240,275" fill="none" stroke="#ABCEE2" strokeWidth="2" opacity="0.4" />
          <path d="M0,275 Q120,235 240,275" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />

          <path d="M240,275 Q360,220 480,275" fill="none" stroke="#ABCEE2" strokeWidth="2" opacity="0.4" />
          <path d="M240,275 Q360,235 480,275" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />

          <path d="M480,275 Q600,220 720,275" fill="none" stroke="#ABCEE2" strokeWidth="2" opacity="0.4" />
          <path d="M480,275 Q600,235 720,275" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />

          <path d="M720,275 Q840,220 960,275" fill="none" stroke="#ABCEE2" strokeWidth="2" opacity="0.4" />
          <path d="M720,275 Q840,235 960,275" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />

          <path d="M960,275 Q1080,220 1200,275" fill="none" stroke="#ABCEE2" strokeWidth="2" opacity="0.4" />
          <path d="M960,275 Q1080,235 1200,275" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />

          <path d="M1200,275 Q1320,220 1440,275" fill="none" stroke="#ABCEE2" strokeWidth="2" opacity="0.4" />
          <path d="M1200,275 Q1320,235 1440,275" fill="none" stroke="#7DB1D4" strokeWidth="1.5" opacity="0.3" />
        </svg>
      </motion.div>


      {/* Floating animated circles - subtle */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 8, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-[15%] w-20 h-20 rounded-full bg-[#ABCEE2] blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -10, 0],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 right-[20%] w-24 h-24 rounded-full bg-[#BF8351] blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 6, 0],
          opacity: [0.07, 0.14, 0.07],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-[65%] left-[25%] w-22 h-22 rounded-full bg-[#7DB1D4] blur-3xl"
      />

    </div>
  );
}
