import { fileURLToPath } from 'node:url';

const nextConfig = {
  agentRules: false,
  turbopack: { root: fileURLToPath(new URL('.', import.meta.url)) },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/case-studies.html', destination: '/case-studies', permanent: true },
    ];
  },
};

export default nextConfig;
