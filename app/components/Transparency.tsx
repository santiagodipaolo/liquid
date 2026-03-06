const items = [
  { title: "Real-time dashboard", description: "Live positions, trades, and rebalances" },
  { title: "Full P&L reporting", description: "Fees, IL, arb captures, net performance" },
  { title: "Audit trail", description: "Every order and fill logged and exportable" },
  { title: "Custom alerts", description: "Notifications + CSV/API data exports" },
];

function DashboardMockup() {
  return (
    <div className="bg-zinc-950 border border-zinc-800/50 rounded-2xl overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/50">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight text-white">
            liquid.
          </span>
          <span className="text-xs text-zinc-600">dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-xs text-zinc-500">All systems operational</span>
        </div>
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-3 divide-x divide-zinc-800/50 border-b border-zinc-800/50">
        <div className="p-5">
          <div className="text-xs text-zinc-500 mb-1">Total Value Locked</div>
          <div className="text-xl font-mono font-bold text-white">$12.4M</div>
          <div className="text-xs text-emerald-400 mt-1">+2.1% 24h</div>
        </div>
        <div className="p-5">
          <div className="text-xs text-zinc-500 mb-1">24h Volume</div>
          <div className="text-xl font-mono font-bold text-white">$3.2M</div>
          <div className="text-xs text-emerald-400 mt-1">+8.4% 24h</div>
        </div>
        <div className="p-5">
          <div className="text-xs text-zinc-500 mb-1">Avg Spread</div>
          <div className="text-xl font-mono font-bold text-white">0.28%</div>
          <div className="text-xs text-zinc-400 mt-1">Target: 0.30%</div>
        </div>
      </div>

      {/* Chart area */}
      <div className="p-5 border-b border-zinc-800/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-zinc-500">Liquidity depth, 7d</span>
          <div className="flex gap-3">
            <span className="text-xs text-zinc-600">1D</span>
            <span className="text-xs text-blue-400">7D</span>
            <span className="text-xs text-zinc-600">30D</span>
          </div>
        </div>
        <svg
          viewBox="0 0 400 80"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 L30,55 L60,50 L90,52 L120,45 L150,40 L180,42 L210,35 L240,30 L270,28 L300,25 L330,22 L360,20 L400,18"
            fill="none"
            stroke="rgba(59,130,246,0.6)"
            strokeWidth="1.5"
          />
          <path
            d="M0,60 L30,55 L60,50 L90,52 L120,45 L150,40 L180,42 L210,35 L240,30 L270,28 L300,25 L330,22 L360,20 L400,18 L400,80 L0,80 Z"
            fill="url(#chartGrad)"
          />
        </svg>
      </div>

      {/* Recent activity */}
      <div className="px-5 py-4">
        <div className="text-xs text-zinc-500 mb-3">Recent activity</div>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-400" />
              <span className="text-xs text-zinc-400">
                Band rebalance · ETH/USDC
              </span>
            </div>
            <span className="text-xs text-zinc-600 font-mono">2m ago</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-emerald-400" />
              <span className="text-xs text-zinc-400">
                Arb captured · Base → Optimism
              </span>
            </div>
            <span className="text-xs text-zinc-600 font-mono">5m ago</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-400" />
              <span className="text-xs text-zinc-400">
                Position rotated · Uniswap v3
              </span>
            </div>
            <span className="text-xs text-zinc-600 font-mono">12m ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Transparency() {
  return (
    <section className="py-20 md:py-28 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Live
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          Radical transparency
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          Every client gets their own dashboard. Not a monthly PDF. A live view
          of everything we&apos;re doing, updated in real time.
        </p>

        <DashboardMockup />

        {/* Feature strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-6 h-px bg-blue-500/50 mb-3 mx-auto" />
              <h3 className="text-sm font-medium text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
