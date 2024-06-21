module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'CustomGrid'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'react-hooks',
    '@tanstack/eslint-plugin-query'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // <img> 엘리먼트에 유의미한 대체 텍스트가 있는지 체크
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
      },
    ],
    // 유효한 aria-* 속성만 사용
    "jsx-a11y/aria-props": "warn",
    // 유효한 aria-* 상태/값만 사용
    "jsx-a11y/aria-proptypes": "warn",
    // DOM에서 지원되는 role, ARIA만 사용
    "jsx-a11y/aria-unsupported-elements": "warn",
    // 필수 ARIA 속성이 빠져있는지 체크
    "jsx-a11y/role-has-required-aria-props": "warn",
    // ARIA 속성은 지원되는 role에서만 사용
    "jsx-a11y/role-supports-aria-props": "warn",
    // DOM에 정의되지 않은 속성을 사용했는지 체크 (emotion css 속성 등 예외 케이스가 있으므로 기본은 off)
    "react/no-unknown-property": "off",
    // 정의한 props 중에 빠진게 있는지 체크 (NextPage 등 일부 추상화 컴포넌트에서 복잡해지므로 기본은 off)
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "@rushstack/typedef-var": "off",
    "react/react-in-jsx-scope": "off",
    "@rushstack/no-new-null": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
      typescript: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      }
    },
    "react": {
      version: "18.2",
    },
  },
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
}
