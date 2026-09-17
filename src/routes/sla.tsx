import { createFileRoute, Link } from "@tanstack/react-router";
import hpePartnership from "@/assets/partners/hpe-partnership.jpeg";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Clock,
  Headset,
  LifeBuoy,
  Wrench,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  BarChart,
  Target,
  Award,
  MapPin,
  Calendar,
  Activity,
  FileCheck,
  Gauge,
  Sparkles,
  MessageCircle,
  Mail,
  ChevronRight,
  Building2,
  Factory,
  HeartPulse,
  Globe2,
  X as XIcon,
  Check,
  TrendingUp,
  Users,
  Zap,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  slaDeliverables,
  slaModels,
  slaParameters,
  company,
  siteConfig,
  services,
  hubs,
  partners,
  serviceSchema,
  breadcrumbSchema,
  faqPageSchema,
  whatsappLink,
  telLink,
} from "@/data/companyData";

// ═══════════════════════════════════════════════════════════════════
// PAGE-LEVEL SEO CONSTANTS
// ═══════════════════════════════════════════════════════════════════
const PAGE_PATH = "/sla";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE = "SLA-Based IT Support in Pakistan | 24/7 · 30-Min Response";
const PAGE_DESCRIPTION =
  "Contractual SLA support in Pakistan — 30-minute initial response, 4-working-hour part replacement, 24/7 × 365 coverage, onsite intervention and quarterly reporting.";
const PAGE_KEYWORDS = [
  "SLA support Pakistan",
  "24/7 IT support Karachi",
  "AMC services Pakistan",
  "SLA managed services",
  "30 minute SLA response",
  "mission critical IT support Pakistan",
  "onsite IT support Pakistan",
  "spare parts SLA Pakistan",
  "contractual IT support",
  "IT maintenance contract Pakistan",
  "enterprise SLA support",
  "business critical IT support",
];

// ═══════════════════════════════════════════════════════════════════
// PAGE-SPECIFIC FAQS
// ═══════════════════════════════════════════════════════════════════
const slaFaqs = [
  {
    question: "What is your SLA response time in Pakistan?",
    answer:
      "Our contractual commitment is a 30-minute initial response, 24 hours a day, 7 days a week, with part replacement within 4 working hours for covered infrastructure.",
  },
  {
    question: "Do you offer 24/7 SLA support?",
    answer:
      "Yes. Our Mission-Critical SLA provides 24/7 × 365 call management, priority onsite intervention, and a dedicated spare parts pool for environments that cannot tolerate downtime.",
  },
  {
    question: "Where do you provide onsite SLA intervention?",
    answer:
      "We provide onsite SLA support from our head office in Karachi and regional hubs in Islamabad and Lahore, with field coverage across Multan, Faisalabad, Peshawar, Gilgit and Quetta.",
  },
  {
    question: "What is covered under the SLA?",
    answer:
      "Coverage includes call management, problem analysis and diagnosis, corrective action plans, onsite hardware intervention, spare parts provision, preventive maintenance and quarterly service reporting.",
  },
  {
    question: "Can the SLA be customised for our environment?",
    answer:
      "Yes. Our Customer-Defined SLA model lets you tailor coverage windows, response times, spare parts strategy and reporting cadence to match your operational criticality and budget.",
  },
  {
    question: "How do we start an SLA engagement?",
    answer: `Contact our SLA desk at ${company.phone}, WhatsApp us at ${company.whatsapp}, or email ${company.emails.sales} to schedule a site assessment and scope discussion.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ROUTE DEFINITION — Full SEO + 3 JSON-LD schemas
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/sla")({
  head: () => {
    const slaService = services.find((s) => s.slug === "sla");
    const serviceLd = slaService ? serviceSchema(slaService) : null;
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "SLA Support", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(slaFaqs);

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
          content: "SLA-Based IT Support — AI Power Enterprises",
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
  component: SlaPage,
});

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function StatCard({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="flex flex-col items-center rounded-2xl border border-hero-border bg-hero-foreground/5 p-4 backdrop-blur-sm sm:p-6"
    >
      <Icon className="size-6 text-hero-accent sm:size-8" aria-hidden="true" />
      <p className="mt-2 font-display text-lg font-bold text-hero-foreground sm:mt-3 sm:text-2xl lg:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-center text-[10px] font-medium uppercase tracking-wider text-hero-muted sm:text-xs">
        {label}
      </p>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// DATA — Premium sections
// ═══════════════════════════════════════════════════════════════════
const slaSteps = [
  {
    icon: PhoneCall,
    label: "Call Management",
    desc: "24/7 centralised support for incidents and service requests.",
  },
  {
    icon: Activity,
    label: "Problem Diagnosis",
    desc: "Systematic identification of root causes and technical issues.",
  },
  {
    icon: FileCheck,
    label: "Action Plan",
    desc: "Defined corrective actions to restore service efficiently.",
  },
  {
    icon: Wrench,
    label: "Onsite Intervention",
    desc: "Deployment of technical personnel for repair and replacement.",
  },
  {
    icon: ShieldCheck,
    label: "Spare Parts",
    desc: "Access to replacement components for timely restoration.",
  },
  {
    icon: Calendar,
    label: "Preventive Maintenance",
    desc: "Scheduled health checks to reduce equipment failure.",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Banking & Financial Services",
    desc: "Branches, ATMs, core banking infrastructure and 24/7 uptime for regulated environments.",
  },
  {
    icon: Factory,
    title: "Industrial, Oil & Gas, FMCG",
    desc: "SCADA-adjacent compute, plant-floor networks and always-on infrastructure for production lines.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Hospitals",
    desc: "HIS, PACS, and critical medical systems that cannot afford unplanned downtime.",
  },
  {
    icon: Globe2,
    title: "Telecom & Public Sector",
    desc: "Network operations, data centres and distributed sites across Pakistan.",
  },
];

const slaCommitment = [
  {
    icon: Clock,
    title: "30-Minute Response",
    desc: "Initial acknowledgement and triage within 30 minutes of ticket logging, 24 hours a day.",
  },
  {
    icon: Wrench,
    title: "4-Hour Part Replacement",
    desc: "Replacement hardware deployed within 4 working hours for covered infrastructure.",
  },
  {
    icon: Users,
    title: "Named Engineers",
    desc: "Dedicated technical contacts who know your environment — not anonymous helpdesk agents.",
  },
  {
    icon: Zap,
    title: "Proactive Monitoring",
    desc: "Preventive health checks that catch failures before they impact operations.",
  },
  {
    icon: Lock,
    title: "Contractual Backing",
    desc: "Signed SLA with defined KPIs, escalation matrix and reporting cadence.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    desc: "Quarterly service reviews identifying performance trends and optimisation opportunities.",
  },
];

const comparisonRows = [
  {
    feature: "Coverage Window",
    standard: "Business hours only",
    sla: "24/7 × 365 contractual",
  },
  {
    feature: "Initial Response",
    standard: "Best effort",
    sla: "30 minutes guaranteed",
  },
  {
    feature: "Part Replacement",
    standard: "Ad-hoc, per incident",
    sla: "Within 4 working hours",
  },
  {
    feature: "Spare Parts",
    standard: "Procurement lead times",
    sla: "Dedicated / shared pool",
  },
  {
    feature: "Onsite Intervention",
    standard: "Scheduled at availability",
    sla: "Priority mobilisation",
  },
  {
    feature: "Preventive Maintenance",
    standard: "Reactive only",
    sla: "Scheduled health checks",
  },
  {
    feature: "Reporting",
    standard: "None",
    sla: "Quarterly service reviews",
  },
  {
    feature: "Escalation Path",
    standard: "Informal",
    sla: "Defined matrix with SLAs",
  },
];

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function SlaPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const slaIcons: LucideIcon[] = [Clock, LifeBuoy, Wrench, CheckCircle2];

  const relatedServices = services.filter((s) => s.slug !== "sla").slice(0, 3);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-14 sm:py-16 lg:py-9"
      >
        <div
          className="grid-pattern absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)_0%,_transparent_60%)] opacity-10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div style={{ opacity }} className="space-y-5 sm:space-y-6">
              <Badge className="border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                <Headset className="mr-1.5 size-3.5" aria-hidden="true" />
                SLA Managed Support
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Contractual SLA Support with a{" "}
                <span className="text-gradient">30-Minute Response</span>
              </h1>
              <p className="max-w-xl text-base text-hero-muted sm:text-lg lg:text-xl">
                Round-the-clock call management, onsite hardware intervention
                and spare parts availability — backed by measurable service
                parameters and quarterly reporting.
              </p>

              {/* Trust signals under hero copy */}
              <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm">
                {[
                  "24/7 × 365 Coverage",
                  "Signed SLA Contract",
                  "8 Nationwide Hubs",
                ].map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5">
                    <CheckCircle2
                      className="size-3.5 text-hero-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="glow-ring w-full sm:w-auto"
                >
                  <Link to="/contact" hash="request">
                    Get SLA Consultation
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
                >
                  <Link to="/services">All Services</Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: "30 min", label: "Initial Response", icon: Clock },
                { value: "4 hrs", label: "Part Replacement", icon: Wrench },
                {
                  value: "24/7 × 365",
                  label: "Coverage Window",
                  icon: Headset,
                },
                { value: "8 hubs", label: "Onsite Reach", icon: MapPin },
              ].map((stat) => (
                <StatCard key={stat.label} {...stat} />
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

      {/* ═══ SLA PARAMETERS ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Service Parameters
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Measurable,{" "}
            <span className="text-gradient">Auditable Commitments</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Every SLA is backed by clear, quantifiable metrics that ensure
            accountability.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {slaParameters.map((parameter, index) => {
            const Icon = slaIcons[index % slaIcons.length];
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
                    {Icon && (
                      <Icon
                        className="size-6 text-primary"
                        aria-hidden="true"
                      />
                    )}
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
        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2">
          {slaModels.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full overflow-hidden border border-border/60 shadow-sm transition-all hover:shadow-xl">
                <CardHeader className="relative">
                  <div
                    className="absolute top-0 right-0 h-20 w-20 rounded-full bg-primary/5 blur-2xl"
                    aria-hidden="true"
                  />
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
      </section>

      {/* ═══ STANDARD SUPPORT vs SLA (Comparison) ═══ */}
      <section className="border-t border-border bg-card/30 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Why Contractual SLA
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Standard Support vs{" "}
              <span className="text-gradient">Contractual SLA</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              The difference between &ldquo;best effort&rdquo; and a
              contractually guaranteed, measurable service.
            </p>
          </div>

          {/* Desktop table */}
          <div className="mt-8 hidden overflow-hidden rounded-xl border border-border bg-card shadow-sm md:block">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-muted-foreground">
                    Standard Support
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-primary">
                    Contractual SLA
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i, arr) => (
                  <tr
                    key={row.feature}
                    className={
                      i < arr.length - 1 ? "border-b border-border/50" : ""
                    }
                  >
                    <td className="px-4 py-3 font-medium">{row.feature}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <XIcon
                          className="size-3.5 text-muted-foreground/60"
                          aria-hidden="true"
                        />
                        {row.standard}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-primary">
                      <span className="inline-flex items-center gap-1.5">
                        <Check
                          className="size-3.5"
                          aria-hidden="true"
                        />
                        {row.sla}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 space-y-3 md:hidden">
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {row.feature}
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 rounded-lg bg-muted/40 px-3 py-2">
                    <XIcon
                      className="mt-0.5 size-3.5 shrink-0 text-muted-foreground/60"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Standard
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {row.standard}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg bg-primary/10 px-3 py-2">
                    <Check
                      className="mt-0.5 size-3.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-primary/70">
                        SLA
                      </p>
                      <p className="text-xs font-medium text-primary">
                        {row.sla}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SLA PROCESS ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            End-to-End <span className="text-gradient">SLA Process</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            From call to resolution — a disciplined, transparent workflow.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {slaSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md"
            >
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <step.icon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold">{step.label}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ OUR COMMITMENT ═══ */}
      <section className="border-t border-border bg-card/30 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Our Commitment
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              What a Contractual SLA{" "}
              <span className="text-gradient">Actually Delivers</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Beyond response times — the operational discipline behind every
              commitment.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {slaCommitment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
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

      {/* ═══ CORE DELIVERABLES ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Deliverables
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            What You Get{" "}
            <span className="text-gradient">In Every SLA</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A complete set of operational and reporting services.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {slaDeliverables.map((deliverable) => (
            <motion.li
              key={deliverable}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <CheckCircle2
                className="size-4 shrink-0 text-primary transition-transform group-hover:scale-110"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">{deliverable}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="border-t border-border bg-card/30 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Industries
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Enterprises That{" "}
              <span className="text-gradient">Rely on Our SLA</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Sectors where uptime, compliance and rapid response are not
              optional.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <industry.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-display text-base font-semibold">
                  {industry.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NATIONWIDE COVERAGE ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Coverage
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Onsite SLA Intervention{" "}
            <span className="text-gradient">Across Pakistan</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Head office in Karachi, regional hubs in Islamabad and Lahore,
            plus field support in key industrial cities.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hubs.map((hub, index) => (
            <motion.div
              key={hub.city}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold">{hub.city}</p>
                <p className="text-xs text-muted-foreground">{hub.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ TECHNOLOGY PARTNERS (trust strip) ═══ */}
      <section className="border-t border-border bg-card/30 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Technology Partners
            </Badge>
            <h2 className="font-display text-xl font-bold sm:text-2xl lg:text-3xl">
              Multi-Vendor SLA Support
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We service mission-critical infrastructure across leading
              enterprise platforms.
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
                  alt={`${partner.name} — technology partner for SLA support`}
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


{/* ═══ HPE PARTNERSHIP BANNER ═══ */}
<section className="mx-auto max-w-4xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
  <div className="text-center">
    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
      Featured Partnership
    </span>
    <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">
      HPE With <span className="text-primary">AI Power Enterprises</span>
    </h2>
    <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
      Certified technology alliance — enterprise servers, storage, hybrid cloud, and 24/7 SLA-backed support across Pakistan.
    </p>
  </div>

  {/* Image wrapper — narrow + centered */}
  <div className="mx-auto mt-6 max-w-md sm:max-w-lg">
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl">
      <img
        src={hpePartnership}
        alt="Hewlett Packard Enterprise and AI Power Enterprises — Technology Partnership"
        className="h-auto w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</section>




      {/* ═══ WHY SLA MATTERS ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Why It Matters
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            <span className="text-gradient">Peace of Mind</span> Through
            Contractual Guarantees
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            An SLA isn&apos;t just a document — it&apos;s a promise backed by
            real operational discipline.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Accountability",
              desc: "Clear response times and escalation paths ensure every issue is tracked and resolved.",
            },
            {
              icon: Gauge,
              title: "Performance Visibility",
              desc: "Regular reporting gives you full visibility into service performance and trends.",
            },
            {
              icon: Award,
              title: "Risk Reduction",
              desc: "Proactive maintenance and spare parts availability minimise downtime and business impact.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-lg"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="border-t border-border bg-card/30 py-14 sm:py-16 lg:py-20">
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
              Everything you need to know about our SLA-based support model.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {slaFaqs.map((faq, index) => (
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
                  <ChevronRight
                    className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
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
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Explore More
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Related <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            SLA support is one piece of our end-to-end IT infrastructure
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

      {/* ═══ FINAL CTA ═══ */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
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
              Ready to Define Your SLA?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Let&apos;s structure a support model that fits your operational
              criticality and budget.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring w-full sm:w-auto">
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