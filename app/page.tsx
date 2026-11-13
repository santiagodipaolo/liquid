import Link from "next/link";
import WeibullPlot from "./components/WeibullPlot";

/* One page, four numbered sections, set like a short paper. */

const SERVICES = [
  {
    venue: "Centralized exchanges",
    sub: "Order books",
    items: [
      ["Quoting", "Open-source quoting software on your exchange accounts places and updates bids and asks within the spread, size and inventory limits you approve."],
      ["Spread and depth targets", "We recommend settings from data, you sign off, and we monitor the book against them and flag drift."],
      ["Every venue you list on", "The same configuration across all your exchanges, with shared risk limits you define."],
    ],
  },
  {
    venue: "Decentralized exchanges",
    sub: "AMMs and propAMMs",
    items: [
      ["Concentrated liquidity", "Your liquidity, from your wallets, placed in concentrated ranges. Tighter ranges earn more fees per dollar deployed."],
      ["Two bands", "A wide band (about 5%) for depth and a tight one (about 2%) near the price. Both move with the market."],
      ["Across chains", "The same approved setup on every chain your token trades on. Software on your wallets closes price gaps between them, and the proceeds stay in your accounts."],
    ],
  },
];

const STEPS = [
  ["Propose", "We model your market and propose a configuration: where the depth sits, the bands, the risk limits."],
  ["Approve", "You review it and approve it in writing. Nothing goes live, and nothing changes later, without that."],
  ["Operate", "We deploy it on your accounts and run it around the clock, with monitoring, alerts and kill switches. You see every order and fill, and can revoke access at any time."],
];

const TERMS = [
  ["Your custody", "No token loans, no options. Tokens and capital stay in accounts you own, and our API keys can trade but never withdraw."],
  ["Open source", "Software you can read and audit. Every configuration is modeled and backtested before we propose it."],
  ["A flat fee", "A monthly retainer. We never trade your token for our own account, hold a position in it, or earn from its volume or price."],
  ["Full visibility", "A dashboard of positions, orders, fills and rebalances; P&L with fees, impermanent loss and arbitrage; an exportable audit trail; alerts."],
];

const faqs = [
  {
    question: "What does Weibull do?",
    answer:
      "We set up and operate open-source liquidity software on your own accounts. On centralized exchanges, that's quoting software that keeps order books deep and spreads tight. On DEXs, it's concentrated liquidity positions, band rebalancing and cross-chain price alignment. You own the accounts and approve the parameters; we run, monitor and report on it 24/7.",
  },
  {
    question: "What are dynamic liquidity bands?",
    answer:
      "Think of them as guardrails. A typical setup has two: a wide band (~5%) that gives the market room to breathe with solid depth, and a tight band (~2%) close to the current price. They move with the market automatically. You choose the final settings.",
  },
  {
    question: "How does multi-chain deployment work?",
    answer:
      "We deploy the same approved configuration on multiple L2s at once. Base, Optimism, wherever your token lives. Traders get the same experience on every chain, and liquidity isn't split into disconnected fragments.",
  },
  {
    question: "What is cross-chain arbitrage and why does it matter?",
    answer:
      "If your token trades on three chains, prices will drift apart, and someone will capture that gap. Arbitrage software running on your own wallets keeps prices aligned, and the proceeds stay in your accounts instead of going to a random MEV bot.",
  },
  {
    question: "What does the engagement process look like?",
    answer:
      "Two phases. First, we propose a configuration: liquidity structure, bands, risk limits. You review and approve it in writing. Then we deploy the software on your accounts, monitor it around the clock, and you get a dashboard of everything it does. Any later parameter change also goes through your approval.",
  },
  {
    question: "Is Weibull my market maker?",
    answer:
      "No. Weibull is a technical services provider. You own the exchange accounts and wallets, provide the capital, and approve the trading parameters; we set up, operate and monitor open-source software on your behalf for a flat retainer. We never hold your funds, trade for our own account, or accept instructions to inflate volume or target a price.",
  },
];

function Head({ n, title, id }: { n: string; title: string; id: string }) {
  return (
    <div id={id} className="flex items-baseline gap-4 border-b border-rule pb-3 mb-10">
      <span className="label">§{n}</span>
      <h2 className="text-[28px] md:text-[32px] leading-tight">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <p className="label mb-6">Liquidity operations for token issuers</p>
          <h1 className="text-[40px] md:text-[56px] leading-[1.08] text-balance">
            Liquidity for your token, run on your own accounts.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-soft leading-relaxed max-w-xl">
            We set up and operate open-source market making and DEX liquidity
            software for you. You keep custody, approve every parameter and
            pay a flat fee.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="#contact"
              className="label !text-paper bg-accent border border-accent px-5 py-3 hover:bg-ink hover:border-ink transition-colors"
            >
              Talk to us
            </Link>
            <Link href="#process" className="label !text-accent hover:!text-ink transition-colors">
              How it works →
            </Link>
          </div>
        </div>
        <WeibullPlot />
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* §1 */}
        <section className="py-14">
          <Head n="1" title="What we do" id="services" />
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {SERVICES.map((s) => (
              <div key={s.venue}>
                <h3 className="text-xl">{s.venue}</h3>
                <p className="label mt-1 mb-5">{s.sub}</p>
                <dl className="divide-y divide-rule border-t border-rule">
                  {s.items.map(([t, d]) => (
                    <div key={t} className="py-4">
                      <dt className="font-bold">{t}</dt>
                      <dd className="mt-1 text-soft leading-relaxed">{d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        {/* §2 */}
        <section className="py-14">
          <Head n="2" title="How it works" id="process" />
          <ol className="grid md:grid-cols-3 gap-10">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-accent pt-4">
                <p className="label !text-accent">Step {i + 1}</p>
                <h3 className="text-2xl mt-1">{t}</h3>
                <p className="mt-3 text-soft leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* §3 */}
        <section className="py-14">
          <Head n="3" title="Terms" id="terms" />
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {TERMS.map(([t, d]) => (
              <div key={t}>
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-soft leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-soft">
            How this compares to a token loan:{" "}
            <Link href="/compare" className="text-accent border-b border-accent/40 hover:border-accent">
              loan vs retainer
            </Link>
            .
          </p>
        </section>

        {/* §4 */}
        <section className="py-14">
          <Head n="4" title="Questions" id="faq" />
          <div className="max-w-3xl divide-y divide-rule border-y border-rule">
            {faqs.map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="flex items-baseline justify-between gap-6 cursor-pointer text-lg">
                  {f.question}
                  <span className="label group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-soft leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
              }),
            }}
          />
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-[32px] md:text-[40px] leading-tight">Tell us about your token.</h2>
          <p className="mt-4 text-soft text-lg">Where it trades, what you need, and when. We reply within a day.</p>
          <a
            href="mailto:hello@weibull.capital"
            className="mt-8 inline-block label !text-paper bg-accent border border-accent px-6 py-3 hover:bg-ink hover:border-ink transition-colors"
          >
            hello@weibull.capital
          </a>
        </section>
      </div>
    </>
  );
}
