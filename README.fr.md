# Portfolio Gabriel Emilio

[Português](README.ptbr.md) | [English](README.md) | **Français**

Portfolio professionnel d'ingénierie logicielle créé pour présenter Gabriel Emilio, ses projets, sa base technique, ses sites publiés et son activité GitHub publique au même endroit.

L'objectif est simple : permettre à un responsable technique, recruteur ou client de comprendre rapidement ce que je construis, quelles technologies j'utilise et comment lancer le projet localement, sans devoir lire les fichiers JavaScript pour deviner le fonctionnement du site.

## Objectif du Site

Ce site fonctionne comme un profil technique vivant. Il rassemble les projets, les dépôts publics, les sites publiés, les canaux de contact et une section visuelle appelée "Code Sphere", qui transforme les données de langages GitHub en constellation interactive.

Le portfolio est conçu pour communiquer :

- qui est Gabriel Emilio en tant qu'étudiant en génie informatique et développeur en formation ;
- quelles technologies font partie de la stack actuelle ;
- quels projets sont publiés ou disponibles sur GitHub ;
- comment l'interface, les langues et les intégrations techniques ont été mises en place.

## Fonctionnalités Principales

- Portfolio responsive en page unique, disponible en portugais, anglais et français.
- Cartes de projets alimentées par les dépôts publics GitHub.
- Section de sites publiés pour les projets personnels, livraisons et travaux en production.
- "Code Sphere" avec statistiques de dépôts, dépôts récents et constellation de langages.
- Formulaire de contact intégré à Formspree, avec fallback vers Gmail.
- SEO avec métadonnées, Open Graph, données structurées, `robots.txt` et `sitemap.xml`.
- Animations et interactions respectant `prefers-reduced-motion`.

## Technologies

### Stack technique présentée dans le portfolio

- C
- Java
- JavaScript (JS)

### Technologies utilisées pour construire le site

- HTML5
- CSS3
- JavaScript
- Canvas API
- GitHub REST API
- Formspree
- Google Fonts
- GSAP via CDNJS

Le projet ne nécessite ni build ni installation de packages. L'application principale se trouve dans `index.html`, avec les images et fichiers de support dans `assets/`.

## Comment Lancer Localement

1. Clonez ou téléchargez ce dépôt.
2. Ouvrez un terminal dans le dossier du projet.
3. Lancez un serveur statique local :

```bash
python -m http.server 5500
```

4. Ouvrez le site dans le navigateur :

```txt
http://localhost:5500
```

Il est aussi possible d'ouvrir `index.html` directement dans le navigateur, mais le serveur local est recommandé parce que les API externes, les polices et le comportement du navigateur seront plus proches de la production.

Aucune dépendance n'est à installer :

```bash
# rien à installer
```

## Structure du Projet

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

La plupart des données modifiables du portfolio se trouvent dans l'objet `CONFIG`, dans `index.html` :

- utilisateur GitHub ;
- e-mail de contact et endpoint Formspree ;
- stack mise en avant ;
- sites publiés ;
- ajustements manuels de langages par dépôt ;
- textes de l'interface en trois langues.

Si `formEndpoint` est vide, le flux de contact ouvre une fenêtre Gmail déjà préremplie.

## Publication

Comme le site est statique, il peut être publié sur :

- GitHub Pages
- Vercel
- Netlify
- tout service d'hébergement statique

L'URL canonique configurée dans `index.html`, `robots.txt` et `sitemap.xml` est :

```txt
https://feltrinemilio.dev/
```

Si vous publiez le projet sous un autre domaine, mettez à jour cette URL dans les trois fichiers.

## Soutien à la Création

Ce portfolio a été créé par Gabriel Emilio avec le soutien d'outils d'IA, notamment Codex et Claude, utilisés comme assistants pour le développement, la révision et l'amélioration du projet.
