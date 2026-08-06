"use client";

import posthog from "posthog-js";

function clearHash() {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

/** Place media a bit above true center so the previous project clears the top edge. */
function scrollMediaIntoView(projectId: string) {
  const section = document.getElementById(projectId);
  const target = section?.querySelector(".media-item") ?? section;
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const mediaCenter = window.scrollY + rect.top + rect.height / 2;
  const lift = window.innerHeight * 0.12;
  const top = mediaCenter - window.innerHeight / 2 + lift;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function ProjectNavLink({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="project-nav-link"
      onClick={() => {
        posthog.capture("project_selected", { project_id: id });
        scrollMediaIntoView(id);
        clearHash();
      }}
    >
      {children}
    </button>
  );
}
