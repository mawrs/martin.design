export function ProjectTitle({
  title,
  logo,
  logoHeight = 22,
  as = "span",
}: {
  title: string;
  logo?: string;
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
            className="project-title__logo"
            src={logo}
            alt=""
            draggable={false}
            style={{ height: logoHeight }}
          />
          <span className="project-title__divider" aria-hidden />
        </>
      ) : null}
      <span className="project-title__label">{title}</span>
    </Tag>
  );
}
