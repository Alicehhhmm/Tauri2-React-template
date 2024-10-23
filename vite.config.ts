import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

const projectRoot = path.resolve(__dirname, '');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.join(projectRoot, 'src')
        }
    },
    server: {
        host: 'localhost',
        port: 8297,
    }
})
