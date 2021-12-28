/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  fallback: false,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Powered-By',
            value: 'Something',
          },
          {
            key: 'server',
            value: 'Something',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
