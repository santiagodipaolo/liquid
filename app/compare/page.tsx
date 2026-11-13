import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Token Loan vs Self-Custody Retainer | Liquidity Models Compared",
  description:
    "Side-by-side comparison: lending tokens to a market maker vs running market making on your own accounts with a retained operator. Understand the trade-offs first.",
  openGraph: {
    title: "Loan vs Retainer | weibull.",
    description:
      "Token loan to a market maker vs your own accounts with a retained operator, explained.",
  },
};

const rows = [
  {
    label: "How it works",
    loan: "You give the market maker a large token allocation for free. They use it as inventory and return it (minus options) after 12-24 months.",
    retainer:
      "The liquidity stays in exchange accounts and wallets you own. You pay an operator a flat monthly fee to run open-source software on them, under parameters you approve, with every trade on a real-time dashboard.",
  },
  {
    label: "Your tokens",
    loan: "Given away for free. In someone else's hands for the duration of the contract, used at their discretion.",
    retainer: "Never leave your accounts. The operator's API keys can trade but not withdraw, and you can revoke them at any time.",
  },
  {
    label: "Incentive alignment",
    loan: "The MM profits from the option and from managing inventory they got for free. Their upside isn't directly tied to your market quality.",
    retainer:
      "The operator earns a flat fee for running the software well. No option, no inventory, no position in your token.",
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
    retainer: "The operator holds none of your token and has nothing to hedge. Every sale comes from your own approved configuration, visible on your dashboard.",
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
      "Any project with treasury, funding, or revenue that wants custody, control and transparency.",
  },
];

export default function ComparePage() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/"
          className="text-sm text-faint hover:text-ink transition-colors mb-8 inline-block"
        >
          ← Home
        </Link>

        <h1 className="text-3xl md:text-5xl font-normal text-ink mb-4">
          Token loan vs self-custody retainer
        </h1>
        <p className="text-lg text-soft max-w-2xl mb-16 leading-relaxed">
          Two ways to get liquidity for your token. One hands your tokens to a
          market maker and hopes for the best. The other keeps them in your own
          accounts and pays an operator to run the software.
        </p>

        {/* Comparison table - desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-rule">
                <th className="text-left py-4 pr-8 w-1/5 text-faint font-medium">
                  &nbsp;
                </th>
                <th className="text-left py-4 pr-8 w-2/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-none bg-[#9a3412]" />
                    <span className="text-[#9a3412] font-bold">
                      Token loan model
                    </span>
                  </div>
                </th>
                <th className="text-left py-4 w-2/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-none bg-accent" />
                    <span className="text-accent font-bold">
                      Self-custody retainer
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-rule">
                  <td className="py-5 pr-8 text-faint font-medium align-top">
                    {row.label}
                  </td>
                  <td className="py-5 pr-8 text-soft leading-relaxed align-top">
                    {row.loan}
                  </td>
                  <td className="py-5 text-soft leading-relaxed align-top">
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
              <h3 className="text-sm font-medium text-faint mb-3">
                {row.label}
              </h3>
              <div className="space-y-3">
                <div className="bg-[#ebe6d8] border border-rule rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-none bg-[#9a3412]" />
                    <span className="text-xs font-medium text-[#9a3412]">
                      Token loan
                    </span>
                  </div>
                  <p className="text-sm text-soft leading-relaxed">
                    {row.loan}
                  </p>
                </div>
                <div className="bg-[#ebe6d8] border border-rule rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-none bg-accent" />
                    <span className="text-xs font-medium text-accent">
                      Retainer
                    </span>
                  </div>
                  <p className="text-sm text-soft leading-relaxed">
                    {row.retainer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-16 bg-[#ebe6d8] border border-rule rounded-none p-8">
          <h2 className="text-xl font-bold text-ink mb-3">
            Our take
          </h2>
          <p className="text-soft leading-relaxed mb-6">
            We work exclusively on retainer, and we are not your market maker.
            You own the accounts and the capital and approve every parameter;
            we set up, operate and monitor open-source software on them. No
            token loans, no options, no custody, no trading for our own
            account. You see everything the software does in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="bg-accent text-paper px-8 py-3 rounded-none font-medium hover:bg-ink transition-colors text-center"
            >
              Get in Touch
            </Link>
            <Link
              href="/blog/loan-vs-retainer"
              className="border border-rule text-soft px-8 py-3 rounded-none hover:border-ink hover:text-ink transition-colors text-center"
            >
              Read the Full Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
