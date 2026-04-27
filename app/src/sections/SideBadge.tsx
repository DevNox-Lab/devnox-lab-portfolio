import { useEffect, useRef } from 'react';

const tickerItems = [
  'DevNox Lab - ',
  'Product Engineering - ',
  'Web Platforms - ',
  'Mobile Apps - ',
  'AI Workflows - ',
  'Shopify - ',
  'WordPress - ',
];

export default function SideBadge() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const ticker = tickerRef.current;
      if (ticker) {
        const halfHeight = ticker.scrollHeight / 2;
        offsetRef.current = (window.scrollY * 0.45) % halfHeight;

        ticker.style.transform = `translateY(${-offsetRef.current}px)`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <aside className="hidden lg:flex fixed right-0 top-0 h-screen z-30 pointer-events-none">
      {/* <div className="relative h-full w-[56px] border-l border-white/10 bg-black/35 backdrop-blur-sm"> */}
        {/* <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-teal-400/50 to-transparent" /> */}

        {/* <div className="relative flex h-full flex-col items-center px-2 py-5">
          <div className="h-1.5 w-1.5 rounded-full bg-teal-300/80 shadow-[0_0_10px_rgba(94,234,212,0.6)]" /> */}

          <div className="relative my-4 w-full flex-1 overflow-hidden rounded-lg">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/80 to-transparent z-10" />

            <div className="relative h-full overflow-hidden py-8">
              <div ref={tickerRef} className="flex flex-col items-center gap-3 will-change-transform">
                {[...tickerItems, ...tickerItems].map((item, index) => (
                  <p
                    key={`${item}-${index}`}
                    className="text-white/55 text-[15px] tracking-[0.14em] uppercase leading-none text-center whitespace-nowrap [writing-mode:vertical-rl] [text-orientation:mixed]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
{/* 
          <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
        </div> */}
      {/* </div> */}
    </aside>
  );
}
