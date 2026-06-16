# Portfolio Gabriel

🌐 **English** · [Português](README.ptbr.md) · [Français](README.fr.md)

A premium dark portfolio site in **a single file** (`index.html`). No build step, no required dependencies. Just double-click to open.

## How projects open
Clicking a card opens a modal with a preview + **"Open full site"** (new tab) and **"View code"**. Setting `embeddable:true` adds the option to load the site inside the modal. The iframe loads on demand and doesn't slow down the initial load. Most sites block iframes, so the default is `false`.

## Languages
PT / EN / FR in the top right. The entire interface and the project descriptions are available in all 3 languages inside `CONFIG`.

## Receiving messages by email
Because the site is static, it should not store an SMTP/Gmail password in JavaScript. Use an external endpoint:

1. Create a form on **Formspree**: https://formspree.io
2. Set the destination to `gabriel.emilio.dev@gmail.com`.
3. Copy the endpoint URL, something like `https://formspree.io/f/abcdwxyz`.
4. Paste it into `CONFIG`:

```js
formEndpoint: "https://formspree.io/f/abcdwxyz",
```

When `formEndpoint` is empty, the site opens a Gmail compose window already filled in with the message.

## Publish (free)
- **GitHub Pages**: push the folder to a repo → Settings → Pages → branch `main`.
- **Vercel / Netlify**: drag the folder onto vercel.com/new or app.netlify.com/drop.

## SEO / metadata
`index.html`, `robots.txt`, and `sitemap.xml` use this canonical URL:

```txt
https://feltrinemilio.dev/
```

If you publish to a different domain, update this URL in the `<head>` metadata, in `robots.txt`, and in `sitemap.xml`.

## Creation support
This site was created by Gabriel Emilio with the support of AI tools, including Codex and Claude, used as assistants in the development, review, and refinement of the project.

## Technical notes
Native animations (Canvas + IntersectionObserver + rAF), no required CDN, so it works offline and when opened directly from the file. It respects `prefers-reduced-motion`. The old files in `assets/css` and `assets/js` are no longer used (everything is inside `index.html`) and can be deleted.
