import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["check-file"],
    rules: {
      // avoid errors
      "for-direction": 2,
      "no-async-promise-executor": 2,
      "no-cond-assign": [1, "except-parens"],
      "no-dupe-else-if": 2,
      "no-dupe-keys": 2,
      "no-duplicate-case": 2,
      "no-duplicate-imports": [1, { includeExports: true }],
      "no-fallthrough": [1, { commentPattern: "break[\\s\\w]*omitted", reportUnusedFallthroughComment: true }],
      "no-invalid-regexp": 2,
      "no-irregular-whitespace": [1, { skipComments: true, skipJSXText: true, skipStrings: true, skipTemplates: true }],
      "no-promise-executor-return": 2,
      "no-self-assign": [2, { props: true }],
      "no-self-compare": 2,
      "no-sparse-arrays": 2,
      "no-unexpected-multiline": 1,
      "no-unmodified-loop-condition": 2,
      "no-unreachable": 2,
      "no-unsafe-finally": 2,
      "no-unsafe-negation": 2,
      "no-unused-vars": [1, { argsIgnorePattern: "^_" }],
      "valid-typeof": [2, { requireStringLiterals: true }],

      // suggestions
      camelcase: 1,
      curly: [1, "multi-or-nest", "consistent"],
      "default-case": [1, { commentPattern: "^skip\\sdefault" }],
      "default-case-last": 1,
      "dot-notation": 1,
      "no-empty": [1, { allowEmptyCatch: true }],
      "no-empty-function": 1,
      "no-eq-null": 2,
      "no-extra-boolean-cast": 2,
      "no-extra-label": 2,
      "no-lonely-if": 1,
      "no-redeclare": 1,
      "no-return-assign": 2,
      "no-shadow": 1,
      "no-throw-literal": 2,
      "no-unneeded-ternary": 1,
      "no-useless-catch": 2,
      "no-useless-computed-key": 1,
      "no-useless-concat": 1,
      "no-var": 2,
      "object-shorthand": 1,
      "sort-imports": [1, { allowSeparatedGroups: true }],
      "sort-keys": [1, "asc", { allowLineSeparatedGroups: true }],
      yoda: 1,

      // check-file
      "check-file/filename-naming-convention": [
        2,
        {
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      "check-file/folder-naming-convention": [
        2,
        {
          "./**/!^[.*": "KEBAB_CASE",
        },
      ],
    },
  }),
];

export default eslintConfig;
