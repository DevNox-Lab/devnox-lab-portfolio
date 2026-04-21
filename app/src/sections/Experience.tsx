import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const orbitBadges = [
  { id: 1, name: 'Websites', className: 'orbit', style: { animationDelay: '0s' } },
  { id: 2, name: 'Mobile Apps', className: 'orbit', style: { animationDelay: '-4s' } },
  { id: 3, name: 'AI Solutions', className: 'orbit-reverse', style: { animationDelay: '-8s' } },
  { id: 4, name: 'ML Workflows', className: 'orbit-slow', style: { animationDelay: '-12s' } },
  { id: 5, name: 'Shopify', className: 'orbit-reverse', style: { animationDelay: '-16s' } },
  { id: 6, name: 'WordPress', className: 'orbit', style: { animationDelay: '-20s' } },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Stagger the orbit badges entrance
      gsap.from('.orbit-badge', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-teal-strong opacity-40" />
      
      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Orbiting badges container */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto mb-12 sm:mb-16">
          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-teal-500/10 blur-3xl" />
          </div>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                3<span className="text-teal-400">+</span>
              </span>
            </div>
          </div>

          {/* Orbiting badges */}
          <div className="absolute inset-0">
            {orbitBadges.map((badge, index) => {
              const angle = (360 / orbitBadges.length) * index;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={badge.id}
                  className="orbit-badge absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="glass-light border border-white/10 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-white text-xs sm:text-sm font-medium whitespace-nowrap hover:border-teal-400/30 transition-colors">
                    <span className="flex items-center gap-2">{badge.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Orbit rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-white/5" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border border-white/[0.03]" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white uppercase tracking-wide">
          3+ years of
          <br />
          <span className="font-medium">industrial experience in</span>
          <br />
          web, mobile, AI/ML and commerce
        </h2>

        <p className="mt-5 text-sm sm:text-base text-white/60 max-w-3xl mx-auto leading-relaxed">
          DevNox Lab delivers production-ready websites, mobile apps, AI and ML workflows, plus Shopify and WordPress services built for real business use.
        </p>

        {/* Cursor indicator */}
        <div className="mt-8 flex justify-center">
          <div className="w-4 h-4 text-teal-400 animate-bounce">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <polygon points="8,16 0,0 16,0" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
