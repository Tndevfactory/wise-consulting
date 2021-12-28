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
            value: 'https://tndev-art.tn | tndev8@gmail.com',
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
