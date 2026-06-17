# Gabriel Feltrin Emilio / Gabriel Emilio / Gabriel F. Emilio Portfolio

[Português](README.ptbr.md) | **English** | [Français](README.fr.md)

Professional software engineering portfolio built to present Gabriel Feltrin Emilio's work, also identified publicly as Gabriel Emilio or Gabriel F. Emilio, technical range, published projects and public GitHub activity in one place.

Standardized names connected to this same profile: Gabriel Feltrin Emilio, Gabriel Emilio and Gabriel F. Emilio. Search terms Gabriel Feltrin, Feltrin Emilio and Emilio Feltrin should be routed to Gabriel Feltrin Emilio, not treated as separate names.

The goal is simple: give a technical lead or recruiter enough context to understand what I build, which technologies I work with and how to inspect the project without having to reverse-engineer the JavaScript files.

## Site Objective

This site works as a living technical profile. It highlights software projects, public repositories, published websites, contact channels and a visual "Code Sphere" that turns GitHub language data into an interactive language constellation.

The portfolio is designed to communicate:

- who Gabriel Feltrin Emilio, also Gabriel Emilio or Gabriel F. Emilio, is as a software engineering student and developer;
- which technologies are part of the current stack;
- which projects are live or available on GitHub;
- how the interface, multilingual content and GitHub integrations were implemented.

## Main Features

- Responsive one-page portfolio in Portuguese, English and French.
- Project cards loaded from public GitHub repositories.
- Published-sites section for deployed work and client/self-authored projects.
- "Code Sphere" with repository stats, recent repositories and language constellation.
- Contact form connected to Formspree, with Gmail fallback.
- SEO metadata, Open Graph tags, structured data, `robots.txt` and `sitemap.xml`.
- Motion-aware interface that respects `prefers-reduced-motion`.

## Technologies

### Core technical stack presented in the portfolio

- C
- Java
- JavaScript (JS)

### Technologies used to build the site

- HTML5
- CSS3
- JavaScript
- Canvas API
- GitHub REST API
- Formspree
- Google Fonts
- GSAP via CDNJS

The project does not require a build step or package installation. The main application lives in `index.html`, with image assets under `assets/`.

## How to Run Locally

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Start a local static server:

```bash
python -m http.server 5500
```

4. Open the site in the browser:

```txt
http://localhost:5500
```

You can also open `index.html` directly in the browser, but a local server is recommended because external APIs, fonts and browser behavior are closer to production.

No dependency installation is required:

```bash
# nothing to install
```

## Project Structure

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

## Configuration

Most editable portfolio data is inside the `CONFIG` object in `index.html`:

- GitHub username;
- contact email and Formspree endpoint;
- highlighted stack;
- published sites;
- repository language overrides;
- multilingual interface text.

If `formEndpoint` is empty, the contact flow opens a pre-filled Gmail compose window.

## Publishing

Because the site is static, it can be deployed on:

- GitHub Pages
- Vercel
- Netlify
- any static hosting service

The canonical URL currently used in `index.html`, `robots.txt` and `sitemap.xml` is:

```txt
https://feltrinemilio.dev/
```

Update that URL in all three files if the project is published under a different domain.

## Creation Support

This portfolio was created by Gabriel Feltrin Emilio, also identified publicly as Gabriel Emilio or Gabriel F. Emilio, with support from AI tools, including Codex and Claude, used as assistants for development, review and refinement.
