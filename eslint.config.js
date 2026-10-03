import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Build output, caches and deps must never be linted. Previously
  // `.vercel` was missing here, so `npm run lint` walked the entire
  // generated Nitro/Vercel output tree (thousands of generated files)
  // and appeared to hang. Keep this list in sync with .gitignore.
  {
    ignores: [
      "dist",
      ".output",
      ".vinxi",
      ".vercel",
      ".nitro",
      ".tanstack",
      ".lovable",
      "node_modules",
      "build",
      "coverage",
      "**/*.d.ts",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "TanStack Start does not use the Next.js `server-only` package. Rename the module to `*.server.ts` or mark it with `@tanstack/react-start/server-only`.",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    // Shadcn/Radix primitives intentionally export a component AND its
    // variant/config constant (e.g. buttonVariants) from the same module.
    // That is the upstream design, so the react-refresh fast-refresh rule
    // is switched off for this folder only. Dev-only rule — no effect on
    // the production build.
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  eslintPluginPrettier,
);
