import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, BrainCircuit, MessageCircle, Sparkles } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

const capabilityPills = ['Web Platforms', 'Mobile Apps', 'AI Workflows', 'Shopify', 'WordPress'];

const signalMetrics = [
  { value: '3+', label: 'Years shipping' },
  { value: '5', label: 'Core service lanes' },
  { value: '24/7', label: 'Execution mindset' },
];

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

      gsap.from('.hero-metric', {
        opacity: 0,
        y: 16,
        duration: 0.5,
        delay: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });
      
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.92,
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,229,201,0.14),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(163,230,53,0.1),transparent_24%)]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] hero-grid-pan"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),transparent_18%,transparent_82%,rgba(0,0,0,0.45))]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-start">
          {/* Left: Content */}
          <div ref={contentRef} className="order-1 text-center lg:text-left">
            <div className="hero-label inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.28em] text-teal-300 mb-5 sm:mb-7">
              <Sparkles className="h-3.5 w-3.5" />
              Software agency for ambitious teams
            </div>

            <h1 className="hero-title max-w-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light text-white leading-[0.95] mb-5 sm:mb-7 tracking-tight">
              We engineer
              <span className="block font-semibold text-gradient">bold digital systems</span>
              <span className="block text-white/82">that scale like products.</span>
            </h1>

            <p className="hero-desc text-white/65 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              DevNox Lab builds conversion-focused websites, mobile apps, AI workflows, and commerce systems with the speed of a startup team and the discipline of a production engineering partner.
            </p>

            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-7 sm:mb-9">
              {capabilityPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-white/65"
                >
                  {pill}
                </span>
              ))}
            </div>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5545991134020"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-teal-400/95 hover:bg-teal-300 rounded-full text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,229,201,0.2)]"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">Book a discovery call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white transition-all duration-300"
              >
                <BrainCircuit className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-medium">See how we build</span>
              </a>
            </div>

            <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto lg:mx-0">
              {signalMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="hero-metric rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-2xl sm:text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/45">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Brand visual */}
          <div className="relative flex justify-center lg:justify-end order-2">
            <div ref={imageRef} className="relative">
              <div className="relative w-[20rem] h-[28rem] sm:w-[26rem] sm:h-[31rem] lg:w-[31rem] lg:h-[34rem] rounded-[2rem] overflow-hidden border border-white/10 bg-[linear-gradient(160deg,rgba(8,12,12,0.98),rgba(4,4,4,0.94))] shadow-[0_0_120px_rgba(0,229,201,0.08)]">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }} />
                <div className="hero-scan-line absolute inset-x-6 top-24 h-px bg-gradient-to-r from-transparent via-teal-300/80 to-transparent" />
                <div className="absolute -top-16 right-12 h-40 w-40 rounded-full bg-teal-400/18 blur-3xl" />
                <div className="absolute bottom-12 left-8 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
                    DevNox Lab
                  </span>
                  <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-teal-300">
                    Live build mode
                  </span>
                </div>

                <div className="absolute inset-0 p-6 sm:p-7">
                  <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
                    <div className="pt-12">
                      <p className="text-[11px] uppercase tracking-[0.38em] text-white/40">
                        Product engineering interface
                      </p>
                      <div className="mt-5 flex items-end gap-4">
                        <div>
                          <BrandLogo className="h-16 sm:h-20 w-auto" />
                          <p className="mt-2 text-sm text-white/55 max-w-[13rem] leading-relaxed">
                            Engineering sharper launches, cleaner systems, and faster iteration loops.
                          </p>
                        </div>
                        <div className="hidden sm:block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Status</p>
                          <p className="mt-2 text-sm font-medium text-teal-300">Shipping high-signal builds</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                      <div className="absolute h-[17rem] w-[17rem] rounded-full border border-white/10" />
                      <div className="absolute h-[12rem] w-[12rem] rounded-full border border-teal-400/20" />
                      <div className="absolute h-[8rem] w-[8rem] rounded-full border border-sky-400/20" />

                      <div className="hero-orbit-ring absolute h-[17rem] w-[17rem] rounded-full border border-transparent">
                        <span className="hero-orbit-dot absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(94,234,212,0.7)]" />
                      </div>
                      <div className="hero-orbit-ring hero-orbit-ring-reverse absolute h-[12rem] w-[12rem] rounded-full border border-transparent">
                        <span className="hero-orbit-dot absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(125,211,252,0.7)]" />
                      </div>

                      <svg viewBox="0 0 360 250" className="relative w-full max-w-[22rem] opacity-95">
                        <path
                          d="M18 168C58 116 89 97 126 99C170 101 184 154 222 159C251 162 286 150 338 108"
                          fill="none"
                          stroke="rgba(45,212,191,0.88)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          className="hero-path-draw"
                        />
                        <path
                          d="M42 194C102 147 146 133 190 140C233 146 264 186 322 181"
                          fill="none"
                          stroke="rgba(255,255,255,0.62)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="8 12"
                          className="hero-path-drift"
                        />
                        <path
                          d="M80 59C97 43 123 43 140 59C157 76 157 102 141 119C124 136 97 136 80 120"
                          fill="none"
                          stroke="rgba(163,230,53,0.85)"
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                        <text x="178" y="92" fill="rgba(255,255,255,0.92)" fontSize="58" fontWeight="700" letterSpacing="8">
                          AI
                        </text>
                        <text x="180" y="132" fill="rgba(255,255,255,0.4)" fontSize="12" letterSpacing="6">
                          PIPELINES  /  APPS  /  COMMERCE
                        </text>
                      </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Active stack</p>
                        <p className="mt-2 text-sm text-white/75 leading-6">React</p>
                        <p className="text-sm text-white/75 leading-6">Automation</p>
                        <p className="text-sm text-white/75 leading-6">Commerce</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Output mode</p>
                        <p className="mt-2 text-sm font-medium text-white">Fast MVPs</p>
                        <p className="text-sm font-medium text-white">Production systems</p>
                        <p className="text-sm font-medium text-teal-300">Scale-ready delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div
                ref={badgeRef}
                className="absolute -bottom-6 left-5 sm:left-auto sm:-left-6 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-lg backdrop-blur-md"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Fast lanes</p>
                <p className="mt-1 text-sm font-medium text-white">Launch sites, AI flows, and custom builds</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
