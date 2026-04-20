import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on video container
      gsap.from('.video-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
      });

      // Marquee speed based on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          if (marqueeRef.current) {
            const speed = 20 + self.progress * 10;
            marqueeRef.current.style.animationDuration = `${speed}s`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const marqueeText = 'Everton Kayser';
  const repeatCount = 10;

  return (
    <section ref={sectionRef} className="relative py-8 sm:py-16 bg-black overflow-hidden">
      {/* Video container */}
      <div className="video-container relative max-w-6xl mx-auto px-6 mb-8">
        <div className="relative rounded-2xl overflow-hidden bg-dark-100 aspect-video">
          {/* Placeholder for video - using a styled div with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-50 to-dark-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-teal-500/10 hover:border-teal-400/30 transition-all group">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 text-white/60 group-hover:text-teal-400 transition-colors ml-1"
                  fill="currentColor"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <p className="text-white/40 text-sm">Showreel 2024</p>
            </div>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
      </div>

      {/* Marquee text */}
      <div className="relative overflow-hidden py-4 sm:py-6">
        <div
          ref={marqueeRef}
          className="marquee-content whitespace-nowrap"
          style={{ animationDuration: '20s' }}
        >
          {Array.from({ length: repeatCount * 2 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-4 sm:mx-8"
            >
              <span className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-white/90 tracking-tight">
                {marqueeText}
              </span>
              <span className="mx-4 sm:mx-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-teal-500 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
