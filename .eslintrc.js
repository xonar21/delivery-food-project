module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended', // Использует Prettier в качестве правила
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'prettier', // Подключает Prettier как плагин
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
        singleQuote: true,
        commaDangle: 'always-multiline', // Автоматически добавлять запятые в многострочных списках
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.vue'],
    },
  ],
};
