import { motion } from 'framer-motion';
import { Users2, ShieldCheck, HeartHandshake, Instagram, Quote, Sparkles } from 'lucide-react';
import { teamData } from '../data/teamData';
import { useSEO } from '../hooks/useSEO';

const Team = () => {
  useSEO({
    title: 'Meet Our Elite Event Curators & Planners | Trends Management',
    description: 'Get to know the elite planning crew of Trends Management. From destination producers to catering directors, our experts plan flawless events in Nagpur.',
    keywords: 'Trends Management Team, Event Managers Nagpur, Wedding Planning Staff, Professional Curators'
  });

  const founder = teamData.find(m => m.isFounder) || teamData[0];
  const members = teamData.filter(m => !m.isFounder);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full pt-20 bg-[#fbfbfa] text-stone-900 min-h-screen"
    >
      {/* HEADER HERO */}
      <section className="relative py-20 md:py-28 bg-[#f5f5f3] overflow-hidden border-b border-stone-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,144,71,0.04)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <span className="text-festival-orange font-bold text-xs uppercase tracking-[0.25em] block mb-4 animate-pulse">
            The Visionaries
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-normal leading-tight text-stone-900 mb-6">
            Meet Our Elite <span className="text-festival-orange font-semibold italic">Event Curators</span>
          </h1>
          <p className="text-stone-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light font-sans">
            A cohesive collective of designers, operations masters, and destination specialists, matching grand structural scales with meticulous minute-by-minute execution.
          </p>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center md:text-left mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-festival-orange mb-2 block">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-normal text-stone-900">
              The Founder's <span className="text-festival-orange font-semibold italic">Mantra</span>
            </h2>
          </div>

          <div className="bg-[#fbfbfa] border border-stone-200/80 rounded-3xl p-8 md:p-12 shadow-xs flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
            {/* Image Container */}
            <div className="w-full md:w-80 h-96 rounded-2xl overflow-hidden shadow-xs border border-stone-200 shrink-0 relative group">
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/20 to-transparent pointer-events-none" />
            </div>

            {/* Founder details */}
            <div className="grow flex flex-col justify-center">
              <div className="flex items-center justify-center md:justify-start gap-2 text-festival-orange font-bold text-[10px] uppercase tracking-widest mb-2">
                <Sparkles size={12} className="fill-festival-orange/20" />
                Trends Management
              </div>
              <h3 className="text-3xl sm:text-4xl font-playfair font-normal text-stone-900 text-center md:text-left">
                {founder.name}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mt-1.5 text-center md:text-left">
                {founder.role}
              </p>
              
              <p className="mt-6 text-stone-600 text-sm md:text-base leading-relaxed font-light font-sans text-center md:text-left">
                {founder.bio}
              </p>

              {/* Founder Quote */}
              <div className="mt-8 p-6 bg-white rounded-2xl border-l border-festival-orange relative shadow-xs">
                <Quote className="absolute right-4 top-2 text-festival-orange/5 w-12 h-12 pointer-events-none" />
                <p className="text-stone-850 font-playfair italic text-sm md:text-base relative z-10 leading-relaxed">
                  "{founder.quote}"
                </p>
              </div>

              {/* Founder Socials */}
              <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
                <a 
                  href={founder.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-stone-700 border border-stone-200 hover:text-stone-950 transition-all flex items-center justify-center shadow-xs duration-300"
                  aria-label={`${founder.name} Instagram`}
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS GRID SECTION */}
      <section className="py-24 bg-[#fbfbfa] border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-festival-orange mb-2 block">
              The Crew
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-normal text-stone-900">
              Creative <span className="text-festival-orange font-semibold italic">Planners</span>
            </h2>
            <p className="mt-4 text-stone-500 text-sm font-light font-sans leading-relaxed">
              The expert minds working on the ground to bring perfection to every corporate gala, private blowout, and wedding event.
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {members.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="bg-white border border-stone-200/65 rounded-2xl overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="aspect-3/4 overflow-hidden relative border-b border-stone-100 shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Details */}
                <div className="p-5 grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-playfair font-normal text-stone-900 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-bold text-festival-orange uppercase tracking-widest mt-1.5">
                      {member.role}
                    </p>
                    <p className="text-xs text-stone-500 leading-relaxed font-light mt-3.5 font-sans">
                      {member.bio}
                    </p>
                  </div>

                  {/* Member Socials */}
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-stone-150/60">
                    <a 
                      href={member.socials.instagram} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-stone-50 text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-all flex items-center justify-center border border-stone-200/60 duration-300"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* WORK ETHIC / MANTRA SECTION */}
      <section className="py-24 relative overflow-hidden bg-white border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            <div className="bg-[#fbfbfa] border border-stone-200/60 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-xs">
              <div className="p-3 bg-stone-50 border border-stone-200/60 text-festival-orange rounded-xl w-fit">
                <ShieldCheck size={20} className="stroke-[1.5]" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-normal text-stone-900 leading-tight">
                Flawless Direct Coordination
              </h3>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light font-sans">
                We never delegate leadership. A senior director is physically present at every single event to supervise production timelines and vendor execution first-hand.
              </p>
            </div>

            <div className="bg-[#fbfbfa] border border-stone-200/60 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-xs">
              <div className="p-3 bg-stone-50 border border-stone-200/60 text-festival-orange rounded-xl w-fit">
                <Users2 size={20} className="stroke-[1.5]" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-normal text-stone-900 leading-tight">
                Vetted Supplier Network
              </h3>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light font-sans">
                We maintain active partnerships with premium florist farms, sound engineering, top culinary groups, and transport contractors native to all destination cities.
              </p>
            </div>

            <div className="bg-[#fbfbfa] border border-stone-200/60 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-xs">
              <div className="p-3 bg-stone-50 border border-stone-200/60 text-festival-orange rounded-xl w-fit">
                <HeartHandshake size={20} className="stroke-[1.5]" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-normal text-stone-900 leading-tight">
                Tailored Relationship Focus
              </h3>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light font-sans">
                We strictly limit our event calendar intake. By taking on fewer events, our operations leaders allocate full devotion and undivided care to your celebration.
              </p>
            </div>

          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default Team;
