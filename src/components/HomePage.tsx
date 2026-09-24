import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import hpePartnership from "@/assets/partners/hpe-partnership.jpeg";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Headset,
  PhoneCall,
  MapPin,
  Globe,
  Database,
  Wifi,
  Camera,
  Settings,
  ShoppingBag,
  Briefcase,
  Activity,
  BookOpen,
  Users,
  Award,
  Layers,
  Cpu,
  RefreshCw,
  Building,
  Heart,
  GraduationCap,
  TrendingUp,
  ShoppingCart,
  Truck,
  Zap,
  Server,
  Network,
  FileText,
  LifeBuoy,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Hero Image Imports ──────────────────────────────────────────
import heroImage from "@/assets/hero-datacenter.jpg";
import slaImage from "@/assets/hero-sla.jpg?url";
import serversImage from "@/assets/hero-servers.jpg?url";
import storageImage from "@/assets/hero-storage.jpg?url";
import networkingImage from "@/assets/hero-networking.jpg?url";
import cctvImage from "@/assets/hero-cctv.jpg?url";
import managedImage from "@/assets/hero-managed.jpg?url";

// ─── Partner Logos ──────────────────────────────────────────────
import ciscoLogo from "@/assets/partners/cisco.jpeg";
import dellLogo from "@/assets/partners/dell.jpeg";
import hpLogo from "@/assets/partners/hp.jpeg";
import microsoftLogo from "@/assets/partners/microsoft.jpeg";
import redhatLogo from "@/assets/partners/redhat.jpeg";
import fujitsuLogo from "@/assets/partners/fujitsu.jpeg";

import {
  pillars,
  partners,
  approachSteps,
  clients,
  company,
  metrics,
} from "@/data/companyData";

// ─── Service Words (label + image) ──────────────────────────────
const serviceWords = [
  { label: "SLA Support", image: slaImage },
  { label: "Servers", image: serversImage },
  { label: "Storage", image: storageImage },
  { label: "Networking", image: networkingImage },
  { label: "CCTV", image: cctvImage },
  { label: "Managed Services", image: managedImage },
];

// ─── Animated Counter ────────────────────────────────────────────
const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const num = parseInt(value.replace(/[^0-9]/g, ""));
      if (isNaN(num)) return;
      const duration = 1500;
      const startTime = performance.now();
      const update = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        setCount(Math.floor(progress * num));
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
  }, [inView, value]);

  const display = value.includes("+") ? `${count}+` : value.includes("min") ? `${count} min` : `${count}`;
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-2xl font-bold text-primary lg:text-3xl transition-all">
        {inView ? display : "0"}
      </p>
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
};

// ─── Typewriter Hook (Premium: slow, smooth, with pause) ─────────
const useTypewriter = (
  words: string[],
  onWordChange?: (word: string) => void,
  typingSpeed = 55,
  deletingSpeed = 25,
  pauseDuration = 2500
) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (!current) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const newText = current.slice(0, text.length + 1);
          setText(newText);
          if (newText === current) {
            // Word complete → pause → start deleting
            if (onWordChange) onWordChange(current);
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          const newText = current.slice(0, text.length - 1);
          setText(newText);
          if (newText === "") {
            setIsDeleting(false);
            setIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, pauseDuration, onWordChange]);

  return { text };
};

// ─── Service Cards Data ──────────────────────────────────────────
const serviceCards = [
  { icon: Database, title: "Servers & Storage", desc: "High-performance computing, SAN/NAS, and backup infrastructure.", link: "/servers" },
  { icon: Wifi, title: "Networking", desc: "LAN/WAN, VPN, structured cabling, wireless, and security.", link: "/networking" },
  { icon: Camera, title: "CCTV & Surveillance", desc: "IP CCTV, central monitoring, recording, and maintenance.", link: "/cctv" },
  { icon: Settings, title: "Managed Services", desc: "Helpdesk, incident management, proactive maintenance.", link: "/managed-services" },
  { icon: ShoppingBag, title: "Software Licensing", desc: "Microsoft, Red Hat, asset management & compliance.", link: "/services#licensing" },
  { icon: Briefcase, title: "Consultancy", desc: "Advisory, architecture planning, and knowledge transfer.", link: "/services" },
  { icon: Activity, title: "Disaster Recovery", desc: "Business continuity, backup testing, and DRaaS.", link: "/services#disaster-recovery" },
  { icon: BookOpen, title: "Training", desc: "Customised training programs & knowledge transfer.", link: "/services" },
];

// ─── Client Sectors ──────────────────────────────────────────────
const sectors = [
  { icon: Building, label: "Financial Services" },
  { icon: Heart, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: TrendingUp, label: "Industry & Manufacturing" },
  { icon: Wifi, label: "Telecommunications" },
  { icon: ShoppingCart, label: "Retail & Distribution" },
  { icon: Truck, label: "Energy & Construction" },
  { icon: Cpu, label: "Technology" },
];

// ─── Floating Particles ──────────────────────────────────────────
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  duration: 12 + Math.random() * 20,
  delay: Math.random() * 8,
  opacity: 0.1 + Math.random() * 0.2,
}));

// ─── Icon mapping for pillars ────────────────────────────────────
const pillarIcons = {
  Infrastructure: Server,
  Integration: Network,
  Licensing: FileText,
  Support: LifeBuoy,
  Consultancy: Lightbulb,
};

// ─── Partner Logos Array ─────────────────────────────────────────
const partnerBadges = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Red Hat", logo: redhatLogo },
  { name: "Hewlett Packard", logo: hpLogo },
  { name: "Dell Technologies", logo: dellLogo },
  { name: "Cisco Systems", logo: ciscoLogo },
  { name: "Fujitsu", logo: fujitsuLogo },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // ─── State for current service image ──────────────────────────
  const [currentServiceImage, setCurrentServiceImage] = useState(serviceWords[0]?.image || heroImage);

  // ─── Typewriter with image change ─────────────────────────────
  const words = serviceWords.map((w) => w.label);
  const { text: typedServices } = useTypewriter(
    words,
    (word) => {
      const matched = serviceWords.find((w) => w.label === word);
      if (matched) setCurrentServiceImage(matched.image);
    },
    55,   // typing speed (ms per char)
    25,   // deleting speed
    2500  // pause after full word
  );

  return (
    <>
      {/* ─── 1. HERO ─── */}
<section
  ref={heroRef}
  className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-gradient-to-br from-sky-100/60 via-sky-50/40 to-blue-100/40 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/20 select-none"
  aria-labelledby="hero-heading"
>
  {/* Background elements */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0EA5E9_0%,_transparent_60%)] opacity-[0.06] dark:opacity-[0.08]" />
  <div className="absolute inset-0 grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
  <div className="absolute inset-0 pointer-events-none">
    {particles.map((p) => (
      <motion.span
        key={p.id}
        className="absolute rounded-full bg-primary/20 dark:bg-primary/10"
        style={{
          width: p.size,
          height: p.size,
          top: p.y + "%",
          left: p.x + "%",
          opacity: p.opacity,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          opacity: [p.opacity, p.opacity * 1.5, p.opacity],
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>

  <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    <motion.div
      style={{ y: contentY, opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0.8]) }}
      className="grid w-full items-center gap-4 lg:grid-cols-[1fr_0.9fr] lg:gap-8"
    >
      {/* ─── LEFT COLUMN ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary backdrop-blur-sm shadow-sm w-fit dark:bg-primary/10"
        >
          <Zap className="size-3.5 shrink-0" />
          <span>The Enterprise IT Partner</span>
        </motion.span>

        <h1
          id="hero-heading"
          className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl xl:text-5xl"
        >
          <span>Enterprise IT Infrastructure,</span>
          <br />
          <span>Managed Services &amp; 24/7</span>
          <br />
          <span className="relative after:content-['|'] after:animate-blink after:ml-1 bg-gradient-to-r from-primary via-sky-500 to-sky-400 bg-clip-text text-transparent">
            {typedServices}
          </span>
        </h1>

        <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-base leading-relaxed mx-auto lg:mx-0">
          {company.description ||
            "A technology‑driven partner for enterprise infrastructure, integration, managed services and technical support — across Pakistan and internationally."}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <Button
            asChild
            size="lg"
            className="h-11 px-5 text-sm font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link to="/services">
              Explore Services
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 border-border bg-background/50 px-5 text-sm font-semibold text-foreground hover:bg-accent hover:border-primary/30 transition-all backdrop-blur-sm"
          >
            <Link to="/contact" hash="request">SLA Consultation</Link>
          </Button>
        </div>

        {/* ─── TRUSTED BY — Stars + Partner Logos ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-5 w-full"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="size-4 text-yellow-400 fill-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground/80">
              Trusted by 1,000+ businesses
            </span>
          </div>

          {/* Partner badges: overlapping stack with premium hover effect */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start -space-x-2 sm:-space-x-3">
            {partnerBadges.map((partner, idx) => (
              <div
                key={partner.name}
                className="relative group transition-all duration-300 hover:z-[100] hover:scale-110 hover:-translate-y-2"
                style={{ zIndex: partnerBadges.length - idx }}
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-white/80 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-primary/30 dark:border-slate-800/80 dark:bg-slate-800/90">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-full w-full object-contain p-1.5"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Tooltip on hover */}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[8px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ─── RIGHT COLUMN (Image + Floating Badges) ─── */}
      <div className="relative flex flex-col items-center justify-center gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative flex items-center justify-center w-full max-w-md lg:max-w-full"
        >
          <motion.div
            style={{ scale: imageScale }}
            className="relative w-full overflow-hidden rounded-2xl border border-border/50 shadow-2xl"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="relative w-full pt-[75%] sm:pt-[66%] lg:pt-[56%]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentServiceImage}
                  src={currentServiceImage}
                  alt="Enterprise IT Service"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    opacity: { duration: 0.4, ease: "easeInOut" },
                    scale: { duration: 0.4, ease: "easeInOut" },
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { delay: 0.5, duration: 0.5 },
            }}
            className="absolute -bottom-2 left-2 rounded-xl border border-border/60 bg-white/90 px-2.5 py-2 shadow-xl backdrop-blur-md dark:bg-slate-900/90 sm:-bottom-3 sm:left-3 sm:px-3 sm:py-2.5"
          >
            <p className="font-display text-base font-extrabold text-primary sm:text-lg leading-none">100+</p>
            <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[9px]">
              IT Professionals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { delay: 0.7, duration: 0.5 },
            }}
            className="absolute -top-2 right-2 rounded-xl border border-border/60 bg-white/90 px-2.5 py-2 shadow-xl backdrop-blur-md dark:bg-slate-900/90 sm:-top-3 sm:right-3 sm:px-3 sm:py-2.5"
          >
            <p className="font-display text-sm font-bold text-primary sm:text-base leading-none">30 min</p>
            <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[8px]">
              SLA Response
            </p>
          </motion.div>
        </motion.div>

        {/* Mini Stats */}
        <dl className="grid grid-cols-3 gap-2 w-full max-w-xs mx-auto">
          {[
            { icon: Clock, value: "30 min", label: "Response" },
            { icon: Headset, value: "24/7", label: "Support" },
            { icon: ShieldCheck, value: "8 hubs", label: "Nationwide" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center rounded-xl border border-border/30 bg-white/40 p-2 backdrop-blur-sm dark:bg-slate-800/40">
              <item.icon className="size-3.5 text-primary" />
              <dt className="font-display text-xs font-bold text-foreground leading-none mt-1">
                {item.value}
              </dt>
              <dd className="text-[7px] uppercase tracking-widest text-muted-foreground">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.div>
  </div>

  {/* Scroll hint */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3 }}
    transition={{ delay: 1.2, duration: 1 }}
    className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-1 text-[9px] font-medium tracking-wider uppercase text-muted-foreground/60 pointer-events-none"
  >
    <span>Scroll</span>
    <motion.span
      animate={{ y: [0, 6, 0] }}
      transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      className="h-3 w-px rounded-full bg-muted-foreground/40"
    />
  </motion.div>
</section>



{/* ─── 10. STRATEGIC PARTNERS ─── */}
<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="partners-heading">
  <div className="mx-auto max-w-2xl text-center">
    <span className="eyebrow text-xs font-semibold uppercase tracking-widest text-primary">Alliances</span>
    <h2 id="partners-heading" className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
      Strategic <span className="text-primary">Technology Partners</span>
    </h2>
    <p className="mt-2 text-sm text-muted-foreground">
      Certified alignment with the world's leading enterprise technology vendors.
    </p>
  </div>

  {/* Marquee — apne alag wrapper mein */}
  <div className="relative mt-8 overflow-hidden">
    <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max gap-6 sm:gap-8 py-4">
        {[...partnerBadges, ...partnerBadges, ...partnerBadges].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="group relative flex h-16 w-28 sm:h-20 sm:w-32 lg:h-24 lg:w-36 flex-shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-white/70 p-3 shadow-md backdrop-blur-sm transition-all duration-300 hover:z-20 hover:scale-110 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 dark:bg-slate-800/70 dark:border-slate-700/50"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Mobile Grid Fallback */}
  <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:hidden">
    {partnerBadges.map((partner) => (
      <div key={partner.name} className="flex h-16 w-full items-center justify-center rounded-xl border-2 border-border/40 bg-white/70 p-2 shadow-sm backdrop-blur-sm dark:bg-slate-800/70">
        <img src={partner.logo} alt={`${partner.name} logo`} className="h-full w-full object-contain" loading="lazy" decoding="async" />
      </div>
    ))}
  </div>

  {/* ═══ HPE PARTNERSHIP — marquee ke BAHAR ═══ */}
  <div className="mt-12 text-center">
    <h2 className="font-display text-xl font-bold sm:text-2xl">
      HPE With <span className="text-primary">AI Power Enterprises</span>
    </h2>
    <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
      Certified technology alliance — enterprise servers, storage, hybrid cloud, and 24/7 SLA-backed support across Pakistan.
    </p>
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
  </div>
</section>


      {/* ─── 2. CORE PILLARS ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="pillars-heading">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-xs font-semibold uppercase tracking-widest text-primary">Foundation</span>
          <h2 id="pillars-heading" className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Our <span className="text-primary">Core Pillars</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The five disciplines that define our approach to enterprise technology.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.title as keyof typeof pillarIcons] || Server;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-lift group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:shadow-xl hover:-translate-y-1"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── 3. METRICS ─── */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" aria-labelledby="metrics-heading">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {metrics.map((metric) => (
            <AnimatedCounter key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </section>

      {/* ─── 4. SERVICE PORTFOLIO ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-xs font-semibold uppercase tracking-widest text-primary">Portfolio</span>
          <h2 id="services-heading" className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Key Areas of <span className="text-primary">Expertise</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enterprise‑grade solutions across the full technology lifecycle.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="card-lift group relative overflow-hidden rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary/40 hover:shadow-xl hover:-translate-y-1"
            >
              <Link to={service.link} className="block">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <service.icon className="size-5" />
                </span>
                <h3 className="mt-2 font-display text-xs font-semibold text-foreground sm:text-sm">{service.title}</h3>
                <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                  {service.desc}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="default" className="h-10 px-6 text-sm hover:border-primary/50 transition-all">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ─── 5. CLIENT SECTORS ─── */}
      <section className="border-t border-border bg-card/30 py-12 lg:py-16" aria-labelledby="sectors-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-xs font-semibold uppercase tracking-widest text-primary">Industries</span>
            <h2 id="sectors-heading" className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Serving <span className="text-primary">Diverse Sectors</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our expertise spans across financial, industrial, public, and technology sectors.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {sectors.map((sector) => (
              <div
                key={sector.label}
                className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-background px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-all hover:-translate-y-0.5"
              >
                <sector.icon className="size-3.5 sm:size-4 text-primary" />
                {sector.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. WHY US ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="why-heading">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-xs font-semibold uppercase tracking-widest text-primary">Why AI Power</span>
          <h2 id="why-heading" className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Our <span className="text-primary">Value Proposition</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            What sets us apart — and why organisations trust us with their critical IT environments.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {[
            { icon: Users, text: "Experienced Technical Workforce" },
            { icon: MapPin, text: "Nationwide Service Coverage" },
            { icon: Cpu, text: "Enterprise Technology Expertise" },
            { icon: Globe, text: "Global Technology Partnerships" },
            { icon: Layers, text: "Integrated IT Solutions" },
            { icon: Headset, text: "Responsive Technical Support" },
            { icon: Settings, text: "Flexible Service Models" },
            { icon: ShieldCheck, text: "Preventive & Proactive Maintenance" },
            { icon: Award, text: "Customer‑Centric Service Delivery" },
            { icon: RefreshCw, text: "Long‑Term Technology Partnership" },
          ].map((item, index) => (
            <motion.li
              key={item.text}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 shadow-sm hover:shadow-md hover:border-primary/20 transition-all hover:-translate-y-0.5"
            >
              <item.icon className="mt-0.5 size-4 flex-shrink-0 text-primary" />
              <span className="text-xs font-medium text-foreground sm:text-sm">{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ─── 7. SELECTED CLIENTELE ─── */}
      <section className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5" aria-labelledby="clients-heading">
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-xs font-semibold uppercase tracking-widest text-primary">Our Clients</span>
            <h2 id="clients-heading" className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A diversified client portfolio across financial services, industry, healthcare, education, telecommunications and technology.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
            {[
              { title: "Banking & Financial", clients: clients.filter(c => c.category === "bfsi").slice(0, 6), icon: Building },
              { title: "Industry & Manufacturing", clients: clients.filter(c => c.category === "industrial").slice(0, 6), icon: TrendingUp },
              { title: "Healthcare, Education & Telecom", clients: clients.filter(c => c.category === "public").slice(0, 6), icon: GraduationCap },
            ].map((group) => (
              <div key={group.title} className="rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm hover:border-primary/20 transition-all">
                <h3 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
                  <group.icon className="size-4 text-primary" />
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1">
                  {group.clients.map((client) => (
                    <li key={client.name} className="text-xs text-muted-foreground">{client.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button asChild variant="outline" className="border-border text-foreground hover:border-primary/50 transition-all">
              <Link to="/clients">View Full Client List →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── 8. SLA FRAMEWORK ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="sla-heading">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-xs font-semibold uppercase tracking-widest text-primary">Service Excellence</span>
          <h2 id="sla-heading" className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Our SLA <span className="text-primary">Commitment</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Transparent, measurable service levels to keep your business running.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card/50">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 p-3 sm:p-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { label: "Coverage", value: "24/7 × 365" },
              { label: "Initial Response", value: "Within 30 min" },
              { label: "Part Replacement", value: "Within 4 hrs" },
              { label: "Intervention", value: "Onsite with spares" },
              { label: "Mission-Critical", value: "24/7 model" },
              { label: "Business-Critical", value: "8/5 model" },
              { label: "Service Reporting", value: "Quarterly" },
            ].map((param) => (
              <div key={param.label} className="rounded-lg border border-border/30 p-2.5 sm:p-3 text-center hover:border-primary/30 hover:bg-primary/5 transition-all">
                <dt className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{param.label}</dt>
                <dd className="mt-1 font-display text-sm sm:text-base font-bold text-primary">{param.value}</dd>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center">
          <Button asChild variant="outline" size="sm" className="hover:border-primary/50 transition-all">
            <Link to="/sla">View Full SLA Details →</Link>
          </Button>
        </div>
      </section>

      {/* ─── 9. IMPLEMENTATION APPROACH ─── */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-20" aria-labelledby="approach-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-xs font-semibold uppercase tracking-widest text-primary">Delivery method</span>
            <h2 id="approach-heading" className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Our 6‑Step <span className="text-primary">Implementation Approach</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A disciplined delivery method that de‑risks every enterprise rollout.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="card-lift relative overflow-hidden rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 font-display text-xs font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. CTA ─── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-background to-primary/5 px-6 py-12 text-center sm:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0EA5E9_0%,_transparent_60%)] opacity-[0.04]" />
          <div className="relative mx-auto max-w-2xl">
            <Zap className="mx-auto size-8 text-primary" />
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Ready to secure your infrastructure with a 30‑minute SLA?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Talk to our engineering team about servers, CCTV, networking, licensing and managed
              support — nationwide across Pakistan.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-sm bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-[0.98]">
                <Link to="/contact" hash="request">
                  Request a Quote
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-border bg-background/50 px-6 text-sm text-foreground hover:bg-accent hover:border-primary/30 transition-all"
              >
                <Link to="/services">
                  <PhoneCall className="size-4" />
                  View SLA Models
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}