import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import { Instagram } from './SocialIcons';

const InstagramModal = ({ isOpen, onClose, instagramUrl, projectTitle }) => {
  const [iframeLoading, setIframeLoading] = useState(true);

  // Reset loading state when the url changes
  useEffect(() => {
    if (isOpen) {
      setIframeLoading(true);
    }
  }, [instagramUrl, isOpen]);

  if (!isOpen || !instagramUrl) return null;

  // Extract shortcode from standard post (/p/) or reel (/reel/) Instagram link
  const getInstagramShortcode = (url) => {
    if (!url) return null;
    // Standard matches for /p/<shortcode> or /reel/<shortcode>
    const match = url.match(/\/p\/([a-zA-Z0-9_-]+)/) || url.match(/\/reel\/([a-zA-Z0-9_-]+)/);
    return match && match[1] ? match[1] : null;
  };

  const shortcode = getInstagramShortcode(instagramUrl);
  const embedUrl = shortcode ? `https://www.instagram.com/p/${shortcode}/embed` : null;

  // Backdrop animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  // Modal scale animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 15,
      transition: { duration: 0.25, ease: 'easeIn' }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        {/* Dark blurred backdrop */}
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="absolute inset-0 bg-stone-950/80 backdrop-blur-md"
        />

        {/* Modal content container */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-[460px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200/50 flex flex-col z-10 max-h-[90vh]"
        >
          {/* Header Panel */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-[#fbfbfa]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#fbebeb]/60 flex items-center justify-center text-pink-600">
                <Instagram size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 line-clamp-1">
                  {projectTitle || "Live Curation"}
                </h4>
                <p className="text-[10px] text-stone-400 tracking-wide font-light">View live on Instagram</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Open in new tab"
                className="p-2 text-stone-400 hover:text-festival-orange rounded-full hover:bg-stone-100 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
              <button 
                onClick={onClose}
                className="p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Iframe Body Area */}
          <div className="relative flex-1 bg-stone-50 overflow-y-auto min-h-[480px] md:min-h-[540px] flex items-center justify-center">
            {embedUrl ? (
              <>
                {/* Loader spinner */}
                {iframeLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-50 z-20">
                    <Loader2 className="animate-spin text-festival-orange mb-3" size={28} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Loading Instagram Feed...</span>
                  </div>
                )}
                
                {/* Instagram Iframe Embed */}
                <iframe
                  src={embedUrl}
                  className="w-full h-[480px] md:h-[540px] border-0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  onLoad={() => setIframeLoading(false)}
                />
              </>
            ) : (
              <div className="p-8 text-center">
                <p className="text-xs text-stone-500 font-light">Unable to load Instagram preview for this link.</p>
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-festival-orange mt-4 hover:underline"
                >
                  Open Direct Link <ExternalLink size={12} />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InstagramModal;
