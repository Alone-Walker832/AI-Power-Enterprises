// ─── Types ──────────────────────────────────────────────────────────
export type NavLink = { label: string; to: string; hash?: string };
export type ClientCategory = "bfsi" | "industrial" | "public";

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
  emails: {
    info: "info@aipowerent.net",
    sales: "sales@aipowerent.net",
  },
  phone: "+92 21 33382931",
  whatsapp: "+92 21 33382931",
  whatsappMessage:
    "Hello AI Power Enterprises, I would like to discuss enterprise IT services and SLA support.",
} as const;

export const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage,
)}`;

// ─── Mission & Vision ──────────────────────────────────────────────
export const mission =
  "To enable organisations to achieve greater operational efficiency and business continuity through reliable, secure, scalable, and intelligently designed technology solutions.";

export const vision =
  "To become a trusted technology and systems integration partner recognised for engineering expertise, dependable service delivery, strong technology partnerships, and the ability to translate complex IT requirements into practical business solutions.";

// ─── Navigation ──────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Services & SLA", to: "/services" },
  { label: "Contact Us", to: "/contact" },
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
    logo: "/logos/microsoft.svg",
  },
  {
    name: "Red Hat",
    focus: "RHEL, OpenShift, Ansible Automation",
    badge: "Open Source Enterprise Partner",
    logo: "/logos/redhat.svg",
  },
  {
    name: "Hewlett Packard Enterprise",
    focus: "Servers, Blades, Storage, Networking",
    badge: "Enterprise Compute Partner",
    logo: "/logos/hpe.svg",
  },
  {
    name: "Dell Technologies",
    focus: "PowerEdge, PowerStore, Client Solutions",
    badge: "Infrastructure Partner",
    logo: "/logos/dell.svg",
  },
  {
    name: "Cisco Systems",
    focus: "Routing, Switching, Wireless, Security",
    badge: "Networking Partner",
    logo: "/logos/cisco.svg",
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

// ─── Branch Cities (simple list) ──────────────────────────────
export const branchCities = hubs.map((h) => h.city);

// ─── Client Categories ────────────────────────────────────────────
export const clientCategories: { id: ClientCategory; label: string }[] = [
  { id: "bfsi", label: "Banking & Financial Services" },
  { id: "industrial", label: "Industrial, Oil & Gas, FMCG" },
  { id: "public", label: "Healthcare, Education & Telecom" },
];

// ─── Clients (with logos – placeholder strings) ──────────────────
export const clients: { name: string; category: ClientCategory; tag: string; logo?: string }[] = [
  // BFSI
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
  ].map((name) => ({ name, category: "bfsi" as const, tag: "BFSI", logo: `/logos/${name.replace(/\s/g, '').toLowerCase()}.png` })),

  // Industrial
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
  ].map((name) => ({ name, category: "industrial" as const, tag: "Industrial", logo: `/logos/${name.replace(/\s/g, '').toLowerCase()}.png` })),

  // Public
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
  ].map((name) => ({ name, category: "public" as const, tag: "Public Sector", logo: `/logos/${name.replace(/\s/g, '').toLowerCase()}.png` })),
];

// ─── SLA Parameters ──────────────────────────────────────────────
export const slaParameters = [
  { label: "Coverage Window", value: "24/7 × 365 mission-critical availability" },
  { label: "Initial Response", value: "Within 30 minutes of ticket logging" },
  { label: "Part Replacement", value: "Within 4 working hours" },
  { label: "Intervention", value: "Onsite support with spare parts availability" },
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
  { value: "100+", label: "Skilled IT Professionals", note: "Certified engineering bench" },
  { value: "8", label: "Major Technical Hubs", note: "Nationwide field presence" },
  { value: "30 Mins", label: "SLA Response Commitment", note: "Initial response guarantee" },
  { value: "24/7 x 365", label: "Mission-Critical Coverage", note: "Always-on support desk" },
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
    id: "network",
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

// ─── Service Priorities (for chatbot / quick links) ────────────
export const servicePriorities = [
  "SLA Support",
  "CCTV Systems",
  "Server Hardware",
  "Data Centre",
  "Network Cabling",
] as const;

// ─── Chatbot FAQs ────────────────────────────────────────────────
export const chatbotFaqs = [
  {
    question: "What is your SLA response time?",
    answer:
      "Our contractual commitment is an initial response within 30 minutes, 24/7 x 365, with part replacement within 4 working hours.",
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
];