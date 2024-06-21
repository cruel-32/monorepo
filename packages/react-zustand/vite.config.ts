import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../vite.config.base';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ command, mode }) => {
  // baseConfig를 기본으로 사용하면서 확장
  const customConfig = {
    base: '/',
    resolve: {
      preserveSymlinks: true,
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
  };

  return mergeConfig(baseConfig, customConfig);
});
