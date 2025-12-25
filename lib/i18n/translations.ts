export type Locale = 'pt-BR' | 'en-US';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    technologies: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    title: string;
    content: string[];
  };
  experience: {
    title: string;
    professionalTitle: string;
    projectsTitle: string;
    companies: {
      ntt: {
        company: string;
        period: string;
        position: string;
        activities: string[];
      };
      merkle: {
        company: string;
        period: string;
        position: string;
        activities: string[];
      };
      compass: {
        company: string;
        period: string;
        position: string;
        activities: string[];
      };
      intern: {
        company: string;
        period: string;
        position: string;
        activities: string[];
      };
    };
    projects: {
      telecom: {
        title: string;
        segment: string;
        type: string;
        stack: string;
        role: string;
        maintenance: string;
      };
      automotive: {
        title: string;
        segment: string;
        type: string;
        stack: string;
        role: string;
      };
      energy: {
        title: string;
        segment: string;
        type: string;
        stack: string;
        role: string;
      };
    };
  };
  technologies: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    cta: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
    using: string;
    lighthouse: string;
    lighthouseTooltip: string;
  };
}

export const translations: Record<Locale, Translations> = {
  'pt-BR': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      technologies: 'Tecnologias',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      title: 'Eduardo Nowakoski',
      subtitle: 'Senior Front-End & Full-Stack AEM Developer',
      description:
        'Especializado em desenvolvimento de aplicações web escaláveis, integração com Adobe Experience Manager (AEM) e arquiteturas modernas de front-end.',
      ctaProjects: 'Ver Projetos',
      ctaContact: 'Entre em Contato',
    },
    about: {
      title: 'Sobre Mim',
      content: [
        'Transicionei minha carreira em 2022, migrando da Engenharia Civil para o Desenvolvimento de Software, e desde então trabalho como Full-Stack AEM Developer, construindo e mantendo aplicações web escaláveis para plataformas de e-commerce.',
        'Especializado em Adobe Experience Manager (AEM), trabalho end-to-end — desde integrações front-end até a implementação de componentes, templates, Experience Fragments e Sling Models em Java.',
        'Tenho forte experiência com Vue.js (2/3, Pinia, Vuex) e Angular, além de participação em arquiteturas de microfrontends e design systems, sempre priorizando qualidade de código, performance e reutilização. Trabalho com cultura sólida de testes (Jest, Cypress), versionamento profissional com GitFlow, pipelines de CI/CD e metodologias ágeis (Scrum/Kanban).',
        'Inglês avançado e mentalidade colaborativa, trabalhando em estreita colaboração com equipes de produto, UX e negócios para transformar requisitos complexos em soluções técnicas robustas e escaláveis.',
      ],
    },
    experience: {
      title: 'Experiência Profissional',
      professionalTitle: 'Histórico Profissional',
      projectsTitle: 'Projetos Destaque',
      companies: {
        ntt: {
          company: 'NTT Data',
          period: 'Fevereiro 2025 - Presente',
          position: 'Full-Stack AEM Developer',
          activities: [
            'Desenvolvimento de aplicações web escaláveis usando Angular, TypeScript, SCSS e Java, totalmente integradas com Adobe Experience Manager (AEM).',
            'Migração estrutural de quatro portais legados para arquitetura Angular + AEM, liderando definições de templates, componentes e Experience Fragments.',
            'Implementação completa de componentes AEM (HTL, Sling Models, Dialogs, XFs, Editable Templates), garantindo alta capacidade de autoria.',
            'Desenvolvimento do archetype AEM e definição arquitetural da solução, incluindo decisões de componentização e integração com Angular.',
            'Integração do front-end Angular com REST APIs, realizando mapeamento, consumo e documentação de serviços.',
            'Aplicação de práticas de engenharia com GitFlow, GitLab, Bitbucket, Azure DevOps e Jira, suportando pipelines e code reviews.',
          ],
        },
        merkle: {
          company: 'Merkle (Dentsu Group)',
          period: 'Março 2025 - Dezembro 2025',
          position: 'Full-Stack AEM Developer',
          activities: [
            'Trabalho como Full-Stack AEM Developer em solução Vue 3 + AEM baseada em arquitetura de microfrontends para ecossistema de e-commerce multimarcas.',
            'Co-criação e implementação de Design System integrado com AEM, permitindo tokenização de marca, reutilização de componentes e autonomia do cliente.',
            'Desenvolvimento de features front-end de alta performance usando Vue.js 3, Pinia e Swiper, focando em modularidade e lazy loading.',
            'Implementação de lógica backend em AEM usando Java, Sling Models e HTL, garantindo comunicação eficiente entre CMS e microfrontends.',
            'Contribuição para escalabilidade do ecossistema multimarcas, entregando aplicação reutilizada em múltiplos produtos.',
            'Aplicação de testes unitários (Jest) e end-to-end (Cypress), documentação e padronização de código.',
          ],
        },
        compass: {
          company: 'Compass',
          period: 'Janeiro 2022 - Fevereiro 2025',
          position: 'Front-End Developer',
          activities: [
            'Desenvolvimento de features e componentes de alta complexidade usando Vue.js 3 e Pinia, garantindo escalabilidade e eficiência em e-commerce.',
            'Manutenção, evolução e modernização de sistemas legados construídos com Vue.js 2 e Vuex, garantindo estabilidade da plataforma.',
            'Integração profunda entre front-end e AEM, consumindo conteúdo via HTL e Sling Models e criando componentes altamente autoráveis.',
            'Suporte a práticas de engenharia, documentação de componentes, Storybook, padrões de codificação e mentoria para novos membros.',
            'Implementação de otimizações de performance como lazy loading, melhorias de Lighthouse score, otimização de imagens.',
            'Criação e evolução de integrações de API, desde desenvolvimento mock até integrações reais para fluxos complexos como carrinho e checkout.',
            'Construção e manutenção de testes automatizados unitários (Jest) e End-to-end (Cypress) com cenários completos.',
          ],
        },
        intern: {
          company: 'Compass',
          period: 'Janeiro 2022 - Dezembro 2022',
          position: 'Front-End & AEM Intern',
          activities: [
            'Participação em programa intensivo de treinamento focado em tecnologias front-end modernas e ecossistema Adobe Experience Manager (AEM).',
            'Desenvolvimento de base sólida em HTML, CSS/SASS, JavaScript e Vue.js com aplicações práticas em projetos.',
            'Primeira experiência com AEM, compreendendo sua arquitetura, funcionalidade e padrões de integração front-end.',
            'Adoção de metodologias Ágeis (Scrum/Kanban) e uso de ferramentas como Git, GitLab e Jest.',
          ],
        },
      },
      projects: {
        telecom: {
          title: 'Projeto – Telecomunicações',
          segment: 'Telecomunicações',
          type: 'E-commerce B2B (Aluguel de Equipamentos)',
          stack: 'Vue 3, Pinia, AEM, Jest, Cypress',
          role: 'Desenvolvimento end-to-end, criação e manutenção de componentes, integração com CMS, testes automatizados.',
          maintenance: 'Manutenção posterior: Vue 2, Vuex, AEM',
        },
        automotive: {
          title: 'Projeto – Automotivo',
          segment: 'Automotivo (Multimarcas)',
          type: 'Landing Page Reutilizável',
          stack: 'Vue 3, AEM, Storybook, Jest',
          role: 'Arquitetura reutilizável, Design System integrado ao CMS, componentização e documentação.',
        },
        energy: {
          title: 'Projeto – Energia',
          segment: 'Energia',
          type: 'Portais Institucionais',
          stack: 'Angular, AEM',
          role: 'Migração de layout, migração de infraestrutura (AWS → AEM), padronização e escalabilidade de múltiplos portais.',
        },
      },
    },
    technologies: {
      title: 'Tecnologias & Ferramentas',
      subtitle: 'Stack técnico e ferramentas que utilizo no dia a dia',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos conversar sobre oportunidades e projetos',
      email: 'Email',
      phone: 'Telefone',
      linkedin: 'LinkedIn',
      cta: 'Enviar Mensagem',
    },
    footer: {
      copyright: '© 2025 Eduardo Nowakoski. Todos os direitos reservados.',
      madeWith: 'Desenvolvido com',
      using: 'usando',
      lighthouse: 'Ver Performance (Lighthouse)',
      lighthouseTooltip: 'Abre o PageSpeed Insights ou instruções para abrir o Lighthouse',
    },
  },
  'en-US': {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      technologies: 'Technologies',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      title: 'Eduardo Nowakoski',
      subtitle: 'Senior Front-End & Full-Stack AEM Developer',
      description:
        'Specialized in developing scalable web applications, Adobe Experience Manager (AEM) integration, and modern front-end architectures.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      content: [
        'I transitioned careers in 2022, moving from Civil Engineering to Software Development, and since then I have been working as a Full-Stack AEM Developer, building and maintaining scalable web applications for e-commerce platforms.',
        'Specialized in Adobe Experience Manager (AEM), I work end-to-end — from front-end integrations to the implementation of components, templates, Experience Fragments and Sling Models in Java.',
        'I have strong experience with Vue.js (2/3, Pinia, Vuex) and Angular, as well as participation in microfrontend architectures and design systems, always prioritizing code quality, performance and reusability. I work with a solid testing culture (Jest, Cypress), professional GitFlow versioning, CI/CD pipelines and agile methodologies (Scrum/Kanban).',
        'Advanced English and a collaborative mindset, working closely with product, UX and business teams to transform complex requirements into robust and scalable technical solutions.',
      ],
    },
    experience: {
      title: 'Professional Experience',
      professionalTitle: 'Professional History',
      projectsTitle: 'Featured Projects',
      companies: {
        ntt: {
          company: 'NTT Data',
          period: 'February 2025 - Present',
          position: 'Full-Stack AEM Developer',
          activities: [
            'Development of scalable web applications using Angular, TypeScript, SCSS and Java, fully integrated with Adobe Experience Manager (AEM).',
            'Structural migration of four legacy portals to Angular + AEM architecture, leading definitions of templates, components and Experience Fragments.',
            'Full implementation of AEM components (HTL, Sling Models, Dialogs, XFs, Editable Templates), ensuring high authoring capability.',
            'Development of AEM archetype and architectural definition of the solution, including componentization decisions and Angular integration.',
            'Integration of Angular front-end with REST APIs, performing mapping, consumption and documentation of services.',
            'Application of engineering practices with GitFlow, GitLab, Bitbucket, Azure DevOps and Jira, supporting pipelines and code reviews.',
          ],
        },
        merkle: {
          company: 'Merkle (Dentsu Group)',
          period: 'March 2025 - December 2025',
          position: 'Full-Stack AEM Developer',
          activities: [
            'Work as Full-Stack AEM Developer in Vue 3 + AEM solution based on microfrontend architecture for multibrand e-commerce ecosystem.',
            'Co-creation and implementation of Design System integrated with AEM, enabling brand tokenization, component reuse and client autonomy.',
            'Development of high-performance front-end features using Vue.js 3, Pinia and Swiper, focusing on modularity and lazy loading.',
            'Backend logic implementation in AEM using Java, Sling Models and HTL, ensuring efficient communication between CMS and microfrontends.',
            'Contribution to scalability of multibrand ecosystem, delivering application reused across multiple products.',
            'Application of unit tests (Jest) and end-to-end tests (Cypress), documentation and code standardization.',
          ],
        },
        compass: {
          company: 'Compass',
          period: 'January 2022 - February 2025',
          position: 'Front-End Developer',
          activities: [
            'Development of high-complexity features and components using Vue.js 3 and Pinia, ensuring scalability and efficiency in e-commerce.',
            'Maintenance, evolution and modernization of legacy systems built with Vue.js 2 and Vuex, ensuring platform stability.',
            'Deep integration between front-end and AEM, consuming content via HTL and Sling Models and creating highly authorable components.',
            'Support for engineering best practices, component documentation, Storybook, coding standards and mentorship for new team members.',
            'Implementation of performance optimizations such as lazy loading, Lighthouse score improvements, image optimization.',
            'Creation and evolution of API integrations, from mock development to real integrations for complex flows such as cart and checkout.',
            'Building and maintaining automated unit tests (Jest) and End-to-end tests (Cypress) with complete scenarios.',
          ],
        },
        intern: {
          company: 'Compass',
          period: 'January 2022 - December 2022',
          position: 'Front-End & AEM Intern',
          activities: [
            'Participation in intensive training program focused on modern front-end technologies and Adobe Experience Manager (AEM) ecosystem.',
            'Development of strong foundation in HTML, CSS/SASS, JavaScript and Vue.js with practical project applications.',
            'First experience with AEM, understanding its architecture, functionality and front-end integration patterns.',
            'Adoption of Agile methodologies (Scrum/Kanban) and use of tools such as Git, GitLab and Jest.',
          ],
        },
      },
      projects: {
        telecom: {
          title: 'Project – Telecommunications',
          segment: 'Telecommunications',
          type: 'B2B E-commerce (Equipment Rental)',
          stack: 'Vue 3, Pinia, AEM, Jest, Cypress',
          role: 'End-to-end development, component creation and maintenance, CMS integration, automated testing.',
          maintenance: 'Later maintenance: Vue 2, Vuex, AEM',
        },
        automotive: {
          title: 'Project – Automotive',
          segment: 'Automotive (Multi-brand)',
          type: 'Reusable Landing Page',
          stack: 'Vue 3, AEM, Storybook, Jest',
          role: 'Reusable architecture, Design System integrated with CMS, componentization and documentation.',
        },
        energy: {
          title: 'Project – Energy',
          segment: 'Energy',
          type: 'Institutional Portals',
          stack: 'Angular, AEM',
          role: 'Layout migration, infrastructure migration (AWS → AEM), standardization and scalability of multiple portals.',
        },
      },
    },
    technologies: {
      title: 'Technologies & Tools',
      subtitle: 'Technical stack and tools I use daily',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Let's talk about opportunities and projects",
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      cta: 'Send Message',
    },
    footer: {
      copyright: '© 2025 Eduardo Nowakoski. All rights reserved.',
      madeWith: 'Built with',
      using: 'using',
      lighthouse: 'View Performance (Lighthouse)',
      lighthouseTooltip: 'Opens PageSpeed Insights or instructions to open Lighthouse',
    },
  },
};
