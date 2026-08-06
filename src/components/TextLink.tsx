"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import posthog from "posthog-js";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function TextLink({ children, className = "", ...rest }: Props) {
  const isContactLink = rest.href?.startsWith("mailto:") || rest.href?.includes("linkedin.com");

  return (
    <a
      className={`text-link ${className}`.trim()}
      {...rest}
      onClick={(event) => {
        rest.onClick?.(event);
        if (!event.defaultPrevented && isContactLink) {
          posthog.capture("contact_link_clicked", {
            contact_method: rest.href?.startsWith("mailto:") ? "email" : "linkedin",
          });
        }
      }}
    >
      {children}
    </a>
  );
}
