const withPWA = require('next-pwa');

const nextConfig = {
    output: "standalone",
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development"

    })
};

module.exports = nextConfig;