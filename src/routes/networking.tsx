import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Network,
  Wifi,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Server,
  Cable,
  Router,
Wrench,   // ✅ added
  Cpu, 
  Settings,
  MapPin,
  Clock,
  Headset,
  Zap,
  Award,
  Layers,
  HardDrive,
  Cloud,
  Lock,
  Globe,
  Activity,
  FileCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { company, partners } from "@/data/companyData";

export const Route = createFileRoute("/networking")({
  head: () => ({
    meta: [
      { title: "Enterprise Networking Solutions | AI Power Enterprises" },
      {
        name: "description",
        content:
          "Structured cabling, routing, switching, wireless, and network security – designed, deployed and supported nationwide in Pakistan.",
      },
      { property: "og:title", content: "Enterprise Networking | AI Power Enterprises" },
      {
        property: "og:description",
        content:
          "Passive & active network infrastructure, fibre-optic cabling, enterprise switching, Wi-Fi, firewalls and VPN.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NetworkingPage,
});

// ─── Capabilities Data ──────────────────────────────────────────
const capabilities = [
  {
    icon: Cable,
    title: "Structured Cabling",
    description:
      "Cat6, Cat6A and high-speed fibre-optic cabling with professional installation and testing.",
  },
  {
    icon: Server,
    title: "Data Centre Infrastructure",
    description:
      "Server rack planning, installation, cable management, cable trays and structured layouts.",
  },
  {
    icon: Layers,
    title: "Containment & Pathways",
    description:
      "Conduits, cable pathways, containment systems, patch panels and passive infrastructure.",
  },
  {
    icon: Router,
    title: "Routing & Switching",
    description:
      "Enterprise routing, core switching, distribution, and access-layer infrastructure.",
  },
  {
    icon: Wifi,
    title: "Wireless Networking",
    description:
      "Scalable corporate Wi-Fi with enterprise APs, controllers, secure authentication and centralised management.",
  },
  {
    icon: Lock,
    title: "Network Security",
    description:
      "Next‑gen firewalls, VPN gateways, secure network access, and threat management.",
  },
];

// ─── Components ──────────────────────────────────────────────────
const networkComponents = [
  {
    icon: Cable,
    title: "Copper & Fibre Cabling",
    desc: "Cat6, Cat6A, single‑mode and multi‑mode fibre – terminated and tested to standards.",
  },
  {
    icon: Server,
    title: "Racks & Enclosures",
    desc: "19-inch server racks, wall‑mount enclosures, cable management and cooling accessories.",
  },
  {
    icon: Cpu,
    title: "Switches & Routers",
    desc: "Cisco, HPE Aruba, and Dell switches – from access to core with redundancy.",
  },
  {
    icon: Wifi,
    title: "Wireless Access Points",
    desc: "Indoor/outdoor APs with centralised controllers and seamless roaming.",
  },
];

// ─── Implementation Steps ────────────────────────────────────────
const implementationSteps = [
  { step: "01", title: "Site Assessment", text: "Survey physical layout, distance, and existing infrastructure." },
  { step: "02", title: "Design & BOM", text: "Detailed cabling plan, switch port count, fibre runs, and equipment list." },
  { step: "03", title: "Installation", text: "Cable pulling, termination, rack mounting, and switch configuration." },
  { step: "04", title: "Testing & Commissioning", text: "Fluke testing, performance verification, and handover." },
  { step: "05", title: "Managed Support", text: "24/7 monitoring, preventive maintenance, and SLA‑backed response." },
];

// ─── SLA for Networking ──────────────────────────────────────────
const slaNetwork = [
  { icon: Clock, value: "30 min", label: "Response Time" },
  { icon: Wrench, value: "4 hrs", label: "Spare Part Replacement" },
  { icon: Headset, value: "24/7 x 365", label: "Support Coverage" },
  { icon: MapPin, value: "8 hubs", label: "Nationwide Reach" },
];

// ─── Partners (filter for networking) ──────────────────────────
const networkingPartners = partners.filter(p =>
  ["Cisco Systems", "Hewlett Packard Enterprise", "Red Hat", "Microsoft"].includes(p.name)
);

export default function NetworkingPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_60%)] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div style={{ opacity }} className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold uppercase tracking-widest">
                <Network className="mr-1.5 size-3.5" />
                Network Infrastructure
              </Badge>
              <h1 className="font-display text-4xl font-bold text-hero-foreground sm:text-5xl lg:text-6xl leading-tight">
                Enterprise Networking – <span className="text-gradient">Passive & Active</span>
              </h1>
              <p className="text-lg text-hero-muted sm:text-xl max-w-xl">
                Structured cabling through to core switching, wireless and perimeter security –
                designed, deployed and supported nationwide with a 30‑minute SLA.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow-ring">
                  <Link to="/contact" hash="request">
                    Request Network Assessment
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
                {networkingPartners.slice(0, 3).map((partner) => (
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
                { value: "99.99%", label: "Uptime target", icon: Zap },
                { value: "10 Gbps", label: "Fibre backbone", icon: Cable },
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

        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Capabilities</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Complete <span className="text-gradient">Network Stack</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            From passive cabling to active security – we cover every layer.
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

      {/* ─── NETWORK COMPONENTS ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Components</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Passive & Active <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              All the hardware and cabling that forms the foundation of your network.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {networkComponents.map((item) => (
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

      {/* ─── NETWORK SECURITY ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Security</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Perimeter & <span className="text-gradient">Internal Security</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Protect your network with layered security that spans edge to endpoint.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {[
            {
              icon: Lock,
              title: "Next‑Gen Firewalls",
              desc: "App‑aware, identity‑based policies with threat prevention and SSL inspection.",
            },
            {
              icon: Globe,
              title: "VPN & Secure Remote Access",
              desc: "Site‑to‑site and client VPN with multi‑factor authentication and encryption.",
            },
            {
              icon: ShieldCheck,
              title: "Network Access Control",
              desc: "802.1X, device profiling, and posture assessment for endpoint security.",
            },
            {
              icon: Activity,
              title: "Monitoring & Threat Detection",
              desc: "Real‑time traffic analysis, anomaly detection, and incident response.",
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

      {/* ─── SLA FOR NETWORKING ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">SLA Cover</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Network Support <span className="text-gradient">Commitments</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Contractual response and maintenance for your network infrastructure.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {slaNetwork.map((item) => (
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
            From Assessment to <span className="text-gradient">Managed Support</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            A methodical approach that ensures your network is built right and stays reliable.
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
              Certified <span className="text-gradient">Networking Vendors</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              We work with industry leaders to deliver enterprise‑grade networking.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {networkingPartners.map((partner) => (
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
            <Network className="mx-auto size-8 text-hero-accent" />
            <h2 className="mt-3 font-display text-2xl font-bold text-hero-foreground sm:text-3xl lg:text-4xl">
              Ready to Build a Reliable Network?
            </h2>
            <p className="mt-3 text-sm text-hero-muted">
              Let's assess your cabling, switching, wireless, and security needs – with a 30‑minute
              SLA guarantee.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring">
                <Link to="/contact" hash="request">
                  Request Assessment
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