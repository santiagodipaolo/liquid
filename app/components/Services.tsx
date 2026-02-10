const services = [
  {
    num: "01",
    title: "Market Making",
    description:
      "Continuous, two-sided liquidity with tight spreads. Our algorithms adapt to market conditions in real-time, ensuring consistent depth across order books.",
  },
  {
    num: "02",
    title: "Token Launches",
    description:
      "Liquidity from day one. We design and execute launch strategies that establish healthy markets and sustainable trading activity for new tokens.",
  },
  {
    num: "03",
    title: "OTC & Treasury",
    description:
      "Large block execution with minimal market impact. Discreet, efficient settlement for institutional-size trades and treasury management.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
          What we do
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.num}
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:border-zinc-700/50 transition-colors"
            >
              <span className="text-sm font-mono text-zinc-600 mb-4 block">
                {s.num}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3">
                {s.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
