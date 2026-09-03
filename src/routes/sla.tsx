import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
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
  Zap,
  Target,
  Award,
  Users,
  MapPin,
  Calendar,
  Activity,
  FileCheck,
  Gauge,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  slaDeliverables,
  slaModels,
  slaParameters,
  company,
} from "@/data/companyData";

export const Route = createFileRoute("/sla")({
  head: () => ({
    meta: [
      { title: "24/7 SLA Managed IT Support | 30-Minute Response | AI Power Enterprises" },
      {
        name: "description",
        content:
          "Contractual 24/7 x 365 SLA managed IT support with 30-minute initial response, 4-working-hour part replacement, onsite intervention and quarterly reporting.",
      },
      { property: "og:title", content: "24/7 SLA Managed IT Support | AI Power Enterprises" },
      {
        property: "og:description",
        content:
          "Mission-Critical and Business-Critical SLA models with guaranteed response, spare parts and preventive maintenance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SlaPage,
});

// ─── Animated Counter ──────────────────────────────────────────────
function AnimatedStat({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const inView = useScroll({ target: ref, offset: ["0 1", "0.5 1"] });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center rounded-2xl border border-hero-border bg-hero-foreground/5 p-6 backdrop-blur-sm"
    >
      <Icon className="size-8 text-hero-accent" />
      <p className="mt-3 font-display text-3xl font-bold text-hero-foreground">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-hero-muted">{label}</p>
    </motion.div>
  );
}

// ─── SLA Process Step ────────────────────────────────────────────
const slaSteps = [
  { icon: PhoneCall, label: "Call Management", desc: "24/7 centralised support for incidents and service requests." },
  { icon: Activity, label: "Problem Diagnosis", desc: "Systematic identification of root causes and technical issues." },
  { icon: FileCheck, label: "Action Plan", desc: "Defined corrective actions to restore service efficiently." },
  { icon: Wrench, label: "Onsite Intervention", desc: "Deployment of technical personnel for repair and replacement." },
  { icon: ShieldCheck, label: "Spare Parts", desc: "Access to replacement components for timely restoration." },
  { icon: Calendar, label: "Preventive Maintenance", desc: "Scheduled health checks to reduce equipment failure." },
];

export default function SlaPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const slaIcons = [Clock, LifeBuoy, Wrench, CheckCircle2];

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-16 lg:py-24"
      >
        <div className="grid-pattern absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)_0%,_transparent_60%)] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div style={{ opacity }} className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold uppercase tracking-widest">
                <Headset className="mr-1.5 size-3.5" />
                SLA Managed Support
              </Badge>
              <h1 className="font-display text-4xl font-bold text-hero-foreground sm:text-5xl lg:text-6xl leading-tight">
                Contractual SLA Support with a{" "}
                <span className="text-gradient">30‑Minute Response</span>
              </h1>
              <p className="text-lg text-hero-muted sm:text-xl max-w-xl">
                Round-the-clock call management, onsite hardware intervention and spare parts availability,
                backed by measurable service parameters and quarterly reporting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow-ring">
                  <Link to="/contact" hash="request">
                    Get SLA Consultation
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10"
                >
                  <Link to="/services">All Services</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right – Animated Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "30 min", label: "Initial Response", icon: Clock },
                { value: "4 hrs", label: "Part Replacement", icon: Wrench },
                { value: "24/7 x 365", label: "Coverage Window", icon: Headset },
                { value: "8 hubs", label: "Onsite Reach", icon: MapPin },
              ].map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>

        {/* Floating glow */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* ─── SLA PARAMETERS ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Service Parameters</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Measurable, <span className="text-gradient">Auditable Commitments</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every SLA is backed by clear, quantifiable metrics that ensure accountability.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <Card className="glass-card h-full border border-border/60 shadow-sm hover:shadow-lg transition-all">
                  <CardHeader>
                    {Icon && <Icon className="size-6 text-primary" aria-hidden="true" />}
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
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {slaModels.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full border border-border/60 shadow-sm hover:shadow-xl transition-all overflow-hidden">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 h-20 w-20 rounded-full bg-primary/5 blur-2xl" />
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

        {/* Quick Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="font-display text-xl font-semibold flex items-center gap-2">
            <BarChart className="size-5 text-primary" />
            Model Comparison
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 text-left font-semibold">Feature</th>
                  <th className="py-2 text-center font-semibold">Mission-Critical</th>
                  <th className="py-2 text-center font-semibold">Business-Critical</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 text-muted-foreground">Coverage</td>
                  <td className="py-2 text-center text-primary font-medium">24/7</td>
                  <td className="py-2 text-center text-muted-foreground">8/5</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 text-muted-foreground">Response Time</td>
                  <td className="py-2 text-center text-primary font-medium">30 min</td>
                  <td className="py-2 text-center text-muted-foreground">1 hour</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 text-muted-foreground">Spare Parts</td>
                  <td className="py-2 text-center text-primary font-medium">Dedicated pool</td>
                  <td className="py-2 text-center text-muted-foreground">Shared pool</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Reporting</td>
                  <td className="py-2 text-center text-primary font-medium">Quarterly</td>
                  <td className="py-2 text-center text-muted-foreground">Quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SLA PROCESS ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">How It Works</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              End‑to‑End <span className="text-gradient">SLA Process</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              From call to resolution – a disciplined, transparent workflow.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {slaSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-all"
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="size-4" />
                </span>
                <div>
                  <h4 className="font-semibold text-sm">{step.label}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE DELIVERABLES ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Deliverables</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            What You Get <span className="text-gradient">In Every SLA</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
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
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm hover:shadow-md transition-all hover:border-primary/30"
            >
              <CheckCircle2 className="size-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{deliverable}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ─── WHY SLA MATTERS ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Why It Matters</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              <span className="text-gradient">Peace of Mind</span> Through Contractual Guarantees
            </h2>
            <p className="mt-3 text-muted-foreground">
              An SLA isn’t just a document – it’s a promise backed by real operational discipline.
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
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm hover:shadow-lg transition-all"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-6" />
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
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
            <Sparkles className="mx-auto size-8 text-hero-accent" />
            <h2 className="mt-3 font-display text-2xl font-bold text-hero-foreground sm:text-3xl lg:text-4xl">
              Ready to Define Your SLA?
            </h2>
            <p className="mt-3 text-sm text-hero-muted">
              Let's structure a support model that fits your operational criticality and budget.
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
              Or call us directly: <a href={`tel:${company.phone}`} className="text-hero-accent hover:underline">{company.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}