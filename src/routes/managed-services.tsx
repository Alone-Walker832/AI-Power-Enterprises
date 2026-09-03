import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Settings,
  Headset,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Wrench,
  MapPin,
  Zap,
  Award,
  Layers,
  HardDrive,
  Cloud,
  Lock,
  Globe,
  Activity,
  FileCheck,
  Users,
  Briefcase,
  BarChart,
  LifeBuoy,
  Monitor,
  Server,
  Database,
  Network,
  Cpu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { company, partners, managedServices } from "@/data/companyData";

export const Route = createFileRoute("/managed-services")({
  head: () => ({
    meta: [
      { title: "Managed IT Services & Technical Support | AI Power Enterprises" },
      {
        name: "description",
        content:
          "24/7 helpdesk, incident management, preventive maintenance, resident engineering, and SLA‑backed IT support across Pakistan.",
      },
      { property: "og:title", content: "Managed IT Services | AI Power Enterprises" },
      {
        property: "og:description",
        content:
          "Comprehensive managed services: helpdesk, incident/problem management, proactive maintenance, and technical consultancy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ManagedServicesPage,
});

// ─── Capabilities Data ──────────────────────────────────────────
const capabilities = [
  {
    icon: Headset,
    title: "24/7 Helpdesk & Call Management",
    description:
      "Centralised support for service requests, incidents, and technical issues – always available.",
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
      "Dedicated on‑site engineers for continuous support, maintenance, and technical assistance.",
  },
  {
    icon: Briefcase,
    title: "Technical Consultancy",
    description:
      "Expert advice, architecture planning, technology roadmaps, and knowledge transfer.",
  },
];

// ─── Service Components ─────────────────────────────────────────
const serviceComponents = [
  {
    icon: Monitor,
    title: "Infrastructure Monitoring",
    desc: "Real‑time monitoring of servers, networks, and storage with proactive alerts.",
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
    desc: "Enterprise application maintenance and user support for FMS, EAM, ERP, etc.",
  },
];

// ─── Implementation Steps ────────────────────────────────────────
const implementationSteps = [
  { step: "01", title: "Assessment", text: "Review current environment, pain points, and SLAs." },
  { step: "02", title: "Design", text: "Define service scope, response times, and escalation paths." },
  { step: "03", title: "Onboarding", text: "Setup monitoring, ticketing, and knowledge transfer." },
  { step: "04", title: "Operations", text: "24/7 support, incident management, and reporting." },
  { step: "05", title: "Improvement", text: "Continuous service reviews and optimisation." },
];

// ─── SLA for Managed Services ────────────────────────────────────
const slaManaged = [
  { icon: Clock, value: "30 min", label: "Initial Response" },
  { icon: Wrench, value: "4 hrs", label: "Part Replacement" },
  { icon: Headset, value: "24/7 x 365", label: "Support Coverage" },
  { icon: MapPin, value: "8 hubs", label: "Onsite Reach" },
];

// ─── Partners (filter for managed services) ────────────────────
const managedPartners = partners.filter(p =>
  ["Microsoft", "Red Hat", "Hewlett Packard Enterprise", "Dell Technologies"].includes(p.name)
);

export default function ManagedServicesPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--primary)_0%,_transparent_60%)] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div style={{ opacity }} className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold uppercase tracking-widest">
                <Settings className="mr-1.5 size-3.5" />
                Managed IT Services
              </Badge>
              <h1 className="font-display text-4xl font-bold text-hero-foreground sm:text-5xl lg:text-6xl leading-tight">
                End‑to‑End Managed Services &{" "}
                <span className="text-gradient">Technical Operations</span>
              </h1>
              <p className="text-lg text-hero-muted sm:text-xl max-w-xl">
                24/7 helpdesk, incident management, preventive maintenance, and resident engineering –
                backed by a contractual SLA and delivered nationwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow-ring">
                  <Link to="/contact" hash="request">
                    Request Managed Services Quote
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10"
                >
                  <Link to="/sla">View SLA Details</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                {managedPartners.slice(0, 3).map((partner) => (
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
                { value: "24/7", label: "Support Availability", icon: Headset },
                { value: "30 min", label: "Response Time", icon: Clock },
                { value: "8 hubs", label: "Nationwide Reach", icon: MapPin },
                { value: "100+", label: "IT Professionals", icon: Users },
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
            Complete <span className="text-gradient">Service Portfolio</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            From helpdesk to resident engineering – we cover your entire IT operations.
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

      {/* ─── SERVICE COMPONENTS ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Service Components</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Operational <span className="text-gradient">Services</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              The building blocks of our managed services delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceComponents.map((item) => (
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

      {/* ─── FULL SERVICE LIST ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Service Catalogue</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            What We <span className="text-gradient">Deliver</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            A comprehensive list of managed services available under our support framework.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {managedServices.map((service) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
              {service}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ─── SLA FOR MANAGED SERVICES ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">SLA Cover</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Support <span className="text-gradient">Commitments</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Contractual response and resolution times for your managed services.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {slaManaged.map((item) => (
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
          <Badge variant="secondary" className="mb-4">Onboarding Process</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            From Assessment to <span className="text-gradient">Continuous Improvement</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            A structured journey to get your IT operations managed effectively.
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
              Certified <span className="text-gradient">Ecosystem</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our expertise is backed by industry‑leading technology vendors.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {managedPartners.map((partner) => (
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
            <Headset className="mx-auto size-8 text-hero-accent" />
            <h2 className="mt-3 font-display text-2xl font-bold text-hero-foreground sm:text-3xl lg:text-4xl">
              Ready to Outsource Your IT Operations?
            </h2>
            <p className="mt-3 text-sm text-hero-muted">
              Let's define a managed services package that fits your operational needs and budget –
              with a 30‑minute SLA guarantee.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring">
                <Link to="/contact" hash="request">
                  Get a Managed Services Quote
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