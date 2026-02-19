
import { differenceInDays, parseISO, format, getDaysInMonth, startOfMonth, getDay } from 'date-fns';
import { Crown } from 'lucide-react';
import { WEDDING_DATA } from '../constants';
import FadeIn from './FadeIn';

const CalendarSection = () => {
  const weddingDate = parseISO(WEDDING_DATA.date);
  const today = new Date();
  const daysLeft = differenceInDays(weddingDate, today);

  // Dynamic calendar calculation
  const daysInMonth = getDaysInMonth(weddingDate);
  const firstDayOfMonth = getDay(startOfMonth(weddingDate)); // 0 = Sunday, 1 = Monday, etc.
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);
  
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <section className="py-24 px-6 bg-cream/50">
      <FadeIn>
        <h2 className="text-center text-gold font-myeongjo text-2xl tracking-widest mb-2">
          {format(weddingDate, 'yyyy')}년 {format(weddingDate, 'M')}월
        </h2>
        <p className="text-center text-charcoal/60 text-sm font-myeongjo mb-10 tracking-widest">
          {format(weddingDate, 'yyyy.MM.dd')} / {weekDays[getDay(weddingDate)]}요일
        </p>

        <div className="max-w-xs mx-auto mb-12">
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 mb-4 text-center">
             {weekDays.map((day, i) => (
               <div key={day} className={`text-xs font-myeongjo ${i === 0 ? 'text-red-400' : 'text-charcoal/70'}`}>
                 {day}
               </div>
             ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-y-6 text-center">
            {blanks.map((b) => <div key={`blank-${b}`} />)}
            
            {days.map((day) => {
              // Calculate correct grid alignment for Sunday check
              const gridIndex = firstDayOfMonth + day - 1;
              const isSunday = gridIndex % 7 === 0;
              const isWeddingDay = day === weddingDate.getDate();

              return (
                <div key={day} className="relative flex items-center justify-center">
                   <span 
                     className={`
                       relative z-10 w-8 h-8 flex items-center justify-center text-sm font-serif
                       ${isSunday ? 'text-red-400' : 'text-charcoal'}
                       ${isWeddingDay ? 'text-white' : ''}
                     `}
                   >
                     {day}
                   </span>
                   {isWeddingDay && (
                     <div className="absolute inset-0 m-auto w-8 h-8 bg-gold rounded-full z-0 shadow-md flex items-center justify-center">
                        <div className="w-9 h-9 border border-gold rounded-full absolute -inset-0.5 animate-pulse"></div>
                     </div>
                   )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Countdown */}
        <div className="text-center border-y border-gold/20 py-8 max-w-sm mx-auto flex flex-col items-center">
           <Crown className="w-6 h-6 text-gold/70 mb-3" strokeWidth={1} />
           <p className="text-charcoal font-myeongjo">
             예식일까지 <span className="text-gold font-bold text-xl mx-1 font-serif">{daysLeft}</span>일 남았습니다
           </p>
           <p className="text-xs text-charcoal/40 mt-2 font-myeongjo">
             두 사람의 시작을 함께해 주세요
           </p>
        </div>
      </FadeIn>
    </section>
  );
};

export default CalendarSection;