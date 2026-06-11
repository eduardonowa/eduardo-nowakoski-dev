export type Locale = 'pt-BR' | 'en-US';

export type BrandId = 'vivo' | 'enel' | 'stellantis';

export type CompanyId = 'newfold' | 'ntt' | 'merkle' | 'compass';

export type AiAgentId = 'cursor' | 'copilot' | 'claude' | 'codex';

export interface Translations {
  nav: {
    home: string;
    about: string;
    history: string;
    projects: string;
    aiWorkflow: string;
    technologies: string;
    contact: string;
  };
  a11y: {
    skipToContent: string;
    toggleLanguage: string;
    toggleTheme: string;
    toggleMenu: string;
    scrollProgress: string;
    scrollDown: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    keywords: string[];
  };
  about: {
    title: string;
    content: string[];
  };
  metrics: {
    title: string;
    items: {
      performance: { label: string; value: number; suffix: string };
      incidents: { label: string; value: number; suffix: string };
      mobile: { label: string; value: number; suffix: string };
    };
  };
  experience: {
    title: string;
    professionalTitle: string;
    projectsTitle: string;
    segmentLabel: string;
    typeLabel: string;
    stackLabel: string;
    clientLabel: string;
    employerLabel: string;
    companies: {
      newfold: {
        company: string;
        period: string;
        position: string;
        logo: CompanyId;
        activities: string[];
      };
      ntt: {
        company: string;
        period: string;
        position: string;
        logo: CompanyId;
        clientBadge: string;
        clientBrand: BrandId;
        activities: string[];
      };
      merkle: {
        company: string;
        period: string;
        position: string;
        logo: CompanyId;
        clientBadge: string;
        clientBrand: BrandId;
        activities: string[];
      };
      compass: {
        company: string;
        period: string;
        position: string;
        progression: string;
        clientBadge: string;
        clientBrand: BrandId;
        logo: CompanyId;
        activities: string[];
      };
    };
    projects: {
      telecom: {
        title: string;
        client: string;
        employer: string;
        segment: string;
        type: string;
        stack: string;
        role: string;
        maintenance: string;
        brand: BrandId;
      };
      automotive: {
        title: string;
        client: string;
        employer: string;
        segment: string;
        type: string;
        stack: string;
        role: string;
        brand: BrandId;
      };
      energy: {
        title: string;
        client: string;
        employer: string;
        segment: string;
        type: string;
        stack: string;
        role: string;
        brand: BrandId;
      };
    };
  };
  technologies: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      cms: string;
      state: string;
      testing: string;
      devops: string;
    };
  };
  aiWorkflow: {
    title: string;
    subtitle: string;
    philosophy: string;
    agentsTitle: string;
    workflowTitle: string;
    casesTitle: string;
    metricsTitle: string;
    usageLabel: string;
    casesLabel: string;
    benefitLabel: string;
    cta: { text: string; button: string };
    agents: Record<
      AiAgentId,
      {
        name: string;
        usage: string;
        cases: string;
        benefit: string;
      }
    >;
    workflow: Array<{ step: string; role: string; example: string }>;
    cases: {
      frontend: { title: string; items: string[] };
      aem: { title: string; items: string[] };
    };
    metrics: Array<{ label: string; description?: string }>;
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
      history: 'Histórico',
      projects: 'Projetos',
      aiWorkflow: 'Workflow IA',
      technologies: 'Tecnologias',
      contact: 'Contato',
    },
    a11y: {
      skipToContent: 'Pular para o conteúdo principal',
      toggleLanguage: 'Alternar idioma',
      toggleTheme: 'Alternar tema',
      toggleMenu: 'Alternar menu',
      scrollProgress: 'Progresso de rolagem da página',
      scrollDown: 'Rolar para baixo',
    },
    hero: {
      greeting: 'Olá, eu sou',
      title: 'Eduardo Nowakoski',
      subtitle: 'Desenvolvedor Front-End Senior',
      description:
        'Especializado em React, Next.js, Vue.js, Angular e TypeScript — aplicações escaláveis, microfrontends, SSR/SSG e otimização de performance. Experiência com integração Adobe Experience Manager (AEM) em ambientes enterprise.',
      ctaProjects: 'Ver Projetos',
      ctaContact: 'Entre em Contato',
      keywords: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
    },
    about: {
      title: 'Sobre Mim',
      content: [
        'Desenvolvedor Front-End Senior com mais de 4 anos de experiência construindo aplicações web escaláveis para e-commerce e ecossistemas integrados a CMS corporativos.',
        'Atuação sólida com React, Next.js, Vue.js, Angular e TypeScript, incluindo arquiteturas de microfrontends, Design Systems, SSR/SSG e otimização avançada de performance em ambientes de alto tráfego.',
        'Experiência em modernização de aplicações legadas, redução de incidentes em produção e melhoria de métricas Lighthouse. Integração com Adobe Experience Manager (AEM) como competência complementar.',
        'Cultura de testes (Jest, Cypress), pipelines CI/CD e inglês avançado (C1) em equipes internacionais.',
      ],
    },
    metrics: {
      title: 'Impacto em Números',
      items: {
        performance: { label: 'Melhoria de performance', value: 20, suffix: '%' },
        incidents: { label: 'Redução de incidentes', value: 80, suffix: '%' },
        mobile: { label: 'Melhoria mobile/desktop', value: 40, suffix: '%' },
      },
    },
    experience: {
      title: 'Experiência Profissional',
      professionalTitle: 'Histórico Profissional',
      projectsTitle: 'Projetos Destaque',
      segmentLabel: 'Segmento:',
      typeLabel: 'Tipo:',
      stackLabel: 'Stack:',
      clientLabel: 'Cliente:',
      employerLabel: 'Empresa:',
      companies: {
        newfold: {
          company: 'Newfold Digital',
          period: 'Abril de 2026 - Presente',
          position: 'Desenvolvedor Front-End (Projetos Integrados ao AEM)',
          logo: 'newfold',
          activities: [
            'Desenvolvimento e manutenção de componentes reutilizáveis em AEM utilizando HTL, TypeScript, JavaScript e SCSS.',
            'Criação de Editable Templates, Experience Fragments e estruturas reutilizáveis de conteúdo.',
            'Desenvolvimento de componentes AEM para marcas do ecossistema Newfold: Domain, Network Solutions, HostGator, Bluehost e Web.com.',
            'Colaboração diária com times internacionais utilizando inglês como idioma principal.',
          ],
        },
        ntt: {
          company: 'NTT Data',
          period: 'Março de 2025 - Março de 2026',
          position: 'Desenvolvedor Front-End (Projetos Integrados ao AEM)',
          logo: 'ntt',
          clientBadge: 'Cliente: Enel',
          clientBrand: 'enel',
          activities: [
            'Desenvolvimento de aplicações escaláveis com React, Angular, TypeScript e SCSS integradas ao AEM Cloud Service.',
            'Liderança técnica na migração de 4 portais legados de AngularJS para Angular 20.',
            'Modernização arquitetural com melhoria de 20% na performance e redução de 80% nos incidentes em produção.',
            'Desenvolvimento de componentes reutilizáveis alinhados a estratégias de Design System.',
            'Integração com APIs REST, pipelines CI/CD e ferramentas de IA para debugging e refatoração.',
          ],
        },
        merkle: {
          company: 'Merkle (Grupo Dentsu)',
          period: 'Março de 2025 - Dezembro de 2025',
          position: 'Desenvolvedor Front-End (Projetos Integrados ao AEM)',
          logo: 'merkle',
          clientBadge: 'Cliente: Stellantis',
          clientBrand: 'stellantis',
          activities: [
            'Desenvolvimento de aplicações com React, Next.js (SSR/SSG) e Vue 3 em arquitetura de microfrontends para e-commerce multimarcas.',
            'Co-criação e implementação de Design System integrado ao AEM.',
            'Otimização de performance com melhoria de 40% nas métricas mobile e desktop.',
            'Implementação de testes automatizados (Jest e Cypress) e suporte a pipelines CI/CD.',
            'Atuação em ambiente enterprise com alto volume de tráfego.',
          ],
        },
        compass: {
          company: 'Compass.uol',
          period: 'Janeiro de 2022 - Fevereiro de 2025',
          position: 'Desenvolvedor Front-End',
          progression: 'Estágio Front-end & AEM → Desenvolvedor Front-End',
          clientBadge: 'Cliente: Vivo',
          clientBrand: 'vivo',
          logo: 'compass',
          activities: [
            'Progressão de Estágio Front-end & AEM para Desenvolvedor Front-End na mesma empresa.',
            'Treinamento intensivo em front-end moderno, Vue.js e ecossistema Adobe Experience Manager (AEM).',
            'Desenvolvimento com Vue.js 3, Pinia e React; modernização de legados Vue 2/Vuex.',
            'Integração front-end + AEM (HTL, Sling Models, componentes autoráveis) para clientes como a Vivo.',
            'Melhoria de 20% na performance e redução de 50% nos incidentes em produção.',
            'Testes Jest/Cypress, CI/CD, GitFlow e mentoria de boas práticas.',
          ],
        },
      },
      projects: {
        telecom: {
          title: 'E-commerce B2B — Telecom',
          client: 'Vivo',
          employer: 'Compass.uol',
          segment: 'Telecomunicações',
          type: 'E-commerce B2B (Aluguel de Equipamentos)',
          stack: 'Vue 3, Pinia, React, Redux, AEM, Java, Jest, Cypress',
          role: 'Desenvolvimento end-to-end, componentes, integração com CMS e testes automatizados.',
          maintenance: 'Manutenção posterior: Vue 2, Vuex, AEM',
          brand: 'vivo',
        },
        automotive: {
          title: 'Landing Page — Automotivo multimarca',
          client: 'Stellantis',
          employer: 'Merkle (Grupo Dentsu)',
          segment: 'Automotivo',
          type: 'Landing Page Reutilizável',
          stack: 'Vue 3, Pinia, React, Next.js, Zustand, AEM, Java, Storybook, Jest',
          role: 'Arquitetura reutilizável, Design System integrado ao CMS, componentização e documentação.',
          brand: 'stellantis',
        },
        energy: {
          title: 'Portais Institucionais — Energia',
          client: 'Enel',
          employer: 'NTT Data',
          segment: 'Energia',
          type: 'Portais Institucionais',
          stack: 'Angular, RxJS, React, Next.js, AEM, Java',
          role: 'Migração de layout, infraestrutura (AWS → AEM), padronização e escalabilidade de múltiplos portais.',
          brand: 'enel',
        },
      },
    },
    technologies: {
      title: 'Tecnologias & Ferramentas',
      subtitle: 'Stack técnico e ferramentas que utilizo no dia a dia',
      categories: {
        frontend: 'Frontend Core',
        cms: 'CMS & Backend',
        state: 'State Management',
        testing: 'Testing & Docs',
        devops: 'Styling & DevOps',
      },
    },
    aiWorkflow: {
      title: 'Engenharia Aumentada por IA',
      subtitle: 'Agentes de IA que utilizo no dia a dia em projetos enterprise',
      philosophy:
        'Utilizo IA como multiplicador de produtividade — não como substituto do julgamento de engenharia. Ela acelera pesquisa, debugging, refatoração e documentação, enquanto mantenho total ownership de arquitetura, decisões de implementação e qualidade de código. Todo output gerado por IA passa pelos mesmos critérios de revisão que aplico a qualquer código em produção.',
      agentsTitle: 'Agentes',
      workflowTitle: 'Workflow Diário',
      casesTitle: 'Casos Reais',
      metricsTitle: 'Impacto no Workflow',
      usageLabel: 'Como utilizo',
      casesLabel: 'Casos reais',
      benefitLabel: 'Benefício',
      cta: {
        text: 'Vamos construir com mais velocidade — e rigor de engenharia.',
        button: 'Conversar sobre um projeto',
      },
      agents: {
        cursor: {
          name: 'Cursor',
          usage:
            'Agente principal na IDE: implementação multi-arquivo, debugging, testes e navegação de codebase.',
          cases:
            'Scaffold de componentes React/HTL; ciclo debug→fix integrado ao repo (Newfold, Enel).',
          benefit: 'Menor tempo entre ideia, código e validação local.',
        },
        copilot: {
          name: 'GitHub Copilot',
          usage: 'Autocomplete contextual inline durante a codificação.',
          cases: 'Boilers TypeScript, testes Jest/Cypress, SCSS e dialogs AEM repetitivos.',
          benefit: 'Menos friction em código repetitivo; foco em lógica de negócio.',
        },
        claude: {
          name: 'Claude',
          usage:
            'Análise de código complexo, refatoração multi-arquivo, planejamento e documentação.',
          cases:
            'Revisão na migração AngularJS→Angular; estrutura de Sling Models; drafts de docs técnicos.',
          benefit: 'Melhor contexto em tarefas longas e decisões arquiteturais.',
        },
        codex: {
          name: 'Codex',
          usage: 'Agente para tarefas focadas: snippets, transformações pontuais e automações.',
          cases: 'Regex, scripts de build, ajustes HTL isolados, refatorações de escopo limitado.',
          benefit: 'Ganho rápido em tarefas pequenas sem perder controle de escopo.',
        },
      },
      workflow: [
        {
          step: 'Pesquisa',
          role: 'Resumir docs e comparar abordagens no contexto do repo',
          example: 'Claude/Cursor para analisar patterns de Editable Templates e APIs REST.',
        },
        {
          step: 'Planejamento',
          role: 'Decompor tarefas e identificar riscos',
          example:
            'Claude para breakdown de feature multi-componente; Cursor para mapear impacto no codebase.',
        },
        {
          step: 'Codificação',
          role: 'Scaffold, boilerplate e implementação assistida',
          example: 'Copilot inline + Cursor agent para componentes React, HTL e testes.',
        },
        {
          step: 'Debugging',
          role: 'Análise de stack traces e hipóteses',
          example: 'Cursor/Claude em incidentes de integração REST/AEM (NTT/Enel).',
        },
        {
          step: 'Refatoração',
          role: 'Modernização segura e diff review',
          example: 'Claude/Cursor na migração AngularJS→20 e Vue 2→3.',
        },
        {
          step: 'Documentação',
          role: 'READMEs, JSDoc e guias de componente',
          example: 'Claude para docs técnicos de Sling Models e componentes AEM.',
        },
        {
          step: 'Entrega',
          role: 'Checklists de PR e revisão pré-merge',
          example: 'Cursor/Codex para validar testes, edge cases e ajustes finais antes do CI.',
        },
      ],
      cases: {
        frontend: {
          title: 'Front-End',
          items: [
            'Geração e iteração de componentes React/Next.js com revisão manual de acessibilidade e performance.',
            'Refatoração TypeScript em bases legadas (AngularJS, Vue 2) com validação de tipos e testes.',
            'Análise Lighthouse e sugestões de otimização (Core Web Vitals) aplicadas com critério técnico.',
            'Debugging de microfrontends e integrações REST em ambientes enterprise (Stellantis, Enel).',
          ],
        },
        aem: {
          title: 'AEM',
          items: [
            'Scaffold de componentes HTL + dialogs XML com validação de authoring experience.',
            'Estruturação de Sling Models e data binding com revisão de performance no backend.',
            'Criação de Editable Templates e Experience Fragments reutilizáveis (Newfold, Enel).',
            'Troubleshooting de integrações front-end ↔ AEM Cloud Service e documentação para times globais.',
          ],
        },
      },
      metrics: [
        { label: 'Ciclos de debugging mais rápidos' },
        { label: 'Menor tempo de pesquisa inicial' },
        { label: 'Melhor cobertura de documentação técnica' },
      ],
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
      history: 'History',
      projects: 'Projects',
      aiWorkflow: 'AI Workflow',
      technologies: 'Technologies',
      contact: 'Contact',
    },
    a11y: {
      skipToContent: 'Skip to main content',
      toggleLanguage: 'Toggle language',
      toggleTheme: 'Toggle theme',
      toggleMenu: 'Toggle menu',
      scrollProgress: 'Page scroll progress',
      scrollDown: 'Scroll down',
    },
    hero: {
      greeting: 'Hello, I am',
      title: 'Eduardo Nowakoski',
      subtitle: 'Senior Front-End Engineer',
      description:
        'Specialized in React, Next.js, Vue.js, Angular, and TypeScript — scalable applications, microfrontends, SSR/SSG, and performance optimization. Experience with Adobe Experience Manager (AEM) integration in enterprise environments.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      keywords: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
    },
    about: {
      title: 'About Me',
      content: [
        'Senior Front-End Engineer with 4+ years of experience building scalable web applications for e-commerce and CMS-driven enterprise ecosystems.',
        'Strong expertise in React, Next.js, Vue.js, Angular, and TypeScript, including microfrontend architectures, Design Systems, SSR/SSG, and advanced performance optimization in high-traffic environments.',
        'Experienced in legacy modernization, production incident reduction, and Lighthouse metric improvements. Adobe Experience Manager (AEM) integration as a complementary skill.',
        'Testing culture (Jest, Cypress), CI/CD pipelines, and advanced English (C1) in international teams.',
      ],
    },
    metrics: {
      title: 'Impact in Numbers',
      items: {
        performance: { label: 'Performance improvement', value: 20, suffix: '%' },
        incidents: { label: 'Incident reduction', value: 80, suffix: '%' },
        mobile: { label: 'Mobile/desktop improvement', value: 40, suffix: '%' },
      },
    },
    experience: {
      title: 'Professional Experience',
      professionalTitle: 'Professional History',
      projectsTitle: 'Featured Projects',
      segmentLabel: 'Segment:',
      typeLabel: 'Type:',
      stackLabel: 'Stack:',
      clientLabel: 'Client:',
      employerLabel: 'Company:',
      companies: {
        newfold: {
          company: 'Newfold Digital',
          period: 'April 2026 - Present',
          position: 'Front End Engineer (AEM Integrated Projects)',
          logo: 'newfold',
          activities: [
            'Develop and maintain reusable AEM components using HTL, TypeScript, JavaScript, and SCSS.',
            'Create Editable Templates, Experience Fragments, and reusable content structures.',
            'Build AEM components for Newfold ecosystem brands: Domain, Network Solutions, HostGator, Bluehost, and Web.com.',
            'Daily collaboration with international teams in a fully English-speaking environment.',
          ],
        },
        ntt: {
          company: 'NTT Data',
          period: 'March 2025 - March 2026',
          position: 'Front End Engineer (AEM Integrated Projects)',
          logo: 'ntt',
          clientBadge: 'Client: Enel',
          clientBrand: 'enel',
          activities: [
            'Built scalable applications using React, Angular, TypeScript, and SCSS integrated with AEM Cloud Service.',
            'Led migration of 4 enterprise portals from AngularJS to Angular 20.',
            'Architectural modernization resulting in 20% performance improvement and 80% reduction in production incidents.',
            'Developed reusable components aligned with Design System initiatives.',
            'REST API integration, CI/CD pipelines, and AI-assisted debugging and refactoring.',
          ],
        },
        merkle: {
          company: 'Merkle (Dentsu Group)',
          period: 'March 2025 - December 2025',
          position: 'Front End Engineer (AEM Integrated Projects)',
          logo: 'merkle',
          clientBadge: 'Client: Stellantis',
          clientBrand: 'stellantis',
          activities: [
            'Developed React, Next.js (SSR/SSG), and Vue.js applications within a microfrontend architecture for multibrand e-commerce.',
            'Co-created and implemented Design System integrated with AEM.',
            'Performance optimization achieving up to 40% improvement in mobile and desktop metrics.',
            'Automated testing with Jest and Cypress integrated into CI/CD workflows.',
            'Worked in high-traffic enterprise environments with critical performance requirements.',
          ],
        },
        compass: {
          company: 'Compass.uol',
          period: 'January 2022 - February 2025',
          position: 'Front-End Engineer',
          progression: 'Front-End Intern → Front-End Engineer',
          clientBadge: 'Client: Vivo',
          clientBrand: 'vivo',
          logo: 'compass',
          activities: [
            'Progression from Front-End & AEM Intern to Front-End Engineer at the same company.',
            'Intensive training in modern front-end, Vue.js, and Adobe Experience Manager (AEM).',
            'Development with Vue.js 3, Pinia, and React; legacy Vue 2/Vuex modernization.',
            'Front-end + AEM integration (HTL, Sling Models, authorable components) for clients such as Vivo.',
            '20% performance improvement and 50% reduction in production incidents.',
            'Jest/Cypress testing, CI/CD, GitFlow, and engineering best practices mentorship.',
          ],
        },
      },
      projects: {
        telecom: {
          title: 'B2B E-commerce — Telecom',
          client: 'Vivo',
          employer: 'Compass.uol',
          segment: 'Telecommunications',
          type: 'B2B E-commerce (Equipment Rental)',
          stack: 'Vue 3, Pinia, React, Redux, AEM, Java, Jest, Cypress',
          role: 'End-to-end development, components, CMS integration, and automated testing.',
          maintenance: 'Later maintenance: Vue 2, Vuex, AEM',
          brand: 'vivo',
        },
        automotive: {
          title: 'Reusable Landing Page — Multi-brand Automotive',
          client: 'Stellantis',
          employer: 'Merkle (Dentsu Group)',
          segment: 'Automotive',
          type: 'Reusable Landing Page',
          stack: 'Vue 3, Pinia, React, Next.js, Zustand, AEM, Java, Storybook, Jest',
          role: 'Reusable architecture, Design System integrated with CMS, componentization and documentation.',
          brand: 'stellantis',
        },
        energy: {
          title: 'Institutional Portals — Energy',
          client: 'Enel',
          employer: 'NTT Data',
          segment: 'Energy',
          type: 'Institutional Portals',
          stack: 'Angular, RxJS, React, Next.js, AEM, Java',
          role: 'Layout migration, infrastructure (AWS → AEM), standardization and scalability of multiple portals.',
          brand: 'enel',
        },
      },
    },
    technologies: {
      title: 'Technologies & Tools',
      subtitle: 'Technical stack and tools I use daily',
      categories: {
        frontend: 'Frontend Core',
        cms: 'CMS & Backend',
        state: 'State Management',
        testing: 'Testing & Docs',
        devops: 'Styling & DevOps',
      },
    },
    aiWorkflow: {
      title: 'AI-Augmented Engineering',
      subtitle: 'AI agents I use daily in enterprise workflows',
      philosophy:
        'I use AI as a productivity multiplier — not as a replacement for engineering judgment. It accelerates research, debugging, refactoring, and documentation while I retain full ownership of architecture, implementation decisions, and code quality. Every AI-generated output goes through the same review standards I apply to any production code.',
      agentsTitle: 'Agents',
      workflowTitle: 'Daily Workflow',
      casesTitle: 'Real-World Cases',
      metricsTitle: 'Workflow Impact',
      usageLabel: 'How I use it',
      casesLabel: 'Real use cases',
      benefitLabel: 'Benefit',
      cta: {
        text: "Let's build faster — with engineering rigor.",
        button: 'Discuss a project',
      },
      agents: {
        cursor: {
          name: 'Cursor',
          usage:
            'Primary IDE agent: multi-file implementation, debugging, testing, and codebase navigation.',
          cases:
            'Scaffold React/HTL components; integrated debug→fix cycle in the repo (Newfold, Enel).',
          benefit: 'Shorter path from idea to code to local validation.',
        },
        copilot: {
          name: 'GitHub Copilot',
          usage: 'Contextual inline autocomplete while coding.',
          cases: 'TypeScript boilerplate, Jest/Cypress tests, repetitive SCSS and AEM dialogs.',
          benefit: 'Less friction on repetitive code; focus on business logic.',
        },
        claude: {
          name: 'Claude',
          usage: 'Complex code analysis, multi-file refactoring, planning, and documentation.',
          cases:
            'Review during AngularJS→Angular migration; Sling Models structure; technical doc drafts.',
          benefit: 'Better context on long tasks and architectural decisions.',
        },
        codex: {
          name: 'Codex',
          usage: 'Focused agent for snippets, targeted transformations, and automations.',
          cases: 'Regex, build scripts, isolated HTL tweaks, limited-scope refactors.',
          benefit: 'Quick wins on small tasks without losing scope control.',
        },
      },
      workflow: [
        {
          step: 'Research',
          role: 'Summarize docs and compare approaches within the repo context',
          example: 'Claude/Cursor to analyze Editable Template patterns and REST APIs.',
        },
        {
          step: 'Planning',
          role: 'Break down tasks and identify risks',
          example:
            'Claude for multi-component feature breakdown; Cursor to map codebase impact.',
        },
        {
          step: 'Coding',
          role: 'Scaffold, boilerplate, and assisted implementation',
          example: 'Copilot inline + Cursor agent for React components, HTL, and tests.',
        },
        {
          step: 'Debugging',
          role: 'Stack trace analysis and hypothesis testing',
          example: 'Cursor/Claude on REST/AEM integration incidents (NTT/Enel).',
        },
        {
          step: 'Refactoring',
          role: 'Safe modernization and diff review',
          example: 'Claude/Cursor on AngularJS→20 and Vue 2→3 migrations.',
        },
        {
          step: 'Documentation',
          role: 'READMEs, JSDoc, and component guides',
          example: 'Claude for Sling Models and AEM component technical docs.',
        },
        {
          step: 'Delivery',
          role: 'PR checklists and pre-merge review',
          example: 'Cursor/Codex to validate tests, edge cases, and final tweaks before CI.',
        },
      ],
      cases: {
        frontend: {
          title: 'Front-End',
          items: [
            'React/Next.js component generation and iteration with manual accessibility and performance review.',
            'TypeScript refactoring in legacy codebases (AngularJS, Vue 2) with type validation and tests.',
            'Lighthouse analysis and optimization suggestions (Core Web Vitals) applied with technical judgment.',
            'Microfrontend and REST integration debugging in enterprise environments (Stellantis, Enel).',
          ],
        },
        aem: {
          title: 'AEM',
          items: [
            'HTL component + XML dialog scaffold with authoring experience validation.',
            'Sling Models structure and data binding with backend performance review.',
            'Reusable Editable Templates and Experience Fragments (Newfold, Enel).',
            'Front-end ↔ AEM Cloud Service integration troubleshooting and documentation for global teams.',
          ],
        },
      },
      metrics: [
        { label: 'Faster debugging cycles' },
        { label: 'Reduced initial research time' },
        { label: 'Improved technical documentation coverage' },
      ],
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

export const BRAND_ASSETS: Record<BrandId, { src: string; alt: string }> = {
  vivo: { src: '/brands/vivo.svg', alt: 'Vivo' },
  enel: { src: '/brands/enel.svg', alt: 'Enel' },
  stellantis: { src: '/brands/stellantis.svg', alt: 'Stellantis' },
};

export const COMPANY_ASSETS: Record<CompanyId, { src: string; alt: string }> = {
  newfold: { src: '/companies/newfold.svg', alt: 'Newfold Digital' },
  ntt: { src: '/companies/ntt-data.svg', alt: 'NTT Data' },
  merkle: { src: '/companies/dentsu.svg', alt: 'Merkle (Dentsu Group)' },
  compass: { src: '/companies/compass-uol.svg', alt: 'Compass.uol' },
};
