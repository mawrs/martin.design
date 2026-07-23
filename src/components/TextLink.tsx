import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function TextLink({ children, className = "", ...rest }: Props) {
  return (
    <a className={`text-link ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
