import { HashRouter, Routes, Route, Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import ArtistStatementPage from './pages/ArtistStatementPage';
import BiographyPage from './pages/BiographyPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ScrollingOceanBackground from './components/ScrollingOceanBackground';
import RouteLoadingOverlay from './components/RouteLoadingOverlay';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp, Menu, Moon, SunMedium, X } from 'lucide-react';
import { SeigaihaIcon } from './components/Icons';

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
  const [iconTapped, setIconTapped] = useState(false);
  const [isWorkSectionActive, setIsWorkSectionActive] = useState(false);

  const handleHomeNavigation = () => {
    setIconTapped(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsWorkSectionActive(false);
      return;
    }

    const updateWorkSectionState = () => {
      const workSection = document.getElementById('work');
      if (!workSection) {
        setIsWorkSectionActive(false);
        return;
      }

      const rect = workSection.getBoundingClientRect();
      const probeLine = window.innerHeight * 0.35;
      setIsWorkSectionActive(rect.top <= probeLine && rect.bottom >= probeLine);
    };

    updateWorkSectionState();
    window.addEventListener('scroll', updateWorkSectionState, { passive: true });
    window.addEventListener('resize', updateWorkSectionState);

    return () => {
      window.removeEventListener('scroll', updateWorkSectionState);
      window.removeEventListener('resize', updateWorkSectionState);
    };
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', to: '/', match: location.pathname === '/' && !isWorkSectionActive },
    { label: 'Selected Work', to: '/#work', match: location.pathname.startsWith('/project/') || (location.pathname === '/' && isWorkSectionActive) },
    { label: 'Artist Statement', to: '/artist-statement', match: location.pathname === '/artist-statement' },
    { label: 'Biography', to: '/biography', match: location.pathname === '/biography' },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#D5E7F2] bg-white/92 shadow-sm backdrop-blur-md dark:border-[#334155] dark:bg-[#0f172a]/92">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link
          to="/"
          onClick={handleHomeNavigation}
          className="inline-flex items-center gap-3 font-['Ojuju:Bold',sans-serif] text-2xl text-[#7DB1D4] transition-colors hover:text-[#5B8FA3]"
        >
          <motion.span
            animate={iconTapped ? { rotate: [0, -10, 14, 0], scale: [1, 0.92, 1.08, 1] } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            onAnimationComplete={() => setIconTapped(false)}
            className="inline-flex items-center justify-center text-[#7DB1D4]"
          >
            <SeigaihaIcon className="h-7 w-7" />
          </motion.span>
          Me, Arianna
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ABCEE2] bg-white/80 text-[#7DB1D4] transition-all hover:bg-[#D5E7F2] lg:hidden dark:border-[#475569] dark:bg-[#111827] dark:text-[#ABCEE2] dark:hover:bg-[#1e293b]"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className={`${menuOpen ? 'flex' : 'hidden'} order-4 w-full flex-col gap-3 border-t border-[#D5E7F2]/70 pt-4 lg:order-2 lg:flex lg:w-auto lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-4 lg:gap-y-2 lg:border-t-0 lg:pt-0 xl:justify-start dark:border-[#334155]/70`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={item.to === '/' ? handleHomeNavigation : undefined}
              className={`rounded-full border px-4 py-3 text-center font-['Poppins:Medium',sans-serif] text-sm tracking-[0.02em] transition-all lg:px-3 lg:py-2 lg:text-xs lg:sm:text-sm ${
                item.match
                  ? 'border-[#BF8351] bg-[#FFF8F3] text-[#BF8351] dark:bg-[#3f2d24] dark:text-[#E6C4A8]'
                  : 'border-transparent text-[#4A5565] hover:border-[#ABCEE2] hover:bg-[#F7FBFD] hover:text-[#7DB1D4] dark:text-[#CBD5E1] dark:hover:border-[#475569] dark:hover:bg-[#111827] dark:hover:text-[#ABCEE2]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="order-2 hidden items-center gap-2 lg:order-3 lg:flex lg:gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ABCEE2] bg-white/80 text-[#7DB1D4] transition-all hover:-translate-y-0.5 hover:bg-[#D5E7F2] hover:shadow-md dark:border-[#475569] dark:bg-[#111827] dark:text-[#ABCEE2] dark:hover:bg-[#1e293b]"
          >
            {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="inline-flex items-center justify-center rounded-full border-2 border-[#ABCEE2] px-3 py-2 text-center font-['Poppins:SemiBold',sans-serif] text-xs text-[#7DB1D4] transition-all hover:-translate-y-0.5 hover:bg-[#D5E7F2] hover:shadow-md sm:px-4 sm:text-sm md:px-6 dark:border-[#475569] dark:text-[#ABCEE2] dark:hover:bg-[#1e293b]"
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

        <div className={`${menuOpen ? 'flex' : 'hidden'} order-5 w-full flex-col gap-3 border-t border-[#D5E7F2]/70 pt-4 lg:hidden dark:border-[#334155]/70`}>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#ABCEE2] bg-white/80 px-4 py-3 font-['Poppins:SemiBold',sans-serif] text-sm text-[#7DB1D4] transition-all hover:bg-[#D5E7F2] dark:border-[#475569] dark:bg-[#111827] dark:text-[#ABCEE2] dark:hover:bg-[#1e293b]"
          >
            {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="inline-flex items-center justify-center rounded-full border-2 border-[#ABCEE2] px-4 py-3 text-center font-['Poppins:SemiBold',sans-serif] text-sm text-[#7DB1D4] transition-all hover:bg-[#D5E7F2] dark:border-[#475569] dark:text-[#ABCEE2] dark:hover:bg-[#1e293b]"
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

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-[65] inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-[#D5E7F2] bg-white/92 text-[#5B8FA3] shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:text-[#BF8351] md:bottom-8 md:right-8 ${
        isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#D5E7F2] bg-white/88 px-5 py-8 backdrop-blur-sm dark:border-[#334155] dark:bg-[#0b1220]/88 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-[#4A5565] dark:text-[#CBD5E1] md:flex-row md:items-center md:justify-between">
        <p className="font-['Poppins:Regular',sans-serif]">Copyright 2026 Arianna. Built to be clear and slightly powered by caffeine.</p>
        <p className="font-['Poppins:Regular',sans-serif]">Graphic Design, UI, UX</p>
      </div>
    </footer>
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

function AppShell() {
  const location = useLocation();
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [isRouteLoading, setIsRouteLoading] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    setIsRouteLoading(true);
    const timeoutId = window.setTimeout(() => {
      setIsRouteLoading(false);
    }, 420);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.hash]);

  return (
    <>
      <RouteLoadingOverlay active={isRouteLoading} pathname={location.pathname} />
      <div className="min-h-screen">
        <ScrollingOceanBackground />
        <Navigation
          theme={theme}
          onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
        />
        <AnimatedRoutes />
        <SiteFooter />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
