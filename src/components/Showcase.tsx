import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Container, Icon, Reveal, SectionHeading } from "./ui";

const steps = [
  {
    id: "book",
    label: "Book in 30 seconds",
    title: "Pick a time that works — no phone tag.",
    text: "See real-time availability across all our vets, choose in-clinic, home visit or video, and get instant confirmation with calendar sync.",
  },
  {
    id: "visit",
    label: "A calmer visit",
    title: "Walk straight into a room prepared for your pet.",
    text: "Digital check-in means no crowded lobby. Rooms are pre-set with species-specific pheromones, treats and your pet's full history on screen.",
  },
  {
    id: "track",
    label: "Stay in the loop",
    title: "Results, records and reminders in one place.",
    text: "Lab results land in your app with plain-language explanations. Medication reminders, vaccine schedules and vet chat are always a tap away.",
  },
];

function Phone({ step }: { step: number }) {
  return (
    <div className="relative mx-auto w-[17.5rem] sm:w-[19rem]">
      <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-brand-300/40 via-transparent to-peach/40 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[2.6rem] border-[6px] border-ink bg-ink shadow-2xl shadow-ink/30">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2.2rem] bg-sand">
          {/* Screen: Book */}
          <Screen active={step === 0}>
            <p className="text-xs text-slate-500">Good morning, Maya</p>
            <h4 className="mt-1 font-display text-xl font-semibold text-ink">Book a visit</h4>
            <div className="mt-4 rounded-2xl bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Patient</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-peach/50 text-sm">🐕</span>
                <div><p className="text-sm font-semibold">Biscuit</p><p className="text-[11px] text-slate-500">Golden Retriever · 3y</p></div>
              </div>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Today</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {["10:20", "11:45", "1:10", "2:30", "3:40", "5:15"].map((t, i) => (
                <span key={t} className={cn("rounded-xl py-2 text-center text-xs font-semibold transition-all", i === 4 ? "bg-brand-600 text-white shadow-md shadow-brand-600/30 scale-105" : "bg-white text-ink")}>{t}</span>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white">Confirm · 3:40 PM</div>
          </Screen>
          {/* Screen: Visit */}
          <Screen active={step === 1}>
            <div className="flex items-center justify-between">
              <h4 className="font-display text-xl font-semibold text-ink">Room 3 is ready</h4>
              <span className="rounded-full bg-brand-100 px-2 py-1 text-[10px] font-bold text-brand-700">CHECKED IN</span>
            </div>
            <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-100 text-brand-700"><Icon.Stethoscope className="h-5 w-5" /></span>
                <div><p className="text-sm font-semibold">Dr. Elif Kaya</p><p className="text-[11px] text-slate-500">Internal medicine</p></div>
              </div>
              <div className="mt-4 space-y-2">
                {["Feliway diffuser on", "Records loaded", "Treats: salmon (approved)"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-slate-600"><span className="grid h-4 w-4 place-items-center rounded-full bg-brand-500 text-white"><Icon.Check className="h-2.5 w-2.5" /></span>{t}</div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Estimated wait</p>
              <p className="mt-1 font-display text-3xl font-semibold text-ink">4 <span className="text-base text-slate-500">min</span></p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-3/4 rounded-full bg-brand-500" /></div>
            </div>
          </Screen>
          {/* Screen: Track */}
          <Screen active={step === 2}>
            <h4 className="font-display text-xl font-semibold text-ink">Biscuit's results</h4>
            <p className="text-xs text-slate-500">Bloodwork · Reviewed by Dr. Kaya</p>
            <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-end justify-between gap-1 h-20">
                {[40, 65, 55, 80, 70, 92, 85].map((h, i) => (
                  <span key={i} className="w-full rounded-t-md bg-gradient-to-t from-brand-600 to-brand-300" style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-600"><span className="font-semibold text-brand-700">All values normal.</span> Kidney markers improved 12% since last visit.</p>
            </div>
            <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs"><span className="text-base">💊</span><div><p className="font-semibold">Apoquel · 8:00 PM</p><p className="text-slate-500">Reminder set daily</p></div></div>
            </div>
            <div className="mt-3 rounded-2xl bg-brand-600 p-3 text-white">
              <p className="text-xs opacity-80">Dr. Kaya · 2m ago</p>
              <p className="text-sm">He did great today! Keep the new food going 🐾</p>
            </div>
          </Screen>
        </div>
      </div>
    </div>
  );
}

function Screen({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div className={cn("absolute inset-0 p-5 pt-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]", active ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-[0.98] pointer-events-none")} aria-hidden={!active}>
      {children}
    </div>
  );
}

export function Showcase() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setStep((s) => (s + 1) % steps.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="how" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-700/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-peach/10 blur-3xl animate-blob" />
      </div>
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="How it works"
          title="Vet care that finally feels designed for you."
          description="One app, one clinic, zero guesswork. Here's what a visit to Veteriner looks like from your couch to the exam room and back."
        />
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <Reveal className="order-2 lg:order-1">
            <Phone step={step} />
          </Reveal>
          <div className="order-1 lg:order-2" role="tablist" aria-label="Visit steps">
            {steps.map((s, i) => {
              const active = i === step;
              return (
                <Reveal key={s.id} delay={i * 100}>
                  <button
                    role="tab"
                    aria-selected={active}
                    aria-controls={`step-panel-${s.id}`}
                    onClick={() => setStep(i)}
                    onFocus={() => setPaused(true)}
                    onBlur={() => setPaused(false)}
                    className={cn("group relative mb-3 w-full rounded-3xl border p-6 text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300", active ? "border-white/15 bg-white/10 backdrop-blur-md shadow-xl shadow-black/20" : "border-transparent hover:bg-white/5")}
                  >
                    <div className="flex items-start gap-4">
                      <span className={cn("relative grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-lg font-semibold transition-colors duration-500", active ? "bg-brand-400 text-ink" : "bg-white/10 text-white/70")}>
                        {i + 1}
                        {active && <span className="absolute inset-0 rounded-full bg-brand-400/60 animate-pulse-ring" aria-hidden />}
                      </span>
                      <div className="flex-1">
                        <p className={cn("text-xs font-semibold uppercase tracking-[0.14em] transition-colors", active ? "text-brand-300" : "text-white/40")}>{s.label}</p>
                        <h3 className="mt-1.5 text-lg font-semibold text-white sm:text-xl">{s.title}</h3>
                        <div id={`step-panel-${s.id}`} className={cn("grid transition-all duration-500", active ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0")}>
                          <p className="overflow-hidden text-[15px] leading-relaxed text-white/65">{s.text}</p>
                        </div>
                      </div>
                    </div>
                    {active && (
                      <span className="absolute bottom-0 left-6 right-6 h-0.5 overflow-hidden rounded-full bg-white/10" aria-hidden>
                        <span key={step} className="block h-full origin-left bg-brand-400" style={{ animation: paused ? "none" : "progress 4.5s linear forwards" }} />
                      </span>
                    )}
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
      <style>{`@keyframes progress { from { transform: scaleX(0);} to { transform: scaleX(1);} }`}</style>
    </section>
  );
}
