import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../constants';
import FadeIn from './FadeIn';
import heroImage from '../assets/hero.jpeg';

const Hero = () => {
  return (
    <header className='relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center p-6 bg-white'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='absolute inset-0 z-0'
      >
        <img src={heroImage} alt='Main Couple' className='w-full h-full object-cover opacity-90' />
        <div className='absolute inset-0 bg-cream/20 mix-blend-overlay'></div>
      </motion.div>

      {/* Frame Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        className='absolute inset-4 border border-gold/60 z-10 pointer-events-none'
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
        className='absolute inset-5 border border-white/40 z-10 pointer-events-none'
      />

      {/* Content */}
      <div className='relative z-20 text-center flex flex-col items-center gap-4 mt-auto mb-20'>
        <FadeIn delay={1.0}>
          <div className='writing-vertical-rl text-white drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)] font-medium text-sm tracking-[0.3em] font-serif uppercase h-24 mb-4 border-l border-white/50 pl-3 mx-auto'>
            {WEDDING_DATA.message}
          </div>
        </FadeIn>

        <FadeIn delay={1.2}>
          <h1 className='text-white text-3xl font-serif tracking-widest drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]'>
            {WEDDING_DATA.groom.name} <span className='text-gold mx-2'>&</span>{' '}
            {WEDDING_DATA.bride.name}
          </h1>
        </FadeIn>

        <FadeIn delay={1.4}>
          <p className='text-white text-sm mt-3 font-serif tracking-widest uppercase drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]'>
            {WEDDING_DATA.time}
          </p>
          <p className='text-white text-xs mt-1 font-myeongjo drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]'>
            {WEDDING_DATA.venue} · {WEDDING_DATA.hall}
          </p>
        </FadeIn>
      </div>
    </header>
  );
};

export default Hero;
