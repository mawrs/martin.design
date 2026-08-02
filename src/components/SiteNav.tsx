import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function SiteNav({ active }: { active: "work" | "about" }) {
  return (
    <div className="site-nav">
      <Link
        href="/"
        className={`site-nav__brand${active === "about" ? " is-muted" : ""}`}
        aria-label="martin.design — Work"
      >
        <BrandMark />
      </Link>
      <nav className="site-nav__links" aria-label="Site">
        <Link
          href="/about"
          className={`site-nav__link${active === "about" ? " is-active" : ""}`}
          aria-current={active === "about" ? "page" : undefined}
        >
          About me
        </Link>
        <a
          href="/projects/martin_tejeda_resume.pdf"
          className="site-nav__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </div>
  );
}
