import { ArrowIcon, Button, Container, Icon, Reveal, SectionHeading } from "./ui";

const benefits = [
  { title: "Transparent, upfront pricing", text: "Every estimate itemised before treatment. No surprise line items, ever." },
  { title: "One vet who knows your pet", text: "You'll see the same doctor each visit, so nothing gets lost between appointments." },
  { title: "Plain-language explanations", text: "We translate medical jargon into clear next steps you can actually act on." },
  { title: "Evenings & weekends", text: "Open until 9 PM weekdays and all day Saturday, because life doesn't stop at five." },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-sand py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-200/50 blur-3xl animate-blob" aria-hidden />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Veteriner"
              title={<>Built around your pet's comfort — <span className="text-gradient">and your sanity.</span></>}
              description="We rebuilt the veterinary visit from scratch, removing every moment that made it stressful for animals and confusing for the people who love them."
            />
            <ul className="mt-10 space-y-5">
              {benefits.map((b, i) => (
                <Reveal as="li" key={b.title} delay={i * 90} className="group flex gap-4">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-md shadow-brand-600/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon.Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{b.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={400} className="mt-10">
              <Button href="#book" size="lg">
                Meet our vets
                <ArrowIcon />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/15 ring-1 ring-black/5">
              <img src="/images/cat-checkup.jpg" alt="A relaxed grey cat on an exam table being gently checked with a stethoscope" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" loading="lazy" width={1200} height={900} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <blockquote className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display text-xl leading-snug sm:text-2xl">"Luna usually hides for hours after the vet. She walked out of Veteriner purring."</p>
                <footer className="mt-3 text-sm text-white/80">— Selin A., cat mom of two</footer>
              </blockquote>
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl glass px-5 py-4 shadow-xl shadow-ink/10 animate-float sm:block">
              <p className="text-xs text-slate-500">Stress score after visit</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-ink">-63%</span>
                <span className="text-xs font-semibold text-brand-700">vs. industry avg</span>
              </div>
            </div>
            <div className="absolute -right-4 -top-6 hidden rounded-2xl glass px-4 py-3 shadow-xl shadow-ink/10 animate-float-slow sm:block">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <div><p className="text-sm font-semibold text-ink">Best Clinic 2025</p><p className="text-[11px] text-slate-500">City Pet Awards</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
