export function BrandMark({ className = "brand-mark" }: { className?: string }) {
  return (
    <span className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="brand-mark__logo brand-mark__logo--light"
        src="/projects/logo-black.svg"
        alt="martin.design"
        draggable={false}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="brand-mark__logo brand-mark__logo--dark"
        src="/projects/logo-white.svg"
        alt=""
        aria-hidden
        draggable={false}
      />
    </span>
  );
}
