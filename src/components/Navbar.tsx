import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to style the navbar beautifully
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'CHEF\'S VIEW', href: '#hero' },
    { name: 'THE MENU', href: '#menu' },
    { name: 'OUR LEGACY', href: '#about' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'REVIEWS', href: '#testimonials' },
    { name: 'LOCATION', href: '#location' },
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetPos = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-black/90 backdrop-blur-md py-4 border-b border-cream-300/10 shadow-lg'
            : 'bg-gradient-to-b from-luxury-black/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 group z-50">
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-widest text-gradient-gold group-hover:opacity-95 transition-opacity">
              L'ÉTOILE
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-orange self-end mb-2 ml-0.5 animate-pulse" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-xs tracking-[0.2em] font-medium text-cream-200 hover:text-accent-orange transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent-orange after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+13055550192" 
              className="text-xs text-cream-300 hover:text-accent-orange transition-colors flex items-center gap-2"
            >
              <Phone size={14} className="text-accent-orange" />
              <span className="tracking-widest">305.555.0192</span>
            </a>
            <a
              href="#reservation"
              onClick={(e) => handleScrollTo(e, '#reservation')}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] border border-accent-orange text-accent-orange bg-accent-orange/5 hover:bg-accent-orange hover:text-luxury-black transition-all duration-500 rounded-sm"
            >
              RESERVE A TABLE
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-cream-100 focus:outline-none p-2 hover:bg-white/5 rounded-full transition-colors z-50"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Screen Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed inset-0 w-full h-screen bg-luxury-black z-45 flex flex-col justify-center px-8 md:px-16"
            id="mobile-overlay-menu"
          >
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-luxury-dark to-transparent opacity-80 pointer-events-none" />
            
            {/* Ambient luxury glow inside the slider menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full luxury-glow pointer-events-none" />

            <div className="flex flex-col gap-6 md:gap-8 max-w-lg mt-12">
              <span className="text-cream-300/40 text-[10px] tracking-[0.3em] uppercase">EXPERIENCE L'ÉTOILE</span>
              <div className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="font-serif text-3xl md:text-4xl text-cream-200 hover:text-accent-orange text-left transition-colors duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <div className="h-[1px] bg-cream-300/10 my-4" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 text-left"
              >
                <a
                  href="#reservation"
                  onClick={(e) => handleScrollTo(e, '#reservation')}
                  className="w-full py-4 text-center text-xs font-semibold uppercase tracking-widest border border-accent-orange text-accent-orange bg-accent-orange/5 hover:bg-accent-orange hover:text-luxury-black transition-all duration-500 rounded-sm"
                >
                  RESERVE A TABLE
                </a>
                
                <div className="flex items-center justify-between text-xs text-cream-300/60 mt-2">
                  <a href="tel:+13055550192" className="flex items-center gap-2 hover:text-accent-orange transition-colors">
                    <Phone size={14} />
                    <span>305.555.0192</span>
                  </a>
                  <span className="tracking-wider">MIAMI DESIGN DISTRICT</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
