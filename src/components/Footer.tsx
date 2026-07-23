import { SITE } from "@/content/site";
import { TextLink } from "./TextLink";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>
          © {SITE.year} {SITE.name}
          &nbsp;·&nbsp;
          <TextLink href={`mailto:${SITE.email}`}>Email</TextLink>
          &nbsp;·&nbsp;
          <TextLink href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </TextLink>
        </p>
      </div>
      <ThemeToggle />
    </footer>
  );
}
