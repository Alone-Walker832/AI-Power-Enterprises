import { Link } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Linkedin,
  MessageCircle,
  Building2,
  Clock,
  ShieldCheck,
  Headset,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  company,
  navLinks,
  hubs,
  serviceNavLinks,
  social,
  telLink,
  whatsappLink,
  mailtoLink,
} from "@/data/companyData";
import logo from "@/assets/logo.png";

// ═══════════════════════════════════════════════════════════════════
// COMPANY LINKS (dedicated list)
// ═══════════════════════════════════════════════════════════════════
const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Clients", to: "/clients" },
  { label: "Contact", to: "/contact" },
  { label: "SLA Framework", to: "/sla" },
];

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center justify-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-foreground md:justify-start">
      <span
        className="inline-block size-1.5 rounded-full bg-primary"
        aria-hidden="true"
      />
      {children}
    </h3>
  );
}

function FooterLink({
  to,
  hash,
  label,
}: {
  to: string;
  hash?: string;
  label: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all hover:text-primary"
    >
      <span className="transition-transform group-hover:translate-x-0.5">
        {label}
      </span>
      <ArrowRight
        className="size-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN FOOTER COMPONENT
// ═══════════════════════════════════════════════════════════════════
export function Footer() {
  const year = new Date().getFullYear();
  const safeServiceLinks = serviceNavLinks ?? [];
  const safeHubs = hubs ?? [];

  // Merge companyLinks with any remaining navLinks (excluding Home, dupes)
  const remainingNavLinks = (navLinks ?? []).filter(
    (link) =>
      link.to !== "/" &&
      !companyLinks.some((c) => c.to === link.to),
  );

  const mergedCompanyLinks = [
    ...companyLinks,
    ...remainingNavLinks.map((l) => ({ label: l.label, to: l.to })),
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-background via-background to-card/40">
      {/* Top primary glow line */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        aria-hidden="true"
      />
      {/* Corner radial glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-6">
        {/* ═══ MAIN GRID ═══ */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ─── Column 1: Brand ─── */}
          <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-4 lg:items-start lg:text-left">
            {/* Logo + name */}
            <Link
              to="/"
              className="group flex items-center gap-3"
              aria-label="AI Power Enterprises — Home"
            >
              <img
                src={logo}
                alt="AI Power Enterprises logo"
                className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
                width={44}
                height={44}
              />
              <div className="text-left">
                <div className="font-display text-sm font-bold tracking-tight text-foreground">
                  AI POWER ENTERPRISES
                </div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Enterprise IT Solutions
                </div>
              </div>
            </Link>

            {/* Tagline */}
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {company.promise}
            </p>

            {/* Address */}
            <div className="mt-5 flex max-w-xs items-start gap-2 text-sm text-muted-foreground">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span className="leading-snug">{company.address}</span>
            </div>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI Power Enterprises on LinkedIn"
                className="group inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="size-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
              </a>
              <a
                href={telLink()}
                aria-label={`Call ${company.phone}`}
                className="group inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

{/* ─── Services + Company (side-by-side on every device) ─── */}
<div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:gap-8 lg:contents">
  {/* Services */}
  <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-3">
    <SectionHeading>Services</SectionHeading>
    <ul className="mt-4 space-y-2.5">
      {safeServiceLinks.map((link) => (
        <li key={link.to}>
          <FooterLink to={link.to} label={link.label} />
        </li>
      ))}
    </ul>
  </div>

  {/* Company */}
  <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-2">
    <SectionHeading>Company</SectionHeading>
    <ul className="mt-4 space-y-2.5">
      {mergedCompanyLinks.map((link) => (
        <li key={link.to}>
          <FooterLink to={link.to} label={link.label} />
        </li>
      ))}
    </ul>
  </div>
</div>

          {/* ─── Column 4: Contact & Coverage ─── */}
          <div className="flex flex-col items-center text-center sm:col-span-2 md:items-start md:text-left lg:col-span-3">
            <SectionHeading>Contact</SectionHeading>

            <ul className="mt-4 space-y-3">
              {/* Phone — highlighted */}
              <li>
                <a
                  href={telLink()}
                  className="group inline-flex items-center gap-2.5 text-sm transition-colors hover:text-primary"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-foreground">
                    {company.phone}
                  </span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground ring-1 ring-border/60 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30">
                    <MessageCircle className="size-3.5" aria-hidden="true" />
                  </span>
                  <span>WhatsApp</span>
                </a>
              </li>

              {/* Sales Email */}
              <li>
                <a
                  href={mailtoLink(company.emails.sales, "Sales Enquiry")}
                  className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground ring-1 ring-border/60 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30">
                    <Mail className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="truncate">{company.emails.sales}</span>
                </a>
              </li>

              {/* Info Email */}
              <li>
                <a
                  href={mailtoLink(company.emails.info, "General Enquiry")}
                  className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground ring-1 ring-border/60 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30">
                    <Globe className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="truncate">{company.emails.info}</span>
                </a>
              </li>
            </ul>

            {/* Hub cities */}
            {safeHubs.length > 0 && (
              <div className="mt-6">
                <h4 className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:justify-start">
                  <Building2 className="size-3" aria-hidden="true" />
                  Onsite Coverage
                </h4>
                <ul className="mt-2.5 flex flex-wrap justify-center gap-1.5 md:justify-start">
                  {safeHubs.map((hub) => (
                    <li key={hub.city}>
                      <span className="inline-block rounded-full border border-border/60 bg-muted/40 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary">
                        {hub.city}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ═══ BOTTOM BAR ═══ */}
        <div className="mt-7 flex flex-col items-center justify-between gap-5 border-t border-border/60 pt-6 sm:flex-row sm:gap-6">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            &copy; {year} {company.name}. All rights reserved.
          </p>

          {/* Trust inline */}
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <Clock
                className="size-3.5 text-primary"
                aria-hidden="true"
              />
              30-Min SLA
            </li>
            <li
              className="hidden sm:inline-flex items-center gap-1.5"
              aria-hidden="true"
            >
              <span className="text-border">·</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Headset
                className="size-3.5 text-primary"
                aria-hidden="true"
              />
              24/7 × 365
            </li>
            <li
              className="hidden sm:inline-flex items-center gap-1.5"
              aria-hidden="true"
            >
              <span className="text-border">·</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <MapPin
                className="size-3.5 text-primary"
                aria-hidden="true"
              />
              8 Hubs
            </li>
            <li
              className="hidden sm:inline-flex items-center gap-1.5"
              aria-hidden="true"
            >
              <span className="text-border">·</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <ShieldCheck
                className="size-3.5 text-primary"
                aria-hidden="true"
              />
              Multi-Vendor Certified
            </li>
          </ul>

          <Link
            to="/contact"
            hash="request"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
          >
            Start a Project
            <ArrowUpRight
              className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}