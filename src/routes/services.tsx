import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Clock,
  LifeBuoy,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Database,
  Camera,
  Wifi,
  ShoppingBag,
  Settings,
  Briefcase,
  Activity,
  BookOpen,
  Server,
  Network,
  HardDrive,
  Cloud,
  Lock,
  MapPin,
  PhoneCall,
  MessageCircle,
  Mail,
  Sparkles,
  Users,
  Zap,
  Headset,
  Target,
  TrendingUp,
  Building2,
  Award,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  serviceSections,
  slaDeliverables,
  slaModels,
  slaParameters,
  technologyPortfolio,
  managedServices,
  consultancyServices,
  disasterRecovery,
  partners,
  services,
  company,
  siteConfig,
  whatsappLink,
  telLink,
  breadcrumbSchema,
  faqPageSchema,
} from "@/data/companyData";

// ═══════════════════════════════════════════════════════════════════
// PAGE-LEVEL SEO CONSTANTS
// ═══════════════════════════════════════════════════════════════════
const PAGE_PATH = "/services";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE = "IT Services in Pakistan | Servers, CCTV, Networking, SLA";
const PAGE_DESCRIPTION =
  "Enterprise IT services in Pakistan — servers, storage, networking, IP CCTV, software licensing, managed services and 24/7 SLA support with 30-minute response.";
const PAGE_KEYWORDS = [
  "IT services Pakistan",
  "enterprise IT Karachi",
  "server solutions Pakistan",
  "CCTV installation Karachi",
  "networking solutions Pakistan",
  "enterprise software licensing Pakistan",
  "managed IT services Pakistan",
  "24/7 IT support Karachi",
  "SLA support Pakistan",
  "data centre solutions Pakistan",
  "storage solutions Pakistan",
  "systems integration Pakistan",
];

// ═══════════════════════════════════════════════════════════════════
// SERVICES FAQS (FAQPage schema + voice search)
// ═══════════════════════════════════════════════════════════════════
const servicesFaqs = [
  {
    question: "What IT services does AI Power Enterprises provide?",
    answer:
      "We provide enterprise servers and compute, storage and backup, data centre solutions, networking (LAN/WAN/Wi-Fi), IP CCTV surveillance, software licensing, managed IT services, disaster recovery and 24/7 SLA-based support across Pakistan.",
  },
  {
    question: "Do you offer managed IT services and 24/7 support?",
    answer:
      "Yes. Our managed services include helpdesk, infrastructure monitoring, incident and problem management, preventive maintenance, and resident engineering — with mission-critical 24/7 × 365 SLA options.",
  },
  {
    question: "What is your SLA response time?",
    answer:
      "Our contractual SLA commitment is a 30-minute initial response, 24/7, with part replacement within 4 working hours and onsite intervention supported by spare parts pools.",
  },
  {
    question: "Can you support infrastructure from other vendors?",
    answer:
      "Yes. We support multi-vendor environments across Microsoft, Red Hat, VMware, HPE, Dell, Cisco and Fujitsu — including existing infrastructure not originally supplied by us.",
  },
  {
    question: "Where are you located and which cities do you cover?",
    answer:
      "Our head office is in Karachi with regional technical hubs in Islamabad and Lahore, plus field support across Multan, Faisalabad, Peshawar, Gilgit and Quetta.",
  },
  {
    question: "How do I request a quote or site assessment?",
    answer: `Call our office at ${company.phone}, WhatsApp us at ${company.whatsapp}, or email ${company.emails.sales} to schedule a site assessment and discuss scope.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 3 JSON-LD schemas
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/services")({
  head: () => {
    // CollectionPage listing every service — helps Google discover /cctv, /servers, etc.
    const collectionLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      inLanguage: "en-PK",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: {
        "@type": "ItemList",
        name: "Enterprise IT Services",
        numberOfItems: services.length,
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.title,
          description: s.summary,
          url: `${siteConfig.url}${s.path}`,
        })),
      },
    };
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(servicesFaqs);

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
          content: "Enterprise IT Services — AI Power Enterprises",
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
        {
          type: "application/ld+json",
          children: JSON.stringify(collectionLd),
        },
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
  component: ServicesPage,
});

// ═══════════════════════════════════════════════════════════════════
// ICON MAPPING
// ═══════════════════════════════════════════════════════════════════
const iconMap: Record<string, LucideIcon> = {
  Database,
  Camera,
  Wifi,
  ShoppingBag,
  Settings,
  Briefcase,
  Activity,
  BookOpen,
  Server,
  Network,
  HardDrive,
  Cloud,
  Lock,
};

const getIcon = (name?: string): LucideIcon =>
  (name && iconMap[name]) || Settings;

// ═══════════════════════════════════════════════════════════════════
// STICKY SUB-NAV SECTIONS
// ═══════════════════════════════════════════════════════════════════
const sectionNav = [
  { id: "sla", label: "SLA Framework" },
  { id: "services", label: "Service Lines" },
  { id: "catalog", label: "Service Catalog" },
  { id: "technology", label: "Technology Stack" },
  { id: "managed", label: "Managed & Consultancy" },
  { id: "partners", label: "Partners" },
];

// ═══════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════
function ServiceCard({ section }: { section: (typeof serviceSections)[0] }) {
  const Icon = getIcon(section.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl sm:p-6"
    >
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-semibold">{section.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {section.summary}
          </p>
          <ul className="mt-3 space-y-1.5 text-left">
            {section.items.slice(0, 4).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2
                  className="mt-0.5 size-3.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
            {section.items.length > 4 && (
              <li className="pl-5 text-sm font-medium text-primary">
                + {section.items.length - 4} more
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  const slaIcons: LucideIcon[] = [Clock, LifeBuoy, Wrench, CheckCircle2];
  const [activeSection, setActiveSection] = useState("sla");

  // Track active section for sticky sub-nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 },
    );
    sectionNav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══ STICKY SUB-NAV (lg only) ═══ */}
      <nav
        aria-label="Section navigation"
        className="sticky top-0 z-30 hidden border-b border-border/40 bg-background/80 backdrop-blur-md lg:block"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-6 overflow-x-auto py-3 text-sm font-medium">
            {sectionNav.map((item) => (
              <li key={item.id} className="shrink-0">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`whitespace-nowrap transition-colors hover:text-primary ${
                    activeSection === item.id
                      ? "border-b-2 border-primary pb-1 text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ═══ 1. HERO (compact top) ═══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-14"
      >
        <div
          className="grid-pattern absolute inset-0 opacity-20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_70%)] opacity-10"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              style={{ opacity }}
              className="space-y-5 text-center sm:space-y-6 lg:text-left"
            >
              <Badge className="border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                Enterprise IT Services
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Managed IT &{" "}
                <span className="text-gradient">SLA-Backed Support</span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl">
                From mission-critical infrastructure to IP surveillance,
                networking, and licensing — delivered by certified engineers
                nationwide with a 30-minute SLA.
              </p>

              {/* Trust chips */}
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {[
                  { icon: Clock, label: "30-min SLA response" },
                  { icon: ShieldCheck, label: "24/7 × 365 support" },
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
                    Request a Quote
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
                  onClick={() => scrollToSection("sla")}
                >
                  View SLA
                </Button>
              </div>
            </motion.div>

            {/* Right — service preview tiles */}
            <div className="grid grid-cols-2 gap-3">
              {serviceSections.slice(0, 4).map((section) => {
                const Icon = getIcon(section.icon);
                return (
                  <motion.div
                    key={section.id}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-xl border border-hero-border/60 bg-hero-foreground/5 p-3 backdrop-blur-sm transition-all hover:bg-hero-foreground/10 sm:p-4"
                  >
                    <Icon
                      className="size-5 text-hero-accent sm:size-6"
                      aria-hidden="true"
                    />
                    <h3 className="mt-1.5 text-xs font-semibold text-hero-foreground sm:text-sm">
                      {section.title.split(" ").slice(0, 2).join(" ")}
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-[10px] text-hero-muted sm:text-xs">
                      {section.summary}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. SLA FRAMEWORK ═══ */}
      <section
        id="sla"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            SLA Framework
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Clear, Measurable{" "}
            <span className="text-gradient">Service Parameters</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Backed by onsite intervention and spare parts availability —
            always.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {slaParameters.map((parameter, index) => {
            const Icon = slaIcons[index % slaIcons.length]!;
            return (
              <motion.div
                key={parameter.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Card className="glass-card h-full border border-border/60 shadow-sm transition-all hover:shadow-lg">
                  <CardHeader>
                    <Icon
                      className="size-6 text-primary"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-base font-semibold">
                      {parameter.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {parameter.value}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* SLA Models */}
        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
          {slaModels.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full border border-border/60 shadow-sm transition-all hover:shadow-lg">
                <CardHeader>
                  <Badge className="w-fit border-primary/20 bg-primary/10 text-primary hover:bg-primary/20">
                    {model.coverage}
                  </Badge>
                  <CardTitle className="font-display text-xl sm:text-2xl">
                    {model.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {model.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Deliverables */}
        <div className="mt-10 sm:mt-12">
          <h3 className="text-center font-display text-lg font-semibold sm:text-xl">
            Core SLA Deliverables
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {slaDeliverables.map((deliverable) => (
              <motion.li
                key={deliverable}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm transition-all hover:shadow-md"
              >
                <CheckCircle2
                  className="size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {deliverable}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ 3. SERVICE LINES ═══ */}
      <section
        id="services"
        className="scroll-mt-20 border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Expertise
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Comprehensive{" "}
              <span className="text-gradient">Service Portfolio</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              End-to-end IT solutions from infrastructure to managed support.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2">
            {serviceSections.map((section) => (
              <ServiceCard key={section.id} section={section} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/contact" hash="request">
                Discuss Your Requirements
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 4. SERVICE CATALOG (NEW — links to individual pages) ═══ */}
      <section
        id="catalog"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Explore in Detail
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Individual <span className="text-gradient">Service Pages</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Dive deep into each service line — capabilities, deliverables and
            SLA alignment.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
              >
                <Link
                  to={service.path}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Explore
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══ 5. TECHNOLOGY PORTFOLIO ═══ */}
      <section
        id="technology"
        className="scroll-mt-20 border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Technology Stack
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Full <span className="text-gradient">Technology Portfolio</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Over 14 core technology areas supported by our engineering teams.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {technologyPortfolio.map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm transition-all hover:shadow-md"
              >
                <CheckCircle2
                  className="size-3.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

{/* ═══ 6. MANAGED SERVICES & CONSULTANCY ═══ */}
<section
  id="managed"
  className="mx-auto max-w-7xl scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
>
  {/* Section header */}
  <div className="mx-auto max-w-2xl text-center">
    <Badge variant="secondary" className="mb-4">
      Managed & Consultancy
    </Badge>
    <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
      Operational <span className="text-gradient">& Advisory</span>
    </h2>
    <p className="mt-3 text-sm text-muted-foreground sm:text-base">
      Day-to-day IT operations management and strategic guidance.
    </p>
  </div>

  {/* ─── Two Premium Cards ─── */}
  <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-8">
    {/* Card 1 — Managed Services */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl"
    >
      {/* Top gradient accent bar */}
      <div
        className="h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-primary/10"
        aria-hidden="true"
      />
      {/* Soft background glow */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-start gap-4">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
            <Settings className="size-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Managed Services
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              End-to-end IT operations managed by certified engineers.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-5 h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent"
          aria-hidden="true"
        />

        {/* Items grid — 1 col mobile, 2 col inside card on lg */}
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {managedServices.map((item) => (
            <li
              key={item}
              className="group/item flex items-start gap-2.5 rounded-lg border border-transparent px-2 py-2 transition-all hover:border-primary/20 hover:bg-primary/5"
            >
              <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-all group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                <CheckCircle2 className="size-3" aria-hidden="true" />
              </span>
              <span className="text-sm leading-snug text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>

    {/* Card 2 — Consultancy */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl"
    >
      <div
        className="h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-primary/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-start gap-4">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
            <Briefcase className="size-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Consultancy
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Strategic planning, architecture and knowledge transfer.
            </p>
          </div>
        </div>

        <div
          className="mt-5 h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent"
          aria-hidden="true"
        />

        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {consultancyServices.map((item) => (
            <li
              key={item}
              className="group/item flex items-start gap-2.5 rounded-lg border border-transparent px-2 py-2 transition-all hover:border-primary/20 hover:bg-primary/5"
            >
              <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-all group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                <CheckCircle2 className="size-3" aria-hidden="true" />
              </span>
              <span className="text-sm leading-snug text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </div>

  {/* ─── Disaster Recovery — premium band ─── */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: 0.15 }}
    className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-6 shadow-sm sm:mt-8 sm:p-8"
  >
    <div
      className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/8 blur-3xl"
      aria-hidden="true"
    />

    <div className="relative">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
          <Activity className="size-6" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl font-bold sm:text-2xl">
            Disaster Recovery & Business Continuity
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Keep critical systems running — and recover them fast — with
            tested continuity plans.
          </p>
        </div>
      </div>

      {/* Items grid */}
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {disasterRecovery.map((item, idx) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="group/dr flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 p-3.5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md sm:p-4"
          >
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover/dr:bg-primary group-hover/dr:text-primary-foreground">
              <ShieldCheck className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium leading-snug">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
</section>

      {/* ═══ 7. PARTNERS (with logos) ═══ */}
      <section
        id="partners"
        className="scroll-mt-20 border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Technology Alliances
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Strategic <span className="text-gradient">Partners</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Certified alignment with the world&apos;s leading enterprise
              technology vendors.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} — technology partner`}
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
          </div>
        </div>
      </section>

      {/* ═══ 8. WHY AI POWER ENTERPRISES (NEW) ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Why AI Power
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            What Sets Us{" "}
            <span className="text-gradient">Apart</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Enterprise engineering discipline combined with nationwide
            responsiveness.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Certified Engineers",
              desc: "100+ skilled IT professionals across enterprise platforms — trained, certified, and field-tested.",
            },
            {
              icon: Zap,
              title: "30-Minute Response",
              desc: "Contractual SLA with guaranteed initial response, 24 hours a day, 7 days a week.",
            },
            {
              icon: Headset,
              title: "Nationwide Presence",
              desc: "Head office in Karachi plus 8 hubs across Pakistan — onsite intervention wherever you operate.",
            },
            {
              icon: Award,
              title: "Multi-Vendor Expertise",
              desc: "Deep alignment with Microsoft, Red Hat, HPE, Dell, Cisco and Fujitsu technologies.",
            },
          ].map((item, idx) => (
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
      </section>

      {/* ═══ 9. FAQ ═══ */}
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
              Common questions about our services, SLA, and coverage.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {servicesFaqs.map((faq, index) => (
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

      {/* ═══ 10. FINAL CTA + CONTACT STRIP ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
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
              Ready to Secure Your Infrastructure?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Talk to our engineering team about servers, CCTV, networking,
              licensing and 30-minute SLA support — nationwide across Pakistan.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="glow-ring w-full sm:w-auto"
              >
                <Link to="/contact" hash="request">
                  Request a Quote
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
              >
                <Link to="/sla">View SLA Details</Link>
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