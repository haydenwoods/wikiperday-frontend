module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
        delimiter: "comma",
        requireLast: false,
      },
      singleline: {
        delimiter: "comma",
        requireLast: false,
      },
    }],
    "@typescript-eslint/no-inferrable-types": 0,
  }
}
