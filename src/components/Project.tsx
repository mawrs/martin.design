import type { Project as ProjectData } from "@/content/site";
import { projectSlug } from "@/lib/projectSlug";
import { HomeNavLink } from "./HomeNavLink";
import { MediaItem } from "./MediaItem";
import { ProjectNavLink } from "./ProjectNavLink";

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
                  <h2>{item.title}</h2>
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
                {item.title}
              </ProjectNavLink>
            );
          })}
        </div>
        <div className="project-media">
          {project.media.map((m) => (
            <MediaItem key={m.alt} media={m} />
          ))}
          {project.sub?.flatMap((sub) =>
            sub.media.map((m) => <MediaItem key={m.alt} media={m} />),
          )}
        </div>
      </div>
    </section>
  );
}
