import { Container, Icon, Reveal, SectionHeading } from "./ui";

const reviews = [
  { name: "Maya R.", pet: "Biscuit · Golden Retriever", text: "Booked at 9 AM, seen at 11, results in the app by lunch. I've never had vet care feel this effortless. Dr. Kaya explained everything without rushing.", color: "#f6c7a8" },
  { name: "Daniel K.", pet: "Pixel · French Bulldog", text: "The transparent pricing alone is worth it. I got an itemised estimate before anything happened and the final bill matched to the cent.", color: "#b9e3d6" },
  { name: "Aylin T.", pet: "Mochi & Kumo · cats", text: "The separate cat waiting area is genius. No barking, soft lighting, and the team let my two settle before starting. Zero drama.", color: "#c8d3f5" },
  { name: "Jordan P.", pet: "Rex · Senior Lab", text: "Home visits for Rex's arthritis check-ups have changed our lives. He's 13 and stairs are hard — now the vet comes to him.", color: "#f5dfa1" },
  { name: "Sophie L.", pet: "Olive · Rabbit", text: "Finding an exotic-savvy vet is tough. Veteriner had a rabbit specialist on staff and a video follow-up at 10 PM when I panicked. Lifesavers.", color: "#f9c6d0" },
  { name: "Emre B.", pet: "Zeytin · Mixed", text: "Adopted a rescue with a lot of anxiety. The fear-free approach was visibly different — he actually took treats from the vet on visit two.", color: "#cfe8f7" },
];

export function Testimonials() {
  return (
    <section id="stories" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Stories"
          title="Loved by pets. Trusted by the people who love them."
          description="Over 2,400 five-star reviews — and a lobby full of wagging tails to prove it."
        />
        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 100} className="mb-5 break-inside-avoid">
              <figure className="group rounded-3xl border border-slate-100 bg-gradient-to-b from-white to-sand/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
                <div className="flex items-center gap-1 text-amber-500" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="transition-transform duration-300 group-hover:-translate-y-0.5" style={{ transitionDelay: `${j * 40}ms` }}><Icon.Star className="h-4 w-4" /></span>
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-700">"{r.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-ink/70" style={{ background: r.color }}>{r.name[0]}</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.pet}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
