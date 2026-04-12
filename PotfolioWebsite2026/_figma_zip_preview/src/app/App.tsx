import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';
import HomePage from './pages/HomePage';
import ArtistStatementPage from './pages/ArtistStatementPage';
import BiographyPage from './pages/BiographyPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ScrollingOceanBackground from './components/ScrollingOceanBackground';
import { motion, AnimatePresence } from 'motion/react';

function Navigation() {
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#D5E7F2] shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" onClick={handleHomeClick} className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#ABCEE2] hover:text-[#7DB1D4] transition-colors">
          Designer Portfolio
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            onClick={handleHomeClick}
            className={`font-['Poppins:Regular',sans-serif] text-base transition-colors ${
              location.pathname === '/' ? 'text-[#BF8351]' : 'text-[#4A5565] hover:text-[#ABCEE2]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/artist-statement"
            className={`font-['Poppins:Regular',sans-serif] text-base transition-colors ${
              location.pathname === '/artist-statement' ? 'text-[#BF8351]' : 'text-[#4A5565] hover:text-[#ABCEE2]'
            }`}
          >
            Artist Statement
          </Link>
          <Link
            to="/biography"
            className={`font-['Poppins:Regular',sans-serif] text-base transition-colors ${
              location.pathname === '/biography' ? 'text-[#BF8351]' : 'text-[#4A5565] hover:text-[#ABCEE2]'
            }`}
          >
            Biography
          </Link>
          <a
            href="/cv.pdf"
            download
            className="font-['Poppins:SemiBold',sans-serif] text-base text-[#ABCEE2] border-2 border-[#ABCEE2] px-5 py-2 rounded-full hover:bg-[#ABCEE2] hover:text-white transition-colors"
          >
            Download CV
          </a>
          <Link
            to="/contact"
            className="font-['Poppins:SemiBold',sans-serif] text-base text-white bg-[#BF8351] px-6 py-2 rounded-full hover:bg-[#A66D42] transition-colors"
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
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <ScrollingOceanBackground />
        <Navigation />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
