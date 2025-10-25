import { ArrowRight, Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative border-t border-white/5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-300">
                <Rocket size={14} className="text-indigo-300" />
                <span>Launch your next project with mIKKA TASK</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Start free in minutes</h3>
              <p className="mt-2 max-w-xl text-neutral-300">Set up your workspace, import tasks, and get to work. No credit card required.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500">
                Create your account
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#" className="text-sm text-neutral-300 underline-offset-4 hover:underline">Book a 15-min demo</a>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-neutral-400 md:flex-row">
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="font-medium text-white">mIKKA TASK</span>
            <span className="text-neutral-500">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
