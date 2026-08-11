"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { BrandMark } from "./BrandMark";

export function SiteNav({ active }: { active: "work" | "about" | "design-workflow" }) {
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
          href="/design-workflow"
          className={`site-nav__link${active === "design-workflow" ? " is-active" : ""}`}
          aria-current={active === "design-workflow" ? "page" : undefined}
        >
          Design workflow
        </Link>
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
          onClick={() => posthog.capture("resume_opened")}
        >
          Resume
        </a>
      </nav>
    </div>
  );
}
