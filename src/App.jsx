import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages - Lazy Loaded
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Segments = lazy(() => import('./pages/Segments'));
const Projects = lazy(() => import('./pages/Projects'));
const Team = lazy(() => import('./pages/Team'));
const Feedback = lazy(() => import('./pages/Feedback'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';

// Scroll to top utility to reset scroll coordinates on page routing
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Instant scroll reset for seamless transitions
    });
  }, [pathname]);

  return null;
};

// Sub-component wrapper to leverage Router hooks and AnimatePresence path keys
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div className="min-h-[60vh] bg-[#fbfbfa] flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-stone-200 border-t-mustard-gold animate-spin" />
          <span className="text-mustard-gold font-playfair tracking-[0.25em] text-xs uppercase animate-pulse">
            Loading Curations...
          </span>
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Segments" element={<Segments />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen bg-light-gray text-dark-text selection:bg-gold-500 selection:text-white">
        {/* Reset scroll on route changes */}
        <ScrollToTop />
        <CustomCursor />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area containing routed pages */}
        <main className="grow">
          <AnimatedRoutes />
        </main>

        {/* Global Footer panel */}
        <Footer />

        {/* Floating Quick Action Contact Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
