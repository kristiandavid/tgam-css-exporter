/**
 * @see https://stylelint.io/user-guide/configure
 * @type {import('stylelint').Config}
 */
export default {
    plugins: ["stylelint-scss", "stylelint-prettier", "stylelint-no-unresolved-module"],
    extends: ["stylelint-config-recommended-scss"],
    rules: {
      "prettier/prettier": true,
      "no-descending-specificity": null,
      "plugin/no-unresolved-module": {
        alias: {
          "~plyr-react": "plyr-react",
          "~@tgam/design-tokens": "@tgam/design-tokens"
        },
        modules: ["node_modules", "resources"]
      },
      "unit-no-unknown": [true, { ignoreUnits: ["dvh", "dvw", "svh"] }]
    },
    overrides: [
      {
        files: ["*.css"],
        rules: {}
      },
      {
        files: ["*.scss"],
        rules: {
          "no-duplicate-selectors": null,
          "scss/comment-no-empty": null,
          "scss/no-global-function-names": null
        },
        customSyntax: "postcss-scss"
      },
      {
        files: ["*.js", "*.jsx", "*.tsx"],
        rules: {
          "plugin/no-unresolved-module": null,
          "scss/operator-no-newline-after": null,
          "scss/operator-no-unspaced": null
        },
        customSyntax: "postcss-styled-syntax"
      }
    ]
  };
  