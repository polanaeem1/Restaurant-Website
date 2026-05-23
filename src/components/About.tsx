import { motion } from 'motion/react';
import { History, Compass, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-luxury-black/95 overflow-hidden border-t border-cream-300/5">
      
      {/* Decorative Warm Lighting Behind Text */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full luxury-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Text Storytelling Section with Motion Transitions */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.0 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-accent-orange text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
              THE HERITAGE OF EXPEDITION
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient-gold font-light tracking-wide leading-tight mb-8">
              A Symphony of Spatial & <br />Culinary Design<span className="text-accent-orange">.</span>
            </h2>

            <div className="w-16 h-[1px] bg-accent-orange mb-8" />

            <div className="flex flex-col gap-6 text-cream-300/80 text-sm md:text-base font-light leading-relaxed">
              <p>
                Established in 2024, <strong className="text-cream-100">L’Étoile</strong> was born from a singular vision: 
                to merge the sleek, high-contrast structural geometry of New York’s SoHo lofts with the warm, 
                velveteen coastal air of Miami’s Design District.
              </p>
              
              <p>
                Our kitchen treats cooking as haute couture. Led by three-Michelin-starred Alexandre Rossi, 
                we design plates that respect raw heritage while utilizing modern thermodynamic techniques. 
                Every seating is an curated gallery event, styled with imported Italian basalt counters, 
                romantic hand-blown candlelight, and low-frequency, sensory acoustic soundscapes.
              </p>
            </div>

            {/* Prestige Stats Icons Grid */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 mt-12 pt-10 border-t border-cream-300/10">
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 text-accent-orange mb-2">
                  <Compass size={16} />
                  <span className="text-[10px] tracking-widest font-bold">VIBE</span>
                </div>
                <h4 className="font-serif text-lg text-cream-100 font-medium">Miami-NYC</h4>
                <p className="text-[10px] text-cream-300/40 uppercase tracking-wider mt-1">Trendy Lounge</p>
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 text-accent-orange mb-2">
                  <Award size={16} />
                  <span className="text-[10px] tracking-widest font-bold">RANKING</span>
                </div>
                <h4 className="font-serif text-lg text-cream-100 font-medium">3 Michelin</h4>
                <p className="text-[10px] text-cream-300/40 uppercase tracking-wider mt-1">Stellar Standard</p>
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 text-accent-orange mb-2">
                  <History size={16} />
                  <span className="text-[10px] tracking-widest font-bold">CELLAR</span>
                </div>
                <h4 className="font-serif text-lg text-cream-100 font-medium">1,200+ Vintages</h4>
                <p className="text-[10px] text-cream-300/40 uppercase tracking-wider mt-1">Sought-after Vault</p>
              </div>
            </div>

            {/* Chef's Handwritten Signature */}
            <div className="flex items-center gap-4 mt-10">
              <div className="w-10 h-10 rounded-full border border-cream-300/10 overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=150" 
                  alt="Alexandre Rossi" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-cream-200 block uppercase tracking-wider">Alexandre Rossi</span>
                <span className="text-[10px] text-accent-orange uppercase tracking-widest">Executive Chef / Founder</span>
              </div>
              <div className="ml-8 font-serif text-2xl md:text-3xl text-gradient-gold italic opacity-60 font-light translate-y-1">
                Alexandre R.
              </div>
            </div>

          </motion.div>

          {/* Luxury Parallax Image Collage Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="lg:col-span-6 relative w-full h-[500px] md:h-[600px] mt-10 lg:mt-0 flex items-center justify-center"
          >
            
            {/* Elegant framing border around the main image */}
            <div className="absolute top-6 left-6 right-6 bottom-6 border border-accent-orange/15 rounded-sm pointer-events-none z-0" />

            {/* Main Center Image - Custom restaurant ambiance */}
            <div className="w-[80%] h-[80%] rounded-sm overflow-hidden border border-cream-300/10 shadow-2xl z-10 relative group">
              <img
                src="/src/assets/images/restaurant_ambiance_1779372268969.png"
                alt="L'Étoile Luxury Grand Salon Ambiance"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-[11px] tracking-wider text-cream-200 uppercase">The Main Champagne Lounge area</p>
              </div>
            </div>

            {/* Secondary Floating Image */}
            <motion.div 
              initial={{ y: 20 }}
              whileInView={{ y: -20 }}
              transition={{ ease: 'easeOut', duration: 1.5 }}
              className="absolute bottom-4 right-0 w-[45%] aspect-[4/3] rounded-sm overflow-hidden border border-cream-300/20 shadow-2xl z-20 group"
            >
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400"
                alt="Table Setup Detail"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Tertiary Small Floating Detail Image */}
            <motion.div
              initial={{ y: -15 }}
              whileInView={{ y: 15 }}
              transition={{ ease: 'easeOut', duration: 1.5 }}
              className="absolute top-4 left-0 w-[42%] aspect-[4/5] rounded-sm overflow-hidden border border-cream-300/20 shadow-2xl z-20 group"
            >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=300"
                alt="Tasting Detail"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
