import type { ReactElement } from "react";

interface ButtonProps {
  href: string;
  children: ReactElement | string;
}

export default function Button({ href, children }: ButtonProps): ReactElement {
  return (
    <a href={href} className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-black text-sm font-medium whitespace-nowrap">
      {children}
    </a>
  );
}
