/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hrktxqpsqbjnockggnic.supabase.co',
      },
    ],
  },
};

export default nextConfig;
