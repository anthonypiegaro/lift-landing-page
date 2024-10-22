import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    experimental: {
        serverActions: {
          allowedOrigins: process.env.NODE_ENV === 'development' 
          ? ['localhost:3000'] 
          : ['lift-landing-page.vercel.app', 'liftlabs.dev']
        }
    }
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig);
