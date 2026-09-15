import { useState } from "react";
import { cn } from "../utils/cn";
import { Container, Icon, Reveal, SectionHeading } from "./ui";

const faqs = [
  { q: "Do I need a care plan to be seen?", a: "Not at all. Anyone can book a standard visit and pay as you go. Care plans simply spread routine costs across the year and unlock perks like unlimited exams and priority booking." },
  { q: "How fast can I get a same-day appointment?", a: "During clinic hours we hold slots specifically for urgent cases. Most same-day requests made before 2 PM are seen within 3 hours. For emergencies, call us — we'll triage immediately." },
  { q: "What does 'fear-free' actually mean?", a: "Our whole team is Fear Free® certified. That means species-separated waiting areas, pheromone diffusers, non-slip surfaces, treat-based handling, and the option to wait in your car until your room is ready." },
  { q: "Which animals do you treat?", a: "Dogs, cats, rabbits, guinea pigs, ferrets and most small mammals. We also have an avian and reptile specialist available two days a week — just note it when booking." },
  { q: "Can I transfer records from my previous vet?", a: "Yes. Upload them in the app or give us your old clinic's name and we'll request them for you. Everything lands in one timeline you can access anytime." },
  { q: "Do you accept pet insurance?", a: "We work with all major insurers and can submit claims directly for Trupanion, Nationwide and Lemonade. For others, we provide itemised invoices formatted for quick reimbursement." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions? We've got answers."
              description="Can't find what you're looking for? Our care team replies to chat in under 10 minutes during clinic hours."
            />
            <Reveal delay={240} className="mt-8">
              <a href="#book" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                Chat with the care team
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
              </a>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal as="li" key={f.q} delay={i * 60}>
                    <h3>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${i}`}
                        className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
                      >
                        <span className={cn("text-base font-semibold transition-colors sm:text-lg", isOpen ? "text-brand-700" : "text-ink group-hover:text-brand-700")}>{f.q}</span>
                        <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300", isOpen ? "rotate-45 border-brand-600 bg-brand-600 text-white" : "border-slate-200 text-slate-500 group-hover:border-brand-300 group-hover:bg-brand-50")}>
                          <Icon.Plus className="h-4 w-4" />
                        </span>
                      </button>
                    </h3>
                    <div id={`faq-${i}`} className={cn("grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-12 text-[15px] leading-relaxed text-slate-600">{f.a}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
