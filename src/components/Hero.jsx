import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">
            <span className="text-indigo-300">New</span>
            <span>Time tracking • Kanban • Proposals</span>
          </div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Manage your freelance projects with clarity and speed
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            mIKKA TASK is a modern, minimal, and powerful workspace that helps freelancers plan, track, and deliver client work without the chaos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#cta" className="group inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500">
              Get started free
              <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-neutral-100 transition hover:bg-white/10">
              See how it works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-300">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Trusted by 2k+ independent professionals</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 shadow-2xl">
            <div className="rounded-xl border border-white/10 bg-neutral-900/80 p-4 backdrop-blur">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-neutral-400">Today</span>
                    <span className="text-xs text-neutral-400">4 tasks</span>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-center justify-between rounded-md bg-neutral-800/60 p-2 text-neutral-200">
                      Design review • Apollo Co.
                      <span className="rounded bg-indigo-600/20 px-2 py-0.5 text-xs text-indigo-300">2h</span>
                    </li>
                    <li className="flex items-center justify-between rounded-md bg-neutral-800/60 p-2 text-neutral-200">
                      Proposal draft • Mira LLC
                      <span className="rounded bg-indigo-600/20 px-2 py-0.5 text-xs text-indigo-300">45m</span>
                    </li>
                    <li className="flex items-center justify-between rounded-md bg-neutral-800/60 p-2 text-neutral-200">
                      Dev sprint • Nova Labs
                      <span className="rounded bg-indigo-600/20 px-2 py-0.5 text-xs text-indigo-300">3h</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm">
                  <div className="text-xs uppercase tracking-wide text-neutral-400">This week</div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between text-neutral-200">
                      Billable
                      <span className="text-indigo-300">18h</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-200">
                      Invoices
                      <span className="text-indigo-300">3</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-200">
                      Revenue
                      <span className="text-indigo-300">$2,450</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-neutral-300">
                Tip: Track time as you work and auto-generate invoices.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
