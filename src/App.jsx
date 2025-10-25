import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(79,70,229,0.18),rgba(17,17,17,0))]" />
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  );
}

export default App;
