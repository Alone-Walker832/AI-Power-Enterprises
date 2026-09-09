import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/HomePage";

// ─── Dynamically import hero images for preloading ────────────
import heroDatacenter from "../assets/hero-datacenter.jpg?url";
import heroServers from "../assets/hero-servers.jpg?url";
import heroNetworking from "../assets/hero-networking.jpg?url";

// ─── Complete JSON-LD Graph for Home Page ─────────────────────
const HOME_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "#organization",
      name: "AI Power Enterprises",
      url: "https://aipowerenterprises.com",
      logo: "https://aipowerenterprises.com/logo.png",
      description:
        "Enterprise IT infrastructure, managed services, CCTV, networking, servers and 24/7 SLA technical support across Pakistan.",
      foundingYear: "2015",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "100+" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92-300-1234567",
          contactType: "sales",
          availableLanguage: ["English", "Urdu"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+92-300-7654321",
          contactType: "support",
          availableLanguage: ["English", "Urdu"],
        },
      ],
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
      potentialAction: {
        "@type": "SearchAction",
        target: "https://aipowerenterprises.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aipowerenterprises.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://aipowerenterprises.com/services",
        },
      ],
    },
    // ─── Core Services (Complete) ──────────────────────────────
    {
      "@type": "Service",
      name: "Managed IT Services",
      description:
        "Dependable technical support, infrastructure monitoring, helpdesk, incident management, and preventive maintenance to reduce operational disruption.",
      provider: { "@id": "#organization" },
      serviceType: "Managed Services",
    },
    {
      "@type": "Service",
      name: "CCTV & Enterprise Security Surveillance",
      description:
        "IP-based CCTV surveillance systems, centralized monitoring, video recording, and integrated security infrastructure for corporate and industrial environments.",
      provider: { "@id": "#organization" },
      serviceType: "Security",
    },
    {
      "@type": "Service",
      name: "Enterprise Networking Solutions",
      description:
        "Structured cabling, routing/switching, wireless networking, network security, and optimization for reliable business connectivity.",
      provider: { "@id": "#organization" },
      serviceType: "Networking",
    },
    {
      "@type": "Service",
      name: "Servers & High-Performance Computing",
      description:
        "Enterprise server infrastructure, blade systems, high-performance computing, and unified compute platforms for mission-critical workloads.",
      provider: { "@id": "#organization" },
      serviceType: "Infrastructure",
    },
    {
      "@type": "Service",
      name: "Data Centre & Storage Solutions",
      description:
        "SAN/NAS storage, backup and recovery infrastructure, and centralized data management designed for availability, scalability, and business continuity.",
      provider: { "@id": "#organization" },
      serviceType: "Infrastructure",
    },
    {
      "@type": "Service",
      name: "SLA & Mission-Critical Support",
      description:
        "24/7/365 technical support, rapid response, onsite intervention, preventive maintenance, and structured service level frameworks.",
      provider: { "@id": "#organization" },
      serviceType: "Support",
    },
    // ─── LocalBusiness (for Local SEO) ──────────────────────────
    {
      "@type": "LocalBusiness",
      name: "AI Power Enterprises",
      image: "https://aipowerenterprises.com/logo.png",
      "@id": "#localbusiness",
      url: "https://aipowerenterprises.com",
      telephone: "+92-300-1234567",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "IT Tower, Shahrah-e-Faisal",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        postalCode: "75400",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.8607,
        longitude: 67.0011,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "14:00",
        },
      ],
      sameAs: [
        "https://facebook.com/aipowerenterprises",
        "https://linkedin.com/company/aipowerenterprises",
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    title:
      "AI Power Enterprises | Enterprise IT Infrastructure & 24/7 SLA Support Pakistan",
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      // ─── Primary Meta ──────────────────────────────────────────
      {
        name: "description",
        content:
          "Enterprise IT infrastructure, managed services, CCTV, networking, servers and 24/7 SLA support across Pakistan. 100+ professionals, 8 technical hubs, 30-minute response commitment.",
      },
      { name: "author", content: "AI Power Enterprises" },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large",
      },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { name: "keywords",
        content:
          "IT infrastructure, managed services, CCTV, networking, servers, SLA support, enterprise IT, data centre, Pakistan, Karachi, Lahore, Islamabad",
      },
      // ─── Open Graph (Social Sharing) ──────────────────────────
      {
        property: "og:title",
        content: "AI Power Enterprises | Enterprise IT Solutions Pakistan",
      },
      {
        property: "og:description",
        content:
          "Nationwide IT solutions with 24/7 SLA support – data centres, networking, CCTV, and managed services from Pakistan's trusted enterprise partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aipowerenterprises.com" },
      {
        property: "og:image",
        content: "https://aipowerenterprises.com/og-image.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "AI Power Enterprises" },
      // ─── Twitter Card ──────────────────────────────────────────
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AI Power Enterprises | Enterprise IT Solutions",
      },
      {
        name: "twitter:description",
        content:
          "Enterprise IT infrastructure, managed services, CCTV, networking, servers & 24/7 SLA support across Pakistan.",
      },
      {
        name: "twitter:image",
        content: "https://aipowerenterprises.com/og-image.jpg",
      },
      // ─── Theme Color ──────────────────────────────────────────
      { name: "theme-color", content: "#1a2a6c" },
    ],
    links: [
      { rel: "canonical", href: "https://aipowerenterprises.com" },
      // ─── Preconnect for Performance ───────────────────────────
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      // ─── Preload Critical Hero Images (LCP Optimization) ──────
      {
        rel: "preload",
        href: heroDatacenter,
        as: "image",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        href: heroServers,
        as: "image",
        fetchPriority: "low",
      },
      {
        rel: "preload",
        href: heroNetworking,
        as: "image",
        fetchPriority: "low",
      },
      // ─── Preload Font CSS ──────────────────────────────────────
      {
        rel: "preload",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
        as: "style",
      },
    ],
    scripts: [
      // ─── JSON-LD Structured Data ──────────────────────────────
      {
        type: "application/ld+json",
        children: JSON.stringify(HOME_PAGE_SCHEMA),
      },
      // ─── Critical Theme Script (Prevent FOUC) ─────────────────
      {
        dangerouslySetInnerHTML: {
          __html: `
            (function(){
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                const root = document.documentElement;
                if (theme === 'dark') {
                  root.classList.add('dark');
                  root.style.colorScheme = 'dark';
                } else {
                  root.classList.remove('dark');
                  root.style.colorScheme = 'light';
                }
                const meta = document.querySelector('meta[name="theme-color"]');
                if (meta) {
                  meta.content = theme === 'dark' ? '#0d1a2b' : '#1a2a6c';
                }
              } catch(e) {}
            })();
          `,
        },
      },
      // ─── Google Analytics (Replace with your ID) ──────────────
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
      },
      {
        dangerouslySetInnerHTML: {
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        },
      },
    ],
  }),
  component: HomePage,
});