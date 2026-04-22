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
    name: "Octogatos",
    location: "San Francisco - United States",
    countryCode: "US",
    summary: 'Conversion-focused website with strong storytelling and motion.',
    stack: 'Web + UX',
    image: "/images/project-octogatos.jpg",
    url: "https://octogatos-project.webflow.io/"
  },
  {
    id: 2,
    name: "Protex AI",
    location: "Limerick, Ireland",
    countryCode: "IE",
    summary: 'B2B product site crafted for clarity, trust, and lead generation.',
    stack: 'Web + Product',
    image: "/images/project-protex.jpg",
    url: "https://protex-ai-project.webflow.io/"
  },
  {
    id: 3,
    name: "XB Fulfillment",
    location: "Los Angeles - United States",
    countryCode: "US",
    summary: 'Operations-centric platform presence built for enterprise audiences.',
    stack: 'Web + CMS',
    image: "/images/project-xbfulfillment.jpg",
    url: "https://xb-fulfillment-project.webflow.io/"
  },
  {
    id: 4,
    name: "Adaflow",
    location: "São Paulo - Brazil",
    countryCode: "BR",
    summary: 'Clean digital product narrative supported by fast, responsive UI.',
    stack: 'Product + Frontend',
    image: "/images/project-adaflow.jpg",
    url: "https://adaflow-project.webflow.io/"
  },
  {
    id: 5,
    name: "Raise",
    location: "San Francisco - United States",
    countryCode: "US",
    summary: 'Modern growth website aligned to launch velocity and conversion goals.',
    stack: 'Growth + Web',
    image: "/images/project-raise.jpg",
    url: "https://raise-website-project.webflow.io"
  },
  {
    id: 6,
    name: "Deepscribe",
    location: "Berkeley - United States",
    countryCode: "US",
    summary: 'Healthcare-facing experience balancing speed, hierarchy, and trust.',
    stack: 'Web + Brand UX',
    image: "/images/project-deepscribe.jpg",
    url: "https://deepscribe-project.webflow.io/"
  },
];

const getFlag = (code: string) => {
  const flags: Record<string, string> = {
    US: '🇺🇸',
    IE: '🇮🇪',
    BR: '🇧🇷',
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
            Case Studies
          </h2>
          <p className="mt-4 text-white/55 text-sm sm:text-base max-w-2xl mx-auto">
            A sample of software and digital experiences delivered for startups and growth-stage teams.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block bg-dark-50 rounded-2xl overflow-hidden border border-white/5 hover:border-teal-400/20 transition-all duration-500 card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-50 via-transparent to-transparent opacity-60" />
                
                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-teal-400 transition-colors">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-teal-400 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                
                <p className="text-white/40 text-sm mb-3 flex items-center gap-2">
                  <span>{getFlag(project.countryCode)}</span>
                  {project.location}
                </p>
                
                <p className="text-white/55 text-sm leading-relaxed mb-3">{project.summary}</p>

                <div className="flex flex-wrap gap-x-4 text-xs text-white/30">
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
