const phases = [
  {
    phase: "Phase I",
    title: "Design",
    items: [
      {
        name: "Long-Term Liquidity Framework",
        description:
          "We map out how your liquidity could look over time: where the depth sits and how it evolves. You decide what goes live.",
      },
      {
        name: "Near-Price Depth",
        description:
          "A layer of depth close to the current price so normal-size trades fill without slippage, while real supply and demand still set the price.",
      },
      {
        name: "Dynamic Band Configuration",
        description:
          "We propose two bands, a ~5% wide band for depth and a ~2% tight band near the price, and you approve the final settings.",
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
          "The software goes live on your accounts across your target L2s, with the same approved configuration everywhere.",
      },
      {
        name: "Automated Bot Infrastructure",
        description:
          "Open-source bots handle rotation and rebalancing 24/7 within your limits. We monitor, alert, and pause the software if something unexpected happens.",
      },
      {
        name: "Cross-Chain Price Alignment",
        description:
          "Software on your wallets watches for price gaps between chains and closes them before external actors can. The proceeds stay in your accounts.",
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
          Two phases. First we propose a configuration and you approve it.
          Then we deploy the software on your accounts and operate it.
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
