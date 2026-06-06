/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allows CI/verification builds to use an isolated build dir so they
  // never clobber the .next folder a running `next dev` depends on.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://app.chatwoot.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
