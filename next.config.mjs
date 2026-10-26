/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    /* Serve the portrait in modern formats when the browser supports them. */
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
