/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'sara-touahri.com',
            },
          ],
          destination: 'https://www.sara-touahri.com/:path*',
          permanent: true,
        },
      ];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.externals = config.externals || {};
          config.externals['emailjs-com'] = 'emailjs-com';
        }
        return config;
      },
};

export default nextConfig;
