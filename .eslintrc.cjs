// .eslintrc.js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // ou "babel-eslint" se não usar TS
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "import", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+
    "react/prop-types": "off", // se usar TS
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always",
      },
    ],
  },
};

