import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film } from 'lucide-react';

const VideoReelGrid = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const videoReels = [
    {
      id: "B812vGF8_sw",
      title: "The Regal Royal Palace Curation",
      location: "City Palace, Udaipur",
      duration: "5:20",
      thumbnail: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=800&h=500",
      featured: true
    },
    {
      id: "6iZpliqQezw",
      title: "Sandy Beachfront Sangeet & Reception",
      location: "Alila Diwa, Goa",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400&h=300",
      featured: false
    },
    {
      id: "xQhxv72yOq8",
      title: "Modern Premium Corporate Retreat Recap",
      location: "JW Marriott Resort, Jaipur",
      duration: "4:12",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400&h=300",
      featured: false
    },
    {
      id: "XMjqYBQ9ZeE",
      title: "Grand Pool Party & Mehendi Vibes",
      location: "Radisson Blu, Karjat",
      duration: "2:50",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400&h=300",
      featured: false
    },
    {
      id: "PM11aa5V02s",
      title: "Exotic Destination Sangeet Highlight",
      location: "Sheraton Hua Hin, Thailand",
      duration: "6:10",
      thumbnail: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=400&h=300",
      featured: false
    }
  ];

  const mainVideo = videoReels.find(v => v.featured);
  const sideVideos = videoReels.filter(v => !v.featured);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-festival-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-ocean-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-ocean-teal font-bold text-xs uppercase tracking-widest mb-3">
            <Film size={14} className="text-ocean-teal" />
            Recap Movies & Diaries
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-normal text-deep-teal">
            Watch Real <span className="text-festival-orange font-semibold italic">Celebration Reels</span>
          </h2>
          <p className="mt-4 text-stone-600 text-sm md:text-base leading-relaxed">
            Experience the vibrant colors, grand designs, and pure emotional highlights of our recent curation projects. Click on any reel to watch the highlight film.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Large Video (5 cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col">
            <div 
              onClick={() => setActiveVideoId(mainVideo.id)}
              className="group relative grow min-h-[300px] md:min-h-[420px] rounded-3xl overflow-hidden shadow-xl border border-stone-200 cursor-pointer"
            >
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300 z-10" />

              {/* Cover Image */}
              <img 
                src={mainVideo.thumbnail} 
                alt={mainVideo.title} 
                className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-mustard-gold text-deep-teal shadow-2xl flex items-center justify-center group-hover:bg-gold-400 transition-colors"
                >
                  <Play size={28} className="fill-deep-teal ml-1" />
                </motion.div>
              </div>

              {/* Video Info Overlays */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 text-white">
                <span className="text-[10px] md:text-xs text-mustard-gold font-bold uppercase tracking-widest block mb-2 bg-white/20 px-2.5 py-1 rounded-full w-fit backdrop-blur-xs">
                  ★ Featured recap film
                </span>
                <h3 className="text-xl md:text-3xl font-playfair font-semibold text-white leading-tight">
                  {mainVideo.title}
                </h3>
                <div className="flex items-center gap-4 text-white/70 text-xs mt-3">
                  <span>{mainVideo.location}</span>
                  <span>•</span>
                  <span>{mainVideo.duration} mins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Side Video List (5 cols on large screens) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6">
            {sideVideos.map((video) => (
              <div 
                key={video.id}
                onClick={() => setActiveVideoId(video.id)}
                className="group relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-4/3 cursor-pointer"
              >
                {/* Overlay shading */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />

                {/* Cover Image */}
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Minimalist Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-80 group-hover:opacity-100">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-deep-teal shadow-lg flex items-center justify-center group-hover:bg-mustard-gold group-hover:text-deep-teal transition-all">
                    <Play size={14} className="fill-current ml-0.5" />
                  </div>
                </div>

                {/* Text Details */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20 text-white">
                  <h4 className="text-[11px] md:text-sm font-semibold text-white line-clamp-1 group-hover:text-mustard-gold transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-[9px] md:text-xs text-white/60 line-clamp-1 mt-0.5">
                    {video.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Video Modal overlay */}
      <AnimatePresence>
        {activeVideoId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideoId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xs"
            />

            {/* Video container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl bg-black overflow-hidden shadow-2xl border border-white/10 z-10"
            >
              {/* Close button */}
              <button 
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors cursor-pointer z-20"
                aria-label="Close video player"
              >
                <X size={20} />
              </button>

              {/* YouTube Responsive iFrame */}
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`} 
                title="Wedding Vlog Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full absolute inset-0"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoReelGrid;
