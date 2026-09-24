import { useState, useEffect, useRef, memo, useCallback } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Sparkles,
  ChevronDown,
  Server,
  Camera,
  Settings,
  ShieldCheck,
  Home,
  Users,
  Mail,
  CheckCircle,
  Info,
  X,
  Headset,
  Building2,
  HardDrive,
  Network,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { company, telLink } from "@/data/companyData";
import logo from "@/assets/logo.png";

// ─── Service Mega-Menu Data ────────────────────────────────────
type ServiceItem = {
  label: string;
  to: string;
  icon: typeof Server;
  desc: string;
};

const serviceColumns: { title: string; items: ServiceItem[] }[] = [
  {
    title: "Infrastructure",
    items: [
      {
        label: "Data Centre",
        to: "/datacenter",
        icon: Building2,
        desc: "Racks, power, cooling & cabling",
      },
      {
        label: "Servers & Compute",
        to: "/servers",
        icon: Server,
        desc: "Enterprise servers & blades",
      },
      {
        label: "Storage & Backup",
        to: "/storage",
        icon: HardDrive,
        desc: "SAN, NAS & disaster recovery",
      },
    ],
  },
  {
    title: "Connectivity & Security",
    items: [
      {
        label: "Networking",
        to: "/networking",
        icon: Network,
        desc: "LAN, WAN, Wi-Fi & firewalls",
      },
      {
        label: "CCTV Surveillance",
        to: "/cctv",
        icon: Camera,
        desc: "IP surveillance & command rooms",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        label: "Managed Services",
        to: "/managed-services",
        icon: Settings,
        desc: "Helpdesk, monitoring & AMC",
      },
      {
        label: "SLA Support",
        to: "/sla",
        icon: ShieldCheck,
        desc: "24/7 mission-critical cover",
      },
    ],
  },
];

const allServiceLinks = serviceColumns.flatMap((c) => c.items);

// ─── Memoized Brand Mark ────────────────────────────────────────
const BrandMark = memo(function BrandMark() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2 sm:gap-3 transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg"
      aria-label="AI Power Enterprises home"
    >
      <img
        src={logo}
        alt="AI Power Enterprises Logo"
        className="h-9 w-auto object-contain sm:h-11 lg:h-12"
        loading="eager"
        decoding="async"
      />
      <div className="leading-tight">
        <div className="font-display text-[10px] font-bold tracking-tight text-foreground sm:text-sm lg:text-base whitespace-nowrap">
          AI POWER ENTERPRISES
        </div>
        <div className="text-[7px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[9px] lg:text-[10px] whitespace-nowrap">
          Enterprise IT Solutions
        </div>
      </div>
    </Link>
  );
});

// ─── Animated Hamburger ─────────────────────────────────────────
function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
      <span
        className={cn(
          "absolute left-0 top-0 h-0.5 w-full rounded-full bg-foreground transition-all duration-300 ease-out",
          open && "top-1/2 rotate-45 -translate-y-1/2"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-foreground transition-all duration-300 ease-out",
          open && "opacity-0"
        )}
      />
      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-foreground transition-all duration-300 ease-out",
          open && "bottom-1/2 -rotate-45 translate-y-1/2"
        )}
      />
    </div>
  );
}

// ─── Services Mega-Dropdown (3-Column + CTA Panel) ──────────────
function ServicesDropdown({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    []
  );

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);
  const isAnyServiceActive = allServiceLinks.some((l) => l.to === pathname);

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={triggerRef}
        className={cn(
          "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          isAnyServiceActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:text-foreground"
        )}
        onClick={toggleDropdown}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="services-mega-menu"
      >
        Services
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        id="services-mega-menu"
        role="menu"
        className={cn(
          "absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 origin-top rounded-2xl border border-border bg-background shadow-2xl shadow-primary/10 transition-all duration-200 ease-out",
          "w-[min(calc(100vw-2rem),62rem)] overflow-hidden",
          isOpen
            ? "pointer-events-auto opacity-100 scale-100 translate-y-0"
            : "pointer-events-none opacity-0 scale-[0.98] -translate-y-1"
        )}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        {/* ─── Main Content: 3 columns + right CTA panel ─── */}
        <div className="flex flex-col lg:flex-row">
          {/* Left: 3-column services grid */}
          <div className="grid flex-1 grid-cols-1 divide-y divide-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {serviceColumns.map((col) => (
              <div key={col.title} className="p-4 lg:p-5">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                  {col.title}
                </p>
                <ul className="space-y-0.5">
                  {col.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.to;
                    return (
                      <li key={item.to} role="menuitem">
                        <Link
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "group/item flex items-start gap-2.5 rounded-lg p-2 transition-all duration-200",
                            isActive ? "bg-primary/10" : "hover:bg-muted/60"
                          )}
                        >
                          <span
                            className={cn(
                              "flex size-8 shrink-0 items-center justify-center rounded-md border transition-all duration-200",
                              isActive
                                ? "border-primary/40 bg-primary/15 text-primary"
                                : "border-border bg-muted/50 text-muted-foreground group-hover/item:border-primary/40 group-hover/item:bg-primary/10 group-hover/item:text-primary"
                            )}
                          >
                            <Icon className="size-4" />
                          </span>
                          <span className="flex-1 leading-tight min-w-0">
                            <span className="flex items-center gap-1.5">
                              <span
                                className={cn(
                                  "text-sm font-semibold truncate",
                                  isActive
                                    ? "text-primary"
                                    : "text-foreground group-hover/item:text-primary"
                                )}
                              >
                                {item.label}
                              </span>
                              {isActive && (
                                <CheckCircle className="size-3.5 shrink-0 text-primary" />
                              )}
                            </span>
                            <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground line-clamp-2">
                              {item.desc}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: CTA Panel (fixed 288px on desktop) */}
          <div className="relative hidden w-72 shrink-0 bg-gradient-to-br from-primary via-primary to-primary/95 lg:block">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative flex h-full flex-col p-5 text-primary-foreground">
              <div className="flex items-center gap-2">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15 backdrop-blur">
                  <ShieldCheck className="size-4" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground/185">
                  SLA Cover
                </span>
              </div>

              <p className="mt-4 font-display text-base font-bold leading-tight">
                30-minute response.
                <br />
                <span className="text-primary-foreground/90">
                  Nationwide 24/7.
                </span>
              </p>

              <ul className="mt-3 space-y-1.5 text-[11px] text-primary-foreground/85">
                <li className="flex items-center gap-1.5">
                  <Clock className="size-3.5 shrink-0" />
                  Initial response
                </li>
                <li className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 shrink-0" />
                  8 hubs nationwide
                </li>
              </ul>

              <div className="mt-auto space-y-2 pt-5">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-none"
                >
                  <Link
                    to="/contact"
                    hash="request"
                    onClick={() => setIsOpen(false)}
                  >
                    Request a Quote
                    <ArrowRight className="ml-1 size-3.5" />
                  </Link>
                </Button>
                <a
                  href={telLink()}
                  className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="size-3" />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="flex items-center justify-between gap-3 border-t border-border bg-muted/30 px-4 py-2.5 lg:px-5">
          <p className="text-[11px] text-muted-foreground">
            Explore our complete service portfolio
          </p>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="group/all inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all"
          >
            View All Services
            <ArrowRight className="size-3.5 transition-transform group-hover/all:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Main Navbar ────────────────────────────────────────────────
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (to: string) => {
    const isActive = pathname === to;
    return cn(
      "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    );
  };

  const underlineClass = (to: string) => {
    const isActive = pathname === to;
    return cn(
      "absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary transition-all duration-300",
      isActive ? "opacity-100 w-6" : "opacity-0 w-0"
    );
  };

  const mobileLinkClass = (to: string) => {
    const isActive = pathname === to;
    return cn(
      "group relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-primary/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
      isActive
        ? "bg-primary/10 text-primary"
        : "text-foreground hover:text-primary"
    );
  };

  const navItems = [
    { label: "About", to: "/about" },
    { label: "Clients", to: "/clients" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-8 z-40 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/40 bg-background/85 backdrop-blur-xl shadow-lg shadow-primary/5"
          : "border-transparent bg-background/60 backdrop-blur-md"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2 sm:px-6 lg:px-8 sm:py-3"
      >
        <BrandMark />

        {/* ─── Desktop Navigation ─── */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          <li>
            <Link
              to="/"
              className={linkClass("/")}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
              <span className={underlineClass("/")} />
            </Link>
          </li>
          <li>
            <ServicesDropdown pathname={pathname} />
          </li>
          <li>
            <Link
              to="/sla"
              className={linkClass("/sla")}
              aria-current={pathname === "/sla" ? "page" : undefined}
            >
              SLA Support
              <span className={underlineClass("/sla")} />
            </Link>
          </li>
          {navItems.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={linkClass(link.to)}
                aria-current={pathname === link.to ? "page" : undefined}
              >
                {link.label}
                <span className={underlineClass(link.to)} />
              </Link>
            </li>
          ))}
        </ul>

        {/* ─── Right Actions ─── */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            asChild
            className="hidden sm:inline-flex h-9 px-4 text-sm font-semibold bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md shadow-primary/30 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition-all group rounded-lg"
          >
            <Link to="/contact" hash="request">
              Request Quote
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <ThemeToggle />

          {/* ─── Mobile Menu (Sheet) ─── */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="min-h-10 min-w-10 rounded-full hover:bg-primary/20 xl:hidden focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-label="Toggle navigation menu"
              >
                <Hamburger open={open} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-sm border-l border-border/50 bg-background/95 p-0 shadow-2xl backdrop-blur-xl data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right"
            >
              <div className="flex h-full flex-col p-5">
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={logo}
                      alt="AI Power Enterprises Logo"
                      className="h-8 w-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="font-display text-sm font-bold text-foreground leading-tight">
                      AI POWER
                      <br className="sm:hidden" />
                      <span className="hidden sm:inline"> </span>
                      ENTERPRISES
                    </span>
                  </div>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-primary/50"
                      aria-label="Close menu"
                    >
                      <X className="size-5" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                  <ul className="flex flex-col gap-0.5">
                    <li>
                      <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className={mobileLinkClass("/")}
                        aria-current={pathname === "/" ? "page" : undefined}
                      >
                        <Home className="size-4 shrink-0" />
                        Home
                        {pathname === "/" && (
                          <Sparkles className="ml-auto size-4 text-primary" />
                        )}
                      </Link>
                    </li>

                    {serviceColumns.map((col) => (
                      <li key={col.title} className="mt-3">
                        <p className="px-4 text-[10px] font-semibold uppercase tracking-widest text-primary">
                          {col.title}
                        </p>
                        <ul className="mt-1 flex flex-col gap-0.5">
                          {col.items.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.to;
                            return (
                              <li key={link.to}>
                                <Link
                                  to={link.to}
                                  onClick={() => setOpen(false)}
                                  className={cn(
                                    "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                                    isActive
                                      ? "bg-primary/10 text-primary"
                                      : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                                  )}
                                >
                                  <Icon className="size-4 shrink-0" />
                                  {link.label}
                                  {isActive && (
                                    <CheckCircle className="ml-auto size-4 text-primary" />
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ))}

                    <li className="mt-1">
                      <Link
                        to="/services"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-lg px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        View All Services
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </li>

                    {navItems.map((link) => {
                      let Icon = null;
                      if (link.label === "About") Icon = Info;
                      else if (link.label === "Clients") Icon = Users;
                      else if (link.label === "Contact") Icon = Mail;
                      return (
                        <li key={link.label} className="mt-3 first:mt-0">
                          <Link
                            to={link.to}
                            onClick={() => setOpen(false)}
                            className={mobileLinkClass(link.to)}
                            aria-current={pathname === link.to ? "page" : undefined}
                          >
                            {Icon && <Icon className="size-4 shrink-0" />}
                            {link.label}
                            {pathname === link.to && (
                              <Sparkles className="ml-auto size-4 text-primary" />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-auto space-y-4 border-t border-border/50 pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 rounded-xl bg-primary/5 p-2.5 text-sm">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                        <Phone className="size-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-foreground">
                          24/7 Support
                        </p>
                        <p className="text-[9px] text-muted-foreground">
                          Instant response
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-primary/5 p-2.5 text-sm">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Headset className="size-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-foreground">
                          SLA
                        </p>
                        <p className="text-[9px] text-muted-foreground">
                          30 min response
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full h-10 text-sm font-semibold bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all group rounded-lg"
                  >
                    <Link
                      to="/contact"
                      hash="request"
                      onClick={() => setOpen(false)}
                    >
                      Request Quote
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <p className="text-center text-[9px] text-muted-foreground">
                    © {new Date().getFullYear()} AI Power Enterprises
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}