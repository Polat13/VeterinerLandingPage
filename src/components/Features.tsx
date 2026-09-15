import { Container, Icon, Reveal, SectionHeading } from "./ui";

const features = [
  {
    icon: Icon.Stethoscope,
    title: "Wellness & preventive care",
    text: "Annual exams, vaccinations, dental cleanings and nutrition plans built around your pet's breed, age and lifestyle.",
    tone: "from-brand-500 to-brand-700",
  },
  {
    icon: Icon.Clock,
    title: "Same-day & urgent visits",
    text: "Something feels off? Book online and be seen today. Our triage team responds within 10 minutes during clinic hours.",
    tone: "from-orange-400 to-rose-500",
  },
  {
    icon: Icon.Sparkle,
    title: "Advanced diagnostics",
    text: "In-house lab, digital radiography and ultrasound mean answers in hours — not days — without a referral.",
    tone: "from-violet-500 to-indigo-600",
  },
  {
    icon: Icon.Heart,
    title: "Fear-free handling",
    text: "Pheromone-infused rooms, species-separated waiting areas and gentle techniques that lower stress for anxious pets.",
    tone: "from-pink-400 to-rose-500",
  },
  {
    icon: Icon.Home,
    title: "Home visits",
    text: "For senior pets, multi-pet households or nervous cats, our mobile team brings the exam room to your living room.",
    tone: "from-amber-400 to-orange-500",
  },
  {
    icon: Icon.Phone,
    title: "24/7 telehealth",
    text: "Chat or video call with a licensed vet any hour of the night. Included free with every care plan.",
    tone: "from-sky-400 to-blue-600",
  },
];

export function Features() {
  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title={<>Everything your pet needs, <span className="text-gradient">under one calm roof.</span></>}
          description="From the first puppy check-up to golden-years comfort care, our team covers the full spectrum — with technology that keeps you informed at every step."
        />
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 80} className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-brand-900/10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-100/60 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
              <span className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.tone} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]`}>
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="relative mt-2.5 text-[15px] leading-relaxed text-slate-600">{f.text}</p>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1">
                Learn more
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
