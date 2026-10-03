import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/HomePage";

import {
  company,
  siteConfig,
  services,
} from "@/data/companyData";

// ─── Hero image preloading ─────────────────────────────────────
// Only the LCP image gets a preload hint. The other two marquee tiles
// sit far below the fold and were previously preloaded at low priority,
// which still cost ~107 KB of bandwidth before first paint.
import heroDatacenter from "../assets/hero-datacenter.jpg?url";

// ═══════════════════════════════════════════════════════════════════
// PAGE-LEVEL SEO CONSTANTS
// ═══════════════════════════════════════════════════════════════════
const PAGE_PATH = "/";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE = "Enterprise IT Services in Pakistan | AI Power Enterprises";
const PAGE_DESCRIPTION =
  "Enterprise IT infrastructure, servers, storage, networking, IP CCTV and 24/7 SLA support across Pakistan. 8 hubs, 30-minute response.";
const PAGE_KEYWORDS = [
  "IT services Pakistan",
  "enterprise IT Karachi",
  "IT infrastructure Pakistan",
  "data centre solutions Pakistan",
  "server support Karachi",
  "storage solutions Pakistan",
  "networking solutions Pakistan",
  "CCTV solutions Pakistan",
  "managed IT services Pakistan",
  "24/7 IT support Karachi",
  "SLA support Pakistan",
  "systems integration Pakistan",
];

// ═══════════════════════════════════════════════════════════════════
// HOMEPAGE JSON-LD
//
// ⚠️ The Organization / WebSite / ProfessionalService(+OfferCatalog)
// graph is ALREADY emitted site-wide by src/routes/__root.tsx and is
// built from src/data/companyData.ts. Emitting a second, hand-written
// copy here previously produced CONFLICTING schema on `/` — two
// Organizations, two phone numbers, two addresses, two founding years.
// Google treats that as untrustworthy data.
//
// So this page only adds nodes that do NOT exist in the root graph:
//   • WebPage  — the homepage itself
//   • ItemList — the service catalogue, so the homepage can rank for
//                 service queries directly instead of only via /services
// Both reference the root graph's `#organization` via @id.
// ═══════════════════════════════════════════════════════════════════

// ─── WebSite node, re-exported so the WebPage node can link to it ──
// `stripContext` expects a schema.org object; this one is constructed
// inline rather than via `websiteSchema` because we only need the subset
// of fields referenced by the homepage graph.
const websiteNode = {
  "@type": "WebSite" as const,
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: company.name,
  description: siteConfig.defaultDescription,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-PK",
};

const homeWebPageNode = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: "en-PK",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${siteConfig.url}${siteConfig.ogImage}`,
    width: 1200,
    height: 630,
  },
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
};

// ─── Service catalogue as a ranked ItemList ──────────────────────
const serviceItemListNode = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${PAGE_URL}#services`,
  name: "Enterprise IT Services — AI Power Enterprises",
  description: PAGE_DESCRIPTION,
  numberOfItems: services.length,
  itemListOrderType:
    "https://schema.org/ItemListUnordered" as const,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    description: service.summary,
    url: `${siteConfig.url}${service.path}`,
  })),
};

// ─── Homepage breadcrumb is just "Home" (single level) ───────────
// A breadcrumb on the homepage that lists child pages misrepresents
// the hierarchy, so only the self entry is emitted.
const homeBreadcrumbNode = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: PAGE_URL,
    },
  ],
};

const HOME_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    websiteNode,
    homeWebPageNode,
    serviceItemListNode,
    homeBreadcrumbNode,
  ],
};

// ─── Google Analytics 4 ─────────────────────────────────────────
// TODO_REPLACE: GA4 Measurement ID. No GA4 property exists yet, so
// the tag is gated behind an env var and renders NOTHING when unset —
// this prevents a live request to googletagmanager.com with a fake ID
// on every single homepage load.
//
// To enable:
//   1. Create the GA4 property in analytics.google.com
//   2. Add  VITE_GA_ID=G-XXXXXXXXXX  to your Vercel project env vars
//   3. Redeploy — no code change needed.
const GA_ID = import.meta.env["VITE_GA_ID"] as string | undefined;

const GA_SCRIPTS: {
  src?: string;
  async?: boolean;
  dangerouslySetInnerHTML?: { __html: string };
}[] =
  GA_ID && GA_ID.startsWith("G-")
    ? [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
          async: true,
        },
        {
          dangerouslySetInnerHTML: {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          },
        },
      ]
    : [];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // ─── Primary ───────────────────────────────────────────────
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: PAGE_KEYWORDS.join(", ") },
      { name: "author", content: company.name },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "referrer", content: "strict-origin-when-cross-origin" },

      // ─── Open Graph ────────────────────────────────────────────
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: company.name },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      {
        property: "og:image",
        content: `${siteConfig.url}${siteConfig.ogImage}`,
      },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: `${company.name} — Enterprise IT Infrastructure & Managed Services`,
      },
      { property: "og:locale", content: siteConfig.locale },

      // ─── Twitter / X card ──────────────────────────────────────
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      {
        name: "twitter:image",
        content: `${siteConfig.url}${siteConfig.ogImage}`,
      },
      { name: "twitter:image:alt", content: company.name },
    ],
    links: [
      // Self-referencing canonical on the canonical host — this is what
      // makes `/` indexable instead of "Duplicate without user-selected
      // canonical". Previously this pointed at aipowerenterprises.com.
      { rel: "canonical", href: PAGE_URL },

      // ─── LCP hero preloading ───────────────────────────────────
      // The datacenter shot is the LCP element on the homepage, so it
      // is the ONLY image worth preloading. The other two are decorative
      // marquee tiles far below the fold; preloading them previously
      // burned ~107 KB of bandwidth before first paint.
      {
        rel: "preload",
        href: heroDatacenter,
        as: "image",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(HOME_PAGE_SCHEMA),
      },
      // Analytics is appended after the structured data so schema is
      // never blocked by a third-party script.
      ...GA_SCRIPTS,
    ],
  }),
  component: HomePage,
});
