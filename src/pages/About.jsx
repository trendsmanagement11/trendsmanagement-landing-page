import { motion } from 'framer-motion';
import { ShieldCheck, Users, Compass, Award } from 'lucide-react';
import { Instagram } from '../components/SocialIcons';
import { teamData } from '../data/teamData';
import TeamCard from '../components/TeamCard';
import { useSEO } from '../hooks/useSEO';

const About = () => {
  useSEO({
    title: 'Our Legacy & Founder | Trends Management Nagpur',
    description: 'Learn the story behind Trends Management, Nagpur\'s premier event planners. Led by founder Nikhil Karadbhajne, we design luxury wedding ceremonies and events.',
    keywords: 'Trends Management History, Nikhil Karadbhajne, Nagpur Event Planners, Event Architects Nagpur'
  });

  // Extract owner profile
  const owner = teamData.find(member => member.isFounder);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const whyChooseUs = [
    {
      icon: Award,
      title: "Decade of Operational Excellence",
      description: "Over 12 years of successful event curations in Nagpur and beyond, handling grand budgets and high stakes with utmost precision."
    },
    {
      icon: Compass,
      title: "End-to-End Hospitality Mastery",
      description: "Complete vendor management, licensing, crowd control, and hospitality systems. We take full stress off your shoulders."
    },
    {
      icon: Users,
      title: "Elite Dynamic Team",
      description: "Our in-house design artists, destination specialists, and structural planners coordinate seamlessly to deliver state-of-the-art results."
    },
    {
      icon: ShieldCheck,
      title: "Absolute Pricing Transparency",
      description: "Vetted budgets with clear, itemized allocations and vendor receipts. We ensure 100% financial clarity for our families."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full pt-20 bg-[#fbfbfa] text-stone-900"
    >
      {/* HEADER SECTION */}
      <section className="relative py-20 md:py-28 bg-[#f5f5f3] border-b border-stone-200/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,144,71,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block mb-3">Our Legacy</span>
          <h1 className="text-3xl md:text-6xl font-playfair font-normal leading-tight text-stone-900 mb-6">
            The Story Behind <span className="text-festival-orange font-semibold italic">Trends Management</span>
          </h1>
          <p className="text-stone-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light font-sans">
            We started by helping event companies bring their visions to life through trusted manpower solutions. <br /> Today, Trends Management leads with its own signature experiences, turning weddings and corporate events into memorable celebrations.</p>
        </div>
      </section>

      {/* FOUNDER OWNER SECTION */}
      <section className="py-24 bg-white relative border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Owner Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-2xl border border-stone-200 bg-white max-w-sm w-full shadow-xs"
              >
                <div className="rounded-2xl overflow-hidden aspect-4/5 bg-stone-50">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Owner Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block mb-2">Creative Visionary</span>
              <h2 className="text-3xl md:text-5xl font-playfair font-normal text-stone-900 mb-1 leading-tight">
                {owner.name}
              </h2>
              <span className="text-stone-500 font-bold text-xs uppercase tracking-widest mb-6 block">
                {owner.role}
              </span>

              {/* Quote Block */}
              <blockquote className="border-l border-festival-orange pl-6 py-2 my-6 italic text-stone-850 font-playfair text-lg md:text-xl pr-4">
                "{owner.quote}"
              </blockquote>

              <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 font-light font-sans">
                {owner.bio}
              </p>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-8 font-light font-sans">
                From supporting events behind the scenes to creating unforgettable celebrations under our own name, the journey has grown with 120+ professionals. After planning our first wedding in 2022, Trends Management expanded rapidly and continues to make dream events a reality.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                <span className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Connect:</span>
                <a
                  href={owner.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-stone-50 border border-stone-200 text-stone-700 hover:text-stone-950 transition-all duration-300"
                  aria-label="Owner Instagram"
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & MISSION VALUES */}
      <section className="py-24 bg-[#f5f5f3] border-b border-stone-200/60 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block mb-3">Our Core Differentiators</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-normal text-stone-900">
              Why Choose <span className="text-festival-orange font-semibold italic">Trends Management</span>?
            </h2>
            <p className="mt-4 text-stone-600 text-sm md:text-base font-light leading-relaxed font-sans">
              We design and coordinate full-scale events with high precision, removing planning friction so you can focus entirely on enjoying your celebrated moments.
            </p>
          </div>

          {/* Core Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 md:p-8 flex gap-4 md:gap-6 border border-stone-250/60 shadow-xs"
                >
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60 text-festival-orange h-fit shrink-0">
                    <Icon size={20} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-playfair font-normal text-stone-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* THE ARCHITECTS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block mb-3">Our Curators</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-normal text-deep-teal">
              Meet Our Elite <span className="text-festival-orange font-semibold italic">Event Curators</span>
            </h2>
            <p className="mt-4 text-stone-600 text-sm md:text-base font-light leading-relaxed font-sans">
              A cohesive collective of designers, destination curators, and operations masters coordinating landmarks at scale.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {teamData.filter(member => !member.isFounder).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
};

export default About;
