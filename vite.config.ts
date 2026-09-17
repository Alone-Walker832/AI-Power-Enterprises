// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Path aliases (@/* → src/*) from tsconfig.json
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),

    // TanStack Start — SSR + prerender
    tanstackStart({
      prerender: {
        // Production build pe hi prerender chale
        enabled: process.env["NODE_ENV"] === "production",
        // Linked pages auto-discover aur prerender honge
        crawlLinks: true,
      },
    }),

    // React
    viteReact(),
  ],
});