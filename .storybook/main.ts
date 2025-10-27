import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/preset-react-webpack',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            fastRefresh: true,
        },
    },
    docs: {
        autodocs: 'tag',
    },
    // Configuração para GitHub Pages
    base: '/led-telecom-designsystem/',
    managerHead: (head) => `
        ${head}
        <meta name="viewport" content="width=device-width, initial-scale=1">
    `,
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    webpackFinal: async (config) => {
        // Adiciona o babel-loader para processar TypeScript
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];

        // Remove regras existentes de TypeScript
        config.module.rules = config.module.rules.filter(
            (rule) => !rule.test || (typeof rule.test === 'string' ? !rule.test.includes('ts') : true)
        );

        // Adiciona regra para TypeScript/TSX com babel-loader
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                },
            },
        });

        // Plugin para copiar .nojekyll para GitHub Pages
        const CopyPlugin = require('copy-webpack-plugin');
        config.plugins = config.plugins || [];
        config.plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: '.nojekyll',
                        to: '.nojekyll',
                        noErrorOnMissing: true,
                    },
                ],
            })
        );

        return config;
    },
};
export default config;
