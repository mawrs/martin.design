import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function SiteNav({
  active,
}: {
  active?: "work" | "about" | "ai-workflow";
}) {
  return (
    <div className="site-nav">
      <Link
        href="/"
        className={`site-nav__brand${active !== "work" ? " is-muted" : ""}`}
        aria-label="martin.design — Work"
      >
        <BrandMark />
      </Link>
      <nav className="site-nav__links" aria-label="Site">
        <Link
          href="/ai-workflow"
          className={`site-nav__link${active === "ai-workflow" ? " is-active" : ""}`}
          aria-current={active === "ai-workflow" ? "page" : undefined}
        >
          AI workflow
        </Link>
        <Link
          href="/about"
          className={`site-nav__link${active === "about" ? " is-active" : ""}`}
          aria-current={active === "about" ? "page" : undefined}
        >
          About me
        </Link>
      </nav>
    </div>
  );
}
