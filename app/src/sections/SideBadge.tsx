import { useState, useEffect } from 'react';

const words = [
  'Webflow Expert',
  'Awwwards Nominee',
  'Client-First Certified',
  'Webflow Developer',
];

export default function SideBadge() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled past about section
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        setVisible(rect.top > window.innerHeight * 0.5);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col items-center gap-6">
        {/* Webflow logo circle */}
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
            <path d="M17.802 8.56s-1.946 6.103-2.105 6.607a1460.3 1460.3 0 0 0-.078-4.413C15.454 8.78 14.52 2 14.52 2H10.16v.044s1.13 6.608 1.263 7.065c-.134-.457-1.49-7.065-1.49-7.065V2H5.063l-2.29 8.56h2.727s.972-4.93 1.127-5.69c.067.762.585 5.69.585 5.69h2.81c.152-.608.74-3.39.74-3.39s.433 2.782.587 3.39h2.81s.53-4.93.598-5.69c.156.76 1.127 5.69 1.127 5.69h2.727z"/>
          </svg>
        </div>

        {/* Vertical text */}
        <div className="[writing-mode:vertical-lr] text-white/10 text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
          {words.join(' \u2022 ')} \u2022
        </div>

        {/* Client-First badge */}
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <span className="text-white/50 text-[10px] font-medium">CF</span>
        </div>

        {/* More vertical text */}
        <div className="[writing-mode:vertical-lr] text-white/10 text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
          {words.join(' \u2022 ')} \u2022
        </div>
      </div>
    </div>
  );
}
