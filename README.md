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

## Deploy with Cloudflare

1. Push this project to a GitHub repository.
2. In Cloudflare, open **Workers & Pages** → **Create application** → **Workers** → **Import a repository**.
3. Use these build settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. Click **Save and Deploy**. Future pushes to `main` deploy automatically.

`wrangler.jsonc` explicitly deploys the static `out/` directory. This prevents Cloudflare from attempting to configure the project as a server-rendered Next.js Worker. Cloudflare will provide a free `*.workers.dev` URL; add a custom domain later under the project’s **Custom domains** settings.
