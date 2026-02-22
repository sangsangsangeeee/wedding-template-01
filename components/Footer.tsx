import { useEffect } from 'react';
import { Share2 } from 'lucide-react';
import { WEDDING_DATA } from '../constants'; // For getting names or details
import heroImage from '../assets/hero.jpeg';

const Footer = () => {
  useEffect(() => {
    // Initialize Kakao SDK
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('8452c00798665458facfad008d9104fc');
    }
  }, []);

  const handleShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `${WEDDING_DATA.groom.name} ♥ ${WEDDING_DATA.bride.name} 결혼합니다`,
          description: '저희의 소중한 순간에 함께 해주세요.',
          imageUrl: `${window.location.origin}${heroImage}`, // Use actual hero image
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '청첩장 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    } else {
      alert('카카오톡 공유를 지원하지 않거나 스크립트를 불러오지 못했습니다.');
    }
  };

  return (
    <footer className='py-16 bg-cream text-center border-t border-gold/20'>
      <div className='mb-8'>
        <button
          onClick={handleShare}
          className='inline-flex items-center gap-2 px-8 py-3 bg-white border border-gold/30 text-charcoal text-sm tracking-widest font-myeongjo hover:bg-cream transition-colors shadow-sm rounded-sm'
        >
          <Share2 className='w-4 h-4 text-gold' />
          카카오톡으로 공유하기
        </button>
      </div>
      <p className='text-gold/60 font-serif text-xs tracking-widest uppercase'>감사합니다.</p>
      <p className='text-gray-300 text-[10px] mt-2 font-serif'>Designed with Myeonang</p>
    </footer>
  );
};

export default Footer;
