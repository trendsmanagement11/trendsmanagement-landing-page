import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { feedbackData } from '../data/feedbackData';
import FeedbackCard from '../components/FeedbackCard';
import { useSEO } from '../hooks/useSEO';

const Feedback = () => {
  useSEO({
    title: 'Verified Client Reviews & Testimonials | Trends Management',
    description: 'Read reviews and testimonials from our past couples, corporate groups, and clients. Discover why Trends Management is Nagpur\'s most trusted luxury event firm.',
    keywords: 'Client Testimonials Nagpur, Event Reviews Nagpur, Best Wedding Planner Reviews, Trends Management Reviews'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full pt-20 bg-[#fbfbfa]"
    >
      {/* HEADER HERO */}
      <section className="relative py-20 md:py-28 bg-[#f5f5f3] overflow-hidden border-b border-stone-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,144,71,0.04)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block mb-3">Client Gratitude</span>
          <h1 className="text-3xl md:text-6xl font-playfair font-normal leading-tight text-stone-900 mb-6">
            What Our <span className="text-festival-orange font-semibold italic">Clients Say</span>
          </h1>
          <p className="text-stone-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light font-sans">
            There is no greater honor than being trusted to coordinate lifetime memories. Read verified stories of celebration from Nagpur and premium destination venues.
          </p>
        </div>
      </section>

      {/* RATING BADGE STATS */}
      <section className="py-8 bg-white border-b border-stone-200/60">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 px-4 py-2 rounded-full">
              <span className="text-xl md:text-2xl font-playfair text-stone-900">4.9</span>
              <span className="text-stone-400 font-light text-sm">/ 5</span>
              <div className="flex items-center gap-0.5 ml-2">
                {Array.from({ length: 5 }, (_, idx) => (
                  <Star key={idx} size={12} className="text-festival-orange fill-festival-orange" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-stone-900 font-bold text-sm">Elite Industry Acclaim</h3>
              <p className="text-stone-500 text-xs font-light font-sans">Based on 120+ public platform reviews in Nagpur</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
            <ShieldCheck className="text-emerald-600 stroke-2" size={16} />
            <span className="text-emerald-800 font-bold text-[10px] uppercase tracking-wider">100% Verified Celebrations</span>
          </div>
        </div>
      </section>

      {/* FEEDBACK GRID */}
      <section className="py-20 bg-[#fbfbfa] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {feedbackData.map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#f5f5f3] border-t border-stone-200/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-festival-orange/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="inline-flex p-3.5 rounded-full bg-white border border-stone-200/80 text-festival-orange mb-6 shadow-xs">
            <Heart size={24} className="fill-festival-orange/10" />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-playfair font-normal text-stone-900 mb-6">
            Have We Planned Your <span className="text-festival-orange italic font-semibold">Dream Event</span>?
          </h2>
          
          <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-xl mx-auto mb-10 font-light font-sans">
            We thrive on the support of our incredible client families. If we recently managed your wedding or corporate event, we would love to hear your feedback and stories.
          </p>

          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white rounded-full px-9 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-850 hover:scale-102 transition-all cursor-pointer shadow-xs focus:outline-none"
            >
              Share Your Feedback
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Feedback;
