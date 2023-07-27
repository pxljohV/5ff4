/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    API_ID: process.env.API_ID,
    AUTO_DOMAIN: process.env.AUTO_DOMAIN,
    DB_URL: process.env.DB_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID
  },
  rules: {
    "@next/next/no-img-element": "off",
   },
    images: {
      unoptimized: true,
      domains:["www.udrop.com"],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'udrop.com',
          port: '',
          pathname: '',
        },
      ],
    },
}

module.exports = nextConfig
