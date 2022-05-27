/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'withlocals-com-res.cloudinary.com'],
  },
}

module.exports = nextConfig
