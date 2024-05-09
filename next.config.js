/** @type {import('next').NextConfig} */

const Headers = async () => {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Cache-Control',
          value: 's-maxage=1; max-age=no-cache',
        },
        {
          key: 'X-Frame-Options',
          value: 'ALLOWALL',
        },
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
        {
          key: 'Set-Cookie',
          value: '_ga_8NCQYHBTWR=HTTPOnly; _ga=HTTPOnly; _ga_8NCQYHBTWR=secure; _ga=secure',
        },
      ],
    },
  ];
};

const nextConfig = {
  reactStrictMode: true,
  headers: async () => {
    return Headers();
  },
};

module.exports = nextConfig;
