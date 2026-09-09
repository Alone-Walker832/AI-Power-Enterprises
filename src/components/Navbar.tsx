import { useState, useEffect, useRef, memo, useCallback } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Sparkles,
  ChevronDown,
  Server,
  Wifi,
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

// ─── Service Links ──────────────────────────────────────────────
const serviceLinks = [
  { label: "Servers & Storage", to: "/servers", icon: Server },
  { label: "Networking", to: "/networking", icon: Wifi },
  { label: "CCTV Surveillance", to: "/cctv", icon: Camera },
  { label: "Managed Services", to: "/managed-services", icon: Settings },
];

// ─── Memoized Brand Mark (Logo + Text) ─────────────────────────
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
        loading="lazy"
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

// ─── Animated Hamburger ──────────────────────────────────────────
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

// ─── Services Dropdown ──────────────────────────────────────────
function ServicesDropdown({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={triggerRef}
        className={cn(
          "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          serviceLinks.some((link) => pathname === link.to)
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:text-foreground"
        )}
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="services-dropdown"
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
        id="services-dropdown"
        role="menu"
        className={cn(
          "absolute left-0 top-full mt-1 w-64 origin-top-left rounded-xl border border-border/50 bg-background/95 p-2 shadow-2xl shadow-primary/5 backdrop-blur-xl transition-all duration-200 ease-out",
          isOpen
            ? "pointer-events-auto opacity-100 scale-100 translate-y-0"
            : "pointer-events-none opacity-0 scale-95 -translate-y-1"
        )}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul className="space-y-0.5">
          {serviceLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.to;
            return (
              <li key={link.to} role="menuitem">
                <Link
                  to={link.to}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  )}
                  onClick={() => setIsOpen(false)}
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
        <div className="mt-1 border-t border-border/50 pt-2">
          <Link
            to="/services"
            className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            onClick={() => setIsOpen(false)}
          >
            View All Services
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Throttled scroll handler
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

  // ─── Active link classes with underline indicator ─────────────
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
            <Link
              to="/sla"
              className={linkClass("/sla")}
              aria-current={pathname === "/sla" ? "page" : undefined}
            >
              SLA Support
              <span className={underlineClass("/sla")} />
            </Link>
          </li>
          <li>
            <ServicesDropdown pathname={pathname} />
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
                {/* ─── Sheet Header (Single Close Button) ─── */}
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
                      AI POWER<br className="sm:hidden" />
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

                {/* ─── Sheet Body ─── */}
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
                    <li>
                      <Link
                        to="/sla"
                        onClick={() => setOpen(false)}
                        className={mobileLinkClass("/sla")}
                        aria-current={pathname === "/sla" ? "page" : undefined}
                      >
                        <ShieldCheck className="size-4 shrink-0" />
                        SLA Support
                        {pathname === "/sla" && (
                          <Sparkles className="ml-auto size-4 text-primary" />
                        )}
                      </Link>
                    </li>
                    <li className="mt-3">
                      <p className="px-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Our Services
                      </p>
                      <ul className="mt-1 flex flex-col gap-0.5">
                        {serviceLinks.map((link) => {
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
                      <Link
                        to="/services"
                        onClick={() => setOpen(false)}
                        className="mt-1 flex items-center justify-between rounded-lg px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        View All Services →
                      </Link>
                    </li>
                    {navItems.map((link) => {
                      let Icon = null;
                      if (link.label === "About") Icon = Info;
                      else if (link.label === "Clients") Icon = Users;
                      else if (link.label === "Contact") Icon = Mail;
                      return (
                        <li key={link.label}>
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

                {/* ─── Sheet Footer ─── */}
                <div className="mt-auto space-y-4 border-t border-border/50 pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 rounded-xl bg-primary/5 p-2.5 text-sm">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                        <Phone className="size-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-foreground">24/7 Support</p>
                        <p className="text-[9px] text-muted-foreground">Instant response</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-primary/5 p-2.5 text-sm">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Headset className="size-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-foreground">SLA</p>
                        <p className="text-[9px] text-muted-foreground">30 min response</p>
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