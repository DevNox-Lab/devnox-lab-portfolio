import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface AboutPoint {
  id: number;
  text: string;
}

const aboutData: AboutPoint[] = [
  { id: 1, text: "A decade of experience working as a freelance designer and Webflow developer, collaborating with over 100 companies, startups, and digital influencers worldwide." },
  { id: 2, text: "Worked with big companies like Dropbox, GitHub, Banco do Brasil, and Maven Clinic (one of the most innovative companies by FastCompany)." },
  { id: 3, text: "Founder and teacher at Curso de Webflow, the first Webflow course in Brazil with over 400 students." },
  { id: 4, text: "Partner at Finsweet for 6 years, proudly contributing to one of the largest agencies specializing in Webflow globally." },
  { id: 5, text: "Specialized in Digital Marketing, designing and developing pages that sold more than 10 million dollars in Online Courses in Brazil." },
  { id: 6, text: "Creator and certified developer of the Client-First style system, utilized for crafting organized and easily maintainable websites." },
  { id: 7, text: "Experienced with Motion Graphics, After Effects, Lottie files, and Webflow interactions to create visually captivating animations." },
  { id: 8, text: "Master of Business Administration in Digital Innovation and the Future of Business at PUC-RS, preparing myself for the challenges and opportunities of the digital age." },
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

      // Line glow animation
      gsap.from('.line-glow-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        scaleY: 0,
        duration: 1,
        ease: 'power3.out',
        transformOrigin: 'top',
      });

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
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase mb-2">
            About Me
          </p>
        </div>

        <div className="relative">
          {/* Glowing vertical line */}
          <div className="line-glow-container absolute left-4 sm:left-8 top-0 bottom-0 w-px">
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
                  {point.text.includes('Curso de Webflow') ? (
                    <>
                      Founder and teacher at{' '}
                      <a 
                        href="https://cursodewebflow.com.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:underline"
                      >
                        Curso de Webflow
                      </a>
                      , the first Webflow course in Brazil with over 400 students.
                    </>
                  ) : point.text.includes('Finsweet') && point.id === 4 ? (
                    <>
                      Partner at{' '}
                      <a 
                        href="https://finsweet.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:underline"
                      >
                        Finsweet
                      </a>
                      {' '}for 6 years, proudly contributing to one of the largest agencies specializing in Webflow globally.
                    </>
                  ) : point.text.includes('Client-First') ? (
                    <>
                      Creator and certified developer of the{' '}
                      <a 
                        href="https://finsweet.com/client-first" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:underline"
                      >
                        Client-First
                      </a>
                      {' '}style system, utilized for crafting organized and easily maintainable websites.
                    </>
                  ) : (
                    point.text
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
