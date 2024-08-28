import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';
import codux from './plugin';

export default defineConfig({
    plugins: [
        codux(),
        remix({
            ignoredRouteFiles: ['**/*.module.scss'],
        }),
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles/'),
        },
    },
});
