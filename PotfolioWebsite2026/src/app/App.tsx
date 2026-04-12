import { HashRouter, Routes, Route, Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import ArtistStatementPage from './pages/ArtistStatementPage';
import BiographyPage from './pages/BiographyPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ScrollingOceanBackground from './components/ScrollingOceanBackground';
import { AnimatePresence } from 'motion/react';
import { Menu, Moon, SunMedium, X } from 'lucide-react';

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'portfolio-theme-mode';

function applyTheme(mode: ThemeMode) {
  document.documentElement.classList.toggle('dark', mode === 'dark');
}

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function Navigation({
  theme,
  onToggleTheme,
}: {
  theme: ThemeMode;
  onToggleTheme: () => void;
}) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: '/', match: location.pathname === '/' },
    { label: 'Selected Work', to: '/#work', match: location.pathname === '/' || location.pathname.startsWith('/project/') },
    { label: 'Artist Statement', to: '/artist-statement', match: location.pathname === '/artist-statement' },
    { label: 'Biography', to: '/biography', match: location.pathname === '/biography' },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#D5E7F2] bg-white/92 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link
          to="/"
          className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#7DB1D4] transition-colors hover:text-[#5B8FA3]"
        >
          Arianna
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ABCEE2] bg-white/80 text-[#7DB1D4] transition-all hover:bg-[#D5E7F2] md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className={`${menuOpen ? 'flex' : 'hidden'} order-4 w-full flex-col gap-3 border-t border-[#D5E7F2]/70 pt-4 md:order-2 md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-4 md:gap-y-2 md:border-t-0 md:pt-0 lg:justify-start`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`rounded-full border px-4 py-3 text-center font-['Poppins:Medium',sans-serif] text-sm tracking-[0.02em] transition-all md:px-3 md:py-2 md:text-xs md:sm:text-sm ${
                item.match
                  ? 'border-[#BF8351] bg-[#FFF8F3] text-[#BF8351]'
                  : 'border-transparent text-[#4A5565] hover:border-[#ABCEE2] hover:bg-[#F7FBFD] hover:text-[#7DB1D4]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="order-2 hidden items-center gap-2 md:order-3 md:flex md:gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ABCEE2] bg-white/80 text-[#7DB1D4] transition-all hover:-translate-y-0.5 hover:bg-[#D5E7F2] hover:shadow-md"
          >
            {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="inline-flex items-center justify-center rounded-full border-2 border-[#ABCEE2] px-3 py-2 text-center font-['Poppins:SemiBold',sans-serif] text-xs text-[#7DB1D4] transition-all hover:-translate-y-0.5 hover:bg-[#D5E7F2] hover:shadow-md sm:px-4 sm:text-sm md:px-6"
          >
            Download CV
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#BF8351] px-3 py-2 text-center font-['Poppins:SemiBold',sans-serif] text-xs text-white transition-all hover:-translate-y-0.5 hover:bg-[#A66D42] hover:shadow-md sm:px-4 sm:text-sm md:px-6"
          >
            Contact
          </Link>
        </div>

        <div className={`${menuOpen ? 'flex' : 'hidden'} order-5 w-full flex-col gap-3 border-t border-[#D5E7F2]/70 pt-4 md:hidden`}>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#ABCEE2] bg-white/80 px-4 py-3 font-['Poppins:SemiBold',sans-serif] text-sm text-[#7DB1D4] transition-all hover:bg-[#D5E7F2]"
          >
            {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="inline-flex items-center justify-center rounded-full border-2 border-[#ABCEE2] px-4 py-3 text-center font-['Poppins:SemiBold',sans-serif] text-sm text-[#7DB1D4] transition-all hover:bg-[#D5E7F2]"
          >
            Download CV
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#BF8351] px-4 py-3 text-center font-['Poppins:SemiBold',sans-serif] text-sm text-white transition-all hover:bg-[#A66D42]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/artist-statement" element={<ArtistStatementPage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <HashRouter>
      <div className="min-h-screen">
        <ScrollingOceanBackground />
        <Navigation
          theme={theme}
          onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
        />
        <AnimatedRoutes />
      </div>
    </HashRouter>
  );
}
