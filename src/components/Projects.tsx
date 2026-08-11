"use client";

import type { ComponentProps } from "react";
import { useEffect, useMemo, useState } from "react";
import type { Project as ProjectData } from "@/content/site";
import { projectSlug } from "@/lib/projectSlug";
import { HomeNavLink } from "./HomeNavLink";
import { Project } from "./Project";
import { Divider } from "./Divider";

export function Projects({
  projects,
  homeNav,
}: {
  projects: ProjectData[];
  homeNav?: ComponentProps<typeof HomeNavLink>;
}) {
  const ids = useMemo(() => projects.map(projectSlug), [projects]);
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const updateActive = () => {
      const activationLine = window.innerHeight * 0.25;
      let nextId = ids[0];

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        setActiveId(ids[ids.length - 1]);
        frame = 0;
        return;
      }

      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          nextId = id;
        }
      }

      setActiveId(nextId);
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids]);

  return (
    <div className="projects">
      {projects.map((project, i) => {
        const id = projectSlug(project);
        return (
          <div key={id}>
            <Project
              project={project}
              projects={projects}
              id={id}
              homeNav={homeNav}
              isCurrent={id === activeId}
            />
            {i < projects.length - 1 && <Divider />}
          </div>
        );
      })}
    </div>
  );
}
