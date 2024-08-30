import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    copyPublicDir: false,
    minify: false,
    lib: {
      formats: ['es', 'cjs'],
      entry: [
        resolve(__dirname, 'src/component/Button'),
        resolve(__dirname, 'src/component/Card'),
        resolve(__dirname, 'src/component/Checkbox'),
        resolve(__dirname, 'src/component/Input'),
        resolve(__dirname, 'src/component/StyleProvider'),
        resolve(__dirname, 'src/component/Typography'),
      ]
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src"
      }
    }
  }
});