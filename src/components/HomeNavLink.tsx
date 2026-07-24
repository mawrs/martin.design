"use client";

import { useEffect, useState } from "react";

export function HomeNavLink() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intro = document.getElementById("intro");
    if (!intro) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(intro);
    return () => observer.disconnect();
  }, []);

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
      martin.design
    </button>
  );
}
