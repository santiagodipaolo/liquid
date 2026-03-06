import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loan Model vs Retainer Model | Market Making Comparison",
  description:
    "Side-by-side comparison of the two most common market making models. Understand the trade-offs before choosing a liquidity partner.",
  openGraph: {
    title: "Loan vs Retainer | liquid.",
    description:
      "Side-by-side comparison of market making models. Token loan vs retainer, explained.",
  },
};

const rows = [
  {
    label: "How it works",
    loan: "You give the market maker a large token allocation. They use it as inventory and return it (minus options) after 12-24 months.",
    retainer:
      "You pay a monthly fee. The market maker provides liquidity using their own capital or within parameters you define together.",
  },
  {
    label: "Your tokens",
    loan: "In someone else's hands for the duration of the contract.",
    retainer: "Stay in your treasury. Always.",
  },
  {
    label: "Incentive alignment",
    loan: "The MM profits from the option and from managing inventory they got for free. Their upside isn't directly tied to your market quality.",
    retainer:
      "The MM gets paid to deliver tight spreads and deep books. That's the entire job description.",
  },
  {
    label: "Transparency",
    loan: "Usually a monthly report. What happens between reports is often a black box.",
    retainer:
      "Real-time dashboard. Every position, trade, and rebalance visible as it happens.",
  },
  {
    label: "Sell pressure risk",
    loan: "The MM may hedge by shorting your token, or exercise options into sell pressure. You might not know it's happening.",
    retainer: "Zero sell pressure from the market maker. They don't hold your tokens.",
  },
  {
    label: "Contract flexibility",
    loan: "Typically 12-24 month lock. Hard to exit early without losing the loaned tokens or paying penalties.",
    retainer:
      "Monthly engagement. Scale up, scale down, or stop when you need to.",
  },
  {
    label: "Upfront cost",
    loan: "Looks free (no cash), but you're giving away tokens that could be worth significantly more over time.",
    retainer: "Fixed monthly fee. Predictable, budgetable, no hidden costs.",
  },
  {
    label: "Best for",
    loan: "Very early projects with no budget and no other options.",
    retainer:
      "Any project with treasury, funding, or revenue that wants control and transparency.",
  },
];

export default function ComparePage() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Home
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Loan model vs retainer model
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mb-16 leading-relaxed">
          Two ways to work with a market maker. One gives away your tokens and
          hopes for the best. The other pays for a service and keeps full
          control.
        </p>

        {/* Comparison table - desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-4 pr-8 w-1/5 text-zinc-500 font-medium">
                  &nbsp;
                </th>
                <th className="text-left py-4 pr-8 w-2/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-red-400 font-semibold">
                      Token loan model
                    </span>
                  </div>
                </th>
                <th className="text-left py-4 w-2/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-blue-400 font-semibold">
                      Retainer model
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-zinc-800/50">
                  <td className="py-5 pr-8 text-zinc-500 font-medium align-top">
                    {row.label}
                  </td>
                  <td className="py-5 pr-8 text-zinc-400 leading-relaxed align-top">
                    {row.loan}
                  </td>
                  <td className="py-5 text-zinc-300 leading-relaxed align-top">
                    {row.retainer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comparison cards - mobile */}
        <div className="md:hidden space-y-8">
          {rows.map((row) => (
            <div key={row.label}>
              <h3 className="text-sm font-medium text-zinc-500 mb-3">
                {row.label}
              </h3>
              <div className="space-y-3">
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-xs font-medium text-red-400">
                      Token loan
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {row.loan}
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-xs font-medium text-blue-400">
                      Retainer
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {row.retainer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-16 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Our take
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            We work exclusively on retainer. We think it&apos;s the only model
            where the market maker&apos;s success is fully tied to yours. No
            token loans, no options, no inventory games. You pay for a service,
            you get full transparency, and your tokens never leave your control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="bg-white text-zinc-950 px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors text-center"
            >
              Get in Touch
            </Link>
            <Link
              href="/blog/loan-vs-retainer"
              className="border border-zinc-700 text-zinc-300 px-8 py-3 rounded-full hover:border-zinc-500 hover:text-white transition-colors text-center"
            >
              Read the Full Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
