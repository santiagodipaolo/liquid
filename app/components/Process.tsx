const phases = [
  {
    phase: "Phase I",
    title: "Design",
    items: [
      {
        name: "Long-Term Liquidity Framework",
        description:
          "We map out how your liquidity should look over time. Where the depth sits, what price levels matter, how the corridor evolves.",
      },
      {
        name: "Short-Term Backstop",
        description:
          "A reactive layer that sits tight around the current price. It absorbs sell pressure, lets real demand move things, and kicks in when bands get hit.",
      },
      {
        name: "Dynamic Band Configuration",
        description:
          "We set up two bands: a ~5% wide band for depth, and a ~2% tight band for stability. Together they give you controlled, smooth markets.",
      },
    ],
  },
  {
    phase: "Phase II",
    title: "Execution",
    items: [
      {
        name: "Multi-Chain Deployment",
        description:
          "We go live on your target L2s with the same strategy logic running everywhere. Pricing stays coordinated, liquidity stays concentrated.",
      },
      {
        name: "Automated Bot Infrastructure",
        description:
          "Bots handle rotation, rebalancing, and band adjustments 24/7. No manual intervention unless something truly unexpected happens.",
      },
      {
        name: "Cross-Chain Arbitrage",
        description:
          "A dedicated system watches for price gaps between chains and closes them before external actors can. The profit stays inside your protocol.",
      },
    ],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 border-t border-zinc-800/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          How it works
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-16 leading-relaxed">
          Two phases. First we figure out the right strategy, then we build and
          run it.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                  {phase.phase}
                </span>
                <span className="text-xl font-semibold text-white">
                  {phase.title}
                </span>
              </div>
              <div className="space-y-6">
                {phase.items.map((item, i) => (
                  <div key={item.name} className="flex gap-4">
                    <span className="text-sm font-mono text-zinc-600 pt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
