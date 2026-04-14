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

export function ChatGptLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.2C13.8 3.2 16.1 3.8 17.1 5.6C18.7 5.7 20 7 20 8.7C20 9.4 19.8 10 19.4 10.6C20.2 12.4 19.5 14.6 17.8 15.7C17.7 17.8 16 19.4 13.9 19.4C13.2 19.4 12.6 19.2 12 18.9C11.4 19.2 10.8 19.4 10.1 19.4C8 19.4 6.3 17.8 6.2 15.7C4.5 14.6 3.8 12.4 4.6 10.6C4.2 10 4 9.4 4 8.7C4 7 5.3 5.7 6.9 5.6C7.9 3.8 10.2 3.2 12 4.2Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8.2 7.4L12 9.6M15.8 7.4L12 9.6M12 9.6V14.4M8.2 16.6L12 14.4M15.8 16.6L12 14.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ClaudeLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9 6.1C14.9 4.9 13.4 4.2 11.8 4.2C8.8 4.2 6.4 6.6 6.4 9.6C6.4 12.6 8.8 15 11.8 15H14.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M17.6 4.6V19.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function GeminiLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L13.7 8.3L19 10L13.7 11.7L12 17L10.3 11.7L5 10L10.3 8.3L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M17.8 15.8L18.4 18L20.6 18.6L18.4 19.2L17.8 21.4L17.2 19.2L15 18.6L17.2 18L17.8 15.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

export function PerplexityLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18V6H11.8C14.9 6 17 8 17 11C17 14 14.9 16 11.8 16H9.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8 3.8L19.2 7.2M19.2 3.8L15.8 7.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function CopilotLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.8 18.2C5.9 18.2 4.4 16.7 4.4 14.8C4.4 13.3 5.4 12 6.7 11.6C7.2 8.9 9.4 7 12.2 7C15.4 7 18 9.6 18 12.8V14.8C18 16.7 16.5 18.2 14.6 18.2H7.8Z" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="9.4" cy="13" r="0.9" fill="currentColor"/>
      <circle cx="13.2" cy="13" r="0.9" fill="currentColor"/>
      <path d="M9.4 15.4C10.3 16 12.1 16 13.2 15.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

export function HtmlLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4L6.4 19L12 20.7L17.6 19L19 4H5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M8.2 8.6L6.8 12L8.2 15.4M15.8 8.6L17.2 12L15.8 15.4M10.4 16.2L13.6 7.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CssLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4L6.4 19L12 20.7L17.6 19L19 4H5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9 8.5H15.2M8.6 12H14.4M8.8 15.5H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function JavascriptLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M10 9V14.8C10 16.2 9.3 17 8 17M12.5 14.8C13 15.6 13.9 16 15 16C16.1 16 16.8 15.5 16.8 14.7C16.8 13.9 16.1 13.6 14.9 13.2C13.5 12.7 12.8 12 12.8 10.9C12.8 9.7 13.8 8.9 15.1 8.9C16.1 8.9 16.9 9.3 17.4 10.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function P5LogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M9 16V8.5H12.1C13.8 8.5 14.9 9.4 14.9 11.1C14.9 12.8 13.8 13.7 12.1 13.7H10.6M15.9 16H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PythonLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.5H9.4C7.4 4.5 6.2 5.6 6.2 7.6V10.4H12M12 19.5H14.6C16.6 19.5 17.8 18.4 17.8 16.4V13.6H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 10.4H7.1C5.4 10.4 4 11.8 4 13.5C4 15.2 5.4 16.6 7.1 16.6H12M12 13.6H16.9C18.6 13.6 20 12.2 20 10.5C20 8.8 18.6 7.4 16.9 7.4H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9.2" cy="7.4" r="0.9" fill="currentColor"/>
      <circle cx="14.8" cy="16.6" r="0.9" fill="currentColor"/>
    </svg>
  );
}

export function GithubLogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4C7.6 4 4 7.6 4 12C4 15.5 6.3 18.6 9.4 19.6V17.5C7 18 6.6 16.3 6.6 16.3C6.2 15.2 5.5 14.8 5.5 14.8C4.6 14.2 5.6 14.2 5.6 14.2C6.6 14.3 7.1 15.2 7.1 15.2C7.9 16.5 9.2 16.1 9.5 16C9.6 15.4 9.8 15 10.1 14.8C8 14.6 5.8 13.8 5.8 10.1C5.8 9 6.2 8.2 6.8 7.6C6.7 7.3 6.5 6.3 6.9 5C6.9 5 7.7 4.8 9.4 5.9C10.2 5.7 11.1 5.6 12 5.6C12.9 5.6 13.8 5.7 14.6 5.9C16.3 4.8 17.1 5 17.1 5C17.5 6.3 17.3 7.3 17.2 7.6C17.8 8.2 18.2 9 18.2 10.1C18.2 13.8 16 14.6 13.9 14.8C14.2 15.1 14.5 15.7 14.5 16.5V19.6C17.7 18.6 20 15.5 20 12C20 7.6 16.4 4 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
