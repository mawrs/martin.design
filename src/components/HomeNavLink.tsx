"use client";

import { useEffect, useState } from "react";

export function HomeNavLink({
  introId = "intro",
  label = "martin.design",
}: {
  introId?: string;
  label?: string;
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
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      }}
    >
      {label}
    </button>
  );
}
