# Al Fatima Clinic - Modern Landing Page Prototype

## 🚀 High-Fidelity Prototype for Clinic Owners

This is a professional, responsive landing page built with **Next.js 15** and **Tailwind CSS** for **Al Fatima Clinic**. Designed for mobile-first experience (90%+ patient traffic on phones), featuring trustworthy medical aesthetics (Professional Blue #0056b3, Soft Teal), Lucide icons, and optimized for pitching to clinic owners.

**Live Demo:** Run `npm run dev` and open http://localhost:3000

## ✨ Key Features (As Per Design Requirements)

### ✅ Navigation
- Logo: Al Fatima Clinic
- Links: Services, Doctors, Contact
- Prominent CTA: **Call Now: 051-8151800**

### ✅ Hero Section
- Headline: \"Your Trusted 24/7 Healthcare Partner in the Heart of Islamabad\"
- Location: Civic Center, G-6 Markaz
- Primary CTA: **Book Appointment**

### ✅ Quick Info Bar (TrustBanner)
- 📍 G-6 Markaz / Melody Market
- 📞 051-8151800
- ⏰ Open 24/7

### ✅ Services Grid (BentoSection)
- General Consultation
- Emergency Care
- Diagnostics (Lab Tests & X-rays)

### ✅ Pricing Section
- Transparent: General Consultation **Rs. 2000 – 3500**

### ✅ Our Doctors
- Dr. Gulam Fareed (General Physician)
- Dr. Usama Shah (General Physician)
- Note: Visiting specialists available

### ✅ Footer
- Full address: Civic Center, Near Melody Market, G-6 Markaz, Islamabad
- Secondary: 051-2824124
- Google Maps placeholder

## 📱 Responsiveness & Tech Stack
- **Mobile-First**: Optimized for phones/tablets
- **Next.js 15**: App Router, Server Components
- **Tailwind CSS**: Utility-first, custom medical palette
- **Lucide Icons**: Clean SVG icons
- **SEO Ready**: Meta tags, Open Graph
- **Performance**: Image optimization, code splitting

## 🛠 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure
```
src/
├── app/
│   ├── globals.css (Tailwind)
│   ├── layout.js (Root layout)
│   └── page.js (Main landing page)
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── TrustBanner.jsx
    ├── BentoSection.jsx (Services/Doctors/Pricing)
    └── Footer.jsx
```

## 🎨 Customization
- **Colors**: Edit `globals.css` or Tailwind config
  - Primary: `#0056b3` (Professional Blue)
  - Accent: Soft Teal (`#0ea5e9`)
- **Content**: Update strings directly in components
- **Google Maps**: Replace iframe in Footer.jsx
- **Images**: Add to `public/` and reference

## 📞 Contact Info (Live Data)
```
Al Fatima Clinic
Civic Center, Near Melody Market, G-6 Markaz, Islamabad
Primary: 051-8151800
Secondary: 051-2824124
Open: 24/7
```

## 🚀 Deployment
- **Vercel**: `vercel --prod` (Next.js optimized)
- **Netlify**: Drag `out/` folder after `npm run build`
- **Custom Domain**: Easy SSL setup

---

