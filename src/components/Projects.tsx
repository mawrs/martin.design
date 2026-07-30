import type { Project as ProjectData } from "@/content/site";
import { projectSlug } from "@/lib/projectSlug";
import { Project } from "./Project";
import { Divider } from "./Divider";

export function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <div className="projects">
      {projects.map((project, i) => {
        const id = projectSlug(project);
        return (
          <div key={id}>
            <Project project={project} projects={projects} id={id} />
            {i < projects.length - 1 && <Divider />}
          </div>
        );
      })}
    </div>
  );
}
