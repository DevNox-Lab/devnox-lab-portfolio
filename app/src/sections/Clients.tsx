import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { id: 1, name: 'Dropbox' },
  { id: 2, name: 'GitHub' },
  { id: 3, name: 'Banco do Brasil' },
  { id: 4, name: 'Maven' },
  { id: 5, name: 'Finsweet' },
  { id: 6, name: 'Husky' },
];

// Simple text-based logos (no actual logo images needed)
const ClientLogo = ({ name }: { name: string }) => {
  const logos: Record<string, React.ReactNode> = {
    Dropbox: (
      <svg viewBox="0 0 120 30" className="h-6 sm:h-8 w-auto fill-white/60 hover:fill-white transition-colors">
        <text x="0" y="22" className="text-[20px] font-semibold">Dropbox</text>
      </svg>
    ),
    GitHub: (
      <svg viewBox="0 0 120 30" className="h-6 sm:h-8 w-auto fill-white/60 hover:fill-white transition-colors">
        <text x="0" y="22" className="text-[20px] font-semibold">GitHub</text>
      </svg>
    ),
    'Banco do Brasil': (
      <svg viewBox="0 0 180 30" className="h-6 sm:h-8 w-auto fill-white/60 hover:fill-white transition-colors">
        <text x="0" y="22" className="text-[18px] font-semibold">Banco do Brasil</text>
      </svg>
    ),
    Maven: (
      <svg viewBox="0 0 100 30" className="h-6 sm:h-8 w-auto fill-white/60 hover:fill-white transition-colors">
        <text x="0" y="22" className="text-[20px] font-semibold">Maven</text>
      </svg>
    ),
    Finsweet: (
      <svg viewBox="0 0 120 30" className="h-6 sm:h-8 w-auto fill-white/60 hover:fill-white transition-colors">
        <text x="0" y="22" className="text-[20px] font-semibold">Finsweet</text>
      </svg>
    ),
    Husky: (
      <svg viewBox="0 0 100 30" className="h-6 sm:h-8 w-auto fill-white/60 hover:fill-white transition-colors">
        <text x="0" y="22" className="text-[20px] font-semibold">Husky</text>
      </svg>
    ),
  };

  return logos[name] || <span className="text-white/60 font-semibold text-lg">{name}</span>;
};

export default function Clients() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.clients-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="clients-header text-center mb-10 sm:mb-14">
          <p className="text-teal-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-2">
            Trusted by teams
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white">
            Brands and founders we have supported
          </h2>
          <p className="mt-3 text-white/55 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We collaborate with product teams, startups, and established companies that care about execution quality and delivery speed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center">
            <p className="text-2xl sm:text-3xl font-semibold text-white">3+</p>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-1">Years industrial experience</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center">
            <p className="text-2xl sm:text-3xl font-semibold text-white">6</p>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-1">Core service lines</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center">
            <p className="text-2xl sm:text-3xl font-semibold text-white">Global</p>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-1">Delivery footprint</p>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="marquee">
            <div className="marquee-content flex items-center gap-12 sm:gap-16 px-8">
              {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.id}-${i}`}
                  className="flex-shrink-0 px-6 sm:px-8 py-4 glass-light rounded-xl border border-white/5 hover:border-teal-400/20 transition-colors"
                >
                  <ClientLogo name={client.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
