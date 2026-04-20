import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Partner {
  id: number;
  name: string;
  role: string;
  initials: string;
}

const partners: Partner[] = [
  { id: 1, name: 'Thiago Lourenço', role: 'UI Designer / Webflow developer', initials: 'TL' },
  { id: 2, name: 'Luis Guilherme Rosa', role: 'Motion Graphics Designer / Murog', initials: 'LG' },
  { id: 3, name: 'Carlos França', role: 'Software Engineer', initials: 'CF' },
  { id: 4, name: 'Vinícius Koetz', role: 'Webflow Developer', initials: 'VK' },
  { id: 5, name: 'Leo Fontana', role: 'UI Designer / Webflow Developer', initials: 'LF' },
  { id: 6, name: 'Zé Matias', role: 'Analytics / SEO Consultant', initials: 'ZM' },
  { id: 7, name: 'André Fuentes', role: 'Webflow Developer / JS Developer', initials: 'AF' },
  { id: 8, name: 'Breno Daroz', role: 'UI Designer / Webflow Developer', initials: 'BD' },
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 300;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.partners-header', {
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

      gsap.from('.partner-card', {
        scrollTrigger: {
          trigger: '.partners-scroll',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="partners-header flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight mb-4">
              Partners
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl leading-relaxed">
              With a decade of professional experience and teaching Webflow, I have cultivated valuable 
              connections with skilled professionals throughout my journey. With these connections, I am 
              well-prepared to deliver exceptional website solutions for your company.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'border-white/20 text-white hover:border-teal-400 hover:text-teal-400'
                  : 'border-white/5 text-white/20 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'border-white/20 text-white hover:border-teal-400 hover:text-teal-400'
                  : 'border-white/5 text-white/20 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Partners scroll container */}
        <div
          ref={scrollContainerRef}
          className="partners-scroll flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="partner-card flex-shrink-0 w-64 sm:w-72 group"
            >
              {/* Avatar placeholder */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-dark-50 to-dark-100 border border-white/5 group-hover:border-teal-400/20 transition-all duration-500 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-500/10 transition-colors">
                    <span className="text-3xl sm:text-4xl font-light text-white/30 group-hover:text-teal-400 transition-colors">
                      {partner.initials}
                    </span>
                  </div>
                </div>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <h3 className="text-white font-medium text-base sm:text-lg mb-1 group-hover:text-teal-400 transition-colors">
                {partner.name}
              </h3>
              <p className="text-white/40 text-xs sm:text-sm uppercase tracking-wide">
                {partner.role}
              </p>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-6 h-px bg-white/5 relative">
          <div 
            className="absolute top-0 left-0 h-full bg-teal-400/30 transition-all duration-300"
            style={{ width: '30%' }}
          />
        </div>
      </div>
    </section>
  );
}
