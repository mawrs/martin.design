import type { Project as ProjectData } from "@/content/site";
import { projectSlug } from "@/lib/projectSlug";
import { HomeNavLink } from "./HomeNavLink";
import { MediaItem } from "./MediaItem";
import { ProjectNavLink } from "./ProjectNavLink";
import { ProjectTitle } from "./ProjectTitle";

export function Project({
  project,
  projects,
  id,
}: {
  project: ProjectData;
  projects: ProjectData[];
  id: string;
}) {
  return (
    <section className="project" id={id}>
      <div className="project-content">
        <div className="project-text">
          <HomeNavLink />
          {projects.map((item) => {
            const itemId = projectSlug(item);
            const active = itemId === id;

            if (active) {
              return (
                <div key={itemId} className="project-nav-item is-active">
                  <ProjectTitle
                    title={item.title}
                    logo={item.logo}
                    logoDark={item.logoDark}
                    logoHeight={item.logoHeight}
                    as="h2"
                  />
                  {item.lead.split("\n\n").map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                  {item.sub?.map((sub) => (
                    <p key={sub.text}>{sub.text}</p>
                  ))}
                </div>
              );
            }

            return (
              <ProjectNavLink key={itemId} id={itemId}>
                <ProjectTitle
                  title={item.title}
                  logo={item.logo}
                  logoDark={item.logoDark}
                  logoHeight={item.logoHeight}
                />
              </ProjectNavLink>
            );
          })}
        </div>
        <div className="project-media">
          {project.media.map((m, i) => (
            <MediaItem
              key={m.type === "image" || m.type === "video" ? m.src : `${m.alt}-${i}`}
              media={m}
            />
          ))}
          {project.sub?.flatMap((sub) =>
            sub.media.map((m, i) => (
              <MediaItem
                key={m.type === "image" || m.type === "video" ? m.src : `${m.alt}-${i}`}
                media={m}
              />
            )),
          )}
        </div>
      </div>
    </section>
  );
}
