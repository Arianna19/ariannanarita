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
