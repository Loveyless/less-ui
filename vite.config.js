import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 库打包模式 https://cn.vitejs.dev/guide/build.html#library-mode
const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: ['vue', 'vue-router'],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    globals: {
      vue: 'Vue',
    },
  },
}

export default {
  // 配置选项
  plugins: [
    vue(),
    vueJsx(),
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'LessUI',
      fileName: 'less-ui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife'],
    },
  },
}
