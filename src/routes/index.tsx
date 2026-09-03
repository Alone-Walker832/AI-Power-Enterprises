import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // Primary
      { title: "AI Power Enterprises | Enterprise IT Infrastructure & 24/7 SLA Support" },
      {
        name: "description",
        content:
          "Enterprise IT infrastructure, managed services, CCTV, networking, servers and 24/7 SLA support across Pakistan. 100+ professionals, 8 technical hubs, 30-minute response commitment.",
      },
      // Open Graph (for social sharing)
      { property: "og:title", content: "AI Power Enterprises | Enterprise IT Solutions" },
      {
        property: "og:description",
        content:
          "Nationwide IT solutions with 24/7 SLA support – data centres, networking, CCTV, and managed services from Pakistan's trusted enterprise partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aipowerenterprises.com" },
      { property: "og:image", content: "https://aipowerenterprises.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Power Enterprises | Enterprise IT Solutions" },
      {
        name: "twitter:description",
        content:
          "Enterprise IT infrastructure, managed services, CCTV, networking, servers & 24/7 SLA support across Pakistan.",
      },
      { name: "twitter:image", content: "https://aipowerenterprises.com/og-image.jpg" },
      // Additional SEO
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "AI Power Enterprises" },
      { name: "keywords", content: "IT infrastructure, managed services, CCTV, networking, servers, SLA support, enterprise IT, Pakistan" },
    ],
    links: [
      { rel: "canonical", href: "https://aipowerenterprises.com" },
      // Preconnect for performance
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Preload hero image (if you have a specific hero, adjust the path)
      // { rel: "preload", href: "/src/assets/hero-datacenter.jpg", as: "image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "AI Power Enterprises",
              url: "https://aipowerenterprises.com",
              logo: "https://aipowerenterprises.com/logo.png",
              description:
                "Enterprise IT infrastructure, managed services and 24/7 SLA technical support across Pakistan.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-300-1234567",
                contactType: "sales",
                availableLanguage: ["English", "Urdu"],
              },
              sameAs: [
                "https://facebook.com/aipowerenterprises",
                "https://linkedin.com/company/aipowerenterprises",
              ],
            },
            {
              "@type": "WebSite",
              url: "https://aipowerenterprises.com",
              name: "AI Power Enterprises",
              description: "Enterprise IT solutions provider in Pakistan.",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://aipowerenterprises.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://aipowerenterprises.com/services" },
              ],
            },
            // Add Service schemas specific to homepage
            {
              "@type": "Service",
              name: "Enterprise IT Infrastructure",
              description: "Data centre, servers, storage, and high-performance computing solutions.",
              provider: { "@id": "#organization" },
            },
            {
              "@type": "Service",
              name: "Managed Services & SLA Support",
              description: "24/7 technical support, helpdesk, preventive maintenance, and SLA-based service.",
              provider: { "@id": "#organization" },
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});