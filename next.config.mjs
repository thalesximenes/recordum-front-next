import customCache from './public/customCache.mjs';
import withPWA from 'next-pwa';

const scope = "/recordum";
const configWithPWA = withPWA({
    dest: 'public',
    fallbacks: {
        document: `${scope}/500`,
    },
    runtimeCaching: customCache,
});


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    basePath: scope,
    images: {
        domains: ["127.0.0.1"],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{
                loader: '@svgr/webpack',
                options: {
                    svgo: true,
                    svgoConfig: {
                        plugins: [{
                                name: 'preset-default',
                                params: {
                                    overrides: {
                                        removeViewBox: false,
                                    },
                                },
                            },
                            'removeDimensions',
                        ],
                    },
                },
            }, ],
        });

        return config;
    },
};

const pwaNextConfig = () => {
    const plugins = [configWithPWA];
    return plugins.reduce((acc, next) => next(acc), nextConfig);
};

export default pwaNextConfig;