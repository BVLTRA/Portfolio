# Portfolio 
<img src="./frontend/public/og-preview.gif" alt="Header image" width="100%" height="auto">
A brutalist and minimal portfolio interface designed under the alias **BVLTRA**. Built with a strict adherence to Swiss typography principles, architectural grid systems, and browser-native pixel physics.

**Currently under active development.**

## Architecture & Mechanics

This interface rejects heavy UI frame-works and bloated animation libraries, running entirely on modular React components and raw CSS processing.

* **Multi-Page Routing:** Built with `react-router-dom` to handle lightning-fast view switches between `Home`, `Qualification`, and `ContactPage` without triggering browser refreshes.
* **Typography Engine:** Powered by a local self-hosted instance of **Visuelt Pro** (`.woff2`). All font faces are explicitly mapped to the CSS numerical weight scale (`100` to `900`) and use `font-display: swap` to prevent layout shift.
* **Decoupled Navbar Inversion:** The navigation menu and brand assets are split into separate fixed layers. Links utilize `mix-blend-mode: difference` combined with a pure white color configuration to mathematically invert their color channels (flipping black/white) in real-time as they pass over high-contrast sections.
* **Pure CSS Kinetic Marquee:** An infinite loop text ticker that Maps arrays of data and duplicates rows to ensure seamless wrapping. Uses a multi-directional `text-shadow` projection to resolve standard browser rendering segmentation bugs with hollow italic text outlines.
* **Grid-Locked Composition:** Layout views employ a 3-column CSS Grid structure utilizing an invisible counter-weight column to force core text and paragraph fragments into the absolute mathematical center of the user's screen.
* **Mobile Viewport Lockout:** Employs a rigid responsive gate for screen widths under `768px`. A window resize event listener pairs with a strict `overflow: hidden` CSS override on the document body to completely disable scrolling, purge nav links, and swap calls-to-action for a desktop optimization warning.

## Structural Directory

```text
src/
├── assets/             # Raw media assets and logotypes
├── components/         # Independent structural primitives
│   ├── ContactForm.jsx # Minimalist form with baseline inputs
│   ├── ContactInfo.jsx # Link wrappers for social and mail targets
│   ├── Footer.jsx      # High-contrast red editorial layout with anchor routing
│   ├── Hero.jsx        # Core intro panel with reactive states
│   ├── Navbar.jsx      # Floating navigation anchors with location awareness
│   ├── QuoteBlock.jsx  # Large semantic text layouts
│   ├── SectionIntro.jsx# Composable layout block with a children injection layer
│   ├── SkillsMarquee.css
│   └── ToolsGrid.jsx   # Split-screen technical stack matrices
├── pages/              # Master view controllers
│   ├── ContactPage.jsx
│   ├── Home.jsx
│   └── Qualification.jsx # Circular image hero mask with NQF Level 7 metadata
├── App.jsx             # Switchboard router and layout orchestration
└── main.jsx            # DOM mounting root
```

SEO & Identity Infrastructure
To explicitly instruct search crawlers and prevent the machine from confusing the name BVLTRA with commercial luxury labels, the environment executes a hardcoded JSON-LD Schema Script directly in the root index.html file.
This structure mathematically links the alias to an individual creator, sets a geographic anchor in Pretoria, dictates precise pronoun/gender tags to the Google Knowledge Graph, and configures high-resolution apple-touch-icon targets for search page favicons.
Tech Stack
 * Core: React 18
 * Routing: React Router DOM v6
 * Build Tool: Vite
 * Styling: Pure CSS (CSS Variables, Flexbox, CSS Grid, Blending Modes)
 * Deployment: Vercel (Edge Network)
Local Development
To spin up the environment locally:
 * Clone the repository
 * Navigate to the frontend directory and install dependencies:
cd frontend
npm install

 * Run the local Vite HMR server:
npm run dev


## Status

**[ WORK IN PROGRESS ]** Core routing, global styling, and structural components are live. Content and specific interaction physics are actively being calibrated.

