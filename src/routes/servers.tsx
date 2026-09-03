import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Server,
  Database,
  HardDrive,
  Layers,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Zap,
  Clock,
  Wrench,
  Headset,
  MapPin,
  Award,
  Activity,
  BookOpen,
  Briefcase,
  Settings,
  Box,
  FolderArchive,
  Network,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { partners, company } from "@/data/companyData";

export const Route = createFileRoute("/servers")({
  head: () => ({
    meta: [
      { title: "Enterprise Servers & Storage Solutions | AI Power Enterprises" },
      {
        name: "description",
        content:
          "Enterprise servers, blade systems, SAN/NAS storage and backup infrastructure from HPE, Dell and Cisco — designed, deployed and supported nationwide in Pakistan.",
      },
      { property: "og:title", content: "Enterprise Servers & Storage | AI Power Enterprises" },
      {
        property: "og:description",
        content:
          "High-performance servers, blades, unified compute, SAN & NAS storage and backup and recovery infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServersPage,
});

// ─── Capabilities Data ──────────────────────────────────────────
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

// ─── Storage Deep Dive ──────────────────────────────────────────
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

// ─── Virtualization & Cloud ─────────────────────────────────────
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

// ─── Delivery Lifecycle ──────────────────────────────────────────
const lifecycle = [
  { step: "01", title: "Workload Assessment", text: "Profile compute, memory, IOPS and growth patterns." },
  { step: "02", title: "Sizing & BOM", text: "Vendor-neutral configuration with cost modeling and TCO analysis." },
  { step: "03", title: "Deployment", text: "Racking, cabling, firmware updates and cluster build." },
  { step: "04", title: "Managed Support", text: "Monitoring, preventive maintenance, reporting and SLA-backed support." },
];

// ─── Vendor Partners (filter from global partners) ──────────────
const serverPartners = partners.filter(p =>
  ["Hewlett Packard Enterprise", "Dell Technologies", "Cisco Systems", "Red Hat"].includes(p.name)
);

export default function ServersPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-16 lg:py-24"
      >
        <div className="grid-pattern absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--primary)_0%,_transparent_60%)] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div style={{ opacity }} className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold uppercase tracking-widest">
                <Server className="mr-1.5 size-3.5" />
                Servers & Computing
              </Badge>
              <h1 className="font-display text-4xl font-bold text-hero-foreground sm:text-5xl lg:text-6xl leading-tight">
                High-Performance Servers, Storage &{" "}
                <span className="text-gradient">Data Protection</span>
              </h1>
              <p className="text-lg text-hero-muted sm:text-xl max-w-xl">
                Enterprise compute, storage and backup infrastructure engineered for continuous
                operations – from HPE, Dell and Cisco, deployed and supported nationwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow-ring">
                  <Link to="/contact" hash="request">
                    Request Server Quote
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10"
                >
                  <Link to="/sla">View SLA Cover</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                {serverPartners.map((partner) => (
                  <span
                    key={partner.name}
                    className="rounded-full border border-hero-border/60 bg-hero-foreground/5 px-3 py-1 text-xs font-medium text-hero-foreground backdrop-blur-sm"
                  >
                    {partner.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right – Animated Stats with a server-themed visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "24/7 x 365", label: "Hardware Support", icon: ShieldCheck },
                { value: "4 hrs", label: "Part Replacement", icon: Wrench },
                { value: "HPE / Dell", label: "Certified Stacks", icon: Server },
                { value: "100+", label: "Engineers", icon: Cpu },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center rounded-2xl border border-hero-border bg-hero-foreground/5 p-6 backdrop-blur-sm"
                >
                  <stat.icon className="size-8 text-hero-accent" />
                  <p className="mt-3 font-display text-3xl font-bold text-hero-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-hero-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating glow */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Capabilities</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Enterprise <span className="text-gradient">Compute Portfolio</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            From rack servers to storage arrays – we cover the entire infrastructure stack.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="glass-card h-full border border-border/60 shadow-sm hover:shadow-lg transition-all hover:border-primary/30">
                <CardHeader>
                  <item.icon className="size-6 text-primary" aria-hidden="true" />
                  <CardTitle className="font-display text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── STORAGE DEEP DIVE ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Storage Solutions</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Modern <span className="text-gradient">Storage & Backup</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tiered storage, backup appliances and disaster recovery orchestration.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {storageItems.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="font-display text-base font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIRTUALIZATION & CLOUD ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Virtualization & Cloud</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Modern <span className="text-gradient">Workload Platforms</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Virtualization, containers and hybrid cloud integration for agility and scale.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {virtualizationItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all"
            >
              <h4 className="font-display text-base font-semibold">{item.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── VENDOR PARTNERS ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Technology Alliances</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Certified <span className="text-gradient">Server & Storage Partners</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              We design and support solutions from the world’s leading enterprise vendors.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {serverPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center rounded-xl border border-border bg-card px-8 py-6 shadow-sm hover:shadow-lg transition-all min-w-[160px]"
              >
                <span className="font-display text-xl font-bold">{partner.name}</span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {partner.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SLA FOR HARDWARE ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">SLA Cover</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Hardware Support <span className="text-gradient">Commitments</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Contractual response and resolution times for your critical infrastructure.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, label: "Initial Response", value: "30 minutes" },
            { icon: Wrench, label: "Part Replacement", value: "4 working hours" },
            { icon: Headset, label: "Coverage", value: "24/7 x 365" },
            { icon: MapPin, label: "Onsite Reach", value: "8 nationwide hubs" },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-border bg-card p-5 text-center shadow-sm"
            >
              <item.icon className="mx-auto size-6 text-primary" />
              <p className="mt-2 font-display text-2xl font-bold">{item.value}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── DELIVERY LIFECYCLE ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Delivery Lifecycle</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              From Assessment to <span className="text-gradient">Managed Support</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              A disciplined methodology that ensures your infrastructure is built right and stays reliable.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all"
              >
                <span className="font-display text-sm font-bold text-primary">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="hero-surface relative overflow-hidden rounded-2xl border border-hero-border px-6 py-12 text-center sm:px-10">
          <div className="grid-pattern absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <Server className="mx-auto size-8 text-hero-accent" />
            <h2 className="mt-3 font-display text-2xl font-bold text-hero-foreground sm:text-3xl lg:text-4xl">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="mt-3 text-sm text-hero-muted">
              Let's assess your compute, storage and backup needs – and deliver a solution with a
              30-minute SLA guarantee.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring">
                <Link to="/contact" hash="request">
                  Request a Quote
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10">
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-hero-muted/60">
              Call us: <a href={`tel:${company.phone}`} className="text-hero-accent hover:underline">{company.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}