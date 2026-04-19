import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience(): JSX.Element {
  const { t } = useTranslation();

  const experiences = [
    {
      key: "job1",
      techs: ["React JS", "Angular", "Java", "SQL"],
    },
    {
      key: "job2",
      techs: ["React JS", "Angular", "JavaScript"],
    },
    {
      key: "job3",
      techs: ["React Native", "Angular", "JavaScript"],
    },
    {
      key: "job4",
      techs: ["Angular", "Node.js", "Cloud", "Microsserviços"],
    },
  ];

  return (
    <section id="experience" className="px-6 scroll-mt-20">
      <h2 className="font-[Orbitron] text-[#ddd6fe] text-lg font-semibold tracking-[0.2em] mb-10">
        {t("experience.title")}
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.key}
            period={t(`experience.jobs.${exp.key}.period`)}
            role={t(`experience.jobs.${exp.key}.role`)}
            company={t(`experience.jobs.${exp.key}.company`)}
            description={t(`experience.jobs.${exp.key}.description`)}
            techs={exp.techs}
          />
        ))}

        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[Orbitron] text-[#ddd6fe] hover:text-white transition duration-300"
        >
          {t("experience.resume")}
          <span className="text-sm"> ↗</span>
        </a>
      </div>
    </section>
  );
}