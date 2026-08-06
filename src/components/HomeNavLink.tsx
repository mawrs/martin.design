"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import { ProjectTitle } from "./ProjectTitle";

export function HomeNavLink({
  introId = "intro",
  label = "martin.design",
  logo = "/projects/md-logo.svg",
  logoHeight = 20,
}: {
  introId?: string;
  label?: string;
  logo?: string;
  logoHeight?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intro = document.getElementById(introId);
    if (!intro) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(intro);
    return () => observer.disconnect();
  }, [introId]);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="project-nav-link"
      onClick={() => {
        posthog.capture("portfolio_home_selected");
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      }}
    >
      <ProjectTitle title={label} logo={logo} logoHeight={logoHeight} />
    </button>
  );
}
