//  vite 打包 ts lib 时，需要配置 vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@vegetables-school/pkg2',
      fileName: 'index',
    },
  },
})