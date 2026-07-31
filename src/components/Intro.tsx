import { SITE } from "@/content/site";
import { SiteNav } from "./SiteNav";
import { TextLink } from "./TextLink";

export function Intro() {
  return (
    <div className="project-content" id="intro">
      <div className="project-text">
        <SiteNav active="work" />
      </div>
      <div className="header-text">
        <h1>
          I&apos;m Martin, a Designer with 7 years experience building clear,
          considered interfaces. Most recently I led product design at{" "}
          <TextLink href="https://www.southeastbank.com/" target="_blank" rel="noopener noreferrer">
            SouthEast Bank
          </TextLink>
          , a platform for personalized financial solutions. I
          simplified insurance claims at{" "}
          <TextLink
            href="https://www.slideinsurance.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slide
          </TextLink>
          , reduced notification noise at{" "}
          <TextLink
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </TextLink>
          , rebuilt email systems at{" "}
          <TextLink
            href="https://squareup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Square
          </TextLink>
          , and continue independent work under my own name.
          <br />
          <br />
          On the side, I&apos;m building{" "}
          <TextLink
            href="https://transcriptshield.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transcript Shield
          </TextLink>{" "}
          to catch transcription errors before they become product decisions.
          <br />
          <br />
          <TextLink href={`mailto:${SITE.email}`}>Email</TextLink> or{" "}
          <TextLink href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </TextLink>{" "}
          me, or view some recent projects:
        </h1>
      </div>
    </div>
  );
}
