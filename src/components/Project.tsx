import type { Project as ProjectData } from "@/content/site";
import { projectSlug } from "@/lib/projectSlug";
import { HomeNavLink } from "./HomeNavLink";
import { MediaItem } from "./MediaItem";

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
            const itemId = projectSlug(item.title);
            const active = item.title === project.title;

            if (active) {
              return (
                <div key={item.title} className="project-nav-item is-active">
                  <h2>{item.title}</h2>
                  <p>{item.lead}</p>
                  {item.sub?.map((sub) => (
                    <p key={sub.text}>{sub.text}</p>
                  ))}
                  {item.quote && (
                    <blockquote className="project-quote">
                      <p>{item.quote.text}</p>
                      <cite>
                        <span className="quote-name">{item.quote.name}</span>
                        <span className="quote-role">, {item.quote.role}</span>
                      </cite>
                    </blockquote>
                  )}
                </div>
              );
            }

            return (
              <a key={item.title} className="project-nav-link" href={`#${itemId}`}>
                {item.title}
              </a>
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
