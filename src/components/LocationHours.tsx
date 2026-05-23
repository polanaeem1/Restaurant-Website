import { motion } from 'motion/react';
import { Clock, MapPin, Compass, Car, Train } from 'lucide-react';

export default function LocationHours() {
  const currentWeekSchedules = [
    { days: 'MONDAY — THURSDAY', session: 'Dinner & Salon', hours: '17:00 — 00:00' },
    { days: 'FRIDAY — SATURDAY', session: 'Gastronomical Gala', hours: '17:00 — 02:00' },
    { days: 'SUNDAY', session: 'Sommelier Tastings', hours: '16:00 — 23:00' },
    { days: 'THE COCKTAIL LOUNGE', session: 'Midnight Vibe', hours: 'Daily 18:00 — Close' },
  ];

  return (
    <section id="location" className="relative py-24 md:py-32 bg-luxury-dark overflow-hidden border-t border-cream-300/5">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full luxury-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* Schedulers & Guides Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-accent-orange text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
                VISIT THE ESTATE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient-gold font-light tracking-wide leading-tight mb-8">
                Location & Schedules<span className="text-accent-orange">.</span>
              </h2>

              <div className="w-12 h-[1px] bg-accent-orange mb-8" />

              {/* Schedulers Details list */}
              <div className="space-y-6 mb-10">
                {currentWeekSchedules.map((sched, idx) => (
                  <div key={idx} className="pb-4 border-b border-cream-300/10 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-cream-100 font-semibold tracking-wide block mb-1">
                        {sched.days}
                      </span>
                      <span className="text-[10px] text-accent-orange uppercase tracking-widest font-light">
                        {sched.session}
                      </span>
                    </div>
                    <span className="font-mono text-sm text-cream-200 tracking-wider">
                      {sched.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Directions details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-cream-200 font-semibold uppercase tracking-wider block">Address</span>
                    <p className="text-xs text-cream-300/60 leading-relaxed font-light mt-1">
                      7850 NE 2nd Ave, Miami Design District, FL 33138, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass size={16} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-cream-200 font-semibold uppercase tracking-wider block">Neighborhood coordinates</span>
                    <p className="text-xs text-cream-300/60 leading-relaxed font-light mt-1">
                      Located inside the high-end design center, directly adjacent to the Onyx Art Pavilion.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Parking Accommodations layout */}
            <div className="mt-12 lg:mt-0 p-5 rounded-sm bg-luxury-black/60 border border-cream-300/5 flex gap-4">
              <Car size={18} className="text-accent-orange shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-cream-200 font-semibold uppercase tracking-wider block mb-1">Valet Parking Service</span>
                <p className="text-xs text-cream-300/50 leading-relaxed font-light">
                  Complimentary valet parking is securely certified for all guests seated in our grand salons. Private gated garage also available at NE 2nd entrance.
                </p>
              </div>
            </div>

          </div>

          {/* Map embedded Iframe wrapped in dark filters */}
          <div className="lg:col-span-7 h-[400px] md:h-auto min-h-[350px]">
            <div className="relative w-full h-full border border-cream-300/10 rounded-sm overflow-hidden shadow-2xl bg-luxury-black group hover:border-accent-orange/20 transition-all duration-500">
              
              {/* Overlay with subtle directions links */}
              <a
                href="https://maps.google.com/?q=Miami+Design+District"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 px-4 py-2.5 bg-luxury-black/90 backdrop-blur-md rounded-xs text-[10px] font-bold uppercase tracking-widest text-cream-100 hover:text-accent-orange border border-cream-300/10 hover:border-accent-orange/30 transition-all"
              >
                OPEN IN GOOGLE MAPS
              </a>

              {/* Dark Styled Google Maps embedded iframe */}
              <iframe
                title="L'Étoile Location Map"
                src="https://maps.google.com/maps?q=Miami%20Design%20District&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[0.92] hue-rotate-180 contrast-[1.2] saturate-[0.4] brightness-[0.85] opacity-75 group-hover:opacity-90 transition-opacity duration-500"
              />

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
