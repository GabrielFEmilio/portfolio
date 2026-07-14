(function () {
  const SUPPORTED = ["pt", "en", "fr"];
  const STORAGE_KEY = "site_lang";
  const HTML_LANG = { pt: "pt-BR", en: "en", fr: "fr" };

  const UI = {
    pt: {
      title: "Gabriel F. Emilio | Studio para marcas premium",
      description: "Sites premium e experiências digitais sob medida para negócios que atendem clientes exigentes e valorizam reputação, tempo e confiança.",
      tour_start: "Tour guiado",
      tour_stop: "Parar",
      tour_start_aria: "Iniciar tour guiado",
      tour_stop_aria: "Parar tour guiado",
      form_ok: "Mensagem enviada com sucesso!",
      form_fail: "Não foi possível enviar. Tente o WhatsApp ou email ao lado.",
      wa_default: "Olá, Gabriel! Cheguei pelo seu studio e quero conversar sobre um projeto.",
      hero_ref: "Você chegou por um site que eu construí",
      dot_prefix: "Ir para "
    },
    en: {
      title: "Gabriel F. Emilio | Studio for premium brands",
      description: "Premium websites and tailored digital experiences for businesses that serve demanding clients and value reputation, time, and trust.",
      tour_start: "Guided tour",
      tour_stop: "Stop",
      tour_start_aria: "Start guided tour",
      tour_stop_aria: "Stop guided tour",
      form_ok: "Message sent successfully!",
      form_fail: "Could not send it right now. Try WhatsApp or the email link beside the form.",
      wa_default: "Hi, Gabriel! I found your studio and want to talk about a project.",
      hero_ref: "You arrived from a website I built",
      dot_prefix: "Go to "
    },
    fr: {
      title: "Gabriel F. Emilio | Studio pour marques premium",
      description: "Sites premium et expériences numériques sur mesure pour les activités qui servent des clients exigeants et valorisent réputation, temps et confiance.",
      tour_start: "Visite guidée",
      tour_stop: "Arrêter",
      tour_start_aria: "Lancer la visite guidée",
      tour_stop_aria: "Arrêter la visite guidée",
      form_ok: "Message envoyé avec succès !",
      form_fail: "Impossible d'envoyer pour le moment. Essayez WhatsApp ou l'e-mail à côté du formulaire.",
      wa_default: "Bonjour Gabriel ! J'ai découvert votre studio et je souhaite parler d'un projet.",
      hero_ref: "Vous arrivez depuis un site que j'ai créé",
      dot_prefix: "Aller à "
    }
  };

  const PHRASES = {
    en: {
      "preparando sua experiência...": "preparing your experience...",
      "Espera.": "Wait.",
      "antes de continuar, uma pergunta": "before you continue, one question",
      "Experiência completa": "Full experience",
      "Funciona na vertical. Deite o celular para ver a cena inteira.": "Works in portrait. Rotate your phone to see the full scene.",
      "Portfólio": "Portfolio",
      "Tour guiado": "Guided tour",
      "Sem tempo?": "Short on time?",
      "Ir ao contato": "Go to contact",
      "Studio · presença digital premium": "Studio · premium digital presence",
      "Sou Gabriel.": "I am Gabriel.",
      "Eu construo": "I build",
      "presença digital para negócios": "premium digital presence",
      "Eu construo presença digital para negócios": "I build premium digital presence",
      "que atendem": "for ",
      "clientes exigentes": "demanding clients",
      "Se você vende para um público que valoriza reputação, discrição e excelente experiência, o seu site precisa estar no mesmo nível. Role e veja o que eu posso construir com você.": "If you sell to an audience that values reputation, discretion, and an excellent experience, your website needs to operate at the same level. Scroll and see what I can build with you.",
      "role para começar": "scroll to begin",
      "Primeiro, a primeira impressão": "First, the first impression",
      "Seu site pode ser": "Your website can be",
      "uma": "a",
      "experiência memorável": "memorable experience",
      "Movimento, profundidade e acabamento visual. Continue rolando e veja a próxima tela ganhar forma diante de você.": "Motion, depth, and visual polish. Keep scrolling and watch the next screen take shape in front of you.",
      "demonstração": "demo",
      "Coleção": "Collection",
      "Manufatura": "Manufacture",
      "Herança": "Heritage",
      "Reservar": "Reserve",
      "Edição limitada · 88 exemplares": "Limited edition · 88 pieces",
      "O tempo,": "Time,",
      "lapidado": "crafted",
      "Um calibre de manufatura para quem coleciona instantes, não relógios.": "A manufacture calibre for those who collect moments, not watches.",
      "Reservar acesso privado": "Reserve private access",
      "Conhecer a coleção": "Explore the collection",
      "Calibre de manufatura": "Manufacture calibre",
      "Reserva de 42 horas": "42-hour power reserve",
      "Ouro rosé 18k": "18k rose gold",
      "Genebra · São Paulo · Dubai": "Geneva · São Paulo · Dubai",
      "Atendimento por convite": "By-invitation service",
      "Nada aqui é vídeo.": "None of this is video.",
      "O relógio funciona. Cada peça foi desenhada e montada em tempo real no seu navegador.": "The watch runs. Every element was drawn and assembled in real time in your browser.",
      "depois da primeira impressão": "after the first impression",
      "Beleza chama atenção.": "Beauty earns attention.",
      "Mas o que importa é:": "But what matters is:",
      "ela sustenta confiança?": "does it sustain trust?",
      "Seu site transmite valor antes da primeira conversa?": "Does your website communicate value before the first conversation?",
      "Ele respeita o tempo de quem decide?": "Does it respect the time of the decision-maker?",
      "Ele conduz o cliente certo para o próximo passo?": "Does it guide the right client to the next step?",
      "As próximas telas mostram como presença, desejo, vitrine e operação podem trabalhar para um público exigente.": "The next screens show how presence, desire, showcase, and operations can work for a demanding audience.",
      "Continue rolando.": "Keep scrolling.",
      "Capítulo 01 · Reputação": "Chapter 01 · Reputation",
      "Para quem vive do": "For those who live from",
      "próprio nome": "their own name",
      "Advogados, médicos, dentistas, contadores, consultores e engenheiros. Quando sua autoridade é o ativo central, o site precisa transmitir confiança antes da primeira conversa.": "Lawyers, physicians, dentists, accountants, consultants, and engineers. When your authority is the central asset, the website must convey trust before the first conversation.",
      "Advocacia": "Law",
      "Medicina": "Medicine",
      "Governança": "Governance",
      "Patrimônio": "Wealth",
      "Contato": "Contact",
      "Direito empresarial · clientes privados": "Corporate law · private clients",
      "Estratégia jurídica": "Legal strategy",
      "para": "for",
      "decisões grandes": "major decisions",
      "M&A, governança societária e proteção patrimonial para empresas familiares, sócios e conselhos que não podem improvisar.": "M&A, corporate governance, and wealth protection for family businesses, partners, and boards that cannot improvise.",
      "Solicitar reunião reservada": "Request a private meeting",
      "operações assessoradas": "advised transactions",
      "28 anos": "28 years",
      "experiência acumulada": "combined experience",
      "4 áreas": "4 areas",
      "atuação estratégica": "strategic practice",
      "Sócia fundadora · OAB SP 123.456": "Founding partner · OAB SP 123.456",
      "Mandatos ativos": "Active mandates",
      "Atendimento": "Service",
      "confidencial": "confidential",
      "Publicidade conforme OAB": "Advertising compliant with OAB",
      "LGPD e sigilo profissional": "LGPD and professional secrecy",
      "Atendimento por indicação": "Referral-based service",
      "Checkup": "Checkup",
      "Especialistas": "Specialists",
      "Segunda opinião": "Second opinion",
      "Agendar": "Book",
      "Medicina preventiva · agenda privativa": "Preventive medicine · private schedule",
      "Cuidado premium,": "Premium care,",
      "sem fricção clínica.": "without clinical friction.",
      "Jornada do paciente organizada da chegada ao retorno: confirmação, consentimento, orientação prévia e comunicação segura.": "A patient journey organized from arrival to follow-up: confirmation, consent, prior guidance, and secure communication.",
      "Agendar avaliação": "Book an assessment",
      "checkup executivo": "executive checkup",
      "NPS de referência": "benchmark NPS",
      "dados sensíveis": "sensitive data",
      "Checkup executivo": "Executive checkup",
      "agenda coordenada e retorno guiado": "coordinated schedule and guided follow-up",
      "Corpo clínico verificado": "Verified clinical team",
      "CRM, RQE e especialidade visíveis": "Visible CRM, RQE, and specialty",
      "Experiência concierge": "Concierge experience",
      "WhatsApp, lembretes e retorno pós consulta": "WhatsApp, reminders, and post-appointment follow-up",
      "Publicidade conforme CFM": "Advertising compliant with CFM",
      "Privacidade do paciente": "Patient privacy",
      "Acessibilidade digital": "Digital accessibility",
      "Autoridade sem exagero.": "Authority without excess.",
      "Para serviços de alto valor, confiança nasce de precisão: credenciais, áreas claras, sigilo e próximo passo discreto.": "For high-value services, trust comes from precision: credentials, clear areas, confidentiality, and a discreet next step.",
      "Mesmo padrão, outra pele.": "Same standard, different skin.",
      "Escritório e clínica pedem linguagens diferentes, mas a lógica é a mesma: reduzir dúvida antes do contato.": "A firm and a clinic require different languages, but the logic is the same: reduce doubt before contact.",
      "Dados que acalmam.": "Data that reassures.",
      "CRM, OAB, LGPD, processo e agenda tornam a decisão mais segura para quem compra com critério.": "CRM, OAB, LGPD, process, and scheduling make the decision safer for discerning buyers.",
      "Quero elevar minha presença": "I want to elevate my presence",
      "Capítulo 02 · Experiência": "Chapter 02 · Experience",
      "Para lugares que": "For places that",
      "despertam": "awaken",
      "desejo": "desire",
      "Restaurantes, cafés, bares, hotéis, pousadas e estética. O cliente de alto padrão decide rápido no celular; o site precisa abrir com velocidade, despertar desejo e facilitar a reserva.": "Restaurants, cafés, bars, hotels, inns, and aesthetics. High-end clients decide quickly on mobile; the site needs to load fast, spark desire, and make reservations easy.",
      "Reservar mesa": "Book a table",
      "Parrilla autoral · Jardins": "Signature parrilla · Jardins",
      "Reserva, carta e desejo": "Reservation, menu, and desire",
      "no mesmo gesto": "in the same gesture",
      "Cortes maturados, fogo preciso e uma carta com rótulos selecionados para quem decide onde jantar pelo detalhe.": "Aged cuts, precise fire, and a wine list for people who choose dinner by the details.",
      "Reservar experiência": "Reserve experience",
      "lugares por noite": "seats per night",
      "rótulos na carta": "labels on the wine list",
      "ticket médio alvo": "target average ticket",
      "Ancho maturado": "Aged ancho",
      "350g · 42 dias · manteiga defumada": "350g · 42 days · smoked butter",
      "Menu fogo & vinho": "Fire & wine menu",
      "4 tempos · harmonização opcional": "4 courses · optional pairing",
      "Ojo premium": "Premium ojo",
      "400g · parrilla aberta · sal de parrilla": "400g · open parrilla · parrilla salt",
      "Terça a domingo · 19h a 00h": "Tuesday to Sunday · 7 pm to midnight",
      "Reserva com confirmação": "Reservation with confirmation",
      "Valet e rota": "Valet and route",
      "Do desejo à reserva.": "From desire to reservation.",
      "Para gastronomia premium, o site não precisa explicar demais: precisa abrir rápido, dar vontade e confirmar a mesa.": "For premium gastronomy, the site does not need to overexplain: it must load fast, create appetite, and confirm the table.",
      "Atendimento sem ruído.": "Service without noise.",
      "Reserva, rota, menu e concierge no WhatsApp, sem depender de aplicativo ou comissão externa.": "Reservation, route, menu, and concierge on WhatsApp, without depending on an app or external commission.",
      "Quero reservas mais qualificadas": "I want better-qualified reservations",
      "Capítulo 03 · Vitrine": "Chapter 03 · Showcase",
      "Para quem mostra": "For those who show",
      "vender": "to sell",
      "Corretores, imobiliárias, arquitetos, fotógrafos e designers. Quando seu produto é visual, o site precisa conduzir a escolha com clareza, desejo e confiança.": "Brokers, real estate firms, architects, photographers, and designers. When your product is visual, the site must guide the choice with clarity, desire, and trust.",
      "Imóveis": "Real estate",
      "Arquitetura": "Architecture",
      "Comprar": "Buy",
      "Locação": "Rentals",
      "Oportunidades": "Opportunities",
      "Avaliar": "Evaluate",
      "Busque por bairro, condomínio ou estilo de vida": "Search by neighborhood, condominium, or lifestyle",
      "Ver curadoria": "View curation",
      "Alto padrão": "High-end",
      "3+ suítes": "3+ suites",
      "Vista livre": "Open view",
      "4 suítes": "4 suites",
      "4 vagas": "4 parking spaces",
      "Solicitar tour privado": "Request private tour",
      "3 suítes": "3 suites",
      "vista parque": "park view",
      "Falar com especialista": "Talk to a specialist",
      "5 suítes": "5 suites",
      "área gourmet": "gourmet area",
      "Receber dossier": "Receive dossier",
      "Curadoria validada": "Validated curation",
      "Atualizado hoje": "Updated today",
      "Estúdio": "Studio",
      "Residencial": "Residential",
      "Interiores": "Interiors",
      "Publicações": "Press",
      "Residencial · serra da mantiqueira": "Residential · Mantiqueira mountains",
      "CAU ativo": "Active CAU",
      "responsável técnico": "technical lead",
      "18 meses": "18 months",
      "projeto à obra": "design to construction",
      "3 etapas": "3 phases",
      "conceito, executivo, interiores": "concept, execution, interiors",
      "Registro CAU à vista": "Visible CAU registration",
      "Projetos autorais": "Authorial projects",
      "Memorial técnico": "Technical brief",
      "Vitrine para decisão grande.": "Showcase for major decisions.",
      "Preço, metragem, bairro, diferenciais e CRECI aparecem sem poluição. O interessado qualificado sabe onde tocar.": "Price, area, neighborhood, differentiators, and CRECI appear without clutter. Qualified prospects know exactly where to tap.",
      "Portfólio com silêncio.": "Portfolio with restraint.",
      "Arquitetura premium precisa de respiro, dados técnicos e autoria; não de grade apertada e texto gritando.": "Premium architecture needs space, technical data, and authorship; not a cramped grid and loud copy.",
      "Quero uma vitrine premium": "I want a premium showcase",
      "Capítulo 04 · Operação": "Chapter 04 · Operations",
      "Para quem vende": "For those who sell",
      "e gerencia": "and manage",
      "Lojas, marcas, atacado e franquias. Na frente, uma loja pronta para vender a qualquer hora. Por trás, ERP e PDV sob medida com estoque, vendas e caixa no mesmo fluxo.": "Stores, brands, wholesale, and franchises. Up front, a store ready to sell at any time. Behind it, tailored ERP and POS with inventory, sales, and cash flow in one flow.",
      "buscar joias, bolsas, presentes…": "search jewelry, bags, gifts...",
      "Boutique online · venda direta": "Online boutique · direct sales",
      "Curadoria premium": "Premium curation",
      "com operação sob controle.": "with operations under control.",
      "Uma loja leve para vender no varejo, atender clientes VIP no WhatsApp e conectar pedido, estoque e caixa no mesmo fluxo.": "A lightweight store for retail sales, VIP service on WhatsApp, and connected orders, inventory, and cash flow.",
      "loja aberta": "store open",
      "conciliação rápida": "quick reconciliation",
      "cliente recorrente": "returning client",
      "Pagamento aprovado": "Payment approved",
      "pedido #1842 · cliente recorrente": "order #1842 · returning client",
      "Receita hoje": "Revenue today",
      "web + loja": "web + store",
      "Pedidos VIP": "VIP orders",
      "3 canais": "3 channels",
      "Margem média": "Average margin",
      "curadoria": "curation",
      "Receita por canal · semana atual": "Revenue by channel · current week",
      "Operação": "Operations",
      "Loja Jardins · PDV aberto": "Jardins store · POS open",
      "Estoque baixo · Colar Aura": "Low stock · Aura necklace",
      "7 un": "7 units",
      "Pix conciliado · pedidos web": "Pix reconciled · web orders",
      "Cliente VIP aguardando retorno": "VIP client awaiting reply",
      "Venda direta com marca.": "Direct sales with brand.",
      "Produto, carrinho, Pix e WhatsApp sem cara de marketplace. O cliente compra da sua boutique, não da plataforma.": "Product, cart, Pix, and WhatsApp without a marketplace feel. The client buys from your boutique, not the platform.",
      "Por trás, gestão.": "Behind it, management.",
      "Receita, margem, estoque, canais e clientes recorrentes no mesmo painel, com dados úteis para decisão diária.": "Revenue, margin, inventory, channels, and returning clients in one panel, with useful data for daily decisions.",
      "Sistema sob medida.": "Tailored system.",
      "A vitrine pode nascer simples e evoluir para ERP, PDV, CRM e automações conforme a operação pede.": "The storefront can start simple and evolve into ERP, POS, CRM, and automations as operations demand.",
      "Quero vender com mais controle": "I want to sell with more control",
      "E o seu negócio?": "And your business?",
      "O método muda conforme": "The method changes with",
      "o seu": "your",
      "objetivo": "goal",
      "Reputação, desejo, vitrine e operação. Todo negócio premium vive de pelo menos um desses pilares. O mesmo método atende mercados como:": "Reputation, desire, showcase, and operations. Every premium business lives on at least one of these pillars. The same method serves markets such as:",
      "Advogados": "Lawyers",
      "Médicos": "Physicians",
      "Dentistas": "Dentists",
      "Arquitetos": "Architects",
      "Corretores de imóveis": "Real estate brokers",
      "Contadores": "Accountants",
      "Consultores": "Consultants",
      "Engenheiros": "Engineers",
      "Psicólogos": "Psychologists",
      "Nutricionistas": "Nutritionists",
      "Clínicas premium": "Premium clinics",
      "Assessores financeiros": "Financial advisors",
      "Restaurantes autorais": "Signature restaurants",
      "Cafeterias especiais": "Specialty cafés",
      "Hotéis e pousadas": "Hotels and inns",
      "Clínicas de estética": "Aesthetic clinics",
      "Academias boutique": "Boutique gyms",
      "Marcas de moda": "Fashion brands",
      "Lojas de beleza": "Beauty stores",
      "Fotógrafos": "Photographers",
      "Escolas livres": "Independent schools",
      "Experiências": "Experiences",
      "Eventos": "Events",
      "Imobiliárias": "Real estate firms",
      "Posso construir": "I can build",
      "sites institucionais": "institutional websites",
      "vitrines de alto padrão": "high-end showcases",
      "cardápios com reserva": "menus with reservations",
      "lojas online": "online stores",
      "painéis de gestão": "management dashboards",
      "e": "and",
      "sistemas sob medida": "tailored systems",
      "para o jeito que seu negócio vende.": "for the way your business sells.",
      "Se o seu mercado pede cuidado, desejo ou operação, eu traduzo isso em uma experiência digital clara, elegante e pronta para gerar contato qualificado.": "If your market requires care, desire, or operations, I translate that into a clear, elegant digital experience ready to generate qualified contact.",
      "Quero desenhar meu projeto": "I want to design my project",
      "O padrão da casa": "The house standard",
      "Tudo isso, com o mesmo cuidado": "All of this, with the same care",
      "que você viu nesta página.": "you saw on this page.",
      "Cada projeto sai do studio feito à mão, sem template, sem peso morto e sem atalho.": "Every project leaves the studio handmade, without templates, dead weight, or shortcuts.",
      "Leve de verdade": "Truly lightweight",
      "Páginas enxutas, rápidas mesmo em conexão instável. Velocidade também é percepção de valor.": "Lean pages, fast even on unstable connections. Speed is also a perception of value.",
      "Feito sob medida": "Made to measure",
      "Desenhado em cima do seu negócio, do seu cliente ideal e do seu jeito de vender. Nada de fórmula.": "Designed around your business, your ideal client, and your way of selling. No formula.",
      "Desenhado para o Google": "Designed for Google",
      "Estrutura, semântica e dados organizados para os buscadores entenderem e recomendarem você.": "Structure, semantics, and organized data so search engines can understand and recommend you.",
      "Impecável no celular": "Impeccable on mobile",
      "É onde seu cliente decide. Cada tela nasce pensada para toque, leitura rápida e ação clara.": "That is where your client decides. Every screen is made for touch, quick reading, and clear action.",
      "Agora imagine o que": "Now imagine what",
      "a gente constrói para": "we build for",
      "o seu negócio": "your business",
      "Me conte o que você faz, quem você atende e onde quer chegar. Eu respondo com ideias objetivas e uma direção clara para a primeira conversa.": "Tell me what you do, who you serve, and where you want to go. I reply with objective ideas and a clear direction for the first conversation.",
      "Conversar no WhatsApp": "Talk on WhatsApp",
      "Outros canais": "Other channels",
      "Conhecer meu portfólio": "View my portfolio",
      "o selo que fecha o ciclo": "the seal that closes the loop",
      "© Site de um cliente · Todos os direitos reservados": "© Client website · All rights reserved",
      "Desenvolvido por Gabriel Emilio": "Developed by Gabriel Emilio",
      "Talvez você tenha chegado aqui por um selo como este, no rodapé de um site que eu construí. É assim que eu me apresento: pelo trabalho, não pelo anúncio.": "Maybe you arrived here through a seal like this, in the footer of a website I built. That is how I introduce myself: through the work, not the ad.",
      "Voltar ao topo": "Back to top",
      ". Todos os direitos reservados.": ". All rights reserved.",
      "Design, código, textos, animações, interfaces demonstrativas e identidade visual protegidos. Reprodução, cópia, adaptação ou uso comercial sem autorização prévia é proibido.": "Design, code, copy, animations, demo interfaces, and visual identity are protected. Reproduction, copying, adaptation, or commercial use without prior authorization is prohibited.",
      "Vamos falar sobre um projeto à altura do seu negócio.": "Let's talk about a project worthy of your business.",
      "Me chame no WhatsApp, envie uma mensagem direta ou escolha um dos canais abaixo.": "Message me on WhatsApp, send a direct message, or choose one of the channels below.",
      "Nome": "Name",
      "Email": "Email",
      "O que você quer construir?": "What do you want to build?",
      "Enviar mensagem": "Send message",
      "Mensagem enviada com sucesso!": "Message sent successfully!",
      "resposta rápida": "quick reply",
      "perfil Gabriel Emilio": "Gabriel Emilio profile"
    },
    fr: {
      "preparando sua experiência...": "préparation de votre expérience...",
      "Espera.": "Attendez.",
      "antes de continuar, uma pergunta": "avant de continuer, une question",
      "Experiência completa": "Expérience complète",
      "Funciona na vertical. Deite o celular para ver a cena inteira.": "Fonctionne en portrait. Tournez le téléphone pour voir toute la scène.",
      "Portfólio": "Portfolio",
      "Tour guiado": "Visite guidée",
      "Sem tempo?": "Peu de temps ?",
      "Ir ao contato": "Aller au contact",
      "Studio · presença digital premium": "Studio · présence digitale premium",
      "Sou Gabriel.": "Je suis Gabriel.",
      "Eu construo": "Je crée",
      "presença digital para negócios": "une présence premium",
      "Eu construo presença digital para negócios": "Je crée une présence premium",
      "que atendem": "pour ",
      "clientes exigentes": "des clients exigeants",
      "Se você vende para um público que valoriza reputação, discrição e excelente experiência, o seu site precisa estar no mesmo nível. Role e veja o que eu posso construir com você.": "Si vous vendez à un public qui valorise la réputation, la discrétion et une excellente expérience, votre site doit être au même niveau. Faites défiler et voyez ce que je peux construire avec vous.",
      "role para começar": "faites défiler pour commencer",
      "Primeiro, a primeira impressão": "D'abord, la première impression",
      "Seu site pode ser": "Votre site peut être",
      "uma": "une",
      "experiência memorável": "expérience mémorable",
      "Movimento, profundidade e acabamento visual. Continue rolando e veja a próxima tela ganhar forma diante de você.": "Mouvement, profondeur et finition visuelle. Continuez à faire défiler et voyez l'écran suivant prendre forme devant vous.",
      "demonstração": "démonstration",
      "Coleção": "Collection",
      "Manufatura": "Manufacture",
      "Herança": "Héritage",
      "Reservar": "Réserver",
      "Edição limitada · 88 exemplares": "Édition limitée · 88 exemplaires",
      "O tempo,": "Le temps,",
      "lapidado": "façonné",
      "Um calibre de manufatura para quem coleciona instantes, não relógios.": "Un calibre de manufacture pour ceux qui collectionnent les instants, pas les montres.",
      "Reservar acesso privado": "Réserver un accès privé",
      "Conhecer a coleção": "Découvrir la collection",
      "Calibre de manufatura": "Calibre de manufacture",
      "Reserva de 42 horas": "Réserve de marche de 42 heures",
      "Ouro rosé 18k": "Or rose 18 carats",
      "Genebra · São Paulo · Dubai": "Genève · São Paulo · Dubaï",
      "Atendimento por convite": "Service sur invitation",
      "Nada aqui é vídeo.": "Rien ici n'est une vidéo.",
      "O relógio funciona. Cada peça foi desenhada e montada em tempo real no seu navegador.": "La montre fonctionne. Chaque élément a été dessiné et assemblé en temps réel dans votre navigateur.",
      "depois da primeira impressão": "après la première impression",
      "Beleza chama atenção.": "La beauté attire l'attention.",
      "Mas o que importa é:": "Mais ce qui compte, c'est :",
      "ela sustenta confiança?": "soutient-elle la confiance ?",
      "Seu site transmite valor antes da primeira conversa?": "Votre site transmet-il de la valeur avant la première conversation ?",
      "Ele respeita o tempo de quem decide?": "Respecte-t-il le temps de la personne qui décide ?",
      "Ele conduz o cliente certo para o próximo passo?": "Guide-t-il le bon client vers l'étape suivante ?",
      "As próximas telas mostram como presença, desejo, vitrine e operação podem trabalhar para um público exigente.": "Les prochains écrans montrent comment présence, désir, vitrine et opération peuvent travailler pour un public exigeant.",
      "Continue rolando.": "Continuez à faire défiler.",
      "Capítulo 01 · Reputação": "Chapitre 01 · Réputation",
      "Para quem vive do": "Pour ceux qui vivent de",
      "próprio nome": "leur propre nom",
      "Advogados, médicos, dentistas, contadores, consultores e engenheiros. Quando sua autoridade é o ativo central, o site precisa transmitir confiança antes da primeira conversa.": "Avocats, médecins, dentistes, comptables, consultants et ingénieurs. Quand votre autorité est l'actif central, le site doit inspirer confiance avant la première conversation.",
      "Advocacia": "Droit",
      "Medicina": "Médecine",
      "Governança": "Gouvernance",
      "Patrimônio": "Patrimoine",
      "Contato": "Contact",
      "Direito empresarial · clientes privados": "Droit des affaires · clients privés",
      "Estratégia jurídica": "Stratégie juridique",
      "para": "pour",
      "decisões grandes": "grandes décisions",
      "M&A, governança societária e proteção patrimonial para empresas familiares, sócios e conselhos que não podem improvisar.": "M&A, gouvernance sociétaire et protection patrimoniale pour entreprises familiales, associés et conseils qui ne peuvent pas improviser.",
      "Solicitar reunião reservada": "Demander une réunion confidentielle",
      "operações assessoradas": "opérations conseillées",
      "28 anos": "28 ans",
      "experiência acumulada": "expérience cumulée",
      "4 áreas": "4 domaines",
      "atuação estratégica": "pratique stratégique",
      "Sócia fundadora · OAB SP 123.456": "Associée fondatrice · OAB SP 123.456",
      "Mandatos ativos": "Mandats actifs",
      "Atendimento": "Service",
      "confidencial": "confidentiel",
      "Publicidade conforme OAB": "Publicité conforme à l'OAB",
      "LGPD e sigilo profissional": "LGPD et secret professionnel",
      "Atendimento por indicação": "Service par recommandation",
      "Checkup": "Bilan",
      "Especialistas": "Spécialistes",
      "Segunda opinião": "Deuxième avis",
      "Agendar": "Réserver",
      "Medicina preventiva · agenda privativa": "Médecine préventive · agenda privé",
      "Cuidado premium,": "Soin premium,",
      "sem fricção clínica.": "sans friction clinique.",
      "Jornada do paciente organizada da chegada ao retorno: confirmação, consentimento, orientação prévia e comunicação segura.": "Parcours patient organisé de l'arrivée au suivi : confirmation, consentement, orientation préalable et communication sécurisée.",
      "Agendar avaliação": "Planifier une évaluation",
      "checkup executivo": "bilan exécutif",
      "NPS de referência": "NPS de référence",
      "dados sensíveis": "données sensibles",
      "Checkup executivo": "Bilan exécutif",
      "agenda coordenada e retorno guiado": "agenda coordonné et suivi guidé",
      "Corpo clínico verificado": "Équipe clinique vérifiée",
      "CRM, RQE e especialidade visíveis": "CRM, RQE et spécialité visibles",
      "Experiência concierge": "Expérience concierge",
      "WhatsApp, lembretes e retorno pós consulta": "WhatsApp, rappels et suivi post-consultation",
      "Publicidade conforme CFM": "Publicité conforme au CFM",
      "Privacidade do paciente": "Confidentialité du patient",
      "Acessibilidade digital": "Accessibilité numérique",
      "Autoridade sem exagero.": "Autorité sans excès.",
      "Para serviços de alto valor, confiança nasce de precisão: credenciais, áreas claras, sigilo e próximo passo discreto.": "Pour les services à forte valeur, la confiance naît de la précision : références, domaines clairs, confidentialité et prochaine étape discrète.",
      "Mesmo padrão, outra pele.": "Même standard, autre peau.",
      "Escritório e clínica pedem linguagens diferentes, mas a lógica é a mesma: reduzir dúvida antes do contato.": "Cabinet et clinique demandent des langages différents, mais la logique est la même : réduire le doute avant le contact.",
      "Dados que acalmam.": "Des données qui rassurent.",
      "CRM, OAB, LGPD, processo e agenda tornam a decisão mais segura para quem compra com critério.": "CRM, OAB, LGPD, processus et agenda rendent la décision plus sûre pour ceux qui achètent avec exigence.",
      "Quero elevar minha presença": "Je veux élever ma présence",
      "Capítulo 02 · Experiência": "Chapitre 02 · Expérience",
      "Para lugares que": "Pour les lieux qui",
      "despertam": "éveillent",
      "desejo": "le désir",
      "Restaurantes, cafés, bares, hotéis, pousadas e estética. O cliente de alto padrão decide rápido no celular; o site precisa abrir com velocidade, despertar desejo e facilitar a reserva.": "Restaurants, cafés, bars, hôtels, maisons d'hôtes et esthétique. Le client haut de gamme décide vite sur mobile ; le site doit charger rapidement, éveiller le désir et faciliter la réservation.",
      "Reservar mesa": "Réserver une table",
      "Parrilla autoral · Jardins": "Parrilla signature · Jardins",
      "Reserva, carta e desejo": "Réservation, carte et désir",
      "no mesmo gesto": "dans le même geste",
      "Cortes maturados, fogo preciso e uma carta com rótulos selecionados para quem decide onde jantar pelo detalhe.": "Viandes maturées, feu précis et carte des vins sélectionnée pour ceux qui choisissent où dîner par le détail.",
      "Reservar experiência": "Réserver l'expérience",
      "lugares por noite": "couverts par soir",
      "rótulos na carta": "références à la carte",
      "ticket médio alvo": "ticket moyen cible",
      "Ancho maturado": "Ancho maturé",
      "350g · 42 dias · manteiga defumada": "350 g · 42 jours · beurre fumé",
      "Menu fogo & vinho": "Menu feu & vin",
      "4 tempos · harmonização opcional": "4 temps · accord optionnel",
      "Ojo premium": "Ojo premium",
      "400g · parrilla aberta · sal de parrilla": "400 g · parrilla ouverte · sel de parrilla",
      "Terça a domingo · 19h a 00h": "Mardi à dimanche · 19 h à minuit",
      "Reserva com confirmação": "Réservation avec confirmation",
      "Valet e rota": "Voiturier et itinéraire",
      "Do desejo à reserva.": "Du désir à la réservation.",
      "Para gastronomia premium, o site não precisa explicar demais: precisa abrir rápido, dar vontade e confirmar a mesa.": "Pour la gastronomie premium, le site n'a pas besoin de trop expliquer : il doit charger vite, donner envie et confirmer la table.",
      "Atendimento sem ruído.": "Service sans bruit.",
      "Reserva, rota, menu e concierge no WhatsApp, sem depender de aplicativo ou comissão externa.": "Réservation, itinéraire, menu et concierge sur WhatsApp, sans dépendre d'une application ni d'une commission externe.",
      "Quero reservas mais qualificadas": "Je veux des réservations plus qualifiées",
      "Capítulo 03 · Vitrine": "Chapitre 03 · Vitrine",
      "Para quem mostra": "Pour ceux qui montrent",
      "vender": "pour vendre",
      "Corretores, imobiliárias, arquitetos, fotógrafos e designers. Quando seu produto é visual, o site precisa conduzir a escolha com clareza, desejo e confiança.": "Agents, agences immobilières, architectes, photographes et designers. Quand votre produit est visuel, le site doit guider le choix avec clarté, désir et confiance.",
      "Imóveis": "Immobilier",
      "Arquitetura": "Architecture",
      "Comprar": "Acheter",
      "Locação": "Location",
      "Oportunidades": "Opportunités",
      "Avaliar": "Évaluer",
      "Busque por bairro, condomínio ou estilo de vida": "Cherchez par quartier, résidence ou style de vie",
      "Ver curadoria": "Voir la sélection",
      "Alto padrão": "Haut de gamme",
      "3+ suítes": "3+ suites",
      "Vista livre": "Vue dégagée",
      "4 suítes": "4 suites",
      "4 vagas": "4 places",
      "Solicitar tour privado": "Demander une visite privée",
      "3 suítes": "3 suites",
      "vista parque": "vue parc",
      "Falar com especialista": "Parler à un spécialiste",
      "5 suítes": "5 suites",
      "área gourmet": "espace gourmet",
      "Receber dossier": "Recevoir le dossier",
      "Curadoria validada": "Sélection validée",
      "Atualizado hoje": "Mis à jour aujourd'hui",
      "Estúdio": "Studio",
      "Residencial": "Résidentiel",
      "Interiores": "Intérieurs",
      "Publicações": "Publications",
      "Residencial · serra da mantiqueira": "Résidentiel · Serra da Mantiqueira",
      "CAU ativo": "CAU actif",
      "responsável técnico": "responsable technique",
      "18 meses": "18 mois",
      "projeto à obra": "du projet au chantier",
      "3 etapas": "3 étapes",
      "conceito, executivo, interiores": "concept, exécution, intérieurs",
      "Registro CAU à vista": "Enregistrement CAU visible",
      "Projetos autorais": "Projets d'auteur",
      "Memorial técnico": "Mémoire technique",
      "Vitrine para decisão grande.": "Vitrine pour grande décision.",
      "Preço, metragem, bairro, diferenciais e CRECI aparecem sem poluição. O interessado qualificado sabe onde tocar.": "Prix, surface, quartier, différenciateurs et CRECI apparaissent sans pollution. Le prospect qualifié sait où toucher.",
      "Portfólio com silêncio.": "Portfolio avec silence.",
      "Arquitetura premium precisa de respiro, dados técnicos e autoria; não de grade apertada e texto gritando.": "L'architecture premium a besoin d'espace, de données techniques et d'auteur ; pas d'une grille serrée ni de textes criards.",
      "Quero uma vitrine premium": "Je veux une vitrine premium",
      "Capítulo 04 · Operação": "Chapitre 04 · Opération",
      "Para quem vende": "Pour ceux qui vendent",
      "e gerencia": "et gèrent",
      "Lojas, marcas, atacado e franquias. Na frente, uma loja pronta para vender a qualquer hora. Por trás, ERP e PDV sob medida com estoque, vendas e caixa no mesmo fluxo.": "Boutiques, marques, grossistes et franchises. En façade, une boutique prête à vendre à tout moment. En arrière-plan, ERP et PDV sur mesure avec stock, ventes et caisse dans le même flux.",
      "buscar joias, bolsas, presentes…": "chercher bijoux, sacs, cadeaux...",
      "Boutique online · venda direta": "Boutique en ligne · vente directe",
      "Curadoria premium": "Sélection premium",
      "com operação sob controle.": "avec opération sous contrôle.",
      "Uma loja leve para vender no varejo, atender clientes VIP no WhatsApp e conectar pedido, estoque e caixa no mesmo fluxo.": "Une boutique légère pour vendre au détail, servir les clients VIP sur WhatsApp et connecter commande, stock et caisse dans le même flux.",
      "loja aberta": "boutique ouverte",
      "conciliação rápida": "conciliation rapide",
      "cliente recorrente": "client récurrent",
      "Pagamento aprovado": "Paiement approuvé",
      "pedido #1842 · cliente recorrente": "commande #1842 · client récurrent",
      "Receita hoje": "Chiffre du jour",
      "web + loja": "web + boutique",
      "Pedidos VIP": "Commandes VIP",
      "3 canais": "3 canaux",
      "Margem média": "Marge moyenne",
      "curadoria": "sélection",
      "Receita por canal · semana atual": "Chiffre par canal · semaine en cours",
      "Operação": "Opération",
      "Loja Jardins · PDV aberto": "Boutique Jardins · PDV ouvert",
      "Estoque baixo · Colar Aura": "Stock bas · Collier Aura",
      "7 un": "7 unités",
      "Pix conciliado · pedidos web": "Pix concilié · commandes web",
      "Cliente VIP aguardando retorno": "Client VIP en attente de réponse",
      "Venda direta com marca.": "Vente directe avec marque.",
      "Produto, carrinho, Pix e WhatsApp sem cara de marketplace. O cliente compra da sua boutique, não da plataforma.": "Produit, panier, Pix et WhatsApp sans apparence de marketplace. Le client achète dans votre boutique, pas sur la plateforme.",
      "Por trás, gestão.": "Derrière, la gestion.",
      "Receita, margem, estoque, canais e clientes recorrentes no mesmo painel, com dados úteis para decisão diária.": "Chiffre d'affaires, marge, stock, canaux et clients récurrents dans le même tableau de bord, avec des données utiles à la décision quotidienne.",
      "Sistema sob medida.": "Système sur mesure.",
      "A vitrine pode nascer simples e evoluir para ERP, PDV, CRM e automações conforme a operação pede.": "La vitrine peut naître simple et évoluer vers ERP, PDV, CRM et automatisations selon les besoins de l'opération.",
      "Quero vender com mais controle": "Je veux vendre avec plus de contrôle",
      "E o seu negócio?": "Et votre activité ?",
      "O método muda conforme": "La méthode change selon",
      "o seu": "votre",
      "objetivo": "objectif",
      "Reputação, desejo, vitrine e operação. Todo negócio premium vive de pelo menos um desses pilares. O mesmo método atende mercados como:": "Réputation, désir, vitrine et opération. Toute activité premium vit d'au moins un de ces piliers. La même méthode sert des marchés comme :",
      "Advogados": "Avocats",
      "Médicos": "Médecins",
      "Dentistas": "Dentistes",
      "Arquitetos": "Architectes",
      "Corretores de imóveis": "Agents immobiliers",
      "Contadores": "Comptables",
      "Consultores": "Consultants",
      "Engenheiros": "Ingénieurs",
      "Psicólogos": "Psychologues",
      "Nutricionistas": "Nutritionnistes",
      "Clínicas premium": "Cliniques premium",
      "Assessores financeiros": "Conseillers financiers",
      "Restaurantes autorais": "Restaurants signature",
      "Cafeterias especiais": "Cafés de spécialité",
      "Hotéis e pousadas": "Hôtels et maisons d'hôtes",
      "Clínicas de estética": "Cliniques esthétiques",
      "Academias boutique": "Salles boutique",
      "Marcas de moda": "Marques de mode",
      "Lojas de beleza": "Boutiques beauté",
      "Fotógrafos": "Photographes",
      "Escolas livres": "Écoles indépendantes",
      "Experiências": "Expériences",
      "Eventos": "Événements",
      "Imobiliárias": "Agences immobilières",
      "Posso construir": "Je peux construire",
      "sites institucionais": "sites institutionnels",
      "vitrines de alto padrão": "vitrines haut de gamme",
      "cardápios com reserva": "menus avec réservation",
      "lojas online": "boutiques en ligne",
      "painéis de gestão": "tableaux de gestion",
      "e": "et",
      "sistemas sob medida": "systèmes sur mesure",
      "para o jeito que seu negócio vende.": "pour la façon dont votre activité vend.",
      "Se o seu mercado pede cuidado, desejo ou operação, eu traduzo isso em uma experiência digital clara, elegante e pronta para gerar contato qualificado.": "Si votre marché demande du soin, du désir ou de l'opération, je le traduis en une expérience digitale claire, élégante et prête à générer des contacts qualifiés.",
      "Quero desenhar meu projeto": "Je veux concevoir mon projet",
      "O padrão da casa": "Le standard de la maison",
      "Tudo isso, com o mesmo cuidado": "Tout cela, avec le même soin",
      "que você viu nesta página.": "que vous avez vu sur cette page.",
      "Cada projeto sai do studio feito à mão, sem template, sem peso morto e sem atalho.": "Chaque projet sort du studio fait à la main, sans template, sans poids mort et sans raccourci.",
      "Leve de verdade": "Vraiment léger",
      "Páginas enxutas, rápidas mesmo em conexão instável. Velocidade também é percepção de valor.": "Pages sobres, rapides même avec une connexion instable. La vitesse est aussi une perception de valeur.",
      "Feito sob medida": "Fait sur mesure",
      "Desenhado em cima do seu negócio, do seu cliente ideal e do seu jeito de vender. Nada de fórmula.": "Conçu autour de votre activité, de votre client idéal et de votre manière de vendre. Aucune formule.",
      "Desenhado para o Google": "Conçu pour Google",
      "Estrutura, semântica e dados organizados para os buscadores entenderem e recomendarem você.": "Structure, sémantique et données organisées pour que les moteurs de recherche vous comprennent et vous recommandent.",
      "Impecável no celular": "Impeccable sur mobile",
      "É onde seu cliente decide. Cada tela nasce pensada para toque, leitura rápida e ação clara.": "C'est là que votre client décide. Chaque écran naît pour le toucher, la lecture rapide et l'action claire.",
      "Agora imagine o que": "Imaginez maintenant ce que",
      "a gente constrói para": "nous construisons pour",
      "o seu negócio": "votre activité",
      "Me conte o que você faz, quem você atende e onde quer chegar. Eu respondo com ideias objetivas e uma direção clara para a primeira conversa.": "Dites-moi ce que vous faites, qui vous servez et où vous voulez aller. Je réponds avec des idées objectives et une direction claire pour la première conversation.",
      "Conversar no WhatsApp": "Parler sur WhatsApp",
      "Outros canais": "Autres canaux",
      "Conhecer meu portfólio": "Voir mon portfolio",
      "o selo que fecha o ciclo": "le sceau qui ferme le cycle",
      "© Site de um cliente · Todos os direitos reservados": "© Site client · Tous droits réservés",
      "Desenvolvido por Gabriel Emilio": "Développé par Gabriel Emilio",
      "Talvez você tenha chegado aqui por um selo como este, no rodapé de um site que eu construí. É assim que eu me apresento: pelo trabalho, não pelo anúncio.": "Vous êtes peut-être arrivé ici grâce à un sceau comme celui-ci, dans le pied de page d'un site que j'ai créé. C'est ainsi que je me présente : par le travail, pas par la publicité.",
      "Voltar ao topo": "Retour en haut",
      ". Todos os direitos reservados.": ". Tous droits réservés.",
      "Design, código, textos, animações, interfaces demonstrativas e identidade visual protegidos. Reprodução, cópia, adaptação ou uso comercial sem autorização prévia é proibido.": "Design, code, textes, animations, interfaces démonstratives et identité visuelle protégés. Reproduction, copie, adaptation ou usage commercial sans autorisation préalable interdits.",
      "Vamos falar sobre um projeto à altura do seu negócio.": "Parlons d'un projet à la hauteur de votre activité.",
      "Me chame no WhatsApp, envie uma mensagem direta ou escolha um dos canais abaixo.": "Contactez-moi sur WhatsApp, envoyez un message direct ou choisissez l'un des canaux ci-dessous.",
      "Nome": "Nom",
      "Email": "E-mail",
      "O que você quer construir?": "Que souhaitez-vous construire ?",
      "Enviar mensagem": "Envoyer le message",
      "Mensagem enviada com sucesso!": "Message envoyé avec succès !",
      "resposta rápida": "réponse rapide",
      "perfil Gabriel Emilio": "profil Gabriel Emilio"
    }
  };

  const ATTRS = {
    en: {
      "Idioma do site": "Site language",
      "Ir para o portfólio de Gabriel F. Emilio": "Go to Gabriel F. Emilio's portfolio",
      "Iniciar tour guiado": "Start guided tour",
      "Parar tour guiado": "Stop guided tour",
      "Fechar contato": "Close contact",
      "Alternar demonstração": "Switch demo",
      "Início": "Start",
      "O espetáculo": "The spectacle",
      "A pergunta": "The question",
      "Reputação": "Reputation",
      "Experiência": "Experience",
      "Vitrine": "Showcase",
      "Operação": "Operations",
      "Todo negócio": "Every business",
      "O padrão": "The standard",
      "Contato": "Contact",
      "Olá, Gabriel! Vim pelo seu studio e quero conversar pelo WhatsApp.": "Hi, Gabriel! I came from your studio and want to talk on WhatsApp.",
      "Olá, Gabriel! Vi o capítulo Reputação no seu studio e quero uma presença mais sofisticada.": "Hi, Gabriel! I saw the Reputation chapter in your studio and want a more sophisticated presence.",
      "Olá, Gabriel! Vi o capítulo Experiência no seu studio e quero atrair clientes mais qualificados.": "Hi, Gabriel! I saw the Experience chapter in your studio and want to attract more qualified clients.",
      "Olá, Gabriel! Vi o capítulo Vitrine no seu studio e quero uma vitrine mais premium.": "Hi, Gabriel! I saw the Showcase chapter in your studio and want a more premium showcase.",
      "Olá, Gabriel! Vi o capítulo Operação no seu studio e quero vender com mais controle.": "Hi, Gabriel! I saw the Operations chapter in your studio and want to sell with more control.",
      "Olá, Gabriel! Quero conversar sobre o que você pode construir para o meu negócio.": "Hi, Gabriel! I want to talk about what you can build for my business.",
      "Olá, Gabriel! Cheguei pelo seu studio e quero conversar sobre um projeto.": "Hi, Gabriel! I found your studio and want to talk about a project."
    },
    fr: {
      "Idioma do site": "Langue du site",
      "Ir para o portfólio de Gabriel F. Emilio": "Aller au portfolio de Gabriel F. Emilio",
      "Iniciar tour guiado": "Lancer la visite guidée",
      "Parar tour guiado": "Arrêter la visite guidée",
      "Fechar contato": "Fermer le contact",
      "Alternar demonstração": "Changer la démonstration",
      "Início": "Accueil",
      "O espetáculo": "Le spectacle",
      "A pergunta": "La question",
      "Reputação": "Réputation",
      "Experiência": "Expérience",
      "Vitrine": "Vitrine",
      "Operação": "Opération",
      "Todo negócio": "Toute activité",
      "O padrão": "Le standard",
      "Contato": "Contact",
      "Olá, Gabriel! Vim pelo seu studio e quero conversar pelo WhatsApp.": "Bonjour Gabriel ! Je viens de votre studio et souhaite parler sur WhatsApp.",
      "Olá, Gabriel! Vi o capítulo Reputação no seu studio e quero uma presença mais sofisticada.": "Bonjour Gabriel ! J'ai vu le chapitre Réputation de votre studio et je veux une présence plus sophistiquée.",
      "Olá, Gabriel! Vi o capítulo Experiência no seu studio e quero atrair clientes mais qualificados.": "Bonjour Gabriel ! J'ai vu le chapitre Expérience de votre studio et je veux attirer des clients plus qualifiés.",
      "Olá, Gabriel! Vi o capítulo Vitrine no seu studio e quero uma vitrine mais premium.": "Bonjour Gabriel ! J'ai vu le chapitre Vitrine de votre studio et je veux une vitrine plus premium.",
      "Olá, Gabriel! Vi o capítulo Operação no seu studio e quero vender com mais controle.": "Bonjour Gabriel ! J'ai vu le chapitre Opération de votre studio et je veux vendre avec plus de contrôle.",
      "Olá, Gabriel! Quero conversar sobre o que você pode construir para o meu negócio.": "Bonjour Gabriel ! Je veux parler de ce que vous pouvez construire pour mon activité.",
      "Olá, Gabriel! Cheguei pelo seu studio e quero conversar sobre um projeto.": "Bonjour Gabriel ! J'ai découvert votre studio et je souhaite parler d'un projet."
    }
  };

  const originalText = new WeakMap();
  const originalAttr = new WeakMap();
  let LANG = initialLanguage();

  function normalize(value) {
    return String(value || "").trim().toLowerCase().split(/[-_]/)[0];
  }
  function supported(lang) {
    return SUPPORTED.includes(lang) ? lang : "";
  }
  function readStoredLanguage() {
    try { return supported(normalize(localStorage.getItem(STORAGE_KEY))); }
    catch (_) { return ""; }
  }
  function queryLanguage() {
    try { return supported(normalize(new URLSearchParams(location.search).get("lang"))); }
    catch (_) { return ""; }
  }
  function initialLanguage() {
    return queryLanguage() || readStoredLanguage() || "pt";
  }
  function saveLanguage(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }
  function phrase(text, lang = LANG) {
    if (lang === "pt") return text;
    return (PHRASES[lang] && PHRASES[lang][text]) || text;
  }
  function attrPhrase(text, lang = LANG) {
    if (lang === "pt") return text;
    return (ATTRS[lang] && ATTRS[lang][text]) || phrase(text, lang);
  }
  function t(key, lang = LANG) {
    return (UI[lang] && UI[lang][key]) || (UI.pt && UI.pt[key]) || key;
  }
  function eachTextNode(root, fn) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (/^(SCRIPT|STYLE|SVG|NOSCRIPT|TEXTAREA)$/i.test(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(fn);
  }
  function baseAttr(el, attr) {
    let map = originalAttr.get(el);
    if (!map) {
      map = {};
      originalAttr.set(el, map);
    }
    if (!(attr in map)) map[attr] = el.getAttribute(attr) || "";
    return map[attr];
  }
  function syncText() {
    eachTextNode(document.body, node => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const base = originalText.get(node);
      const leading = base.match(/^\s*/)[0];
      const trailing = base.match(/\s*$/)[0];
      const core = base.trim();
      node.nodeValue = core ? leading + phrase(core) + trailing : base;
    });
  }
  function syncAttributes() {
    document.querySelectorAll("[aria-label],[data-label],[data-msg],meta[name='description'],meta[property='og:title'],meta[property='og:description']").forEach(el => {
      ["aria-label", "data-label", "data-msg", "content"].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        const base = baseAttr(el, attr);
        if (!base) return;
        if (attr === "content" && el.matches("meta[property='og:title']")) el.setAttribute(attr, t("title"));
        else if (attr === "content" && (el.matches("meta[name='description']") || el.matches("meta[property='og:description']"))) el.setAttribute(attr, t("description"));
        else el.setAttribute(attr, attrPhrase(base));
      });
    });
  }
  function syncButtons() {
    document.querySelectorAll("[data-lang]").forEach(btn => {
      const active = btn.dataset.lang === LANG;
      btn.classList.toggle("on", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    const tour = document.getElementById("autoTourBtn");
    if (tour) {
      const active = tour.getAttribute("aria-pressed") === "true";
      tour.setAttribute("aria-label", active ? t("tour_stop_aria") : t("tour_start_aria"));
      const label = tour.querySelector("span");
      if (label) label.textContent = active ? t("tour_stop") : t("tour_start");
    }
  }
  function syncDots() {
    const sections = Array.from(document.querySelectorAll(".scene"));
    const dots = Array.from(document.querySelectorAll("#dots button"));
    dots.forEach((btn, i) => {
      const label = sections[i] && sections[i].dataset.label;
      if (!label) return;
      btn.dataset.label = label;
      btn.textContent = label;
      btn.setAttribute("aria-label", t("dot_prefix") + label);
    });
  }
  function syncMeta() {
    document.documentElement.lang = HTML_LANG[LANG] || LANG;
    document.title = t("title");
  }
  function syncReferralKicker() {
    if (document.body.dataset.refEntry !== "true") return;
    const heroKick = document.getElementById("heroKick");
    if (heroKick) heroKick.textContent = t("hero_ref");
  }
  function applyLanguage() {
    syncMeta();
    syncText();
    syncAttributes();
    syncButtons();
    syncDots();
    syncReferralKicker();
    if (typeof window.syncStudioWhatsAppLinks === "function") window.syncStudioWhatsAppLinks();
  }
  function setLanguage(lang, persist = true) {
    const next = supported(normalize(lang));
    if (!next) return;
    LANG = next;
    if (persist) saveLanguage(LANG);
    applyLanguage();
  }

  document.addEventListener("click", e => {
    const btn = e.target.closest && e.target.closest("[data-lang]");
    if (!btn) return;
    e.preventDefault();
    setLanguage(btn.dataset.lang, true);
  });

  window.StudioI18n = {
    t,
    phrase,
    attrPhrase,
    apply: applyLanguage,
    setLanguage,
    get language() { return LANG; }
  };

  applyLanguage();
})();
