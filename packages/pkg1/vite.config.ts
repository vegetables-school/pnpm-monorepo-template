//  vite 打包 ts lib 时，需要配置 vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      name: '@vegetables-school/pkg1',
      fileName: 'index',
    },
  },
})