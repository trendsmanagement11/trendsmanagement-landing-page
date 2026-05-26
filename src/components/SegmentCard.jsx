import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const SegmentCard = ({ Segment, className = '', isFullWidth = false }) => {
  // Dynamically resolve the icon from Lucide React
  const IconComponent = Icons[Segment.icon] || Icons.Sparkles;

  // Stagger variants for the container reveal
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-400 bg-white border ${
        Segment.badge 
          ? 'border-[#b89047]/40 shadow-xs' 
          : 'border-stone-200/80'
      } group hover:border-festival-orange/40 hover:shadow-md ${className} ${
        isFullWidth ? 'lg:flex-row lg:items-center lg:gap-8' : ''
      }`}
    >
      {/* Subtle Glow Effect on Hover */}
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-festival-orange/3 blur-3xl group-hover:bg-festival-orange/5 transition-all duration-500 pointer-events-none" />

      <div className={isFullWidth ? "lg:flex-1" : ""}>
        {/* Luxury Badge */}
        {Segment.badge && (
          <span className="absolute top-6 right-6 inline-flex items-center gap-1 rounded-full bg-[#fdfbf7] px-3.5 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#b89047] border border-[#b89047]/20 shadow-xs">
            <Icons.Star size={9} className="fill-[#b89047] text-[#b89047]" />
            {Segment.badge}
          </span>
        )}

        {/* Icon & Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-stone-50 text-festival-orange border border-stone-200/60">
            <IconComponent size={22} className="stroke-[1.5]" />
          </div>
          <h3 className="text-xl md:text-2xl font-playfair font-normal leading-tight text-stone-900 group-hover:text-festival-orange transition-colors duration-400 italic">
            {Segment.title}
          </h3>
        </div>

        {/* Description */}
        <p className={`text-stone-500 text-xs md:text-sm font-light leading-relaxed mb-6 ${isFullWidth ? 'lg:max-w-2xl' : ''}`}>
          {Segment.description}
        </p>

        {/* Detailed Points */}
        <ul className={`space-y-2.5 mb-8 ${isFullWidth ? 'lg:grid lg:grid-cols-2 lg:gap-x-4 lg:mb-0 lg:max-w-2xl' : ''}`}>
          {Segment.details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-stone-500 font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-festival-orange/30" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button - Discuss Collaboration */}
      <div className={`pt-6 border-t border-stone-100 flex items-center justify-between gap-4 mt-auto ${
        isFullWidth ? 'lg:pt-0 lg:border-t-0 lg:border-l lg:border-stone-200/60 lg:pl-8 lg:mt-0 lg:w-1/4 lg:shrink-0' : ''
      }`}>
        <Link 
          to="/contact" 
          state={{ selectedEvent: Segment.title }}
          className="w-full inline-flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-stone-600 group-hover:text-stone-900 bg-stone-50 group-hover:bg-white border border-stone-200/80 group-hover:border-stone-900 px-5 py-3.5 rounded-xl transition-all duration-400 focus:outline-none"
        >
          <span>Discuss Collaboration</span>
          <Icons.ArrowRight size={13} className="text-festival-orange group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export default SegmentCard;
