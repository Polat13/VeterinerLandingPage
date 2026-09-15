import { useState, type FormEvent } from "react";
import { cn } from "../utils/cn";
import { ArrowIcon, Button, Container, Icon, Reveal } from "./ui";

const petTypes = ["Dog", "Cat", "Rabbit", "Other"];

export function CTA() {
  const [pet, setPet] = useState("Dog");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  const input = "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-all focus:border-brand-300 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-brand-300/40";

  return (
    <section id="book" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/40 blur-3xl animate-blob" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-peach/20 blur-3xl animate-blob [animation-delay:-8s]" />
        <Icon.Paw className="absolute right-[8%] top-12 h-40 w-40 rotate-12 text-white/[0.04] animate-float-slow" />
        <Icon.Paw className="absolute bottom-10 left-[6%] h-24 w-24 -rotate-12 text-white/[0.04] animate-float" />
      </div>
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="text-white">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" /></span>
                Slots available today
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Your pet's best <span className="shimmer-text">vet visit yet</span> starts here.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
                Book your first visit and get a complimentary nose-to-tail wellness exam — plus a welcome kit tailored to your pet.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-8 space-y-3 text-sm text-white/80">
                {["First exam free for new patients ($65 value)", "No commitment — cancel or reschedule anytime", "Records transferred for you"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-400 text-ink"><Icon.Check className="h-3 w-3" /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.08] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9">
              {sent ? (
                <div className="flex min-h-[26rem] flex-col items-center justify-center text-center text-white">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-400 text-ink shadow-lg shadow-brand-400/30">
                    <Icon.Check className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold">You're on the list!</h3>
                  <p className="mt-3 max-w-xs text-white/65">Our care team will text you within 10 minutes to confirm the perfect time for your {pet.toLowerCase()}.</p>
                  <button onClick={() => setSent(false)} className="mt-8 text-sm font-semibold text-brand-300 underline-offset-4 hover:underline">Book for another pet</button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5" aria-label="Book a visit">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">Request a visit</h3>
                    <p className="mt-1 text-sm text-white/55">Takes 30 seconds. We'll confirm by text.</p>
                  </div>
                  <fieldset>
                    <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">Who's coming in?</legend>
                    <div className="grid grid-cols-4 gap-2">
                      {petTypes.map((p) => (
                        <button type="button" key={p} onClick={() => setPet(p)} aria-pressed={pet === p} className={cn("rounded-xl border py-2.5 text-sm font-semibold transition-all duration-300", pet === p ? "border-brand-300 bg-brand-400 text-ink shadow-lg shadow-brand-400/20 scale-[1.03]" : "border-white/15 bg-white/5 text-white/70 hover:bg-white/10")}>
                          {p}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Your name</label>
                      <input id="name" name="name" required autoComplete="name" placeholder="Maya Rivera" className={input} />
                    </div>
                    <div>
                      <label htmlFor="petname" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Pet's name</label>
                      <input id="petname" name="petname" required placeholder="Biscuit" className={input} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Mobile number</label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="(555) 000-0000" className={input} />
                  </div>
                  <div>
                    <label htmlFor="reason" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Reason for visit <span className="normal-case tracking-normal text-white/35">(optional)</span></label>
                    <textarea id="reason" name="reason" rows={2} placeholder="Annual check-up, limping, vaccines…" className={cn(input, "resize-none")} />
                  </div>
                  <Button type="submit" variant="white" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <span className="inline-flex items-center gap-2"><span className="h-4 w-4 animate-spin rounded-full border-2 border-brand-800/30 border-t-brand-800" />Sending…</span>
                    ) : (
                      <>Request my free first visit <ArrowIcon /></>
                    )}
                  </Button>
                  <p className="text-center text-xs text-white/40">By submitting you agree to our privacy policy. No spam, ever.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
