import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';
import FadeIn from './FadeIn';

const Gallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [lastSelectedId, setLastSelectedId] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  const openModal = (id: number) => {
    setSelectedId(id);
    setScale(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setLastSelectedId(selectedId);
    setSelectedId(null);
    document.body.style.overflow = 'unset';
    
    // Reset the z-index boost after the layout animation completes (approx 500ms)
    setTimeout(() => {
      setLastSelectedId(null);
    }, 500);
  };

  const selectedImage = GALLERY_IMAGES.find(img => img.id === selectedId);

  // Navigate in modal
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(selectedId === null) return;
    const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedId);
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setSelectedId(GALLERY_IMAGES[nextIndex].id);
    setScale(1);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(selectedId === null) return;
    const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedId);
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedId(GALLERY_IMAGES[prevIndex].id);
    setScale(1);
  };

  return (
    <section className="py-20 bg-cream border-t border-cream-200 min-h-screen">
      <FadeIn className="px-8 mb-10 text-center">
        <h2 className="text-gold font-serif text-xl tracking-widest mb-2">GALLERY</h2>
        <p className="text-xs text-charcoal/50 font-serif">
          Our cherished moments
        </p>
      </FadeIn>

      {/* Masonry Layout (Pinterest Style) */}
      <div className="px-4">
        <div className="columns-2 gap-3 space-y-3">
          {GALLERY_IMAGES.map((img, index) => {
            const isSelectedOrClosing = img.id === selectedId || img.id === lastSelectedId;
            return (
              <FadeIn 
                key={img.id} 
                delay={index * 0.05}
                className={isSelectedOrClosing ? "relative z-50" : "relative z-0"}
              >
                <motion.div 
                  layoutId={`image-${img.id}`}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm"
                  onClick={() => openModal(img.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto object-cover shadow-sm transition-filter duration-300 hover:brightness-110"
                    loading="lazy"
                  />
                  {/* Hover overlay for desktop / visual cue */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
      
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedId && selectedImage && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Controls */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
               <span className="text-charcoal/50 text-sm font-serif">
                 {GALLERY_IMAGES.findIndex(i => i.id === selectedId) + 1} / {GALLERY_IMAGES.length}
               </span>
               <button onClick={closeModal} className="p-2 bg-white/50 rounded-full backdrop-blur-sm shadow-sm hover:bg-white/80 transition-colors">
                 <X className="w-6 h-6 text-charcoal" />
               </button>
            </div>

            {/* Image Container with Zoom Simulation */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden touch-none" onClick={closeModal}>
                {/* Navigation Buttons */}
                <button onClick={prevImage} className="absolute left-4 p-3 z-40 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/50 transition-colors shadow-sm">
                    <ChevronLeft className="w-6 h-6 text-charcoal" />
                </button>
                <button onClick={nextImage} className="absolute right-4 p-3 z-40 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/50 transition-colors shadow-sm">
                    <ChevronRight className="w-6 h-6 text-charcoal" />
                </button>

                <motion.div 
                   layoutId={`image-${selectedId}`}
                   className="w-full max-w-md px-1"
                   style={{ scale }}
                   onClick={(e) => e.stopPropagation()} // Prevent close on image tap
                   drag
                   dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                   dragElastic={0.2}
                   onDragEnd={(e, info) => {
                     // Simple swipe to close logic if dragged far enough down
                     if (info.offset.y > 150) closeModal();
                   }}
                >
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="w-full h-auto object-contain shadow-2xl max-h-[80vh]" 
                  />
                </motion.div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-10 w-full flex justify-center gap-4 z-50">
                <button 
                  onClick={(e) => { e.stopPropagation(); setScale(Math.max(1, scale - 0.5)); }}
                  className="px-4 py-2 bg-charcoal/80 text-white text-xs uppercase tracking-widest rounded-full hover:bg-charcoal transition-colors"
                >
                  -
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setScale(Math.min(3, scale + 0.5)); }}
                  className="px-4 py-2 bg-charcoal/80 text-white text-xs uppercase tracking-widest rounded-full flex items-center gap-2 hover:bg-charcoal transition-colors"
                >
                  <ZoomIn className="w-3 h-3" /> Zoom
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;