import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../constants';
import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <header className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center p-6 bg-cream">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/800/1200?random=hero" 
          alt="Main Couple" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-cream/20 mix-blend-overlay"></div>
      </motion.div>

      {/* Frame Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute inset-4 border border-gold/60 z-10 pointer-events-none"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        className="absolute inset-5 border border-white/40 z-10 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center gap-4 mt-auto mb-20">
        <FadeIn delay={1.0}>
          <div className="writing-vertical-rl text-white drop-shadow-md text-sm tracking-[0.3em] font-serif uppercase opacity-90 h-24 mb-4 border-l border-white/50 pl-3 mx-auto">
            Eternal Promise
          </div>
        </FadeIn>
        
        <FadeIn delay={1.2}>
          <h1 className="text-white text-3xl font-serif tracking-widest drop-shadow-lg">
            {WEDDING_DATA.groom.name.split(' ')[1]} <span className="text-gold mx-2">&</span> {WEDDING_DATA.bride.name.split(' ')[1]}
          </h1>
        </FadeIn>

        <FadeIn delay={1.4}>
          <p className="text-white/90 text-sm mt-3 font-serif tracking-widest uppercase drop-shadow-md">
            {WEDDING_DATA.time}
          </p>
          <p className="text-white/90 text-xs mt-1 font-myeongjo drop-shadow-md">
            {WEDDING_DATA.venue} · {WEDDING_DATA.hall}
          </p>
        </FadeIn>
      </div>
    </header>
  );
};

export default Hero;