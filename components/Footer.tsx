import { Share2 } from 'lucide-react';

const Footer = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Eternal Promise - Wedding Invitation',
        text: 'You are invited to our wedding.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Link copied to clipboard!');
    }
  };

  return (
    <footer className="py-16 bg-cream text-center border-t border-gold/20">
      <div className="mb-8">
        <button 
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white text-sm tracking-widest uppercase font-serif hover:bg-gold/90 transition-colors shadow-lg"
        >
          <Share2 className="w-4 h-4" />
          Share Invitation
        </button>
      </div>
      <p className="text-gold/60 font-serif text-xs tracking-widest uppercase">
        Eternal Promise
      </p>
      <p className="text-gray-300 text-[10px] mt-2 font-serif">
        Designed with Love
      </p>
    </footer>
  );
};

export default Footer;