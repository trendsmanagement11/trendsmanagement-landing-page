import { motion } from 'framer-motion';
import { WhatsApp } from './SocialIcons';
import { companyInfo } from '../data/companyInfo';

const WhatsAppButton = () => {
  // Construct the WhatsApp URL with prefilled text
  const message = "Hi Trends Management, I would like to inquire about your event planning Segments!";
  const whatsappUrl = `https://wa.me/${companyInfo.phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulsating backdrop rings */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/35 animate-ping pointer-events-none scale-125" />
      <span className="absolute inset-px rounded-full bg-emerald-500/20 animate-pulse pointer-events-none" />

      <motion.a
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-full shadow-2xl hover:from-emerald-400 hover:to-green-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-bg-light-gray"
        aria-label="Contact on WhatsApp"
      >
        <WhatsApp size={28} className="fill-white" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
