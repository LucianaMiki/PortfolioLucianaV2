import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        sidebar: {
          role: "Desenvolvedora Full Stack",
          about: "Sobre",
          experience: "Experiência",
          projects: "Projetos",
          contact: "Contato",
          descricao:
            "Desenvolvo aplicações web modernas com foco em performance, escalabilidade e experiência do usuário."
        },

        about: {
          title: "SOBRE",
          descricao:
            "Sou desenvolvedora full stack com experiência em aplicações web e mobile, atuando no desenvolvimento de soluções escaláveis e de alta performance. Trabalho principalmente com React e Java, e tenho experiência com Angular, Node.js, cloud e arquitetura de microsserviços."
        },

        experience: {
          title: "EXPERIÊNCIA",
          resume: "Ver currículo completo",
          jobs: {
            job1: {
              period: "2023 — 2026",
              role: "Desenvolvedora Full Stack",
              company: "IBM",
              description:
                "Atuei no desenvolvimento e evolução de aplicações web full stack, implementando novas funcionalidades, resolvendo problemas e contribuindo para decisões de arquitetura. Trabalhei em ambiente ágil com times multidisciplinares, utilizando práticas de DevOps e arquitetura baseada em microsserviços."
            },
            job2: {
              period: "2022 — 2023",
              role: "Desenvolvedora Front-end",
              company: "IBM",
              description:
                "Atuei no desenvolvimento de interfaces web, implementando funcionalidades, corrigindo problemas e colaborando em decisões técnicas. Trabalhei em conjunto com times de design, QA e backend em ambiente ágil."
            },
            job3: {
              period: "2021 — 2023",
              role: "Desenvolvedora Mobile",
              company: "IBM",
              description:
                "Desenvolvimento de aplicações mobile com foco em usabilidade e performance, contribuindo para evolução do frontend e integração com serviços backend."
            },
            job4: {
              period: "2020 — 2021",
              role: "Estagiária em Cloud Computing",
              company: "IBM",
              description:
                "Atuei no IBM Garage com foco em soluções em cloud e suporte técnico, adquirindo experiência em computação em nuvem, conteinerização e desenvolvimento de software."
            }
          }
        },

        projects: {
          title: "PROJETOS",
          list: {
            project1: {
              title: "Social Platform",
              description:
                "Aplicação full stack construída com a stack MERN, incluindo autenticação de usuários, criação de posts e upload de imagens. Demonstra integração entre frontend e backend, além de gerenciamento de estado e persistência de dados."
            },
            project2: {
              title: "Login Interface",
              description:
                "Interface de autenticação desenvolvida em React com validação de formulário, feedback ao usuário e gerenciamento de estado. Foco em experiência do usuário e organização de componentes."
            },
            project3: {
              title: "Personal Portfolio (v1)",
              description:
                "Portfólio pessoal desenvolvido em React, focado em organização de conteúdo, navegação fluida e apresentação clara de projetos."
            }
          }
        },

        contact: {
          title: "CONTATO",
          description:
            "Aberta a novas oportunidades, colaborações ou apenas para uma conversa."
        }
      }
    },
    en: {
      translation: {
        sidebar: {
          role: "Full Stack Developer",
          about: "About",
          experience: "Experience",
          projects: "Projects",
          contact: "Contact",
          descricao:
            "I build modern web applications focused on performance, scalability, and user experience."
        },

        about: {
          title: "ABOUT",
          descricao:
            "I am a full stack developer with experience in web and mobile applications, focused on building scalable and high-performance solutions. I primarily work with React and Java, and have experience with Angular, Node.js, cloud, and microservices architecture."
        },

        experience: {
          title: "EXPERIENCE",
          resume: "View Full Résumé",
          jobs: {
            job1: {
              period: "2023 — 2026",
              role: "Full Stack Developer",
              company: "IBM",
              description:
                "Worked on the development and evolution of full stack web applications, implementing new features, solving issues, and contributing to architectural decisions. Collaborated in agile environments with multidisciplinary teams using DevOps practices and microservices architecture."
            },
            job2: {
              period: "2022 — 2023",
              role: "Frontend Developer",
              company: "IBM",
              description:
                "Developed web interfaces, implemented features, fixed issues, and contributed to technical decisions. Worked closely with design, QA, and backend teams in agile environments."
            },
            job3: {
              period: "2021 — 2023",
              role: "Mobile Developer",
              company: "IBM",
              description:
                "Developed mobile applications focusing on usability and performance, contributing to frontend evolution and backend integration."
            },
            job4: {
              period: "2020 — 2021",
              role: "Cloud Computing Intern",
              company: "IBM",
              description:
                "Worked at IBM Garage focusing on cloud solutions and technical support, gaining experience in cloud computing, containerization, and software development."
            }
          }
        },

        projects: {
          title: "PROJECTS",
          list: {
            project1: {
              title: "Social Platform",
              description:
                "Full stack application built with the MERN stack, including user authentication, post creation, and image uploads. Demonstrates frontend-backend integration, state management, and data persistence."
            },
            project2: {
              title: "Login Interface",
              description:
                "Authentication interface built with React, including form validation, user feedback, and state management. Focused on user experience and component organization."
            },
            project3: {
              title: "Personal Portfolio (v1)",
              description:
                "Personal portfolio built with React, focused on content organization, smooth navigation, and clear project presentation."
            }
          }
        },

        contact: {
          title: "CONTACT",
          description:
            "Open to new opportunities, collaborations, or just a quick chat."
        }
      }
    }
  },
  lng: localStorage.getItem("lang") || "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;