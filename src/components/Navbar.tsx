import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Button, Icon, Logo } from "./ui";
import { siteConfig } from "../siteConfig";
import { PromoBanner } from "./PromoBanner";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <PromoBanner />
      <div className="px-3 pt-2.5 sm:px-5 sm:pt-3">
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled ? "glass shadow-lg shadow-ink/5" : "bg-transparent"
          )}
        >
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-ink after:absolute after:inset-x-4 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${siteConfig.contact.phoneTel}`} className="text-sm font-medium text-slate-600 transition-colors hover:text-ink">
            {siteConfig.contact.phone}
          </a>
          <Button href="#book">Book a visit</Button>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-xl text-ink transition-colors hover:bg-slate-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Icon.X className="h-5 w-5" /> : <Icon.Menu className="h-5 w-5" />}
        </button>
      </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-x-3 top-[4.6rem] origin-top rounded-2xl glass shadow-2xl shadow-ink/10 transition-all duration-300",
          open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
      >
        <ul className="flex flex-col p-3">
          {siteConfig.navLinks.map((l, i) => (
            <li key={l.href} style={{ transitionDelay: `${i * 40}ms` }} className={cn("transition-all duration-300", open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0")}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-brand-50">
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 border-t border-slate-200/70 p-2 pt-4">
            <Button href="#book" className="w-full" onClick={() => setOpen(false)}>
              Book a visit
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
