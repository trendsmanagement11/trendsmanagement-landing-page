import { motion } from 'framer-motion';
import { Star, ShieldCheck, MapPin, Quote } from 'lucide-react';

const FeedbackCard = ({ feedback }) => {
  // Generate star icons array
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, idx) => (
      <Star 
        key={idx} 
        size={11} 
        className={idx < rating ? "text-festival-orange fill-festival-orange" : "text-stone-200"} 
      />
    ));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white relative rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-stone-200/80 shadow-xs group transition-all duration-300"
    >
      {/* Decorative quotes icon */}
      <Quote className="absolute right-6 top-6 text-festival-orange/5 group-hover:text-festival-orange/10 w-12 h-12 transition-colors duration-350 pointer-events-none" />

      <div>
        {/* Rating & Verified Badge */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-full">
            {renderStars(feedback.rating)}
          </div>
          {feedback.verified && (
            <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full uppercase tracking-widest font-sans">
              <ShieldCheck size={10} className="stroke-2" />
              Verified Event
            </span>
          )}
        </div>

        {/* Testimonial Text */}
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed italic mb-6 font-playfair font-normal">
          "{feedback.text}"
        </p>
      </div>

      {/* Client Profile Details */}
      <div className="pt-4 border-t border-stone-200/60 flex items-center gap-3.5 mt-auto">
        <div className="w-11 h-11 rounded-full overflow-hidden border border-stone-200 shrink-0">
          <img 
            src={feedback.avatar} 
            alt={feedback.name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h4 className="text-sm font-playfair font-normal text-stone-900 tracking-tight group-hover:text-festival-orange transition-colors duration-300">
            {feedback.name}
          </h4>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-stone-500 font-sans mt-0.5">
            <span className="text-festival-orange font-bold uppercase tracking-wider">{feedback.eventType}</span>
            <span className="text-stone-300 font-extralight">/</span>
            <span className="flex items-center gap-0.5">
              <MapPin size={9} />
              {feedback.location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
