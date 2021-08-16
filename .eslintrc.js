module.exports = {
  env: {
    node: true,
    es6: true,
    es2021: true,
  },
  ignorePatterns: ["node_modules"],
  plugins: ["typescript"],
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
