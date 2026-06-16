# Portfolio Gabriel

🌐 **Français** · [English](README.md) · [Português](README.ptbr.md)

Site-portfolio dark premium, dans **un seul fichier** (`index.html`). Sans build, sans dépendances obligatoires. Il s'ouvre par un double-clic.

## Comment les projets s'ouvrent
Cliquer sur une carte ouvre une fenêtre modale avec un aperçu + **« Ouvrir le site complet »** (nouvel onglet) et **« Voir le code »**. Définir `embeddable:true` ajoute l'option de charger le site à l'intérieur de la modale. L'iframe se charge à la demande et n'alourdit pas le chargement. La plupart des sites bloquent les iframes, la valeur par défaut est donc `false`.

## Langues
PT / EN / FR en haut à droite. Toute l'interface et les descriptions des projets sont disponibles dans les 3 langues à l'intérieur de `CONFIG`.

## Recevoir les messages par e-mail
Comme le site est statique, il ne doit pas stocker de mot de passe SMTP/Gmail dans le JavaScript. Utilisez un endpoint externe :

1. Créez un formulaire sur **Formspree** : https://formspree.io
2. Configurez la destination sur `gabriel.emilio.dev@gmail.com`.
3. Copiez l'URL de l'endpoint, quelque chose comme `https://formspree.io/f/abcdwxyz`.
4. Collez-la dans `CONFIG` :

```js
formEndpoint: "https://formspree.io/f/abcdwxyz",
```

Lorsque `formEndpoint` est vide, le site ouvre une fenêtre de composition Gmail déjà pré-remplie avec le message.

## Publier (gratuit)
- **GitHub Pages** : envoyez le dossier dans un dépôt → Settings → Pages → branche `main`.
- **Vercel / Netlify** : glissez le dossier sur vercel.com/new ou app.netlify.com/drop.

## SEO / métadonnées
`index.html`, `robots.txt` et `sitemap.xml` utilisent comme URL canonique :

```txt
https://feltrinemilio.dev/
```

Si vous publiez sur un autre domaine, mettez à jour cette URL dans les métadonnées du `<head>`, dans `robots.txt` et dans `sitemap.xml`.

## Soutien à la création
Ce site a été créé par Gabriel Emilio avec le soutien d'outils d'IA, notamment Codex et Claude, utilisés comme assistants pour le développement, la révision et l'affinement du projet.

## Notes techniques
Animations natives (Canvas + IntersectionObserver + rAF), sans CDN obligatoire, donc le site fonctionne hors ligne et en l'ouvrant directement depuis le fichier. Il respecte `prefers-reduced-motion`. Les anciens fichiers dans `assets/css` et `assets/js` ne sont plus utilisés (tout se trouve dans `index.html`) et peuvent être supprimés.
