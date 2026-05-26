import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const NotFound = () => {
  useSEO({
    title: 'Page Not Found | Trends Management',
    description: 'The page you are looking for is currently uncurated. Return to our homepage to explore luxury destination weddings, heritage curations, and corporate retreats.',
    keywords: '404 page, page not found, Trends Management'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full min-h-screen bg-[#fbfbfa] text-stone-900 flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(184,144,71,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-mustard-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-festival-orange/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        
        {/* Large 404 Header */}
        <motion.div variants={itemFadeUp} className="relative select-none pointer-events-none mb-4">
          <h1 className="text-[9.5rem] sm:text-[13rem] font-bold font-playfair tracking-tighter leading-none bg-linear-to-r from-stone-850 via-[#b89047] to-stone-850 text-transparent bg-clip-text animate-text-gradient">
            404
          </h1>
        </motion.div>

        {/* Subtitles & Text */}
        <motion.div variants={itemFadeUp} className="flex flex-col items-center">
          <span className="text-festival-orange font-bold text-xs uppercase tracking-[0.25em] block mb-4">
            Moment Out of Bounds
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-normal leading-tight text-stone-900 mb-6">
            Lost in the <span className="text-festival-orange font-semibold italic">Details?</span>
          </h2>
          <p className="text-stone-500 text-sm sm:text-base font-light leading-relaxed max-w-md mb-10 font-sans">
            The page you are looking for doesn't exist, has been moved, or is undergoing a custom curation by our event curators. Let's redirect you back to planning.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemFadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 text-white rounded-full px-8 py-4.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-800 hover:scale-102 transition-all cursor-pointer shadow-xs focus:outline-none"
          >
            Return to Homepage
            <ArrowRight size={13} />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-stone-900 rounded-full px-8 py-4.5 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 focus:outline-none"
          >
            <HelpCircle size={13} className="text-[#b89047]" />
            Contact Desk
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default NotFound;
