import { Container, Counter, Reveal } from "./ui";
import { siteConfig } from "../siteConfig";

const partners = ["Fear Free®", "AAHA Accredited", "Royal Canin", "Hill's", "Trupanion", "PetDesk", "IDEXX", "Zoetis"];


export function SocialProof() {
  return (
    <section aria-label="Trusted by" className="relative border-y border-slate-100 bg-white py-14">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Trusted by pet parents & partnered with the best</p>
        </Reveal>
        <div className="mask-fade-x mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee gap-14 pr-14 hover:[animation-play-state:paused]" aria-hidden>
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="whitespace-nowrap font-display text-xl font-semibold text-slate-300 transition-colors hover:text-brand-600">
                {p}
              </span>
            ))}
          </div>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {siteConfig.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="group rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-sand/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5">
              <dt className="order-2 mt-2 text-sm text-slate-500">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} decimals={s.decimals} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
