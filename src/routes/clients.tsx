import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef } from "react";
import {
  Building2,
  MapPin,
  Search,
  ShieldCheck,
  ArrowRight,
  Users,
  Award,
  Sparkles,
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
  type ClientCategory,
} from "@/data/companyData";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Strategic Partners | AI Power Enterprises" },
      {
        name: "description",
        content:
          "Trusted by leading banks, industrial groups, hospitals, universities and telecom operators across Pakistan, with Microsoft, Red Hat, Cisco, HPE and Dell partnerships.",
      },
      { property: "og:title", content: "Clients & Strategic Partners | AI Power Enterprises" },
      {
        property: "og:description",
        content: "Enterprise clientele across BFSI, industrial, healthcare, education and telecom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientsPage,
});

// ─── Scroll helper ───
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

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
        client.category === category && (!term || client.name.toLowerCase().includes(term)),
    );
  }, [category, query]);

  const counts = useMemo(() => {
    return clientCategories.map((cat) => ({
      ...cat,
      count: clients.filter((c) => c.category === cat.id).length,
    }));
  }, []);

  const stats = [
    { icon: Users, value: "100+", label: "Enterprise Clients" },
    { icon: Building2, value: "8", label: "Industry Sectors" },
    { icon: Award, value: "5", label: "Global Partners" },
    { icon: MapPin, value: "8", label: "Nationwide Hubs" },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-16 lg:py-24"
      >
        <div className="grid-pattern absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--primary)_0%,_transparent_60%)] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div style={{ opacity }} className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold uppercase tracking-widest">
                <Users className="mr-1.5 size-3.5" />
                Our Clientele
              </Badge>
              <h1 className="font-display text-4xl font-bold text-hero-foreground sm:text-5xl lg:text-6xl leading-tight">
                Trusted by Leading Enterprises Across{" "}
                <span className="text-gradient">Pakistan & Global Markets</span>
              </h1>
              <p className="text-lg text-hero-muted sm:text-xl max-w-xl">
                A diversified client portfolio across financial services, industry, healthcare,
                education, telecommunications, and technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow-ring">
                  <Link to="/contact" hash="request">
                    Become a Client
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10"
                  onClick={() => scrollTo("clientele")}
                >
                  View Clients
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center rounded-2xl border border-hero-border bg-hero-foreground/5 p-6 backdrop-blur-sm"
                >
                  <stat.icon className="size-8 text-hero-accent" />
                  <p className="mt-3 font-display text-3xl font-bold text-hero-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-hero-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* ─── PARTNERS ─── */}
      <section id="partners" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Partners</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Strategic <span className="text-gradient">Technology Partners</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Certified alignment with the world's leading enterprise technology vendors.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="glass-card h-full border border-border/60 shadow-sm hover:shadow-lg transition-all hover:border-primary/30">
                <CardHeader>
                  <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
                  <CardTitle className="font-display text-xl">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {partner.badge}
                  </Badge>
                  <p className="mt-3 text-sm text-muted-foreground">{partner.focus}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <section id="clientele" className="border-t border-border bg-card/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Clientele</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Selected <span className="text-gradient">Enterprise Clients</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Organisations that trust us with their critical IT environments.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Tabs value={category} onValueChange={(v) => setCategory(v as ClientCategory)}>
              <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
                {counts.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="rounded-full border border-border px-4 py-2 text-sm transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
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
                placeholder="Search clients"
                aria-label="Search clients"
                className="pl-9 border-border/60 focus:border-primary"
              />
            </div>
          </div>

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
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm hover:shadow-md transition-all hover:border-primary/30"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Building2 className="size-4 text-primary group-hover:scale-110 transition-transform" />
                    {client.name}
                  </span>
                  <Badge variant="secondary" className="shrink-0 text-[10px] bg-muted/50">
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
              No clients match “{query}” in this category.
            </motion.p>
          )}

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Showing {visibleClients.length} of {clients.filter(c => c.category === category).length} clients in this category
          </div>
        </div>
      </section>

      {/* ─── NATIONWIDE ─── */}
      <section id="coverage" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">Footprint</Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Nationwide <span className="text-gradient">Support Infrastructure</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Eight technical hubs delivering onsite intervention across Pakistan.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hubs.map((hub, index) => (
            <motion.div
              key={hub.city}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="glass-card rounded-xl border border-border/60 p-5 shadow-sm hover:shadow-lg transition-all text-center"
            >
              <MapPin className="mx-auto size-5 text-primary" aria-hidden="true" />
              <p className="mt-3 font-display text-lg font-semibold">{hub.city}</p>
              <p className="text-sm text-muted-foreground">{hub.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="hero-surface relative overflow-hidden rounded-2xl border border-hero-border px-6 py-12 text-center sm:px-10">
          <div className="grid-pattern absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <Sparkles className="mx-auto size-8 text-hero-accent" />
            <h2 className="mt-3 font-display text-2xl font-bold text-hero-foreground sm:text-3xl lg:text-4xl">
              Ready to Join Our Trusted Clientele?
            </h2>
            <p className="mt-3 text-sm text-hero-muted">
              Let's discuss how our enterprise IT solutions can support your organisation.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring">
                <Link to="/contact" hash="request">
                  Get in Touch
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-hero-border text-hero-foreground hover:bg-hero-foreground/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}