import partnerMicrosoft from "@/assets/partners/microsoft.jpeg";
import partnerRedhat from "@/assets/partners/redhat.jpeg";
import partnerHp from "@/assets/partners/hp.jpeg";
import partnerDell from "@/assets/partners/dell.jpeg";
import partnerCisco from "@/assets/partners/cisco.jpeg";
import partnerFujitsu from "@/assets/partners/fujitsu.jpeg";

// ─── Types ──────────────────────────────────────────────────────────
export type NavLink = { label: string; to: string; hash?: string };
export type ClientCategory = "bfsi" | "industrial" | "public";
export type SocialPlatform = "linkedin";
export type HeroImageKey =
  | "datacenter"
  | "servers"
  | "storage"
  | "networking"
  | "cctv"
  | "managed"
  | "sla";
export type ServiceSlug =
  | "datacenter"
  | "servers"
  | "storage"
  | "networking"
  | "cctv"
  | "managed-services"
  | "sla";
export type Service = {
  slug: ServiceSlug;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  heroImageKey: HeroImageKey;
  icon: string;
  items: string[];
  seo: { title: string; description: string; keywords: string[] };
};

// ─── Helpers ────────────────────────────────────────────────────────
const digitsOnly = (s: string): string => s.replace(/\D/g, "");

// ─── Company Information ──────────────────────────────────────────
export const company = {
  name: "AI POWER ENTERPRISES",
  tagline: "IT Services",
  promise: "Technology that works. Support that lasts.",
  description:
    "A technology‑driven partner for enterprise infrastructure, integration, managed services and technical support — across Pakistan and internationally.",
  overview:
    "AI Power Enterprises is a technology‑driven solutions and services company providing enterprise IT infrastructure, systems integration, managed services, professional consultancy, and technical support to organisations across Pakistan and international markets.",
  address:
    "Office #516, Anum Blessings, Plot No. ZCC KECHSU Block 7/8, Shahrah-e-Faisal, Karachi, Pakistan",
  addressParts: {
    street:
      "Office #516, Anum Blessings, Plot No. ZCC KECHSU Block 7/8, Shahrah-e-Faisal",
    city: "Karachi",
    region: "Sindh",
    postalCode: "75350",
    country: "PK",
    countryName: "Pakistan",
  },
  geo: { latitude: 24.8671999, longitude: 67.080552 },
  emails: {
    info: "info@aipowerent.net",
    sales: "sales@aipowerent.net",
  },
  phone: "+92 21 33382931",
  whatsapp: "+92 310 3059090",
  hours: {
    weekdays: "Monday – Saturday",
    open: "09:00",
    close: "19:00",
    display: "Mon – Sat: 9:00 AM – 7:00 PM (PKT)",
    closed: "Sunday",
    supportNote:
      "24/7 SLA support desk available for mission-critical contracts.",
  },
  website: "https://aipowerent.net",
  founded: "2025",
  whatsappMessage:
    "Hello AI Power Enterprises, I would like to discuss enterprise IT services and SLA support.",
} as const;

// ─── Contact Helpers ────────────────────────────────────────────────
export const telLink = (num: string = company.phone): string =>
  `tel:+${digitsOnly(num)}`;

export const mailtoLink = (
  email: string,
  subject?: string,
  body?: string,
): string => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${email}${q ? `?${q}` : ""}`;
};

// ✅ String constant — drop-in replacement (existing components safe)
export const whatsappLink = `https://wa.me/${digitsOnly(
  company.whatsapp,
)}?text=${encodeURIComponent(company.whatsappMessage)}`;

// For custom messages only (new — optional)
export const whatsappLinkWith = (message: string): string =>
  `https://wa.me/${digitsOnly(company.whatsapp)}?text=${encodeURIComponent(
    message,
  )}`;

// ─── Social Links ───────────────────────────────────────────────────
export const social: Partial<Record<SocialPlatform, string>> = {
  linkedin: "https://www.linkedin.com/company/aipowerent/",
};

// ─── Site-Wide SEO Config ───────────────────────────────────────────
export const siteConfig = {
  url: company.website,
  defaultTitle:
    "AI Power Enterprises | IT Infrastructure & Managed Services",
  titleTemplate: "%s | AI Power Enterprises",
  defaultDescription:
    "Enterprise IT infrastructure, servers, storage, networking, CCTV & 24/7 SLA-based managed services across Pakistan. Trusted partner for mission-critical IT.",
  defaultKeywords: [
    "AI Power Enterprises",
    "IT infrastructure Pakistan",
    "enterprise IT Pakistan",
    "IT infrastructure Karachi",
    "data centre solutions Pakistan",
    "server support Karachi",
    "storage solutions Pakistan",
    "networking solutions Pakistan",
    "CCTV surveillance Pakistan",
    "managed IT services",
    "SLA support Pakistan",
    "24/7 IT support Karachi",
    "systems integration Pakistan",
  ],
  ogImage: "/og-default.jpg",
  locale: "en_PK",
  themeColor: "#0A192F",
} as const;

// ─── Mission & Vision ──────────────────────────────────────────────
export const mission =
  "To enable organisations to achieve greater operational efficiency and business continuity through reliable, secure, scalable, and intelligently designed technology solutions.";

export const vision =
  "To become a trusted technology and systems integration partner recognised for engineering expertise, dependable service delivery, strong technology partnerships, and the ability to translate complex IT requirements into practical business solutions.";

// ─── Navigation ────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Clients", to: "/clients" },
  { label: "SLA", to: "/sla" },
  { label: "Contact", to: "/contact" },
];

// ─── Services Dropdown (for Navbar) ─────────────────────────────
export const serviceNavLinks: NavLink[] = [
  { label: "Data Centre", to: "/datacenter" },
  { label: "Servers & Compute", to: "/servers" },
  { label: "Storage & Backup", to: "/storage" },
  { label: "Networking", to: "/networking" },
  { label: "CCTV & Surveillance", to: "/cctv" },
  { label: "Managed Services", to: "/managed-services" },
  { label: "SLA Support", to: "/sla" },
];

// ─── Core Pillars (detailed) ─────────────────────────────────────
export const pillars = [
  {
    number: "01",
    title: "Infrastructure",
    description:
      "Enterprise infrastructure and core technology platforms built to scale. We design, deploy, and maintain data centre, server, storage, and networking hardware.",
    icon: "Database",
  },
  {
    number: "02",
    title: "Integration",
    description:
      "Connected environments engineered for speed and reliability. We integrate compute, storage, networking, and virtualization into cohesive ecosystems.",
    icon: "Layers",
  },
  {
    number: "03",
    title: "Licensing",
    description:
      "Structured software procurement and renewals across Microsoft and Red Hat. We manage entitlements, compliance, and cost optimisation.",
    icon: "ShoppingBag",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Managed services, preventive maintenance and contractual SLA support. 24/7 helpdesk, onsite intervention, and spare parts provision.",
    icon: "Headset",
  },
  {
    number: "05",
    title: "Consultancy",
    description:
      "Technical advice, architecture planning and knowledge transfer. We help you assess, plan, and implement technology solutions.",
    icon: "Briefcase",
  },
];

// ─── Technology & Service Portfolio ──────────────────────────────
export const technologyPortfolio = [
  "Data Centre Solutions",
  "Servers and High-Performance Computing",
  "Storage and Backup Solutions",
  "SAN/NAS Infrastructure",
  "Unified Computing Platforms",
  "Network Infrastructure and Connectivity",
  "LAN/WAN and VPN Solutions",
  "Managed IT Services",
  "Hardware and Software Support",
  "Operating System Support",
  "Enterprise Application Support",
  "Disaster Recovery Solutions",
  "Professional Consultancy Services",
  "Technical Training and Knowledge Transfer",
];

// ─── Managed Services ──────────────────────────────────────────────
export const managedServices = [
  "Infrastructure Monitoring and Support",
  "Helpdesk and Call Management",
  "Incident Management",
  "Problem Management",
  "Preventive Maintenance",
  "Hardware Support",
  "Software and Operating System Support",
  "Network Support",
  "Backup and Recovery Support",
  "Resident Engineering Services",
  "Technical Consultancy",
  "Customer-Specific Support Services",
];

// ─── Consultancy Services ──────────────────────────────────────────
export const consultancyServices = [
  "Technology assessment and audit",
  "Architecture design and planning",
  "Implementation guidance",
  "Knowledge transfer and training",
  "Performance optimisation",
  "Security and compliance reviews",
];

// ─── Support Models ────────────────────────────────────────────────
export const supportModels = [
  {
    title: "Mission-Critical",
    coverage: "24/7/365",
    description:
      "Continuous support for environments where system availability and rapid incident response are essential.",
    features: [
      "24/7 Call Management",
      "Priority Onsite Intervention",
      "Dedicated Spare Parts Pool",
      "Quarterly Service Reporting",
    ],
  },
  {
    title: "Business-Critical",
    coverage: "8/5",
    description:
      "Business-hours support for environments requiring dependable technical assistance during standard operating hours.",
    features: [
      "Business-hours Call Management",
      "Scheduled Onsite Intervention",
      "Shared Spare Parts Pool",
      "Quarterly Service Reporting",
    ],
  },
  {
    title: "Customer-Defined",
    coverage: "Custom",
    description:
      "Tailored support arrangements based on specific infrastructure, application, location, and operational requirements.",
    features: [
      "Customised Coverage",
      "Flexible Response Times",
      "Adaptable Service Level Agreements",
    ],
  },
];

// ─── Hardware & Software Support (AMC) ──────────────────────────
export const amcServices = [
  "Resident Engineer Services",
  "Operating System Support",
  "Application Support",
  "LAN/WAN Support",
  "Preventive Maintenance",
  "Technical Consultancy",
];

// ─── Network Services ─────────────────────────────────────────────
export const networkServices = [
  "Network Troubleshooting",
  "Email Infrastructure Support",
  "Connectivity Support",
  "Network Equipment Maintenance",
];

// ─── Operating System & Virtualization Support ──────────────────
export const osSupport = [
  "Windows Server",
  "Red Hat Enterprise Linux (RHEL)",
  "VMware vSphere",
  "Microsoft Hyper-V",
  "AIX, Solaris (on request)",
];

// ─── Enterprise Application Support ─────────────────────────────
export const appSupport = [
  "Facilities Management Systems (FMS)",
  "Enterprise Asset Management (EAM)",
  "ERP Systems",
  "CRM Platforms",
  "Business Intelligence (BI) Tools",
];

// ─── Disaster Recovery Services ──────────────────────────────────
export const disasterRecovery = [
  "Business Continuity Support",
  "Data Protection and Backup",
  "Recovery Testing and Technical Assistance",
  "Infrastructure Redundancy Planning",
  "Disaster Recovery as a Service (DRaaS)",
];

// ─── Technical Training ──────────────────────────────────────────
export const trainingServices = [
  "Foundation-level training (user awareness)",
  "Intermediate technical training",
  "Advanced engineering workshops",
  "Customised knowledge transfer programmes",
];

// ─── Strategic Partners ──────────────────────────────────────────
export const partners = [
  {
    name: "Microsoft",
    focus: "Windows Server, Azure, Microsoft 365, SQL Server",
    badge: "Licensing & Cloud Partner",
    logo: partnerMicrosoft,
  },
  {
    name: "Red Hat",
    focus: "RHEL, OpenShift, Ansible Automation",
    badge: "Open Source Enterprise Partner",
    logo: partnerRedhat,
  },
  {
    name: "Hewlett Packard Enterprise",
    focus: "Servers, Blades, Storage, Networking",
    badge: "Enterprise Compute Partner",
    logo: partnerHp,
  },
  {
    name: "Dell Technologies",
    focus: "PowerEdge, PowerStore, Client Solutions",
    badge: "Infrastructure Partner",
    logo: partnerDell,
  },
  {
    name: "Cisco Systems",
    focus: "Routing, Switching, Wireless, Security",
    badge: "Networking Partner",
    logo: partnerCisco,
  },
  {
    name: "Fujitsu",
    focus: "Enterprise Servers, Storage, Client Computing",
    badge: "Technology Partner",
    logo: partnerFujitsu,
  },
];

// ─── Nationwide Hubs ──────────────────────────────────────────────
export const hubs = [
  { city: "Karachi", role: "Head Office & Command Centre" },
  { city: "Islamabad", role: "Regional Technical Hub" },
  { city: "Lahore", role: "Regional Technical Hub" },
  { city: "Multan", role: "Field Support Hub" },
  { city: "Faisalabad", role: "Field Support Hub" },
  { city: "Peshawar", role: "Field Support Hub" },
  { city: "Gilgit", role: "Field Support Hub" },
  { city: "Quetta", role: "Field Support Hub" },
];

export const branchCities = hubs.map((h) => h.city);

// ─── Client Categories ────────────────────────────────────────────
export const clientCategories: { id: ClientCategory; label: string }[] = [
  { id: "bfsi", label: "Banking & Financial Services" },
  { id: "industrial", label: "Industrial, Oil & Gas, FMCG" },
  { id: "public", label: "Healthcare, Education & Telecom" },
];

// ─── Clients ─────────────────────────────────────────────────────
export const clients: {
  name: string;
  category: ClientCategory;
  tag: string;
}[] = [
  ...[
    "Habib Bank Limited (HBL)",
    "United Bank Limited (UBL)",
    "MCB Bank",
    "Meezan Bank",
    "Bank of Punjab (BOP)",
    "Standard Chartered Bank",
    "Askari Bank",
    "Allied Bank",
    "Bank Alfalah",
    "Faysal Bank",
    "National Bank of Pakistan (NBP)",
    "Dubai Islamic Bank",
    "Citibank N.A.",
    "Bank of China",
    "Easypaisa",
    "JazzCash",
  ].map((name) => ({
    name,
    category: "bfsi" as const,
    tag: "BFSI",
  })),

  ...[
    "Fauji Fertilizer (FFC)",
    "Fatima Group",
    "MOL Group",
    "DG Cement",
    "Lucky Cement",
    "OGDCL",
    "Pakistan Petroleum Limited (PPL)",
    "Pakistan State Oil (PSO)",
    "Packages Limited",
    "Nishat Group",
    "Systems Limited",
    "NetSol Technologies",
    "Interloop",
    "Indus Motor Company (IMC)",
    "Unilever Pakistan",
    "Nestlé Pakistan",
    "Coca-Cola",
    "PepsiCo",
  ].map((name) => ({
    name,
    category: "industrial" as const,
    tag: "Industrial",
  })),

  ...[
    "Aga Khan University Hospital",
    "Indus Hospital",
    "Liaquat National Hospital",
    "LUMS",
    "NUST",
    "IBA Karachi",
    "COMSATS",
    "Jazz",
    "Ufone",
    "Zong 4G",
    "PTCL",
  ].map((name) => ({
    name,
    category: "public" as const,
    tag: "Public Sector",
  })),
];

// ─── SLA Parameters ──────────────────────────────────────────────
export const slaParameters = [
  {
    label: "Coverage Window",
    value: "24/7 × 365 mission-critical availability",
  },
  { label: "Initial Response", value: "Within 30 minutes of ticket logging" },
  { label: "Part Replacement", value: "Within 4 working hours" },
  {
    label: "Intervention",
    value: "Onsite support with spare parts availability",
  },
];

// ─── SLA Models ──────────────────────────────────────────────────
export const slaModels = [
  {
    title: "Mission-Critical",
    coverage: "24/7 support",
    points: [
      "Round-the-clock call management",
      "Priority onsite intervention",
      "Dedicated spare parts pool",
    ],
  },
  {
    title: "Business-Critical",
    coverage: "8/5 support",
    points: [
      "Business-hours call management",
      "Scheduled onsite intervention",
      "Shared spare parts pool",
    ],
  },
  {
    title: "Customer-Defined",
    coverage: "Custom SLA",
    points: [
      "Tailored coverage windows",
      "Flexible response times",
      "Bespoke service level agreements",
    ],
  },
];

// ─── SLA Deliverables ────────────────────────────────────────────
export const slaDeliverables = [
  "24/7 Call Management",
  "Problem Analysis & Diagnosis",
  "Action Plan & Resolution",
  "Onsite Hardware Intervention",
  "Spare Parts Provision",
  "Preventive Maintenance",
  "Service Reporting (Quarterly)",
];

// ─── Implementation Approach ─────────────────────────────────────
export const approachSteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understanding the customer's existing environment, business objectives, operational challenges, and technology requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Developing practical and scalable architecture aligned with performance, security, availability, and budget considerations.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Implementing infrastructure and technology solutions using structured project and deployment methodologies.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connecting infrastructure, applications, networks, storage, virtualization, and cloud environments into a cohesive technology ecosystem.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Providing ongoing technical assistance, maintenance, monitoring, troubleshooting, and SLA-based support.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Continuously identifying opportunities to enhance performance, reliability, scalability, and operational efficiency.",
  },
];

// ─── Why Us (Value Propositions) ─────────────────────────────────
export const valueProps = [
  "Experienced Technical Workforce",
  "Nationwide Service Coverage",
  "Enterprise Technology Expertise",
  "Global Technology Partnerships",
  "Integrated IT Solutions",
  "Responsive Technical Support",
  "Flexible Service Models",
  "Preventive & Proactive Maintenance",
  "Customer‑Centric Service Delivery",
  "Long‑Term Technology Partnership",
];

// ─── Metrics ──────────────────────────────────────────────────────
export const metrics = [
  {
    value: "100+",
    label: "Skilled IT Professionals",
    note: "Certified engineering bench",
  },
  {
    value: "8",
    label: "Major Technical Hubs",
    note: "Nationwide field presence",
  },
  {
    value: "30 Mins",
    label: "SLA Response Commitment",
    note: "Initial response guarantee",
  },
  {
    value: "24/7 × 365",
    label: "Mission-Critical Coverage",
    note: "Always-on support desk",
  },
];

// ─── Service Sections (for /services page) ──────────────────────
export type ServiceSection = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  icon?: string;
};

export const serviceSections: ServiceSection[] = [
  {
    id: "servers",
    title: "High-Performance Servers & Computing",
    summary:
      "Enterprise compute, storage and data protection engineered for continuous operations.",
    items: [
      "Enterprise high-end servers and blade systems",
      "Engineered systems and unified compute platforms",
      "SAN and NAS enterprise storage solutions",
      "Backup and recovery infrastructure",
    ],
    icon: "Database",
  },
  {
    id: "cctv",
    title: "CCTV & Enterprise Security Surveillance",
    summary:
      "End-to-end IP surveillance from site assessment to command room operations.",
    items: [
      "IP CCTV surveillance design and site assessment",
      "Network-based video transmission and storage infrastructure",
      "Centralized surveillance management and command rooms",
      "Ongoing CCTV preventive maintenance and support",
    ],
    icon: "Camera",
  },
  {
    id: "networking",
    title: "Network Passive & Active Infrastructure",
    summary:
      "Structured cabling through to core switching, wireless and perimeter security.",
    items: [
      "Structured cabling: Cat6, Cat6A and high-speed fibre-optic",
      "Data centre server racks and cable containment systems",
      "Enterprise routing, core switching and wireless AP controllers",
      "Next-gen firewalls, VPN gateways and network security",
    ],
    icon: "Wifi",
  },
  {
    id: "licensing",
    title: "Enterprise Software Licensing & Virtualization",
    summary:
      "Compliant licensing, virtualization and enterprise application platforms.",
    items: [
      "Microsoft Windows Server, Azure, Microsoft 365, SQL Server",
      "Red Hat Enterprise Linux (RHEL), OpenShift, Ansible",
      "VMware virtualization platforms",
      "Enterprise applications: ERP, CRM, BI and FMS",
    ],
    icon: "ShoppingBag",
  },
  {
    id: "managed-services",
    title: "Managed IT Services & Technical Operations",
    summary:
      "Reliable technical support, incident management, and proactive maintenance.",
    items: managedServices,
    icon: "Settings",
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery & Business Continuity",
    summary:
      "Comprehensive recovery strategies, backup testing and technical assistance.",
    items: disasterRecovery,
    icon: "Activity",
  },
];

// ─── Unified Services Catalog ────────────────────────────────────
export const services: Service[] = [
  {
    slug: "datacenter",
    path: "/datacenter",
    title: "Data Centre Solutions",
    shortTitle: "Data Centre",
    summary:
      "Design, build and operate enterprise data centres — racks, containment, power, cooling and structured cabling.",
    heroImageKey: "datacenter",
    icon: "Server",
    items: [
      "Data centre design and site assessment",
      "Server racks, containment and structured cabling",
      "Power distribution and UPS integration",
      "Cooling and environmental monitoring",
      "Physical security and access control integration",
      "Migration, consolidation and modernisation",
    ],
    seo: {
      title: "Data Centre Solutions in Pakistan | Design, Build & Operate",
      description:
        "End-to-end data centre solutions in Karachi and across Pakistan — design, rack & cabling, power, cooling and monitoring.",
      keywords: [
        "data centre solutions Pakistan",
        "data center design Karachi",
        "server rack installation Pakistan",
        "enterprise data centre Karachi",
      ],
    },
  },
  {
    slug: "servers",
    path: "/servers",
    title: "High-Performance Servers & Compute",
    shortTitle: "Servers & Compute",
    summary:
      "Enterprise servers, blades and engineered systems sized, deployed and supported for continuous operations.",
    heroImageKey: "servers",
    icon: "Database",
    items: [
      "Enterprise rack, tower and blade servers",
      "Engineered and unified compute platforms",
      "Virtualization-ready hardware (VMware, Hyper-V)",
      "High-availability clustering and redundancy",
      "Performance tuning and capacity planning",
      "Server lifecycle support and AMC",
    ],
    seo: {
      title: "Enterprise Servers & Compute Solutions | AI Power Enterprises",
      description:
        "Supply, deployment and support of enterprise servers, blades and engineered compute platforms in Pakistan.",
      keywords: [
        "enterprise servers Pakistan",
        "blade servers Karachi",
        "server AMC Pakistan",
      ],
    },
  },
  {
    slug: "storage",
    path: "/storage",
    title: "Storage & Backup Solutions",
    shortTitle: "Storage & Backup",
    summary:
      "SAN, NAS and backup infrastructure engineered for data integrity, performance and disaster resilience.",
    heroImageKey: "storage",
    icon: "HardDrive",
    items: [
      "SAN and NAS enterprise storage",
      "All-flash and hybrid storage arrays",
      "Backup and recovery infrastructure",
      "Tape and disk-based archival",
      "Replication and snapshot strategies",
      "Storage performance and capacity management",
    ],
    seo: {
      title: "Enterprise Storage & Backup Solutions in Pakistan | SAN, NAS",
      description:
        "SAN, NAS, all-flash and backup infrastructure engineered for performance and resilience across Pakistan.",
      keywords: [
        "enterprise storage Pakistan",
        "SAN NAS solutions Karachi",
        "backup solutions Pakistan",
      ],
    },
  },
  {
    slug: "networking",
    path: "/networking",
    title: "Network Passive & Active Infrastructure",
    shortTitle: "Networking",
    summary:
      "From structured cabling to core switching, wireless and perimeter security — networks built for scale.",
    heroImageKey: "networking",
    icon: "Wifi",
    items: [
      "Structured cabling: Cat6, Cat6A and fibre-optic",
      "Data centre racks and cable containment systems",
      "Enterprise routing, core switching and wireless",
      "Next-gen firewalls, VPN gateways and network security",
      "LAN/WAN design and optimisation",
      "Network monitoring and managed operations",
    ],
    seo: {
      title: "Enterprise Networking Solutions in Pakistan | LAN, WAN, Wi-Fi",
      description:
        "Structured cabling, core switching, wireless, firewalls and VPN — enterprise networking across Pakistan.",
      keywords: [
        "networking solutions Pakistan",
        "structured cabling Karachi",
        "enterprise Wi-Fi deployment",
      ],
    },
  },
  {
    slug: "cctv",
    path: "/cctv",
    title: "CCTV & Enterprise Security Surveillance",
    shortTitle: "CCTV & Surveillance",
    summary:
      "End-to-end IP surveillance — from site assessment to command room operations and ongoing maintenance.",
    heroImageKey: "cctv",
    icon: "Camera",
    items: [
      "IP CCTV surveillance design and site assessment",
      "Network-based video transmission and storage",
      "Centralized surveillance management and command rooms",
      "Analytics: motion, perimeter, ANPR",
      "Preventive maintenance and SLA support",
      "Integration with access control and alarms",
    ],
    seo: {
      title: "IP CCTV & Surveillance Solutions in Pakistan | Enterprise Grade",
      description:
        "Enterprise IP CCTV surveillance design, installation and support across Pakistan.",
      keywords: [
        "CCTV solutions Pakistan",
        "IP camera installation Karachi",
        "enterprise surveillance Pakistan",
      ],
    },
  },
  {
    slug: "managed-services",
    path: "/managed-services",
    title: "Managed IT Services & Technical Operations",
    shortTitle: "Managed Services",
    summary:
      "Reliable technical support, incident management, and proactive maintenance under flexible service models.",
    heroImageKey: "managed",
    icon: "Settings",
    items: [
      "Infrastructure monitoring and support",
      "Helpdesk and call management",
      "Incident and problem management",
      "Preventive maintenance",
      "Hardware, OS and application support",
      "Resident engineering services",
    ],
    seo: {
      title: "Managed IT Services in Pakistan | 24/7 Support & Monitoring",
      description:
        "Managed IT services in Pakistan — helpdesk, monitoring, preventive maintenance and resident engineers.",
      keywords: [
        "managed IT services Pakistan",
        "24/7 IT support Karachi",
        "IT AMC Karachi",
      ],
    },
  },
  {
    slug: "sla",
    path: "/sla",
    title: "SLA-Based Support & Maintenance",
    shortTitle: "SLA Support",
    summary:
      "Contractual service levels — 24/7 mission-critical, 8/5 business-critical or fully customer-defined.",
    heroImageKey: "sla",
    icon: "ShieldCheck",
    items: [
      "30-minute initial response commitment",
      "Part replacement within 4 working hours",
      "Onsite intervention with spare parts",
      "Dedicated or shared spare parts pool",
      "Quarterly service reporting",
      "Mission-critical, business-critical and custom models",
    ],
    seo: {
      title: "SLA Support & Maintenance in Pakistan | 24/7 Mission-Critical",
      description:
        "Contractual SLA support with 30-minute response and 24/7/365 coverage across Pakistan.",
      keywords: [
        "SLA support Pakistan",
        "24/7 IT maintenance Karachi",
        "AMC services Pakistan",
      ],
    },
  },
];

export const serviceSlugs = services.map((s) => s.slug);

// ─── Extended Service Lists (aliases) ───────────────────────────
export const licensingServices = [
  "Microsoft Windows Server, Azure, Microsoft 365, SQL Server",
  "Red Hat Enterprise Linux (RHEL), OpenShift, Ansible Automation",
  "VMware virtualization platforms",
  "Enterprise applications: ERP, CRM, BI and FMS",
  "License compliance reviews and true-ups",
  "Cost optimisation and renewal management",
];

// ─── Service Priorities (for chatbot) ───────────────────────────
export const servicePriorities = [
  "SLA Support",
  "CCTV Systems",
  "Server Hardware",
  "Data Centre",
  "Network Cabling",
] as const;

// ─── FAQ (extended) ─────────────────────────────────────────────
export const faqs = [
  {
    question: "What is your SLA response time?",
    answer:
      "Our contractual commitment is an initial response within 30 minutes, 24/7, with part replacement within 4 working hours.",
  },
  {
    question: "Do you design and install CCTV systems?",
    answer:
      "Yes. We handle IP CCTV site assessment, design, network video transmission, storage, command rooms and ongoing preventive maintenance.",
  },
  {
    question: "What server hardware do you supply?",
    answer:
      "Enterprise high-end servers and blades, engineered/unified compute platforms, SAN & NAS storage, plus backup and recovery infrastructure.",
  },
  {
    question: "Where is your office located?",
    answer: `Our head office is in Karachi: ${company.address}`,
  },
  {
    question: "Which cities do you cover in Pakistan?",
    answer:
      "We operate from Karachi with regional hubs in Islamabad and Lahore, and field support across Multan, Faisalabad, Peshawar, Gilgit, and Quetta.",
  },
  {
    question: "Do you provide 24/7 support?",
    answer:
      "Yes — our Mission-Critical SLA offers 24/7 call management and priority onsite intervention.",
  },
  {
    question: "Can you support existing infrastructure from other vendors?",
    answer:
      "Yes. We support multi-vendor environments including HPE, Dell, Cisco, Microsoft, Red Hat and more.",
  },
  {
    question: "How do I request a quote or site assessment?",
    answer: `Call our office at ${company.phone}, WhatsApp us at ${company.whatsapp}, or email ${company.emails.sales}.`,
  },
];

// ─── Chatbot FAQs (unchanged) ──────────────────────────────────
export const chatbotFaqs = faqs.slice(0, 4);

// ─── Organization JSON-LD ───────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.name,
  url: company.website,
  logo: `${company.website}/logo.png`,
  foundingDate: company.founded,
  description: company.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.addressParts.street,
    addressLocality: company.addressParts.city,
    addressRegion: company.addressParts.region,
    postalCode: company.addressParts.postalCode,
    addressCountry: company.addressParts.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.geo.latitude,
    longitude: company.geo.longitude,
  },
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
      telephone: company.phone,
      contactType: "sales",
      email: company.emails.sales,
      areaServed: "PK",
      availableLanguage: ["en", "ur"],
    },
    {
      "@type": "ContactPoint",
      telephone: company.whatsapp,
      contactType: "technical support",
      email: company.emails.info,
      areaServed: "PK",
      availableLanguage: ["en", "ur"],
    },
  ],
  sameAs: Object.values(social).filter(Boolean) as string[],
};

// ─── LocalBusiness JSON-LD ──────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  image: `${company.website}${siteConfig.ogImage}`,
  url: company.website,
  telephone: company.phone,
  email: company.emails.info,
  address: organizationSchema.address,
  geo: organizationSchema.geo,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: company.hours.open,
      closes: company.hours.close,
    },
  ],
  sameAs: organizationSchema.sameAs,
  areaServed: branchCities.map((c) => ({ "@type": "City", name: c })),
};

// ═══════════════════════════════════════════════════════════════════
// EXTENDED SCHEMA EXPORTS — High-Value SEO Additions
// Ye section __root.tsx aur per-page SEO ke liye use hoga
// ═══════════════════════════════════════════════════════════════════

// ─── Helper: strips @context so schema can safely nest inside @graph ─
// Usage: stripContext(organizationSchema) → object without @context
export const stripContext = <T extends Record<string, unknown>>(
  schema: T,
): Omit<T, "@context"> => {
  const { "@context": _ctx, ...rest } = schema;
  void _ctx;
  return rest as Omit<T, "@context">;
};

// ─── Organization: knowsAbout (Topical Authority signal) ───────────
// Google Knowledge Panel + AI Overviews ke liye important
export const organizationKnowsAbout: string[] = [
  "Data Centre Infrastructure",
  "Enterprise Servers",
  "Storage Area Networks (SAN)",
  "Network Attached Storage (NAS)",
  "Structured Cabling",
  "Enterprise Networking",
  "IP CCTV Surveillance",
  "Managed IT Services",
  "Service Level Agreements (SLA)",
  "Disaster Recovery",
  "Virtualization (VMware, Hyper-V)",
  "Red Hat Enterprise Linux",
  "Microsoft Windows Server",
  "Microsoft Azure",
  "Enterprise Software Licensing",
  "Systems Integration",
];

// ─── Organization: hasOfferCatalog (Service Rich Results) ──────────
// Google Search mein services directly list hongi
export const organizationOfferCatalog = {
  "@type": "OfferCatalog",
  name: "Enterprise IT Services",
  description:
    "Infrastructure, integration, licensing, managed services and SLA-based support across Pakistan.",
  itemListElement: services.map((service, index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      url: `${company.website}${service.path}`,
      serviceType: service.shortTitle,
      areaServed: { "@type": "Country", name: "Pakistan" },
      provider: {
        "@type": "Organization",
        "@id": `${company.website}/#organization`,
      },
    },
  })),
};

// ─── WebSite Schema ────────────────────────────────────────────────
// Moved from __root.tsx for single-source-of-truth consistency
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: company.website,
  name: company.name,
  description: siteConfig.defaultDescription,
  publisher: { "@id": `${company.website}/#organization` },
  inLanguage: "en-PK",
};

// ─── FAQPage Schema Builder ────────────────────────────────────────
// Har page pe jahan FAQ section ho, wahan use karo:
//   const faqLd = faqPageSchema();                    // all FAQs
//   const faqLd = faqPageSchema(faqs.slice(0, 4));    // subset
export const faqPageSchema = (
  items: { question: string; answer: string }[] = faqs,
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// ─── BreadcrumbList Schema Builder ─────────────────────────────────
// Har page pe use karo:
//   breadcrumbSchema([
//     { name: "Home", url: "/" },
//     { name: "Services", url: "/services" },
//   ])
export const breadcrumbSchema = (
  items: { name: string; url: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url.startsWith("http")
      ? item.url
      : `${company.website}${item.url}`,
  })),
});

// ─── Service Schema Builder ────────────────────────────────────────
// Har service page pe use karo:
//   const svc = services.find((s) => s.slug === "cctv");
//   const svcLd = svc ? serviceSchema(svc) : null;
export const serviceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.summary,
  url: `${company.website}${service.path}`,
  serviceType: service.shortTitle,
  provider: {
    "@type": "Organization",
    "@id": `${company.website}/#organization`,
    name: company.name,
    url: company.website,
  },
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "City", name: "Karachi" },
    { "@type": "City", name: "Islamabad" },
    { "@type": "City", name: "Lahore" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${service.title} — Capabilities`,
    itemListElement: service.items.map((item, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: item,
      },
    })),
  },
});