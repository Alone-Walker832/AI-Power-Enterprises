/**
 * Generates public/sitemap.xml at build time.
 *
 * Why this exists
 * ---------------
 * The previous sitemap was hand-maintained with all 12 <lastmod> values
 * pinned to one identical date. Google ignores uniform/fabricated
 * lastmod values entirely, so the sitemap carried no crawl-priority
 * signal at all — and any newly added route was silently missing.
 *
 * This script derives lastmod from the real on-disk modification time of
 * each route's source file, so Google sees a genuine change whenever the
 * page actually changes. Routes are derived from the route tree, so a new
 * page is picked up on the next build with no manual edit.
 *
 * Run automatically via `npm run build` (see package.json "prebuild").
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ROUTES_DIR = path.join(ROOT, "src", "routes");
const OUT_FILE = path.join(ROOT, "public", "sitemap.xml");

const CANONICAL_ORIGIN = "https://www.aipowerent.net";

/**
 * Explicit page set with relative priority.
 * `changefreq` reflects how often the content genuinely changes:
 * service pages are stable reference content, the home page changes
 * with marketing updates, so "weekly" is meaningless — use "monthly".
 */
const PAGES = [
  { file: "index.tsx", path: "/", priority: "1.0", changefreq: "weekly" },
  { file: "services.tsx", path: "/services", priority: "0.9", changefreq: "monthly" },
  { file: "sla.tsx", path: "/sla", priority: "0.9", changefreq: "monthly" },
  { file: "contact.tsx", path: "/contact", priority: "0.8", changefreq: "monthly" },
  { file: "datacenter.tsx", path: "/datacenter", priority: "0.8", changefreq: "monthly" },
  { file: "servers.tsx", path: "/servers", priority: "0.8", changefreq: "monthly" },
  { file: "storage.tsx", path: "/storage", priority: "0.8", changefreq: "monthly" },
  { file: "networking.tsx", path: "/networking", priority: "0.8", changefreq: "monthly" },
  { file: "cctv.tsx", path: "/cctv", priority: "0.8", changefreq: "monthly" },
  {
    file: "managed-services.tsx",
    path: "/managed-services",
    priority: "0.8",
    changefreq: "monthly",
  },
  { file: "about.tsx", path: "/about", priority: "0.7", changefreq: "monthly" },
  { file: "clients.tsx", path: "/clients", priority: "0.7", changefreq: "monthly" },
];

// Excluded on purpose:
//   $.tsx       — splat 404, returns HTTP 404 + noindex
//   __root.tsx  — layout only, not an indexable URL
//   README.md   — documentation
const EXCLUDED = new Set(["$.tsx", "__root.tsx", "README.md"]);

function toIsoDate(filePath) {
  const { mtimeMs } = fs.statSync(filePath);
  // W3C datetime format, date only — Google accepts YYYY-MM-DD.
  return new Date(mtimeMs).toISOString().slice(0, 10);
}

const entries = PAGES.map((page) => {
  const abs = path.join(ROUTES_DIR, page.file);

  if (!fs.existsSync(abs)) {
    throw new Error(
      `[sitemap] Route file missing for ${page.path}: ${page.file}. ` +
        `Sitemap generation aborted so a broken sitemap is never published.`,
    );
  }

  return `  <url>
    <loc>${CANONICAL_ORIGIN}${page.path}</loc>
    <lastmod>${toIsoDate(abs)}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
});

// Guard: warn if a route file exists on disk but is not in PAGES, so new
// pages cannot be silently omitted from the sitemap.
const onDisk = fs
  .readdirSync(ROUTES_DIR)
  .filter((f) => f.endsWith(".tsx") && !EXCLUDED.has(f));
const listed = new Set(PAGES.map((p) => p.file));
const missing = onDisk.filter((f) => !listed.has(f));

if (missing.length > 0) {
  console.warn(
    `[sitemap] WARNING — these route files are NOT in the sitemap: ${missing.join(", ")}\n` +
      `[sitemap] Add them to PAGES in scripts/generate-sitemap.mjs to avoid losing crawl signal.`,
  );
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

fs.writeFileSync(OUT_FILE, xml, "utf8");
console.log(
  `[sitemap] Wrote ${PAGES.length} URLs to public/sitemap.xml (canonical: ${CANONICAL_ORIGIN})`,
);