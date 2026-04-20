import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  detail: string | null;
  link?: { text: string; url: string };
}

const services: Service[] = [
  {
    id: 1,
    number: '01',
    title: 'UI Design',
    description: 'Bring your references, goals, and ideas, and we will design a website that you and your audience will love.',
    detail: 'UI Design and handoff made on Figma.',
  },
  {
    id: 2,
    number: '02',
    title: 'Webflow Development',
    description: "Bring your design from Figma, XD, or any other tool, and we'll turn your layout into a kickass website, super organized and following the top standards of the Webflow market.",
    detail: null,
  },
  {
    id: 3,
    number: '03',
    title: 'Webflow Mentorship',
    description: 'More than 400+ students learned with me how to master the art of Webflow.',
    detail: '* The online course is only available in Portuguese for Brazilians.',
    link: { text: 'Go to Webflow Online Course', url: 'https://cursodewebflow.com.br' },
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-header', {
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

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-teal opacity-30" />
      
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="services-header text-center mb-12 sm:mb-16">
          {/* Spinning badge */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <defs>
                <path
                  id="serviceCirclePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text className="fill-white/30 text-[7px] uppercase tracking-[0.25em]">
                <textPath href="#serviceCirclePath">
                  WEBFLOW DEVELOPER • WEBFLOW DEVELOPER •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/50" />
            </div>
          </div>

          <p className="text-teal-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            How can I help?
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight">
            Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-dark-50 rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-teal-400/20 transition-all duration-500"
            >
              {/* Number */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-teal-400/30" />
                <span className="text-teal-400 text-sm font-medium">{service.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-4 uppercase tracking-wide group-hover:text-teal-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Detail */}
              {service.detail && (
                <p className="text-white/30 text-xs sm:text-sm italic mb-4">
                  {service.detail}
                </p>
              )}

              {/* Link */}
              {service.link && (
                <a
                  href={service.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-400 text-sm hover:underline group/link"
                >
                  <span>{service.link.text}</span>
                  <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <a
            href="https://wa.me/5545991134020"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/30 rounded-full text-white text-sm transition-all duration-300"
          >
            <span>Let's chat on Whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
