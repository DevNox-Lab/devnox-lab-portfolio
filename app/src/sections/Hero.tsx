import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from('.hero-label', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out',
      });
      
      gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });
      
      gsap.from('.hero-desc', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.6,
        ease: 'power3.out',
      });
      
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.8,
        ease: 'power3.out',
      });
      
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
      
      gsap.from(badgeRef.current, {
        opacity: 0,
        scale: 0.5,
        rotation: -180,
        duration: 0.8,
        delay: 0.6,
        ease: 'back.out(1.7)',
      });

      // Floating animation for badge
      gsap.to(badgeRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 15;
      const y = (clientY / innerHeight - 0.5) * 15;
      
      gsap.to(imageRef.current, {
        x,
        y,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-teal opacity-60" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Portrait */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div ref={imageRef} className="relative">
              {/* Portrait image */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Eve Kayser - Web Developer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Spinning badge */}
              <div
                ref={badgeRef}
                className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-28 sm:h-28"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-white text-[8px] uppercase tracking-[0.3em]">
                    <textPath href="#circlePath">
                      WEBFLOW DEVELOPER • WEBFLOW DEVELOPER •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                      <path d="M17.802 8.56s-1.946 6.103-2.105 6.607a1460.3 1460.3 0 0 0-.078-4.413C15.454 8.78 14.52 2 14.52 2H10.16v.044s1.13 6.608 1.263 7.065c-.134-.457-1.49-7.065-1.49-7.065V2H5.063l-2.29 8.56h2.727s.972-4.93 1.127-5.69c.067.762.585 5.69.585 5.69h2.81c.152-.608.74-3.39.74-3.39s.433 2.782.587 3.39h2.81s.53-4.93.598-5.69c.156.76 1.127 5.69 1.127 5.69h2.727z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="order-1 lg:order-2 text-center lg:text-left">
            <p className="hero-label text-teal-400 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 sm:mb-6">
              Designer & Webflow Expert
            </p>
            
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-4 sm:mb-6">
              Agency-level web{' '}
              <span className="font-medium">development</span> services at{' '}
              <span className="font-medium">freelancer</span> rates
            </h1>
            
            <p className="hero-desc text-white/60 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8">
              My mission is to design and develop a website that you and your audience love
              <span className="inline-block ml-1 animate-pulse">.</span>
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5545991134020"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/30 rounded-full text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-medium">Happy to chat on Whatsapp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Side vertical text */}
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2">
        <p className="text-white/10 text-xs tracking-[0.3em] uppercase [writing-mode:vertical-lr]">
          Webflow Expert • Awwwards Nominee • Client-First Certified •
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
