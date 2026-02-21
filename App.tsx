import React from 'react';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import Gallery from './components/Gallery';
import CalendarSection from './components/CalendarSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-white text-charcoal font-myeongjo overflow-x-hidden selection:bg-gold-light selection:text-charcoal'>
      <div className='max-w-md mx-auto shadow-2xl bg-white min-h-screen relative'>
        <Hero />
        <Greeting />
        <Gallery />
        <CalendarSection />
        <MapSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
