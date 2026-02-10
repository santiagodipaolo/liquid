export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.08), transparent 70%)",
        }}
      />

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 relative">
        Liquidity, engineered.
      </h1>

      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed relative">
        Institutional-grade market making for digital assets. Algorithmic
        liquidity, 24/7, across centralized and decentralized exchanges.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 relative">
        <a
          href="#contact"
          className="bg-white text-zinc-950 px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="#services"
          className="border border-zinc-700 text-zinc-300 px-8 py-3 rounded-full hover:border-zinc-500 hover:text-white transition-colors"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
