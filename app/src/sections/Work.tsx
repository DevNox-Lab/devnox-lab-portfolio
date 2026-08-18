import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  name: string;
  location: string;
  countryCode: string;
  summary: string;
  stack: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Cars365 Studio",
    location: "Dubai, UAE",
    countryCode: "AE",
    summary: 'A polished automotive brand and studio experience designed for discovery, trust, and conversions.',
    stack: 'Brand + Web',
    image: "/images/Cars365%20Portfolio%20Poster%20Alt.png",
    url: "https://cars365studio.com/"
  },
  {
    id: 2,
    name: "Let's Celebrate",
    location: "Remote / Global",
    countryCode: "GLOBAL",
    summary: 'A React Native event commerce app with buyer and seller flows, product discovery, bookings, and Stripe-powered checkout.',
    stack: 'Mobile + Commerce',
    image: "/images/Let_s Celebrate App Poster Alt.png",
    url: "https://github.com/TalhaZubair-debuger/lets-celebrate-front-end"
  },
  {
    id: 3,
    name: "Hostel Information System",
    location: "Remote / Global",
    countryCode: "GLOBAL",
    summary: 'An Expo-based hostel booking platform with user and seller flows, hostel discovery, favorites, messaging, and Stripe checkout.',
    stack: 'Mobile + Booking',
    image: "/images/Hostel System Poster Alt.png",
    url: "https://github.com/TalhaZubair-debuger/Hostel-Information-System-App-frontend"
  },
];

const getFlag = (code: string) => {
  const flags: Record<string, string> = {
    US: '🇺🇸',
    IE: '🇮🇪',
    BR: '🇧🇷',
    AE: '🇦🇪',
    GLOBAL: '🌎',
  };
  return flags[code] || '🌎';
};

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-header', {
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

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="work-header text-center mb-12 sm:mb-16">
          <p className="text-teal-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            Selected projects
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight">
            Case Study
          </h2>
          <p className="mt-4 text-white/55 text-sm sm:text-base max-w-2xl mx-auto">
            A live brand and digital experience delivered for a modern automotive studio.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group flex h-full min-h-[560px] flex-col bg-dark-50 rounded-2xl overflow-hidden border border-white/5 hover:border-teal-400/20 transition-all duration-500 card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-50 via-transparent to-transparent opacity-60" />
                
                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-1 flex-col">
                <div className="flex items-start justify-between mb-2 gap-3">
                  <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-teal-400 transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-white/30 group-hover:text-teal-400 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                
                <p className="text-white/40 text-sm mb-3 flex items-center gap-2 min-h-[1.5rem]">
                  <span>{getFlag(project.countryCode)}</span>
                  {project.location}
                </p>
                
                <p className="text-white/55 text-sm leading-relaxed mb-3 flex-1 min-h-[72px]">{project.summary}</p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/30 pt-2 border-t border-white/5 mt-auto">
                  <span>Service line: {project.stack}</span>
                  <span>Delivered by: DevNox Lab</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
