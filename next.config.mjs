/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: process.env.NODE_ENV === 'development' 
          ? ['localhost:3000'] 
          : ['lift-landing-page.vercel.app', 'liftlabs.dev']
        }
    }
};

export default nextConfig;
