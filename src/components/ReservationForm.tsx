import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ReservationData } from '../types';
import { Calendar, Users, Clock, Send, CheckCircle, Smartphone, ArrowRight, Sparkles } from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState<Partial<ReservationData>>({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '',
    time: '',
    seatingArea: 'main-salon',
    dietaryRestrictions: '',
    specialOccasion: 'none',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // High-end seats availability mock config
  const seatingAreas = [
    { id: 'main-salon', name: 'The Grand Salon', desc: 'Sartorial basalt booths with warm low-level candlelight.' },
    { id: 'garden-terrace', name: 'Garden Veranda', desc: 'Vibrant outdoor dining overlooking Miami skyline.' },
    { id: 'chef-counter', name: 'The Chef’s Counter', desc: 'Stellar front-row action beside Chef Alexandre (Add. fee applies).' }
  ];

  const timeslots = [
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuestsChange = (amount: number) => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.min(12, Math.max(1, (prev.guests || 2) + amount))
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      alert("Please complete all required fields to register your request.");
      return;
    }

    setLoading(true);
    // Simulate luxury API response pacing
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1800);
  };

  // WhatsApp formatted string generator
  const getWhatsAppLink = () => {
    const spaceLabel = seatingAreas.find(s => s.id === formData.seatingArea)?.name || 'Grand Salon';
    const text = `Hello L'Étoile Restaurant. I would like to confirm my luxury table request:
- Name: ${formData.name}
- Date: ${formData.date}
- Time: ${formData.time}
- Guests: ${formData.guests}
- Seating Zone: ${spaceLabel}
- Occasion: ${formData.specialOccasion !== 'none' ? formData.specialOccasion : 'Casual dinner'}
Thank you!`;
    return `https://wa.me/13055550192?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="reservation" className="relative py-24 md:py-32 bg-luxury-black overflow-hidden border-t border-cream-300/5">
      
      {/* Visual Ambient Background Lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] rounded-full luxury-glow opacity-35 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full luxury-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* Booking Info and Contacts Side */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-accent-orange text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
                SECURE ASSISTANCE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient-gold font-light tracking-wide leading-tight mb-8">
                Table Cradling<span className="text-accent-orange">.</span>
              </h2>

              <div className="w-12 h-[1px] bg-accent-orange mb-8" />

              <p className="text-cream-300/70 text-sm md:text-base font-light leading-relaxed mb-8">
                Due to limited seating layouts in our main salons, we highly recommend booking 14 days in advance. 
                For parties larger than 12 guests or tailored corporate buyouts, please connect with our maître d' concierge directly.
              </p>

              {/* Contacts info panel */}
              <div className="flex flex-col gap-6 pt-6 border-t border-cream-300/10">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-luxury-dark border border-cream-300/10 rounded-full text-accent-orange">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-cream-300/40 tracking-widest block mb-1">Direct Concierge Voice</span>
                    <a href="tel:+13055550192" className="text-lg text-cream-100 hover:text-accent-orange transition-colors font-medium tracking-wide">
                      +1 (305) 555-0192
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-luxury-dark border border-cream-300/10 rounded-full text-accent-orange">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-cream-300/40 tracking-widest block mb-1">Interactive Messaging</span>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent-orange hover:text-white flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                    >
                      Instant WhatsApp Confirmation <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro details fine print */}
            <div className="mt-12 lg:mt-0 p-5 rounded-sm bg-luxury-dark/40 border border-cream-300/5 text-xs text-cream-300/50 leading-relaxed font-light">
              <span className="text-gradient-gold font-medium block uppercase tracking-wider mb-2">Notice of Dress Code</span>
              L'Étoile maintains a strict smart-elegant attire code. Beachwear, sandals, athletic caps, and running kits are respectfully declined in our salons.
            </div>
          </div>

          {/* Interactive Form Side */}
          <div className="lg:col-span-7">
            <div className="relative bg-luxury-dark border border-cream-300/10 rounded-sm p-8 md:p-12 shadow-2xl h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    
                    {/* Guest Counter Row */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300/60 mb-3 font-semibold">
                        GUESTS COUNT
                      </label>
                      <div className="flex items-center gap-4 bg-luxury-black/60 border border-cream-300/10 p-2 rounded-xs max-w-xs justify-between">
                        <button
                          type="button"
                          onClick={() => handleGuestsChange(-1)}
                          className="w-10 h-10 bg-luxury-dark border border-cream-300/10 text-cream-200 hover:border-accent-orange hover:text-accent-orange transition-colors rounded-xs flex items-center justify-center font-bold"
                        >
                          -
                        </button>
                        <span className="font-serif text-lg text-cream-100 flex items-center gap-2">
                          <Users size={16} className="text-accent-orange" />
                          {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleGuestsChange(1)}
                          className="w-10 h-10 bg-luxury-dark border border-cream-300/10 text-cream-200 hover:border-accent-orange hover:text-accent-orange transition-colors rounded-xs flex items-center justify-center font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Zone selector radio-button styling */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300/60 mb-3 font-semibold">
                        SELECT SEATING ZONE
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {seatingAreas.map((area) => (
                          <div
                            key={area.id}
                            onClick={() => setFormData(prev => ({ ...prev, seatingArea: area.id as any }))}
                            className={`p-4 rounded-xs border transition-all duration-300 cursor-pointer ${
                              formData.seatingArea === area.id
                                ? 'bg-accent-orange/5 border-accent-orange'
                                : 'bg-luxury-black/30 border-cream-300/10 hover:border-cream-300/25'
                            }`}
                          >
                            <span className={`text-xs block font-semibold uppercase tracking-wider ${
                              formData.seatingArea === area.id ? 'text-accent-orange' : 'text-cream-100'
                            }`}>
                              {area.name}
                            </span>
                            <span className="text-[10px] text-cream-300/50 leading-relaxed block mt-1">
                              {area.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date and Time Fields Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Datepicker input card */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300/60 mb-2 font-semibold">
                          SELECT DATE *
                        </label>
                        <div className="relative">
                          <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-orange pointer-events-none" />
                          <input
                            type="date"
                            name="date"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full bg-luxury-black/60 border border-cream-300/10 focus:border-accent-orange rounded-xs py-3.5 pl-11 pr-4 text-xs text-cream-200 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Time slot combo picker */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300/60 mb-2 font-semibold">
                          AVAILABLE SLOTS *
                        </label>
                        <div className="relative">
                          <Clock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-orange pointer-events-none" />
                          <select
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full bg-luxury-black/60 border border-cream-300/10 focus:border-accent-orange rounded-xs py-3.5 pl-11 pr-4 text-xs text-cream-200 focus:outline-none transition-colors appearance-none cursor-pointer"
                          >
                            <option value="">Choose seating time</option>
                            {timeslots.map((t) => (
                              <option key={t} value={t}>{t} PM</option>
                            ))}
                          </select>
                        </div>
                      </div>

                    </div>

                    {/* Personal contact detail rows */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300/60 mb-2 font-semibold">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your premium identity"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-cream-300/10 focus:border-accent-orange rounded-xs p-3.5 text-xs text-cream-200 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300/60 mb-2 font-semibold">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="your@address.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-cream-300/10 focus:border-accent-orange rounded-xs p-3.5 text-xs text-cream-200 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300/60 mb-2 font-semibold">
                          CONCIERGE PHONE *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+1 (000) 000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-cream-300/10 focus:border-accent-orange rounded-xs p-3.5 text-xs text-cream-200 focus:outline-none transition-colors"
                        />
                      </div>

                    </div>

                    {/* Occasion Option Dropdown and Diet restrictions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300/60 mb-2 font-semibold">
                          SPECIAL OCCASION
                        </label>
                        <select
                          name="specialOccasion"
                          value={formData.specialOccasion}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-cream-300/10 focus:border-accent-orange rounded-xs p-3.5 text-xs text-cream-200 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="none">No specific event</option>
                          <option value="birthday">Birthday Celebration</option>
                          <option value="anniversary">Anniversary Tribute</option>
                          <option value="business">Executive Business Meeting</option>
                          <option value="other">Other Exclusive Milestone</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300/60 mb-2 font-semibold">
                          ALLERGENS & RESTRICTIONS
                        </label>
                        <input
                          type="text"
                          name="dietaryRestrictions"
                          placeholder="e.g., Gluten free, Seafood safety"
                          value={formData.dietaryRestrictions}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-cream-300/10 focus:border-accent-orange rounded-xs p-3.5 text-xs text-cream-200 focus:outline-none transition-colors"
                        />
                      </div>

                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 text-xs font-bold uppercase tracking-[0.25em] bg-accent-orange text-luxury-black hover:bg-white transition-all duration-500 rounded-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-luxury-black border-t-transparent animate-spin" />
                            <span>CONCIERGE ARRANGING SEATS...</span>
                          </>
                        ) : (
                          <>
                            <Send size={12} />
                            <span>CONFIRM SENSORY TABLE REQUEST</span>
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                    className="text-center py-8"
                  >
                    
                    {/* Golden Success Medal Seal */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-full border border-accent-orange bg-accent-orange/10 text-accent-orange relative">
                        <CheckCircle size={40} className="animate-pulse" />
                      </div>
                    </div>

                    {/* Confirmation Texts */}
                    <h3 className="font-serif text-3xl text-gradient-gold tracking-wide mb-3">
                      Booking Request Received
                    </h3>
                    <p className="text-cream-300/60 text-xs tracking-widest uppercase mb-8">
                      RESERVATION CERTIFICATE: #ETO-{Math.floor(100000 + Math.random() * 900000)}
                    </p>

                    {/* Luxurious receipt card layout */}
                    <div className="max-w-md mx-auto bg-luxury-black/85 border border-accent-orange/20 rounded-sm p-6 text-left space-y-4 mb-8">
                      <div className="flex justify-between items-center text-xs pb-3 border-b border-cream-300/10">
                        <span className="text-cream-300/50 uppercase tracking-widest">GUEST INVITEE</span>
                        <span className="font-bold text-cream-100 uppercase tracking-wider">{formData.name}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs pb-3 border-b border-cream-300/10">
                        <span className="text-cream-300/50 uppercase tracking-widest">TABLE ZONE</span>
                        <span className="font-bold text-accent-orange uppercase tracking-wider">
                          {seatingAreas.find(s => s.id === formData.seatingArea)?.name}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center py-2">
                        <div className="bg-luxury-dark border border-cream-300/5 p-2 rounded-xs">
                          <span className="block text-[8px] text-cream-300/40 uppercase tracking-widest">GUESTS</span>
                          <span className="text-xs font-semibold text-cream-100">{formData.guests} Members</span>
                        </div>
                        <div className="bg-luxury-dark border border-cream-300/5 p-2 rounded-xs">
                          <span className="block text-[8px] text-cream-300/40 uppercase tracking-widest">DATE</span>
                          <span className="text-xs font-semibold text-cream-100">{formData.date}</span>
                        </div>
                        <div className="bg-luxury-dark border border-cream-300/5 p-2 rounded-xs">
                          <span className="block text-[8px] text-cream-300/40 uppercase tracking-widest">SESSION TIME</span>
                          <span className="text-xs font-semibold text-cream-100">{formData.time} PM</span>
                        </div>
                      </div>
                    </div>

                    <p className="max-w-md mx-auto text-cream-300/70 text-sm font-light leading-relaxed mb-8">
                      We have dispatched a confirmation receipt with directions and menu customization suggestions to <strong className="text-cream-100">{formData.email}</strong>.
                    </p>

                    {/* Instant WhatsApp activation links */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-sm mx-auto">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-accent-orange text-luxury-black hover:bg-white transition-colors duration-300 rounded-xs flex items-center justify-center gap-1.5"
                      >
                        <Smartphone size={14} />
                        Instant Whatsapp Confirmation
                      </a>
                      
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            guests: 2,
                            date: '',
                            time: '',
                            seatingArea: 'main-salon',
                            dietaryRestrictions: '',
                            specialOccasion: 'none',
                            notes: '',
                          });
                        }}
                        className="text-xs text-cream-300/60 hover:text-white transition-colors uppercase tracking-widest py-3 font-medium"
                      >
                        Book Another Seating
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
