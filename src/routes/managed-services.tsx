import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Settings,
  Headset,
  ArrowRight,
  CheckCircle2,
  Clock,
  Wrench,
  MapPin,
  Activity,
  Users,
  Briefcase,
  Monitor,
  Server,
  Database,
  Network,
  Cpu,
  PhoneCall,
  MessageCircle,
  Mail,
  Sparkles,
  Target,
  TrendingUp,
  Award,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  company,
  partners,
  managedServices,
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
const PAGE_PATH = "/managed-services";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE =
  "Managed IT Services in Pakistan | 24/7 Helpdesk & Support";
const PAGE_DESCRIPTION =
  "Managed IT services in Pakistan — 24/7 helpdesk, incident management, preventive maintenance, resident engineering and SLA-backed support across 8 national hubs.";
const PAGE_KEYWORDS = [
  "managed IT services Pakistan",
  "24/7 IT support Karachi",
  "IT helpdesk Pakistan",
  "IT AMC Karachi",
  "resident engineer Pakistan",
  "managed services provider Pakistan",
  "remote infrastructure monitoring",
  "incident management Pakistan",
  "preventive maintenance IT",
  "outsourced IT operations Pakistan",
  "enterprise IT support Karachi",
  "SLA managed support Pakistan",
];

// ═══════════════════════════════════════════════════════════════════
// PAGE FAQS
// ═══════════════════════════════════════════════════════════════════
const managedFaqs = [
  {
    question: "What are managed IT services?",
    answer:
      "Managed IT services are outsourced IT operations delivered under a contractual agreement — covering helpdesk, infrastructure monitoring, incident and problem management, preventive maintenance, and reporting across your environment.",
  },
  {
    question: "Do you provide 24/7 helpdesk support in Pakistan?",
    answer:
      "Yes. Our centralised helpdesk operates 24/7 × 365 for mission-critical contracts, with a 30-minute initial response commitment and defined escalation paths.",
  },
  {
    question: "What is included in your managed services package?",
    answer:
      "Our packages cover infrastructure monitoring, helpdesk and call management, incident and problem management, preventive maintenance, hardware and OS support, network support, backup and recovery, resident engineering and technical consultancy.",
  },
  {
    question: "Do you offer resident engineering services?",
    answer:
      "Yes. We deploy dedicated on-site engineers for continuous support and maintenance, backed by our regional technical hubs and escalation teams.",
  },
  {
    question: "How do you handle incident escalation?",
    answer:
      "Every engagement includes a defined escalation matrix with named contacts, response-time commitments per severity level, and quarterly service reviews to track performance.",
  },
  {
    question: "Can you support infrastructure from multiple vendors?",
    answer: `Yes. We support multi-vendor environments across Microsoft, Red Hat, VMware, HPE, Dell, Cisco and Fujitsu. Contact ${company.phone} to schedule a managed-services assessment.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 3 JSON-LD schemas
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/managed-services")({
  head: () => {
    const managedService = services.find((s) => s.slug === "managed-services");
    const serviceLd = managedService ? serviceSchema(managedService) : null;
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Managed Services", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(managedFaqs);

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
          content: "Managed IT Services — AI Power Enterprises",
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
  component: ManagedServicesPage,
});

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════
const capabilities = [
  {
    icon: Headset,
    title: "24/7 Helpdesk & Call Management",
    description:
      "Centralised support for service requests, incidents, and technical issues — always available.",
  },
  {
    icon: Activity,
    title: "Incident & Problem Management",
    description:
      "Systematic identification, diagnosis, and resolution of technical problems to minimise downtime.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Scheduled health checks, equipment inspections, firmware updates, and performance reviews.",
  },
  {
    icon: Server,
    title: "Hardware & Software Support",
    description:
      "Support for servers, storage, networking, operating systems, and enterprise applications.",
  },
  {
    icon: Users,
    title: "Resident Engineering",
    description:
      "Dedicated on-site engineers for continuous support, maintenance, and technical assistance.",
  },
  {
    icon: Briefcase,
    title: "Technical Consultancy",
    description:
      "Expert advice, architecture planning, technology roadmaps, and knowledge transfer.",
  },
];

const serviceComponents = [
  {
    icon: Monitor,
    title: "Infrastructure Monitoring",
    desc: "Real-time monitoring of servers, networks, and storage with proactive alerts.",
  },
  {
    icon: Database,
    title: "Backup & Recovery Support",
    desc: "Managed backup, restore testing, and disaster recovery orchestration.",
  },
  {
    icon: Network,
    title: "Network Support",
    desc: "Troubleshooting, configuration, and performance optimisation for LAN/WAN.",
  },
  {
    icon: Cpu,
    title: "Application Support",
    desc: "Enterprise application maintenance and user support for FMS, EAM, ERP, and more.",
  },
];

const implementationSteps = [
  {
    step: "01",
    title: "Assessment",
    text: "Review current environment, pain points, and existing SLA expectations.",
  },
  {
    step: "02",
    title: "Design",
    text: "Define service scope, response times, escalation paths and reporting.",
  },
  {
    step: "03",
    title: "Onboarding",
    text: "Setup monitoring, ticketing, knowledge transfer and named contacts.",
  },
  {
    step: "04",
    title: "Operations",
    text: "24/7 support, incident management, preventive maintenance and reporting.",
  },
  {
    step: "05",
    title: "Improvement",
    text: "Continuous service reviews, optimisation and roadmap alignment.",
  },
];

const managedPartners = partners.filter((p) =>
  [
    "Microsoft",
    "Red Hat",
    "Hewlett Packard Enterprise",
    "Dell Technologies",
  ].includes(p.name),
);

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function ManagedServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const relatedServices = services
    .filter((s) => s.slug !== "managed-services")
    .slice(0, 3);

  return (
    <>
      {/* ═══ HERO (compact top) ═══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-7"
      >
        <div
          className="grid-pattern absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--primary)_0%,_transparent_60%)] opacity-10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              style={{ opacity }}
              className="space-y-5 text-center sm:space-y-6 lg:text-left"
            >
              <Badge className="border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                <Settings className="mr-1.5 size-3.5" aria-hidden="true" />
                Managed IT Services
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                End-to-End Managed Services &{" "}
                <span className="text-gradient">Technical Operations</span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl">
                24/7 helpdesk, incident management, preventive maintenance, and
                resident engineering — backed by a contractual SLA and
                delivered nationwide.
              </p>

              {/* Trust chips */}
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {[
                  { icon: Headset, label: "24/7 × 365 helpdesk" },
                  { icon: Clock, label: "30-minute response" },
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
                    Request Managed Services Quote
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
            </motion.div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  value: "24/7 × 365",
                  label: "Support Availability",
                  icon: Headset,
                },
                { value: "30 min", label: "Response Time", icon: Clock },
                { value: "8 hubs", label: "Nationwide Reach", icon: MapPin },
                { value: "100+", label: "IT Professionals", icon: Users },
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
          className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
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
            Complete <span className="text-gradient">Service Portfolio</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            From helpdesk to resident engineering — we cover your entire IT
            operations.
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

      {/* ═══ SERVICE COMPONENTS ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Service Components
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Operational <span className="text-gradient">Services</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              The building blocks of our managed services delivery.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {serviceComponents.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-display text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FULL SERVICE LIST ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Service Catalogue
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            What We <span className="text-gradient">Deliver</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A comprehensive list of managed services available under our
            support framework.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {managedServices.map((service, idx) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <CheckCircle2
                className="size-3.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              {service}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ═══ SLA FOR MANAGED SERVICES ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              SLA Cover
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Support <span className="text-gradient">Commitments</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Contractual response and resolution times for your managed
              services.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, value: "30 min", label: "Initial Response" },
              {
                icon: Wrench,
                value: "4 hours",
                label: "Part Replacement",
              },
              {
                icon: Headset,
                value: "24/7 × 365",
                label: "Support Coverage",
              },
              { icon: MapPin, value: "8 hubs", label: "Onsite Reach" },
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

      {/* ═══ IMPLEMENTATION ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Onboarding Process
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            From Assessment to{" "}
            <span className="text-gradient">Continuous Improvement</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A structured journey to get your IT operations managed effectively.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {implementationSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
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

      {/* ═══ PARTNERS (with logos) ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Technology Partners
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Certified <span className="text-gradient">Ecosystem</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Our expertise is backed by industry-leading technology vendors.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4">
            {managedPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} — managed services partner`}
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

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Why AI Power
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            What Sets Us <span className="text-gradient">Apart</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Enterprise discipline applied to day-to-day IT operations.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Certified Engineers",
              desc: "100+ trained IT professionals across Microsoft, Red Hat, VMware, HPE, Dell and Cisco platforms.",
            },
            {
              icon: Target,
              title: "Defined Scope & KPIs",
              desc: "Every engagement has documented response times, escalation matrix and quarterly service reviews.",
            },
            {
              icon: TrendingUp,
              title: "Proactive Approach",
              desc: "Preventive maintenance, monitoring and capacity reviews to reduce unplanned incidents.",
            },
            {
              icon: Award,
              title: "SLA-Backed",
              desc: "30-minute response, 4-hour part replacement, 24/7 × 365 — contractually guaranteed.",
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
              Common questions about managed services, helpdesk and SLA
              coverage.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {managedFaqs.map((faq, index) => (
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
            Related <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Managed services is one piece of our end-to-end IT infrastructure
            portfolio.
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
              Ready to Outsource Your IT Operations?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Let&apos;s define a managed services package that fits your
              operational needs and budget — with a 30-minute SLA guarantee.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="glow-ring w-full sm:w-auto"
              >
                <Link to="/contact" hash="request">
                  Get a Managed Services Quote
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