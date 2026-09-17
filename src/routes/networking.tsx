import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Network,
  Wifi,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Server,
  Cable,
  Router,
  Wrench,
  Cpu,
  MapPin,
  Clock,
  Headset,
  Zap,
  Layers,
  Lock,
  Globe,
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
  company,
  partners,
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
const PAGE_PATH = "/networking";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE =
  "Enterprise Networking Solutions in Pakistan | LAN, WAN, Wi-Fi";
const PAGE_DESCRIPTION =
  "Structured cabling (Cat6/Cat6A/fibre), enterprise routing & switching, wireless, next-gen firewalls and VPN — designed, deployed and supported nationwide in Pakistan.";
const PAGE_KEYWORDS = [
  "networking solutions Pakistan",
  "structured cabling Karachi",
  "enterprise Wi-Fi deployment",
  "Cisco networking Pakistan",
  "HPE Aruba networking Karachi",
  "next-gen firewall Pakistan",
  "VPN solutions Karachi",
  "LAN WAN solutions Pakistan",
  "fibre optic cabling Karachi",
  "data centre networking Pakistan",
  "network AMC Pakistan",
  "24/7 network support Karachi",
];

// ═══════════════════════════════════════════════════════════════════
// PAGE FAQS
// ═══════════════════════════════════════════════════════════════════
const networkingFaqs = [
  {
    question: "Do you install structured cabling in Pakistan?",
    answer:
      "Yes. We install Cat6, Cat6A, single-mode and multi-mode fibre-optic cabling with Fluke-certified testing, structured cable management, patch panels, and full documentation across Pakistan.",
  },
  {
    question: "Which networking vendors do you support?",
    answer:
      "We design, deploy and support Cisco, HPE Aruba, Dell Networking, and Fortinet infrastructure — including access, distribution and core-layer switching, wireless controllers and next-gen firewalls.",
  },
  {
    question: "Do you provide enterprise Wi-Fi deployment?",
    answer:
      "Yes. We design and deploy scalable corporate Wi-Fi with enterprise access points, centralised controllers, 802.1X authentication, seamless roaming, and site surveys for coverage planning.",
  },
  {
    question: "What network security services do you provide?",
    answer:
      "We deploy next-gen firewalls with app-aware policies, site-to-site and client VPN, network access control (802.1X), and 24/7 monitoring with anomaly detection.",
  },
  {
    question: "What is the SLA response time for network support?",
    answer:
      "Our contractual SLA commitment is a 30-minute initial response, 24/7 × 365 coverage, with part replacement within 4 working hours and onsite intervention across our 8 national hubs.",
  },
  {
    question: "Can you support existing networks not installed by you?",
    answer: `Yes. We support multi-vendor environments including Cisco, HPE, Dell and Fortinet — regardless of who originally deployed the infrastructure. Contact ${company.phone} for an audit.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 3 JSON-LD schemas
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/networking")({
  head: () => {
    const networkService = services.find((s) => s.slug === "networking");
    const serviceLd = networkService ? serviceSchema(networkService) : null;
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Networking", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(networkingFaqs);

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
          content: "Enterprise Networking Solutions — AI Power Enterprises",
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
  component: NetworkingPage,
});

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════
const capabilities = [
  {
    icon: Cable,
    title: "Structured Cabling",
    description:
      "Cat6, Cat6A and high-speed fibre-optic cabling with professional installation and Fluke-certified testing.",
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
      "Next-gen firewalls, VPN gateways, secure network access, and threat management.",
  },
];

const networkComponents = [
  {
    icon: Cable,
    title: "Copper & Fibre Cabling",
    desc: "Cat6, Cat6A, single-mode and multi-mode fibre — terminated and tested to standards.",
  },
  {
    icon: Server,
    title: "Racks & Enclosures",
    desc: "19-inch server racks, wall-mount enclosures, cable management and cooling accessories.",
  },
  {
    icon: Cpu,
    title: "Switches & Routers",
    desc: "Cisco, HPE Aruba and Dell switches — from access to core with full redundancy.",
  },
  {
    icon: Wifi,
    title: "Wireless Access Points",
    desc: "Indoor/outdoor APs with centralised controllers and seamless roaming.",
  },
];

const securityItems = [
  {
    icon: Lock,
    title: "Next-Gen Firewalls",
    desc: "App-aware, identity-based policies with threat prevention and SSL inspection.",
  },
  {
    icon: Globe,
    title: "VPN & Secure Remote Access",
    desc: "Site-to-site and client VPN with multi-factor authentication and encryption.",
  },
  {
    icon: ShieldCheck,
    title: "Network Access Control",
    desc: "802.1X, device profiling, and posture assessment for endpoint security.",
  },
  {
    icon: Activity,
    title: "Monitoring & Threat Detection",
    desc: "Real-time traffic analysis, anomaly detection, and incident response.",
  },
];

const implementationSteps = [
  {
    step: "01",
    title: "Site Assessment",
    text: "Survey physical layout, distance, and existing infrastructure.",
  },
  {
    step: "02",
    title: "Design & BOM",
    text: "Detailed cabling plan, switch port count, fibre runs, and equipment list.",
  },
  {
    step: "03",
    title: "Installation",
    text: "Cable pulling, termination, rack mounting, and switch configuration.",
  },
  {
    step: "04",
    title: "Testing & Commissioning",
    text: "Fluke testing, performance verification, and documentation handover.",
  },
  {
    step: "05",
    title: "Managed Support",
    text: "24/7 monitoring, preventive maintenance, and SLA-backed response.",
  },
];

const networkingPartners = partners.filter((p) =>
  [
    "Cisco Systems",
    "Hewlett Packard Enterprise",
    "Red Hat",
    "Microsoft",
  ].includes(p.name),
);

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function NetworkingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const relatedServices = services
    .filter((s) => s.slug !== "networking")
    .slice(0, 3);

  return (
    <>
      {/* ═══ HERO (compact top) ═══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-14"
      >
        <div
          className="grid-pattern absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_60%)] opacity-10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              style={{ opacity }}
              className="space-y-5 text-center sm:space-y-6 lg:text-left"
            >
              <Badge className="border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                <Network className="mr-1.5 size-3.5" aria-hidden="true" />
                Network Infrastructure
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Enterprise Networking —{" "}
                <span className="text-gradient">Passive & Active</span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl">
                Structured cabling through to core switching, wireless and
                perimeter security — designed, deployed and supported
                nationwide with a 30-minute SLA.
              </p>

              {/* Trust chips */}
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {[
                  { icon: Cable, label: "Fluke-certified cabling" },
                  { icon: ShieldCheck, label: "Next-gen firewall" },
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
                    Request Network Assessment
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
                { value: "10 Gbps", label: "Fibre backbone", icon: Cable },
                {
                  value: "30 min",
                  label: "SLA response",
                  icon: Clock,
                },
                {
                  value: "24/7 × 365",
                  label: "Network support",
                  icon: Headset,
                },
                { value: "8 hubs", label: "Nationwide install", icon: MapPin },
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
            Complete <span className="text-gradient">Network Stack</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            From passive cabling to active security — we cover every layer.
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

      {/* ═══ NETWORK COMPONENTS ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Components
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Passive & Active{" "}
              <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              All the hardware and cabling that forms the foundation of your
              network.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {networkComponents.map((item, idx) => (
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

      {/* ═══ NETWORK SECURITY ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Security
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Perimeter &{" "}
            <span className="text-gradient">Internal Security</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Protect your network with layered security that spans edge to
            endpoint.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2">
          {securityItems.map((item, idx) => (
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
                <h3 className="font-display text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ SLA FOR NETWORKING ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              SLA Cover
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Network Support{" "}
              <span className="text-gradient">Commitments</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Contractual response and maintenance for your network
              infrastructure.
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
            Implementation
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            From Assessment to{" "}
            <span className="text-gradient">Managed Support</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A methodical approach that ensures your network is built right and
            stays reliable.
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
              Certified{" "}
              <span className="text-gradient">Networking Vendors</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              We work with industry leaders to deliver enterprise-grade
              networking.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4">
            {networkingPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} — networking partner`}
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
            Certified engineers, disciplined delivery, and contractual
            accountability.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Certified Engineers",
              desc: "Cisco, HPE Aruba and Fortinet-trained engineers across passive and active infrastructure.",
            },
            {
              icon: Target,
              title: "Design-Led Approach",
              desc: "Every deployment starts with a site survey, capacity plan, and rack-level bill of materials.",
            },
            {
              icon: TrendingUp,
              title: "Scalable Architecture",
              desc: "Networks designed for growth — from a single floor to campus-wide, multi-site deployments.",
            },
            {
              icon: Award,
              title: "SLA-Backed Support",
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
              Common questions about cabling, switching, wireless, security and
              SLA coverage.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {networkingFaqs.map((faq, index) => (
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
            Networking is one piece of our end-to-end IT infrastructure
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
              Ready to Build a Reliable Network?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Let&apos;s assess your cabling, switching, wireless, and security
              needs — with a 30-minute SLA guarantee.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="glow-ring w-full sm:w-auto"
              >
                <Link to="/contact" hash="request">
                  Request Assessment
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