const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const parser = require("@typescript-eslint/parser");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: parser,
            parserOptions: {
                project: "./tsconfig.json",
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": typescriptPlugin,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "error",
            "no-console": "warn",
        },
    },
    {
        files: ["**/*.js"],
        rules: {
            "no-console": "off",
        },
    },
];
