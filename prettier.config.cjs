/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  useTabs: false,
  arrowParens: 'always',
  bracketSpacing: true,
  semi: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;
