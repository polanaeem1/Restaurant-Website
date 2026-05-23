import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll testimonials every 8 seconds for luxury screens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const ratingStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < count ? 'text-accent-orange fill-accent-orange' : 'text-cream-300/20'}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-luxury-dark overflow-hidden border-t border-cream-300/5">
      
      {/* Decorative Glow Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full luxury-glow opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Testimonial Quote Icon Accent */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="p-4 rounded-full border border-accent-orange/15 bg-luxury-black/60 relative">
            <Quote size={28} className="text-accent-orange" />
          </div>
        </div>

        {/* Dynamic Transition Review Display */}
        <div className="min-h-[280px] md:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              
              {/* Star Ratings */}
              <div className="flex gap-1.5 mb-6 justify-center">
                {ratingStars(TESTIMONIALS[currentIndex].rating)}
              </div>

              {/* Headline Review Quote text */}
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream-100 font-light italic leading-normal tracking-wide px-4 md:px-12 mb-8 select-text">
                "{TESTIMONIALS[currentIndex].quote}"
              </blockquote>

              {/* Critic / Customer Author Info */}
              <div>
                <cite className="not-italic text-sm font-semibold tracking-widest text-gradient-gold uppercase block mb-1">
                  {TESTIMONIALS[currentIndex].name}
                </cite>
                <div className="flex items-center justify-center gap-2 text-xs text-cream-300/40">
                  <span className="uppercase tracking-wider">{TESTIMONIALS[currentIndex].role}</span>
                  {TESTIMONIALS[currentIndex].source && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-cream-300/20" />
                      <span className="text-accent-orange tracking-widest uppercase font-medium">
                        {TESTIMONIALS[currentIndex].source}
                      </span>
                    </>
                  )}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Slides Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          
          <button
            onClick={handlePrev}
            className="p-3.5 border border-cream-300/10 rounded-full bg-luxury-black/80 text-cream-200 hover:text-accent-orange hover:border-accent-orange/30 transition-all cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Carousel dots indicators */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-accent-orange' : 'w-1.5 bg-cream-300/20'
                }`}
                aria-label={`Go to Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3.5 border border-cream-300/10 rounded-full bg-luxury-black/80 text-cream-200 hover:text-accent-orange hover:border-accent-orange/30 transition-all cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight size={16} />
          </button>
          
        </div>

      </div>

    </section>
  );
}
