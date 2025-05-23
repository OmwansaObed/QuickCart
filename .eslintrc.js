module.exports = {
  extends: "next/core-web-vitals",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Add any custom rules here
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
  },
};
