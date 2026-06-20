# Anirudh Brand Creation

## 📖 Short Project Description
Anirudh Brand Creation is a premium web application built for a leading LED sign board manufacturer in Hyderabad & Secunderabad. The platform showcases a comprehensive portfolio of signage solutions—ranging from hospital and reception signage to massive architectural pylon boards and ACP cladding. The site is highly optimized for SEO, designed with a premium dark-and-orange aesthetic, and deeply integrated with direct conversion actions (WhatsApp and click-to-call) for instant client acquisition.

## 🛠 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Material Symbols Outlined
- **Environment:** Node.js (>=18.17.0)

## ✨ Features
- **Premium Design System:** Sleek, modern, responsive UI with a strong orange (`#fe6b00`) and black aesthetic.
- **Dynamic Project Gallery:** Categorized filtering (Retail, Real Estate, Corporate, etc.) displaying high-resolution project assets.
- **Interactive Carousel:** Touch-enabled and auto-playing hero slider displaying featured high-profile client projects.
- **Animated Stats Counter:** Viewport-triggered statistics highlighting milestones (1000+ Projects, 200+ Corporate Clients).
- **SEO Optimized:** Embedded JSON-LD schema (LocalBusiness, Organization, FAQ) to rank for "LED Sign Board Manufacturers in Hyderabad".
- **Conversion-Optimized:** Sticky mobile navigation with immediate WhatsApp, Call, and Google Maps direction links.

## ⚙️ How to Install
Ensure you have Node.js version `18.17.0` or higher installed.

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd anirudh-brand-creation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 How to Run (Development)
To start the development server with hot-reloading:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗 How to Build (Production)
To create an optimized production build:

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## 📁 Folder Structure
```text
anirudh-brand-creation/
├── public/
│   ├── images/              # Client photos, logos, and UI assets
├── src/
│   ├── app/                 # Next.js 13+ App Router (pages & layouts)
│   ├── components/
│   │   ├── home/            # Homepage sections (Hero, Services, Contact, etc.)
│   │   ├── layout/          # Global layout elements (Navbar, Footer, Floating CTA)
│   │   ├── projects/        # Project gallery and dynamic lists
│   │   └── shared/          # Reusable UI (FAQ, Testimonials)
│   ├── config/              # Centralized data configurations
│   │   ├── businessInfo.ts  # Contact info, maps, SEO details
│   │   └── projectsData.ts  # Centralized portfolio data
└── package.json             # Dependencies & scripts
```

## 📝 Contact & Config Update Guide
All core business information is centralized to ensure the site is maintainable without needing to modify component code.

### Updating Business Details (Phone, Address, Google Maps)
1. Open `src/config/businessInfo.ts`.
2. Update the phone numbers, emails, addresses, or WhatsApp URLs.
3. If the physical location changes, update the `googleMapsEmbedUrl` and `googleMapsDirectUrl` in this file. The Footer, Contact Page, and mobile CTAs will automatically reflect these updates.

### Updating the Project Gallery
1. Open `src/config/projectsData.ts`.
2. Upload your new project image to `public/images/` (ensure it is compressed).
3. Add a new object to the `projectsData` array specifying the `title`, `category`, `image` path, and SEO `alt` text.

## 📌 Known Pending Tasks
- [ ] **Blog/News Section:** Implement a CMS integration (e.g., Sanity or MDX) to manage dynamic articles and case studies for long-tail SEO.
- [ ] **Analytics Integration:** Add Google Analytics (GA4) or Google Tag Manager to track WhatsApp click conversions.
- [ ] **Dynamic Routing:** Create individual dynamic routes for `projects/[slug]` with detailed case study content.

---
*Developed for Anirudh Brand Creation.*
