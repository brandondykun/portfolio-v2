/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.BASE_URL,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
