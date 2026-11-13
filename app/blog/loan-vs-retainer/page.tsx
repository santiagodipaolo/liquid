import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Token Loan vs Retainer: Choosing How to Get Liquidity for Your Token",
  description:
    "Most market makers ask for a token loan upfront. Here's what that actually means for your project, and why a retainer model might be a better fit.",
  openGraph: {
    title: "Token Loan vs Retainer | weibull. blog",
    description:
      "What the token loan model really means for your project, and the self-custody alternative.",
    type: "article",
    publishedTime: "2026-03-06",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Token Loan vs Retainer: Choosing How to Get Liquidity for Your Token",
  datePublished: "2026-03-06",
  author: { "@type": "Organization", name: "Weibull" },
  publisher: { "@type": "Organization", name: "Weibull" },
  description:
    "Most market makers ask for a token loan upfront. Here's what that actually means for your project, and why a retainer model might be a better fit.",
};

export default function LoanVsRetainerPost() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-sm text-faint hover:text-ink transition-colors mb-8 inline-block"
        >
          ← Back to blog
        </Link>

        <div className="flex items-center gap-3 text-xs text-faint mb-4">
          <time dateTime="2026-03-06">March 6, 2026</time>
          <span className="text-rule">·</span>
          <span>6 min read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-normal text-ink mb-8 leading-tight">
          Token loan vs retainer: choosing how to get liquidity for your token
        </h1>

        <article className="prose-liquid space-y-6 text-soft leading-relaxed">
          <p>
            If you&apos;re a token issuer or protocol looking for liquidity,
            you&apos;ll run into two models pretty quickly: lend your tokens to
            a market maker, or keep them and pay someone a retainer to run
            market making software on your own accounts. Most firms push the
            loan. We think that&apos;s worth questioning.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">
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

          <h2 className="text-xl font-bold text-ink pt-4">
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

          <h2 className="text-xl font-bold text-ink pt-4">
            How the self-custody retainer works
          </h2>
          <p>
            Your tokens and capital stay in exchange accounts and wallets you
            own. You hire an operator for a fixed monthly fee to set up and run
            open-source market making software on those accounts. The operator
            proposes the parameters, you approve them, and the operator&apos;s
            API keys can trade but never withdraw. There&apos;s no loan, no
            option, no tokens changing hands, and full visibility into every
            trade in real time.
          </p>
          <p>
            The relationship is simpler. You&apos;re paying for software
            operations, not giving away an asset and hoping it comes back in
            good shape. The operator&apos;s job is to keep the software running
            well within the limits you set. Full stop.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-rule">
                  <th className="text-left py-3 pr-6 text-faint font-medium">
                    &nbsp;
                  </th>
                  <th className="text-left py-3 pr-6 text-[#9a3412] font-medium">
                    Token loan
                  </th>
                  <th className="text-left py-3 text-accent font-medium">
                    Retainer
                  </th>
                </tr>
              </thead>
              <tbody className="text-soft">
                <tr className="border-b border-rule">
                  <td className="py-3 pr-6 text-faint">Upfront cost</td>
                  <td className="py-3 pr-6">Token allocation (large)</td>
                  <td className="py-3">Fixed monthly fee</td>
                </tr>
                <tr className="border-b border-rule">
                  <td className="py-3 pr-6 text-faint">Token custody</td>
                  <td className="py-3 pr-6">Given for free, used at MM&apos;s discretion</td>
                  <td className="py-3">Stay in your accounts; operator keys can&apos;t withdraw</td>
                </tr>
                <tr className="border-b border-rule">
                  <td className="py-3 pr-6 text-faint">
                    Incentive alignment
                  </td>
                  <td className="py-3 pr-6">MM profits from option/inventory</td>
                  <td className="py-3">Operator paid a flat fee, no position</td>
                </tr>
                <tr className="border-b border-rule">
                  <td className="py-3 pr-6 text-faint">Transparency</td>
                  <td className="py-3 pr-6">Usually limited</td>
                  <td className="py-3">Full dashboard access</td>
                </tr>
                <tr className="border-b border-rule">
                  <td className="py-3 pr-6 text-faint">Sell pressure</td>
                  <td className="py-3 pr-6">Possible (hedging, option exercise)</td>
                  <td className="py-3">None from the operator</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-faint">Typical term</td>
                  <td className="py-3 pr-6">12-24 months locked</td>
                  <td className="py-3">Monthly, flexible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-ink pt-4">
            Why we chose the retainer model
          </h2>
          <p>
            We don&apos;t want to be your market maker. We want to run the
            software well while you keep the tokens, the accounts and the
            final say. No option upside, no inventory, no position in your
            token, no conflicting incentives. We get a flat fee, and you get
            full visibility into everything the software does through a
            real-time dashboard.
          </p>
          <p>
            That&apos;s it. We think the best liquidity setups are the ones
            where you stay in control and both sides know exactly what&apos;s
            happening and why.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">
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

          <div className="border-t border-rule pt-8 mt-8">
            <p className="text-faint text-sm">
              Want to talk about what model fits your project?{" "}
              <Link
                href="/#contact"
                className="text-accent hover:text-ink transition-colors"
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
