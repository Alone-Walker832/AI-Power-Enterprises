// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => ({
  plugins: [
    // Path aliases (@/* → src/*)
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),

    // Tailwind v4
    tailwindcss(),

    // TanStack Start — SSR
    tanstackStart({
      // ───────────────────────────────────────────────────────────
      // PAGES ARE DECLARED EXPLICITLY — DO NOT RELY ON DISCOVERY
      // ───────────────────────────────────────────────────────────
      // TanStack can auto-discover routes from `globalThis.TSS_PRERENDABLE_PATHS`
      // or by crawling rendered links. In practice that discovery has been
      // unreliable here: builds intermittently completed with exit code 0
      // while writing ZERO prerendered HTML, leaving routes to be served
      // only by the serverless function — which is how /services ended up
      // being served as a 0-byte file.
      //
      // Listing every route removes the guessing. crawlLinks stays on so any
      // page added later is still picked up automatically.
      //
      // If you add a route, add it here too (and to
      // scripts/generate-sitemap.mjs, which warns if one is missed).
      pages: [
        { path: "/" },
        { path: "/services" },
        { path: "/datacenter" },
        { path: "/servers" },
        { path: "/storage" },
        { path: "/networking" },
        { path: "/cctv" },
        { path: "/managed-services" },
        { path: "/sla" },
        { path: "/about" },
        { path: "/clients" },
        { path: "/contact" },
      ],
      prerender: {
        // Constant `true`, never a computed condition: this hook only runs
        // after a build, never during `vite dev`.
        enabled: true,
        crawlLinks: true,
        // Retry a route a couple of times before failing the build, so a
        // transient error can never leave a truncated/empty file behind.
        retryCount: 2,
        retryDelay: 500,
      },
    }),

    // Vercel deployment
    nitro({
      preset: "vercel",
    }),

    // React
    viteReact(),
  ],
}));
