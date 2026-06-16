# Portfolio Gabriel

🌐 **Português** · [English](README.md) · [Français](README.fr.md)

Site-portfólio dark premium, em **um único arquivo** (`index.html`). Sem build, sem dependências obrigatórias. Abre dando duplo clique.

## Como os projetos abrem
Clicar num card abre um modal com preview + **"Abrir site completo"** (nova aba) e **"Ver código"**. Marcar `embeddable:true` adiciona a opção de carregar o site dentro do modal. O iframe entra sob demanda e não pesa o carregamento. A maioria dos sites bloqueia iframe, então o padrão é `false`.

## Idiomas
PT / EN / FR no topo direito. Toda a interface e as descrições dos projetos têm os 3 idiomas dentro do `CONFIG`.

## Receber mensagens no e-mail
Como o site é estático, ele não deve guardar senha SMTP/Gmail no JavaScript. Use um endpoint externo:

1. Crie um formulário em **Formspree**: https://formspree.io
2. Configure o destino como `gabriel.emilio.dev@gmail.com`.
3. Copie a URL do endpoint, algo como `https://formspree.io/f/abcdwxyz`.
4. Cole no `CONFIG`:

```js
formEndpoint: "https://formspree.io/f/abcdwxyz",
```

Com `formEndpoint` vazio, o site abre uma janela de composicao do Gmail ja preenchida com a mensagem.

## Publicar (grátis)
- **GitHub Pages**: suba a pasta num repo → Settings → Pages → branch `main`.
- **Vercel / Netlify**: arraste a pasta em vercel.com/new ou app.netlify.com/drop.

## SEO / metadados
O `index.html`, o `robots.txt` e o `sitemap.xml` usam como URL canonica:

```txt
https://feltrinemilio.dev/
```

Se publicar em outro dominio, atualize essa URL nos metadados do `<head>`, no `robots.txt` e no `sitemap.xml`.

## Apoio na criação
Este site foi criado por Gabriel Emilio com apoio de ferramentas de IA, incluindo Codex e Claude, usadas como auxiliares no desenvolvimento, revisão e refinamento do projeto.

## Notas técnicas
Animações nativas (Canvas + IntersectionObserver + rAF), sem CDN obrigatório, então funciona offline e abrindo direto do arquivo. Respeita `prefers-reduced-motion`. Os arquivos antigos em `assets/css` e `assets/js` não são mais usados (tudo está dentro do `index.html`) e podem ser apagados.
