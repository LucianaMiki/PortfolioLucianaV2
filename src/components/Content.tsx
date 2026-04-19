import type { JSX } from "react";

import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Content(): JSX.Element {
  return (
    <main className="flex-1 px-6 md:px-12 py-10 md:py-20 space-y-20 md:space-y-32 scroll-smooth">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}