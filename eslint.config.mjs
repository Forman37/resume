import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,

  // Add Prettier plugin + config
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error', // show Prettier issues as ESLint errors
    },
    extends: [prettierConfig], // disables conflicting ESLint rules
  },

  // Override default ignores of eslint-config-next.
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
