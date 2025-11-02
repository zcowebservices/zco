// components/section.tsx
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
}

export default function SectionElem({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="space-y-4">
      {title ? <h2 className="text-3xl font-semibold">{title}</h2> : null}
      <div>{children}</div>
    </section>
  );
}
