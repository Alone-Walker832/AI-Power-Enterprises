import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Cctv,
  MonitorPlay,
  Network,
  ShieldCheck,
  Wrench,
  ArrowRight,
  CheckCircle2,
  HardDrive,
  Settings,
  MapPin,
  Clock,
  Headset,
  Layers,
  PhoneCall,
  MessageCircle,
  Mail,
  Sparkles,
  Users,
  Target,
  TrendingUp,
  Award,
  Eye,
  Lock,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
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
const PAGE_PATH = "/cctv";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE = "IP CCTV & Surveillance Solutions in Pakistan | Enterprise Grade";
const PAGE_DESCRIPTION =
  "IP CCTV design, site assessment, network video transmission, storage, command rooms and preventive maintenance for enterprise sites across Pakistan.";
const PAGE_KEYWORDS = [
  "CCTV solutions Pakistan",
  "IP camera installation Karachi",
  "enterprise surveillance Pakistan",
  "CCTV AMC Karachi",
  "IP CCTV design Pakistan",
  "NVR storage solutions Pakistan",
  "video management system Karachi",
  "ANPR cameras Pakistan",
  "thermal cameras Pakistan",
  "command room integration Karachi",
  "access control integration Pakistan",
  "24/7 CCTV maintenance Karachi",
];

// ═══════════════════════════════════════════════════════════════════
// PAGE FAQS
// ═══════════════════════════════════════════════════════════════════
const cctvFaqs = [
  {
    question: "Do you design and install IP CCTV systems in Pakistan?",
    answer:
      "Yes. We handle full lifecycle IP CCTV — site assessment, camera placement and lens calculations, PoE switching and fibre backbone, NVR/SAN storage sizing, VMS deployment, command room setup, and ongoing preventive maintenance across Pakistan.",
  },
  {
    question: "Which CCTV brands do you supply and support?",
    answer:
      "We work with leading enterprise security brands including Hikvision, Dahua, Axis Communications and Bosch Security — selecting the right fit for your environment, budget and integration needs.",
  },
  {
    question: "Can you integrate CCTV with access control and network infrastructure?",
    answer:
      "Yes. We integrate CCTV with door controllers, biometrics, intercom systems, and your enterprise network using VLAN segmentation, QoS, PoE, and secure remote access — creating a unified security ecosystem.",
  },
  {
    question: "How long is video retention typically configured for?",
    answer:
      "Retention depends on your compliance and operational requirements. We size NVR/SAN storage for typical retention windows of 30, 60, 90, or 180 days — with redundancy, archiving and fast retrieval built-in.",
  },
  {
    question: "Do you offer CCTV AMC and preventive maintenance?",
    answer:
      "Yes. We offer Annual Maintenance Contracts covering scheduled health checks, lens cleaning, firmware updates, fault repair, spare parts availability and 24/7 SLA-backed support.",
  },
  {
    question: "What is the SLA response time for CCTV issues?",
    answer: `Our contractual SLA commitment is a 30-minute initial response, 24/7 × 365 coverage, with part replacement within 4 working hours and onsite intervention across 8 national hubs. Contact ${company.phone} for details.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 3 JSON-LD schemas
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/cctv")({
  head: () => {
    const cctvService = services.find((s) => s.slug === "cctv");
    const serviceLd = cctvService ? serviceSchema(cctvService) : null;
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "CCTV & Surveillance", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(cctvFaqs);

    return {
      meta: [
        { title: PAGE_TITLE },
        { name: "description", content: PAGE_DESCRIPTION },
        { name: "keywords", content: PAGE_KEYWORDS.join(", ") },
        {
          name: "robots",
          content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
          content: "IP CCTV & Surveillance — AI Power Enterprises",
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
  component: CctvPage,
});

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════
const capabilities = [
  {
    icon: Camera,
    title: "Site Assessment & Design",
    description:
      "Coverage mapping, camera selection, lux and lens calculations per zone, and detailed site surveys.",
  },
  {
    icon: Network,
    title: "Network Video Transmission",
    description:
      "PoE switching, fibre backbone, VLAN-segmented surveillance networks with QoS for reliable video streaming.",
  },
  {
    icon: MonitorPlay,
    title: "Command & Control Rooms",
    description:
      "Video walls, centralized VMS, role-based access, retention policies and live monitoring stations.",
  },
  {
    icon: HardDrive,
    title: "Storage & Retention",
    description:
      "NVR/SAN sizing for compliant retention with redundancy, archiving and fast retrieval.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Scheduled health checks, lens cleaning, firmware updates, fault repair and spare parts availability.",
  },
  {
    icon: Settings,
    title: "Analytics & Integration",
    description:
      "Motion detection, intrusion, ANPR, access-control integration and AI-based event correlation.",
  },
];

const securityComponents = [
  {
    icon: Camera,
    title: "IP Cameras",
    desc: "Fixed, dome, PTZ and thermal cameras — indoor and outdoor — with night vision and WDR.",
  },
  {
    icon: Network,
    title: "PoE Switches & Fibre",
    desc: "PoE+ switches, fibre transceivers, media converters for long-distance connectivity.",
  },
  {
    icon: HardDrive,
    title: "Storage Appliances",
    desc: "NVRs and SAN storage with RAID, redundancy and scalable capacity.",
  },
  {
    icon: MonitorPlay,
    title: "VMS Software",
    desc: "Centralized video management with recording, search, export and camera control.",
  },
];

const integrationItems = [
  {
    icon: Network,
    title: "Network Integration",
    desc: "VLAN segmentation, QoS, PoE, and secure remote access for surveillance traffic.",
  },
  {
    icon: Layers,
    title: "Access Control Integration",
    desc: "Connect with door controllers, biometrics and intercom for unified security.",
  },
  {
    icon: HardDrive,
    title: "Unified Storage",
    desc: "Consolidated storage pools for video, access logs and server backups.",
  },
  {
    icon: MonitorPlay,
    title: "Centralized Management",
    desc: "Single VMS for all cameras, with real-time alerts and incident playback.",
  },
];

const implementationSteps = [
  {
    step: "01",
    title: "Site Survey",
    text: "Site walk, camera placement, lighting and network assessment.",
  },
  {
    step: "02",
    title: "Design & BOM",
    text: "Detailed design, camera specs, switch ports, storage sizing and cabling plan.",
  },
  {
    step: "03",
    title: "Installation",
    text: "Camera mounting, cabling, switch configuration and network integration.",
  },
  {
    step: "04",
    title: "Commissioning",
    text: "System testing, camera calibration, storage verification and handover.",
  },
  {
    step: "05",
    title: "Managed Support",
    text: "24/7 monitoring, preventive maintenance, SLA-backed response.",
  },
];

const cctvPartners = [
  { name: "Hikvision", badge: "Authorized Partner" },
  { name: "Dahua", badge: "Authorized Partner" },
  { name: "Axis Communications", badge: "Technology Partner" },
  { name: "Bosch Security", badge: "Technology Partner" },
];

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function CctvPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const relatedServices = services.filter((s) => s.slug !== "cctv").slice(0, 3);

  return (
    <>
      {/* ═══ HERO (compact top) ═══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-7"
      >
        <div className="grid-pattern absolute inset-0 opacity-25" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_60%)] opacity-10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              style={{ opacity }}
              className="space-y-5 text-center sm:space-y-6 lg:text-left"
            >
              <Badge className="border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                <Cctv className="mr-1.5 size-3.5" aria-hidden="true" />
                CCTV & Surveillance
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Enterprise IP CCTV Surveillance,{" "}
                <span className="text-gradient">Designed & Maintained</span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl">
                End-to-end IP surveillance from site assessment to command room — with 24/7
                preventive maintenance and SLA-backed support nationwide.
              </p>

              {/* Trust chips */}
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {[
                  { icon: Eye, label: "Full lifecycle delivery" },
                  { icon: Lock, label: "Access control ready" },
                  { icon: MapPin, label: "8 hubs nationwide" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-1.5">
                    <Icon className="size-3.5 text-hero-accent" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
                <Button asChild size="lg" className="glow-ring w-full sm:w-auto">
                  <Link to="/contact" hash="request">
                    Request CCTV Survey
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
                >
                  <Link to="/sla">SLA Support Details</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  value: "End-to-End",
                  label: "Design to command room",
                  icon: Camera,
                },
                {
                  value: "24/7 × 365",
                  label: "Maintenance cover",
                  icon: ShieldCheck,
                },
                { value: "8 hubs", label: "Nationwide install", icon: MapPin },
                { value: "30 min", label: "SLA response", icon: Clock },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="flex flex-col items-center rounded-2xl border border-hero-border bg-hero-foreground/5 p-4 backdrop-blur-sm sm:p-6"
                >
                  <stat.icon className="size-6 text-hero-accent sm:size-8" aria-hidden="true" />
                  <p className="mt-2 text-center font-display text-base font-bold text-hero-foreground sm:mt-3 sm:text-xl lg:text-2xl">
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
            Complete <span className="text-gradient">Surveillance Stack</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            From site assessment to command room — we cover every layer of the surveillance
            pipeline.
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
                  <CardTitle className="font-display text-base sm:text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ SECURITY COMPONENTS ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Security Components
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              End-to-End <span className="text-gradient">Surveillance Hardware & Software</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Cameras, networking, storage and management — all integrated.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {securityComponents.map((item, idx) => (
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
                <h3 className="mt-3 font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATED SECURITY ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Integrated Security
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Unified <span className="text-gradient">Security & IT Infrastructure</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            CCTV seamlessly integrates with your network, access control and IT management systems.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2">
          {integrationItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ SLA FOR CCTV ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              SLA Cover
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Surveillance Support <span className="text-gradient">Commitments</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Contractual response and maintenance for your CCTV systems.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, label: "Response Time", value: "30 min" },
              {
                icon: Wrench,
                label: "Part Replacement",
                value: "4 hours",
              },
              { icon: Headset, label: "Support Coverage", value: "24/7 × 365" },
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
                <item.icon className="mx-auto size-6 text-primary" aria-hidden="true" />
                <p className="mt-2 font-display text-xl font-bold sm:text-2xl">{item.value}</p>
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
            Implementation
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            From Survey to <span className="text-gradient">Managed Support</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A structured methodology ensures your surveillance system is deployed right and stays
            reliable.
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
              <h3 className="mt-3 font-display text-base font-semibold sm:text-lg">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Technology Partners
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Certified <span className="text-gradient">Security Vendors</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              We work with leading global brands to deliver enterprise-grade surveillance.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4">
            {cctvPartners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <span className="font-display text-base font-bold text-foreground sm:text-lg">
                  {partner.name}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                  {partner.badge}
                </span>
              </motion.div>
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
            Full-lifecycle surveillance expertise — from design to managed support.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Certified Engineers",
              desc: "Trained security engineers across Hikvision, Dahua, Axis and Bosch platforms with enterprise deployment experience.",
            },
            {
              icon: Target,
              title: "Design-Led Approach",
              desc: "Every project starts with a site survey, camera placement plan, lux calculations and network design.",
            },
            {
              icon: Activity,
              title: "Integrated Systems",
              desc: "CCTV + access control + network designed together — not bolted on as separate systems.",
            },
            {
              icon: Award,
              title: "SLA-Backed Support",
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
              <h3 className="mt-3 font-display text-base font-semibold sm:text-lg">{item.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{item.desc}</p>
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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Common questions about CCTV design, deployment, integration and SLA coverage.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {cctvFaqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-3 p-4 sm:p-5">
                  <h3 className="text-left text-sm font-semibold sm:text-base">{faq.question}</h3>
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
            CCTV is one piece of our end-to-end IT infrastructure portfolio.
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
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{service.summary}</p>
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
          <div className="grid-pattern absolute inset-0 opacity-20" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <Sparkles className="mx-auto size-8 text-hero-accent" aria-hidden="true" />
            <h2 className="mt-3 font-display text-xl font-bold text-hero-foreground sm:text-2xl lg:text-3xl xl:text-4xl">
              Ready to Secure Your Site?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Let&apos;s design and deploy a surveillance system that covers every angle — with
              SLA-backed maintenance and response.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring w-full sm:w-auto">
                <Link to="/contact" hash="request">
                  Request a Survey
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
