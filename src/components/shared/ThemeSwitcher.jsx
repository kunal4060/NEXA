import React, { useEffect, useRef, useState } from 'react';
import { Palette, Check, Shuffle } from 'lucide-react';

const THEMES = [
  { id: 'mission', label: 'Mission', dot: '#22c55e' },
  { id: 'violet', label: 'Violet', dot: '#8b5cf6' },
  { id: 'cyan', label: 'Cyan', dot: '#22d3ee' },
  { id: 'amber', label: 'Amber', dot: '#f59e0b' },
  { id: 'emerald', label: 'Emerald', dot: '#10b981' },
  { id: 'rose', label: 'Rose', dot: '#f43f5e' },
  { id: 'red', label: 'Red', dot: '#ef4444' },
];

const THEME_IDS = THEMES.map((t) => t.id);

const STORAGE_KEY = 'nexa-theme';
const AUTO_KEY = 'nexa-theme-auto';

function applyTheme(id, save = true) {
  const root = document.documentElement;
  if (id === 'mission') {
    root.removeAttribute('data-theme'); // mission is the :root default
  } else {
    root.setAttribute('data-theme', id);
  }
  if (save) {
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch (e) {
      /* storage unavailable — theme still applies for this session */
    }
  }
}

function randomTheme() {
  // First-visit default: always purple (violet) or blue (cyan)
  return Math.random() < 0.5 ? 'violet' : 'cyan';
}

function nextTheme(id) {
  const i = THEME_IDS.indexOf(id);
  return THEME_IDS[(i + 1) % THEME_IDS.length];
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('mission');
  const [auto, setAuto] = useState(true);
  const autoRef = useRef(true);
  const activeRef = useRef('mission');

  const setAutoMode = (v) => {
    autoRef.current = v;
    setAuto(v);
    try {
      localStorage.setItem(AUTO_KEY, v ? '1' : '0');
    } catch (e) {
      /* ignore */
    }
  };

  // Auto-driven change: applies the color but does NOT overwrite the manual choice
  const applyAuto = (id) => {
    activeRef.current = id;
    setActive(id);
    applyTheme(id, false);
  };

  // Init on mount: random color on fresh visit, restore manual pick if user opted out of auto
  useEffect(() => {
    let savedAuto = null;
    let savedTheme = null;
    try {
      savedAuto = localStorage.getItem(AUTO_KEY);
      savedTheme = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
    if (savedAuto === '0' && savedTheme && THEME_IDS.indexOf(savedTheme) !== -1) {
      autoRef.current = false;
      setAuto(false);
      activeRef.current = savedTheme;
      setActive(savedTheme);
      applyTheme(savedTheme, false);
    } else {
      autoRef.current = true;
      setAuto(true);
      applyAuto(randomTheme());
    }
  }, []);

  // Rotate to the next color every 60s while auto mode is on
  useEffect(() => {
    const timer = setInterval(() => {
      if (autoRef.current) {
        applyAuto(nextTheme(activeRef.current));
      }
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Manual pick: stops auto-rotation, choice is saved
  const pick = (id) => {
    setAutoMode(false);
    activeRef.current = id;
    setActive(id);
    applyTheme(id, true);
    setOpen(false);
  };

  // Shuffle toggle: re-enable auto (jump to random) or freeze current as manual
  const toggleAuto = () => {
    if (autoRef.current) {
      setAutoMode(false);
      applyTheme(activeRef.current, true);
    } else {
      setAutoMode(true);
      applyAuto(randomTheme());
    }
  };

  const activeDot = THEMES.find((t) => t.id === active)?.dot || '#22c55e';

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
          <div className="flex items-center justify-between mt-2 px-1">
            <button
              type="button"
              title={auto ? 'Turn off auto-rotate' : 'Auto-rotate colors'}
              aria-label={auto ? 'Turn off auto-rotate' : 'Auto-rotate colors'}
              onClick={toggleAuto}
              className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest transition-colors ${
                auto ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              Auto
            </button>
            {auto && (
              <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                On
              </span>
            )}
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
