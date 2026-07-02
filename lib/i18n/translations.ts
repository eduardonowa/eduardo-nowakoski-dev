export type Locale = 'pt-BR' | 'en-US';

export type BrandId = 'vivo' | 'enel' | 'stellantis';

export type CompanyId = 'newfold' | 'ntt' | 'merkle' | 'compass';

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
    loadingSection: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    ctaResumeAem: string;
    ctaResumeFrontend: string;
    keywords: string[];
  };
  about: {
    title: string;
    content: string[];
  };
  metrics: {
    title: string;
    note: string;
    items: {
      performance: {
        label: string;
        value: number;
        suffix: string;
        context: string;
        methodology: string;
      };
      incidents: {
        label: string;
        value: number;
        suffix: string;
        context: string;
        methodology: string;
      };
      mobile: {
        label: string;
        value: number;
        suffix: string;
        context: string;
        methodology: string;
      };
    };
  };
  experience: {
    title: string;
    professionalTitle: string;
    projectsTitle: string;
    timelineNote: string;
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
        links: Array<{ label: string; href: string }>;
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
        links: Array<{ label: string; href: string }>;
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
        links: Array<{ label: string; href: string }>;
      };
    };
  };
  technologies: {
    title: string;
    subtitle: string;
    categories: {
      aem: string;
      frontend: string;
      cms: string;
      state: string;
      testing: string;
      devops: string;
    };
    items: {
      aem: string[];
      frontend: string[];
      cms: string[];
      state: string[];
      testing: string[];
      devops: string[];
    };
    coreCategories: Array<'aem' | 'frontend' | 'cms' | 'state' | 'testing' | 'devops'>;
    categorySpans: Partial<
      Record<'aem' | 'frontend' | 'cms' | 'state' | 'testing' | 'devops', string>
    >;
  };
  caseStudy: {
    title: string;
    subtitle: string;
    client: string;
    employer: string;
    period: string;
    problem: { title: string; items: string[] };
    solution: { title: string; items: string[] };
    architecture: { title: string; items: string[] };
    results: { title: string; items: string[] };
    cta: { label: string; href: string };
  };
  aemArchitecture: {
    title: string;
    subtitle: string;
    decisionLabel: string;
    rationaleLabel: string;
    decisions: Array<{
      title: string;
      context: string;
      decision: string;
      rationale: string;
    }>;
  };
  aiWorkflow: {
    title: string;
    subtitle: string;
    philosophy: string;
    tools: string[];
    toolsNote: string;
    workflowTitle: string;
    casesTitle: string;
    metricsTitle: string;
    cta: { text: string; button: string };
    expandLabel: string;
    collapseLabel: string;
    collapsedHint: string;
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
    linkedin: string;
    github: string;
    cta: string;
  };
  footer: {
    copyright: string;
    lighthouse: string;
    lighthouseTooltip: string;
  };
}

export const translations: Record<Locale, Translations> = {
  'pt-BR': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      history: 'Experiência',
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
      loadingSection: 'Carregando seção…',
    },
    hero: {
      greeting: 'Olá, eu sou',
      title: 'Eduardo Nowakoski',
      subtitle: 'Engenheiro AEM & Front-End Sênior',
      description:
        'Especialista em Adobe Experience Manager (AEM Cloud), arquitetura de componentes, HTL, Sling Models e integração com front-end moderno — React, Next.js, Angular, Vue.js e TypeScript em ambientes enterprise.',
      ctaProjects: 'Ver Projetos',
      ctaContact: 'Entre em Contato',
      ctaResumeAem: 'CV AEM',
      ctaResumeFrontend: 'CV Front-End',
      keywords: ['AEM Cloud', 'HTL', 'Sling Models', 'React', 'Next.js', 'TypeScript'],
    },
    about: {
      title: 'Sobre Mim',
      content: [
        'Engenheiro AEM Sênior com mais de 4 anos construindo plataformas CMS escaláveis para e-commerce e ecossistemas corporativos — atualmente na Newfold Digital.',
        'Especialização em HTL, Sling Models (Java), OSGi, Editable Templates, Experience Fragments e arquitetura de componentes reutilizáveis, com integração sólida de microfrontends (React, Next.js, Angular, Vue.js).',
        'Experiência em migração de portais legados para AEM, otimização de performance (Lighthouse/Core Web Vitals) e redução de incidentes em produção em clientes como Enel, Stellantis e Vivo.',
        'Cultura de testes (Jest, Cypress), pipelines CI/CD e inglês avançado (C1) em equipes internacionais.',
      ],
    },
    metrics: {
      title: 'Impacto em Números',
      note:
        'Métricas abaixo referem-se a projetos específicos (NTT/Enel e Merkle/Stellantis). Compass/Vivo registrou redução de 50% em incidentes — detalhes na timeline.',
      items: {
        performance: {
          label: 'Melhoria de performance',
          value: 20,
          suffix: '%',
          context: 'NTT Data / Enel — migração AngularJS → Angular (2025)',
          methodology:
            'Baseline: média Lighthouse (LCP, TTI) nos 4 portais — Q1/2025. Método: build padronizado, lazy loading de módulos Angular e biblioteca compartilhada de componentes AEM. Período: Mar–Dez/2025.',
        },
        incidents: {
          label: 'Redução de incidentes',
          value: 80,
          suffix: '%',
          context: 'NTT Data / Enel — modernização arquitetural (2025)',
          methodology:
            'Baseline: ~12 incidentes P1/P2 por mês (Q1/2025). Método: monitoramento centralizado, correções em componentes compartilhados e suíte de regressão automatizada. Escopo: portais Enel via NTT Data.',
        },
        mobile: {
          label: 'Melhoria mobile/desktop',
          value: 40,
          suffix: '%',
          context: 'Merkle / Stellantis — otimização de performance (2025)',
          methodology:
            'Baseline: Core Web Vitals (mobile + desktop) pré-otimização — Mar/2025. Método: code splitting, otimização de imagens, cache de API e revisão de bundle em microfrontends. Período: Mar–Dez/2025.',
        },
      },
    },
    experience: {
      title: 'Experiência Profissional',
      professionalTitle: 'Histórico Profissional',
      projectsTitle: 'Projetos Destaque',
      timelineNote:
        'Mar–Dez/2025: Merkle (Stellantis) em modelo de consultoria/PJ, em paralelo à NTT Data (Enel) até Mar/2026.',
      segmentLabel: 'Segmento:',
      typeLabel: 'Tipo:',
      stackLabel: 'Stack:',
      clientLabel: 'Cliente:',
      employerLabel: 'Empresa:',
      companies: {
        newfold: {
          company: 'Newfold Digital',
          period: 'Abril de 2026 - Presente',
          position: 'Engenheiro AEM & Front-End (Projetos Integrados ao AEM)',
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
          position: 'Engenheiro AEM & Front-End (Projetos Integrados ao AEM)',
          logo: 'ntt',
          clientBadge: 'Cliente: Enel',
          clientBrand: 'enel',
          activities: [
            'Desenvolvimento de aplicações escaláveis com React, Angular, TypeScript e SCSS integradas ao AEM Cloud Service.',
            'Liderança técnica na migração de 4 portais legados de AngularJS para Angular 20 em equipe multidisciplinar.',
            'Modernização arquitetural com melhoria de 20% na performance e redução de 80% nos incidentes em produção.',
            'Desenvolvimento de componentes reutilizáveis alinhados a estratégias de Design System.',
            'Integração com APIs REST, pipelines CI/CD e ferramentas de IA para debugging e refatoração.',
          ],
        },
        merkle: {
          company: 'Merkle (Grupo Dentsu)',
          period: 'Março de 2025 - Dezembro de 2025',
          position: 'Engenheiro AEM & Front-End (Consultoria — Cliente Stellantis)',
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
          position: 'Engenheiro Front-End',
          progression: 'Estágio Front-end & AEM → Engenheiro Front-End',
          clientBadge: 'Cliente: Vivo',
          clientBrand: 'vivo',
          logo: 'compass',
          activities: [
            'Progressão de Estágio Front-end & AEM para Engenheiro Front-End na mesma empresa.',
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
          links: [],
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
          links: [
            {
              label: 'Ver métricas de performance',
              href: '#metrics',
            },
          ],
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
          links: [
            {
              label: 'Ver case study completo',
              href: '#case-study',
            },
          ],
        },
      },
    },
    technologies: {
      title: 'Tecnologias & Ferramentas',
      subtitle: 'Stack técnico e ferramentas que utilizo no dia a dia',
      categories: {
        aem: 'Plataforma AEM',
        frontend: 'Frontend Core',
        cms: 'CMS & Backend',
        state: 'State Management',
        testing: 'Testing & Docs',
        devops: 'Styling & DevOps',
      },
      items: {
        aem: [
          'AEM Cloud Service',
          'HTL',
          'Sling Models',
          'OSGi',
          'JCR',
          'Dispatcher',
          'Editable Templates',
          'Experience Fragments',
          'Content Fragments',
        ],
        frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'GraphQL', 'RxJS'],
        cms: ['Java', 'Maven', 'REST APIs', 'Cloud Manager'],
        state: ['Redux', 'Zustand', 'Pinia', 'Vuex'],
        testing: ['Jest', 'Cypress', 'Storybook'],
        devops: [
          'Tailwind CSS',
          'SCSS',
          'Git',
          'GitFlow',
          'CI/CD',
          'Azure DevOps',
          'GitLab',
          'Microfrontends',
        ],
      },
      coreCategories: ['aem', 'frontend'],
      categorySpans: { aem: 'md:col-span-2', frontend: 'md:col-span-2', devops: 'md:col-span-2' },
    },
    caseStudy: {
      title: 'Case Study — Portais Enel',
      subtitle:
        'Migração de 4 portais institucionais legados para AEM Cloud Service com Angular moderno',
      client: 'Cliente: Enel',
      employer: 'Empresa: NTT Data',
      period: 'Mar–Dez/2025',
      problem: {
        title: 'Problema',
        items: [
          'Quatro portais institucionais em AngularJS com dívida técnica alta e deploys instáveis.',
          'Conteúdo fragmentado entre AWS e CMS legado, dificultando governança editorial.',
          'Performance abaixo do esperado (LCP > 4s) e ~12 incidentes P1/P2 por mês no Q1/2025.',
          'Componentes duplicados entre portais sem Design System unificado.',
        ],
      },
      solution: {
        title: 'Solução',
        items: [
          'Migração progressiva AngularJS → Angular 20 com feature flags por portal.',
          'Consolidação de conteúdo no AEM Cloud Service com Editable Templates e Experience Fragments.',
          'Biblioteca compartilhada de componentes HTL + Sling Models (Java) reutilizáveis entre portais.',
          'Pipelines CI/CD com testes Jest/Cypress e gates de Lighthouse antes de cada release.',
        ],
      },
      architecture: {
        title: 'Arquitetura',
        items: [
          'Camada de apresentação Angular consome conteúdo via Sling Models e APIs REST mapeadas.',
          'Overlay de componentes AEM (`/apps`) com políticas globais de conteúdo por portal.',
          'Dispatcher com regras de cache por tipo de conteúdo e invalidação automatizada pós-publicação.',
          'Separação author/publish com Cloud Manager para deploys e ambientes de preview.',
        ],
      },
      results: {
        title: 'Resultados',
        items: [
          '20% de melhoria na performance (Lighthouse médio nos 4 portais).',
          '80% de redução em incidentes P1/P2 (baseline Q1/2025 vs. Q4/2025).',
          'Autonomia editorial aumentada com componentes autoráveis padronizados.',
          'Base técnica escalável para novos portais regionais sem reescrita do zero.',
        ],
      },
      cta: {
        label: 'Ver decisões de arquitetura AEM',
        href: '#aem-architecture',
      },
    },
    aemArchitecture: {
      title: 'Decisões de Arquitetura AEM',
      subtitle: 'Escolhas técnicas reais aplicadas em projetos enterprise',
      decisionLabel: 'Decisão',
      rationaleLabel: 'Racional',
      decisions: [
        {
          title: 'Overlay vs. herança de componentes',
          context: 'Enel / NTT Data',
          decision:
            'Overlay (`/apps/cliente`) sobre componentes core com herança seletiva via `sling:resourceSuperType`.',
          rationale:
            'Permite upgrades de AEM sem reescrever componentes customizados; equipes de conteúdo mantêm autonomia com políticas globais.',
        },
        {
          title: 'Sling Models vs. lógica no HTL',
          context: 'Newfold Digital',
          decision:
            'Toda lógica de negócio e transformação de dados em Sling Models Java; HTL apenas para renderização.',
          rationale:
            'Testabilidade unitária, separação de concerns e performance — HTL permanece simples e seguro para autores.',
        },
        {
          title: 'Editable Templates vs. templates estáticos',
          context: 'Stellantis / Merkle',
          decision:
            'Editable Templates com políticas por marca dentro de uma estrutura de Experience Fragments compartilhada.',
          rationale:
            'E-commerce multimarca exige flexibilidade por marca sem duplicar código; autores criam páginas sem deploy.',
        },
        {
          title: 'Dispatcher cache strategy',
          context: 'Enel / NTT Data',
          decision:
            'Cache agressivo para assets estáticos + TTL curto para HTML de páginas dinâmicas + invalidação via flush rules.',
          rationale:
            'Balanceia performance (LCP) com freshness de conteúdo institucional que muda com frequência moderada.',
        },
      ],
    },
    aiWorkflow: {
      title: 'Engenharia Aumentada por IA',
      subtitle: 'Como uso IA no dia a dia — processo, não ferramenta',
      philosophy:
        'Utilizo IA como multiplicador de produtividade — não como substituto do julgamento de engenharia. Ela acelera pesquisa, debugging, refatoração e documentação, enquanto mantenho total ownership de arquitetura, decisões de implementação e qualidade de código. Todo output gerado por IA passa pelos mesmos critérios de revisão que aplico a qualquer código em produção.',
      tools: ['Cursor', 'GitHub Copilot', 'Claude', 'Codex'],
      toolsNote:
        'Experiência prática com essas ferramentas em projetos enterprise. Escolho conforme o contexto — o processo e o padrão de qualidade permanecem os mesmos.',
      workflowTitle: 'Workflow Diário',
      casesTitle: 'Casos Reais',
      metricsTitle: 'Impacto no Workflow',
      cta: {
        text: 'Vamos construir com mais velocidade — e rigor de engenharia.',
        button: 'Conversar sobre um projeto',
      },
      expandLabel: 'Expandir seção',
      collapseLabel: 'Recolher seção',
      collapsedHint:
        'Seção opcional — expanda para ver workflow, casos reais e impacto no dia a dia.',
      workflow: [
        {
          step: 'Pesquisa',
          role: 'Resumir docs e comparar abordagens no contexto do repo',
          example: 'Analisar patterns de Editable Templates e contratos de APIs REST.',
        },
        {
          step: 'Planejamento',
          role: 'Decompor tarefas e identificar riscos',
          example: 'Breakdown de feature multi-componente e mapeamento de impacto no codebase.',
        },
        {
          step: 'Codificação',
          role: 'Scaffold, boilerplate e implementação assistida',
          example: 'Componentes React/HTL e testes com revisão manual antes do commit.',
        },
        {
          step: 'Debugging',
          role: 'Análise de stack traces e hipóteses',
          example: 'Incidentes de integração REST/AEM em ambientes NTT/Enel.',
        },
        {
          step: 'Refatoração',
          role: 'Modernização segura e diff review',
          example: 'Migração AngularJS→20 e Vue 2→3 com validação de tipos e testes.',
        },
        {
          step: 'Documentação',
          role: 'READMEs, JSDoc e guias de componente',
          example: 'Docs técnicos de Sling Models e componentes AEM para times globais.',
        },
        {
          step: 'Entrega',
          role: 'Checklists de PR e revisão pré-merge',
          example: 'Validar testes, edge cases e ajustes finais antes do CI.',
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
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cta: 'Enviar Mensagem',
    },
    footer: {
      copyright: '© 2026 Eduardo Nowakoski. Todos os direitos reservados.',
      lighthouse: 'Ver Performance (Lighthouse)',
      lighthouseTooltip: 'Abre o PageSpeed Insights ou instruções para abrir o Lighthouse',
    },
  },
  'en-US': {
    nav: {
      home: 'Home',
      about: 'About',
      history: 'Work Experience',
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
      loadingSection: 'Loading section…',
    },
    hero: {
      greeting: 'Hello, I am',
      title: 'Eduardo Nowakoski',
      subtitle: 'Senior AEM & Front-End Engineer',
      description:
        'Specializing in Adobe Experience Manager (AEM Cloud), component architecture, HTL, Sling Models, and modern front-end integration — React, Next.js, Angular, Vue.js, and TypeScript in enterprise environments.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      ctaResumeAem: 'AEM CV',
      ctaResumeFrontend: 'Frontend CV',
      keywords: ['AEM Cloud', 'HTL', 'Sling Models', 'React', 'Next.js', 'TypeScript'],
    },
    about: {
      title: 'About Me',
      content: [
        'Senior AEM Engineer with 4+ years building scalable CMS platforms for e-commerce and enterprise ecosystems — currently at Newfold Digital.',
        'Core expertise in HTL, Sling Models (Java), OSGi, Editable Templates, Experience Fragments, and reusable component architecture, with strong microfrontend integration (React, Next.js, Angular, Vue.js).',
        'Experienced in legacy portal migration to AEM, performance optimization (Lighthouse/Core Web Vitals), and production incident reduction for clients such as Enel, Stellantis, and Vivo.',
        'Testing culture (Jest, Cypress), CI/CD pipelines, and advanced English (C1) in international teams.',
      ],
    },
    metrics: {
      title: 'Impact in Numbers',
      note:
        'Metrics below refer to specific projects (NTT/Enel and Merkle/Stellantis). Compass/Vivo recorded a 50% incident reduction — see timeline for details.',
      items: {
        performance: {
          label: 'Performance improvement',
          value: 20,
          suffix: '%',
          context: 'NTT Data / Enel — AngularJS → Angular migration (2025)',
          methodology:
            'Baseline: average Lighthouse (LCP, TTI) across 4 portals — Q1/2025. Method: standardized build pipeline, Angular module lazy loading, and shared AEM component library. Period: Mar–Dec/2025.',
        },
        incidents: {
          label: 'Incident reduction',
          value: 80,
          suffix: '%',
          context: 'NTT Data / Enel — architectural modernization (2025)',
          methodology:
            'Baseline: ~12 P1/P2 incidents per month (Q1/2025). Method: centralized monitoring, shared component fixes, and automated regression suite. Scope: Enel portals via NTT Data.',
        },
        mobile: {
          label: 'Mobile/desktop improvement',
          value: 40,
          suffix: '%',
          context: 'Merkle / Stellantis — performance optimization (2025)',
          methodology:
            'Baseline: Core Web Vitals (mobile + desktop) pre-optimization — Mar/2025. Method: code splitting, image optimization, API caching, and microfrontend bundle review. Period: Mar–Dec/2025.',
        },
      },
    },
    experience: {
      title: 'Professional Experience',
      professionalTitle: 'Professional History',
      projectsTitle: 'Featured Projects',
      timelineNote:
        'Mar–Dec/2025: Merkle (Stellantis) as consulting/PJ engagement, in parallel with NTT Data (Enel) through Mar/2026.',
      segmentLabel: 'Segment:',
      typeLabel: 'Type:',
      stackLabel: 'Stack:',
      clientLabel: 'Client:',
      employerLabel: 'Company:',
      companies: {
        newfold: {
          company: 'Newfold Digital',
          period: 'April 2026 - Present',
          position: 'Senior AEM & Front-End Engineer (AEM Integrated Projects)',
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
          position: 'Senior AEM & Front-End Engineer (AEM Integrated Projects)',
          logo: 'ntt',
          clientBadge: 'Client: Enel',
          clientBrand: 'enel',
          activities: [
            'Built scalable applications using React, Angular, TypeScript, and SCSS integrated with AEM Cloud Service.',
            'Led migration of 4 enterprise portals from AngularJS to Angular 20 with a multidisciplinary team.',
            'Architectural modernization resulting in 20% performance improvement and 80% reduction in production incidents.',
            'Developed reusable components aligned with Design System initiatives.',
            'REST API integration, CI/CD pipelines, and AI-assisted debugging and refactoring.',
          ],
        },
        merkle: {
          company: 'Merkle (Dentsu Group)',
          period: 'March 2025 - December 2025',
          position: 'Senior AEM & Front-End Engineer (Consulting — Client Stellantis)',
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
          progression: 'Front-End & AEM Intern → Front-End Engineer',
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
          links: [],
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
          links: [
            {
              label: 'View performance metrics',
              href: '#metrics',
            },
          ],
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
          links: [
            {
              label: 'Read full case study',
              href: '#case-study',
            },
          ],
        },
      },
    },
    technologies: {
      title: 'Technologies & Tools',
      subtitle: 'Technical stack and tools I use daily',
      categories: {
        aem: 'AEM Platform',
        frontend: 'Frontend Core',
        cms: 'CMS & Backend',
        state: 'State Management',
        testing: 'Testing & Docs',
        devops: 'Styling & DevOps',
      },
      items: {
        aem: [
          'AEM Cloud Service',
          'HTL',
          'Sling Models',
          'OSGi',
          'JCR',
          'Dispatcher',
          'Editable Templates',
          'Experience Fragments',
          'Content Fragments',
        ],
        frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'GraphQL', 'RxJS'],
        cms: ['Java', 'Maven', 'REST APIs', 'Cloud Manager'],
        state: ['Redux', 'Zustand', 'Pinia', 'Vuex'],
        testing: ['Jest', 'Cypress', 'Storybook'],
        devops: [
          'Tailwind CSS',
          'SCSS',
          'Git',
          'GitFlow',
          'CI/CD',
          'Azure DevOps',
          'GitLab',
          'Microfrontends',
        ],
      },
      coreCategories: ['aem', 'frontend'],
      categorySpans: { aem: 'md:col-span-2', frontend: 'md:col-span-2', devops: 'md:col-span-2' },
    },
    caseStudy: {
      title: 'Case Study — Enel Portals',
      subtitle:
        'Migration of 4 legacy institutional portals to AEM Cloud Service with modern Angular',
      client: 'Client: Enel',
      employer: 'Company: NTT Data',
      period: 'Mar–Dec/2025',
      problem: {
        title: 'Problem',
        items: [
          'Four institutional portals on AngularJS with high technical debt and unstable deploys.',
          'Content fragmented between AWS and legacy CMS, hindering editorial governance.',
          'Below-target performance (LCP > 4s) and ~12 P1/P2 incidents per month in Q1/2025.',
          'Duplicated components across portals with no unified Design System.',
        ],
      },
      solution: {
        title: 'Solution',
        items: [
          'Progressive AngularJS → Angular 20 migration with per-portal feature flags.',
          'Content consolidation on AEM Cloud Service with Editable Templates and Experience Fragments.',
          'Shared library of reusable HTL + Sling Models (Java) components across portals.',
          'CI/CD pipelines with Jest/Cypress tests and Lighthouse gates before each release.',
        ],
      },
      architecture: {
        title: 'Architecture',
        items: [
          'Angular presentation layer consumes content via Sling Models and mapped REST APIs.',
          'AEM component overlay (`/apps`) with global content policies per portal.',
          'Dispatcher with cache rules by content type and automated invalidation post-publish.',
          'Author/publish separation with Cloud Manager for deploys and preview environments.',
        ],
      },
      results: {
        title: 'Results',
        items: [
          '20% performance improvement (average Lighthouse across 4 portals).',
          '80% reduction in P1/P2 incidents (Q1/2025 baseline vs. Q4/2025).',
          'Increased editorial autonomy with standardized authorable components.',
          'Scalable technical foundation for new regional portals without full rewrites.',
        ],
      },
      cta: {
        label: 'View AEM architecture decisions',
        href: '#aem-architecture',
      },
    },
    aemArchitecture: {
      title: 'AEM Architecture Decisions',
      subtitle: 'Real technical choices applied in enterprise projects',
      decisionLabel: 'Decision',
      rationaleLabel: 'Rationale',
      decisions: [
        {
          title: 'Overlay vs. component inheritance',
          context: 'Enel / NTT Data',
          decision:
            'Overlay (`/apps/client`) on core components with selective inheritance via `sling:resourceSuperType`.',
          rationale:
            'Enables AEM upgrades without rewriting custom components; content teams retain autonomy with global policies.',
        },
        {
          title: 'Sling Models vs. logic in HTL',
          context: 'Newfold Digital',
          decision:
            'All business logic and data transformation in Java Sling Models; HTL for rendering only.',
          rationale:
            'Unit testability, separation of concerns, and performance — HTL stays simple and safe for authors.',
        },
        {
          title: 'Editable Templates vs. static templates',
          context: 'Stellantis / Merkle',
          decision:
            'Editable Templates with per-brand policies within a shared Experience Fragments structure.',
          rationale:
            'Multi-brand e-commerce needs per-brand flexibility without code duplication; authors create pages without deploys.',
        },
        {
          title: 'Dispatcher cache strategy',
          context: 'Enel / NTT Data',
          decision:
            'Aggressive cache for static assets + short TTL for dynamic page HTML + invalidation via flush rules.',
          rationale:
            'Balances performance (LCP) with freshness for institutional content that changes at moderate frequency.',
        },
      ],
    },
    aiWorkflow: {
      title: 'AI-Augmented Engineering',
      subtitle: 'How I use AI day to day — process over tooling',
      philosophy:
        'I use AI as a productivity multiplier — not as a replacement for engineering judgment. It accelerates research, debugging, refactoring, and documentation while I retain full ownership of architecture, implementation decisions, and code quality. Every AI-generated output goes through the same review standards I apply to any production code.',
      tools: ['Cursor', 'GitHub Copilot', 'Claude', 'Codex'],
      toolsNote:
        'Practical experience with these tools in enterprise projects. I pick based on context — the process and quality bar stay the same.',
      workflowTitle: 'Daily Workflow',
      casesTitle: 'Real-World Cases',
      metricsTitle: 'Workflow Impact',
      cta: {
        text: "Let's build faster — with engineering rigor.",
        button: 'Discuss a project',
      },
      expandLabel: 'Expand section',
      collapseLabel: 'Collapse section',
      collapsedHint:
        'Optional section — expand to see workflow, real-world cases, and day-to-day impact.',
      workflow: [
        {
          step: 'Research',
          role: 'Summarize docs and compare approaches within the repo context',
          example: 'Analyze Editable Template patterns and REST API contracts.',
        },
        {
          step: 'Planning',
          role: 'Break down tasks and identify risks',
          example: 'Multi-component feature breakdown and codebase impact mapping.',
        },
        {
          step: 'Coding',
          role: 'Scaffold, boilerplate, and assisted implementation',
          example: 'React/HTL components and tests with manual review before commit.',
        },
        {
          step: 'Debugging',
          role: 'Stack trace analysis and hypothesis testing',
          example: 'REST/AEM integration incidents in NTT/Enel environments.',
        },
        {
          step: 'Refactoring',
          role: 'Safe modernization and diff review',
          example: 'AngularJS→20 and Vue 2→3 migrations with type validation and tests.',
        },
        {
          step: 'Documentation',
          role: 'READMEs, JSDoc, and component guides',
          example: 'Sling Models and AEM component technical docs for global teams.',
        },
        {
          step: 'Delivery',
          role: 'PR checklists and pre-merge review',
          example: 'Validate tests, edge cases, and final tweaks before CI.',
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
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cta: 'Send Message',
    },
    footer: {
      copyright: '© 2026 Eduardo Nowakoski. All rights reserved.',
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
  merkle: { src: '/companies/merkle.svg', alt: 'Merkle (Dentsu Group)' },
  compass: { src: '/companies/compass-uol.svg', alt: 'Compass.uol' },
};
