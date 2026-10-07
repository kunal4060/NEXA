<div align="center">
  <h1>NEXA</h1>
  <h3><i>Mobile-First AI Student Assistant — One Assistant. Two Ways to Think.</i></h3>

  <p>
    <a href="https://kunal4060.github.io/NEXA/"><img src="https://img.shields.io/badge/🌐_Live_Demo-kunal4060.github.io%2FNEXA-8B5CF6?style=for-the-badge" alt="Live Demo"></a>
    <a href="https://drive.google.com/drive/folders/1FTWEF3Nv-DdVrEB-r9dI_ydVPCRpv3xD"><img src="https://img.shields.io/badge/📥_Download_APK-Google_Drive-10B981?style=for-the-badge" alt="Download APK"></a>
  </p>

  <p>
    <img src="https://img.shields.io/github/actions/workflow/status/kunal4060/NEXA/deploy-pages.yml?branch=design-improvements&style=flat-square&label=build" alt="Build Status">
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" alt="React 18">
    <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite" alt="Vite 5">
    <img src="https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat-square&logo=tailwindcss" alt="Tailwind">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License">
  </p>

  <p><b>NEXA</b> is an AI-native student operating system — powered by <b>NIA</b> (NEXA Intelligent Assistance), a dual-engine cognitive architecture that works <b>online and offline</b>.</p>

</div>

---

## 📑 Table of Contents

- [Why NEXA Exists](#-why-nexa-exists)
- [Features](#-features)
- [NIA — The Intelligence](#-nia--the-intelligence)
- [Live Demo](#-live-demo)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Team](#-team)
- [License](#-license)

---

## 💡 Why NEXA Exists

> University isn't overwhelming because the material is hard. It's overwhelming because administrative friction is scattered across a dozen apps.

| Before NEXA 😩 | With NEXA ✨ |
|---|---|
| 5+ apps for timetable, tasks, email, money | One intelligent cockpit |
| Missed deadlines buried in Gmail clutter | NIA distills notices into 3-bullet summaries |
| Manual expense tracking | Natural language: *"I spent ₹180 at Food Street"* |
| Forgetting who owes whom | Visual debt ledger + 1-tap group split |

**Core philosophy:** *Less remembering. Less searching. Less switching. More doing.*

---

## ✨ Features

### 🎓 Academic
- **Timetable OCR** — Upload timetable image/PDF → synced calendar with smart transit reminders
- **Attendance Tracking** — Automatic threshold calculation per subject
- **Exams & Deadlines** — CAT/FAT schedules, assignment tracking, weightage monitoring

### ✅ Productivity
- **AI Task Manager** — Natural language task creation with priority & countdown
- **Smart Calendar** — Zero schedule clashes, integrated reminders
- **University Gmail** — Cluttered notice vs. concise NIA summary

### 💰 Finance
- **Expense Tracker** — Natural language spend parsing
- **Budgets** — Category-wise budget management
- **Borrow / Lend** — Clear visual ledger
- **Shared Expenses** — Interactive group splitter

### 🤖 NIA AI
- **Contextual AI Chat** — Live campus context awareness
- **Smart Notifications** — *"DBMS starts in 10 mins"*, *"DSA due tomorrow"*
- **Semantic Search** — Across documents, emails, tasks

### 📄 Documents
- **Offline PDF Store** — Certificates, ID cards, always available
- **Contextual Search** — Semantic retrieval across everything

---

## 🧠 NIA — The Intelligence

NIA operates across **11 cognitive dimensions** via dual-engine architecture:

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│   STUDENT   │────▶│ DATA+CONTEXT │────▶│ NIA AI PROCESS  │
└─────────────┘     └──────────────┘     └────────┬────────┘
                                                 │
                                    ┌────────────┴────────────┐
                                    │      DUAL ROUTER        │
                                    └────────────┬────────────┘
                                                 │
                        ┌────────────────────────┼────────────────────────┐
                        │                                                 │
              ┌─────────▼─────────┐                             ┌─────────▼─────────┐
              │  MODE A: CLOUD    │                             │ MODE B: OFFLINE   │
              │  Gemini multimodal│                             │ Local intent parse│
              │  Vision & OCR     │                             │ Sub-10ms lookup   │
              │  12 action tools  │                             │ Offline queues    │
              └───────────────────┘                             └───────────────────┘
```

| Capability | Description |
|---|---|
| Understand | Natural student speech → structured intent |
| Analyze | Cross-link dates, entities, amounts, professors |
| Summarize | Long notices → 3-bullet briefs |
| Connect | One email → calendar + tasks + reminders |
| Remind | Proactive, context-aware notifications |

---

## 🌐 Live Demo

**🔗 https://kunal4060.github.io/NEXA/**

Deployed automatically via GitHub Pages on every push to `design-improvements`.

---

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Lucide-Icons-F97316?style=for-the-badge" alt="Lucide">
</p>

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 + custom CSS |
| 3D / Motion | Canvas particle engine, 3D card tilts |
| Icons | Lucide React |
| Typography | Syncopate (display) · Space Grotesk (headings) · JetBrains Mono (labels) |
| CI/CD | GitHub Actions → GitHub Pages |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 9+

### Quick Start

```bash
# 1. Clone
git clone https://github.com/kunal4060/NEXA.git
cd NEXA

# 2. Install
npm ci

# 3. Develop
npm run dev
# → http://localhost:3000

# 4. Build
npm run build
# → dist/
```

---

## 📁 Project Structure

```
NEXA/
├── 📂 src/
│   ├── 📂 components/        # Page sections
│   │   ├── HeroNia.jsx        # Hero with violet soul
│   │   ├── NiaTwoWays.jsx     # Dual-engine (01)
│   │   ├── NiaArchitecture.jsx# Pipeline (02)
│   │   ├── FeaturesShowcase.jsx
│   │   ├── EverythingConnected.jsx
│   │   └── ...
│   ├── 📂 shared/             # Reusable UI
│   │   ├── Card3D.jsx         # 3D tilt cards
│   │   └── ScrollProgress.jsx # Progress bar + back-to-top
│   ├── App.jsx                # Composition root
│   └── index.css              # Tailwind + design tokens
├── 📄 index.html              # Entry + OG/Twitter meta
├── ⚙️ vite.config.js          # base: '/NEXA/'
├── 🎨 tailwind.config.js      # Violet accent theme
└── 🤖 .github/workflows/      # Pages deploy
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Accent | `#8B5CF6` (violet) | CTAs, glows, active states |
| Background | `#000000` | Page base |
| Cards | `white/[0.02]` + violet borders | Glassmorphism |
| Display font | Syncopate | Hero only |
| Heading font | Space Grotesk semibold | Section titles |
| Label font | JetBrains Mono 12px+ | Eyebrow labels |

**Principles:** dark-first · violet energy · glass depth · motion with `prefers-reduced-motion` respect · mobile-first responsive.

---

## 📦 Deployment

Pushing to `design-improvements` triggers GitHub Actions:

1. `npm ci` → `npm run build` → `dist/`
2. `peaceiris/actions-gh-pages` deploys `dist/` → `gh-pages` branch
3. GitHub Pages serves from `gh-pages`

---

## 🗺️ Roadmap

- [x] 12 design improvements (violet system, mobile polish)
- [x] GitHub Pages deployment
- [x] Professional README
- [ ] OG preview image (`og-preview.png`)
- [ ] App screenshots in README
- [ ] Light mode toggle
- [ ] Testimonials section

---

## 🤝 Contributing

We welcome contributions!

1. 🍴 Fork the repo
2. 🌿 Create a branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit (`git commit -m 'feat: add amazing feature'`)
4. 📤 Push (`git push origin feature/amazing-feature`)
5. 🔃 Open a Pull Request

---

## 👥 Team

**Team GLITCHERS** — *Technology designed around the way students actually live, learn and manage their day.*

| Role | Focus |
|---|---|
| Systems Engineers | Architecture & offline AI |
| Interface Designers | Design system & motion |
| AI Researchers | NIA cognitive engine |

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

<div align="center">

### 🌟 Star this repo if NEXA excites you!

**[🌐 Live Demo](https://kunal4060.github.io/NEXA/)** ·
**[📥 Download App](https://drive.google.com/drive/folders/1FTWEF3Nv-DdVrEB-r9dI_ydVPCRpv3xD)** ·
**[🐛 Issues](https://github.com/kunal4060/NEXA/issues)** ·
**[🔀 Pull Requests](https://github.com/kunal4060/NEXA/pulls)**

*Built with 💜 by Team GLITCHERS*

</div>
