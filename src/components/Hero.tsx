import { motion } from 'motion/react';
import { ChevronDown, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onMenuClick: () => void;
  onReserveClick: () => void;
}

export default function Hero({ onMenuClick, onReserveClick }: HeroProps) {
  return (
    <section 
      id="hero"
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-luxury-black"
    >
      {/* Cinematic Background Image Layer with Ken Burns Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.55 }}
          transition={{ duration: 2.8, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/src/assets/images/luxury_dining_hero_1779372202572.png')` 
          }}
        />
        {/* Deep, multi-layered elegant ambient overlay gradient to maximize typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-luxury-black/90 z-2" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/70 via-transparent to-luxury-black/70 z-2" />
      </div>

      {/* Luxury Ambient Lighting Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full luxury-glow opacity-60 pointer-events-none z-1" />

      {/* Main Narrative Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center select-none">
        
        {/* Michelin Star Award Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cream-300/10 bg-luxury-dark/60 backdrop-blur-md mb-6 md:mb-8"
        >
          <Sparkles size={13} className="text-accent-orange animate-pulse" />
          <span className="text-[10px] tracking-[0.25em] font-semibold text-cream-200">
            EXPERIENCE THE COUTURE OF CUISINE • ⭐⭐⭐
          </span>
        </motion.div>

        {/* Cinematic Bold Header (Plays with Garamond italic-normal pairing) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-cream-100 tracking-tight leading-[0.95]"
        >
          <span className="block font-light text-gradient-gold">Culinary Art</span>
          <span className="block italic font-light ml-0 md:ml-12 mt-2">
            Beyond Sensation<span className="text-accent-orange">.</span>
          </span>
        </motion.h1>

        {/* Sophisticated Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7 }}
          className="max-w-xl text-sm md:text-base text-cream-200/80 tracking-wide font-light leading-relaxed mt-6 md:mt-8 px-4"
        >
          Inspired by the architectural precision of NYC and the golden energy of Miami. 
          A multi-sensory gastronome experience that transforms cooking into absolute poetry.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10 md:mt-12 w-full max-w-sm sm:max-w-none"
        >
          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] bg-accent-orange text-luxury-black hover:bg-white hover:text-luxury-black transition-all duration-500 shadow-xl shadow-accent-orange/10 transform rounded-sm"
          >
            VIEW SENSORY MENU
          </button>

          {/* Reserve Table Button */}
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] border border-cream-300/20 text-cream-100 hover:border-accent-orange hover:bg-accent-orange/5 transition-all duration-500 rounded-sm"
          >
            RESERVE A CRADLE
          </button>
        </motion.div>

        {/* District & Location Quick Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="hidden md:flex items-center gap-6 text-[10px] tracking-[0.3em] text-cream-300/40 uppercase mt-16"
        >
          <div className="flex items-center gap-1.5 hover:text-accent-orange transition-colors">
            <MapPin size={12} className="text-accent-orange" />
            <span>MIAMI DESIGN DISTRICT</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-cream-300/20" />
          <span>EST. 2024</span>
          <span className="w-1 h-1 rounded-full bg-cream-300/20" />
          <span>7 DAYS A WEEK 17:00 — 02:00</span>
        </motion.div>

      </div>

      {/* Down Chevron indicator with subtle bounce */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ repeat: Infinity, duration: 2.0, delay: 1.5 }}
        onClick={onMenuClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-cream-300/60 hover:text-accent-orange transition-colors"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
