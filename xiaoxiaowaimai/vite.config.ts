import { defineConfig } from 'vite'
import postCssPxToRem from "postcss-pxtorem";
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    postCssPxToRem({
      rootValue: 75, // （设计稿/10）1rem的大小
      propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
    }),
    Components({
    resolvers: [VantResolver()],
    }),
  ],
})
