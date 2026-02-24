const services = [
  {
    num: "01",
    title: "Liquidity Strategy Design",
    description:
      "Long-term liquidity frameworks that define how liquidity is distributed over time, at which price levels deeper liquidity exists, and the implicit valuation corridor for your token.",
  },
  {
    num: "02",
    title: "Dynamic Band Management",
    description:
      "Active liquidity management through dynamic bands — a ~5% wide mobility band for healthy depth and smooth price discovery, and a ~2% tight band for immediate stability and spread control.",
  },
  {
    num: "03",
    title: "Multi-Chain Deployment",
    description:
      "Simultaneous liquidity deployment across L2 networks with unified strategy logic, coordinated pricing, and reduced fragmentation between chains.",
  },
  {
    num: "04",
    title: "Cross-Chain Arbitrage",
    description:
      "Dedicated arbitrage infrastructure that keeps prices aligned across chains, prevents third-party value extraction, and captures arbitrage profits internally for the protocol.",
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
          End-to-end liquidity infrastructure — from strategy design to
          automated execution across multiple chains.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
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
