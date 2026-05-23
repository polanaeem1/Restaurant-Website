import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';
import { LucideMaximize2, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'culinary' | 'bar' | 'moments'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'ALL PLATES & SPACES' },
    { id: 'interior', label: 'THE SALONS' },
    { id: 'culinary', label: 'GASTRONOMY' },
    { id: 'bar', label: 'BAR COUTURE' },
    { id: 'moments', label: 'MOMENTS' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (originalId: string) => {
    const idx = GALLERY.findIndex(item => item.id === originalId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === 0 ? GALLERY.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === GALLERY.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-luxury-black overflow-hidden border-t border-cream-300/5">
      
      {/* Decorative Blur Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full luxury-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-accent-orange text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
            VISUAL DISCOVERIES
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gradient-gold font-light tracking-wide mb-6">
            The Senses Gallery
          </h2>
          <div className="w-12 h-[1px] bg-accent-orange mx-auto mb-6" />
          <p className="text-cream-300/70 text-sm md:text-base font-light leading-relaxed">
            Preview the intricate balance of candlelight, cold stone, and plating precision of our custom rooms, 
            built to transition perfectly from afternoon tranquility to midnight high-pulse Miami lounges.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 max-w-3xl mx-auto border-b border-cream-300/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`relative px-4 py-3 text-[10px] tracking-[0.2em] font-medium transition-all duration-300 uppercase cursor-pointer ${
                activeCategory === cat.id
                  ? 'text-accent-orange'
                  : 'text-cream-300/50 hover:text-cream-100'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="galleryCategoryIndicator"
                  className="absolute bottom-0 inset-x-0 h-[2px] bg-accent-orange"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bento Grid Gallery with Interactive Hover Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                key={item.id}
                onClick={() => handleOpenLightbox(item.id)}
                className="group relative h-80 rounded-sm overflow-hidden border border-cream-300/10 bg-luxury-dark shadow-lg cursor-pointer transform hover:border-accent-orange/30 transition-all duration-500 hover:shadow-2xl"
              >
                
                {/* Images Layer */}
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.80] group-hover:brightness-95"
                  referrerPolicy="no-referrer"
                />

                {/* Grid Overlay Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

                {/* Hover Reveal Items */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                  <span className="text-[9px] tracking-[0.25em] text-accent-orange uppercase font-bold mb-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.category} VIEW
                  </span>
                  
                  <p className="font-serif text-lg md:text-xl text-cream-100 font-light tracking-wide leading-snug line-clamp-2 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    {item.caption}
                  </p>

                  <div className="mt-4 pt-4 border-t border-cream-300/10 flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    <span className="text-[9px] tracking-widest text-cream-300/40 uppercase">EXPERIENCE ARCHITECTURE</span>
                    <LucideMaximize2 size={13} className="text-accent-orange" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Elegant Michelin recommendation footer tag */}
        <div className="mt-16 flex justify-center text-center opacity-40">
          <p className="text-[10px] tracking-[0.3em] uppercase text-cream-300/70 max-w-lg leading-relaxed">
            * IMAGES HIGHLIGHT THE EXCLUSIVE DESIGN OF OUR DINING SPACES IN MIAMI & NEW YORK CITY
          </p>
        </div>

      </div>

      {/* Fullscreen Lightbox Carousel Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-luxury-black/98 p-4 md:p-10 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Topbar navigation details inside lightbox */}
            <div className="absolute top-6 inset-x-0 px-6 md:px-12 flex justify-between items-center text-cream-200 z-10 pointer-events-none">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent-orange font-bold">L'ÉTOILE</span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-cream-300/60 ml-4 hidden md:inline">
                  PHOTO {lightboxIndex + 1} OF {GALLERY.length}
                </span>
              </div>
              
              {/* Force Click Active close button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-3 bg-luxury-dark hover:bg-white/10 rounded-full border border-cream-300/10 text-cream-100 hover:text-accent-orange transition-all pointer-events-auto"
                aria-label="Close premium lightbox view"
              >
                <X size={18} />
              </button>
            </div>

            {/* Left/Right controls */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 md:left-8 p-3 rounded-full border border-cream-300/10 bg-luxury-dark/60 text-cream-100 hover:text-accent-orange hover:bg-luxury-gray transition-colors z-20"
              aria-label="Prev. slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-8 p-3 rounded-full border border-cream-300/10 bg-luxury-dark/60 text-cream-100 hover:text-accent-orange hover:bg-luxury-gray transition-colors z-20"
              aria-label="Next. slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Frame Content */}
            <motion.div
              layout
              className="max-w-4xl max-h-[70vh] w-full h-full flex justify-center items-center pointer-events-none relative z-10 mt-6"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  src={GALLERY[lightboxIndex].image}
                  alt={GALLERY[lightboxIndex].caption}
                  className="max-w-full max-h-full object-contain rounded-sm border border-cream-300/10 pointer-events-auto shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </motion.div>

            {/* Bottom Caption Overlay */}
            <div 
              className="max-w-xl text-center mt-6 p-4 pointer-events-auto select-text relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[10px] tracking-[0.25em] text-accent-orange font-bold uppercase mb-2 block">
                {GALLERY[lightboxIndex].category} VIEW
              </span>
              <p className="font-serif text-xl md:text-2xl text-cream-100 font-light leading-snug">
                {GALLERY[lightboxIndex].caption}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
