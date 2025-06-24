const repo = 'fineq';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`
};

export default nextConfig;
