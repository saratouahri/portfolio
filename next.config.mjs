/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.externals = config.externals || {};
          config.externals['emailjs-com'] = 'emailjs-com';
        }
        return config;
      },
};

export default nextConfig;
