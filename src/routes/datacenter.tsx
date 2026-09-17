import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Server,
  Layers,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Headset,
  MapPin,
  Clock,
  Cpu,
  Wind,
  Plug,
  Network,
  Camera,
  PhoneCall,
  MessageCircle,
  Mail,
  Sparkles,
  Users,
  Target,
  TrendingUp,
  Award,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  partners,
  company,
  siteConfig,
  services,
  serviceSchema,
  breadcrumbSchema,
  faqPageSchema,
  whatsappLink,
  telLink,
} from "@/data/companyData";

// ═══════════════════════════════════════════════════════════════════
// PAGE-LEVEL SEO CONSTANTS
// ═══════════════════════════════════════════════════════════════════
const PAGE_PATH = "/datacenter";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE =
  "Data Centre Solutions in Pakistan | Design, Build & Operate";
const PAGE_DESCRIPTION =
  "End-to-end data centre solutions in Karachi & Pakistan — design, racks, structured cabling, power, cooling, monitoring and 24/7 support from certified engineers.";
const PAGE_KEYWORDS = [
  "data centre solutions Pakistan",
  "data center design Karachi",
  "server rack installation Pakistan",
  "enterprise data centre Karachi",
  "structured cabling Pakistan",
  "data center cooling Karachi",
  "TIA-942 data centre Pakistan",
  "data centre build Pakistan",
  "DCIM Pakistan",
  "CRAC cooling Karachi",
  "data centre AMC Pakistan",
  "24/7 data centre support",
];

// ═══════════════════════════════════════════════════════════════════
// PAGE FAQS
// ═══════════════════════════════════════════════════════════════════
const datacenterFaqs = [
  {
    question: "What data centre services do you provide in Pakistan?",
    answer:
      "We provide end-to-end data centre solutions — site survey, rack and enclosure systems, structured cabling (Cat6/Cat6A/fibre), power distribution with UPS, precision cooling, physical security, DCIM monitoring, and 24/7 operations support across Pakistan.",
  },
  {
    question: "Do you design data centres to TIA-942 standards?",
    answer:
      "Yes. Our data centre designs follow TIA-942 cabling standards, Uptime Institute tier guidance, and BICSI-aligned engineering practices with full as-built documentation and certification.",
  },
  {
    question: "Can you build a data centre inside our existing facility?",
    answer:
      "Absolutely. We routinely build data centre environments inside existing offices, warehouses and industrial sites — with load calculations, thermal analysis, and power/cooling capacity planning done before any rack is installed.",
  },
  {
    question: "What power and cooling solutions do you deploy?",
    answer:
      "We deploy redundant power paths, rack PDUs, UPS sizing with battery backup, generator integration, precision CRAC units, in-row cooling, hot-aisle containment, and environmental monitoring of temperature and humidity.",
  },
  {
    question: "Do you provide DCIM and monitoring?",
    answer:
      "Yes. We deploy DCIM platforms that monitor power, cooling, humidity, and access events in real time, with alerting and reporting dashboards integrated into our 24/7 operations centre.",
  },
  {
    question: "What is the SLA for data centre support?",
    answer: `Our contractual SLA commitment is a 30-minute initial response, 24/7 × 365 coverage, with part replacement within 4 working hours and onsite intervention across 8 national hubs. Contact ${company.phone} for details.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 3 JSON-LD schemas (via companyData helpers)
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/datacenter")({
  head: () => {
    const dcService = services.find((s) => s.slug === "datacenter");
    const serviceLd = dcService ? serviceSchema(dcService) : null;
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Data Centre", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(datacenterFaqs);

    return {
      meta: [
        { title: PAGE_TITLE },
        { name: "description", content: PAGE_DESCRIPTION },
        { name: "keywords", content: PAGE_KEYWORDS.join(", ") },
        {
          name: "robots",
          content:
            "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: company.name },
        { property: "og:title", content: PAGE_TITLE },
        { property: "og:description", content: PAGE_DESCRIPTION },
        { property: "og:url", content: PAGE_URL },
        {
          property: "og:image",
          content: `${siteConfig.url}${siteConfig.ogImage}`,
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "Data Centre Solutions — AI Power Enterprises",
        },
        { property: "og:locale", content: siteConfig.locale },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: PAGE_TITLE },
        { name: "twitter:description", content: PAGE_DESCRIPTION },
        {
          name: "twitter:image",
          content: `${siteConfig.url}${siteConfig.ogImage}`,
        },
      ],
      links: [{ rel: "canonical", href: PAGE_URL }],
      scripts: [
        ...(serviceLd
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(serviceLd),
              },
            ]
          : []),
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbLd),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqLd),
        },
      ],
    };
  },
  component: DataCentrePage,
});

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════
const capabilities = [
  {
    icon: Server,
    title: "Rack & Enclosure Systems",
    description:
      "Standard and custom server racks, hot/cold aisle containment, PDUs and cable management engineered for enterprise density.",
  },
  {
    icon: Network,
    title: "Structured Cabling",
    description:
      "Cat6, Cat6A and OM4 fibre backbones designed to TIA-942 standards with full certification and labelling.",
  },
  {
    icon: Plug,
    title: "Power Distribution & UPS",
    description:
      "Redundant power paths, rack PDUs, UPS sizing, battery backup and generator integration planning.",
  },
  {
    icon: Wind,
    title: "Cooling & Environmental Control",
    description:
      "Precision CRAC units, in-row cooling, hot-aisle containment and temperature/humidity monitoring.",
  },
  {
    icon: Camera,
    title: "Physical Security & Access",
    description:
      "Biometric access control, CCTV integration, environmental sensors and centralised command room oversight.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoring & DCIM",
    description:
      "Real-time monitoring of power, cooling, humidity and access events with alerting and reporting dashboards.",
  },
];

const phases = [
  {
    step: "01",
    title: "Site Survey & Assessment",
    text: "Load calculations, floor plans, power capacity and cooling audit at your facility.",
  },
  {
    step: "02",
    title: "Design & Engineering",
    text: "Rack layouts, cable schedules, single-line diagrams, thermal analysis and BOM.",
  },
  {
    step: "03",
    title: "Build & Commissioning",
    text: "Racking, cabling, labelling, power-up, thermal validation and as-built documentation.",
  },
  {
    step: "04",
    title: "Operate & Support",
    text: "24/7 monitoring, preventive maintenance, incident response and SLA-backed support.",
  },
];

const valueHighlights = [
  {
    icon: Cpu,
    title: "Vendor-Neutral Design",
    desc: "HPE, Dell, Cisco, APC and Vertiv — we recommend based on your needs, not commissions.",
  },
  {
    icon: Layers,
    title: "Standards Aligned",
    desc: "TIA-942, Uptime Institute tier guidance and BICSI-aligned engineering practices.",
  },
  {
    icon: Activity,
    title: "DCIM-Driven Operations",
    desc: "Real-time visibility of power, cooling and access events — with alerting and reporting.",
  },
  {
    icon: Headset,
    title: "24/7 SLA-Backed Support",
    desc: "30-minute response, 4-hour part replacement, 24/7 × 365 — contractually guaranteed.",
  },
];

// Datacenter-relevant partners (with logos) + text-only vendors
const dcPartners = partners.filter((p) =>
  [
    "Hewlett Packard Enterprise",
    "Dell Technologies",
    "Cisco Systems",
  ].includes(p.name),
);
const dcTextVendors = ["APC by Schneider", "Vertiv"];

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function DataCentrePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const relatedServices = services.filter((s) =>
    ["servers", "storage", "networking"].includes(s.slug),
  );

  return (
    <>
      {/* ═══ HERO (compact top) ═══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-8"
      >
        <div
          className="grid-pattern absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--primary)_0%,_transparent_60%)] opacity-10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              style={{ opacity }}
              className="space-y-5 text-center sm:space-y-6 lg:text-left"
            >
              <Badge className="border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                <Server className="mr-1.5 size-3.5" aria-hidden="true" />
                Data Centre Solutions
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Enterprise Data Centres —{" "}
                <span className="text-gradient">
                  Designed, Built & Operated
                </span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl">
                Racks, containment, structured cabling, power, cooling and DCIM
                — engineered to TIA-942 standards and supported 24/7 across
                Pakistan.
              </p>

              {/* Trust chips */}
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {[
                  { icon: Layers, label: "TIA-942 design" },
                  { icon: Activity, label: "DCIM monitoring" },
                  { icon: MapPin, label: "8 hubs nationwide" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-1.5">
                    <Icon
                      className="size-3.5 text-hero-accent"
                      aria-hidden="true"
                    />
                    {label}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="glow-ring w-full sm:w-auto"
                >
                  <Link to="/contact" hash="request">
                    Book Site Survey
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
                >
                  <Link to="/sla">View SLA Cover</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  value: "24/7 × 365",
                  label: "Monitoring & Support",
                  icon: ShieldCheck,
                },
                { value: "30 min", label: "Initial Response", icon: Clock },
                { value: "TIA-942", label: "Design Standard", icon: Layers },
                { value: "8 hubs", label: "Nationwide Reach", icon: MapPin },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="flex flex-col items-center rounded-2xl border border-hero-border bg-hero-foreground/5 p-4 backdrop-blur-sm sm:p-6"
                >
                  <stat.icon
                    className="size-6 text-hero-accent sm:size-8"
                    aria-hidden="true"
                  />
                  <p className="mt-2 font-display text-lg font-bold text-hero-foreground sm:mt-3 sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-center text-[10px] font-medium uppercase tracking-wider text-hero-muted sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          aria-hidden="true"
        />
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Capabilities
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Complete{" "}
            <span className="text-gradient">Data Centre Stack</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            From racks to redundancy — every layer engineered for reliability,
            efficiency and scale.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="glass-card h-full border border-border/60 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
                <CardHeader>
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="font-display text-base sm:text-lg">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Why AI Power
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Engineering{" "}
              <span className="text-gradient">That Performs</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Standards-aligned design, vendor-neutral engineering, and
              SLA-backed operations.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {valueHighlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-display text-base font-semibold sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DELIVERY PHASES ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Delivery
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Survey to{" "}
            <span className="text-gradient">Commissioning</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A disciplined build methodology with full documentation at every
            stage.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ SLA COMMITMENTS ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              SLA Cover
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Data Centre{" "}
              <span className="text-gradient">Support Commitments</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Contractual response and resolution times for your data centre
              infrastructure.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, label: "Initial Response", value: "30 minutes" },
              {
                icon: Wrench,
                label: "Part Replacement",
                value: "4 hours",
              },
              { icon: Headset, label: "Coverage", value: "24/7 × 365" },
              { icon: MapPin, label: "Onsite Reach", value: "8 hubs" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <item.icon
                  className="mx-auto size-6 text-primary"
                  aria-hidden="true"
                />
                <p className="mt-2 font-display text-xl font-bold sm:text-2xl">
                  {item.value}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/sla">
                View Full SLA Details
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Technology Alliances
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Certified{" "}
            <span className="text-gradient">Data Centre Vendors</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Multi-vendor expertise across compute, networking, power and
            cooling platforms.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-5">
          {dcPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} — data centre partner`}
                className="h-8 w-auto object-contain opacity-80 dark:opacity-90"
                loading="lazy"
                decoding="async"
                width={80}
                height={32}
              />
              <p className="text-[10px] font-medium text-muted-foreground sm:text-xs">
                {partner.name}
              </p>
            </div>
          ))}
          {dcTextVendors.map((name) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <span className="font-display text-base font-bold text-foreground/80 sm:text-lg">
                {name}
              </span>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Power & Cooling
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Common questions about data centre design, build and operations.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {datacenterFaqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-3 p-4 sm:p-5">
                  <h3 className="text-left text-sm font-semibold sm:text-base">
                    {faq.question}
                  </h3>
                  <span
                    className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  >
                    <svg
                      className="size-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-border/60 px-4 pb-4 pt-3 text-sm text-muted-foreground sm:px-5 sm:pb-5">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RELATED SERVICES ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Explore More
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Complete Your{" "}
            <span className="text-gradient">Infrastructure</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Pair your data centre with complementary compute, storage and
            networking solutions.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              to={service.path}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-semibold group-hover:text-primary">
                {service.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                {service.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more
                <ArrowRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ═══ FINAL CTA + CONTACT STRIP ═══ */}
      <section className="mx-auto max-w-7xl px-4 pb-9 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <div className="hero-surface relative overflow-hidden rounded-2xl border border-hero-border px-5 py-10 text-center sm:px-10 sm:py-12">
          <div
            className="grid-pattern absolute inset-0 opacity-20"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <Sparkles
              className="mx-auto size-8 text-hero-accent"
              aria-hidden="true"
            />
            <h2 className="mt-3 font-display text-xl font-bold text-hero-foreground sm:text-2xl lg:text-3xl xl:text-4xl">
              Ready to Build Your Data Centre?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Book a site survey with our certified engineers — and get a full
              design proposal with SLA-backed support.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="glow-ring w-full sm:w-auto"
              >
                <Link to="/contact" hash="request">
                  Book Site Survey
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
              >
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>

            {/* Contact strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-hero-muted sm:text-sm">
              <a
                href={telLink()}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-hero-accent"
                aria-label={`Call ${company.phone}`}
              >
                <PhoneCall className="size-3.5" aria-hidden="true" />
                {company.phone}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-hero-accent"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="size-3.5" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`mailto:${company.emails.sales}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-hero-accent"
                aria-label={`Email ${company.emails.sales}`}
              >
                <Mail className="size-3.5" aria-hidden="true" />
                {company.emails.sales}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}