export function ProjectTitle({
  title,
  logo,
  logoDark,
  logoHeight = 22,
  as = "span",
}: {
  title: string;
  logo?: string;
  logoDark?: string;
  logoHeight?: number;
  as?: "h2" | "span";
}) {
  const Tag = as;

  return (
    <Tag className="project-title">
      {logo ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={
              logoDark
                ? "project-title__logo project-title__logo--light"
                : "project-title__logo"
            }
            src={logo}
            alt=""
            draggable={false}
            style={{ height: logoHeight }}
          />
          {logoDark ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="project-title__logo project-title__logo--dark"
              src={logoDark}
              alt=""
              draggable={false}
              style={{ height: logoHeight }}
            />
          ) : null}
          <span className="project-title__divider" aria-hidden />
        </>
      ) : null}
      <span className="project-title__label">{title}</span>
    </Tag>
  );
}
