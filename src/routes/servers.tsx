import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Server,
  Database,
  HardDrive,
  Layers,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Wrench,
  Headset,
  MapPin,
  PhoneCall,
  MessageCircle,
  Mail,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Target,
  Users,
  Award,
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
const PAGE_PATH = "/servers";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE =
  "Enterprise Servers & Storage in Pakistan | HPE, Dell, Cisco";
const PAGE_DESCRIPTION =
  "Enterprise servers, blade systems, SAN/NAS storage and backup infrastructure from HPE, Dell and Cisco — designed, deployed and supported nationwide in Pakistan.";
const PAGE_KEYWORDS = [
  "enterprise servers Pakistan",
  "blade servers Karachi",
  "HPE ProLiant Pakistan",
  "Dell PowerEdge Karachi",
  "Cisco UCS Pakistan",
  "SAN NAS solutions Karachi",
  "server AMC Pakistan",
  "storage solutions Pakistan",
  "backup infrastructure Pakistan",
  "virtualization Pakistan",
  "VMware vSphere Pakistan",
  "Red Hat OpenShift Pakistan",
];

// ═══════════════════════════════════════════════════════════════════
// PAGE FAQS
// ═══════════════════════════════════════════════════════════════════
const serversFaqs = [
  {
    question: "Which server brands do you supply and support in Pakistan?",
    answer:
      "We supply, deploy and support HPE ProLiant, Dell PowerEdge, Cisco UCS and Fujitsu enterprise servers, along with blade systems, engineered compute platforms and unified computing infrastructure.",
  },
  {
    question: "Do you provide SAN and NAS storage solutions?",
    answer:
      "Yes. We design and deploy Fibre Channel and iSCSI SAN, enterprise NAS (NFS/SMB/CIFS), all-flash and hybrid arrays, backup appliances, and disaster recovery orchestration for RPO/RTO targets.",
  },
  {
    question: "What virtualization platforms do you support?",
    answer:
      "We support VMware vSphere, Microsoft Hyper-V, and Red Hat OpenShift — including host builds, migration planning, high-availability clusters, and hybrid cloud integration.",
  },
  {
    question: "What is the SLA response time for server hardware?",
    answer:
      "Our contractual SLA commitment is a 30-minute initial response, 24/7 × 365 coverage, with part replacement within 4 working hours, backed by dedicated spare parts pools and onsite intervention.",
  },
  {
    question: "Can you support existing servers not purchased from you?",
    answer:
      "Yes. We support multi-vendor environments including HPE, Dell, Cisco, Fujitsu, Lenovo and others — regardless of where the equipment was originally procured.",
  },
  {
    question: "Do you offer server AMC and managed support?",
    answer: `Yes. We offer Annual Maintenance Contracts and managed support with preventive maintenance, monitoring, spare parts provisioning and quarterly service reporting. Contact ${company.phone} for a quote.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 3 JSON-LD schemas
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/servers")({
  head: () => {
    const serverService = services.find((s) => s.slug === "servers");
    const serviceLd = serverService ? serviceSchema(serverService) : null;
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Servers & Compute", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(serversFaqs);

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
          content: "Enterprise Servers & Storage — AI Power Enterprises",
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
  component: ServersPage,
});

// ═══════════════════════════════════════════════════════════════════
// DATA — Capabilities
// ═══════════════════════════════════════════════════════════════════
const capabilities = [
  {
    icon: Server,
    title: "Rack & Blade Servers",
    description:
      "HPE ProLiant, Dell PowerEdge and Cisco UCS sizing, deployment and firmware lifecycle management.",
  },
  {
    icon: Layers,
    title: "Engineered & Unified Compute",
    description:
      "Converged and hyper-converged platforms for virtualisation and database workloads with integrated networking and storage.",
  },
  {
    icon: Database,
    title: "SAN & NAS Storage",
    description:
      "Tiered enterprise storage with replication, snapshots, performance tuning and capacity planning.",
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    description:
      "Backup appliances, offsite copies, tested restore runbooks and disaster recovery orchestration.",
  },
  {
    icon: Cpu,
    title: "Virtualization Ready",
    description:
      "VMware, Hyper-V and Red Hat OpenShift host builds with capacity headroom and migration planning.",
  },
  {
    icon: ShieldCheck,
    title: "Hardware SLA Cover",
    description:
      "30-minute response, 4-working-hour part replacement and 24/7/365 support under contractual SLA.",
  },
];

const storageItems = [
  {
    title: "SAN Storage",
    desc: "Fibre Channel and iSCSI SAN with multi-path I/O, snapshots, cloning and replication.",
  },
  {
    title: "NAS Storage",
    desc: "Network-attached storage with NFS, SMB/CIFS, high-availability and file-level tiering.",
  },
  {
    title: "Backup Appliances",
    desc: "Disk-based backup, deduplication, compression and integrated cloud replication.",
  },
  {
    title: "Disaster Recovery",
    desc: "Automated failover, recovery testing and runbook documentation for RPO/RTO targets.",
  },
];

const virtualizationItems = [
  {
    title: "VMware vSphere",
    desc: "Enterprise virtualisation with vMotion, HA, DRS and distributed resource scheduling.",
  },
  {
    title: "Microsoft Hyper-V",
    desc: "Windows Server virtualisation with live migration and integrated management.",
  },
  {
    title: "Red Hat OpenShift",
    desc: "Kubernetes-based container platform for hybrid cloud and edge deployments.",
  },
  {
    title: "Cloud Integration",
    desc: "Hybrid and multi-cloud connectivity for backup, disaster recovery and bursting.",
  },
];

const lifecycle = [
  {
    step: "01",
    title: "Workload Assessment",
    text: "Profile compute, memory, IOPS and growth patterns.",
  },
  {
    step: "02",
    title: "Sizing & BOM",
    text: "Vendor-neutral configuration with cost modeling and TCO analysis.",
  },
  {
    step: "03",
    title: "Deployment",
    text: "Racking, cabling, firmware updates and cluster build.",
  },
  {
    step: "04",
    title: "Managed Support",
    text: "Monitoring, preventive maintenance, reporting and SLA-backed support.",
  },
];

const serverPartners = partners.filter((p) =>
  [
    "Hewlett Packard Enterprise",
    "Dell Technologies",
    "Cisco Systems",
    "Red Hat",
  ].includes(p.name),
);

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function ServersPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const relatedServices = services
    .filter((s) => s.slug !== "servers")
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
                Servers & Computing
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                High-Performance Servers, Storage &{" "}
                <span className="text-gradient">Data Protection</span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl">
                Enterprise compute, storage and backup infrastructure
                engineered for continuous operations — from HPE, Dell and
                Cisco, deployed and supported nationwide.
              </p>

              {/* Trust chips */}
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {[
                  { icon: ShieldCheck, label: "24/7 hardware SLA" },
                  { icon: Wrench, label: "4-hour part replacement" },
                  { icon: Users, label: "100+ engineers" },
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
                    Request Server Quote
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
                  label: "Hardware Support",
                  icon: ShieldCheck,
                },
                {
                  value: "4 hrs",
                  label: "Part Replacement",
                  icon: Wrench,
                },
                {
                  value: "HPE · Dell",
                  label: "Certified Stacks",
                  icon: Server,
                },
                { value: "100+", label: "Engineers", icon: Cpu },
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
            Enterprise{" "}
            <span className="text-gradient">Compute Portfolio</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            From rack servers to storage arrays — we cover the entire
            infrastructure stack.
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

      {/* ═══ STORAGE DEEP DIVE ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Storage Solutions
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Modern <span className="text-gradient">Storage & Backup</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Tiered storage, backup appliances and disaster recovery
              orchestration.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {storageItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
              >
                <h3 className="font-display text-base font-semibold">
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

      {/* ═══ VIRTUALIZATION & CLOUD ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Virtualization & Cloud
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Modern{" "}
            <span className="text-gradient">Workload Platforms</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Virtualization, containers and hybrid cloud integration for agility
            and scale.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {virtualizationItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="font-display text-base font-semibold">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ VENDOR PARTNERS (with logos) ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Technology Alliances
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Certified{" "}
              <span className="text-gradient">Server & Storage Partners</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              We design and support solutions from the world&apos;s leading
              enterprise vendors.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4">
            {serverPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} — server and storage partner`}
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

      {/* ═══ SLA FOR HARDWARE ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            SLA Cover
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Hardware Support{" "}
            <span className="text-gradient">Commitments</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Contractual response and resolution times for your critical
            infrastructure.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, label: "Initial Response", value: "30 minutes" },
            {
              icon: Wrench,
              label: "Part Replacement",
              value: "4 working hours",
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
      </section>

      {/* ═══ DELIVERY LIFECYCLE ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Delivery Lifecycle
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              From Assessment to{" "}
              <span className="text-gradient">Managed Support</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              A disciplined methodology that ensures your infrastructure is
              built right and stays reliable.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
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
            Vendor-neutral engineering, disciplined delivery, and contractual
            accountability.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Certified Engineers",
              desc: "HPE, Dell, Cisco and Red Hat-trained engineers across compute, storage and virtualization.",
            },
            {
              icon: Target,
              title: "Vendor-Neutral Sizing",
              desc: "We recommend the right fit — not the most expensive — based on workload, budget and growth.",
            },
            {
              icon: TrendingUp,
              title: "Full Lifecycle",
              desc: "From workload assessment to spare-parts-backed SLA support, we stay with you end-to-end.",
            },
            {
              icon: Award,
              title: "SLA-Backed",
              desc: "30-minute response, 4-hour part replacement, 24/7/365 — contractually guaranteed.",
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
              Common questions about servers, storage, virtualization and SLA
              coverage.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {serversFaqs.map((faq, index) => (
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
            Servers are one piece of our end-to-end IT infrastructure
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
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Let&apos;s assess your compute, storage and backup needs — and
              deliver a solution with a 30-minute SLA guarantee.
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