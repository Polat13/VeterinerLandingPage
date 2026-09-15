/**
 * Site Configuration File
 * 
 * Customize all content, links, contact details, and branding in one place!
 * Perfect for quick rebranding without touching complex JSX components.
 */

export const siteConfig = {
  // Brand & Clinic Info
  brand: {
    name: "Veteriner",
    badge: "Free Landing Page Template",
    tagline: "Modern, fear-free veterinary care for pets & pet parents.",
    heroTitlePrefix: "Modern care for the ",
    heroTitleHighlight: "ones who wait",
    heroTitleSuffix: " by the door.",
    heroDescription:
      "Veteriner brings fear-free exams, same-day appointments and transparent pricing together in one calm, beautifully designed clinic — so your pet gets the care they deserve, and you get peace of mind.",
  },

  // Contact & Location
  contact: {
    phone: "(800) 555-0199",
    phoneTel: "+18005550199",
    email: "hello@veteriner.co",
    address: "124 Willow Avenue, Suite 2 · Portland, OR 97209",
    hours: "Mon–Fri 8 AM–9 PM · Sat 9 AM–6 PM · Sun closed",
  },

  // Navigation Links
  navLinks: [
    { href: "#services", label: "Services" },
    { href: "#how", label: "How it works" },
    { href: "#stories", label: "Stories" },
    { href: "#plans", label: "Plans" },
    { href: "#faq", label: "FAQ" },
  ],

  // Social Media Links
  social: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "X", href: "https://x.com" },
    { name: "YouTube", href: "https://youtube.com" },
    { name: "GitHub", href: "https://github.com" },
  ],

  // Social Proof Stats
  stats: [
    { value: 48000, suffix: "+", label: "Happy patients treated" },
    { value: 4.9, decimals: 1, label: "Average rating across 2,400 reviews" },
    { value: 8, prefix: "<", suffix: " min", label: "Average waiting-room time" },
    { value: 12, label: "Specialist vets on staff" },
  ],

  // Freebie Author & Upsell (Gumroad Lead Magnet Hook)
  // When distributing for free, this helps you gain followers, recognition and direct buyers to your Pro version!
  promotion: {
    enabled: true,
    bannerText: "Free Community Template · Looking for the full Turnkey Pro Edition?",
    bannerActionText: "Check out Pro Version →",
    bannerActionUrl: "https://polatwave8.gumroad.com/l/PremiumVeterinaryLandingPage",
    creatorName: "Polat",
    creatorUrl: "https://polatwave8.gumroad.com",
    proSuiteName: "Veteriner Pro (Turnkey Appointment & Telehealth Suite)",
    proSuiteUrl: "https://polatwave8.gumroad.com/l/PremiumVeterinaryLandingPage",
  },
};
