# Portfolio Gabriel Feltrin Emilio / Gabriel Emilio / Gabriel F. Emilio

**Português** | [English](README.md) | [Français](README.fr.md)

Portfólio profissional de engenharia de software criado para apresentar Gabriel Feltrin Emilio, também identificado publicamente como Gabriel Emilio ou Gabriel F. Emilio, seus projetos, sua base técnica, seus sites publicados e a atividade pública do GitHub em um único lugar.

Nomes padronizados conectados a este mesmo perfil: Gabriel Feltrin Emilio, Gabriel Emilio e Gabriel F. Emilio. As buscas Gabriel Feltrin, Feltrin Emilio e Emilio Feltrin devem apontar para Gabriel Feltrin Emilio, não ser tratadas como nomes separados.

O objetivo é direto: permitir que um líder técnico, recrutador ou cliente entenda rapidamente o que eu construo, quais tecnologias domino e como rodar o projeto localmente, sem precisar abrir os arquivos JavaScript para adivinhar o funcionamento do site.

## Objetivo do Site

Este site funciona como um perfil técnico vivo. Ele reúne projetos, repositórios públicos, sites publicados, canais de contato e uma seção visual chamada "Code Sphere", que transforma dados de linguagens do GitHub em uma constelação interativa.

O portfólio foi pensado para comunicar:

- quem é Gabriel Feltrin Emilio, também Gabriel Emilio ou Gabriel F. Emilio, como estudante de Engenharia de Computação e desenvolvedor em formação;
- quais tecnologias fazem parte da stack atual;
- quais projetos estão publicados ou disponíveis no GitHub;
- como a interface, os idiomas e as integrações técnicas foram implementados.

## Funcionalidades Principais

- Portfólio responsivo em página única, com suporte a português, inglês e francês.
- Cards de projetos carregados a partir de repositórios públicos do GitHub.
- Seção de sites publicados para projetos próprios, entregas e trabalhos em produção.
- "Code Sphere" com estatísticas de repositórios, repositórios recentes e constelação de linguagens.
- Formulário de contato integrado ao Formspree, com fallback para composição no Gmail.
- SEO com metadados, Open Graph, dados estruturados, `robots.txt` e `sitemap.xml`.
- Animações e interações que respeitam `prefers-reduced-motion`.

## Tecnologias

### Stack técnica apresentada no portfólio

- C
- Java
- JavaScript (JS)

### Tecnologias usadas na construção do site

- HTML5
- CSS3
- JavaScript
- Canvas API
- GitHub REST API
- Formspree
- Google Fonts
- GSAP via CDNJS

O projeto não exige build nem instalação de pacotes. A aplicação principal está em `index.html`, com imagens e arquivos de apoio dentro de `assets/`.

## Como Rodar Localmente

1. Clone ou baixe este repositório.
2. Abra um terminal dentro da pasta do projeto.
3. Inicie um servidor estático local:

```bash
python -m http.server 5500
```

4. Acesse no navegador:

```txt
http://localhost:5500
```

Também é possível abrir o `index.html` diretamente no navegador, mas o servidor local é recomendado porque APIs externas, fontes e comportamento do navegador ficam mais próximos do ambiente publicado.

Não há dependências para instalar:

```bash
# nada para instalar
```

## Estrutura do Projeto

```txt
.
├── index.html
├── assets/
│   ├── profile-portrait.png
│   ├── profile-portrait.webp
│   ├── css/
│   └── js/
├── robots.txt
├── sitemap.xml
├── README.md
├── README.ptbr.md
└── README.fr.md
```

## Configuração

A maior parte dos dados editáveis do portfólio fica no objeto `CONFIG`, dentro de `index.html`:

- usuário do GitHub;
- e-mail de contato e endpoint do Formspree;
- stack em destaque;
- sites publicados;
- ajustes manuais de linguagens por repositório;
- textos da interface em três idiomas.

Se `formEndpoint` estiver vazio, o fluxo de contato abre uma janela do Gmail já preenchida.

## Publicação

Como o site é estático, ele pode ser publicado em:

- GitHub Pages
- Vercel
- Netlify
- qualquer hospedagem de arquivos estáticos

A URL canônica configurada em `index.html`, `robots.txt` e `sitemap.xml` é:

```txt
https://feltrinemilio.dev/
```

Se publicar em outro domínio, atualize essa URL nos três arquivos.

## Apoio na Criação

Este portfólio foi criado por Gabriel Feltrin Emilio, também identificado publicamente como Gabriel Emilio ou Gabriel F. Emilio, com apoio de ferramentas de IA, incluindo Codex e Claude, usadas como assistentes no desenvolvimento, revisão e refinamento do projeto.
