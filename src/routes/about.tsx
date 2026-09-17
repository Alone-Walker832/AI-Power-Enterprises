import { createFileRoute, Link } from "@tanstack/react-router";
import hpePartnership from "@/assets/partners/hpe-partnership.jpeg";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Award,
  Sparkles,
  Building2,
  ShieldCheck,
  Clock,
  MapPin,
  PhoneCall,
  MessageCircle,
  Mail,
  TrendingUp,
  Handshake,
  Layers,
  Briefcase,
  Headset,
  Database,
  ShoppingBag,
  Eye,
  Heart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  company,
  pillars,
  approachSteps,
  valueProps,
  metrics,
  mission,
  vision,
  hubs,
  partners,
  siteConfig,
  breadcrumbSchema,
  faqPageSchema,
  whatsappLink,
  telLink,
} from "@/data/companyData";

// ═══════════════════════════════════════════════════════════════════
// PAGE-LEVEL SEO CONSTANTS
// ═══════════════════════════════════════════════════════════════════
const PAGE_PATH = "/about";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE =
  "About AI Power Enterprises | Enterprise IT Partner in Pakistan";
const PAGE_DESCRIPTION =
  "AI Power Enterprises is a technology-driven solutions and services company providing enterprise IT infrastructure, managed services, consultancy, and 24/7 SLA support across Pakistan.";
const PAGE_KEYWORDS = [
  "about AI Power Enterprises",
  "enterprise IT company Pakistan",
  "IT services company Karachi",
  "systems integrator Pakistan",
  "managed services provider Karachi",
  "IT infrastructure partner Pakistan",
  "enterprise IT consultancy Karachi",
  "24/7 IT support company Pakistan",
  "Microsoft Red Hat Cisco partner Pakistan",
  "IT SLA provider Karachi",
];

// ═══════════════════════════════════════════════════════════════════
// PAGE FAQS
// ═══════════════════════════════════════════════════════════════════
const aboutFaqs = [
  {
    question: "What does AI Power Enterprises do?",
    answer:
      "AI Power Enterprises is a technology-driven solutions and services company providing enterprise IT infrastructure, systems integration, managed services, professional consultancy, and 24/7 SLA-based technical support to organisations across Pakistan and select international markets.",
  },
  {
    question: "Where is AI Power Enterprises based?",
    answer: `Our head office is in Karachi at ${company.address}. We operate regional technical hubs in Islamabad and Lahore, with field support across Multan, Faisalabad, Peshawar, Gilgit and Quetta.`,
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve Banking & Financial Services (BFSI), Industrial & Manufacturing, Oil & Gas, FMCG, Healthcare, Education, and Telecommunications — organisations where uptime, compliance and rapid response are business-critical.",
  },
  {
    question: "What technology partners do you work with?",
    answer:
      "We maintain certified alignments with leading enterprise technology vendors including Microsoft, Red Hat, Cisco, HPE, Dell and Fujitsu — enabling enterprise-grade delivery across compute, storage, networking and cloud.",
  },
  {
    question: "What makes AI Power Enterprises different?",
    answer:
      "We combine multi-vendor engineering expertise, a disciplined 6-step implementation methodology, nationwide onsite coverage from 8 hubs, and contractual 30-minute SLA commitments — with a customer-centric approach focused on long-term partnerships rather than one-time deals.",
  },
  {
    question: "How can we start working with AI Power Enterprises?",
    answer: `Contact our team at ${company.phone}, email ${company.emails.sales}, or WhatsApp ${company.whatsapp}. We start with a scoping discussion, followed by a formal proposal and SLA framework aligned to your environment.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ICON MAP for pillars (from data)
// ═══════════════════════════════════════════════════════════════════
const PILLAR_ICONS: Record<string, LucideIcon> = {
  Database,
  Layers,
  ShoppingBag,
  Headset,
  Briefcase,
};

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 3 JSON-LD schemas
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/about")({
  head: () => {
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(aboutFaqs);

    // AboutPage schema — links to Organization in root graph
    const aboutLd = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      inLanguage: "en-PK",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
      mainEntity: { "@id": `${siteConfig.url}/#organization` },
    };

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
          content: "About AI Power Enterprises — Enterprise IT Partner",
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
        {
          type: "application/ld+json",
          children: JSON.stringify(aboutLd),
        },
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
  component: AboutPage,
});

// ═══════════════════════════════════════════════════════════════════
// SCROLL HELPER
// ═══════════════════════════════════════════════════════════════════
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <>
      {/* ═══ HERO (compact top) ═══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-11"
      >
        <div
          className="grid-pattern absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_70%)] opacity-10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              style={{ opacity }}
              className="space-y-5 text-center sm:space-y-6 lg:text-left"
            >
              <Badge className="border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                <Users className="mr-1.5 size-3.5" aria-hidden="true" />
                About Us
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                A Technology-Driven{" "}
                <span className="text-gradient">Enterprise Partner</span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl">
                {company.overview}
              </p>

              {/* Trust chips */}
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {[
                  { icon: ShieldCheck, label: "Multi-vendor certified" },
                  { icon: Clock, label: "30-min SLA response" },
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
                    Get in Touch
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
                  onClick={() => scrollTo("mission")}
                >
                  Our Mission
                </Button>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {metrics.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="flex flex-col items-center rounded-2xl border border-hero-border bg-hero-foreground/5 p-4 backdrop-blur-sm sm:p-6"
                >
                  <p className="font-display text-lg font-bold text-hero-foreground sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-center text-[10px] font-medium uppercase tracking-wider text-hero-muted sm:text-xs">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-center text-[10px] text-hero-muted/70 sm:text-xs">
                    {stat.note}
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

      {/* ═══ MISSION & VISION ═══ */}
      <section
        id="mission"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Mission & Vision
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            What Drives{" "}
            <span className="text-gradient">Our Work</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            The principles that shape every engagement, project and support
            relationship.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2">
          {/* Mission card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl sm:p-8"
          >
            <div
              className="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-primary via-primary/60 to-primary/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <Target className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold sm:text-2xl">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {mission}
              </p>
            </div>
          </motion.div>

          {/* Vision card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl sm:p-8"
          >
            <div
              className="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-primary via-primary/60 to-primary/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <Eye className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold sm:text-2xl">
                Our Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {vision}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CORE PILLARS ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Capability Model
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Our {pillars.length} Core{" "}
              <span className="text-gradient">Pillars</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              A complete lifecycle model — from infrastructure design to
              continuous SLA-backed support.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = PILLAR_ICONS[pillar.icon] ?? Database;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <Card className="glass-card group h-full border border-border/60 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span className="font-display text-2xl font-bold text-muted-foreground/30">
                          {pillar.number}
                        </span>
                      </div>
                      <CardTitle className="mt-3 font-display text-lg sm:text-xl">
                        {pillar.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      {pillar.description}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ VALUE PROPOSITION ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Why AI Power
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Our{" "}
            <span className="text-gradient">Value Proposition</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            What sets us apart — and why organisations trust us with their
            critical IT environments.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item, idx) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <CheckCircle2 className="size-3" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium leading-snug">{item}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ═══ IMPLEMENTATION APPROACH ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Delivery Method
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Our {approachSteps.length}-Step{" "}
              <span className="text-gradient">Implementation Approach</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              A disciplined delivery method that de-risks every enterprise
              rollout.
            </p>
          </div>

          <ol className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {approachSteps.map((step, idx) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ NATIONWIDE COVERAGE ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Nationwide Footprint
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            <span className="text-gradient">8 Technical Hubs</span> Across
            Pakistan
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Onsite intervention and field support wherever your operations are
            located.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {hubs.map((hub, idx) => (
            <motion.div
              key={hub.city}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold sm:text-base">
                  {hub.city}
                </p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {hub.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ TECHNOLOGY PARTNERS ═══ */}
      <section className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Technology Alliances
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Certified{" "}
              <span className="text-gradient">Technology Partners</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Aligned with the world&apos;s leading enterprise technology
              vendors.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} — technology partner`}
                  className="h-8 w-auto object-contain opacity-80 dark:opacity-90"
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={32}
                />
                <p className="text-[10px] font-medium text-muted-foreground sm:text-xs">
                  {partner.name}
                </p>
              </motion.div>
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
      HPE × <span className="text-primary">AI Power Enterprises</span>
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
            Common questions about who we are, what we do and how we work.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {aboutFaqs.map((faq, index) => (
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
              Ready to Build a Reliable IT Future?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Let&apos;s talk about how we can support your organisation with
              enterprise-grade IT infrastructure and managed services.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="glow-ring w-full sm:w-auto"
              >
                <Link to="/contact" hash="request">
                  Contact Us
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
              >
                <Link to="/services">View Services</Link>
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