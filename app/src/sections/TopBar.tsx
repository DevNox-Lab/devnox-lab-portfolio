import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <BrandLogo className="h-10 sm:h-12 w-auto" />
          </a>

          {/* Right side */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Digital Marketing link */}
            <a
              href="#services"
              className="hidden sm:block text-white/50 hover:text-white text-xs tracking-wide transition-colors"
            >
              Digital Marketing
            </a>

            {/* Availability badge */}
            <div className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 glass rounded-full border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
              </span>
              <span className="text-white/70 text-xs font-medium whitespace-nowrap">
                Available for work
              </span>
            </div>

            {/* Mobile availability dot */}
            <div className="md:hidden relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400" />
            </div>

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-white/70 hover:text-white text-xs transition-colors"
              >
                <span>EN</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 py-1 glass border border-white/10 rounded-lg min-w-[80px]">
                  <button
                    onClick={() => setLangOpen(false)}
                    className="block w-full text-left px-3 py-2 text-xs text-teal-400 hover:bg-white/5 transition-colors"
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLangOpen(false)}
                    className="block w-full text-left px-3 py-2 text-xs text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Portuguese
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
