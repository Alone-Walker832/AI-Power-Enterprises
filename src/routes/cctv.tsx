import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
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
  Zap,
  Award,
  Layers,
  Box,
  FolderArchive,
  Gauge,
  Cpu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { company } from "@/data/companyData";

export const Route = createFileRoute("/cctv")({
  head: () => ({
    meta: [
      { title: "IP CCTV Surveillance & Security Systems | AI Power Enterprises" },
      {
        name: "description",
        content:
          "IP CCTV design, site assessment, network video transmission, storage, command rooms and preventive maintenance for enterprise sites across Pakistan.",
      },
      { property: "og:title", content: "IP CCTV Surveillance Systems | AI Power Enterprises" },
      {
        property: "og:description",
        content:
          "End-to-end IP surveillance: design, deployment, centralized command rooms and 24/7 SLA maintenance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CctvPage,
});

// ─── Capabilities Data ──────────────────────────────────────────
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
    icon: ShieldCheck,
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

// ─── Security Components ─────────────────────────────────────────
const securityComponents = [
  {
    icon: Camera,
    title: "IP Cameras",
    desc: "Fixed, dome, PTZ and thermal cameras – indoor and outdoor – with night vision and WDR.",
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

// ─── Implementation Steps ────────────────────────────────────────
const implementationSteps = [
  { step: "01", title: "Site Survey", text: "Site walk, camera placement, lighting and network assessment." },
  { step: "02", title: "Design & BOM", text: "Detailed design, camera specs, switch ports, storage sizing and cabling plan." },
  { step: "03", title: "Installation", text: "Camera mounting, cabling, switch configuration and network integration." },
  { step: "04", title: "Commissioning", text: "System testing, camera calibration, storage verification and handover." },
  { step: "05", title: "Managed Support", text: "24/7 monitoring, preventive maintenance, SLA-backed response." },
];

// ─── SLA for CCTV ────────────────────────────────────────────────
const slaCctv = [
  { icon: Clock, value: "30 min", label: "Response Time" },
  { icon: Wrench, value: "4 hrs", label: "Spare Part Replacement" },
  { icon: Headset, value: "24/7 x 365", label: "Support Coverage" },
  { icon: MapPin, value: "8 hubs", label: "Nationwide Reach" },
];

// ─── Vendor Partners (CCTV) ──────────────────────────────────────
const cctvPartners = [
  { name: "Hikvision", badge: "Authorized Partner" },
  { name: "Dahua", badge: "Authorized Partner" },
  { name: "Axis Communications", badge: "Technology Partner" },
  { name: "Bosch Security", badge: "Technology Partner" },
];

export default function CctvPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_60%)] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div style={{ opacity }} className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold uppercase tracking-widest">
                <Cctv className="mr-1.5 size-3.5" />
                CCTV & Surveillance
              </Badge>
              <h1 className="font-display text-4xl font-bold text-hero-foreground sm:text-5xl lg:text-6xl leading-tight">
                Enterprise IP CCTV Surveillance,{" "}
                <span className="text-gradient">Designed & Maintained</span>
              </h1>
              <p className="text-lg text-hero-muted sm:text-xl max-w-xl">
                End-to-end IP surveillance from site assessment to command room – with 24/7
                preventive maintenance and SLA-backed support nationwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow-ring">
                  <Link to="/contact" hash="request">
                    Request CCTV Survey
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10"
                >
                  <Link to="/sla">SLA Support Details</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                {cctvPartners.map((partner) => (
                  <span
                    key={partner.name}
                    className="rounded-full border border-hero-border/60 bg-hero-foreground/5 px-3 py-1 text-xs font-medium text-hero-foreground backdrop-blur-sm"
                  >
                    {partner.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right – Animated Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "End-to-end", label: "Design to command room", icon: Camera },
                { value: "24/7 x 365", label: "Maintenance cover", icon: ShieldCheck },
                { value: "8 hubs", label: "Nationwide install", icon: MapPin },
                { value: "30 min", label: "SLA response", icon: Clock },
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
                  <p className="mt-3 font-display text-2xl font-bold text-hero-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-hero-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Capabilities</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Complete <span className="text-gradient">Surveillance Stack</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            From site assessment to command room – we cover every layer of the surveillance pipeline.
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

      {/* ─── SECURITY COMPONENTS ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Security Components</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              End‑to‑End <span className="text-gradient">Surveillance Hardware & Software</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cameras, networking, storage and management – all integrated.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {securityComponents.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all"
              >
                <item.icon className="size-6 text-primary" />
                <h4 className="mt-2 font-display text-base font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTEGRATED SECURITY ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Integrated Security</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Unified <span className="text-gradient">Security & IT Infrastructure</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            CCTV seamlessly integrates with your network, access control and IT management systems.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {[
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
              desc: "Single VMS for all cameras, with real‑time alerts and incident playback.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <item.icon className="mt-0.5 size-6 text-primary" />
              <div>
                <h4 className="font-display text-base font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SLA FOR CCTV ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">SLA Cover</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Surveillance Support <span className="text-gradient">Commitments</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Contractual response and maintenance for your CCTV systems.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {slaCctv.map((item) => (
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
        </div>
      </section>

      {/* ─── IMPLEMENTATION ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Implementation</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            From Survey to <span className="text-gradient">Managed Support</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            A structured methodology ensures your surveillance system is deployed right and stays reliable.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {implementationSteps.map((item) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all"
            >
              <span className="font-display text-sm font-bold text-primary">{item.step}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Technology Partners</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Certified <span className="text-gradient">Security Vendors</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              We work with leading global brands to deliver enterprise-grade surveillance.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {cctvPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center rounded-xl border border-border bg-card px-8 py-6 shadow-sm hover:shadow-lg transition-all min-w-[150px]"
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

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="hero-surface relative overflow-hidden rounded-2xl border border-hero-border px-6 py-12 text-center sm:px-10">
          <div className="grid-pattern absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <Cctv className="mx-auto size-8 text-hero-accent" />
            <h2 className="mt-3 font-display text-2xl font-bold text-hero-foreground sm:text-3xl lg:text-4xl">
              Ready to Secure Your Site?
            </h2>
            <p className="mt-3 text-sm text-hero-muted">
              Let's design and deploy a surveillance system that covers every angle – with SLA-backed
              maintenance and response.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring">
                <Link to="/contact" hash="request">
                  Request a Survey
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