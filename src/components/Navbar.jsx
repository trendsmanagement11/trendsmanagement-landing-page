import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll listener to toggle solid glass background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Segments", path: "/Segments" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md py-3.5 shadow-xs border-b border-stone-200/50' 
          : 'bg-white/80 backdrop-blur-xs py-5 border-b border-stone-200/20'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            
            {/* Custom Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <img 
                src={`${import.meta.env.BASE_URL}tm logo.png`} 
                alt="Trends Management Logo" 
                className="w-9 h-9 object-contain group-hover:scale-103 transition-transform duration-300" 
              />
              <div className="flex flex-col">
                <span className="font-playfair text-base md:text-lg font-bold tracking-[0.2em] text-stone-900 group-hover:text-festival-orange transition-colors uppercase leading-none">
                  Trends Management
                </span>
                <span className="text-[8px] md:text-[9px] text-festival-orange font-bold uppercase tracking-[0.3em] mt-1 leading-none">
                  Event Planners
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.path}
                  className={({ isActive }) => 
                    `text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-[#b89047] focus:outline-none relative py-1 ${
                      isActive 
                        ? 'text-stone-950 font-bold border-b border-stone-950 pb-0.5' 
                        : 'text-stone-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <a 
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-stone-600 hover:text-stone-950 transition-colors focus:outline-none"
              >
                <Phone size={12} className="text-[#b89047]" />
                {companyInfo.phoneDisplay}
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border border-stone-900 rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border border-stone-900 rounded-full px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                Quote
              </Link>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Slide In Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-white py-6 px-6 shadow-xl flex flex-col gap-6 border-t border-stone-200 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.path}
                  className={({ isActive }) => 
                    `text-[11px] font-bold uppercase tracking-[0.2em] py-3 px-4 rounded-xl block transition-all ${
                      isActive 
                        ? 'text-stone-950 bg-stone-50/80 font-bold border-l-2 border-stone-950' 
                        : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            
            <div className="pt-5 border-t border-stone-200/80 flex flex-col gap-4">
              <a 
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center gap-2 bg-stone-50 border border-stone-200/60 text-[10px] font-bold uppercase tracking-wider text-stone-700 hover:text-stone-950 hover:bg-stone-100/50 transition-all py-3.5 rounded-2xl"
              >
                <Phone size={13} className="text-[#b89047]" />
                Call: {companyInfo.phoneDisplay}
              </a>
              <Link 
                to="/contact" 
                className="btn-primary text-center text-[10px] py-4 rounded-2xl shadow-xs"
              >
                Get A Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
