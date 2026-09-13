# Nexa Studio website

Static Next.js marketing site, ready for Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build creates a fully static site in `out/`.

## Deploy with Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare, open **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
3. Select the repository and use the **Next.js (Static HTML Export)** preset, or enter these values manually:
   - Build command: `npx next build`
   - Build output directory: `out`
4. Click **Save and Deploy**. Future pushes to `main` deploy automatically.

Cloudflare will provide a free `*.pages.dev` URL. Add a custom domain later under the project’s **Custom domains** settings.
