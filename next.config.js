/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// Enable bindings access during `next dev`
const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
initOpenNextCloudflareForDev();
