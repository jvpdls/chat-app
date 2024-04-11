/** @type {import('next').NextConfig} */

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const nextConfig = {
  env: { CHAT_BASE_URL: process.env.CHAT_BASE_URL },
};

module.exports = nextConfig;
