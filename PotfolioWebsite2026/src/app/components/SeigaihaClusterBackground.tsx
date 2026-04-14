const buildSeigaihaCluster = (strokeColor: string, variant: 'wide' | 'compact' | 'split') =>
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="220" viewBox="0 0 640 220" fill="none">
      <g stroke="${strokeColor}" stroke-width="7" fill="none" stroke-linecap="round" opacity="1">
        ${(variant === 'wide'
          ? [
              [164, 58],
              [112, 94],
              [164, 94],
              [216, 94],
              [86, 130],
              [138, 130],
              [190, 130],
              [242, 130],
              [430, 94],
              [482, 94],
              [534, 94],
            ]
          : variant === 'compact'
            ? [
                [176, 66],
                [136, 96],
                [176, 96],
                [216, 96],
                [96, 126],
                [136, 126],
                [176, 126],
                [216, 126],
                [256, 126],
              ]
            : [
                [146, 74],
                [102, 108],
                [146, 108],
                [190, 108],
                [420, 90],
                [376, 124],
                [420, 124],
                [464, 124],
              ]).map(([x, y]) => `
          <path d="M${x - 30} ${y}a30 30 0 0 1 60 0" />
          <path d="M${x - 20} ${y}a20 20 0 0 1 40 0" />
          <path d="M${x - 10} ${y}a10 10 0 0 1 20 0" />
        `).join('')}
      </g>
    </svg>
  `);

const lightSeigaihaSvgs = [
  buildSeigaihaCluster('#7DB1D4', 'wide'),
  buildSeigaihaCluster('#5B8FA3', 'compact'),
  buildSeigaihaCluster('#ABCEE2', 'split'),
];

const darkSeigaihaSvgs = [
  buildSeigaihaCluster('#ABCEE2', 'wide'),
  buildSeigaihaCluster('#7DB1D4', 'compact'),
  buildSeigaihaCluster('#D5E7F2', 'split'),
];

const patternPlacements = [
  { top: '3%', left: '4%', width: '18rem', height: '5rem', opacity: 0.16, variant: 0 },
  { top: '10%', right: '6%', width: '16rem', height: '4.5rem', opacity: 0.13, variant: 2 },
  { top: '18%', left: '16%', width: '17rem', height: '5rem', opacity: 0.15, variant: 1 },
  { top: '26%', right: '12%', width: '18rem', height: '5rem', opacity: 0.14, variant: 0 },
  { top: '34%', left: '8%', width: '16rem', height: '4.5rem', opacity: 0.13, variant: 2 },
  { top: '42%', right: '20%', width: '17rem', height: '5rem', opacity: 0.15, variant: 1 },
  { top: '50%', left: '24%', width: '18rem', height: '5rem', opacity: 0.14, variant: 0 },
  { top: '58%', right: '8%', width: '16rem', height: '4.5rem', opacity: 0.13, variant: 2 },
  { top: '66%', left: '12%', width: '17rem', height: '5rem', opacity: 0.15, variant: 1 },
  { top: '74%', right: '18%', width: '18rem', height: '5rem', opacity: 0.14, variant: 0 },
  { top: '82%', left: '28%', width: '16rem', height: '4.5rem', opacity: 0.13, variant: 2 },
  { top: '90%', right: '10%', width: '17rem', height: '5rem', opacity: 0.15, variant: 1 },
  { top: '96%', left: '18%', width: '18rem', height: '5rem', opacity: 0.14, variant: 0 },
] as const;

export default function SeigaihaClusterBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Shared placements keep the background rhythm identical across long-form pages. */}
      {patternPlacements.map((placement, index) => (
        <div
          key={`light-cloud-${index}`}
          className="absolute dark:hidden"
          style={{
            top: placement.top,
            left: 'left' in placement ? placement.left : undefined,
            right: 'right' in placement ? placement.right : undefined,
            width: `clamp(12rem, 28vw, ${placement.width})`,
            height: `clamp(3.5rem, 7vw, ${placement.height})`,
          }}
        >
          <div
            className="h-full w-full"
            style={{
              opacity: placement.opacity,
              backgroundImage: `url("data:image/svg+xml,${lightSeigaihaSvgs[placement.variant]}")`,
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      ))}

      {patternPlacements.map((placement, index) => (
        <div
          key={`dark-cloud-${index}`}
          className="absolute hidden dark:block"
          style={{
            top: placement.top,
            left: 'left' in placement ? placement.left : undefined,
            right: 'right' in placement ? placement.right : undefined,
            width: `clamp(12rem, 28vw, ${placement.width})`,
            height: `clamp(3.5rem, 7vw, ${placement.height})`,
          }}
        >
          <div
            className="h-full w-full"
            style={{
              opacity: Math.max(0.1, placement.opacity - 0.02),
              backgroundImage: `url("data:image/svg+xml,${darkSeigaihaSvgs[placement.variant]}")`,
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      ))}
    </div>
  );
}
