import type { Project as ProjectData } from "@/content/site";
import { projectSlug } from "@/lib/projectSlug";
import { Project } from "./Project";
import { Divider } from "./Divider";

export function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <div className="projects">
      {projects.map((project, i) => (
        <div key={project.title}>
          <Project
            project={project}
            projects={projects}
            id={projectSlug(project.title)}
          />
          {i < projects.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
}
