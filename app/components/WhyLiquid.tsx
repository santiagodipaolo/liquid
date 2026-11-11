const reasons = [
  {
    title: "You stay in control",
    description:
      "No token loans, no options, no custody. Your tokens and capital stay in accounts you own, and our API keys can trade but never withdraw. You approve every parameter change, and you can revoke access at any time.",
  },
  {
    title: "Open source, not a black box",
    description:
      "We run open-source software you can read and audit. Every configuration is modeled and backtested before we propose it, and nothing goes live without your approval.",
  },
  {
    title: "Battle-tested systems",
    description:
      "Redundant infrastructure, automated failovers, round-the-clock monitoring and kill switches, so volatility spikes and chain outages don't leave your book unattended.",
  },
  {
    title: "Flat fee, no conflicts",
    description:
      "We're paid a flat monthly retainer. We never trade your token for our own account, hold a position in it, or earn from its volume or price. Everything the software earns stays in your accounts.",
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
