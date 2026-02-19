import { WEDDING_DATA } from '../constants';
import FadeIn from './FadeIn';

const Greeting = () => {
  return (
    <section className="py-24 px-8 text-center bg-cream relative">
      <FadeIn>
        <h2 className="text-gold font-serif text-xl mb-8 tracking-widest">INVITATION</h2>
        
        <div className="space-y-8 text-charcoal/80 leading-loose text-base font-myeongjo word-keep-all">
          <p>
            두 사람의 마음이 하나가 되어<br />
            평생의 반려자가 되기로 약속했습니다.
          </p>
          <p>
            새로운 시작의 자리에<br />
            소중한 분들을 초대합니다.<br />
            따뜻한 마음으로 축복해 주시면 감사하겠습니다.
          </p>
        </div>

        <div className="mt-16 font-myeongjo text-lg text-charcoal/90 leading-loose">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <div className="whitespace-nowrap">
              <span className="font-bold">{WEDDING_DATA.groom.parents.father}</span> · <span className="font-bold">{WEDDING_DATA.groom.parents.mother}</span>
              <span className="text-sm text-charcoal/60 mx-2">의 {WEDDING_DATA.groom.relation}</span>
              <span className="font-bold text-xl">{WEDDING_DATA.groom.name}</span>
            </div>
            <div className="whitespace-nowrap">
               <span className="font-bold">{WEDDING_DATA.bride.parents.father}</span> · <span className="font-bold">{WEDDING_DATA.bride.parents.mother}</span>
               <span className="text-sm text-charcoal/60 mx-2">의 {WEDDING_DATA.bride.relation}</span>
               <span className="font-bold text-xl">{WEDDING_DATA.bride.name}</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Decorative element */}
      <div className="w-px h-16 bg-gold/50 mx-auto mt-12"></div>
    </section>
  );
};

export default Greeting;