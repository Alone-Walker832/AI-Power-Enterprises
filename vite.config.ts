// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => {
  // Make NODE_ENV deterministic for `vite build`.
  //
  // TanStack Start gates prerendering on NODE_ENV internally, so if the
  // variable is absent the build still completes "successfully" but writes
  // ZERO prerendered pages — leaving the routes to be served only by the
  // serverless function. Setting it here (rather than relying on the ambient
  // shell/CI environment) guarantees `vite build` always produces static HTML
  // for every route, on any machine, locally or on Vercel.
  if (command === "build") {
    process.env["NODE_ENV"] = "production";
  }

  return {
    plugins: [
      // Path aliases (@/* → src/*)
      viteTsConfigPaths({ projects: ["./tsconfig.json"] }),

      // Tailwind v4
      tailwindcss(),

      // TanStack Start — SSR
      tanstackStart({
        prerender: {
          // Explicitly enabled on every production build rather than being
          // inferred from an environment variable that may not be set.
          enabled: command === "build",
          crawlLinks: true,
        },
      }),

      // Vercel deployment
      nitro({
        preset: "vercel",
      }),

      // React
      viteReact(),
    ],
  };
});
