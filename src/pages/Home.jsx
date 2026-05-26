import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  // Extract numerical value and suffix (e.g. "400+" -> 400 and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    if (start === end) return;

    // Animation duration is 2.0 seconds
    const totalDuration = 2000;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / totalDuration, 1);
      
      // Ease-out quad formula
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, ChevronLeft, ChevronRight, MapPin, Quote } from 'lucide-react';
import ownerImg from '../assets/teams-img/owner.jpeg';
import { companyInfo } from '../data/companyInfo';
import { SegmentsData } from '../data/SegmentsData';
import { feedbackData } from '../data/feedbackData';
import { portfolioData } from '../data/portfolioData';
import DestinationWeddingSection from '../components/DestinationWeddingSection';
import SegmentCard from '../components/SegmentCard';
import PartnerSlider from '../components/PartnerSlider';
import PortfolioItem from '../components/PortfolioItem';
import InstagramModal from '../components/InstagramModal';
import { useSEO } from '../hooks/useSEO';

const Home = () => {
  useSEO({
    title: 'Trends Management | Premium Event Planners & Destination Wedding Specialists in Nagpur',
    description: 'Trends Management is Nagpur\'s premier event planning company. Specializing in luxury weddings, grand destination weddings, and elite corporate curations.',
    keywords: 'Event Management Nagpur, Wedding Planners Nagpur, Destination Weddings, Trends Management, Nikhil Karadbhajne'
  });

  // Hero Carousel Slides Data
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=1920&h=1080",
      subtitle: "Exquisite Royal Palace Curation",
      title: "Bringing Your Grandest Vision to Life"
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920&h=1080",
      subtitle: "Sandy Beachfront Romance",
      title: "Timeless Destination Weddings"
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920&h=1080",
      subtitle: "High-End Corporate Retreats",
      title: "Flawless Elite Management"
    },
    {
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1920&h=1080",
      subtitle: "Luxurious Private Celebrations",
      title: "Curating Pure Magic in Nagpur"
    }
  ];

  // Hero carousel index state
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [selectedInstagramProject, setSelectedInstagramProject] = useState(null);
  


  // Auto-scroll hero slideshow every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Testimonial carousel state
  const homeTestimonials = feedbackData.slice(0, 3);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-scroll testimonials every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % homeTestimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [homeTestimonials.length]);

  const handlePrevTestimonial = () => {
    setCarouselIndex((prev) => (prev - 1 + homeTestimonials.length) % homeTestimonials.length);
  };

  const handleNextTestimonial = () => {
    setCarouselIndex((prev) => (prev + 1) % homeTestimonials.length);
  };
 
  // Stagger configurations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Select 4 Segment previews (Wedding, Destination, Corporate, Birthday)
  const previewSegmentsIds = [1, 2, 3, 4];
  const previewSegments = SegmentsData.filter(s => previewSegmentsIds.includes(s.id));



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full pt-20 bg-[#fbfbfa] text-stone-900 overflow-hidden"
    >
      {/* HERO SECTION WITH DYNAMIC CAROUSEL */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 md:py-24 bg-[#f5f5f3]">
        {/* Carousel Background Slide Wrapper */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.28, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={heroSlides[currentHeroSlide].image}
                alt={heroSlides[currentHeroSlide].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-linear-to-b from-[#f5f5f3]/90 via-transparent to-[#fbfbfa] z-0 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          
          {/* Animated Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200/80 bg-white/90 text-stone-800 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-xs backdrop-blur-xs"
          >
            <Sparkles size={11} className="text-festival-orange fill-festival-orange/20" />
            Nagpur's Elite Event Architects
          </motion.div>

          {/* Subtitle from Active Slide */}
          <div className="h-12 overflow-hidden mb-3">
            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${currentHeroSlide}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="font-cursive text-festival-orange text-2xl md:text-3xl"
              >
                {heroSlides[currentHeroSlide].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-playfair font-normal tracking-tight text-stone-900 mb-8 leading-tight max-w-5xl mx-auto"
          >
            Bringing Your <span className="text-festival-orange font-semibold italic">Vision to Life</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-stone-600 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Trends Management coordinates premium landmarks of celebration, luxury weddings, and bespoke corporate events across Nagpur and Central India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-stone-900 text-white rounded-full px-9 py-4.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-850 hover:scale-102 transition-all cursor-pointer shadow-xs"
            >
              Get a Free Quote
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-stone-900 rounded-full px-9 py-4.5 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust stats grid - Editorial Layout without bulky glassmorphism */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-5xl mx-auto border-y border-stone-200/80 py-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-stone-200/60">
              {companyInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center md:px-4">
                  <span className="text-3xl md:text-4xl font-playfair font-normal text-stone-900 tracking-tight mb-1">
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className="text-[9px] text-festival-orange font-bold uppercase tracking-[0.25em] text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* PARTNER LOOPS */}
      <PartnerSlider />

      {/* COMPANY OWNER SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200/60 group max-w-md mx-auto lg:mx-0">
                <img 
                  src={ownerImg} 
                  alt="Nikhil Karadbhajne" 
                  className="w-full h-auto aspect-3/4 object-cover object-top group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-950/80 to-transparent p-6 text-white pt-24">
                  <h3 className="text-xl font-playfair font-normal text-white">Nikhil Karadbhajne</h3>
                  <p className="text-[10px] font-bold text-festival-orange uppercase tracking-widest mt-1">Founder & Chief Event Curator</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full lg:w-1/2 flex flex-col gap-6"
            >
              <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block">Meet The Visionary</span>
              <h2 className="text-3xl md:text-5xl font-playfair font-normal text-stone-900 leading-tight">
                Crafting <span className="text-festival-orange font-semibold italic">Unforgettable Memories</span> Since 2014
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-sans">
                Starting as a trusted manpower partner for event organizations, Nikhil spent years contributing to successful events behind the scenes, gaining invaluable industry expertise and understanding the art of flawless execution. This journey laid the foundation for Trends Management.
              </p>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-sans">
                Today, Trends Management stands as an independent event agency crafting luxury weddings and distinguished corporate experiences driven by meticulous planning, creative excellence, and a commitment to creating unforgettable memories.
              </p>
              <div className="pt-6">
                <img src={`${import.meta.env.BASE_URL}tm logo.png`} alt="Trends Management" className="h-12 object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Segments PREVIEW */}
      <section className="py-24 bg-[#fbfbfa] relative border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block mb-3">Our Core Offerings</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-normal text-stone-900">
              Signature <span className="text-festival-orange font-semibold italic">Event Experiences</span>
            </h2>
            <p className="mt-4 text-stone-600 text-sm md:text-base font-light leading-relaxed">
              We design and coordinate full-spectrum events tailored precisely to your ambitions, combining flawless operational coordination with premium, jaw-dropping creative designs.
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
          >
            {previewSegments.map((Segment, idx) => (
              <SegmentCard key={Segment.id} Segment={Segment} index={idx} />
            ))}
          </motion.div>

          {/* Callout Link */}
          <div className="text-center">
            <Link
              to="/Segments"
              className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] border border-stone-900 rounded-full px-8 py-3.5 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              Browse All Segments
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT MASTERPIECES SHOWCASE */}
      <section className="py-24 bg-white border-t border-stone-200/60 relative">
        {/* Glow detail */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[250px] bg-mustard-gold/5 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block mb-3">Portfolio Highlights</span>
              <h2 className="text-3xl md:text-5xl font-playfair font-normal text-stone-900 leading-tight">
                Our Recent <span className="text-festival-orange font-semibold italic">Masterpieces</span>
              </h2>
              <p className="mt-4 text-stone-600 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Explore a curation of our real wedding showcases and landmarks of celebrations. Click on any card to view the live Instagram feed of the event.
              </p>
            </div>
            <div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] border border-stone-900 rounded-full px-8 py-3.5 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                View Full Gallery
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* 3-Column Grid for Home Page Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {portfolioData.slice(0, 3).map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full"
                >
                  <PortfolioItem 
                    item={item} 
                    aspectRatio="aspect-[4/5]" 
                    onInstagramClick={setSelectedInstagramProject}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESTINATION WEDDINGS HIGHLIGHT */}
      <DestinationWeddingSection />

      {/* FEEDBACK CAROUSEL (3 Testimonials) */}
      <section className="py-24 bg-[#fbfbfa] border-t border-stone-200/60 relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block mb-3">Client Gratitude</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-normal text-stone-900">
              Acclaim From <span className="text-festival-orange font-semibold italic">Our Families</span>
            </h2>
          </div>

          {/* Testimonial Active Display */}
          <div className="relative bg-white border border-stone-200/60 rounded-3xl p-8 md:p-14 mb-8 overflow-hidden min-h-[300px] flex items-center justify-center shadow-xs">
            
            {/* Background Big Quotes Icon */}
            <Quote className="absolute right-12 top-10 text-stone-100 w-32 h-32 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center w-full"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 bg-stone-50 border border-stone-200/60 px-3 py-1.5 rounded-full mb-6">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <Star 
                      key={idx} 
                      size={12} 
                      className={idx < homeTestimonials[carouselIndex].rating ? "text-festival-orange fill-festival-orange" : "text-stone-200"} 
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-stone-850 text-base md:text-xl font-playfair italic leading-relaxed mb-8 max-w-3xl font-light">
                  "{homeTestimonials[carouselIndex].text}"
                </p>

                {/* Profile detail */}
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-200 shadow-inner">
                    <img 
                      src={homeTestimonials[carouselIndex].avatar} 
                      alt={homeTestimonials[carouselIndex].name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 tracking-tight uppercase">
                      {homeTestimonials[carouselIndex].name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-stone-500 font-light mt-0.5">
                      <span className="text-festival-orange font-semibold">{homeTestimonials[carouselIndex].eventType}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5">
                        <MapPin size={10} />
                        {homeTestimonials[carouselIndex].location}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Manual Controls */}
          <div className="flex items-center justify-between gap-6 px-4">
            <Link 
              to="/feedback"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-stone-900 transition-colors"
            >
              See All Reviews
            </Link>

            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrevTestimonial}
                className="w-9 h-9 rounded-full bg-white border border-stone-200 text-stone-700 hover:bg-stone-900 hover:text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="w-9 h-9 rounded-full bg-white border border-stone-200 text-stone-700 hover:bg-stone-900 hover:text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Instagram Modal Popup */}
      <InstagramModal
        isOpen={!!selectedInstagramProject}
        onClose={() => setSelectedInstagramProject(null)}
        instagramUrl={selectedInstagramProject?.instagramUrl}
        projectTitle={selectedInstagramProject?.title}
      />

    </motion.div>
  );
};

export default Home;
