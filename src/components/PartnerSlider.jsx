import { motion } from 'framer-motion';
import { ShieldCheck, Star } from 'lucide-react';

import arvaLogo from '../assets/Partnerlogo/ARVA logo.avif';
import chattarpurLogo from '../assets/Partnerlogo/Chattarpur Farms.png';
import radissonLogo from '../assets/Partnerlogo/Radissan.svg';
import centerpointLogo from '../assets/Partnerlogo/centerpoing-logo.png';
import edenGreenzLogo from '../assets/Partnerlogo/eden greenz.avif';
import leMeridienLogo from '../assets/Partnerlogo/le-Meridien.avif';

const PartnerSlider = () => {
  const partners = [
    { name: "Radisson Blu", logo: radissonLogo },
    { name: "Le Meridien", logo: leMeridienLogo },
    { name: "Center Point", logo: centerpointLogo },
    { name: "Chattarpur Farms", logo: chattarpurLogo },
    { name: "Eden Greenz", logo: edenGreenzLogo },
    { name: "ARVA", logo: arvaLogo },
  ];

  // Double the array to ensure seamless infinite looping scroll
  const doublePartners = [...partners, ...partners, ...partners]; // Tripled to ensure smooth scrolling with fewer items

  return (
    <div className="w-full bg-stone-50 py-12 md:py-16 border-t border-b border-stone-200/80 overflow-hidden relative">
      {/* Visual gradients on sides to fade elements */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-linear-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-linear-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <span className="inline-flex items-center gap-1.5 text-mustard-gold font-bold text-[10px] md:text-xs uppercase tracking-widest bg-white border border-stone-200/80 px-4 py-1.5 rounded-full shadow-xs">
          <Star size={12} className="fill-mustard-gold text-mustard-gold" />
          Elite Venue & Directory Partners
        </span>
      </div>

      {/* Looping Marquee container */}
      <div className="flex w-full overflow-x-visible overflow-y-visible py-8">
        <motion.div
          animate={{ x: [0, -1600] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 35
          }}
          className="flex gap-6 md:gap-10 shrink-0 pr-6 items-center"
        >
          {doublePartners.map((partner, idx) => (
            <div
              key={idx}
              className="relative flex items-center justify-center p-6 rounded-2xl bg-white border border-stone-200/80 w-[160px] md:w-[220px] h-[100px] md:h-[130px] shrink-0 shadow-xs transition-all duration-500 hover:bg-stone-50 hover:border-mustard-gold/40 hover:-translate-y-1 hover:shadow-md group cursor-pointer"
            >
              {/* Custom Tooltip */}
              {/* Custom Tooltip */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 flex flex-col items-center translate-y-2 group-hover:translate-y-0 visible">
                <span className="bg-deep-teal text-[#b89047] border border-[#b89047]/30 text-[10px] md:text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap font-bold font-sans">
                  {partner.name}
                </span>
                <div className="w-2 h-2 bg-deep-teal border-b border-r border-[#b89047]/30 rotate-45 -mt-1.5" />
              </div>

              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-w-full max-h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerSlider;
