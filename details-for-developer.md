# PunchAi — Developer Details

Last Updated: 2026-02-25  
Doc Version: 1.0.0

## Table of Contents
1. PROJECT OVERVIEW
2. TECH STACK
3. FILE STRUCTURE
4. KEY COMPONENTS
5. ROUTING STRUCTURE
6. API ENDPOINTS
7. STYLING SYSTEM
8. ENVIRONMENT VARIABLES
9. SCRIPTS & COMMANDS
10. DEPENDENCIES
11. DEPLOYMENT NOTES
12. FUTURE SECTIONS (PLACEHOLDER)

---

## 1. PROJECT OVERVIEW
- Project Name: PunchAi
- Description: A single-page marketing website showcasing services for full‑stack development, mobile apps, and AI automation, built with React and Vite, styled with Tailwind CSS, and enhanced with micro‑interactions via Framer Motion.
- Main Purpose/Goal: Present PunchAi’s capabilities and funnel visitors to contact via on-page CTAs and a contact form.
- Target Audience: Prospective clients seeking web, mobile, or AI automation services.

Inline notes:
- SPA structure with section-based navigation; no client-side router.
- Highly animated, mobile-first UI leveraging Tailwind utility classes and Framer Motion.

---

## 2. TECH STACK
- Frontend: React 19 (react, react-dom)
- Styling: Tailwind CSS 3.x with PostCSS and Autoprefixer
- Backend: None in current app; a placeholder server/ directory exists with its own package.json but no start script or source files.
- Database: None in current app
- Authentication: None in current app
- State Management: Local React state only (no Redux/Context)
- Build Tools: Vite 7
- Package Manager: npm (package-lock.json present)
- Deployment: Static-site friendly (Vercel/Netlify/GitHub Pages). See DEPLOYMENT.md.

Inline notes:
- The Contact form uses Formspree (@formspree/react) for submissions; no API layer required for basic contact use cases.
- If a backend is added later (e.g., Express/Mongo via server/), wire it separately and expose environment-based endpoints to the SPA.

---

## 3. FILE STRUCTURE

Project root: /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main

```text
project-root/
├── src/
│   ├── App.jsx                     # Composes page sections (Navbar → Footer)
│   ├── main.jsx                    # React root; mounts <App /> to #root
│   ├── index.css                   # Global styles + Tailwind directives
│   ├── assets/
│   │   └── react.svg               # Example asset (from Vite template)
│   └── components/                 # Self-contained UI sections
│       ├── Navbar.jsx              # Top nav + mobile bottom nav; section scroll
│       ├── Hero.jsx                # Above-the-fold headline and CTA buttons
│       ├── Services.jsx            # Service cards grid with hover/scroll anims
│       ├── Process.jsx             # “Our Process” steps with icons and anims
│       ├── Portfolio.jsx           # Project cards with overlay actions
│       ├── WhyChooseUs.jsx         # Feature highlights grid
│       ├── Contact.jsx             # Contact info + Formspree-powered form
│       └── Footer.jsx              # Footer with social icons
├── public/
│   └── vite.svg                    # Vite favicon
├── index.html                      # SPA entry, loads /src/main.jsx
├── package.json                    # App scripts and dependencies
├── package-lock.json               # npm lockfile
├── vite.config.js                  # Vite configuration (React plugin)
├── tailwind.config.js              # Tailwind theme and content paths
├── postcss.config.js               # PostCSS config (tailwindcss + autoprefixer)
├── eslint.config.js                # ESLint flat config for JS/React
├── README.md                       # Vite template readme
├── DEPLOYMENT.md                   # Detailed deployment guide
├── .gitignore                      # Ignored files (node_modules, dist, etc.)
└── server/                         # Placeholder backend directory (unused)
    ├── package.json                # Express/Mongoose deps; no start script
    └── package-lock.json           # Lockfile for server subdir
```

Inline notes:
- The SPA mounts at #root from index.html and renders all sections in App.jsx.
- Tailwind scans index.html and src/**/* for class usage; custom theme tokens live in tailwind.config.js.

Key references:
- Entry HTML: [index.html](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/index.html)
- Root bootstrap: [main.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/main.jsx)
- App composition: [App.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/App.jsx)

---

## 4. KEY COMPONENTS

Component: Navbar  
- Path: src/components/Navbar.jsx  
- Purpose: Desktop top nav and mobile bottom nav; smooth-scroll to sections; highlights active section on scroll.  
- Props: None  
- Dependencies: framer-motion, react-icons  
- Reference: [Navbar.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/components/Navbar.jsx)

Component: Hero  
- Path: src/components/Hero.jsx  
- Purpose: Hero banner with animated gradients and CTAs.  
- Props: None  
- Dependencies: framer-motion, react-icons  
- Reference: [Hero.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/components/Hero.jsx)

Component: Services  
- Path: src/components/Services.jsx  
- Purpose: Grid of service offerings with hover/scroll animations.  
- Props: None  
- Dependencies: framer-motion, react-icons  
- Reference: [Services.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/components/Services.jsx)

Component: Process  
- Path: src/components/Process.jsx  
- Purpose: Visual timeline of delivery process with animated steps.  
- Props: None  
- Dependencies: framer-motion, react-icons  
- Reference: [Process.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/components/Process.jsx)

Component: Portfolio  
- Path: src/components/Portfolio.jsx  
- Purpose: Project showcase cards with overlay actions.  
- Props: None  
- Dependencies: framer-motion, react-icons  
- Reference: [Portfolio.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/components/Portfolio.jsx)

Component: WhyChooseUs  
- Path: src/components/WhyChooseUs.jsx  
- Purpose: Feature highlights emphasizing strengths (mobile-first, performance, scalability, AI).  
- Props: None  
- Dependencies: framer-motion, react-icons  
- Reference: [WhyChooseUs.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/components/WhyChooseUs.jsx)

Component: Contact  
- Path: src/components/Contact.jsx  
- Purpose: Contact info cards and Formspree-powered contact form with validation errors.  
- Props: None  
- Dependencies: framer-motion, react-icons, @formspree/react  
- Reference: [Contact.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/components/Contact.jsx)

Component: Footer  
- Path: src/components/Footer.jsx  
- Purpose: Footer with brand mark and social icons.  
- Props: None  
- Dependencies: react-icons  
- Reference: [Footer.jsx](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/components/Footer.jsx)

---

## 5. ROUTING STRUCTURE
- Type: Section-based scrolling within a single page (no React Router).
- Sections and IDs (anchor targets):
  - #hero
  - #services
  - #process
  - #portfolio
  - #why-us
  - #contact
- Dynamic Routes: Not applicable.
- Protected Routes: Not applicable.

Inline notes:
- Navbar scrolls to sections via window.scrollTo using section offsets and an 80px offset for the sticky nav.

---

## 6. API ENDPOINTS (if applicable)
- In-app API routes: None.
- External services:
  - Formspree: Contact form posts via @formspree/react useForm("mykdlwpq").
- Authentication: None.
- Request/Response formats: Handled by Formspree library.

TODO:
- If a backend is introduced under server/, define routes here with method, path, payloads, and auth expectations.

---

## 7. STYLING SYSTEM
- CSS Methodology: Utility-first via Tailwind CSS.
- Global Styles: src/index.css (imports Tailwind base/components/utilities and sets global scroll behavior/colors).  
  Reference: [index.css](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/src/index.css)
- Theme/Design Tokens: tailwind.config.js extends:
  - colors.primary: #0F0C29
  - colors.secondary: #302b63
  - colors.accent.blue: #00F5FF
  - colors.accent.purple: #6C63FF
  - colors.accent.violet: #bf5af2
  - fontFamily.sans: Inter, Poppins, sans-serif
  - backgroundImage.hero-gradient: linear-gradient(to right, #6C63FF, #00F5FF)
  Reference: [tailwind.config.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/tailwind.config.js)
- Responsive Breakpoints: Tailwind defaults
  - sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

Inline notes:
- Components rely on Tailwind for spacing, layout, and responsive behavior; Framer Motion adds interaction/scroll animations.

---

## 8. ENVIRONMENT VARIABLES
Current required variables: None.

Used constants in code:
- Formspree form ID is hardcoded in Contact.jsx: useForm("mykdlwpq").

Recommended variables (optional, for future maintainability):
- VITE_FORMSPREE_FORM_ID: Formspree form key (used in Contact.jsx).
- VITE_SITE_TITLE: Site title for index.html/meta (if templating added).
- VITE_API_BASE_URL: If server/ is implemented and exposed to the SPA.

Where used:
- Contact form: src/components/Contact.jsx (replace hardcoded ID with import.meta.env.VITE_FORMSPREE_FORM_ID when introduced).

---

## 9. SCRIPTS & COMMANDS
```bash
npm run dev      # Start Vite dev server with HMR on http://localhost:5173
npm run build    # Production build to dist/ using Vite
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint across the project
```

Inline notes:
- No test script is defined.

---

## 10. DEPENDENCIES

Major runtime dependencies:
- react / react-dom: UI library and DOM renderer.
- framer-motion: Component-level animations and scroll/hover interactions.
- react-icons: Iconography across components.
- @formspree/react: Contact form handling with client-side integration to Formspree.
- clsx: Conditional className helper (present but not currently used in code).
- tailwind-merge: Utility to merge Tailwind class strings (present but not currently used in code).
- lucide-react: Icon set (present but not currently used in code).

Dev dependencies:
- vite: Fast dev server and bundler.
- @vitejs/plugin-react: React plugin with fast refresh.
- tailwindcss, postcss, autoprefixer: Styling pipeline.
- eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals: Linting stack.
- @types/react, @types/react-dom: Types for editor tooling (project uses JS).

Inline notes:
- Some dependencies are not referenced in source yet (clsx, tailwind-merge, lucide-react). Remove if unused or incorporate as needed.

---

## 11. DEPLOYMENT NOTES
- Build Process:
  - Run npm run build; artifacts emitted to dist/.
- Platforms:
  - Vercel/Netlify/GitHub Pages compatible. See [DEPLOYMENT.md](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/PunchAI-main/DEPLOYMENT.md) for step-by-step guides and platform nuances.
- Environment Setup:
  - Node.js 16+; no required env vars for the current SPA.
- Domain/Hosting Configuration:
  - For static hosting, point domain to platform-provided CDN; ensure SPA fallback rules for client-side routing are configured if a router is later added (currently not needed).

TODO:
- If server/ is implemented, document build/run steps, hosting (e.g., Render, Railway, AWS), and necessary environment variables.

---

## 12. FUTURE SECTIONS (PLACEHOLDER)
- Accessibility Checklist
- Analytics & SEO Strategy
- Performance Budgets and Core Web Vitals
- Testing Strategy (unit/e2e)
- CI/CD Pipeline

Update policy:
- When adding new features or modules, append sections here and cross-reference relevant files and configuration.

