import { Calendar, Clock, LayoutDashboard, Shield, Zap } from 'lucide-react';

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
  return (
    <section id="features" className="border-t border-white/5 bg-neutral-950/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Minimal on the surface. Powerful underneath.</h2>
          <p className="mt-3 text-neutral-300">Everything you need to run your freelance practice—without bloat or busywork.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20">
              <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-neutral-900 p-2 text-indigo-300">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</p>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-100" style={{ background: 'radial-gradient(400px 120px at 20% 0%, rgba(99,102,241,0.15), transparent)' }} />
            </div>
          ))}
        </div>

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
