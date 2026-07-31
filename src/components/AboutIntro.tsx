import type { ReactNode } from "react";
import { ABOUT } from "@/content/site";
import { MediaItem } from "./MediaItem";
import { SiteNav } from "./SiteNav";
import { TextLink } from "./TextLink";

const LINKS: Record<string, string> = {
  Underbelly: "https://www.underbelly.is/",
  "Transcript Shield": "https://transcriptshield.com/",
};

function linkify(text: string): ReactNode {
  const labels = Object.keys(LINKS);
  const pattern = new RegExp(`(${labels.map(escapeRegExp).join("|")})`);
  const segments = text.split(pattern);

  return segments.map((segment, i) => {
    const href = LINKS[segment];
    if (!href) return segment;

    return (
      <TextLink key={`${segment}-${i}`} href={href} target="_blank" rel="noopener noreferrer">
        {segment}
      </TextLink>
    );
  });
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function AboutIntro() {
  return (
    <div className="project-content" id="about-intro">
      <div className="project-text">
        <SiteNav active="about" />
      </div>
      <div className="header-text about-intro-body">
        {ABOUT.paragraphs.map((block, i) => {
          const parts = block.split("\n\n");

          return (
            <div key={block} className="about-intro-block">
              <div className="about-intro-copy">
                {parts.map((part, j) =>
                  i === 0 && j === 0 ? (
                    <h1 key={part}>{linkify(part)}</h1>
                  ) : (
                    <p key={part}>{linkify(part)}</p>
                  ),
                )}
              </div>
              {i < ABOUT.paragraphs.length - 1 && (
                <div className="project-media">
                  <MediaItem
                    media={{
                      type: "color",
                      tint: "var(--color-surface-subtle)",
                      alt: `About image ${i + 1} placeholder`,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
