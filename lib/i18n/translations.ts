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
    segmentLabel: string;
    typeLabel: string;
    stackLabel: string;
    companies: {
      ntt: {
        company: string;
        period: string;
        position: string;
        activities: string[];
      };
      dentsu: {
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
      subtitle: 'Senior AEM Engineer & Desenvolvedor Front-End Senior',
      description:
        'Senior AEM Engineer especializado em AEM 6.x e AEM as a Cloud Service — Sling Models (Java), HTL, templates editáveis, Experience Fragments, Dispatcher e arquitetura de CMS enterprise — integrando front-end moderno (React, Next.js, Vue, Angular, microfrontends, Design Systems) em plataformas de e-commerce de alta escala.',
      ctaProjects: 'Ver Projetos',
      ctaContact: 'Entre em Contato',
    },
    about: {
      title: 'Sobre Mim',
      content: [
        'Sou Senior AEM Engineer e Desenvolvedor Front-End Senior atuando em plataformas de e-commerce e portais enterprise, combinando arquitetura Adobe Experience Manager (AEM) com front-end moderno em larga escala.',
        'No ecossistema AEM, trabalho end-to-end com AEM 6.x e AEM as a Cloud Service, Sling Models (Java), HTL (Sightly), templates editáveis, Experience Fragments, políticas de conteúdo, Dispatcher e definição de arquiteturas de CMS reutilizáveis.',
        'No front-end, atuo com React, Next.js, Vue.js (2/3), Angular e arquiteturas de microfrontends e Design Systems, sempre com foco em performance (Lighthouse), acessibilidade, reuso de componentes e experiências de alto impacto em e-commerce.',
        'Mantenho uma cultura sólida de engenharia com testes automatizados (Jest, Cypress), versionamento profissional GitFlow, pipelines de CI/CD e metodologias ágeis (Scrum/Kanban). Transicionei da Engenharia Civil para o Desenvolvimento de Software em 2022, trazendo visão analítica e foco em resultado de negócio.',
      ],
    },
    experience: {
      title: 'Experiência Profissional',
      professionalTitle: 'Histórico Profissional',
      projectsTitle: 'Projetos Destaque',
      segmentLabel: 'Segmento:',
      typeLabel: 'Tipo:',
      stackLabel: 'Stack:',
      companies: {
        ntt: {
          company: 'NTT Data',
          period: 'Fevereiro 2025 - Presente',
          position: 'Desenvolvedor Full-Stack AEM Senior',
          activities: [
            'Atuação como Senior Full-Stack AEM em soluções AEM 6.x e AEM as a Cloud Service integradas a Angular e Java em ambiente enterprise.',
            'Desenho e manutenção do ecossistema AEM (archetype, estrutura de repositório JCR, componentização, políticas de conteúdo e Dispatcher).',
            'Implementação de componentes AEM usando Sling Models (Java), HTL, templates editáveis e Experience Fragments, garantindo alta autonomia para times de conteúdo.',
            'Liderança técnica na migração de quatro portais legados AngularJS para arquitetura Angular 20 + AEM, modernizando o stack e reduzindo dívida técnica.',
            'Melhoria de aproximadamente 20% em performance de páginas e redução de cerca de 80% dos incidentes em produção por meio de padronização arquitetural e boas práticas de engenharia.',
            'Suporte a pipelines de CI/CD, GitFlow, code reviews e colaboração com times multidisciplinares em programas de transformação digital.',
          ],
        },
        dentsu: {
          company: 'Dentsu',
          period: 'Março 2025 - Dezembro 2025',
          position: 'Desenvolvedor Full-Stack AEM Senior',
          activities: [
            'Atuação em solução Vue 3 + AEM baseada em arquitetura de microfrontends para ecossistema de e-commerce multimarcas.',
            'Co-criação e implementação de Design System integrado ao AEM, permitindo tokenização de marca, reutilização de componentes e maior autonomia dos times de negócio.',
            'Desenvolvimento de features front-end de alta performance usando Vue.js 3, Pinia e Swiper, com foco em modularidade, lazy loading e otimização de experiência.',
            'Implementação de lógica backend em AEM usando Java, Sling Models e HTL, garantindo comunicação eficiente entre CMS e microfrontends.',
            'Contribuição para escalabilidade do ecossistema multimarcas, entregando aplicação reutilizada em múltiplos produtos e contextos.',
            'Aplicação de testes unitários (Jest) e end-to-end (Cypress), documentação e padronização de código para manter qualidade em ambiente de alto tráfego.',
          ],
        },
        compass: {
          company: 'Compass',
          period: 'Janeiro 2022 - Fevereiro 2025',
          position: 'Desenvolvedor Front-End ',
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
          position: 'Desenvolvedor Front-End AEM ',
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
          stack: 'Vue 3, Pinia, React, Redux, AEM, Java, Jest, Cypress, ',
          role: 'Desenvolvimento end-to-end, criação e manutenção de componentes, integração com CMS, testes automatizados.',
          maintenance: 'Manutenção posterior: Vue 2, Vuex, AEM',
        },
        automotive: {
          title: 'Projeto – Automotivo',
          segment: 'Automotivo (Multimarcas)',
          type: 'Landing Page Reutilizável',
          stack: 'Vue 3, Pinia, React, Next.js, Zustand, AEM, Java, Storybook, Jest',
          role: 'Arquitetura reutilizável, Design System integrado ao CMS, componentização e documentação.',
        },
        energy: {
          title: 'Projeto – Energia',
          segment: 'Energia',
          type: 'Portais Institucionais',
          stack: 'Angular, RxJS, React, Next.js, AEM, Java',
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
      copyright: '© 2026 Eduardo Nowakoski. Todos os direitos reservados.',
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
      subtitle: 'Senior AEM Engineer & Senior Front-End Engineer',
      description:
        'Senior AEM Engineer specialized in AEM 6.x and AEM as a Cloud Service — Sling Models (Java), HTL, Editable Templates, Experience Fragments, Dispatcher and enterprise CMS architecture — integrating modern front ends (React, Next.js, Vue, Angular, microfrontends, Design Systems) for high-traffic e-commerce platforms.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      content: [
        'I am a Senior AEM Engineer and Senior Front-End Engineer working on enterprise e-commerce platforms and portals, combining Adobe Experience Manager (AEM) architecture with modern front-end at scale.',
        'Within the AEM ecosystem, I work end-to-end with AEM 6.x and AEM as a Cloud Service, Sling Models (Java), HTL (Sightly), Editable Templates, Experience Fragments, content policies, Dispatcher and reusable CMS architectures.',
        'On the front-end side, I work with React, Next.js, Vue.js (2/3), Angular and microfrontend / Design System architectures, focusing on performance (Lighthouse), accessibility, component reuse and high-impact user experiences.',
        'I keep a strong engineering culture with automated testing (Jest, Cypress), professional GitFlow versioning, CI/CD pipelines and Agile (Scrum/Kanban). I transitioned from Civil Engineering to Software Development in 2022, bringing an analytical mindset and business-focused thinking.',
      ],
    },
    experience: {
      title: 'Professional Experience',
      professionalTitle: 'Professional History',
      projectsTitle: 'Featured Projects',
      segmentLabel: 'Segment:',
      typeLabel: 'Type:',
      stackLabel: 'Stack:',
      companies: {
        ntt: {
          company: 'NTT Data',
          period: 'February 2025 - Present',
          position: 'Senior Full-Stack AEM Engineer',
          activities: [
            'Acting as Senior Full-Stack AEM Engineer in AEM 6.x and AEM as a Cloud Service solutions integrated with Angular and Java in enterprise environments.',
            'Design and maintenance of the AEM ecosystem (archetype, JCR repository structure, componentization, content policies and Dispatcher).',
            'Implementation of AEM components using Sling Models (Java), HTL, Editable Templates and Experience Fragments, ensuring high autonomy for content teams.',
            'Technical leadership in migrating four legacy AngularJS portals to an Angular 20 + AEM architecture, modernizing the stack and reducing technical debt.',
            'Improved page performance by around 20% and reduced production incidents by roughly 80% through architectural standardization and engineering best practices.',
            'Support for CI/CD pipelines, GitFlow, code reviews and collaboration with cross-functional teams in digital transformation programs.',
          ],
        },
        dentsu: {
          company: 'Dentsu',
          period: 'March 2025 - December 2025',
          position: 'Senior Full-Stack AEM Engineer',
          activities: [
            'Work on a Vue 3 + AEM solution based on microfrontend architecture for a multibrand e-commerce ecosystem.',
            'Co-creation and implementation of a Design System integrated with AEM, enabling brand tokenization, component reuse and greater autonomy for business teams.',
            'Development of high-performance front-end features using Vue.js 3, Pinia and Swiper, focusing on modularity, lazy loading and experience optimization.',
            'Backend logic implementation in AEM using Java, Sling Models and HTL, ensuring efficient communication between CMS and microfrontends.',
            'Contribution to scalability of the multibrand ecosystem, delivering an application reused across multiple products and contexts.',
            'Application of unit tests (Jest) and end-to-end tests (Cypress), documentation and code standardization to maintain quality in high-traffic environments.',
          ],
        },
        compass: {
          company: 'Compass',
          period: 'January 2022 - February 2025',
          position: 'Front-End Engineer',
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
          position: 'Front-End Engineer & AEM Intern',
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
          stack: 'Vue 3, Pinia, React, Redux, AEM, Jest, Java, Cypress, ',
          role: 'End-to-end development, component creation and maintenance, CMS integration, automated testing.',
          maintenance: 'Later maintenance: Vue 2, Vuex, AEM',
        },
        automotive: {
          title: 'Project – Automotive',
          segment: 'Automotive (Multi-brand)',
          type: 'Reusable Landing Page',
          stack: 'Vue 3, Pinia, React, Next.js, Zustand, AEM, Java, Storybook, Jest',
          role: 'Reusable architecture, Design System integrated with CMS, componentization and documentation.',
        },
        energy: {
          title: 'Project – Energy',
          segment: 'Energy',
          type: 'Institutional Portals',
          stack: 'Angular, RxJS, React, Next.js, AEM, Java',
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
      copyright: '© 2026 Eduardo Nowakoski. All rights reserved.',
      madeWith: 'Built with',
      using: 'using',
      lighthouse: 'View Performance (Lighthouse)',
      lighthouseTooltip: 'Opens PageSpeed Insights or instructions to open Lighthouse',
    },
  },
};
