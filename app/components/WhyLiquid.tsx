const reasons = [
  {
    title: "Quantitative & systematic",
    description:
      "Every decision is data-driven. Our strategies are built on quantitative models that define liquidity distribution, band placement, and rebalancing logic — no manual guesswork.",
  },
  {
    title: "Protocol-aligned",
    description:
      "Dynamic liquidity layers are fully aligned with your long-term plan, ensuring movements remain consistent with your intended valuation trajectory and token distribution goals.",
  },
  {
    title: "Full transparency",
    description:
      "Real-time monitoring dashboards, performance reporting, and complete visibility into every liquidity operation. You see exactly what we see.",
  },
  {
    title: "Value retention",
    description:
      "Our cross-chain arbitrage infrastructure captures value that would otherwise be extracted by third parties, keeping profits within the protocol ecosystem.",
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
