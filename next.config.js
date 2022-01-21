/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    // typescript: {
    //     // !! WARN !!
    //     // Dangerously allow production builds to successfully complete even if
    //     // your project has type errors.
    //     // !! WARN !!
    //     ignoreBuildErrors: true,
    // },
    images: {
        domains: ['images.ctfassets.net'],
        // deviceSizes: [640, 768, 1024, 1280, 1536],
        // imageSizes: [658, 1400],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 658, 1400],
    },
};
