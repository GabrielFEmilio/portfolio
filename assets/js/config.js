/* =====================================================================
   CONFIG: EDITE ESTE ARQUIVO PARA ALIMENTAR O SITE
   ---------------------------------------------------------------------
   Tudo que muda com frequência (seus dados, links e projetos) está aqui.
   Você NÃO precisa mexer em mais nenhum arquivo para adicionar projetos.
   ===================================================================== */

window.SITE_CONFIG = {

  /* -----------------------------------------------------------------
     1) SEUS DADOS  ──  preencha os campos abaixo
     ----------------------------------------------------------------- */
  profile: {
    // Nome curto exibido no logo / topo
    shortName: "Gabriel",
    // Nome completo (Hero)
    fullName: "Gabriel Ferreira",
    // Usuário do GitHub (sem @). Necessário para a seção "Code Sphere" ao vivo.
    githubUser: "gabriel-fe026",        // << TROQUE pelo seu usuário real do GitHub
    // Links sociais / documentos
    linkedin: "https://www.linkedin.com/in/seu-perfil/",   // << seu LinkedIn
    email: "gabriel.fe026@gmail.com",
    // Currículo por idioma (deixe vazio "" se não tiver). Coloque os PDFs em assets/
    cv: {
      pt: "assets/cv/curriculo-pt.pdf",
      en: "assets/cv/resume-en.pdf",
      fr: "assets/cv/cv-fr.pdf"
    },
    // Foto (fundo preto OU transparente). Salve sua imagem como assets/profile.png
    photo: "assets/profile.png",
    // Localização exibida no contato
    location: "Brasil · Global"
  },

  /* -----------------------------------------------------------------
     2) STACK / TECNOLOGIAS  ──  aparece no Hero e no About
     ----------------------------------------------------------------- */
  stack: ["C", "Java", "JavaScript", "Unity", "C#", "Node.js", "WebGL"],

  /* Métricas exibidas no About (edite à vontade) */
  stats: [
    { value: 5,  suffix: "+", key: "stat_languages" },
    { value: 30, suffix: "+", key: "stat_projects"  },
    { value: 3,  suffix: "",  key: "stat_idioms"    }
  ],

  /* -----------------------------------------------------------------
     3) PROJETOS  ──  ADICIONE NOVOS PROJETOS AQUI (basta copiar um bloco)
     ---------------------------------------------------------------------
     Campos:
       id        : identificador único (texto curto)
       title     : nome do projeto
       category  : "site" | "library" | "bot" | "game" | "app"  (define o ícone/cor)
       year      : ano
       featured  : true => card grande no grid assimétrico
       url        : link do projeto ao vivo (abre em nova aba). "" se não houver.
       repo       : link do repositório. "" se não houver.
       image      : caminho de uma imagem/preview (assets/projects/...). "" usa um gradiente gerado.
       embeddable : true se o site PERMITE ser exibido em iframe dentro do modal.
                    (a maioria bloqueia. Deixe false e o modal abre preview + botão externo)
       tags       : tecnologias usadas
       description: { pt, en, fr }, foque no IMPACTO da solução
     ----------------------------------------------------------------- */
  projects: [
    {
      id: "proj-aurora",
      title: "Aurora Interactive",
      category: "site",
      year: 2025,
      featured: true,
      url: "https://example.com",
      repo: "https://github.com/",
      image: "",
      embeddable: false,
      tags: ["JavaScript", "WebGL", "GSAP"],
      description: {
        pt: "Site imersivo com renderização WebGL em tempo real. Reduziu o tempo de carregamento em 40% mantendo 60fps em animações pesadas.",
        en: "Immersive site with real-time WebGL rendering. Cut load time by 40% while holding 60fps under heavy animation.",
        fr: "Site immersif avec rendu WebGL en temps réel. Temps de chargement réduit de 40 % tout en gardant 60 ips."
      }
    },
    {
      id: "proj-corelib",
      title: "CoreLib",
      category: "library",
      year: 2025,
      featured: false,
      url: "",
      repo: "https://github.com/",
      image: "",
      embeddable: false,
      tags: ["C", "Java", "API"],
      description: {
        pt: "Biblioteca interativa de componentes de alta performance. Arquitetura modular reutilizada em 8+ projetos internos.",
        en: "Interactive high-performance component library. Modular architecture reused across 8+ internal projects.",
        fr: "Bibliothèque de composants interactifs haute performance. Architecture modulaire réutilisée sur 8+ projets."
      }
    },
    {
      id: "proj-sentinel",
      title: "Sentinel Bot",
      category: "bot",
      year: 2024,
      featured: false,
      url: "",
      repo: "https://github.com/",
      image: "",
      embeddable: false,
      tags: ["Node.js", "Automation", "API"],
      description: {
        pt: "Bot de automação que processa milhares de eventos por hora, eliminando trabalho manual e reduzindo erros operacionais a zero.",
        en: "Automation bot processing thousands of events per hour, eliminating manual work and cutting operational errors to zero.",
        fr: "Bot d'automatisation traitant des milliers d'événements par heure, supprimant le travail manuel."
      }
    },
    {
      id: "proj-nebula",
      title: "Nebula Engine",
      category: "game",
      year: 2024,
      featured: true,
      url: "",
      repo: "https://github.com/",
      image: "",
      embeddable: false,
      tags: ["Unity", "C#", "Shaders"],
      description: {
        pt: "Protótipo de engine de jogo em Unity com sistema de iluminação volumétrica customizado e física otimizada para mobile.",
        en: "Unity game-engine prototype with custom volumetric lighting and mobile-optimized physics.",
        fr: "Prototype de moteur de jeu Unity avec éclairage volumétrique personnalisé et physique optimisée mobile."
      }
    }
  ],

  /* -----------------------------------------------------------------
     4) TRADUÇÕES (PT / EN / FR)  ──  interface do site
     ----------------------------------------------------------------- */
  i18n: {
    pt: {
      nav_about: "Sobre",
      nav_projects: "Projetos",
      nav_github: "Code Sphere",
      nav_contact: "Contato",
      hero_tag: "Engenheiro de Software · Impacto Global",
      hero_title_a: "Construindo software",
      hero_title_b: "de alto impacto",
      hero_sub: "Sou estudante de Engenharia de Computação no IFSP e desenvolvedor em formação, construindo minha base por meio de projetos, estudos e prática constante. Busco transformar ideias e problemas em soluções claras, funcionais e bem estruturadas, evoluindo a cada desafio. Este portfólio reúne meus aprendizados, minhas iniciativas e meus projetos, refletindo minha vontade de crescer e me tornar um profissional cada vez mais completo em tecnologia.",
      hero_cta1: "Ver projetos",
      hero_cta2: "Falar comigo",
      hero_scroll: "role para explorar",
      about_kicker: "Sobre",
      about_title: "Base em engenharia, prática em evolução.",
      about_p1: "Sou estudante de Engenharia de Computação no IFSP e desenvolvedor em formação. Construo minha base com projetos, estudos e prática constante, buscando transformar ideias e problemas em soluções claras, funcionais e bem estruturadas.",
      about_p2: "Penso em sistemas: arquitetura limpa, atenção à performance e decisões que possam crescer com cada projeto. O aprendizado contínuo me move em novas linguagens, tecnologias e idiomas, sempre com discernimento e vontade de evoluir.",
      stat_languages: "Linguagens",
      stat_projects: "Projetos entregues",
      stat_idioms: "Idiomas",
      skills_title: "Stack principal",
      projects_kicker: "Projetos & Cases",
      projects_title: "Soluções que geram impacto.",
      projects_sub: "Cada projeto é resolvido pensando no resultado real, não só no código.",
      filter_all: "Todos",
      filter_site: "Sites",
      filter_library: "Bibliotecas",
      filter_bot: "Bots",
      filter_game: "Games",
      card_view: "Abrir",
      modal_live: "Abrir site completo",
      modal_repo: "Ver código",
      modal_preview_note: "Preview dentro do site. Para a experiência completa, abra em nova aba.",
      modal_load_live: "Carregar versão interativa",
      github_kicker: "GitHub · Code Sphere",
      github_title: "Dados de quem constrói de verdade.",
      github_sub: "Repositórios, linguagens e atividade da minha conta em tempo real.",
      gh_repos: "Repositórios",
      gh_stars: "Estrelas",
      gh_followers: "Seguidores",
      gh_langs: "Linguagens",
      gh_recent: "Repositórios recentes",
      gh_view_profile: "Ver perfil no GitHub",
      contact_kicker: "Contato",
      contact_title: "Vamos construir algo notável.",
      contact_sub: "Estou aberto a oportunidades globais, parcerias e projetos ambiciosos.",
      form_name: "Nome",
      form_email: "E-mail",
      form_message: "Mensagem",
      form_send: "Enviar mensagem",
      form_sending: "Enviando…",
      form_ok: "Mensagem pronta no seu e-mail!",
      contact_or: "ou me encontre em",
      contact_cv: "Baixar currículo",
      footer_rights: "Todos os direitos reservados.",
      footer_built: "Projetado e codado com precisão."
    },
    en: {
      nav_about: "About",
      nav_projects: "Projects",
      nav_github: "Code Sphere",
      nav_contact: "Contact",
      hero_tag: "Software Engineer · Global Impact",
      hero_title_a: "Building software",
      hero_title_b: "with high impact",
      hero_sub: "I am a Computer Engineering student at IFSP and a developer in training, building my foundation through projects, study and constant practice. I aim to turn ideas and problems into clear, functional and well-structured solutions, improving with each challenge. This portfolio brings together my learning, initiatives and projects, reflecting my drive to grow and become an increasingly well-rounded technology professional.",
      hero_cta1: "View projects",
      hero_cta2: "Get in touch",
      hero_scroll: "scroll to explore",
      about_kicker: "About",
      about_title: "Engineering foundation, evolving practice.",
      about_p1: "I am a Computer Engineering student at IFSP and a developer in training. I build my foundation through projects, study, and constant practice, aiming to turn ideas and problems into clear, functional, well-structured solutions.",
      about_p2: "I think in systems: clean architecture, attention to performance, and decisions that can grow with each project. Continuous learning keeps me moving through new programming languages, technologies, and spoken languages, always with judgment and the drive to improve.",
      stat_languages: "Languages",
      stat_projects: "Projects shipped",
      stat_idioms: "Spoken idioms",
      skills_title: "Core stack",
      projects_kicker: "Projects & Cases",
      projects_title: "Solutions that drive impact.",
      projects_sub: "Every project is solved with the real outcome in mind, not just the code.",
      filter_all: "All",
      filter_site: "Sites",
      filter_library: "Libraries",
      filter_bot: "Bots",
      filter_game: "Games",
      card_view: "Open",
      modal_live: "Open full site",
      modal_repo: "View code",
      modal_preview_note: "Preview inside the site. For the full experience, open in a new tab.",
      modal_load_live: "Load interactive version",
      github_kicker: "GitHub · Code Sphere",
      github_title: "Data from someone who actually builds.",
      github_sub: "Repositories, languages and activity from my account in real time.",
      gh_repos: "Repositories",
      gh_stars: "Stars",
      gh_followers: "Followers",
      gh_langs: "Languages",
      gh_recent: "Recent repositories",
      gh_view_profile: "View GitHub profile",
      contact_kicker: "Contact",
      contact_title: "Let's build something remarkable.",
      contact_sub: "I'm open to global opportunities, partnerships, and ambitious projects.",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      form_send: "Send message",
      form_sending: "Sending…",
      form_ok: "Message ready in your email client!",
      contact_or: "or find me on",
      contact_cv: "Download résumé",
      footer_rights: "All rights reserved.",
      footer_built: "Designed and coded with precision."
    },
    fr: {
      nav_about: "À propos",
      nav_projects: "Projets",
      nav_github: "Code Sphere",
      nav_contact: "Contact",
      hero_tag: "Ingénieur logiciel · Impact mondial",
      hero_title_a: "Concevoir des logiciels",
      hero_title_b: "à fort impact",
      hero_sub: "Je suis étudiant en génie informatique à l'IFSP et développeur en formation, en construisant mes bases grâce à des projets, des études et une pratique constante. Je cherche à transformer les idées et les problèmes en solutions claires, fonctionnelles et bien structurées, en progressant à chaque défi. Ce portfolio réunit mes apprentissages, mes initiatives et mes projets, et reflète ma volonté de grandir pour devenir un professionnel de la technologie de plus en plus complet.",
      hero_cta1: "Voir les projets",
      hero_cta2: "Me contacter",
      hero_scroll: "défilez pour explorer",
      about_kicker: "À propos",
      about_title: "Base d'ingénierie, pratique en évolution.",
      about_p1: "Je suis étudiant en génie informatique à l'IFSP et développeur en formation. Je construis mes bases grâce aux projets, aux études et à une pratique constante, avec l'objectif de transformer les idées et les problèmes en solutions claires, fonctionnelles et bien structurées.",
      about_p2: "Je pense en systèmes : architecture propre, attention à la performance et décisions capables d'évoluer avec chaque projet. L'apprentissage continu me pousse vers de nouveaux langages, de nouvelles technologies et de nouvelles langues, avec discernement et volonté de progresser.",
      stat_languages: "Langages",
      stat_projects: "Projets livrés",
      stat_idioms: "Langues parlées",
      skills_title: "Stack principale",
      projects_kicker: "Projets & Cas",
      projects_title: "Des solutions à fort impact.",
      projects_sub: "Chaque projet est résolu en pensant au résultat réel, pas seulement au code.",
      filter_all: "Tous",
      filter_site: "Sites",
      filter_library: "Bibliothèques",
      filter_bot: "Bots",
      filter_game: "Jeux",
      card_view: "Ouvrir",
      modal_live: "Ouvrir le site complet",
      modal_repo: "Voir le code",
      modal_preview_note: "Aperçu dans le site. Pour l'expérience complète, ouvrez dans un nouvel onglet.",
      modal_load_live: "Charger la version interactive",
      github_kicker: "GitHub · Code Sphere",
      github_title: "Les données de quelqu'un qui construit vraiment.",
      github_sub: "Dépôts, langages et activité issus directement de mon compte, en temps réel.",
      gh_repos: "Dépôts",
      gh_stars: "Étoiles",
      gh_followers: "Abonnés",
      gh_langs: "Langages",
      gh_recent: "Dépôts récents",
      gh_view_profile: "Voir le profil GitHub",
      contact_kicker: "Contact",
      contact_title: "Construisons quelque chose de remarquable.",
      contact_sub: "Je suis ouvert aux opportunités internationales, aux partenariats et aux projets ambitieux.",
      form_name: "Nom",
      form_email: "E-mail",
      form_message: "Message",
      form_send: "Envoyer le message",
      form_sending: "Envoi…",
      form_ok: "Message prêt dans votre messagerie !",
      contact_or: "ou retrouvez-moi sur",
      contact_cv: "Télécharger le CV",
      footer_rights: "Tous droits réservés.",
      footer_built: "Conçu et codé avec précision."
    }
  }
};
