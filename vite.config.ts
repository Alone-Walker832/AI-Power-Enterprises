// vite.config.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
      // 🔥 SSR routes ko build time par pre-render karein
      prerender: {
        // Production build pe hi prerender chale (dev mein time waste na ho)
        // Bracket notation zaruri hai — tsconfig mein noPropertyAccessFromIndexSignature: true hai
        enabled: process.env["NODE_ENV"] === "production",
        // Linked pages auto-discover aur prerender honge
        crawlLinks: true,
        routes: [
          "/",
          "/services",
          "/servers",
          "/networking",
          "/cctv",
          "/about",
          "/datacenter",
          "/storage",
          "/managed-services",
          "/sla",
          "/clients",
          "/contact",
        ],
      },
    },
  },
});