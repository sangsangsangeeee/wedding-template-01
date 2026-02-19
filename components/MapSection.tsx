import { WEDDING_DATA, TRANSPORT_DATA } from '../constants';
import FadeIn from './FadeIn';
import Accordion from './Accordion';

const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <FadeIn className="px-6">
        <h2 className="text-center text-gold font-serif text-xl tracking-widest mb-2">LOCATION</h2>
        <p className="text-center text-charcoal font-myeongjo text-lg font-bold mb-1">
          {WEDDING_DATA.venue}
        </p>
        <p className="text-center text-gray-500 text-sm mb-10 font-myeongjo">
          {WEDDING_DATA.hall}
        </p>

        {/* Map Container - Grayscale Filter */}
        <div className="w-full aspect-square bg-gray-100 mb-10 shadow-inner rounded-sm overflow-hidden border border-gray-100 relative group">
           {/* Placeholder for Map - using an iframe with grayscale filter */}
           {/* In a real app, you would use the Kakao/Naver Map SDK here */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.633458628045!2d127.00539577638368!3d37.55594612809623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca337691552a1%3A0xb367119c43714653!2sThe%20Shilla%20Seoul!5e0!3m2!1sen!2skr!4v1715000000000!5m2!1sen!2skr"
             width="100%" 
             height="100%" 
             style={{border: 0}}
            //  style={{ border: 0, filter: 'grayscale(100%) contrast(90%)' }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="Wedding Location"
             className="absolute inset-0"
           ></iframe>
           
           {/* Overlay prompt */}
           <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-3 py-1 text-[10px] text-gray-500 border border-gray-200">
             Tap to view in Maps
           </div>
        </div>

        {/* Transport Accordion */}
        <div className="max-w-md mx-auto">
          <Accordion items={TRANSPORT_DATA} />
        </div>
      </FadeIn>
    </section>
  );
};

export default MapSection;