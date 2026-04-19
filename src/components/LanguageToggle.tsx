import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className="mt-8">
      <div className="relative w-[90px] h-[36px] border border-[#ddd6fe] rounded-md flex items-center text-sm font-medium overflow-hidden">
        
        {/* slider */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-[#ddd6fe] rounded-md transition-transform duration-300 ${
            current === "en" ? "translate-x-full" : ""
          }`}
        />

        {/* PT */}
        <button
          onClick={() => {
            i18n.changeLanguage("pt");
            localStorage.setItem("lang", "pt");
          }}
          className={`w-1/2 z-10 text-center transition ${
            current === "pt" ? "text-black" : "text-[#ddd6fe]"
          }`}
        >
          PT
        </button>

        {/* EN */}
        <button
          onClick={() => {
            i18n.changeLanguage("en");
            localStorage.setItem("lang", "en");
          }}
          className={`w-1/2 z-10 text-center transition ${
            current === "en" ? "text-black" : "text-[#ddd6fe]"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}