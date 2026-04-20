import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: 'INSTAGRAM', icon: Instagram, url: 'https://www.instagram.com/evekayser/' },
  { name: 'LINKEDIN', icon: Linkedin, url: 'https://www.linkedin.com/in/evekayser/' },
  { name: 'YOUTUBE', icon: Youtube, url: 'https://www.youtube.com/@EveKayser' },
  { name: 'BEHANCE', icon: ExternalLink, url: 'https://www.behance.net/evekayser' },
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-marquee', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.social-link', {
        scrollTrigger: {
          trigger: '.social-links',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const marqueeText = "Let's Talk - ";
  const repeatCount = 8;

  return (
    <footer ref={sectionRef} className="relative bg-black overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-white/5" />

      {/* Large marquee text */}
      <div className="footer-marquee py-12 sm:py-20 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content whitespace-nowrap">
            {Array.from({ length: repeatCount * 2 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center mx-2 sm:mx-4"
              >
                <span className="text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-medium text-white tracking-tighter">
                  {marqueeText}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="social-links max-w-5xl mx-auto px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/20 rounded-full transition-all duration-300"
            >
              <social.icon className="w-4 h-4 text-white/60 group-hover:text-teal-400 transition-colors" />
              <span className="text-white/70 group-hover:text-white text-xs sm:text-sm font-medium tracking-wider transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-light text-white tracking-tight">
              eve<span className="text-teal-400">kayser</span>
            </span>
            <a 
              href="mailto:hello@evekayser.com"
              className="text-white/40 hover:text-teal-400 text-xs sm:text-sm transition-colors ml-2"
            >
              hello@evekayser.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-xs text-center sm:text-right">
            Kayser Web | 30.289.467/0001-64 &copy; All Rights Reserved
          </p>
        </div>
      </div>

      {/* Side vertical text */}
      <div className="hidden xl:block absolute right-8 bottom-32">
        <p className="text-white/5 text-xs tracking-[0.3em] uppercase [writing-mode:vertical-lr]">
          Webflow Expert • Awwwards Nominee • Client-First Certified •
        </p>
      </div>
    </footer>
  );
}
