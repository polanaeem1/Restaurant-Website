import { useState, FormEvent, MouseEvent } from 'react';
import { Instagram, Facebook, Twitter, Award, Compass, Send, Check } from 'lucide-react';

export default function Footer() {
  const [journalEmail, setJournalEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!journalEmail) return;
    setIsSubscribed(true);
    setJournalEmail('');
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4000);
  };

  const handleSmoothScrollByTarget = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetedElement = document.querySelector(id);
    if (targetedElement) {
      const topOffset = targetedElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-luxury-black text-cream-200 border-t border-cream-300/10 pt-20 pb-10 overflow-hidden">
      
      {/* Decorative ambient background flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full luxury-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-cream-300/10">
          
          {/* Brand Presentation Section */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#hero" onClick={(e) => handleSmoothScrollByTarget(e, '#hero')} className="flex items-center gap-2 group mb-6">
                <span className="font-serif text-3xl font-medium tracking-widest text-gradient-gold">
                  L'ÉTOILE
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-orange self-end mb-2" />
              </a>
              <p className="text-xs text-cream-300/50 leading-relaxed font-light mb-6">
                Representing the perfect tension between raw heritage and architectural elegance. 
                Experience a sensory culinary atmosphere inspired by Miami and New York City.
              </p>
            </div>
            {/* Social Icons list */}
            <div className="flex items-center gap-4 text-cream-300/60">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-cream-300/10 hover:border-accent-orange hover:text-accent-orange transition-colors" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-cream-300/10 hover:border-accent-orange hover:text-accent-orange transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-cream-300/10 hover:border-accent-orange hover:text-accent-orange transition-colors" aria-label="Twitter">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Quick link navigation matrix */}
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase text-cream-300/40 tracking-[0.2em] font-semibold block mb-5">
              THE EXPERIENCE
            </span>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#hero" onClick={(e) => handleSmoothScrollByTarget(e, '#hero')} className="text-cream-300/65 hover:text-accent-orange transition-colors tracking-wide">
                  Chef's Vision
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleSmoothScrollByTarget(e, '#menu')} className="text-cream-300/65 hover:text-accent-orange transition-colors tracking-wide">
                  The Complete Menu
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleSmoothScrollByTarget(e, '#about')} className="text-cream-300/65 hover:text-accent-orange transition-colors tracking-wide">
                  Our Legacy Story
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleSmoothScrollByTarget(e, '#gallery')} className="text-cream-300/65 hover:text-accent-orange transition-colors tracking-wide">
                  Senses Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* District Contacts column */}
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase text-cream-300/40 tracking-[0.2em] font-semibold block mb-5">
              RESERVATIONS
            </span>
            <ul className="space-y-3 text-xs text-cream-300/65">
              <li>
                <a href="#reservation" onClick={(e) => handleSmoothScrollByTarget(e, '#reservation')} className="hover:text-accent-orange transition-all leading-normal">
                  Book Table Seat
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-accent-orange uppercase tracking-widest mt-1">Direct Call</span>
                <a href="tel:+13055550192" className="text-cream-100 font-medium hover:text-accent-orange transition-colors">
                  +1 (305) 555-0192
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-cream-300/40 uppercase tracking-widest mt-1">General Inquiries</span>
                <span className="text-cream-200">concierge@letoile.com</span>
              </li>
            </ul>
          </div>

          {/* Members Culinary Journal newsletter */}
          <div className="lg:col-span-4">
            <span className="text-[10px] uppercase text-cream-300/40 tracking-[0.2em] font-semibold block mb-5">
              THE CULINARY JOURNAL
            </span>
            <p className="text-xs text-cream-300/50 leading-relaxed font-light mb-4">
              Register below to receive early seasonal release alerts, private table requests, and sommelier vintage lists.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative flex items-center bg-luxury-dark border border-cream-300/10 focus-within:border-accent-orange rounded-xs p-1 transition-all">
              <input
                type="email"
                placeholder="your.email@gmail.com"
                required
                value={journalEmail}
                onChange={(e) => setJournalEmail(e.target.value)}
                className="w-full bg-transparent pl-3 pr-10 py-2.5 text-xs text-cream-100 focus:outline-none placeholder-cream-300/30"
              />
              <button
                type="submit"
                className="absolute right-1 p-2 bg-accent-orange hover:bg-white text-luxury-black transition-colors rounded-xs shrink-0 cursor-pointer"
                aria-label="Subscribe"
              >
                {isSubscribed ? <Check size={14} className="text-luxury-black" /> : <Send size={14} />}
              </button>
            </form>

            {isSubscribed && (
              <p className="text-[10px] text-accent-orange tracking-widest uppercase mt-2.5 animate-pulse">
                WELCOME TO THE JOURNAL INVITATION.
              </p>
            )}
          </div>

        </div>

        {/* Bottom credits and copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-[10px] tracking-widest text-cream-300/30 uppercase">
          
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} L'Étoile Restaurant Corp.</span>
            <span className="hidden sm:inline">•</span>
            <span>PRIVACY PROTOCOL</span>
            <span className="hidden sm:inline">•</span>
            <span>LICENSING SYSTEM</span>
          </div>

          <div className="flex items-center gap-2">
            <Award size={12} className="text-accent-orange" />
            <span>ESTABLISHED IN THE MIAMI DESIGN DISTRICT & SOHO NYC</span>
          </div>

        </div>

      </div>

    </footer>
  );
}
