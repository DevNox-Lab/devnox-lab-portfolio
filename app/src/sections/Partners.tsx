import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const deliveryPods = [
  {
    id: 1,
    title: 'Product and Strategy',
    detail: 'Discovery, solution architecture, and technical planning before build.',
  },
  {
    id: 2,
    title: 'Design and Frontend',
    detail: 'Interface systems, component libraries, and polished user journeys.',
  },
  {
    id: 3,
    title: 'Backend and Integrations',
    detail: 'API services, data models, and third-party platform integrations.',
  },
  {
    id: 4,
    title: 'AI and Automation',
    detail: 'Workflow automation and AI-enabled processes tailored to operations.',
  },
  {
    id: 5,
    title: 'Commerce and CMS',
    detail: 'Shopify and WordPress delivery for growth-focused digital businesses.',
  },
  {
    id: 6,
    title: 'QA and Continuous Delivery',
    detail: 'Testing, release confidence, and iterative optimization after launch.',
  },
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);

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
          trigger: '.partners-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 28,
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
        <div className="partners-header text-center mb-10 sm:mb-14">
          <p className="text-teal-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            Delivery Model
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight mb-4">
            Specialized Team, One Accountable Partner
          </h2>
          <p className="text-white/55 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            DevNox Lab operates with cross-functional pods so strategy, engineering, design, and operations move in one coordinated workflow.
          </p>
        </div>

        <div className="partners-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {deliveryPods.map((pod) => (
            <div
              key={pod.id}
              className="partner-card rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 group hover:border-teal-400/30 transition-colors"
            >
              <p className="text-white/35 text-xs uppercase tracking-[0.22em] mb-3">Pod {pod.id.toString().padStart(2, '0')}</p>
              <h3 className="text-white text-xl font-medium mb-3 group-hover:text-teal-300 transition-colors">
                {pod.title}
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">{pod.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
