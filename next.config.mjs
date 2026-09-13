/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages serves the static files generated into /out.
  output: 'export',
  images: { unoptimized: true }
};

export default nextConfig;
