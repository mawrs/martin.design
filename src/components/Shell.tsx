import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="shell" id="top">
      <div className="app">{children}</div>
    </div>
  );
}
