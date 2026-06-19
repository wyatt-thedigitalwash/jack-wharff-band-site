import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://widget.bandsintown.com https://widgetv3.bandsintown.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https://res.cloudinary.com",
              "frame-src https://www.youtube-nocookie.com https://www.youtube.com",
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://widget.bandsintown.com https://widgetv3.bandsintown.com https://rest.bandsintown.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // /tours -> /tour (old nav used "tours", new site uses "tour")
      { source: '/tours', destination: '/tour', permanent: true },
      { source: '/tours/', destination: '/tour', permanent: true },

      // WordPress trailing slash canonicals -> clean new URLs
      { source: '/music/', destination: '/music', permanent: true },
      { source: '/tour/', destination: '/tour', permanent: true },
      { source: '/videos/', destination: '/videos', permanent: true },
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },

      // WordPress admin/system paths -> home
      { source: '/wp-admin', destination: '/', permanent: true },
      { source: '/wp-admin/', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
