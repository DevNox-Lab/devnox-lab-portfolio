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
          {/* Left: Brand visual */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div ref={imageRef} className="relative">
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-[2rem] overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.18),_transparent_30%),linear-gradient(160deg,_rgba(10,10,10,0.98),_rgba(5,5,5,0.92))] shadow-[0_0_80px_rgba(45,212,191,0.08)]">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }} />
                <div className="absolute -top-12 right-8 h-32 w-32 rounded-full bg-teal-400/20 blur-3xl" />
                <div className="absolute bottom-8 left-6 h-28 w-28 rounded-full bg-lime-300/10 blur-3xl" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
                    DevNox Lab
                  </span>
                  <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-teal-300">
                    Build. Launch. Scale.
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
                  <div className="mt-14 space-y-4">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-white/45">
                      Software Services Studio
                    </p>
                    <div className="max-w-[15rem] space-y-2">
                      <p className="text-4xl sm:text-5xl font-semibold leading-none text-white">
                        Digital systems with bite.
                      </p>
                      <p className="text-sm leading-relaxed text-white/55">
                        Websites, mobile apps, AI and ML workflows, plus Shopify and WordPress delivery under one roof.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <svg viewBox="0 0 320 220" className="w-full h-auto opacity-90">
                      <path
                        d="M18 164C48 114 82 88 126 94C167 100 176 153 215 157C246 160 273 143 302 113"
                        fill="none"
                        stroke="rgba(45,212,191,0.9)"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M33 189C88 130 124 121 169 132C212 142 231 188 287 182"
                        fill="none"
                        stroke="rgba(255,255,255,0.72)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="10 12"
                      />
                      <path
                        d="M66 48C83 34 112 35 128 51C145 68 145 97 128 115C111 133 83 133 66 117"
                        fill="none"
                        stroke="rgba(163,230,53,0.85)"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <text x="158" y="82" fill="rgba(255,255,255,0.88)" fontSize="54" fontWeight="700" letterSpacing="6">
                        DVX
                      </text>
                    </svg>

                    <div className="absolute right-0 top-0 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-sm">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Stack</p>
                      <p className="mt-2 text-xs leading-6 text-white/70">Web</p>
                      <p className="text-xs leading-6 text-white/70">Mobile</p>
                      <p className="text-xs leading-6 text-white/70">AI / ML</p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div
                ref={badgeRef}
                className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-black/75 px-4 py-3 shadow-lg backdrop-blur-md"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Fast lanes</p>
                <p className="mt-1 text-sm font-medium text-white">Shopify + WordPress + custom builds</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="order-1 lg:order-2 text-center lg:text-left">
            <p className="hero-label text-teal-400 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 sm:mb-6">
              Web, mobile, AI and commerce systems
            </p>
            
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-4 sm:mb-6">
              Bold digital products,{' '}
              <span className="font-medium">built end to end</span>
            </h1>
            
            <p className="hero-desc text-white/60 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8">
              We craft websites, mobile apps, AI and ML workflows, plus Shopify and WordPress solutions that turn sharp ideas into working products
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
