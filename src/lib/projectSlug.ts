import type { Project } from "@/content/site";

export function titleToSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function projectSlug(project: Project | string) {
  if (typeof project === "string") return titleToSlug(project);
  return project.slug ?? titleToSlug(project.title);
}
