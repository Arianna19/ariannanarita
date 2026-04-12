import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface WaveTransitionProps {
  variant?: 'blue' | 'orange' | 'gradient';
  flip?: boolean;
}

export default function WaveTransition({ variant = 'blue', flip = false }: WaveTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 50, reduceMotion ? 0 : -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, reduceMotion ? 0.9 : 0]);

  const getColors = () => {
    switch (variant) {
      case 'blue':
        return { primary: '#ABCEE2', secondary: '#7DB1D4' };
      case 'orange':
        return { primary: '#BF8351', secondary: '#D6A882' };
      case 'gradient':
        return { primary: '#ABCEE2', secondary: '#BF8351' };
      default:
        return { primary: '#ABCEE2', secondary: '#7DB1D4' };
    }
  };

  const colors = getColors();

  return (
    <div ref={ref} className="relative h-48 overflow-hidden w-full" style={{ position: 'relative' }}>
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
        >
          <defs>
            <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0.3" />
              <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#gradient-${variant})`}
            d="M0,160 C320,100 640,220 960,160 C1280,100 1440,180 1440,180 L1440,320 L0,320 Z"
          />
          <path
            fill={colors.primary}
            fillOpacity="0.2"
            d="M0,192 C240,132 480,252 720,192 C960,132 1200,252 1440,192 L1440,320 L0,320 Z"
          />
        </svg>
      </motion.div>
    </div>
  );
}
