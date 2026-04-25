import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: "project1",
      tech: "React • Node.js • MongoDB",
      image: "/projetoFacebook.png",
      live: "https://mikiproject.netlify.app/",
      githubFront: "https://github.com/LucianaMiki/facebook-fontend",
      githubBack: "https://github.com/LucianaMiki/facebook-backend",
    },
    {
      key: "project2",
      tech: "React • JavaScript • CSS",
      image: "/projetoLogin.png",
      live: "https://loginlucianamiki.netlify.app/",
      githubFront: "https://github.com/LucianaMiki/login-frontend",
    },
    {
      key: "project3",
      tech: "React • JavaScript • CSS",
      image: "/projetoPortfolio.png",
      live: "https://lumikiportfolio.netlify.app/",
      githubFront: "https://github.com/LucianaMiki/portfolioLuciana",
    },
  ];

  return (
    <section id="projects" className="px-6 scroll-mt-20">
      <h2 className="font-[Orbitron] text-[#ddd6fe] text-lg font-semibold tracking-[0.2em] mb-10">
        {t("projects.title")}
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.key}
            title={t(`projects.list.${project.key}.title`)}
            description={t(`projects.list.${project.key}.description`)}
            tech={project.tech}
            image={project.image}
            live={project.live}
            githubFront={project.githubFront}
            githubBack={project.githubBack}
          />
        ))}
      </div>
    </section>
  );
}