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
    <a className="project-nav-link" href="#top">
      martin.design
    </a>
  );
}
