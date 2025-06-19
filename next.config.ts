import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
 
const withMDX = createMDX({
  // Add plugins here, if any.
});
 
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  typescript: {
    ignoreBuildErrors: true,
  },
};
 
export default withMDX(nextConfig);
