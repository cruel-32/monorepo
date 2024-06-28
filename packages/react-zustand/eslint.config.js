import react from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import tsParser from '@typescript-eslint/parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    ignores: ['**/dist/', '**/node_modules/'],
  },
  {
    plugins: {
      react,
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      'no-relative-import-paths': noRelativeImportPaths,
      'typescript-eslint': tseslint.plugin,
    },
  },
  {
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // <img> 엘리먼트에 유의미한 대체 텍스트가 있는지 체크
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
        },
      ], // 유효한 aria-* 속성만 사용
      'jsx-a11y/aria-props': 'warn', // 유효한 aria-* 상태/값만 사용
      'jsx-a11y/aria-proptypes': 'warn', // DOM에서 지원되는 role, ARIA만 사용
      'jsx-a11y/aria-unsupported-elements': 'warn', // 필수 ARIA 속성이 빠져있는지 체크
      'jsx-a11y/role-has-required-aria-props': 'warn', // ARIA 속성은 지원되는 role에서만 사용
      'jsx-a11y/role-supports-aria-props': 'warn', // DOM에 정의되지 않은 속성을 사용했는지 체크 (emotion css 속성 등 예외 케이스가 있으므로 기본은 off)
      'react/no-unknown-property': 'off', // 정의한 props 중에 빠진게 있는지 체크 (NextPage 등 일부 추상화 컴포넌트에서 복잡해지므로 기본은 off)
      'react/prop-types': 'off',
    },
  },
  eslintPluginPrettierRecommended,
  // Add your custom rules here
];
