import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CustomSelect = ({ options, value, onChange, className = '', isDark = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentOption = options.find(opt => opt.value === value) || options[0];

  const handleSelect = (val) => {
    onChange({ target: { name: 'eventType', value: val } });
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3.5 border rounded-xl text-xs md:text-sm focus:outline-none transition-all cursor-pointer text-left font-sans ${
          isDark 
            ? 'bg-white/5 border-white/10 text-white focus:border-festival-orange/50 focus:bg-white/10' 
            : 'bg-[#fbfbfa] border-stone-200 focus:border-festival-orange/60 focus:bg-white text-stone-850'
        }`}
      >
        <span className="truncate">{currentOption ? currentOption.label : 'Select Option'}</span>
        <ChevronDown size={15} className={`transition-transform duration-300 shrink-0 ${
          isDark ? 'text-white/40' : 'text-stone-400'
        } ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute z-50 left-0 right-0 mt-2 rounded-xl shadow-lg overflow-hidden py-1 max-h-60 overflow-y-auto border ${
              isDark 
                ? 'bg-[#151c22] border-white/10 shadow-black/40' 
                : 'bg-white border-stone-200/80 shadow-stone-900/40'
            }`}
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full text-left px-4 py-2.5 text-xs md:text-sm font-sans transition-all flex items-center justify-between cursor-pointer ${
                  option.value === value
                    ? isDark 
                      ? 'bg-white/10 text-festival-orange font-semibold' 
                      : 'bg-stone-50 text-festival-orange font-semibold'
                    : isDark 
                      ? 'text-white/80 hover:bg-white/5 hover:text-white' 
                      : 'text-stone-700 hover:bg-stone-50 hover:text-stone-950'
                }`}
              >
                <span>{option.label}</span>
                {option.value === value && (
                  <span className="w-1.5 h-1.5 rounded-full bg-festival-orange" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
