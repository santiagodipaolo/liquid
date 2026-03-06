"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ── Toggle ── */
function Toggle({
  active,
  onToggle,
}: {
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="relative flex items-center gap-3 mx-auto mb-12 group"
      aria-label={active ? "Showing with liquid" : "Showing without liquid"}
    >
      <span
        className={`text-sm font-medium transition-colors duration-300 ${
          !active ? "text-red-400" : "text-zinc-600"
        }`}
      >
        Without liquid.
      </span>
      <div className="relative w-14 h-7 rounded-full bg-zinc-800 border border-zinc-700 transition-colors duration-300">
        <div
          className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 ${
            active
              ? "left-[calc(100%-1.625rem)] bg-blue-500"
              : "left-0.5 bg-red-500"
          }`}
        />
      </div>
      <span
        className={`text-sm font-medium transition-colors duration-300 ${
          active ? "text-blue-400" : "text-zinc-600"
        }`}
      >
        With liquid.
      </span>
    </button>
  );
}

/* ── Order Book Viz ── */
function OrderBookViz({ active }: { active: boolean }) {
  const bids = active
    ? [
        { price: "99.7", width: 90 },
        { price: "99.5", width: 80 },
        { price: "99.3", width: 70 },
        { price: "99.0", width: 55 },
        { price: "98.5", width: 40 },
      ]
    : [
        { price: "98.0", width: 25 },
        { price: "97.5", width: 20 },
        { price: "97.0", width: 15 },
        { price: "96.0", width: 10 },
        { price: "95.0", width: 8 },
      ];

  const asks = active
    ? [
        { price: "100.3", width: 88 },
        { price: "100.5", width: 78 },
        { price: "100.7", width: 68 },
        { price: "101.0", width: 52 },
        { price: "101.5", width: 38 },
      ]
    : [
        { price: "102.5", width: 22 },
        { price: "103.0", width: 18 },
        { price: "104.0", width: 12 },
        { price: "105.0", width: 8 },
        { price: "106.0", width: 6 },
      ];

  return (
    <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-white mb-1">Order Book</h3>
      <p className="text-xs text-zinc-500 mb-4">Depth and spread</p>
      <div className="space-y-1.5">
        {asks
          .slice()
          .reverse()
          .map((level) => (
            <div key={`ask-${level.price}`} className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-500 w-12 text-right">
                {level.price}
              </span>
              <div className="flex-1 flex justify-start">
                <div
                  className="h-4 rounded-r-sm transition-all duration-[600ms] bg-red-500/30"
                  style={{ width: `${level.width}%` }}
                />
              </div>
            </div>
          ))}
        <div className="border-t border-dashed border-zinc-700 my-2" />
        {bids.map((level) => (
          <div key={`bid-${level.price}`} className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 w-12 text-right">
              {level.price}
            </span>
            <div className="flex-1 flex justify-start">
              <div
                className="h-4 rounded-r-sm transition-all duration-[600ms] bg-blue-500/30"
                style={{ width: `${level.width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Price Spread Chart (SVG) ── */
function PriceSpreadChart({ active }: { active: boolean }) {
  const volatilePath =
    "M0,60 L20,45 L40,70 L60,30 L80,65 L100,25 L120,55 L140,35 L160,60 L180,20 L200,50 L220,40 L240,65 L260,30 L280,55 L300,45";
  const smoothPath =
    "M0,48 L20,46 L40,50 L60,47 L80,49 L100,46 L120,48 L140,47 L160,49 L180,46 L200,48 L220,47 L240,49 L260,47 L280,48 L300,47";

  const volatileUpper =
    "M0,30 L20,15 L40,40 L60,5 L80,35 L100,0 L120,25 L140,10 L160,30 L180,0 L200,20 L220,10 L240,35 L260,5 L280,25 L300,15";
  const volatileLower =
    "M0,90 L20,75 L40,100 L60,55 L80,95 L100,50 L120,85 L140,60 L160,90 L180,45 L200,80 L220,70 L240,95 L260,55 L280,85 L300,75";

  const smoothUpper =
    "M0,40 L20,38 L40,42 L60,39 L80,41 L100,38 L120,40 L140,39 L160,41 L180,38 L200,40 L220,39 L240,41 L260,39 L280,40 L300,39";
  const smoothLower =
    "M0,56 L20,54 L40,58 L60,55 L80,57 L100,54 L120,56 L140,55 L160,57 L180,54 L200,56 L220,55 L240,57 L260,55 L280,56 L300,55";

  return (
    <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-white mb-1">Price Stability</h3>
      <p className="text-xs text-zinc-500 mb-4">Volatility envelope</p>
      <div className="relative h-28">
        {/* Without Liquid — volatile */}
        <svg
          viewBox="0 0 300 100"
          className={`absolute inset-0 w-full h-full transition-opacity duration-[600ms] ${
            active ? "opacity-0" : "opacity-100"
          }`}
          preserveAspectRatio="none"
        >
          <path d={volatileUpper} fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="1" />
          <path d={volatileLower} fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="1" />
          <path d={volatilePath} fill="none" stroke="rgba(239,68,68,0.7)" strokeWidth="2" />
        </svg>
        {/* With Liquid — smooth */}
        <svg
          viewBox="0 0 300 100"
          className={`absolute inset-0 w-full h-full transition-opacity duration-[600ms] ${
            active ? "opacity-100" : "opacity-0"
          }`}
          preserveAspectRatio="none"
        >
          <path d={smoothUpper} fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
          <path d={smoothLower} fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
          <path d={smoothPath} fill="none" stroke="rgba(59,130,246,0.7)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

/* ── useCountAnimation hook ── */
function useCountAnimation(target: number, active: boolean, duration = 600) {
  const [value, setValue] = useState(target);
  const rafRef = useRef<number>(0);

  const animate = useCallback(
    (from: number, to: number) => {
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // cubic ease-out
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(from + (to - from) * eased);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        }
      };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(step);
    },
    [duration]
  );

  useEffect(() => {
    animate(value, target);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, animate]);

  return value;
}

/* ── Key Metrics ── */
function KeyMetrics({ active }: { active: boolean }) {
  const spread = useCountAnimation(active ? 0.3 : 2.5, active);
  const depth = useCountAnimation(active ? 2000 : 50, active);
  const slippage = useCountAnimation(active ? 0.1 : 1.8, active);

  const metrics = [
    {
      label: "Spread",
      value: `${spread.toFixed(1)}%`,
      good: active,
    },
    {
      label: "Depth",
      value: depth >= 1000 ? `$${(depth / 1000).toFixed(1)}M` : `$${depth.toFixed(0)}K`,
      good: active,
    },
    {
      label: "Slippage",
      value: `${slippage.toFixed(1)}%`,
      good: active,
    },
  ];

  return (
    <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-white mb-1">Key Metrics</h3>
      <p className="text-xs text-zinc-500 mb-4">Performance comparison</p>
      <div className="space-y-5">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-zinc-500">{m.label}</span>
              <span
                className={`text-lg font-mono font-bold transition-colors duration-300 ${
                  m.good ? "text-blue-400" : "text-red-400"
                }`}
              >
                {m.value}
              </span>
            </div>
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-[600ms] ${
                  m.good ? "bg-blue-500" : "bg-red-500"
                }`}
                style={{
                  width: m.good ? "90%" : "25%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function Comparison() {
  const [withLiquid, setWithLiquid] = useState(false);

  return (
    <section className="py-20 md:py-28 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 text-center">
          The <span className="lowercase">liquid.</span> difference
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed text-center">
          Toggle to see what changes when we&apos;re in the picture.
        </p>

        <Toggle active={withLiquid} onToggle={() => setWithLiquid((v) => !v)} />

        <div className="grid md:grid-cols-3 gap-6">
          <OrderBookViz active={withLiquid} />
          <PriceSpreadChart active={withLiquid} />
          <KeyMetrics active={withLiquid} />
        </div>
      </div>
    </section>
  );
}
