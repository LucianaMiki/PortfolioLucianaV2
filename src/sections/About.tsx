import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="px-6 scroll-mt-20">
      <h2 className="font-[Orbitron] text-[#ddd6fe] text-lg font-semibold tracking-[0.2em] mb-6">
        {t("about.title")}
      </h2>

      <p className="text-sm leading-8 text-[#a1a1c2] max-w-md">
        {t("about.descricao")}
      </p>
    </section>
  );
}