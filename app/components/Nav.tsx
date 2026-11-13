import Link from "next/link";
import Logo from "./Logo";

const links = [
  { label: "What we do", href: "/#services" },
  { label: "How it works", href: "/#process" },
  { label: "Terms", href: "/#terms" },
  { label: "Blog", href: "/blog" },
];

/** The running head: logo left, sections right, one Contact button, a hairline under it. */
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-rule">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <Link href="/" aria-label="Weibull, home">
          <Logo />
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="label !text-soft hover:!text-ink transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="label !text-accent border border-accent px-3.5 py-2 hover:bg-accent hover:!text-paper transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
