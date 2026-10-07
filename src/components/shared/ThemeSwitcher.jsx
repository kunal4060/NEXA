import React, { useEffect, useState } from 'react';
import { Palette, Check } from 'lucide-react';

const THEMES = [
  { id: 'violet', label: 'Violet', dot: '#8b5cf6' },
  { id: 'cyan', label: 'Cyan', dot: '#22d3ee' },
  { id: 'amber', label: 'Amber', dot: '#f59e0b' },
  { id: 'emerald', label: 'Emerald', dot: '#10b981' },
  { id: 'rose', label: 'Rose', dot: '#f43f5e' },
  { id: 'red', label: 'Red', dot: '#ef4444' },
];

const STORAGE_KEY = 'nexa-theme';

function applyTheme(id) {
  const root = document.documentElement;
  if (id === 'violet') {
    root.removeAttribute('data-theme'); // violet is the :root default
  } else {
    root.setAttribute('data-theme', id);
  }
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch (e) {
    /* storage unavailable — theme still applies for this session */
  }
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('violet');

  // Restore saved theme on mount
  useEffect(() => {
    let saved = 'violet';
    try {
      saved = localStorage.getItem(STORAGE_KEY) || 'violet';
    } catch (e) {
      /* ignore */
    }
    if (!THEMES.some((t) => t.id === saved)) saved = 'violet';
    setActive(saved);
    applyTheme(saved);
  }, []);

  const pick = (id) => {
    setActive(id);
    applyTheme(id);
    setOpen(false);
  };

  const activeDot = THEMES.find((t) => t.id === active)?.dot || '#8b5cf6';

  return (
    <div className="fixed left-4 bottom-20 md:bottom-6 z-40 flex flex-col items-start gap-2">
      {open && (
        <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl animate-fadeIn">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2 px-1">
            Accent
          </div>
          <div className="flex items-center gap-2">
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                title={t.label}
                aria-label={`${t.label} theme`}
                onClick={() => pick(t.id)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                  active === t.id ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : 'ring-1 ring-white/20'
                }`}
                style={{ backgroundColor: t.dot }}
              >
                {active === t.id && <Check className="w-4 h-4 text-white drop-shadow" />}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        title="Change accent color"
        aria-label="Change accent color"
        onClick={() => setOpen((v) => !v)}
        className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/25 transition-all shadow-lg"
      >
        <Palette className="w-5 h-5" style={{ color: activeDot }} />
      </button>
    </div>
  );
}
