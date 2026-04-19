type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  image: string;
  live?: string;
  githubFront?: string;
  githubBack?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  live,
  githubFront,
  githubBack,
}: ProjectCardProps) {
  return (
    <div
      className="
        group flex flex-col md:flex-row gap-10 p-6 -ml-6 md:-ml-6 rounded-lg
        transition-all duration-500 ease-in-out
        hover:bg-white/5 hover:translate-x-1
      "
    >
      <div className="w-full md:w-[250px] shrink-0 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="
            w-full h-auto
            shadow-md
            transition-all duration-500 ease-in-out
            group-hover:scale-105
          "
        />
      </div>

      <div className="max-w-md">
        <h3 className="
          text-base font-semibold text-white
          transition-colors duration-300
        ">
          {title}
        </h3>

        <p className="text-sm text-[#8892b0] mt-2 leading-relaxed">
          {description}
        </p>

        <p className="text-xs text-[#6aa9c7] mt-3">
          {tech}
        </p>

        <div className="flex flex-wrap gap-4 mt-3 text-xs">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="
                transition-all duration-300
                text-[#6aa9c7]
                hover:text-white hover:underline
              "
            >
              Live
            </a>
          )}

          {githubFront && (
            <a
              href={githubFront}
              target="_blank"
              rel="noreferrer"
              className="
                transition-all duration-300
                text-[#6aa9c7]
                hover:text-white hover:underline
              "
            >
              Frontend
            </a>
          )}

          {githubBack && (
            <a
              href={githubBack}
              target="_blank"
              rel="noreferrer"
              className="
                transition-all duration-300
                text-[#6aa9c7]
                hover:text-white hover:underline
              "
            >
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
}