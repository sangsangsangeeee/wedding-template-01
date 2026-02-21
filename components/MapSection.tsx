import { useEffect, useRef } from 'react';
import { WEDDING_DATA, TRANSPORT_DATA } from '../constants';
import FadeIn from './FadeIn';
import Accordion from './Accordion';

const MapSection = () => {
  const mapElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if the naver object and map script are loaded
    if (!mapElement.current || !window.naver || !window.naver.maps) {
      console.warn('Naver maps SDK is not loaded. Skipping map initialization.');
      return;
    }

    const { lat, lng } = WEDDING_DATA.mapOptions;
    const location = new window.naver.maps.LatLng(lat, lng);

    const mapOptions = {
      center: location,
      zoom: 16,
      minZoom: 14,
      maxZoom: 19,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    };

    // Initialize map
    const map = new window.naver.maps.Map(mapElement.current, mapOptions);

    // Initialize marker
    new window.naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  return (
    <section className='py-20 bg-white'>
      <FadeIn className='px-6'>
        <h2 className='text-center text-gold font-serif text-xl tracking-widest mb-2'>LOCATION</h2>
        <p className='text-center text-charcoal font-myeongjo text-lg font-bold mb-1'>
          {WEDDING_DATA.venue}
        </p>
        <p className='text-center text-gray-500 text-sm mb-10 font-myeongjo'>{WEDDING_DATA.hall}</p>

        {/* Map Container */}
        <div className='w-full aspect-square bg-gray-100 mb-10 shadow-inner rounded-sm overflow-hidden border border-gray-100 relative group'>
          <div ref={mapElement} className='w-full h-full' />
        </div>

        {/* Transport Accordion */}
        <div className='max-w-md mx-auto'>
          <Accordion items={TRANSPORT_DATA} />
        </div>
      </FadeIn>
    </section>
  );
};

export default MapSection;
