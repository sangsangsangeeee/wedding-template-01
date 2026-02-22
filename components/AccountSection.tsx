import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Copy, Check } from 'lucide-react';
import { ACCOUNT_DATA } from '../constants';
import FadeIn from './FadeIn';

const AccountSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (bank: string, account: string, key: string) => {
    const copyText = `${bank} ${account.replace(/-/g, '')}`;
    try {
      await navigator.clipboard.writeText(copyText);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = copyText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <section className='py-20 bg-cream'>
      <FadeIn className='px-6'>
        <h2 className='text-center text-gold font-serif text-xl tracking-widest mb-2'>ACCOUNT</h2>
        <p className='text-center text-charcoal/60 text-sm mb-10 font-myeongjo'>마음 전하실 곳</p>

        <div className='max-w-md mx-auto space-y-4'>
          {ACCOUNT_DATA.map((group, groupIndex) => {
            const isOpen = expandedIndex === groupIndex;
            return (
              <div key={group.side} className='border border-gold/15 rounded-sm bg-white'>
                <button
                  onClick={() => setExpandedIndex(isOpen ? null : groupIndex)}
                  className='w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none'
                >
                  <span className='font-myeongjo text-base tracking-wide text-charcoal'>
                    {group.label}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <div className='px-5 pb-5 space-y-4'>
                        {group.accounts.map((acc, accIndex) => {
                          const key = `${group.side}-${accIndex}`;
                          const isCopied = copiedKey === key;
                          return (
                            <div key={key} className={`${accIndex > 0 ? 'border-t border-gold/10 pt-4' : ''}`}>
                              <div className='flex items-center justify-between mb-1.5'>
                                <div className='flex items-center gap-2'>
                                  <span className='text-xs text-charcoal/50 font-myeongjo'>{acc.role}</span>
                                  <span className='text-sm font-bold text-charcoal font-myeongjo'>{acc.name}</span>
                                </div>
                              </div>
                              <div className='flex items-center justify-between'>
                                <span className='text-sm text-charcoal/70 font-myeongjo tracking-wide'>
                                  {acc.bank} {acc.account}
                                </span>
                                <button
                                  onClick={() => handleCopy(acc.bank, acc.account, key)}
                                  className='inline-flex items-center gap-1 px-3 py-1.5 border border-gold/30 text-xs tracking-widest font-myeongjo hover:bg-cream transition-colors rounded-sm'
                                >
                                  {isCopied ? (
                                    <>
                                      <Check className='w-3 h-3 text-gold' />
                                      <span className='text-gold'>복사완료</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className='w-3 h-3 text-charcoal/50' />
                                      <span className='text-charcoal/70'>복사</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
};

export default AccountSection;
