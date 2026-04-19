import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "lucianamikiochiai@gmail.com",
      href: "mailto:lucianamikiochiai@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "github.com/LucianaMiki",
      href: "https://github.com/LucianaMiki",
    },
    {
      icon: <FaLinkedin />,
      label: "linkedin.com/in/seu-link",
      href: "https://linkedin.com/in/seu-link",
    },
  ];

  return (
    <section id="contact" className="px-6 py-16 scroll-mt-20">
      <h2 className="font-[Orbitron] text-lg font-semibold tracking-[0.2em] mb-6">
        {t("contact.title")}
      </h2>

      <p className="text-sm text-gray-400 mb-8 max-w-md">
        {t("contact.description")}
      </p>

      <div className="space-y-4 text-sm">
        {contacts.map((item, index) => (
          <a
            className="
              group flex items-center gap-3 text-[#6aa9c7]
              transition-all duration-300 ease-in-out
              hover:text-white hover:translate-x-1
            "
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}