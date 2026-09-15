import { useEffect, useRef, useState } from "react";
import { ArrowIcon, Button, Container, Eyebrow, Icon } from "./ui";
import { siteConfig } from "../siteConfig";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: y * -6, y: x * 8 });
  };

  const stagger = `transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`;
  const d = (i: number) => ({ transitionDelay: `${i * 110}ms` });

  return (
    <section id="top" className="relative overflow-hidden bg-sand pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-brand-200/60 blur-3xl animate-blob" />
        <div className="absolute top-20 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-peach/40 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-100 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div className={stagger} style={d(0)}>
              <Eyebrow>Now accepting new patients</Eyebrow>
            </div>
            <h1 className={`mt-6 font-display text-[2.75rem] leading-[1.02] font-semibold tracking-tight text-ink sm:text-6xl lg:text-[4.4rem] ${stagger}`} style={d(1)}>
              {siteConfig.brand.heroTitlePrefix}<span className="text-gradient">{siteConfig.brand.heroTitleHighlight}</span>{siteConfig.brand.heroTitleSuffix}
            </h1>
            <p className={`mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl ${stagger}`} style={d(2)}>
              {siteConfig.brand.heroDescription}
            </p>
            <div className={`mt-9 flex flex-col gap-3 sm:flex-row sm:items-center ${stagger}`} style={d(3)}>
              <Button href="#book" size="lg">
                Book a visit
                <ArrowIcon />
              </Button>
              <Button href="#how" variant="secondary" size="lg">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-3 w-3" fill="currentColor" aria-hidden><path d="M7 5v14l11-7L7 5Z" /></svg>
                </span>
                See how it works
              </Button>
            </div>
            <div className={`mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-600 ${stagger}`} style={d(4)}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {["#f6c7a8", "#b9e3d6", "#c8d3f5", "#f5dfa1"].map((c, i) => (
                    <span key={i} className="grid h-9 w-9 place-items-center rounded-full border-2 border-sand text-[11px] font-bold text-ink/70" style={{ background: c }}>
                      {["M", "L", "B", "K"][i]}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500" aria-label="Rated 4.9 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => <Icon.Star key={i} className="h-3.5 w-3.5" />)}
                  </div>
                  <p className="font-medium text-ink">4.9 from 2,400+ pet parents</p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-slate-300 sm:block" />
              <div className="flex items-center gap-2">
                <Icon.Shield className="h-5 w-5 text-brand-600" />
                <span>Fear Free® certified team</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6">
            <div
              ref={wrap}
              onMouseMove={onMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              className={`relative mx-auto max-w-[34rem] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] [transition-delay:250ms] ${mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ perspective: 1400 }}
            >
              <div
                className="relative transition-transform duration-500 ease-out [transform-style:preserve-3d]"
                style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
              >
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20 ring-1 ring-black/5">
                  <img src="/images/hero-vet.jpg" alt="A veterinarian in teal scrubs gently holding a golden retriever puppy in a bright clinic" className="aspect-[4/5] w-full object-cover" width={800} height={1000} fetchPriority="high" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass px-4 py-3 text-sm">
                    <div>
                      <p className="text-xs text-slate-500">Next available</p>
                      <p className="font-semibold text-ink">Today, 3:40 PM</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white">
                      <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-white" /></span>
                      Open now
                    </span>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -left-6 top-10 hidden w-56 rounded-2xl glass p-4 shadow-xl shadow-ink/10 animate-float sm:block" style={{ transform: "translateZ(60px)" }}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700"><Icon.Heart className="h-5 w-5" /></span>
                    <div>
                      <p className="text-xs text-slate-500">Health score</p>
                      <p className="font-semibold text-ink">Biscuit · 98/100</p>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-brand-500 to-brand-300" />
                  </div>
                </div>
                <div className="absolute -right-4 bottom-28 hidden w-52 rounded-2xl glass p-4 shadow-xl shadow-ink/10 animate-float-slow sm:block" style={{ transform: "translateZ(80px)" }}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-peach/40 text-orange-700"><Icon.Check className="h-5 w-5" /></span>
                    <div>
                      <p className="text-xs text-slate-500">Vaccines</p>
                      <p className="font-semibold text-ink">Up to date</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Reminder sent for Mar 12</p>
                </div>
                <div className="absolute -top-5 right-8 hidden rounded-full glass px-3.5 py-2 text-xs font-semibold text-ink shadow-lg animate-float [animation-delay:-3s] sm:block" style={{ transform: "translateZ(40px)" }}>
                  ⚡ Avg. wait under 8 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
