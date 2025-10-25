import { Rocket, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight">mIKKA TASK</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="rounded-md px-3 py-2 text-sm text-neutral-300 transition hover:text-white">Sign in</a>
          <a href="#cta" className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200">Get started</a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white md:hidden">
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-neutral-950/90 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white" onClick={() => setOpen(false)}>Features</a>
            <a href="#pricing" className="hover:text-white" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#faq" className="hover:text-white" onClick={() => setOpen(false)}>FAQ</a>
            <div className="mt-2 flex items-center gap-2">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/10 px-3 py-2 text-neutral-200">
                <User size={16} /> Sign in
              </button>
              <a href="#cta" onClick={() => setOpen(false)} className="flex-1 rounded-md bg-white px-3 py-2 text-center font-medium text-neutral-900">Start</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
