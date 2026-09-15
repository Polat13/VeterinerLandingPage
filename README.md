# 🐾 Veteriner — Modern Veterinary Landing Page Template

> A free, high-converting, modern veterinary clinic landing page built with **React 19**, **Tailwind CSS v4**, and **Vite**.

Designed with a warm, fear-free aesthetic, smooth micro-interactions, responsive mobile menu, animated counters, interactive phone preview, and a centralized configuration file for instant rebranding.

---

## ✨ Features

- 🎨 **Fear-Free & Warm Aesthetic**: Curated color palette (sand, sage/teal, peach, warm ink) and typography (Fraunces Display + Inter).
- ⚡ **Cutting-Edge Stack**: Powered by React 19, Tailwind CSS v4, TypeScript, and Vite.
- ⚙️ **One-File Rebranding (`src/siteConfig.ts`)**: Change clinic name, phone, email, address, working hours, links, and text in seconds without digging into components.
- 📱 **Interactive Phone Mockup**: 3-step tabbed workflow preview (Booking, Check-in, Health records).
- 📅 **Interactive Appointment Request Form**: Clean form with pet selection, live validation, and instant confirmation state.
- 💳 **Pricing Period Switcher**: Interactive toggle for Monthly vs. Yearly pricing with animated savings badges.
- ❓ **Accordion FAQ**: Accessible, keyboard-navigable FAQ component.
- 📈 **Animated Stats & Partner Marquee**: Interactive count-up numbers and infinite logo marquee.
- 📦 **Zero Heavy Dependencies**: Lightweight, lightning-fast load times, and single-file build capability (`dist/index.html`).
- 🆓 **100% Free & Open**: Free for personal and commercial client projects under the MIT License.

---

## 🚀 Quick Start

### 1. Clone or Download
Download and extract the template ZIP file to your computer.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🛠️ How to Customize in 2 Minutes

All clinic-specific details are centralized inside **`src/siteConfig.ts`**:

```typescript
export const siteConfig = {
  brand: {
    name: "Veteriner",
    heroTitlePrefix: "Modern care for the ",
    heroTitleHighlight: "ones who wait",
    heroTitleSuffix: " by the door.",
    heroDescription: "Veteriner brings fear-free exams...",
  },
  contact: {
    phone: "(800) 555-0199",
    phoneTel: "+18005550199",
    email: "hello@veteriner.co",
    address: "124 Willow Avenue, Suite 2 · Portland, OR 97209",
    hours: "Mon–Fri 8 AM–9 PM · Sat 9 AM–6 PM · Sun closed",
  },
  // Update your social links, navigation, and promotion settings
};
```

### Replacing Images
Image assets are stored in the `public/images/` directory:
- `public/images/hero-vet.jpg` — Hero section portrait (recommended size: 800x1000px)
- `public/images/cat-checkup.jpg` — Why Us section photo (recommended size: 1200x900px)

---

## 🌐 1-Click Deployment

You can deploy this template for free in less than 2 minutes:

### Vercel
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository — Vercel detects Vite automatically!
4. Click **Deploy**.

### Netlify
1. Drag and drop the `dist/` folder directly to [Netlify Drop](https://app.netlify.com/drop).
2. Or connect your GitHub repository with build command `npm run build` and publish directory `dist`.

---

## 💎 Looking for More? Check Out the Pro Version!

Need a complete, turnkey veterinary clinic solution ready for real clients?

The **Veteriner Pro Suite** includes:
- 🩺 **Multi-step Interactive Booking Wizard** (Pet selection, triage, calendar slot picking, calendar sync)
- 💬 **Live 24/7 AI/Vet Triage Chat Widget**
- 👨‍⚕️ **Full Doctor & Specialist Directory** with bio modal popups
- 📋 **Interactive Price Calculator** with custom estimate generator
- ✉️ **Integrated Form Submission** (Formspree / Resend / Web3Forms ready)
- 📑 **Complete Client Documentation & Figma UI Kit**

👉 **[Explore the Pro Edition on Gumroad](https://polatwave8.gumroad.com/l/PremiumVeterinaryLandingPage)**

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE). You are free to use, modify, and distribute this template for both personal and commercial projects.
Attribution is appreciated! If you find this template helpful, please consider leaving a 5-star rating on Gumroad! ⭐⭐⭐⭐⭐
"# VeterinerLandingPage" 
