import { Container, Logo } from "./ui";
import { siteConfig } from "../siteConfig";

const cols = [
  { title: "Care", links: ["Wellness exams", "Urgent visits", "Dental", "Surgery", "Home visits", "Telehealth"] },
  { title: "Clinic", links: ["Our vets", "Care plans", "Price list", "Careers", "Press"] },
  { title: "Support", links: ["Help center", "Insurance", "Transfer records", "Contact", "Emergency line"] },
];

const socialIcons: Record<string, string> = {
  Instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6.5h.01",
  X: "M4 4l16 16M20 4 4 20",
  YouTube: "M21 8.2a2.5 2.5 0 0 0-1.8-1.8C17.6 6 12 6 12 6s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 8.2 26 26 0 0 0 2.6 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8C6.4 18 12 18 12 18s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-3.8 26 26 0 0 0-.4-3.8ZM10 15V9l5 3-5 3Z",
  GitHub: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z",
};

export function Footer() {
  return (
    <footer className="relative border-t border-slate-100 bg-sand pt-16 pb-8">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-600">
              A modern veterinary clinic for pets and the people who love them. Fear-free care, transparent pricing, and a team that remembers your pet's name.
            </p>
            <address className="mt-6 space-y-1.5 text-sm not-italic text-slate-600">
              <p>{siteConfig.contact.address}</p>
              <p>
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="font-medium text-ink hover:text-brand-700">
                  {siteConfig.contact.phone}
                </a>{" "}
                ·{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-ink hover:text-brand-700">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-slate-500">{siteConfig.contact.hours}</p>
            </address>
            <div className="mt-6 flex gap-2">
              {siteConfig.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-md"
                >
                  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={socialIcons[s.name] || "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:pl-12">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{c.title}</h3>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-sm text-slate-600 transition-colors hover:text-brand-700">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {siteConfig.brand.name} Care. All rights reserved.</p>
            {siteConfig.promotion.enabled && (
              <p className="text-slate-400">
                Free template by{" "}
                <a href={siteConfig.promotion.creatorUrl} target="_blank" rel="noreferrer" className="font-semibold text-brand-700 hover:underline">
                  {siteConfig.promotion.creatorName}
                </a>
                {" · "}
                <a
                  href={siteConfig.promotion.proSuiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand-600 hover:text-brand-800 underline underline-offset-2"
                >
                  Upgrade to Pro Turnkey Suite →
                </a>
              </p>
            )}
          </div>
          <ul className="flex gap-6">
            {["Privacy", "Terms", "Accessibility"].map((l) => (
              <li key={l}><a href="#top" className="hover:text-ink">{l}</a></li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
