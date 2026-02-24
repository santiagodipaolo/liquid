const phases = [
  {
    phase: "Phase I",
    title: "Design",
    items: [
      {
        name: "Long-Term Liquidity Framework",
        description:
          "Define how liquidity is distributed over the protocol's lifetime, at which price levels deeper liquidity exists, and the implicit valuation corridor over time.",
      },
      {
        name: "Short-Term Backstop",
        description:
          "A reactive liquidity layer within a tight range around the current price — absorbs sudden pressure, allows real demand to drive price, and regains control when bands are exceeded.",
      },
      {
        name: "Dynamic Band Configuration",
        description:
          "Calibration of wide (~5%) and tight (~2%) mobility bands that work together for depth, stability, and smooth price discovery.",
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
          "Simultaneous deployment on target L2 networks with unified strategy logic, coordinated pricing, and reduced fragmentation.",
      },
      {
        name: "Automated Bot Infrastructure",
        description:
          "Liquidity management bots handling rotation, rebalancing, and band adjustments autonomously around the clock.",
      },
      {
        name: "Cross-Chain Arbitrage",
        description:
          "Dedicated arbitrage system keeping prices aligned across chains and capturing value internally for the protocol.",
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
          A two-phase approach: first we design the strategy, then we deploy and
          manage it.
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
