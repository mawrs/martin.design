import { AI_WORKFLOW } from "@/content/site";
import { SiteNav } from "./SiteNav";

export function AiWorkflowIntro() {
  return (
    <div className="project-content" id="intro">
      <div className="project-text">
        <SiteNav active="design-workflow" />
      </div>
      <div className="header-text">
        <h1>
          {AI_WORKFLOW.intro.map((paragraph, index) => (
            <span key={paragraph}>
              {index > 0 ? (
                <>
                  <br />
                  <br />
                </>
              ) : null}
              {paragraph}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
