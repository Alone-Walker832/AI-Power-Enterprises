import { useMemo, useState, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import hpePartnership from "@/assets/partners/hpe-partnership.jpeg";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  Building2,
  MapPin,
  Search,
  ShieldCheck,
  ArrowRight,
  Users,
  Award,
  Sparkles,
  X as XIcon,
  PhoneCall,
  MessageCircle,
  Mail,
  CheckCircle2,
  TrendingUp,
  Clock,
  Handshake,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  clientCategories,
  clients,
  hubs,
  partners,
  company,
  siteConfig,
  whatsappLink,
  telLink,
  breadcrumbSchema,
  faqPageSchema,
  type ClientCategory,
} from "@/data/companyData";

// ═══════════════════════════════════════════════════════════════════
// PAGE-LEVEL SEO CONSTANTS
// ═══════════════════════════════════════════════════════════════════
const PAGE_PATH = "/clients";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE =
  "Clients & Strategic Partners | AI Power Enterprises Pakistan";
const PAGE_DESCRIPTION =
  "Trusted by leading banks, industrial groups, hospitals, universities and telecom operators across Pakistan, with Microsoft, Red Hat, Cisco, HPE and Dell partnerships.";
const PAGE_KEYWORDS = [
  "AI Power Enterprises clients",
  "enterprise IT clients Pakistan",
  "BFSI IT services Pakistan",
  "banking IT support Karachi",
  "industrial IT services Pakistan",
  "healthcare IT Pakistan",
  "education IT services Karachi",
  "telecom IT Pakistan",
  "Microsoft partner Pakistan",
  "Cisco partner Karachi",
  "HPE partner Pakistan",
  "enterprise IT vendor Pakistan",
];

// ═══════════════════════════════════════════════════════════════════
// CLIENTS PAGE FAQS
// ═══════════════════════════════════════════════════════════════════
const clientsFaqs = [
  {
    question: "Which industries does AI Power Enterprises serve?",
    answer:
      "We serve Banking & Financial Services (BFSI), Industrial & Manufacturing, Oil & Gas, FMCG, Healthcare, Education, and Telecommunications across Pakistan and select international markets.",
  },
  {
    question: "Can I request a reference from an existing client?",
    answer:
      "Yes. For qualified enterprise engagements, we can provide client references in your specific industry following an initial assessment and mutual NDA. Contact our sales team to discuss.",
  },
  {
    question: "Are you certified partners of the technology vendors you support?",
    answer:
      "Yes. We maintain certified partnerships and trained engineering teams across Microsoft, Red Hat, Cisco, HPE, Dell and Fujitsu — enabling enterprise-grade delivery and multi-vendor support.",
  },
  {
    question: "Do you work with public sector and regulated organisations?",
    answer:
      "Yes. We serve public sector, healthcare, and regulated industries including banking where compliance, audit trails and defined SLAs are essential to every engagement.",
  },
  {
    question: "How do we start working with AI Power Enterprises?",
    answer: `Contact our sales team at ${company.phone} or email ${company.emails.sales}. We start with a scoping discussion, followed by a formal proposal and SLA framework aligned to your environment.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// CATEGORY DESCRIPTIONS
// ═══════════════════════════════════════════════════════════════════
const CATEGORY_DESCRIPTIONS: Record<ClientCategory, string> = {
  bfsi: "Banks, Islamic banks, microfinance, payment platforms and financial institutions running mission-critical infrastructure.",
  industrial:
    "Fertilizer, oil & gas, cement, FMCG, textile, technology and manufacturing groups with large distributed operations.",
  public:
    "Hospitals, universities, telecom operators and public institutions with compliance and continuity needs.",
};

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 3 JSON-LD schemas
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/clients")({
  head: () => {
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Clients", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(clientsFaqs);

    // CollectionPage listing clients + partners — helps Google understand client portfolio
    const collectionLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      inLanguage: "en-PK",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        name: "Enterprise Clients",
        numberOfItems: clients.length,
        itemListElement: clients.map((client, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: client.name,
          description: `${client.tag} — AI Power Enterprises client`,
        })),
      },
      mentions: {
        "@type": "ItemList",
        name: "Technology Partners",
        numberOfItems: partners.length,
        itemListElement: partners.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          description: p.focus,
        })),
      },
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
          content: "Clients & Partners — AI Power Enterprises",
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
          children: JSON.stringify(collectionLd),
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
  component: ClientsPage,
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
function ClientsPage() {
  const [category, setCategory] = useState<ClientCategory>("bfsi");
  const [query, setQuery] = useState("");
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const visibleClients = useMemo(() => {
    const term = query.trim().toLowerCase();
    return clients.filter(
      (client) =>
        client.category === category &&
        (!term || client.name.toLowerCase().includes(term)),
    );
  }, [category, query]);

  const counts = useMemo(
    () =>
      clientCategories.map((cat) => ({
        ...cat,
        count: clients.filter((c) => c.category === cat.id).length,
      })),
    [],
  );

  const stats = [
    {
      icon: Users,
      value: `${clients.length}+`,
      label: "Enterprise Clients",
    },
    { icon: Building2, value: "8", label: "Industry Sectors" },
    { icon: Award, value: `${partners.length}`, label: "Global Partners" },
    { icon: MapPin, value: `${hubs.length}`, label: "Nationwide Hubs" },
  ];

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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--primary)_0%,_transparent_60%)] opacity-10"
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
                Our Clientele
              </Badge>
              <h1 className="font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Trusted by Leading Enterprises Across{" "}
                <span className="text-gradient">
                  Pakistan & Global Markets
                </span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl">
                A diversified client portfolio across financial services,
                industry, healthcare, education, telecommunications, and
                technology.
              </p>

              {/* Trust chips */}
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {[
                  { icon: ShieldCheck, label: "Multi-vendor certified" },
                  { icon: TrendingUp, label: "8 industry sectors" },
                  { icon: Handshake, label: "Long-term partnerships" },
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
                    Become a Client
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
                  onClick={() => scrollTo("clientele")}
                >
                  View Clients
                </Button>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
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

      {/* ═══ PARTNERS (with logos) ═══ */}
      <section
        id="partners"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Partners
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Strategic{" "}
            <span className="text-gradient">Technology Partners</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Certified alignment with the world&apos;s leading enterprise
            technology vendors.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="glass-card h-full border border-border/60 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} — technology partner`}
                      className="h-9 w-auto object-contain opacity-85 dark:opacity-95"
                      loading="lazy"
                      decoding="async"
                      width={90}
                      height={36}
                    />
                    <ShieldCheck
                      className="size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="mt-2 font-display text-lg sm:text-xl">
                    {partner.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant="secondary"
                    className="border-primary/20 bg-primary/10 text-primary"
                  >
                    {partner.badge}
                  </Badge>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {partner.focus}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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

      

      {/* ═══ CLIENTS ═══ */}
      <section
        id="clientele"
        className="scroll-mt-20 border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Clientele
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Selected{" "}
              <span className="text-gradient">Enterprise Clients</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Organisations that trust us with their critical IT environments.
            </p>
          </div>

          {/* Category descriptions shown below tabs — better UX */}
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            {CATEGORY_DESCRIPTIONS[category]}
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8 lg:flex-row lg:items-center lg:justify-between">
            <Tabs
              value={category}
              onValueChange={(v) => setCategory(v as ClientCategory)}
              className="w-full lg:w-auto"
            >
              <TabsList className="flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0 sm:justify-start">
                {counts.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="rounded-full border border-border px-3 py-2 text-xs transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md sm:px-4 sm:text-sm"
                  >
                    {tab.label}
                    <span className="ml-1.5 rounded-full bg-muted/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground data-[state=active]:bg-white/20 data-[state=active]:text-primary-foreground">
                      {tab.count}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="relative w-full lg:max-w-xs">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clients…"
                aria-label="Search clients"
                className="border-border/60 pl-9 pr-9 focus:border-primary"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label="Clear search"
                >
                  <XIcon className="size-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {/* Client cards grid */}
          <motion.ul layout className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleClients.map((client) => (
                <motion.li
                  key={client.name}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                >
                  <span className="flex min-w-0 items-center gap-2 text-sm font-medium">
                    <Building2
                      className="size-4 shrink-0 text-primary transition-transform group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <span className="truncate">{client.name}</span>
                  </span>
                  <Badge
                    variant="secondary"
                    className="shrink-0 bg-muted/50 text-[10px]"
                  >
                    {client.tag}
                  </Badge>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          {visibleClients.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center text-sm text-muted-foreground"
            >
              No clients match{" "}
              <span className="font-medium text-foreground">
                &ldquo;{query}&rdquo;
              </span>{" "}
              in this category.
            </motion.p>
          )}

          <div className="mt-6 text-center text-xs text-muted-foreground sm:text-sm">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {visibleClients.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-foreground">
              {clients.filter((c) => c.category === category).length}
            </span>{" "}
            clients in this category
          </div>
        </div>
      </section>

      {/* ═══ WHY CLIENTS CHOOSE US ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Why AI Power
          </Badge>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            Why Enterprises{" "}
            <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Long-term partnerships built on engineering discipline and
            contractual accountability.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Multi-Vendor Certified",
              desc: "Microsoft, Red Hat, Cisco, HPE, Dell and Fujitsu trained engineering teams.",
            },
            {
              icon: TrendingUp,
              title: "8 Industry Sectors",
              desc: "Deep expertise across BFSI, industrial, healthcare, education, telecom and public sector.",
            },
            {
              icon: Clock,
              title: "30-Min SLA",
              desc: "Contractual response commitment for mission-critical environments, 24/7 × 365.",
            },
            {
              icon: Handshake,
              title: "Long-Term Focus",
              desc: "Preventive, proactive support designed for relationships that last years, not deals.",
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

      {/* ═══ NATIONWIDE COVERAGE ═══ */}
      <section
        id="coverage"
        className="scroll-mt-20 border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Footprint
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Nationwide{" "}
              <span className="text-gradient">Support Infrastructure</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Eight technical hubs delivering onsite intervention across
              Pakistan.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((hub, index) => (
              <motion.div
                key={hub.city}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="glass-card rounded-xl border border-border/60 p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
              >
                <MapPin
                  className="mx-auto size-5 text-primary"
                  aria-hidden="true"
                />
                <p className="mt-3 font-display text-lg font-semibold">
                  {hub.city}
                </p>
                <p className="text-sm text-muted-foreground">{hub.role}</p>
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
            Common <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Quick answers about our client portfolio and partnerships.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {clientsFaqs.map((faq, index) => (
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
              Ready to Join Our Trusted Clientele?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Let&apos;s discuss how our enterprise IT solutions can support
              your organisation.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
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
                asChild
                variant="outline"
                size="lg"
                className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
              >
                <Link to="/services">Explore Services</Link>
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