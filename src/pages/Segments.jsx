import { motion as motionFramer } from 'framer-motion';
import { ArrowRight, HelpCircle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SegmentsData } from '../data/SegmentsData';
import SegmentCard from '../components/SegmentCard';
import { companyInfo } from '../data/companyInfo';
import { useSEO } from '../hooks/useSEO';

const Segments = () => {
  useSEO({
    title: 'Luxury Event & Wedding Planning Segments | Trends Management',
    description: 'Explore the luxury planning Segments offered by Trends Management. We curate bespoke wedding themes, destination events, and grand corporate galas in Nagpur.',
    keywords: 'Destination Wedding Segment, Corporate Event Coordination, Wedding Planners Nagpur, Luxury Party Planners'
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  };

  return (
    <motionFramer.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full pt-20 bg-[#fbfbfa] text-stone-900 min-h-screen"
    >
      {/* HEADER HERO */}
      <section className="relative py-20 md:py-28 bg-[#f5f5f3] overflow-hidden border-b border-stone-200/60">
        {/* Subtle radial luxury glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,144,71,0.04)_0%,transparent_60%)] pointer-events-none" />
        
        <motionFramer.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10"
        >
          <motionFramer.span variants={itemFadeUp} className="text-festival-orange font-bold text-xs uppercase tracking-[0.25em] block mb-4">
            Our Offerings
          </motionFramer.span>
          <motionFramer.h1 variants={itemFadeUp} className="text-4xl md:text-7xl font-playfair font-normal leading-tight text-stone-900 mb-6">
            Bespoke <span className="text-festival-orange font-semibold italic">Planning & Execution</span>
          </motionFramer.h1>
          <motionFramer.p variants={itemFadeUp} className="text-stone-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light">
            From majestic beach sangeets and palace weddings to corporate summits and intimate milestone birthdays, we offer meticulous staging, seamless operations, and pristine designs.
          </motionFramer.p>
        </motionFramer.div>
      </section>

      {/* 7 Segments GRID */}
      <section className="py-20 bg-[#fbfbfa] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <motionFramer.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {SegmentsData.map((Segment, index) => {
              const isLast = index === SegmentsData.length - 1;
              return (
                <SegmentCard 
                  key={Segment.id} 
                  Segment={Segment} 
                  isFullWidth={isLast}
                  className={isLast ? "md:col-span-2 lg:col-span-3" : ""}
                />
              );
            })}
          </motionFramer.div>

        </div>
      </section>

      {/* CUSTOM INQUIRIES & CALLOUT SECTION */}
      <section className="py-24 bg-[#f5f5f3] border-t border-stone-200/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-festival-orange/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="inline-flex p-3.5 rounded-full bg-white border border-stone-200/80 text-festival-orange mb-6 shadow-xs">
            <HelpCircle size={24} />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-playfair font-normal leading-tight text-stone-900 mb-6">
            Have a <span className="text-festival-orange italic font-semibold">Custom Concept</span> or Unique Theme?
          </h2>
          
          <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
            Every celebration has a distinct story to tell. If you don't find a matching package above, our creative team will formulate a bespoke structural budget from scratch to match your exact goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-stone-900 text-white rounded-full px-9 py-4.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-850 hover:scale-102 transition-all cursor-pointer shadow-xs focus:outline-none"
            >
              Inquire Custom Details
              <ArrowRight size={14} />
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-stone-900 rounded-full px-9 py-4.5 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 focus:outline-none"
            >
              <PhoneCall size={13} className="text-[#b89047]" />
              Call Specialist: {companyInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </motionFramer.div>
  );
};

export default Segments;
