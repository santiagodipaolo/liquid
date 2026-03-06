const columns = [
  {
    tag: "CEX",
    title: "Order Book Market Making",
    items: [
      {
        name: "Algorithmic Quoting",
        description:
          "We place and update bid/ask quotes automatically. Our algorithms read volatility, track inventory, and adjust continuously. Not once a minute. All the time.",
      },
      {
        name: "Tight Spread Management",
        description:
          "We keep spreads tight across the full depth of the book. Better prices for traders, better fill rates for you.",
      },
      {
        name: "Multi-Exchange Coverage",
        description:
          "We run on multiple exchanges at once with shared risk limits and coordinated pricing. One strategy, consistent execution everywhere.",
      },
      {
        name: "24/7 Operations",
        description:
          "Markets don't close, and neither do we. Automated systems with monitoring, failovers, and live dashboards running around the clock.",
      },
    ],
  },
  {
    tag: "DEX",
    title: "Liquidity Management",
    items: [
      {
        name: "Concentrated Liquidity Positions",
        description:
          "We deploy capital into concentrated ranges on AMMs. Tighter ranges mean more fees captured per dollar of liquidity deployed.",
      },
      {
        name: "Dynamic Band Management",
        description:
          "Two bands working together: a wide one for depth and price discovery, a tight one for stability. Both move with the market automatically.",
      },
      {
        name: "Multi-Chain Deployment",
        description:
          "Same strategy running across L2s simultaneously. Coordinated pricing, less fragmentation, same experience for traders on every chain.",
      },
      {
        name: "Cross-Chain Arbitrage",
        description:
          "When prices drift between chains, we capture the difference before someone else does. That value stays in your ecosystem, not a random MEV bot's.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          What we do
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-16 leading-relaxed">
          We make markets on centralized exchanges and manage liquidity across
          DeFi. Both sides, one team.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {columns.map((col) => (
            <div
              key={col.tag}
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                  {col.tag}
                </span>
                <span className="text-xl font-semibold text-white">
                  {col.title}
                </span>
              </div>
              <div className="space-y-6">
                {col.items.map((item, i) => (
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
