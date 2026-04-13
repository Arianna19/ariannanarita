export function DesignIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="60" height="60" rx="8" stroke="#ABCEE2" strokeWidth="4" fill="none"/>
      <circle cx="35" cy="35" r="8" fill="#BF8351"/>
      <circle cx="65" cy="35" r="8" fill="#ABCEE2"/>
      <circle cx="50" cy="65" r="8" fill="#7DB1D4"/>
      <line x1="35" y1="35" x2="50" y2="65" stroke="#BF8351" strokeWidth="3"/>
      <line x1="65" y1="35" x2="50" y2="65" stroke="#ABCEE2" strokeWidth="3"/>
    </svg>
  );
}

export function BrandingIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="#D5E7F2" stroke="#ABCEE2" strokeWidth="3"/>
      <circle cx="50" cy="50" r="15" fill="#BF8351"/>
      <circle cx="50" cy="50" r="8" fill="white"/>
    </svg>
  );
}

export function CodeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 35 L15 50 L30 65" stroke="#ABCEE2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M70 35 L85 50 L70 65" stroke="#ABCEE2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="55" y1="25" x2="45" y2="75" stroke="#BF8351" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

export function PrototypeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="30" height="45" rx="4" stroke="#ABCEE2" strokeWidth="3" fill="none"/>
      <rect x="45" y="40" width="30" height="45" rx="4" stroke="#BF8351" strokeWidth="3" fill="white"/>
      <line x1="55" y1="50" x2="65" y2="50" stroke="#BF8351" strokeWidth="2"/>
      <line x1="55" y1="58" x2="65" y2="58" stroke="#BF8351" strokeWidth="2"/>
      <line x1="55" y1="66" x2="65" y2="66" stroke="#BF8351" strokeWidth="2"/>
    </svg>
  );
}

export function UserIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="18" fill="#D5E7F2" stroke="#ABCEE2" strokeWidth="3"/>
      <path d="M25 85 C25 65 35 55 50 55 C65 55 75 65 75 85" fill="#E6C4A8" stroke="#BF8351" strokeWidth="3"/>
    </svg>
  );
}

export function LightbulbIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="45" r="20" fill="#D5E7F2" stroke="#ABCEE2" strokeWidth="3"/>
      <rect x="42" y="65" width="16" height="12" rx="2" fill="#BF8351"/>
      <line x1="50" y1="15" x2="50" y2="5" stroke="#ABCEE2" strokeWidth="3" strokeLinecap="round"/>
      <line x1="25" y1="25" x2="18" y2="18" stroke="#ABCEE2" strokeWidth="3" strokeLinecap="round"/>
      <line x1="75" y1="25" x2="82" y2="18" stroke="#ABCEE2" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function StarIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" fill="#ABCEE2"/>
    </svg>
  );
}

export function CircleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#BF8351"/>
      <circle cx="50" cy="50" r="20" fill="white"/>
    </svg>
  );
}

export function SeigaihaIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 70C8 52.327 22.327 38 40 38C57.673 38 72 52.327 72 70" stroke="#7DB1D4" strokeWidth="6" strokeLinecap="round"/>
      <path d="M24 70C24 61.163 31.163 54 40 54C48.837 54 56 61.163 56 70" stroke="#ABCEE2" strokeWidth="6" strokeLinecap="round"/>
      <path d="M40 70C40 65.582 43.582 62 48 62C52.418 62 56 65.582 56 70" stroke="#BF8351" strokeWidth="6" strokeLinecap="round"/>
      <path d="M28 42C28 24.327 42.327 10 60 10C77.673 10 92 24.327 92 42" stroke="#7DB1D4" strokeWidth="6" strokeLinecap="round"/>
      <path d="M44 42C44 33.163 51.163 26 60 26C68.837 26 76 33.163 76 42" stroke="#ABCEE2" strokeWidth="6" strokeLinecap="round"/>
      <path d="M60 42C60 37.582 63.582 34 68 34C72.418 34 76 37.582 76 42" stroke="#BF8351" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="18" cy="24" r="4" fill="#BF8351"/>
      <circle cx="82" cy="76" r="4" fill="#ABCEE2"/>
    </svg>
  );
}

export function FlavorBridgeLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="120" r="78" fill="#C8DDBD" />
      <rect x="54" y="110" width="132" height="18" rx="9" fill="#A8A70C" />
      <circle cx="38" cy="112" r="24" fill="#FFC126" />
      <path d="M20 138L74 92" stroke="#B90D37" strokeWidth="12" strokeLinecap="round" />
      <path d="M28 144L82 98" stroke="#B90D37" strokeWidth="12" strokeLinecap="round" />
      <path d="M38 142L44 136" stroke="#FFC126" strokeWidth="6" strokeLinecap="round" />
      <path d="M70 114L76 108" stroke="#FFC126" strokeWidth="6" strokeLinecap="round" />
      <path d="M92 45C92 36.163 99.163 29 108 29H132C140.837 29 148 36.163 148 45V78C148 86.837 140.837 94 132 94H108C99.163 94 92 86.837 92 78V45Z" fill="#FFFFFF" />
      <rect x="92" y="34" width="56" height="10" rx="5" fill="#B90D37" />
      <rect x="87" y="22" width="66" height="8" rx="4" transform="rotate(-10 87 22)" fill="#B90D37" />
      <rect x="109" y="12" width="22" height="10" rx="5" fill="#FFC126" />
      <rect x="87" y="57" width="14" height="8" rx="4" transform="rotate(-38 87 57)" fill="#FFC126" />
      <rect x="139" y="57" width="14" height="8" rx="4" transform="rotate(38 139 57)" fill="#FFC126" />
      <path d="M178 92C178 74.327 192.327 60 210 60C227.673 60 242 74.327 242 92V105C242 109.418 238.418 113 234 113H186C181.582 113 178 109.418 178 105V92Z" transform="translate(-24 18)" fill="#B90D37" />
      <path d="M186 96C189 84 195 76 204 72" stroke="#FFC126" strokeWidth="4" strokeLinecap="round" transform="translate(-24 18)" />
      <rect x="170" y="118" width="72" height="4" rx="2" transform="translate(-6 22)" fill="#FFC126" />
      <path d="M78 177C78 159.327 92.327 145 110 145C118.397 145 126.05 148.235 131.8 153.525C137.55 148.235 145.203 145 153.6 145C171.273 145 185.6 159.327 185.6 177V184H78V177Z" fill="#B90D37" />
      <rect x="98" y="184" width="68" height="32" rx="6" fill="#B90D37" />
      <rect x="98" y="216" width="68" height="6" fill="#FFC126" />
      <rect x="118" y="162" width="8" height="24" rx="4" fill="#FFC126" />
      <rect x="130" y="162" width="8" height="24" rx="4" fill="#FFC126" />
      <rect x="142" y="162" width="8" height="24" rx="4" fill="#FFC126" />
    </svg>
  );
}
