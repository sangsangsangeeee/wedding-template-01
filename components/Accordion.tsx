import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Car, Bus, Train } from 'lucide-react';
import { TransportInfo } from '../types';

interface AccordionProps {
  items: TransportInfo[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const getIcon = (type: string) => {
    switch (type) {
      case 'subway': return <Train className="w-5 h-5" />;
      case 'bus': return <Bus className="w-5 h-5" />;
      case 'car': return <Car className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = expandedIndex === index;
        return (
          <div key={index} className="border-b border-gray-200 pb-2">
            <button
              onClick={() => setExpandedIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-3 text-left focus:outline-none"
            >
              <div className="flex items-center gap-3 text-charcoal">
                <span className={`p-2 rounded-full ${isOpen ? 'bg-gold text-white' : 'bg-gray-100 text-gray-500'} transition-colors duration-300`}>
                  {getIcon(item.type)}
                </span>
                <span className={`font-serif text-lg tracking-wide ${isOpen ? 'text-charcoal' : 'text-gray-500'}`}>
                  {item.title}
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-12 pr-4 pb-4 pt-1">
                    <ul className="list-disc list-outside text-sm text-charcoal/80 space-y-2 font-myeongjo ml-4">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="pl-1 leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;