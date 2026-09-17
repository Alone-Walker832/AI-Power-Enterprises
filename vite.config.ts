// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // Path aliases (@/* → src/*)
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),

    // Tailwind v4
    tailwindcss(),

    // TanStack Start — SSR
    tanstackStart({
      prerender: {
        enabled: process.env["NODE_ENV"] === "production",
        crawlLinks: true,
      },
    }),

    // 🔥 YE ADD KARO — Vercel deployment ke liye
    nitro({
      preset: "vercel",
    }),

    // React
    viteReact(),
  ],
});