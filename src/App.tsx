import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ReservationForm from './components/ReservationForm';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Elite Preloader to simulate high-end cinematic transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-luxury-black text-cream-100 selection:bg-accent-orange selection:text-luxury-black font-sans">
      
      {/* Immersive Cinematic Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 w-full h-screen bg-luxury-black z-100 flex flex-col justify-center items-center"
          >
            {/* Soft backdrop radial glare */}
            <div className="absolute w-[400px] h-[400px] rounded-full luxury-glow opacity-30 pointer-events-none" />

            <div className="relative flex flex-col items-center">
              {/* Spinning micro loading circle */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                className="w-16 h-16 border border-cream-300/10 border-t-accent-orange rounded-full mb-8 relative"
              />

              {/* Serif letters reveal */}
              <motion.span
                initial={{ letterSpacing: '0.4em', opacity: 0 }}
                animate={{ letterSpacing: '0.6em', opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="font-serif text-3xl md:text-4xl text-gradient-gold tracking-[0.4em] font-light"
              >
                L'ÉTOILE
              </motion.span>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="h-[1px] w-24 bg-accent-orange origin-center mt-3"
              />

              <span className="text-[9px] tracking-[0.3em] uppercase text-cream-300/40 mt-4 leading-relaxed block">
                MIAMI • NEW YORK
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Render */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen flex flex-col overflow-x-hidden"
          id="root-container"
        >
          {/* Aesthetic Elegant Dark Ambient Glow Oversheets */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] atmos-glow pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] atmos-glow-bottom pointer-events-none z-0" />

          {/* Main Top sticky layout header */}
          <Navbar />

          <main className="flex-grow">
            
            {/* Cinematic Entrance Hero */}
            <Hero
              onMenuClick={() => handleScrollToSection('#menu')}
              onReserveClick={() => handleScrollToSection('#reservation')}
            />

            {/* Structured Gastronomy Menu Section */}
            <FeaturedDishes />

            {/* Design & Legacy Section with collage */}
            <About />

            {/* Bento-grid themed picture gallery */}
            <Gallery />

            {/* Premium Reviews Critic Carousel */}
            <Testimonials />

            {/* Reservations Manager */}
            <ReservationForm />

            {/* Coordinates & schedules segment with dark-mode map */}
            <LocationHours />

          </main>

          {/* Minimal footer layout */}
          <Footer />

        </motion.div>
      )}

    </div>
  );
}
