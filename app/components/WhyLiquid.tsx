const reasons = [
  {
    title: "Engineering-first",
    description:
      "Built by quants and systems engineers with deep experience in high-frequency trading infrastructure and distributed systems.",
  },
  {
    title: "Battle-tested infrastructure",
    description:
      "Proprietary low-latency execution engine designed for reliability under extreme market conditions and high throughput.",
  },
  {
    title: "Fully transparent",
    description:
      "Real-time reporting dashboards. No hidden spreads, no opaque fee structures. You see exactly what we see.",
  },
  {
    title: "Aligned incentives",
    description:
      "We succeed when you succeed. Token-native strategies with skin in the game ensure our interests are aligned with yours.",
  },
];

export default function WhyLiquid() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
          Why Liquid
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((r) => (
            <div key={r.title}>
              <div className="w-8 h-px bg-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {r.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
