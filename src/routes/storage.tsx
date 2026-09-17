import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  HardDrive,
  Database,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Headset,
  MapPin,
  Clock,
  Layers,
  Server,
  Archive,
  RefreshCw,
  Lock,
  Activity,
  PhoneCall,
  MessageCircle,
  Mail,
  Sparkles,
  Users,
  Target,
  TrendingUp,
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
const PAGE_PATH = "/storage";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE =
  "Enterprise Storage & Backup Solutions in Pakistan | SAN, NAS";
const PAGE_DESCRIPTION =
  "Enterprise storage & backup solutions in Pakistan — SAN, NAS, all-flash arrays, tape archival, replication and disaster recovery. Deployed and supported 24/7 nationwide.";
const PAGE_KEYWORDS = [
  "enterprise storage Pakistan",
  "SAN NAS solutions Karachi",
  "backup solutions Pakistan",
  "all-flash storage Karachi",
  "disaster recovery Pakistan",
  "storage area network Pakistan",
  "NAS storage Karachi",
  "ransomware protection Pakistan",
  "LTO tape archive Pakistan",
  "replication Pakistan",
  "storage AMC Pakistan",
  "24/7 storage support Karachi",
];

// ═══════════════════════════════════════════════════════════════════
// PAGE FAQS
// ═══════════════════════════════════════════════════════════════════
const storageFaqs = [
  {
    question: "What storage solutions do you provide in Pakistan?",
    answer:
      "We design and deploy Fibre Channel and iSCSI SAN, enterprise NAS (NFS/SMB/CIFS), all-flash and hybrid arrays, LTO tape archives, backup appliances, and disaster recovery infrastructure across Pakistan.",
  },
  {
    question: "Do you offer all-flash and hybrid storage arrays?",
    answer:
      "Yes. We supply NVMe all-flash arrays for databases and virtualization, plus hybrid SSD-cached arrays that balance performance and cost for mixed workloads.",
  },
  {
    question: "How do you protect against ransomware?",
    answer:
      "We implement immutable backups, air-gapped copies, disk and tape-based retention, and rapid recovery workflows — layered with data-at-rest encryption and key management.",
  },
  {
    question: "Do you support backup and disaster recovery?",
    answer:
      "Yes. We design RPO/RTO-aligned backup and disaster recovery strategies with replication, snapshots, automated failover, and documented recovery runbooks tested regularly.",
  },
  {
    question: "Which storage brands do you support?",
    answer:
      "We support HPE, Dell EMC, NetApp, Pure Storage and other enterprise storage platforms, along with Veeam and other backup software ecosystems.",
  },
  {
    question: "What is the SLA response time for storage hardware?",
    answer: `Our contractual SLA commitment is a 30-minute initial response, 24/7 × 365 coverage, with part replacement within 4 working hours and onsite intervention across 8 national hubs. Contact ${company.phone} for details.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 3 JSON-LD schemas (via companyData helpers)
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/storage")({
  head: () => {
    const storageService = services.find((s) => s.slug === "storage");
    const serviceLd = storageService ? serviceSchema(storageService) : null;
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Storage & Backup", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(storageFaqs);

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
          content: "Enterprise Storage & Backup Solutions — AI Power Enterprises",
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
  component: StoragePage,
});

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════
const capabilities = [
  {
    icon: Database,
    title: "SAN Storage Arrays",
    description:
      "Fibre Channel and iSCSI SAN with multi-path I/O, thin provisioning, snapshots and synchronous replication.",
  },
  {
    icon: HardDrive,
    title: "NAS & File Services",
    description:
      "High-availability NAS with NFS, SMB/CIFS, S3-compatible object storage and file-level tiering.",
  },
  {
    icon: Layers,
    title: "All-Flash & Hybrid Arrays",
    description:
      "NVMe all-flash performance tiers and hybrid arrays — right-sized IOPS, latency and capacity for each workload.",
  },
  {
    icon: Archive,
    title: "Tape & Long-Term Archive",
    description:
      "LTO tape libraries, air-gapped archives and immutable storage for regulatory retention.",
  },
  {
    icon: RefreshCw,
    title: "Replication & DR",
    description:
      "Sync/async replication, snapshots, automated failover and recovery runbooks for defined RPO/RTO.",
  },
  {
    icon: Lock,
    title: "Encryption & Compliance",
    description:
      "Data-at-rest encryption, key management, audit trails and compliance-aligned retention policies.",
  },
];

const tiers = [
  {
    title: "Tier 0 — All-Flash",
    desc: "NVMe storage for databases, virtualisation and IOPS-intensive workloads.",
  },
  {
    title: "Tier 1 — Hybrid",
    desc: "SSD-cached SAS arrays balancing performance and cost for mixed workloads.",
  },
  {
    title: "Tier 2 — Capacity",
    desc: "High-density SATA and NL-SAS storage for file shares and archives.",
  },
  {
    title: "Tier 3 — Archive & Tape",
    desc: "LTO tape and object storage for long-term retention and compliance.",
  },
];

const backupDrs = [
  {
    title: "Backup Appliances",
    desc: "Disk-based backup with deduplication, compression and cloud replication.",
  },
  {
    title: "Disaster Recovery",
    desc: "Orchestrated failover, DR testing and runbook documentation.",
  },
  {
    title: "Ransomware Protection",
    desc: "Immutable backups, air-gapped copies and rapid recovery workflows.",
  },
  {
    title: "Cloud Tiering",
    desc: "Azure, AWS and hybrid cloud cold-tier integration for cost optimisation.",
  },
];

const storagePartners = partners.filter((p) =>
  ["Hewlett Packard Enterprise", "Dell Technologies"].includes(p.name),
);

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function StoragePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const relatedServices = services.filter((s) =>
    ["servers", "datacenter", "managed-services"].includes(s.slug),
  );

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
                <HardDrive className="mr-1.5 size-3.5" aria-hidden="true" />
                Storage & Backup
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Enterprise Storage Built for{" "}
                <span className="text-gradient">Performance & Resilience</span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl">
                SAN, NAS, all-flash arrays and backup infrastructure —
                engineered for data integrity, disaster recovery and 24/7
                operations.
              </p>

              {/* Trust chips */}
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {[
                  { icon: ShieldCheck, label: "Ransomware-resistant" },
                  { icon: Layers, label: "Tiered storage strategy" },
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
                    Request Storage Assessment
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
                  label: "Storage Support",
                  icon: ShieldCheck,
                },
                { value: "Tiered", label: "Storage Strategy", icon: Layers },
                {
                  value: "4 hrs",
                  label: "Part Replacement",
                  icon: Wrench,
                },
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
            End-to-End <span className="text-gradient">Storage Portfolio</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            From IOPS-intensive databases to long-term archives — every
            workload covered.
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

      {/* ═══ STORAGE TIERS ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Storage Tiers
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Right Tier for{" "}
              <span className="text-gradient">Every Workload</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Cost-optimised tiering matched to performance, capacity and
              retention needs.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((item, idx) => (
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

      {/* ═══ BACKUP & DR ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Backup & DR
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Backup, Recover &{" "}
            <span className="text-gradient">Survive</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Ransomware-resistant backup, verified restores and disaster
            recovery orchestration.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {backupDrs.map((item, idx) => (
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

      {/* ═══ SLA COMMITMENTS ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              SLA Cover
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Storage{" "}
              <span className="text-gradient">Support Commitments</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Contractual response and resolution times for your critical
              storage infrastructure.
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

      {/* ═══ PARTNERS (with logos) ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Storage Platforms
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Enterprise <span className="text-gradient">Storage Vendors</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Multi-vendor expertise across leading enterprise storage platforms.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4">
          {storagePartners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} — storage partner`}
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
          {/* Additional storage-specific vendors (text badges) */}
          {["NetApp", "Pure Storage", "Veeam"].map((name) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <span className="font-display text-base font-bold text-foreground/80 sm:text-lg">
                {name}
              </span>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Storage Ecosystem
              </p>
            </div>
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
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Workload-aligned design, vendor-neutral sizing, and SLA-backed
              operations.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Certified Engineers",
                desc: "HPE, Dell EMC, NetApp and Veeam-trained engineers across SAN, NAS and backup platforms.",
              },
              {
                icon: Target,
                title: "Workload-Aligned",
                desc: "We map storage tier, IOPS and capacity to actual workload profiles — not marketing specs.",
              },
              {
                icon: TrendingUp,
                title: "Ransomware-Ready",
                desc: "Immutable backups, air-gapped copies and rapid recovery workflows designed into every deployment.",
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

      {/* ═══ FAQ ═══ */}
      <section className="mx-auto max-w-4xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Common questions about SAN, NAS, backup and disaster recovery.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {storageFaqs.map((faq, index) => (
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
      </section>

      {/* ═══ RELATED SERVICES ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Explore More
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Complete Your{" "}
              <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Storage works best with the right compute, data centre and
              managed services — explore all.
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
        </div>
      </section>

      {/* ═══ FINAL CTA + CONTACT STRIP ═══ */}
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
              Ready to Modernise Your Storage?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Get a storage assessment covering capacity, performance, backup
              and disaster recovery — with SLA-backed support.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="glow-ring w-full sm:w-auto"
              >
                <Link to="/contact" hash="request">
                  Request Storage Assessment
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