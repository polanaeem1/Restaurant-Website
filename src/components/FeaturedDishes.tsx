import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DISHES } from '../data';
import { Dish } from '../types';
import { Wine, Info, Sparkles, X, HeartCrack } from 'lucide-react';

export default function FeaturedDishes() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'starter' | 'main' | 'dessert' | 'cocktail'>('all');
  const [activeDish, setActiveDish] = useState<Dish | null>(null);

  const categories = [
    { id: 'all', label: 'THE COMPLETE VISION' },
    { id: 'starter', label: 'STARTERS' },
    { id: 'main', label: 'MAINS' },
    { id: 'dessert', label: 'DESSERTS' },
    { id: 'cocktail', label: 'CURATED BAR' },
  ];

  const filteredDishes = selectedCategory === 'all'
    ? DISHES
    : DISHES.filter(dish => dish.category === selectedCategory);

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-luxury-black overflow-hidden border-t border-cream-300/5">
      
      {/* Visual Ambient Background Lights */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full luxury-glow opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full luxury-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-accent-orange text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
            SENSORY VOYAGE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gradient-gold font-light tracking-wide mb-6">
            The Autumn Menu
          </h2>
          <div className="w-12 h-[1px] bg-accent-orange mx-auto mb-6" />
          <p className="text-cream-300/70 text-sm md:text-base font-light leading-relaxed">
            Every creation is structured to stimulate olfactory memory, aesthetic pleasure, and tactile enjoyment. 
            Locally sourced caviar, ocean delicacies, and dry-aged wagyu curated by Culinary Director Alexandre Rossi.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 max-w-4xl mx-auto border-b border-cream-300/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`relative px-4 py-3 text-[10px] md:text-xs tracking-[0.2em] font-medium transition-all duration-300 uppercase py-2 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'text-accent-orange'
                  : 'text-cream-300/50 hover:text-cream-100'
              }`}
            >
              {cat.label}
              {selectedCategory === cat.id && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute bottom-0 inset-x-0 h-[2px] bg-accent-orange"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Featured Dishes Bento/Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                key={dish.id}
                className="group relative bg-luxury-dark border border-cream-300/10 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl hover:border-accent-orange/30 hover:shadow-2xl hover:shadow-accent-orange/5 transition-all duration-500"
              >
                
                {/* Visual Image container with zooms */}
                <div className="relative overflow-hidden aspect-[4/3] w-full">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold tracking-widest text-accent-orange bg-luxury-black/80 backdrop-blur-md border border-accent-orange/30 px-2.5 py-1 uppercase rounded-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Glassmorphic hover overview overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-6 z-10 pointer-events-none">
                    <span className="text-[10px] tracking-widest text-cream-200 flex items-center gap-1.5">
                      <Info size={12} className="text-accent-orange" />
                      CLICK TO DISCOVER EXPERTISE
                    </span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-serif text-2xl text-cream-100 group-hover:text-gradient-gold transition-colors font-medium">
                        {dish.name}
                      </h3>
                      <span className="font-serif text-xl text-accent-orange font-semibold tracking-wider">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-cream-300/60 text-xs md:text-sm leading-relaxed font-light mb-6 line-clamp-3">
                      {dish.description}
                    </p>
                  </div>

                  {/* Interact Button */}
                  <div className="pt-4 border-t border-cream-300/5 flex items-center justify-between">
                    {dish.sommelierPairing ? (
                      <p className="text-[10px] tracking-wide text-cream-300/40 italic flex items-center gap-1.5 max-w-[70%] truncate">
                        <Wine size={12} className="text-accent-orange shrink-0" />
                        <span>Pairing: {dish.sommelierPairing}</span>
                      </p>
                    ) : (
                      <span className="w-4" />
                    )}

                    <button
                      onClick={() => setActiveDish(dish)}
                      className="text-[10px] font-bold tracking-widest text-cream-100 hover:text-accent-orange flex items-center gap-1 uppercase transition-colors"
                    >
                      DETAILS <span>→</span>
                    </button>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Sommelier Pairing & Fine Print Banner */}
        <div className="mt-16 text-center max-w-lg mx-auto bg-luxury-dark/40 border border-cream-300/5 p-4 rounded-xs">
          <p className="text-[10px] text-cream-300/40 tracking-widest uppercase">
            * CHEF'S CUSTOM TASTING EXPERIUS AVAILABLE AT THE CHEF'S COUNTER
          </p>
        </div>

      </div>

      {/* Exquisite Gastronomy Table-Side Modal */}
      <AnimatePresence>
        {activeDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-black/95 backdrop-blur-md"
            onClick={() => setActiveDish(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="relative w-full max-w-3xl bg-luxury-dark rounded-sm border border-cream-300/20 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDish(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-luxury-black/90 text-cream-200 hover:text-accent-orange border border-cream-300/10 rounded-full transition-colors"
                aria-label="Close detailed sensory drawer"
              >
                <X size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Visual Section */}
                <div className="md:col-span-5 relative h-64 md:h-full min-h-[250px] bg-luxury-black">
                  <img
                    src={activeDish.image}
                    alt={activeDish.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-luxury-dark via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Gastronomy Detail Section */}
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-accent-orange text-[9px] tracking-[0.3em] font-bold uppercase mb-2 block">
                      {activeDish.category} SELECTION
                    </span>
                    
                    <h3 className="font-serif text-3xl md:text-4xl text-gradient-gold font-light tracking-wide mb-2">
                      {activeDish.name}
                    </h3>
                    
                    <p className="text-2xl text-accent-orange font-serif mb-6">{activeDish.price}</p>
                    
                    <div className="h-[1px] bg-cream-300/10 my-4" />

                    <h4 className="text-[10px] tracking-widest text-cream-300/40 uppercase mb-3">
                      SENSORY PROFILE & SELECTION
                    </h4>
                    <p className="text-cream-200 text-sm leading-relaxed font-light mb-6">
                      {activeDish.description}
                    </p>

                    {/* Ingredients list */}
                    {activeDish.ingredients && (
                      <div className="mb-6">
                        <h4 className="text-[10px] tracking-widest text-cream-300/40 uppercase mb-3">
                          CORE INGREDIENTS
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeDish.ingredients.map((ingredient) => (
                            <span
                              key={ingredient}
                              className="text-[10px] tracking-wide text-cream-200 bg-luxury-black/40 border border-cream-300/5 px-2.5 py-1 rounded-sm flex items-center gap-1.5"
                            >
                              <Sparkles size={10} className="text-accent-orange" />
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sommelier wine pairings */}
                  {activeDish.sommelierPairing && (
                    <div className="bg-luxury-black/80 border border-accent-orange/15 rounded-xs p-4 flex items-start gap-3 mt-4">
                      <Wine size={20} className="text-accent-orange shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-[9px] tracking-[0.2em] font-bold text-accent-orange uppercase mb-1">
                          SOMMELIER RECOMMENDATION
                        </h5>
                        <p className="text-xs text-cream-100 italic leading-relaxed font-light">
                          "{activeDish.sommelierPairing}"
                        </p>
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
