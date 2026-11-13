const columns = [
  {
    tag: "CEX",
    title: "Order Book Operations",
    items: [
      {
        name: "Algorithmic Quoting",
        description:
          "We deploy and configure open-source quoting software on your exchange accounts. It places and updates bids and asks continuously, within the spread, size and inventory limits you approve.",
      },
      {
        name: "Tight Spread Management",
        description:
          "We recommend spread and depth settings from data, you sign off, and we monitor the book against those targets and flag drift.",
      },
      {
        name: "Multi-Exchange Coverage",
        description:
          "The same configuration running across every exchange where you hold accounts, with shared risk limits you define.",
      },
      {
        name: "24/7 Operations",
        description:
          "Markets don't close. We monitor the software around the clock, with alerts, kill switches, failovers and a live dashboard you can see.",
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
          "Your liquidity, from your wallets, placed in concentrated ranges on AMMs. Tighter ranges mean more fees captured per dollar deployed.",
      },
      {
        name: "Dynamic Band Management",
        description:
          "Two bands working together: a wide one for depth and price discovery, a tight one for stability. Both move with the market automatically.",
      },
      {
        name: "Multi-Chain Deployment",
        description:
          "The same approved configuration running across L2s at once. Less fragmentation, same experience for traders on every chain.",
      },
      {
        name: "Cross-Chain Price Alignment",
        description:
          "When prices drift between chains, software running on your wallets closes the gap. The proceeds land in your accounts, not a random MEV bot's.",
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
          We set up and operate liquidity software for you, on centralized
          exchanges and across DeFi. Your accounts, your capital, your sign-off.
          Our software operations.
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
