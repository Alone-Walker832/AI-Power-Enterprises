import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Clock,
  ExternalLink,
  Navigation,
  ShieldCheck,
  Headset,
  Building2,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  company,
  servicePriorities,
  whatsappLink,
  telLink,
  siteConfig,
  breadcrumbSchema,
  faqPageSchema,
} from "@/data/companyData";

// ═══════════════════════════════════════════════════════════════════
// PAGE-LEVEL SEO CONSTANTS
// ═══════════════════════════════════════════════════════════════════
const PAGE_PATH = "/contact";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const PAGE_TITLE =
  "Contact AI Power Enterprises | Karachi IT Services & 24/7 SLA Desk";
const PAGE_DESCRIPTION =
  "Contact AI Power Enterprises in Karachi for SLA support, CCTV, servers, data centre and network cabling. Email, WhatsApp or call the 24/7 SLA desk.";
const PAGE_KEYWORDS = [
  "contact AI Power Enterprises",
  "IT services Karachi contact",
  "SLA support contact Pakistan",
  "24/7 IT helpdesk Karachi",
  "IT company contact Karachi",
  "enterprise IT support contact",
  "IT services Shahrah-e-Faisal",
  "CCTV services contact Karachi",
];

// ═══════════════════════════════════════════════════════════════════
// GOOGLE MAPS URLS — Address-based (fixes "Place info couldn't load")
// Uses full street address so Google renders proper pin + place card
// ═══════════════════════════════════════════════════════════════════

// Full address string — same location shown & opened everywhere
const MAP_LOCATION = `${company.addressParts.street}, ${company.addressParts.city}, ${company.addressParts.region} ${company.addressParts.postalCode}, ${company.addressParts.countryName}`;

// Embed URL — maps.google.com (not www) is more reliable without API key
// iwloc=near anchors info window to the pin; z=17 for building-level zoom
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAP_LOCATION,
)}&t=m&z=17&output=embed&iwloc=near`;

// Open in Google Maps — click opens full Maps at same location with place card
const MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAP_LOCATION,
)}`;

// Get Directions — same location as destination
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAP_LOCATION,
)}&travelmode=driving`;

// ═══════════════════════════════════════════════════════════════════
// CONTACT PAGE FAQS
// ═══════════════════════════════════════════════════════════════════
const contactFaqs = [
  {
    question: "How quickly will you respond to my enquiry?",
    answer:
      "We typically respond to all business enquiries within one business hour during Pakistan Standard Time. For active SLA contracts, our initial response commitment is 30 minutes, 24/7 × 365.",
  },
  {
    question: "What is your office address in Karachi?",
    answer: `Our head office is at ${company.address}. Regional technical hubs operate from Islamabad and Lahore, with field support across Multan, Faisalabad, Peshawar, Gilgit and Quetta.`,
  },
  {
    question: "Can I speak to someone urgently for an outage?",
    answer: `Yes. For active SLA contracts, call the 24/7 SLA desk at ${company.phone}. For non-contract urgent requests, WhatsApp ${company.whatsapp} for fastest response.`,
  },
  {
    question: "Do you support clients outside Karachi?",
    answer:
      "Yes. We provide nationwide coverage through our regional technical hubs and field support teams — including overseas remote support for select engagements.",
  },
  {
    question: "Which email should I use for sales vs general enquiries?",
    answer: `Use ${company.emails.sales} for pricing, quotes and new engagements. Use ${company.emails.info} for general information, support clarifications and partnerships.`,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ROUTE — Full SEO + 2 JSON-LD schemas
// ═══════════════════════════════════════════════════════════════════
export const Route = createFileRoute("/contact")({
  head: () => {
    const breadcrumbLd = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Contact", url: PAGE_PATH },
    ]);
    const faqLd = faqPageSchema(contactFaqs);
    const contactLd = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      inLanguage: "en-PK",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
      mainEntity: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: company.phone,
            contactType: "customer service",
            areaServed: "PK",
            availableLanguage: ["en", "ur"],
          },
          {
            "@type": "ContactPoint",
            telephone: company.whatsapp,
            contactType: "technical support",
            areaServed: "PK",
            availableLanguage: ["en", "ur"],
          },
        ],
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
          content: "Contact AI Power Enterprises — Karachi, Pakistan",
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
          children: JSON.stringify(contactLd),
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
  component: ContactPage,
});

// ═══════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════
type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  priority: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  priority: "",
  message: "",
};

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function ContactInfoCard({
  icon: Icon,
  title,
  href,
  children,
  copyValue,
}: {
  icon: LucideIcon;
  title: string;
  href?: string;
  children: React.ReactNode;
  copyValue?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const content = (
    <>
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
        <div className="mt-1 text-sm font-medium text-foreground break-words">
          {children}
        </div>
      </div>
    </>
  );

  return (
    <div className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex min-w-0 flex-1 items-start gap-3"
        >
          {content}
        </a>
      ) : (
        <div className="flex min-w-0 flex-1 items-start gap-3">{content}</div>
      )}
      {copyValue && (
        <button
          type="button"
          onClick={handleCopy}
          className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          aria-label={`Copy ${title}`}
          title={copied ? "Copied" : "Copy"}
        >
          {copied ? (
            <Check className="size-3.5" aria-hidden="true" />
          ) : (
            <Copy className="size-3.5" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (state: FormState) => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (state.name.trim().length < 2)
      next.name = "Please enter your full name.";
    if (state.company.trim().length < 2)
      next.company = "Please enter your organization.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(state.email))
      next.email = "Enter a valid email address.";
    if (state.phone.trim().length < 7)
      next.phone = "Enter a valid phone or WhatsApp number.";
    if (!state.priority) next.priority = "Select a service priority.";
    if (state.message.trim().length < 10)
      next.message = "Please describe your requirement.";
    return next;
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (Object.keys(errors).length) setErrors(validate(next));
      return next;
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setForm(emptyForm);
    }
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-14">
        <div
          className="grid-pattern absolute inset-0 opacity-25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_70%)] opacity-10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
              <Headset className="mr-1.5 size-3.5" aria-hidden="true" />
              Contact Us
            </Badge>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl">
              Talk to Our{" "}
              <span className="text-gradient">24/7 SLA Desk</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-hero-muted sm:text-lg">
              Share your requirement and our engineering team will respond
              quickly with a tailored proposal — usually within one business
              hour.
            </p>

            {/* Trust chips */}
            <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-hero-muted sm:text-sm">
              {[
                { icon: Clock, label: "1-hour business response" },
                { icon: ShieldCheck, label: "30-min SLA response" },
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

            {/* Quick contact chips */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring w-full sm:w-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 size-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
              >
                <a href={telLink()}>
                  <Phone className="mr-2 size-4" aria-hidden="true" />
                  Call {company.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

            {/* ═══ SERVICE REQUEST FORM ═══ */}
      <section
        id="request"
        className="border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <Badge variant="secondary" className="mb-4">
              Service Request
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Send Us Your{" "}
              <span className="text-gradient">Requirement</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Fill the form below and our engineering team will respond within
              one business hour.
            </p>
          </div>

          <Card className="glass-card border-border/60 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="status"
                  className="rounded-xl border border-primary/40 bg-accent p-6 text-center"
                >
                  <CheckCircle2
                    className="mx-auto size-10 text-primary"
                    aria-hidden="true"
                  />
                  <p className="mt-3 font-display text-lg font-semibold">
                    Request received
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our team will contact you within one business hour. For
                    urgent issues, call the 24/7 SLA desk.
                  </p>
                  <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto"
                    >
                      Send another request
                    </Button>
                    <Button
                      asChild
                      className="w-full sm:w-auto"
                    >
                      <a href={telLink()}>
                        <Phone className="mr-1.5 size-4" aria-hidden="true" />
                        Call SLA Desk
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">
                        Company / Organization{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={
                          errors.company ? "company-error" : undefined
                        }
                        placeholder="Your organization name"
                      />
                      {errors.company && (
                        <p
                          id="company-error"
                          className="text-xs text-destructive"
                        >
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Official Email{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-xs text-destructive"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone / WhatsApp{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        placeholder="+92 3XX XXXXXXX"
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="text-xs text-destructive"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">
                      Service Priority{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={form.priority}
                      onValueChange={(v) => update("priority", v)}
                    >
                      <SelectTrigger
                        id="priority"
                        aria-invalid={Boolean(errors.priority)}
                        aria-describedby={
                          errors.priority ? "priority-error" : undefined
                        }
                      >
                        <SelectValue placeholder="Select a service category" />
                      </SelectTrigger>
                      <SelectContent>
                        {servicePriorities.map((priority) => (
                          <SelectItem key={priority} value={priority}>
                            {priority}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.priority && (
                      <p
                        id="priority-error"
                        className="text-xs text-destructive"
                      >
                        {errors.priority}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      placeholder="Briefly describe your requirement, current environment and any specific objectives."
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-xs text-destructive"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to be contacted by our team. We
                      never share your information.
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      Submit Request
                      <ArrowRight
                        className="ml-2 size-4"
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ═══ MAIN: CONTACT INFO + MAP + FORM ═══ */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-5 lg:gap-10 lg:px-8 lg:py-16">
        {/* Left column — Contact info + map (2/5 width) */}
        <div className="space-y-5 lg:col-span-2">
          {/* Quick contact cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <ContactInfoCard
              icon={Phone}
              title="Call / SLA Desk"
              href={telLink()}
              copyValue={company.phone}
            >
              {company.phone}
            </ContactInfoCard>

            <ContactInfoCard
              icon={MessageCircle}
              title="WhatsApp"
              href={whatsappLink}
              copyValue={company.whatsapp}
            >
              {company.whatsapp}
            </ContactInfoCard>

            <ContactInfoCard
              icon={Mail}
              title="Sales Email"
              href={`mailto:${company.emails.sales}`}
              copyValue={company.emails.sales}
            >
              {company.emails.sales}
            </ContactInfoCard>

            <ContactInfoCard
              icon={Mail}
              title="Official Email"
              href={`mailto:${company.emails.info}`}
              copyValue={company.emails.info}
            >
              {company.emails.info}
            </ContactInfoCard>
          </div>

          {/* Business hours */}
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Clock
                  className="size-4 text-primary"
                  aria-hidden="true"
                />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  {company.hours.weekdays}
                </span>
                <span className="font-medium">{company.hours.display}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  {company.hours.closed}
                </span>
                <span className="font-medium text-muted-foreground">
                  Closed
                </span>
              </div>
              <div className="mt-3 flex items-start gap-2 rounded-lg bg-primary/5 p-3 text-xs">
                <ShieldCheck
                  className="mt-0.5 size-3.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">
                  {company.hours.supportNote}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Coverage */}
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Globe2
                  className="size-4 text-primary"
                  aria-hidden="true"
                />
                Coverage
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Nationwide service coverage through 8 regional technical hubs,
              plus overseas remote support for select engagements.
            </CardContent>
          </Card>
        </div>

        {/* Right column — Map + Address (3/5 width) */}
        <div className="space-y-5 lg:col-span-3">
          {/* Embedded Google Map card */}
          <Card className="overflow-hidden border-border/60 shadow-sm">
            {/* Map header */}
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <CardTitle className="flex items-center gap-2 text-base font-semibold">
                    <Building2
                      className="size-4 text-primary"
                      aria-hidden="true"
                    />
                    Head Office — Karachi
                  </CardTitle>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {company.address}
                  </p>
                </div>
              </div>
            </CardHeader>

            {/* Embedded map */}
            <div className="relative aspect-[16/10] w-full border-y border-border/60 bg-muted/30 sm:aspect-[16/9]">
              <iframe
                title="AI Power Enterprises — Head Office location on Google Maps"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
              />
            </div>

            {/* Map actions */}
            <CardContent className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <MapPin
                  className="mt-0.5 size-3.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  Coordinates: {company.geo.latitude.toFixed(4)},{" "}
                  {company.geo.longitude.toFixed(4)}
                </span>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  <a
                    href={MAP_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation
                      className="mr-1.5 size-3.5"
                      aria-hidden="true"
                    />
                    Get Directions
                  </a>
                </Button>
<Button
  asChild
  variant="outline"
  size="sm"
  className="w-full sm:w-auto"
>
  <a
    href={MAP_OPEN_URL}
    target="_blank"
    rel="noopener noreferrer"
  >
    <ExternalLink
      className="mr-1.5 size-3.5"
      aria-hidden="true"
    />
    Open in Google Maps
  </a>
</Button>
              </div>
            </CardContent>
          </Card>
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
            Quick answers to help you reach us faster.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {contactFaqs.map((faq, index) => (
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

      {/* ═══ FINAL CTA ═══ */}
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
              Need to speak with us urgently?
            </h2>
            <p className="mt-3 text-sm text-hero-muted sm:text-base">
              Our 24/7 SLA desk is available for mission-critical contracts.
              For everything else, WhatsApp is the fastest route.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="glow-ring w-full sm:w-auto">
                <a href={telLink()}>
                  <Phone className="mr-2 size-4" aria-hidden="true" />
                  Call {company.phone}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 size-4" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-hero-muted/70">
              Explore our{" "}
              <Link
                to="/services"
                className="text-hero-accent underline-offset-4 hover:underline"
              >
                services
              </Link>
              ,{" "}
              <Link
                to="/sla"
                className="text-hero-accent underline-offset-4 hover:underline"
              >
                SLA framework
              </Link>{" "}
              or{" "}
              <Link
                to="/about"
                className="text-hero-accent underline-offset-4 hover:underline"
              >
                about us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}