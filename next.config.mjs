import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
    },
};

export default nextConfig;
