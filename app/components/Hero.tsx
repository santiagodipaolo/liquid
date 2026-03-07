export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Primary blue glow */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[70%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.15), transparent 65%)",
        }}
      />
      {/* Secondary softer glow for depth */}
      <div
        className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,160,255,0.08), transparent 60%)",
        }}
      />

      <div className="relative mb-6 inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-xs text-blue-300 font-medium tracking-wide">
          Early pricing for first 20 clients
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 relative">
        Liquidity, engineered.
      </h1>

      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed relative">
        Algorithmic market making and DEX liquidity management.
        <span className="block mt-1">
          Deep order books, tight spreads, every chain.
        </span>
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
          How It Works
        </a>
      </div>
    </section>
  );
}
