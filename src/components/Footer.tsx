import { Link } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  ShieldCheck,
  Clock,
  Headset,
} from "lucide-react";
import { company, navLinks, hubs } from "@/data/companyData";
import logo from "@/assets/logo.png";

export function Footer() {
  const year = new Date().getFullYear();

  // Safe access with fallbacks
  const safeNavLinks = navLinks ?? [];
  const safeHubs = hubs ?? [];

  // Local expertise list (fallback)
  const expertiseItems = [
    "Servers & Blade Systems",
    "IP CCTV Surveillance",
    "SLA Managed Support",
    "Network Infrastructure",
    "Data Centre Solutions",
  ];

  // Service pages (in addition to navLinks)
  const servicePages = [
    { label: "Servers", to: "/servers" },
    { label: "Networking", to: "/networking" },
    { label: "CCTV", to: "/cctv" },
    { label: "Managed Services", to: "/managed-services" },
    { label: "SLA Support", to: "/sla" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* ─── Brand ─── */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="AI Power Enterprises"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="font-display text-sm font-bold tracking-tight text-foreground">
                  AI POWER ENTERPRISES
                </div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Enterprise IT Solutions
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {company.promise || "Technology that works. Support that lasts."}
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{company.address}</span>
            </div>
          </div>

          {/* ─── Quick Links ─── */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {safeNavLinks.map((link: { label: string; to: string; hash?: string }) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    {...(link.hash ? { hash: link.hash } : {})}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {servicePages.map((link: { label: string; to: string }) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Core Expertise ─── */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Core Expertise
            </h3>
            <ul className="mt-4 space-y-2">
              {expertiseItems.map((item: string) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Contact & Presence ─── */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact &amp; Presence
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-4 shrink-0 text-primary" />
                <a
                  href={`tel:${company.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${company.emails.info}`}
                  className="hover:text-primary transition-colors"
                >
                  {company.emails.info}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="size-4 shrink-0 text-primary" />
                <span>International Support</span>
              </li>
            </ul>

            {/* Nationwide Hubs */}
            {safeHubs.length > 0 && (
              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Our Hubs
                </h4>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {safeHubs.map((hub: { city: string; role: string }) => (
                    <li
                      key={hub.city}
                      className="text-xs text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-full"
                    >
                      {hub.city}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="mt-8 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p className="mt-1 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="size-3.5" /> 30‑min SLA
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" /> 24/7 Support
            </span>
            <span className="inline-flex items-center gap-1">
              <Headset className="size-3.5" /> 8 Hubs
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}