import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Award,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  company,
  pillars,
  approachSteps,
  valueProps,
  metrics,
} from "@/data/companyData";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | AI Power Enterprises" },
      {
        name: "description",
        content:
          "AI Power Enterprises is a technology-driven solutions and services company providing enterprise IT infrastructure, managed services, consultancy, and 24/7 SLA support across Pakistan.",
      },
      { property: "og:title", content: "About AI Power Enterprises" },
      {
        property: "og:description",
        content:
          "Learn about our mission, vision, core pillars, and why organisations trust us with their critical IT environments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

// ─── Scroll helper ──────────────────────────────────────────────
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-16 lg:py-24">
        <div className="grid-pattern absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <Users className="mr-1.5 size-3.5" />
                About Us
              </Badge>
              <h1 className="font-display text-4xl font-bold text-hero-foreground sm:text-5xl lg:text-6xl leading-tight">
                A Technology‑Driven <span className="text-gradient">Enterprise Partner</span>
              </h1>
              <p className="text-lg text-hero-muted sm:text-xl max-w-xl">
                {company.overview ||
                  "We combine technical expertise, industry experience, and responsive service delivery to support organisations in managing their critical IT environments."}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow-ring">
                  <Link to="/contact" hash="request">
                    Get in Touch
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                {/* ✅ Replaced Link with Button + onClick */}
                <Button
                  variant="outline"
                  size="lg"
                  className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10"
                  onClick={() => scrollTo("mission")}
                >
                  Our Mission
                </Button>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center rounded-2xl border border-hero-border bg-hero-foreground/5 p-6 backdrop-blur-sm"
                >
                  <span className="font-display text-3xl font-bold text-hero-foreground">{stat.value}</span>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-hero-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section id="mission" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all"
          >
            <Target className="size-10 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To enable organisations to achieve greater operational efficiency and business
              continuity through reliable, secure, scalable, and intelligently designed
              technology solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all"
          >
            <Award className="size-10 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To become a trusted technology and systems integration partner recognised for
              engineering expertise, dependable service delivery, and the ability to translate
              complex IT requirements into practical business solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CORE PILLARS ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Capability model</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Our 5 <span className="text-gradient">Core Pillars</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              A complete lifecycle model — from infrastructure design to continuous SLA‑backed support.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                  {pillar.number}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Why AI Power</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Our <span className="text-gradient">Value Proposition</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            What sets us apart — and why organisations trust us with their critical IT environments.
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 shadow-sm"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── IMPLEMENTATION APPROACH ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Delivery method</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Our 6‑Step <span className="text-gradient">Implementation Approach</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              A disciplined delivery method that de‑risks every enterprise rollout.
            </p>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {approachSteps.map((step) => (
              <li
                key={step.number}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 font-display text-xs font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="hero-surface relative overflow-hidden rounded-2xl border border-hero-border px-6 py-12 text-center sm:px-10">
          <Sparkles className="mx-auto size-8 text-hero-accent" />
          <h2 className="mt-3 font-display text-2xl font-bold text-hero-foreground sm:text-3xl lg:text-4xl">
            Ready to Build a Reliable IT Future?
          </h2>
          <p className="mt-3 text-sm text-hero-muted">
            Let's talk about how we can support your organisation with enterprise-grade IT
            infrastructure and managed services.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="glow-ring">
              <Link to="/contact" hash="request">
                Contact Us
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}