import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <Link href="/" aria-label="Weibull, home">
          <Logo />
        </Link>
        <p className="text-sm text-faint">
          A liquidity company of{" "}
          <a href="https://pol.finance" className="text-accent border-b border-accent/40 hover:border-accent">
            POL Finance Group
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
