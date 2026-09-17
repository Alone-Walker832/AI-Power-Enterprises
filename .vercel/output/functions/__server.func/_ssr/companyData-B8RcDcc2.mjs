import { clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/companyData-B8RcDcc2.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var microsoft_default = "/assets/microsoft-BQWhCU0F.jpeg";
var redhat_default = "/assets/redhat-CKeJidPT.jpeg";
var hp_default = "/assets/hp-_U8DvUBr.jpeg";
var dell_default = "/assets/dell-C3JkZ8gL.jpeg";
var cisco_default = "/assets/cisco-Bn39_lFd.jpeg";
var fujitsu_default = "/assets/fujitsu-BcuEzswl.jpeg";
var digitsOnly = (s) => s.replace(/\D/g, "");
var company = {
	name: "AI POWER ENTERPRISES",
	tagline: "IT Services",
	promise: "Technology that works. Support that lasts.",
	description: "A technology‑driven partner for enterprise infrastructure, integration, managed services and technical support — across Pakistan and internationally.",
	overview: "AI Power Enterprises is a technology‑driven solutions and services company providing enterprise IT infrastructure, systems integration, managed services, professional consultancy, and technical support to organisations across Pakistan and international markets.",
	address: "Office #516, Anum Blessings, Plot No. ZCC KECHSU Block 7/8, Shahrah-e-Faisal, Karachi, Pakistan",
	addressParts: {
		street: "Office #516, Anum Blessings, Plot No. ZCC KECHSU Block 7/8, Shahrah-e-Faisal",
		city: "Karachi",
		region: "Sindh",
		postalCode: "75350",
		country: "PK",
		countryName: "Pakistan"
	},
	geo: {
		latitude: 24.8671999,
		longitude: 67.080552
	},
	emails: {
		info: "info@aipowerent.net",
		sales: "sales@aipowerent.net"
	},
	phone: "+92 21 33382931",
	whatsapp: "+92 310 3059090",
	hours: {
		weekdays: "Monday – Saturday",
		open: "09:00",
		close: "19:00",
		display: "Mon – Sat: 9:00 AM – 7:00 PM (PKT)",
		closed: "Sunday",
		supportNote: "24/7 SLA support desk available for mission-critical contracts."
	},
	website: "https://aipowerent.net",
	founded: "2025",
	whatsappMessage: "Hello AI Power Enterprises, I would like to discuss enterprise IT services and SLA support."
};
var telLink = (num = company.phone) => `tel:+${digitsOnly(num)}`;
var mailtoLink = (email, subject, body) => {
	const params = new URLSearchParams();
	if (subject) params.set("subject", subject);
	if (body) params.set("body", body);
	const q = params.toString();
	return `mailto:${email}${q ? `?${q}` : ""}`;
};
var whatsappLink = `https://wa.me/${digitsOnly(company.whatsapp)}?text=${encodeURIComponent(company.whatsappMessage)}`;
var social = { linkedin: "https://www.linkedin.com/company/aipowerent/" };
var siteConfig = {
	url: company.website,
	defaultTitle: "AI Power Enterprises | IT Infrastructure & Managed Services",
	titleTemplate: "%s | AI Power Enterprises",
	defaultDescription: "Enterprise IT infrastructure, servers, storage, networking, CCTV & 24/7 SLA-based managed services across Pakistan. Trusted partner for mission-critical IT.",
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
		"systems integration Pakistan"
	],
	ogImage: "/og-default.jpg",
	locale: "en_PK",
	themeColor: "#0A192F"
};
var mission = "To enable organisations to achieve greater operational efficiency and business continuity through reliable, secure, scalable, and intelligently designed technology solutions.";
var vision = "To become a trusted technology and systems integration partner recognised for engineering expertise, dependable service delivery, strong technology partnerships, and the ability to translate complex IT requirements into practical business solutions.";
var navLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Clients",
		to: "/clients"
	},
	{
		label: "SLA",
		to: "/sla"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var serviceNavLinks = [
	{
		label: "Data Centre",
		to: "/datacenter"
	},
	{
		label: "Servers & Compute",
		to: "/servers"
	},
	{
		label: "Storage & Backup",
		to: "/storage"
	},
	{
		label: "Networking",
		to: "/networking"
	},
	{
		label: "CCTV & Surveillance",
		to: "/cctv"
	},
	{
		label: "Managed Services",
		to: "/managed-services"
	},
	{
		label: "SLA Support",
		to: "/sla"
	}
];
var pillars = [
	{
		number: "01",
		title: "Infrastructure",
		description: "Enterprise infrastructure and core technology platforms built to scale. We design, deploy, and maintain data centre, server, storage, and networking hardware.",
		icon: "Database"
	},
	{
		number: "02",
		title: "Integration",
		description: "Connected environments engineered for speed and reliability. We integrate compute, storage, networking, and virtualization into cohesive ecosystems.",
		icon: "Layers"
	},
	{
		number: "03",
		title: "Licensing",
		description: "Structured software procurement and renewals across Microsoft and Red Hat. We manage entitlements, compliance, and cost optimisation.",
		icon: "ShoppingBag"
	},
	{
		number: "04",
		title: "Support",
		description: "Managed services, preventive maintenance and contractual SLA support. 24/7 helpdesk, onsite intervention, and spare parts provision.",
		icon: "Headset"
	},
	{
		number: "05",
		title: "Consultancy",
		description: "Technical advice, architecture planning and knowledge transfer. We help you assess, plan, and implement technology solutions.",
		icon: "Briefcase"
	}
];
var technologyPortfolio = [
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
	"Technical Training and Knowledge Transfer"
];
var managedServices = [
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
	"Customer-Specific Support Services"
];
var consultancyServices = [
	"Technology assessment and audit",
	"Architecture design and planning",
	"Implementation guidance",
	"Knowledge transfer and training",
	"Performance optimisation",
	"Security and compliance reviews"
];
var disasterRecovery = [
	"Business Continuity Support",
	"Data Protection and Backup",
	"Recovery Testing and Technical Assistance",
	"Infrastructure Redundancy Planning",
	"Disaster Recovery as a Service (DRaaS)"
];
var partners = [
	{
		name: "Microsoft",
		focus: "Windows Server, Azure, Microsoft 365, SQL Server",
		badge: "Licensing & Cloud Partner",
		logo: microsoft_default
	},
	{
		name: "Red Hat",
		focus: "RHEL, OpenShift, Ansible Automation",
		badge: "Open Source Enterprise Partner",
		logo: redhat_default
	},
	{
		name: "Hewlett Packard Enterprise",
		focus: "Servers, Blades, Storage, Networking",
		badge: "Enterprise Compute Partner",
		logo: hp_default
	},
	{
		name: "Dell Technologies",
		focus: "PowerEdge, PowerStore, Client Solutions",
		badge: "Infrastructure Partner",
		logo: dell_default
	},
	{
		name: "Cisco Systems",
		focus: "Routing, Switching, Wireless, Security",
		badge: "Networking Partner",
		logo: cisco_default
	},
	{
		name: "Fujitsu",
		focus: "Enterprise Servers, Storage, Client Computing",
		badge: "Technology Partner",
		logo: fujitsu_default
	}
];
var hubs = [
	{
		city: "Karachi",
		role: "Head Office & Command Centre"
	},
	{
		city: "Islamabad",
		role: "Regional Technical Hub"
	},
	{
		city: "Lahore",
		role: "Regional Technical Hub"
	},
	{
		city: "Multan",
		role: "Field Support Hub"
	},
	{
		city: "Faisalabad",
		role: "Field Support Hub"
	},
	{
		city: "Peshawar",
		role: "Field Support Hub"
	},
	{
		city: "Gilgit",
		role: "Field Support Hub"
	},
	{
		city: "Quetta",
		role: "Field Support Hub"
	}
];
var branchCities = hubs.map((h) => h.city);
var clientCategories = [
	{
		id: "bfsi",
		label: "Banking & Financial Services"
	},
	{
		id: "industrial",
		label: "Industrial, Oil & Gas, FMCG"
	},
	{
		id: "public",
		label: "Healthcare, Education & Telecom"
	}
];
var clients = [
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
		"JazzCash"
	].map((name) => ({
		name,
		category: "bfsi",
		tag: "BFSI"
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
		"PepsiCo"
	].map((name) => ({
		name,
		category: "industrial",
		tag: "Industrial"
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
		"PTCL"
	].map((name) => ({
		name,
		category: "public",
		tag: "Public Sector"
	}))
];
var slaParameters = [
	{
		label: "Coverage Window",
		value: "24/7 × 365 mission-critical availability"
	},
	{
		label: "Initial Response",
		value: "Within 30 minutes of ticket logging"
	},
	{
		label: "Part Replacement",
		value: "Within 4 working hours"
	},
	{
		label: "Intervention",
		value: "Onsite support with spare parts availability"
	}
];
var slaModels = [
	{
		title: "Mission-Critical",
		coverage: "24/7 support",
		points: [
			"Round-the-clock call management",
			"Priority onsite intervention",
			"Dedicated spare parts pool"
		]
	},
	{
		title: "Business-Critical",
		coverage: "8/5 support",
		points: [
			"Business-hours call management",
			"Scheduled onsite intervention",
			"Shared spare parts pool"
		]
	},
	{
		title: "Customer-Defined",
		coverage: "Custom SLA",
		points: [
			"Tailored coverage windows",
			"Flexible response times",
			"Bespoke service level agreements"
		]
	}
];
var slaDeliverables = [
	"24/7 Call Management",
	"Problem Analysis & Diagnosis",
	"Action Plan & Resolution",
	"Onsite Hardware Intervention",
	"Spare Parts Provision",
	"Preventive Maintenance",
	"Service Reporting (Quarterly)"
];
var approachSteps = [
	{
		number: "01",
		title: "Assess",
		description: "Understanding the customer's existing environment, business objectives, operational challenges, and technology requirements."
	},
	{
		number: "02",
		title: "Design",
		description: "Developing practical and scalable architecture aligned with performance, security, availability, and budget considerations."
	},
	{
		number: "03",
		title: "Deploy",
		description: "Implementing infrastructure and technology solutions using structured project and deployment methodologies."
	},
	{
		number: "04",
		title: "Integrate",
		description: "Connecting infrastructure, applications, networks, storage, virtualization, and cloud environments into a cohesive technology ecosystem."
	},
	{
		number: "05",
		title: "Support",
		description: "Providing ongoing technical assistance, maintenance, monitoring, troubleshooting, and SLA-based support."
	},
	{
		number: "06",
		title: "Improve",
		description: "Continuously identifying opportunities to enhance performance, reliability, scalability, and operational efficiency."
	}
];
var valueProps = [
	"Experienced Technical Workforce",
	"Nationwide Service Coverage",
	"Enterprise Technology Expertise",
	"Global Technology Partnerships",
	"Integrated IT Solutions",
	"Responsive Technical Support",
	"Flexible Service Models",
	"Preventive & Proactive Maintenance",
	"Customer‑Centric Service Delivery",
	"Long‑Term Technology Partnership"
];
var metrics = [
	{
		value: "100+",
		label: "Skilled IT Professionals",
		note: "Certified engineering bench"
	},
	{
		value: "8",
		label: "Major Technical Hubs",
		note: "Nationwide field presence"
	},
	{
		value: "30 Mins",
		label: "SLA Response Commitment",
		note: "Initial response guarantee"
	},
	{
		value: "24/7 × 365",
		label: "Mission-Critical Coverage",
		note: "Always-on support desk"
	}
];
var serviceSections = [
	{
		id: "servers",
		title: "High-Performance Servers & Computing",
		summary: "Enterprise compute, storage and data protection engineered for continuous operations.",
		items: [
			"Enterprise high-end servers and blade systems",
			"Engineered systems and unified compute platforms",
			"SAN and NAS enterprise storage solutions",
			"Backup and recovery infrastructure"
		],
		icon: "Database"
	},
	{
		id: "cctv",
		title: "CCTV & Enterprise Security Surveillance",
		summary: "End-to-end IP surveillance from site assessment to command room operations.",
		items: [
			"IP CCTV surveillance design and site assessment",
			"Network-based video transmission and storage infrastructure",
			"Centralized surveillance management and command rooms",
			"Ongoing CCTV preventive maintenance and support"
		],
		icon: "Camera"
	},
	{
		id: "networking",
		title: "Network Passive & Active Infrastructure",
		summary: "Structured cabling through to core switching, wireless and perimeter security.",
		items: [
			"Structured cabling: Cat6, Cat6A and high-speed fibre-optic",
			"Data centre server racks and cable containment systems",
			"Enterprise routing, core switching and wireless AP controllers",
			"Next-gen firewalls, VPN gateways and network security"
		],
		icon: "Wifi"
	},
	{
		id: "licensing",
		title: "Enterprise Software Licensing & Virtualization",
		summary: "Compliant licensing, virtualization and enterprise application platforms.",
		items: [
			"Microsoft Windows Server, Azure, Microsoft 365, SQL Server",
			"Red Hat Enterprise Linux (RHEL), OpenShift, Ansible",
			"VMware virtualization platforms",
			"Enterprise applications: ERP, CRM, BI and FMS"
		],
		icon: "ShoppingBag"
	},
	{
		id: "managed-services",
		title: "Managed IT Services & Technical Operations",
		summary: "Reliable technical support, incident management, and proactive maintenance.",
		items: managedServices,
		icon: "Settings"
	},
	{
		id: "disaster-recovery",
		title: "Disaster Recovery & Business Continuity",
		summary: "Comprehensive recovery strategies, backup testing and technical assistance.",
		items: disasterRecovery,
		icon: "Activity"
	}
];
var services = [
	{
		slug: "datacenter",
		path: "/datacenter",
		title: "Data Centre Solutions",
		shortTitle: "Data Centre",
		summary: "Design, build and operate enterprise data centres — racks, containment, power, cooling and structured cabling.",
		heroImageKey: "datacenter",
		icon: "Server",
		items: [
			"Data centre design and site assessment",
			"Server racks, containment and structured cabling",
			"Power distribution and UPS integration",
			"Cooling and environmental monitoring",
			"Physical security and access control integration",
			"Migration, consolidation and modernisation"
		],
		seo: {
			title: "Data Centre Solutions in Pakistan | Design, Build & Operate",
			description: "End-to-end data centre solutions in Karachi and across Pakistan — design, rack & cabling, power, cooling and monitoring.",
			keywords: [
				"data centre solutions Pakistan",
				"data center design Karachi",
				"server rack installation Pakistan",
				"enterprise data centre Karachi"
			]
		}
	},
	{
		slug: "servers",
		path: "/servers",
		title: "High-Performance Servers & Compute",
		shortTitle: "Servers & Compute",
		summary: "Enterprise servers, blades and engineered systems sized, deployed and supported for continuous operations.",
		heroImageKey: "servers",
		icon: "Database",
		items: [
			"Enterprise rack, tower and blade servers",
			"Engineered and unified compute platforms",
			"Virtualization-ready hardware (VMware, Hyper-V)",
			"High-availability clustering and redundancy",
			"Performance tuning and capacity planning",
			"Server lifecycle support and AMC"
		],
		seo: {
			title: "Enterprise Servers & Compute Solutions | AI Power Enterprises",
			description: "Supply, deployment and support of enterprise servers, blades and engineered compute platforms in Pakistan.",
			keywords: [
				"enterprise servers Pakistan",
				"blade servers Karachi",
				"server AMC Pakistan"
			]
		}
	},
	{
		slug: "storage",
		path: "/storage",
		title: "Storage & Backup Solutions",
		shortTitle: "Storage & Backup",
		summary: "SAN, NAS and backup infrastructure engineered for data integrity, performance and disaster resilience.",
		heroImageKey: "storage",
		icon: "HardDrive",
		items: [
			"SAN and NAS enterprise storage",
			"All-flash and hybrid storage arrays",
			"Backup and recovery infrastructure",
			"Tape and disk-based archival",
			"Replication and snapshot strategies",
			"Storage performance and capacity management"
		],
		seo: {
			title: "Enterprise Storage & Backup Solutions in Pakistan | SAN, NAS",
			description: "SAN, NAS, all-flash and backup infrastructure engineered for performance and resilience across Pakistan.",
			keywords: [
				"enterprise storage Pakistan",
				"SAN NAS solutions Karachi",
				"backup solutions Pakistan"
			]
		}
	},
	{
		slug: "networking",
		path: "/networking",
		title: "Network Passive & Active Infrastructure",
		shortTitle: "Networking",
		summary: "From structured cabling to core switching, wireless and perimeter security — networks built for scale.",
		heroImageKey: "networking",
		icon: "Wifi",
		items: [
			"Structured cabling: Cat6, Cat6A and fibre-optic",
			"Data centre racks and cable containment systems",
			"Enterprise routing, core switching and wireless",
			"Next-gen firewalls, VPN gateways and network security",
			"LAN/WAN design and optimisation",
			"Network monitoring and managed operations"
		],
		seo: {
			title: "Enterprise Networking Solutions in Pakistan | LAN, WAN, Wi-Fi",
			description: "Structured cabling, core switching, wireless, firewalls and VPN — enterprise networking across Pakistan.",
			keywords: [
				"networking solutions Pakistan",
				"structured cabling Karachi",
				"enterprise Wi-Fi deployment"
			]
		}
	},
	{
		slug: "cctv",
		path: "/cctv",
		title: "CCTV & Enterprise Security Surveillance",
		shortTitle: "CCTV & Surveillance",
		summary: "End-to-end IP surveillance — from site assessment to command room operations and ongoing maintenance.",
		heroImageKey: "cctv",
		icon: "Camera",
		items: [
			"IP CCTV surveillance design and site assessment",
			"Network-based video transmission and storage",
			"Centralized surveillance management and command rooms",
			"Analytics: motion, perimeter, ANPR",
			"Preventive maintenance and SLA support",
			"Integration with access control and alarms"
		],
		seo: {
			title: "IP CCTV & Surveillance Solutions in Pakistan | Enterprise Grade",
			description: "Enterprise IP CCTV surveillance design, installation and support across Pakistan.",
			keywords: [
				"CCTV solutions Pakistan",
				"IP camera installation Karachi",
				"enterprise surveillance Pakistan"
			]
		}
	},
	{
		slug: "managed-services",
		path: "/managed-services",
		title: "Managed IT Services & Technical Operations",
		shortTitle: "Managed Services",
		summary: "Reliable technical support, incident management, and proactive maintenance under flexible service models.",
		heroImageKey: "managed",
		icon: "Settings",
		items: [
			"Infrastructure monitoring and support",
			"Helpdesk and call management",
			"Incident and problem management",
			"Preventive maintenance",
			"Hardware, OS and application support",
			"Resident engineering services"
		],
		seo: {
			title: "Managed IT Services in Pakistan | 24/7 Support & Monitoring",
			description: "Managed IT services in Pakistan — helpdesk, monitoring, preventive maintenance and resident engineers.",
			keywords: [
				"managed IT services Pakistan",
				"24/7 IT support Karachi",
				"IT AMC Karachi"
			]
		}
	},
	{
		slug: "sla",
		path: "/sla",
		title: "SLA-Based Support & Maintenance",
		shortTitle: "SLA Support",
		summary: "Contractual service levels — 24/7 mission-critical, 8/5 business-critical or fully customer-defined.",
		heroImageKey: "sla",
		icon: "ShieldCheck",
		items: [
			"30-minute initial response commitment",
			"Part replacement within 4 working hours",
			"Onsite intervention with spare parts",
			"Dedicated or shared spare parts pool",
			"Quarterly service reporting",
			"Mission-critical, business-critical and custom models"
		],
		seo: {
			title: "SLA Support & Maintenance in Pakistan | 24/7 Mission-Critical",
			description: "Contractual SLA support with 30-minute response and 24/7/365 coverage across Pakistan.",
			keywords: [
				"SLA support Pakistan",
				"24/7 IT maintenance Karachi",
				"AMC services Pakistan"
			]
		}
	}
];
services.map((s) => s.slug);
var servicePriorities = [
	"SLA Support",
	"CCTV Systems",
	"Server Hardware",
	"Data Centre",
	"Network Cabling"
];
var faqs = [
	{
		question: "What is your SLA response time?",
		answer: "Our contractual commitment is an initial response within 30 minutes, 24/7, with part replacement within 4 working hours."
	},
	{
		question: "Do you design and install CCTV systems?",
		answer: "Yes. We handle IP CCTV site assessment, design, network video transmission, storage, command rooms and ongoing preventive maintenance."
	},
	{
		question: "What server hardware do you supply?",
		answer: "Enterprise high-end servers and blades, engineered/unified compute platforms, SAN & NAS storage, plus backup and recovery infrastructure."
	},
	{
		question: "Where is your office located?",
		answer: `Our head office is in Karachi: ${company.address}`
	},
	{
		question: "Which cities do you cover in Pakistan?",
		answer: "We operate from Karachi with regional hubs in Islamabad and Lahore, and field support across Multan, Faisalabad, Peshawar, Gilgit, and Quetta."
	},
	{
		question: "Do you provide 24/7 support?",
		answer: "Yes — our Mission-Critical SLA offers 24/7 call management and priority onsite intervention."
	},
	{
		question: "Can you support existing infrastructure from other vendors?",
		answer: "Yes. We support multi-vendor environments including HPE, Dell, Cisco, Microsoft, Red Hat and more."
	},
	{
		question: "How do I request a quote or site assessment?",
		answer: `Call our office at ${company.phone}, WhatsApp us at ${company.whatsapp}, or email ${company.emails.sales}.`
	}
];
var chatbotFaqs = faqs.slice(0, 4);
var organizationSchema = {
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
		addressCountry: company.addressParts.country
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: company.geo.latitude,
		longitude: company.geo.longitude
	},
	contactPoint: [
		{
			"@type": "ContactPoint",
			telephone: company.phone,
			contactType: "customer service",
			areaServed: "PK",
			availableLanguage: ["en", "ur"]
		},
		{
			"@type": "ContactPoint",
			telephone: company.phone,
			contactType: "sales",
			email: company.emails.sales,
			areaServed: "PK",
			availableLanguage: ["en", "ur"]
		},
		{
			"@type": "ContactPoint",
			telephone: company.whatsapp,
			contactType: "technical support",
			email: company.emails.info,
			areaServed: "PK",
			availableLanguage: ["en", "ur"]
		}
	],
	sameAs: Object.values(social).filter(Boolean)
};
var localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: company.name,
	image: `${company.website}${siteConfig.ogImage}`,
	url: company.website,
	telephone: company.phone,
	email: company.emails.info,
	address: organizationSchema.address,
	geo: organizationSchema.geo,
	openingHoursSpecification: [{
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		opens: company.hours.open,
		closes: company.hours.close
	}],
	sameAs: organizationSchema.sameAs,
	areaServed: branchCities.map((c) => ({
		"@type": "City",
		name: c
	}))
};
var stripContext = (schema) => {
	const { "@context": _ctx, ...rest } = schema;
	return rest;
};
var organizationKnowsAbout = [
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
	"Systems Integration"
];
var organizationOfferCatalog = {
	"@type": "OfferCatalog",
	name: "Enterprise IT Services",
	description: "Infrastructure, integration, licensing, managed services and SLA-based support across Pakistan.",
	itemListElement: services.map((service, index) => ({
		"@type": "Offer",
		position: index + 1,
		itemOffered: {
			"@type": "Service",
			name: service.title,
			description: service.summary,
			url: `${company.website}${service.path}`,
			serviceType: service.shortTitle,
			areaServed: {
				"@type": "Country",
				name: "Pakistan"
			},
			provider: {
				"@type": "Organization",
				"@id": `${company.website}/#organization`
			}
		}
	}))
};
var websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: company.website,
	name: company.name,
	description: siteConfig.defaultDescription,
	publisher: { "@id": `${company.website}/#organization` },
	inLanguage: "en-PK"
};
var faqPageSchema = (items = faqs) => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: items.map((faq) => ({
		"@type": "Question",
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: faq.answer
		}
	}))
});
var breadcrumbSchema = (items) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((item, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: item.name,
		item: item.url.startsWith("http") ? item.url : `${company.website}${item.url}`
	}))
});
var serviceSchema = (service) => ({
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
		url: company.website
	},
	areaServed: [
		{
			"@type": "Country",
			name: "Pakistan"
		},
		{
			"@type": "City",
			name: "Karachi"
		},
		{
			"@type": "City",
			name: "Islamabad"
		},
		{
			"@type": "City",
			name: "Lahore"
		}
	],
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: `${service.title} — Capabilities`,
		itemListElement: service.items.map((item, i) => ({
			"@type": "Offer",
			position: i + 1,
			itemOffered: {
				"@type": "Service",
				name: item
			}
		}))
	}
});
//#endregion
export { approachSteps, breadcrumbSchema, chatbotFaqs, cisco_default, clientCategories, clients, cn, company, consultancyServices, dell_default, disasterRecovery, faqPageSchema, fujitsu_default, hp_default, hubs, localBusinessSchema, mailtoLink, managedServices, metrics, microsoft_default, mission, navLinks, organizationKnowsAbout, organizationOfferCatalog, organizationSchema, partners, pillars, redhat_default, serviceNavLinks, servicePriorities, serviceSchema, serviceSections, services, siteConfig, slaDeliverables, slaModels, slaParameters, social, stripContext, technologyPortfolio, telLink, valueProps, vision, websiteSchema, whatsappLink };
