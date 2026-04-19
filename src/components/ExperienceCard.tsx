import TechTag from "../utils/TextTags";

type Props = {
  period: string;
  role: string;
  company: string;
  description: string;
  techs: string[];
};

export default function ExperienceCard({
  period,
  role,
  company,
  description,
  techs,
}: Props) {
  return (
    <div className="
      -ml-6 p-6 rounded-lg
      transition-all duration-500 ease-in-out
      hover:bg-white/5
      hover:translate-x-1
    ">
      <p className="text-xs text-[#a1a1c2] mb-2">{period}</p>

      <h3 className="font-[Orbitron] text-sm font-semibold text-[#ddd6fe]">
        {role} <span className="text-[#a1a1c2]"> · {company}</span>
      </h3>

      <p className="text-sm text-[#a1a1c2] mt-3 leading-7">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {techs.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>
    </div>
  );
}