module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", "eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "i18next"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "i18next/no-literal-string": [
      "warn",
      { markupOnly: true, ignoreAttribute: ["data-testid"] },
    ],
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{.ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
