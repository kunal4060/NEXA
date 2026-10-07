import { useEffect, useState } from 'react';

const STAGES = [
  { id: 'nia', num: '01', label: 'EXPLORE NIA' },
  { id: 'nia-cognition', num: '02', label: 'INTELLIGENCE', also: 'nia-pipeline' },
  { id: 'nexa-app', num: '03', label: 'NEXA APP' },
  { id: 'features', num: '04', label: 'FEATURES' },
  { id: 'demo', num: '05', label: 'DEMO' },
  { id: 'about', num: '06', label: 'TEAM' },
  { id: 'download', num: '07', label: 'GET NEXA' },
];

export default function JourneyTracker() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const idToStage = {};
    STAGES.forEach((s, i) => {
      idToStage[s.id] = i;
      if (s.also) idToStage[s.also] = i;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = idToStage[e.target.id];
            if (idx !== undefined) setActive(idx);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    const els = [];
    Object.keys(idToStage).forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        els.push(el);
      }
    });

    return () => {
      els.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-30">
      <div className="rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-5 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 uppercase mb-4 text-center">
          Journey
        </div>
        <div className="flex flex-col gap-3.5">
          {STAGES.map((s, i) => {
            const isActive = i === active;
            const isPast = i < active;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="group flex items-center gap-3 text-left"
                title={`${s.num} — ${s.label}`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-400 shadow-[0_0_10px_rgb(var(--accent-400)/0.9)] scale-125'
                      : isPast
                        ? 'bg-accent-500/50'
                        : 'bg-white/15 group-hover:bg-white/30'
                  }`}
                />
                <span
                  className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'
                  }`}
                >
                  {s.num}
                </span>
                <span
                  className={`font-mono text-[9px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isActive ? 'text-accent-300' : 'text-zinc-600 group-hover:text-zinc-400'
                  } ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-4 pt-3 border-t border-white/10 text-center">
          <span className="font-mono text-[9px] tracking-[0.2em] text-accent-400">
            {String(active + 1).padStart(2, '0')}/07
          </span>
        </div>
      </div>
    </div>
  );
}
