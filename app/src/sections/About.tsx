import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface AboutPoint {
  id: number;
  title: string;
  text: string;
}

const aboutData: AboutPoint[] = [
  {
    id: 1,
    title: 'Discovery and product thinking',
    text: 'We align technical choices with your business outcomes, then define a roadmap that removes guesswork before development starts.',
  },
  {
    id: 2,
    title: 'Modern engineering execution',
    text: 'From marketing sites to custom platforms, we ship maintainable systems with clean architecture, clear ownership, and strong delivery standards.',
  },
  {
    id: 3,
    title: 'AI and workflow automation',
    text: 'We design practical AI and ML workflows that accelerate internal operations, customer support, and data-informed decisions.',
  },
  {
    id: 4,
    title: 'Commerce and CMS acceleration',
    text: 'Shopify and WordPress solutions are delivered with conversion-first structure, scalable content models, and predictable performance.',
  },
  {
    id: 5,
    title: 'Long-term delivery partnership',
    text: 'We stay involved after launch with improvements, iteration cycles, and engineering support so products keep compounding value.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from('.about-title', {
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

      // Keep the guide line synced to scroll so it grows downward and folds back up.
      gsap.fromTo(
        '.line-glow',
        {
          scaleY: 0,
          transformOrigin: 'top',
        },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-list',
            start: 'top 78%',
            end: 'bottom 72%',
            scrub: true,
          },
        }
      );

      // Stagger the list items
      gsap.from('.about-item', {
        scrollTrigger: {
          trigger: '.about-list',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="about-title text-center mb-12 sm:mb-16">
          <p className="text-teal-400 text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            About DevNox Lab
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
            Product-minded engineers building
            <span className="font-medium"> software that performs</span>
          </h2>
          <p className="mt-5 text-white/60 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            We are a software services company with 3+ years of industrial delivery across websites, mobile apps, AI/ML systems, and commerce platforms.
          </p>
        </div>

        <div className="relative">
          {/* Glowing vertical line */}
          <div className="line-glow-container absolute ml-[-40px] sm:left-6 top-0 bottom-0 w-[3px]">
            <div className="w-full h-full line-glow" />
          </div>

          {/* Bio points list */}
          <div className="about-list space-y-0">
            {aboutData.map((point, index) => (
              <div
                key={point.id}
                className="about-item group relative pl-12 sm:pl-20 py-5 sm:py-6 border-b border-white/5 cursor-default"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Number badge */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-teal-500 text-black'
                    : 'bg-white/5 text-white/40 group-hover:bg-white/10'
                }`}>
                  {point.id}
                </div>

                {/* Text */}
                <p className={`text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-300 ${
                  activeIndex === index ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                }`}>
                  <span className="block text-white text-base sm:text-lg font-medium mb-2">{point.title}</span>
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
