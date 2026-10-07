<div align="center">

# NEXA — Mobile-First AI Student Assistant

### *One Assistant. Two Ways to Think.*

[![Live Demo](https://img.shields.io/badge/Live_Demo-kunal4060.github.io%2FNEXA-8B5CF6?style=for-the-badge&logo=github)](https://kunal4060.github.io/NEXA/)
[![Build](https://img.shields.io/badge/build-passing-10B981?style=for-the-badge)](https://github.com/kunal4060/NEXA/actions)
[![License](https://img.shields.io/badge/license-MIT-3B82F6?style=for-the-badge)](LICENSE)

**NEXA** is an AI-native student operating system for college life — powered by **NIA** (NEXA Intelligent Assistance), a dual-engine cognitive architecture that works online *and* offline.

🔗 **Live Website:** https://kunal4060.github.io/NEXA/

</div>

---

## ✨ What is NEXA?

University life isn't overwhelming because the material is hard — it's overwhelming because administrative friction is scattered across a dozen apps. NEXA unifies everything into one intelligent, mobile-first cockpit:

| Pillar | What NIA does |
|--------|---------------|
| 📧 University Gmail | Distills cluttered notices into 3-bullet summaries |
| 🗓️ Timetable | OCR upload → synced calendar with smart reminders |
| ✅ Tasks & Deadlines | Natural-language task creation, priority tracking |
| 💰 Finance | Expense parsing ("I spent ₹180 at Food Street"), budgets |
| 🤝 Borrow / Lend | Visual debt ledger, transparent tracking |
| 👥 Shared Expenses | 1-tap group split (₹800 ÷ 4 = ₹200/share) |
| 📄 Documents | Offline PDF store with contextual search |
| 🔔 Notifications | Proactive: "DBMS starts in 10 mins" |

> **Core philosophy:** *Less remembering. Less searching. Less switching. More doing.*

---

## 🧠 NIA — The Intelligence Behind NEXA

NIA operates across **11 cognitive dimensions** through a dual-engine architecture:

- **Mode A — Connected / Cloud:** Gemini multimodal reasoning, Vision & OCR, 12 structured action tools
- **Mode B — Offline / On-Device:** Local intent parsing, sub-10ms timetable lookup, resilient offline action queues

**5-step pipeline:** Student → Data & Context → NIA AI Processing → Dual Router → Personalized Output

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kunal4060/NEXA.git
cd NEXA

# Install dependencies
npm ci

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
# Output: dist/
```

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **3D / Motion:** Custom canvas particle engine, 3D card tilts
- **Icons:** Lucide React
- **Fonts:** Syncopate (display), Space Grotesk (headings), JetBrains Mono (labels)
- **Deployment:** GitHub Pages (via `peaceiris/actions-gh-pages`)

---

## 📁 Project Structure

```
NEXA/
├── src/
│   ├── components/       # Page sections (Hero, Features, Pipeline…)
│   ├── shared/           # Reusable UI (Card3D, ScrollProgress…)
│   ├── index.css         # Tailwind + custom styles
│   └── App.jsx           # Composition root
├── index.html            # Entry + social meta tags
├── vite.config.js        # base: '/NEXA/' for Pages
├── tailwind.config.js
└── .github/workflows/    # Pages deploy workflow
```

---

## 🎨 Design Highlights

- Signature **violet (#8B5CF6)** accent on CTAs, glows, and progress indicators
- Glassmorphism cards with backdrop blur
- Ambient particle constellation canvas (violet-tinted)
- Scroll progress bar + back-to-top button
- Device-aware QR modal (direct download on mobile)
- `prefers-reduced-motion` support & mobile performance guards
- Full keyboard-focus accessibility

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'feat: amazing thing'`)
4. Push and open a Pull Request

---

## 👥 Credits

Built with passion by **Team GLITCHERS** — *technology designed around the way students actually live, learn and manage their day.*

---

<div align="center">

**[🌐 Live Demo](https://kunal4060.github.io/NEXA/)** · **[📥 Download App](https://drive.google.com/drive/folders/1FTWEF3Nv-DdVrEB-r9dI_ydVPCRpv3xD)** · **[🐛 Report Issue](https://github.com/kunal4060/NEXA/issues)**

</div>
