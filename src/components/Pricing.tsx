import { useState } from "react";
import { cn } from "../utils/cn";
import { ArrowIcon, Button, Container, Icon, Reveal, SectionHeading } from "./ui";

const plans = [
  {
    name: "Essentials",
    tagline: "For healthy adult pets",
    monthly: 29,
    yearly: 24,
    features: ["2 wellness exams / year", "Core vaccinations included", "24/7 telehealth chat", "10% off dental & labs", "Digital health records"],
  },
  {
    name: "Complete",
    tagline: "Our most popular plan",
    monthly: 59,
    yearly: 49,
    featured: true,
    features: ["Unlimited exams & urgent visits", "All vaccines + parasite prevention", "Annual bloodwork & dental cleaning", "24/7 video vet + priority booking", "20% off surgery & imaging", "1 home visit / year"],
  },
  {
    name: "Senior & Chronic",
    tagline: "For pets 8+ or ongoing conditions",
    monthly: 89,
    yearly: 74,
    features: ["Everything in Complete", "Quarterly bloodwork & monitoring", "Pain & mobility management", "Dedicated care coordinator", "Unlimited home visits", "30% off medications"],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section id="plans" className="relative overflow-hidden bg-sand py-24 sm:py-32">
      <div className="pointer-events-none absolute right-[-10rem] top-10 h-[30rem] w-[30rem] rounded-full bg-peach/30 blur-3xl animate-blob" aria-hidden />
      <Container className="relative">
        <SectionHeading
          eyebrow="Care plans"
          title="Predictable care. Predictable costs."
          description="Spread the cost of great care across the year and never hesitate to bring your pet in. Cancel anytime, no questions asked."
        />

        <Reveal delay={200} className="mt-10 flex justify-center">
          <div className="relative inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm" role="group" aria-label="Billing period">
            <span className={cn("absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]", yearly ? "translate-x-full" : "translate-x-0")} aria-hidden />
            {["Monthly", "Yearly"].map((l, i) => (
              <button key={l} onClick={() => setYearly(i === 1)} aria-pressed={yearly === (i === 1)} className={cn("relative z-10 w-32 rounded-full py-2 text-sm font-semibold transition-colors duration-300", yearly === (i === 1) ? "text-white" : "text-slate-600")}>
                {l}
                {i === 1 && <span className={cn("ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold transition-colors", yearly ? "bg-brand-400 text-ink" : "bg-brand-100 text-brand-700")}>-17%</span>}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-end">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <article className={cn("group relative flex h-full flex-col rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2", p.featured ? "bg-ink text-white shadow-2xl shadow-ink/30 lg:scale-[1.04] lg:hover:scale-[1.06]" : "border border-slate-200 bg-white text-ink hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5")}>
                {p.featured && (
                  <>
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-transparent to-peach/10" aria-hidden />
                    <span className="absolute -top-3.5 left-8 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-3.5 py-1.5 text-xs font-bold text-ink shadow-lg shadow-brand-400/30">Most popular</span>
                  </>
                )}
                <div className="relative">
                  <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  <p className={cn("mt-1 text-sm", p.featured ? "text-white/60" : "text-slate-500")}>{p.tagline}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-semibold tracking-tight tabular-nums">
                      ${yearly ? p.yearly : p.monthly}
                    </span>
                    <span className={cn("text-sm", p.featured ? "text-white/60" : "text-slate-500")}>/ month per pet</span>
                  </div>
                  <p className={cn("mt-1 h-5 text-xs transition-opacity", p.featured ? "text-brand-300" : "text-brand-700", yearly ? "opacity-100" : "opacity-0")}>
                    Billed ${p.yearly * 12}/year · save ${(p.monthly - p.yearly) * 12}
                  </p>
                </div>
                <ul className="relative mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px]">
                      <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full", p.featured ? "bg-brand-400 text-ink" : "bg-brand-100 text-brand-700")}>
                        <Icon.Check className="h-3 w-3" />
                      </span>
                      <span className={p.featured ? "text-white/85" : "text-slate-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button href="#book" variant={p.featured ? "white" : "secondary"} size="lg" className="relative mt-8 w-full">
                  Choose {p.name}
                  <ArrowIcon />
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-10 text-center text-sm text-slate-500">
            Prefer pay-as-you-go? Standard exams start at <span className="font-semibold text-ink">$65</span>. All prices published on our{" "}
            <a href="#faq" className="font-semibold text-brand-700 underline-offset-4 hover:underline">price list</a>.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
