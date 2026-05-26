import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Instagram } from './SocialIcons';

const TeamCard = ({ member }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-2xl bg-stone-50 aspect-3/4 shadow-xs transition-all duration-500 border ${
        member.isFounder 
          ? 'border-festival-orange/30 shadow-festival-orange/5' 
          : 'border-stone-200 shadow-stone-200/10'
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" 
        />
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 transition-opacity duration-500 bg-linear-to-t from-stone-950 via-stone-950/60 to-transparent group-hover:via-stone-950/70" />
      </div>

      {/* Founder Badge */}
      {member.isFounder && (
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fdfbf7] border border-[#b89047]/30 px-3.5 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#b89047] backdrop-blur-xs">
            <Award size={10} className="text-[#b89047]" />
            Founder
          </span>
        </div>
      )}

      {/* Info Container on Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col z-20">
        
        <h3 className="text-xl md:text-2xl font-playfair font-normal mb-1 leading-tight transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out text-white group-hover:text-festival-orange italic">
          {member.name}
        </h3>
        
        <span className="text-[10px] font-bold uppercase tracking-widest mb-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out text-festival-orange">
          {member.role}
        </span>

        {/* Revealable Bio & Socials */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="overflow-hidden">
            {/* Founder Quote */}
            {member.quote && (
              <p className="text-stone-200 font-playfair italic text-xs border-l border-festival-orange/55 pl-3 my-3">
                "{member.quote}"
              </p>
            )}

            <p className="text-white/80 text-xs font-light leading-relaxed mb-5 pt-2 font-sans">
              {member.bio}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {member.socials.instagram && (
                <a 
                  href={member.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-white/10 text-white/95 hover:bg-white hover:text-stone-900 border border-white/20 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Inner Border Glow Effect */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500 z-30 pointer-events-none" />
    </motion.div>
  );
};

export default TeamCard;
