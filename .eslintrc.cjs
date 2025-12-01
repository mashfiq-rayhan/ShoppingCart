// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime", // Important for React 19 (no import React)
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: "detect" }, // Detects React 19 automatically
  },
  rules: {
    "react/jsx-no-undef": "error",
    "no-undef": "error",
    "no-unused-vars": "warn",
    "react/prop-types": "off", // You're not using PropTypes
  },
};