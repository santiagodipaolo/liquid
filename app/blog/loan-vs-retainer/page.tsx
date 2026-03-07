import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Token Loan vs Retainer: Choosing the Right Market Making Model",
  description:
    "Most market makers ask for a token loan upfront. Here's what that actually means for your project, and why a retainer model might be a better fit.",
  openGraph: {
    title: "Token Loan vs Retainer | liquid. blog",
    description:
      "What the token loan model really means for your project, and why we chose a different path.",
    type: "article",
    publishedTime: "2026-03-06",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Token Loan vs Retainer: Choosing the Right Market Making Model",
  datePublished: "2026-03-06",
  author: { "@type": "Organization", name: "Liquid" },
  publisher: { "@type": "Organization", name: "Liquid" },
  description:
    "Most market makers ask for a token loan upfront. Here's what that actually means for your project, and why a retainer model might be a better fit.",
};

export default function LoanVsRetainerPost() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to blog
        </Link>

        <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4">
          <time dateTime="2026-03-06">March 6, 2026</time>
          <span className="text-zinc-700">·</span>
          <span>6 min read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 leading-tight">
          Token loan vs retainer: choosing the right market making model
        </h1>

        <article className="prose-liquid space-y-6 text-zinc-400 leading-relaxed">
          <p>
            If you&apos;re a token issuer or protocol looking for a market
            maker, you&apos;ll run into two models pretty quickly: the token
            loan model and the retainer model. Most firms push the loan. We
            think that&apos;s worth questioning.
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">
            How the token loan model works
          </h2>
          <p>
            The market maker asks for a large allocation of your token upfront,
            usually for free. They use those tokens as inventory to provide
            liquidity on exchanges. In theory, they return the tokens at the end
            of the engagement (often 12-24 months), sometimes with an option to
            buy at a pre-agreed price.
          </p>
          <p>
            On paper, it sounds fine. In practice, it introduces some problems
            that aren&apos;t obvious until you&apos;re in the middle of them.
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">
            The problem with handing over your tokens
          </h2>
          <p>
            When a market maker holds a large loan of your token, their
            incentives get complicated. They have inventory they didn&apos;t pay
            for, and they need to manage that risk. That can mean hedging
            against your token (effectively shorting it), selling into rallies
            to lock in profit on the option, or prioritizing their own P&amp;L
            over your market quality.
          </p>
          <p>
            You also lose visibility. Most loan-based agreements don&apos;t
            come with real transparency into what the market maker is actually
            doing with your supply. You handed over tokens and you get a
            monthly report. Maybe. What happened in between is a black box.
          </p>
          <p>
            Then there&apos;s dilution pressure. A large token loan floating
            around in a market maker&apos;s hands creates sell-side overhang
            that the market can feel, even if it&apos;s not being actively
            dumped. Smart traders know it&apos;s out there.
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">
            How the retainer model works
          </h2>
          <p>
            With a retainer, you pay a fixed fee for the market making service.
            You provide the liquidity, and the market maker deploys and manages
            it on your behalf. There&apos;s no loan, no option, no free tokens
            changing hands. The key difference: full visibility into every
            position and trade, in real time.
          </p>
          <p>
            The relationship is simpler. You&apos;re paying for a service, not
            giving away an asset and hoping it comes back in good shape. The
            market maker&apos;s job is to deliver tight spreads, deep books,
            and stable markets. Full stop.
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-3 pr-6 text-zinc-500 font-medium">
                    &nbsp;
                  </th>
                  <th className="text-left py-3 pr-6 text-red-400 font-medium">
                    Token loan
                  </th>
                  <th className="text-left py-3 text-blue-400 font-medium">
                    Retainer
                  </th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-zinc-800/50">
                  <td className="py-3 pr-6 text-zinc-500">Upfront cost</td>
                  <td className="py-3 pr-6">Token allocation (large)</td>
                  <td className="py-3">Fixed monthly fee</td>
                </tr>
                <tr className="border-b border-zinc-800/50">
                  <td className="py-3 pr-6 text-zinc-500">Token custody</td>
                  <td className="py-3 pr-6">Given for free, used at MM&apos;s discretion</td>
                  <td className="py-3">You provide them, MM manages with full transparency</td>
                </tr>
                <tr className="border-b border-zinc-800/50">
                  <td className="py-3 pr-6 text-zinc-500">
                    Incentive alignment
                  </td>
                  <td className="py-3 pr-6">MM profits from option/inventory</td>
                  <td className="py-3">MM paid for market quality</td>
                </tr>
                <tr className="border-b border-zinc-800/50">
                  <td className="py-3 pr-6 text-zinc-500">Transparency</td>
                  <td className="py-3 pr-6">Usually limited</td>
                  <td className="py-3">Full dashboard access</td>
                </tr>
                <tr className="border-b border-zinc-800/50">
                  <td className="py-3 pr-6 text-zinc-500">Sell pressure</td>
                  <td className="py-3 pr-6">Possible (hedging, option exercise)</td>
                  <td className="py-3">None from MM</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-zinc-500">Typical term</td>
                  <td className="py-3 pr-6">12-24 months locked</td>
                  <td className="py-3">Monthly, flexible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-white pt-4">
            Why we chose the retainer model
          </h2>
          <p>
            We want to be in a position where the only way we succeed is by
            making your markets better. No option upside, no inventory to
            manage on the side, no conflicting incentives. We get paid to
            deliver results, and you get full visibility into everything we
            do through a real-time dashboard.
          </p>
          <p>
            That&apos;s it. We think the best market making relationships are
            the ones where both sides know exactly what&apos;s happening and
            why.
          </p>

          <h2 className="text-xl font-semibold text-white pt-4">
            When does the loan model make sense?
          </h2>
          <p>
            To be fair, there are situations where a token loan can work. If
            you&apos;re very early, have no budget for fees, and need someone
            to bootstrap initial liquidity, a loan might be your only option.
            Just go in with your eyes open about what you&apos;re trading off.
          </p>
          <p>
            For projects with revenue, treasury, or funding, the retainer model
            gives you more control, more transparency, and better alignment.
            We think it&apos;s the better deal for most teams past the seed
            stage.
          </p>

          <div className="border-t border-zinc-800/50 pt-8 mt-8">
            <p className="text-zinc-500 text-sm">
              Want to talk about what model fits your project?{" "}
              <Link
                href="/#contact"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Get in touch
              </Link>
              .
            </p>
          </div>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </section>
  );
}
