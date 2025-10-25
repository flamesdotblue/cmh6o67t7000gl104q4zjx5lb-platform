import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, LayoutDashboard, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Project cockpit',
    desc: 'Kanban, milestones, and statuses that keep every client project on track.'
  },
  {
    icon: Clock,
    title: 'Effortless time tracking',
    desc: 'One-click timers, manual entries, and smart summaries for billing.'
  },
  {
    icon: Calendar,
    title: 'Scheduling that sticks',
    desc: 'Plan weeks in minutes with focus blocks and automatic carryover.'
  },
  {
    icon: Zap,
    title: 'Faster proposals',
    desc: 'Reusable templates and e-sign to win work without the back-and-forth.'
  },
  {
    icon: Shield,
    title: 'Privacy by default',
    desc: 'Your data belongs to you. We use end-to-end encryption for sensitive items.'
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const DURATION = 3500; // ms per feature

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((i) => (i + 1) % features.length);
    }, DURATION);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <section id="features" className="border-t border-white/5 bg-neutral-950/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Minimal on the surface. Powerful underneath.</h2>
          <p className="mt-3 text-neutral-300">Everything you need to run your freelance practice—without bloat or busywork.</p>
        </div>

        {/* Spotlight rail */}
        <div
          className="relative mt-10 flex flex-col gap-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative text-left outline-none"
                  initial={false}
                  whileHover={{ y: -2 }}
                >
                  <motion.div
                    className="relative rounded-2xl border border-white/10 bg-white/5 p-6 transition"
                    animate={{
                      borderColor: isActive ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.1)',
                      backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
                      boxShadow: isActive
                        ? '0 20px 60px -20px rgba(99,102,241,0.35)'
                        : '0 0 0 rgba(0,0,0,0)',
                      scale: isActive ? 1.01 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <div className="mb-4 inline-flex items-center gap-2">
                      <div className="rounded-lg border border-white/10 bg-neutral-900 p-2 text-indigo-300">
                        <Icon size={18} />
                      </div>
                      <AnimatePresence mode="wait" initial={false}>
                        {isActive && (
                          <motion.span
                            key="active-pill"
                            className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-300"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                          >
                            Spotlight
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <h3 className="text-lg font-medium text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</p>

                    {/* Glow accent */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
                      style={{
                        background:
                          'radial-gradient(400px 160px at 20% 0%, rgba(99,102,241,0.22), transparent)',
                      }}
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35 }}
                    />

                    {/* Progress bar for the active card */}
                    <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        key={isActive ? `prog-${i}-${active}` : `prog-idle-${i}`}
                        className="h-full bg-gradient-to-r from-indigo-400 to-indigo-300"
                        initial={{ width: 0 }}
                        animate={{ width: isActive && !paused ? '100%' : 0 }}
                        transition={{ duration: isActive ? DURATION / 1000 : 0, ease: 'linear' }}
                      />
                    </div>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>

          {/* Sequential highlight rail with preview panel */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
              <div className="space-y-3 md:col-span-1">
                <div className="text-sm uppercase tracking-wide text-neutral-400">Focus mode</div>
                <div className="text-xl font-medium text-white">{features[active].title}</div>
                <p className="text-sm text-neutral-300">{features[active].desc}</p>
              </div>
              <motion.div
                className="relative md:col-span-2"
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {/* Lightweight illustrative preview that adapts to the active feature */}
                <div className="rounded-xl border border-white/10 bg-neutral-900/70 p-4 backdrop-blur">
                  {/* Header dots */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>

                  {/* Dynamic content */}
                  <AnimatePresence mode="wait">
                    {active === 0 && (
                      <motion.div
                        key="kanban"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-3 gap-3"
                      >
                        {["Backlog","In Progress","Review"].map((col, idx) => (
                          <div key={col} className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <div className="text-xs uppercase tracking-wide text-neutral-400">{col}</div>
                            <div className="mt-2 space-y-2">
                              {[1,2].map((n) => (
                                <div key={n} className="rounded-md bg-neutral-800/70 p-2 text-xs text-neutral-200">Task {idx+1}.{n}</div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {active === 1 && (
                      <motion.div
                        key="time"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-2 gap-3"
                      >
                        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className="flex items-center justify-between text-xs text-neutral-300">
                            <span>Design review • Apollo</span>
                            <span className="text-indigo-300">02:14:23</span>
                          </div>
                          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-2/3 bg-indigo-500/70" />
                          </div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-neutral-300">
                          <div className="flex items-center justify-between">
                            <span>Week total</span>
                            <span className="text-indigo-300">18h</span>
                          </div>
                          <div className="mt-2 grid grid-cols-5 gap-2">
                            {[4,3,5,2,4].map((h, i) => (
                              <div key={i} className="h-10 w-full rounded bg-neutral-800">
                                <div className="h-full w-full rounded bg-indigo-500/40" style={{ height: `${(h/5)*100}%` }} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {active === 2 && (
                      <motion.div
                        key="schedule"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-4 gap-3"
                      >
                        {["Mon","Tue","Wed","Thu"].map((d) => (
                          <div key={d} className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <div className="text-xs uppercase tracking-wide text-neutral-400">{d}</div>
                            <div className="mt-2 space-y-2">
                              <div className="rounded-md bg-indigo-500/20 p-2 text-xs text-indigo-200">Focus block</div>
                              <div className="rounded-md bg-neutral-800/70 p-2 text-xs text-neutral-200">Client call</div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {active === 3 && (
                      <motion.div
                        key="proposals"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-3 gap-3"
                      >
                        <div className="col-span-2 rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className="text-xs uppercase tracking-wide text-neutral-400">Template</div>
                          <div className="mt-2 space-y-2 text-sm text-neutral-200">
                            <div>Scope • Timeline • Investment</div>
                            <div className="rounded-md bg-neutral-800/70 p-2 text-xs">Add e-signature field</div>
                          </div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-neutral-300">
                          <div className="flex items-center justify-between">
                            <span>Status</span>
                            <span className="text-green-300">Accepted</span>
                          </div>
                          <div className="mt-2">Signed • 2 mins ago</div>
                        </div>
                      </motion.div>
                    )}

                    {active === 4 && (
                      <motion.div
                        key="privacy"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-2 gap-3"
                      >
                        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-neutral-200">
                          End‑to‑end encryption enabled
                          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-full bg-emerald-400/80" />
                          </div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-neutral-300">
                          <div className="flex items-center justify-between">
                            <span>Access requests</span>
                            <span className="text-indigo-300">0</span>
                          </div>
                          <div className="mt-2 text-neutral-400">Private by default</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Control bar */}
            <div className="flex flex-col items-center gap-4 border-t border-white/5 px-6 py-4 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <span className="text-neutral-400">Auto-advance:</span>
                <button
                  onClick={() => setPaused((p) => !p)}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-100 transition hover:bg-white/10"
                  aria-pressed={!paused}
                >
                  {paused ? 'Paused' : 'Playing'}
                </button>
              </div>

              <div className="flex items-center gap-2">
                {features.map((f, i) => (
                  <button
                    key={f.title}
                    onClick={() => setActive(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${i === active ? 'bg-indigo-400' : 'bg-white/20 hover:bg-white/40'}`}
                    aria-label={`Go to ${f.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing remains below */}
        <div id="pricing" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold text-white">Simple pricing</h3>
            <p className="mt-2 text-neutral-300">Start free. Upgrade when you need unlimited projects and advanced automation.</p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-neutral-400">Starter</div>
              <div className="mt-2 text-3xl font-semibold text-white">Free</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li>Up to 3 active projects</li>
                <li>Time tracking & Kanban</li>
                <li>Basic invoices</li>
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-100 transition hover:bg-white/10">Get started</a>
            </div>

            <div className="relative rounded-xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-white/5 p-6">
              <div className="text-sm text-indigo-300">Pro</div>
              <div className="mt-2 text-3xl font-semibold text-white">$12/mo</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-200">
                <li>Unlimited projects & clients</li>
                <li>Smart proposals & e-sign</li>
                <li>Automated invoices & reminders</li>
                <li>Priority support</li>
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200">Upgrade</a>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl" style={{ background: 'radial-gradient(500px 200px at 80% 0%, rgba(79,70,229,0.25), transparent)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
