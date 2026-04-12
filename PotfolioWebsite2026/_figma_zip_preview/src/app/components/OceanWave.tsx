import { motion } from 'motion/react';

export function FlowingWater({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M0 75 Q25 60, 50 75 T100 75 T150 75 T200 75"
        stroke="#ABCEE2"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M0 90 Q25 75, 50 90 T100 90 T150 90 T200 90"
        stroke="#7DB1D4"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M0 105 Q25 90, 50 105 T100 105 T150 105 T200 105"
        stroke="#D5E7F2"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function WaveDecoration({ className = "", variant = 'blue' }: { className?: string; variant?: 'blue' | 'orange' }) {
  const colors = variant === 'blue'
    ? { primary: '#ABCEE2', secondary: '#7DB1D4', accent: '#5B8FA3' }
    : { primary: '#BF8351', secondary: '#D6A882', accent: '#A66D42' };

  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main wave */}
      <path
        d="M0 120 Q30 80, 60 120 Q90 160, 120 120 Q150 80, 180 120 L200 120 L200 200 L0 200 Z"
        fill={colors.primary}
        opacity="0.3"
      />
      {/* Secondary wave */}
      <path
        d="M0 140 Q40 110, 80 140 Q120 170, 160 140 L200 140 L200 200 L0 200 Z"
        fill={colors.secondary}
        opacity="0.2"
      />
      {/* Wave crest details */}
      <circle cx="60" cy="115" r="8" fill="white" opacity="0.6" />
      <circle cx="120" cy="115" r="8" fill="white" opacity="0.6" />
      <ellipse cx="60" cy="110" rx="12" ry="6" fill="white" opacity="0.4" />
      <ellipse cx="120" cy="110" rx="12" ry="6" fill="white" opacity="0.4" />
    </svg>
  );
}

export function JapaneseWave({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base wave */}
      <path
        d="M0 150 Q50 120, 100 150 Q150 180, 200 150 Q250 120, 300 150 L300 200 L0 200 Z"
        fill="#5B8FA3"
        opacity="0.8"
      />
      {/* Main wave curl */}
      <path
        d="M50 140 Q70 110, 90 130 Q100 140, 110 135 Q120 130, 130 140 Q140 150, 150 145"
        fill="#ABCEE2"
        stroke="#7DB1D4"
        strokeWidth="2"
      />
      {/* Foam details */}
      <circle cx="80" cy="125" r="6" fill="white" opacity="0.8" />
      <circle cx="90" cy="122" r="4" fill="white" opacity="0.7" />
      <circle cx="100" cy="128" r="5" fill="white" opacity="0.8" />
      <ellipse cx="110" cy="130" rx="8" ry="4" fill="white" opacity="0.6" />
      {/* Accent wave */}
      <path
        d="M150 155 Q170 140, 190 155 Q210 170, 230 155"
        fill="none"
        stroke="#BF8351"
        strokeWidth="3"
        opacity="0.5"
      />
    </svg>
  );
}

export function OceanBubbles({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="30"
        cy="70"
        r="8"
        fill="#ABCEE2"
        opacity="0.4"
        animate={{ y: [-20, 0, -20], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="6"
        fill="#7DB1D4"
        opacity="0.5"
        animate={{ y: [-15, 0, -15], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.circle
        cx="70"
        cy="60"
        r="10"
        fill="#D5E7F2"
        opacity="0.3"
        animate={{ y: [-25, 0, -25], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </svg>
  );
}
