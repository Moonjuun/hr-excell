/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERRORS,
  },
  output: "standalone",
  serverRuntimeConfig: {
    apiBaseUrl: "http://backend:4000",
  },
  publicRuntimeConfig: {
    apiBaseUrl: "http://localhost:4000",
  },
};

export default nextConfig;
