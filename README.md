# Honey Singh — Premium Engineering Portfolio

An editorial, motion-rich personal digital portfolio for **Honey Singh**, pursuing B.Tech in Artificial Intelligence and Data Science. Engineered with modern frontend craftsmanship, modular architecture, responsive typography, and performance-first animations.

---

## 🚀 Key Highlights & Philosophy

- **Sophisticated Dark Aesthetic:** Deep charcoal / obsidian palette (`#0a0a0f`, `#0f0f1a`, `#12121e`), soft white typography, electric blue & violet accents with domain-specific color systems.
- **Modern Typography Hierarchy:** Space Grotesk (headings), Inter (body readability), and JetBrains Mono (technical metadata).
- **Engineering-First Identity:** Showcases software systems, backend architecture, AI/ML integrations, and data science without generic student templates or fabricated claims.
- **Interactive Technical Previews:** High-fidelity interactive graphics simulating vector embeddings, multi-tenant issue tracking, Redis RESP socket commands, and Huffman compression trees.
- **Accessible & Performance-Minded:** Respects `prefers-reduced-motion`, responsive across mobile/tablet/desktop, smooth anchor scrolling, and clean bundle optimization.

---

## 🛠️ Tech Stack

- **Core Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Motion & Micro-interactions:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Space Grotesk, Inter, JetBrains Mono via Google Fonts

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── animations/       # Reusable motion wrappers (FadeInView)
│   ├── layout/           # Global layout elements (Footer)
│   ├── navigation/       # Navbar with scroll progress, active section & mobile drawer
│   ├── projects/         # ProjectCard & bespoke ProjectVisual interactive previews
│   ├── sections/         # Page sections:
│   │   ├── Hero.tsx              # Asymmetric editorial hero with live status badge
│   │   ├── About.tsx             # Natural narrative, traits, personal interests & photo
│   │   ├── Engineering.tsx       # 4 distinct domains (Software, Backend, AI/ML, Data Science)
│   │   ├── SystemInterests.tsx   # "Things I'm exploring" constellation & learning grid
│   │   ├── Projects.tsx          # Featured project showcases & category filter tabs
│   │   ├── InnovationLab.tsx     # Cross-domain convergence ("Where software meets intelligence")
│   │   ├── Journey.tsx           # Chronological growth timeline & current focus
│   │   ├── CodingProfiles.tsx    # LeetCode, GitHub, Kaggle & DSA highlights
│   │   ├── BeyondCode.tsx        # Creative pursuits (sketching, piano/harmonium, music)
│   │   └── Contact.tsx           # Expressive CTA & direct contact channels
│   └── ui/               # SectionHeading, TechTag, Button
├── data/
│   ├── profile.ts        # Central profile information, bio, contact details
│   ├── projects.ts       # All projects, categories, tech tags, and links
│   ├── skills.ts         # Engineering domains and technical learning topics
│   ├── journey.ts        # Career and learning milestone history
│   └── socialLinks.ts    # Centralized external profile links
├── hooks/                # Custom hooks (scroll progress, active section, reduced motion)
├── lib/                  # Framer Motion animation variants & transitions
└── styles/
    └── globals.css       # Tailwind base, typography, scrollbar styling
```

---

## 📸 Personalizing Your Photo & Resume

1. **Profile Picture:**
   - Drop your real portrait image at `public/photo.jpg`. The portfolio is already configured to display it seamlessly in the **About** section with graceful styling and fallback.
2. **Resume:**
   - Place your official PDF at `public/resume.pdf` to enable one-click resume downloads across the navigation bar, hero CTA, coding section, and footer.
3. **Links & Contact:**
   - Edit `src/data/profile.ts` or `src/data/socialLinks.ts` to adjust social handles, email, or availability status.

---

## 💻 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel

This repository includes a production-ready `vercel.json` configured for Vite:

1. Push your code to your GitHub repository (`github.com/Honey-Singh716/...`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository — Vercel will automatically detect Vite and run:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**!

