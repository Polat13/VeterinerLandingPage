import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { siteConfig } from "../siteConfig";


/* ---------- Scroll reveal ---------- */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "p" | "h2" | "h3";
}) {
  const ref = useReveal<HTMLElement>();
  const Comp = Tag as unknown as "div";
  return (
    <Comp
      ref={ref as never}
      className={cn("reveal", className)}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Comp>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({ to, suffix = "", prefix = "", duration = 1600, decimals = 0 }: { to: number; suffix?: string; prefix?: string; duration?: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(to * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------- Layout primitives ---------- */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "center", light = false }: { eyebrow?: string; title: ReactNode; description?: string; align?: "center" | "left"; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <Reveal>
          <Eyebrow className={light ? "border-white/15 bg-white/10 text-brand-100" : ""}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={cn("mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl", light ? "text-white" : "text-ink")}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className={cn("mt-5 text-lg leading-relaxed", light ? "text-brand-100/80" : "text-slate-600")}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Buttons ---------- */
type BtnBase = { variant?: "primary" | "secondary" | "ghost" | "white"; size?: "md" | "lg"; className?: string; children: ReactNode };
type BtnProps = BtnBase & (({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>) | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>));

export function Button({ variant = "primary", size = "md", className, children, ...rest }: BtnProps) {
  const base = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-[0.98]",
    size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm",
    variant === "primary" && "bg-ink text-white shadow-lg shadow-ink/20 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-700/30",
    variant === "secondary" && "border border-slate-200 bg-white text-ink hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:shadow-md",
    variant === "ghost" && "text-ink hover:bg-slate-100",
    variant === "white" && "bg-white text-brand-800 shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:bg-brand-50",
    className
  );
  if ("href" in rest && rest.href) {
    const { href, ...a } = rest as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={base} {...a}>
        {children}
      </a>
    );
  }
  return (
    <button className={base} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-4 w-4 transition-transform duration-300 group-hover:translate-x-1", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* ---------- Icons (inline, stroke) ---------- */
export const Icon = {
  Paw: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="6" cy="9" r="2.2" /><circle cx="10" cy="5" r="2.2" /><circle cx="15" cy="5" r="2.2" /><circle cx="19" cy="9" r="2.2" />
      <path d="M12.5 10c-3.2 0-6.5 3.4-6.5 6.2 0 1.7 1.2 2.8 2.8 2.8 1.3 0 2.2-.8 3.7-.8s2.4.8 3.7.8c1.6 0 2.8-1.1 2.8-2.8C19 13.4 15.7 10 12.5 10Z" />
    </svg>
  ),
  Heart: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6.3a5 5 0 1 1 7.5 6.3Z" /></svg>
  ),
  Stethoscope: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" /><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" /></svg>
  ),
  Clock: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
  ),
  Shield: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  Phone: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>
  ),
  Sparkle: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></svg>
  ),
  Home: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9Z" /></svg>
  ),
  Check: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12 5 5L20 7" /></svg>
  ),
  Star: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="m12 2.5 2.9 6.2 6.7.8-5 4.6 1.3 6.7L12 17.5l-5.9 3.3 1.3-6.7-5-4.6 6.7-.8L12 2.5Z" /></svg>
  ),
  Plus: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><path d="M12 5v14M5 12h14" /></svg>
  ),
  Menu: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  ),
  X: (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><path d="M6 6l12 12M18 6 6 18" /></svg>
  ),
};

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)} aria-label={`${siteConfig.brand.name} home`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/30 transition-transform duration-300 group-hover:rotate-[-8deg]">
        <Icon.Paw className="h-5 w-5" />
      </span>
      <span className={cn("font-display text-[1.35rem] font-semibold tracking-tight", light ? "text-white" : "text-ink")}>
        {siteConfig.brand.name}
      </span>
    </a>
  );
}
