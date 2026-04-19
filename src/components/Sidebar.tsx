import type { JSX } from "react";
import type { SectionId } from "../types";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../components/LanguageToggle";
import { useEffect, useState } from "react";

export default function Sidebar(): JSX.Element {
  const { t } = useTranslation();

  const sections: { id: SectionId; label: string }[] = [
    { id: "about", label: "sidebar.about" },
    { id: "experience", label: "sidebar.experience" },
    { id: "projects", label: "sidebar.projects" },
    { id: "contact", label: "sidebar.contact" },
  ];

  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="
        w-full 
        md:w-[300px] shrink-0 
        md:h-screen 
        md:sticky md:top-0 
        px-6 md:px-12 
        py-10 md:py-20
        flex flex-col justify-between
      "
    >
      <div>
        <h1 className="font-[Orbitron] text-5xl tracking-[0.2em] text-[#ddd6fe]">
          Luciana
        </h1>

        <h2 className="text-lg text-[#a1a1c2] mb-6">
          {t("sidebar.role")}
        </h2>

        <p className="text-sm text-[#a1a1c2] max-w-xs">
          {t("sidebar.descricao")}
        </p>

        <nav className="mt-16 space-y-4">
          {sections.map((section) => {
            const isActive = active === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center gap-4 font-[Orbitron] text-sm tracking-widest"
              >
                <span
                  className={`
                    block h-[1px] transition-all duration-300
                    ${
                      isActive
                        ? "w-16 bg-[#8892b0]"
                        : "w-8 bg-[#8892b0]/40 group-hover:w-16 group-hover:bg-[#8892b0]"
                    }
                  `}
                />

                <span
                  className={`
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-[#ddd6fe]"
                        : "text-[#8892b0]/60 group-hover:text-[#ddd6fe]"
                    }
                  `}
                >
                  {t(section.label)}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <LanguageToggle />

        <div className="text-sm text-[#ddd6fe] opacity-70">
          © {new Date().getFullYear()}
        </div>
      </div>
    </aside>
  );
}