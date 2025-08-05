import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  // TODO: update this after fix https://github.com/eslint/eslint/issues/19570
  // @ts-expect-error eslint-disable-next-line @typescript-eslint/ban-ts-comment
  tseslint.configs.recommended,
  prettier,
]);
