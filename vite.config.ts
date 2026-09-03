// vite.config.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
      // 🔥 SSR routes ko build time par pre‑render karein
      prerender: {
        routes: [
          "/",
          "/services",
          "/servers",
          "/networking",
          "/cctv",
          "/managed-services",
          "/sla",
          "/clients",
          "/contact",
        ],
      },
    },
  },
});