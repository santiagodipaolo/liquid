const reasons = [
  {
    title: "No token loans",
    description:
      "Most market makers ask for a token loan. They get your supply for free and use it however they see fit. We work on a retainer. You provide the liquidity, we manage it with full transparency. Every position visible, every trade accounted for.",
  },
  {
    title: "Quantitative, not discretionary",
    description:
      "We don't trade on gut feel. Every strategy is modeled, backtested, and calibrated before it goes live. Parameters are data, not opinions.",
  },
  {
    title: "Battle-tested systems",
    description:
      "Redundant infrastructure, automated failovers, 99.9% uptime. We've been through volatility spikes, chain outages, and black swan events. The systems hold.",
  },
  {
    title: "Value stays with you",
    description:
      "Cross-chain arb is inevitable. The question is who captures it. With us, that value flows back to your protocol instead of leaking to random bots.",
  },
];

export default function WhyLiquid() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
          Why liquid.
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
