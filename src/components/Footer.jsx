import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Facebook, Instagram } from './SocialIcons';
import { companyInfo } from '../data/companyInfo';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f5f5f3] pt-24 pb-0 overflow-hidden border-t border-stone-200/80">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-mustard-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Section: Heading + Contact Pill */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
          <div>
            <h2 className="font-playfair font-normal text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-tight tracking-tight">
              Your premier <br />
              <span className="text-festival-orange font-semibold italic">event architects.</span>
            </h2>
            <p className="mt-4 text-stone-500 font-light text-sm max-w-sm">
              We orchestrate luxury weddings, heritage curations, and corporate retreats across Central India.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="self-start md:self-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-4 border border-stone-900 rounded-full px-10 py-5 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-all text-lg sm:text-xl group"
            >
              Get in Touch
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-white group-hover:bg-white group-hover:text-stone-900 transition-colors">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Middle Section: Links Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-t border-stone-200 pt-16">
          
          {/* Segments Column */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-6 font-sans">
              Segments
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-stone-600">
              <li>
                <Link to="/Segments" className="hover:text-mustard-gold hover:translate-x-1 transition-all duration-300 inline-block">Destination Weddings</Link>
              </li>
              <li>
                <Link to="/Segments" className="hover:text-mustard-gold hover:translate-x-1 transition-all duration-300 inline-block">Heritage & Royal Weddings</Link>
              </li>
              <li>
                <Link to="/Segments" className="hover:text-mustard-gold hover:translate-x-1 transition-all duration-300 inline-block">Corporate Galas & Summits</Link>
              </li>
              <li>
                <Link to="/Segments" className="hover:text-mustard-gold hover:translate-x-1 transition-all duration-300 inline-block">Private Luxury Celebrations</Link>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-6 font-sans">
              Explore
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-stone-600">
              <li>
                <Link to="/projects" className="hover:text-mustard-gold hover:translate-x-1 transition-all duration-300 inline-block">Our Projects</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-mustard-gold hover:translate-x-1 transition-all duration-300 inline-block">About Our Legacy</Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-mustard-gold hover:translate-x-1 transition-all duration-300 inline-block">Client Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-mustard-gold hover:translate-x-1 transition-all duration-300 inline-block">Contact Desk</Link>
              </li>
            </ul>
          </div>

          {/* Say Hello (Pill Badge Tags) Column */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-6 font-sans">
              Say Hello!
            </h4>
            <div className="flex flex-wrap gap-3 max-w-sm mb-6">
              <a
                href={companyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200/80 shadow-xs text-xs text-stone-700 hover:text-stone-950 hover:border-stone-400 transition-all hover:-translate-y-0.5 duration-300"
              >
                <Instagram size={14} className="text-pink-600" />
                <span>@trendsmanagement</span>
              </a>
              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200/80 shadow-xs text-xs text-stone-700 hover:text-stone-950 hover:border-stone-400 transition-all hover:-translate-y-0.5 duration-300"
              >
                <Facebook size={14} className="text-blue-600 fill-blue-600 stroke-none" />
                <span>@trendsmanagement</span>
              </a>
              <a
                href={companyInfo.socials.ownerInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200/80 shadow-xs text-xs text-stone-700 hover:text-stone-950 hover:border-stone-400 transition-all hover:-translate-y-0.5 duration-300"
              >
                <Instagram size={14} className="text-pink-600" />
                <span>Nikhil Karadbhajne</span>
              </a>
              <a
                href={`https://wa.me/${companyInfo.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200/80 shadow-xs text-xs text-stone-700 hover:text-stone-950 hover:border-stone-400 transition-all hover:-translate-y-0.5 duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{companyInfo.phoneDisplay}</span>
              </a>
            </div>
            
            <div className="text-xs text-stone-500 font-light font-sans max-w-xs mt-4">
              <span className="block font-bold uppercase tracking-[0.15em] text-[9px] mb-1.5 text-stone-400">Nagpur Office</span>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 leading-relaxed font-normal hover:text-mustard-gold hover:underline transition-colors duration-300 block"
              >
                {companyInfo.address}
              </a>
            </div>
          </div>
        </div>

        {/* Info & Legal Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-stone-200/80 py-8 text-xs font-light text-stone-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
            <span>© {currentYear} Trends Management. All rights reserved.</span>
            <span className="hidden sm:inline text-stone-300">|</span>
            <span>Established in {companyInfo.established}</span>
          </div>
        </div>

      </div>

      {/* Massive cut-off text layout graphic */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none h-[150px] sm:h-[180px] md:h-[260px] lg:h-[300px] flex items-end justify-center">
        <h1 className="text-[7.5rem] sm:text-[13rem] md:text-[19rem] lg:text-[23rem] font-bold font-playfair tracking-tighter leading-[0.9] transform translate-y-[10%] bg-linear-to-r from-stone-800 via-[#b89047] to-stone-800 text-transparent bg-clip-text animate-text-gradient">
          TRENDS
        </h1>
        {/* Bottom Half Blur & Fade Overlay */}
        {/* <div className="absolute bottom-0 left-0 w-full h-[50%] bg-linear-to-t from-[#f5f5f3] via-[#f5f5f3]/40 to-transparent backdrop-blur-[3px]" /> */}
      </div>
    </footer>
  );
};

export default Footer;
