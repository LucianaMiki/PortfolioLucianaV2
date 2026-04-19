import type { JSX, ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps): JSX.Element {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="text-[#8892b0] leading-7">{children}</div>
    </section>
  );
}