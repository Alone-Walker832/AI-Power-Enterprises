import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  CheckCircle2,
  Clock,
  LifeBuoy,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Database,
  Camera,
  Wifi,
  ShoppingBag,
  Settings,
  Briefcase,
  Activity,
  BookOpen,
  Server,
  Network,
  HardDrive,
  Cloud,
  Lock,
  MapPin,
  Globe,
  Award,
  Cpu,
  Layers,
  Zap,
  BarChart,
  RefreshCw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  serviceSections,
  slaDeliverables,
  slaModels,
  slaParameters,
  technologyPortfolio,
  managedServices,
  consultancyServices,
  disasterRecovery,
  partners,
  branchCities,
} from "@/data/companyData";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & SLA Support | AI Power Enterprises IT Services" },
      {
        name: "description",
        content:
          "24/7 x 365 SLA managed IT support with 30-minute response, enterprise servers, IP CCTV, network infrastructure and software licensing across Pakistan.",
      },
      { property: "og:title", content: "Services & SLA Support | AI Power Enterprises" },
      {
        property: "og:description",
        content:
          "Mission-critical and business-critical SLA models, servers, CCTV, networking and licensing services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

// ─── Icons Mapping (with fallback) ──────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  Database,
  Camera,
  Wifi,
  ShoppingBag,
  Settings,
  Briefcase,
  Activity,
  BookOpen,
  Server,
  Network,
  HardDrive,
  Cloud,
  Lock,
};

// ✅ FIX: Explicitly return React.ElementType, never undefined
const getIcon = (name?: string): React.ElementType => {
  if (name && name in iconMap) {
    return iconMap[name] as React.ElementType;
  }
  return Settings; // fallback component
};

// ─── Scroll to section helper ──────────────────────────────────
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ─── Service Card Component ─────────────────────────────────────
function ServiceCard({ section }: { section: typeof serviceSections[0] }) {
  const Icon = getIcon(section.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <Icon className="size-5" />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold">{section.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{section.summary}</p>
          <ul className="mt-3 space-y-1.5">
            {section.items.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
            {section.items.length > 4 && (
              <li className="text-sm font-medium text-primary">+ {section.items.length - 4} more</li>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────
function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  const slaIcons = [Clock, LifeBuoy, Wrench, CheckCircle2];
  const [activeSection, setActiveSection] = useState("sla");

  // Track active section for sticky nav
  useEffect(() => {
    const sections = ["sla", "services", "technology", "managed", "partners"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── STICKY SUB-NAV ─── */}
      <nav className="sticky top-0 z-40 hidden border-b border-border/40 bg-background/80 backdrop-blur-md lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-6 py-3 text-sm font-medium">
            {[
              { id: "sla", label: "SLA Framework" },
              { id: "services", label: "Service Lines" },
              { id: "technology", label: "Technology Stack" },
              { id: "managed", label: "Managed & Consultancy" },
              { id: "partners", label: "Partners" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ─── 1. HERO ─── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/90 to-hero/70 py-16 lg:py-24"
      >
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_70%)] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div style={{ opacity }} className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold uppercase tracking-widest">
                Enterprise IT Services
              </Badge>
              <h1 className="font-display text-4xl font-bold text-hero-foreground sm:text-5xl lg:text-6xl leading-tight">
                Managed IT &{" "}
                <span className="text-gradient">SLA‑Backed Support</span>
              </h1>
              <p className="text-lg text-hero-muted sm:text-xl max-w-xl">
                From mission-critical infrastructure to IP surveillance, networking, and licensing —
                delivered by certified engineers nationwide with a 30‑minute SLA.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow-ring">
                  <Link to="/contact" hash="request">
                    Request a Quote
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10"
                  onClick={() => scrollToSection("sla")}
                >
                  View SLA
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-hero-accent" />
                  <span className="text-sm font-medium text-hero-foreground">30 min response</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-5 text-hero-accent" />
                  <span className="text-sm font-medium text-hero-foreground">24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-hero-accent" />
                  <span className="text-sm font-medium text-hero-foreground">8 hubs</span>
                </div>
              </div>
            </motion.div>
            {/* Right side – service preview cards */}
            <div className="grid grid-cols-2 gap-3">
              {serviceSections.slice(0, 4).map((section) => {
                const Icon = getIcon(section.icon);
                return (
                  <motion.div
                    key={section.id}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-xl border border-hero-border/60 bg-hero-foreground/5 p-4 backdrop-blur-sm hover:bg-hero-foreground/10 transition-all"
                  >
                    <Icon className="size-6 text-hero-accent" />
                    <h4 className="mt-1.5 text-sm font-semibold text-hero-foreground">
                      {section.title.split(" ")[0]}
                    </h4>
                    <p className="text-xs text-hero-muted line-clamp-2">{section.summary}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SLA FRAMEWORK ─── */}
      <section id="sla" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 scroll-mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">SLA Framework</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Clear, Measurable <span className="text-gradient">Service Parameters</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Backed by onsite intervention and spare parts availability — always.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {slaParameters.map((parameter, index) => {
            const Icon = slaIcons[index % slaIcons.length] as React.ElementType;
            return (
              <motion.div
                key={parameter.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Card className="glass-card h-full border border-border/60 shadow-sm hover:shadow-lg transition-all">
                  <CardHeader>
                    <Icon className="size-6 text-primary" aria-hidden="true" />
                    <CardTitle className="text-base font-semibold">{parameter.label}</CardTitle>
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
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {slaModels.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full border border-border/60 shadow-sm hover:shadow-lg transition-all">
                <CardHeader>
                  <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                    {model.coverage}
                  </Badge>
                  <CardTitle className="font-display text-2xl">{model.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {model.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Deliverables */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold">Core SLA Deliverables</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {slaDeliverables.map((deliverable) => (
              <motion.li
                key={deliverable}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle2 className="size-4 text-primary" />
                {deliverable}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── 3. SERVICE LINES ─── */}
      <section id="services" className="border-t border-border bg-card/30 py-16 lg:py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Expertise</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Comprehensive <span className="text-gradient">Service Portfolio</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              End-to-end IT solutions from infrastructure to managed support.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceSections.map((section) => (
              <ServiceCard key={section.id} section={section} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/contact" hash="request">
                Discuss Your Requirements
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── 4. TECHNOLOGY PORTFOLIO ─── */}
      <section id="technology" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 scroll-mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Technology Stack</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Full <span className="text-gradient">Technology Portfolio</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Over 14 core technology areas supported by our engineering teams.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {technologyPortfolio.map((item, idx) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ─── 5. MANAGED SERVICES & CONSULTANCY ─── */}
      <section id="managed" className="border-t border-border bg-card/30 py-16 lg:py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Managed & Consultancy</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Operational <span className="text-gradient">& Advisory</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Day-to-day IT operations management and strategic guidance.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold flex items-center gap-2">
                <Settings className="size-6 text-primary" />
                Managed Services
              </h3>
              <ul className="mt-4 space-y-2">
                {managedServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold flex items-center gap-2">
                <Briefcase className="size-6 text-primary" />
                Consultancy
              </h3>
              <ul className="mt-4 space-y-2">
                {consultancyServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl font-bold flex items-center gap-2">
              <Activity className="size-6 text-primary" />
              Disaster Recovery & Business Continuity
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {disasterRecovery.map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm">
                  <ShieldCheck className="size-3.5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 6. PARTNERS ─── */}
      <section id="partners" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 scroll-mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Technology Alliances</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Strategic <span className="text-gradient">Partners</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Certified alignment with the world's leading enterprise technology vendors.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center rounded-xl border border-border bg-card px-6 py-4 shadow-sm hover:shadow-lg transition-all min-w-[140px]"
            >
              <span className="font-display text-lg font-bold">{partner.name}</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {partner.badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 7. CTA ─── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="hero-surface relative overflow-hidden rounded-2xl border border-hero-border px-6 py-12 text-center sm:px-10">
          <div className="grid-pattern absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-hero-foreground sm:text-3xl lg:text-4xl">
              Ready to secure your infrastructure with a 30‑minute SLA?
            </h2>
            <p className="mt-3 text-sm text-hero-muted">
              Talk to our engineering team about servers, CCTV, networking, licensing and managed
              support — nationwide across Pakistan.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring">
                <Link to="/contact" hash="request">
                  Request a Quote
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10">
                <Link to="/sla">View SLA Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}