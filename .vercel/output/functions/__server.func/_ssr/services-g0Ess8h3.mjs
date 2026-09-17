import { __toESM } from "../_runtime.mjs";
import { company, consultancyServices, disasterRecovery, managedServices, partners, serviceSections, services, slaDeliverables, slaModels, slaParameters, technologyPortfolio, telLink, whatsappLink } from "./companyData-B8RcDcc2.mjs";
import { require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { Button } from "./button-WvLAgY56.mjs";
import { Activity, ArrowRight, Award, BookOpen, Briefcase, Camera, CircleCheck, Clock, Cloud, Database, HardDrive, Headset, LifeBuoy, Lock, Mail, MapPin, MessageCircle, Network, PhoneCall, Server, Settings, ShieldCheck, ShoppingBag, Sparkles, Users, Wifi, Wrench, Zap } from "../_libs/lucide-react.mjs";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "./card-DagizPkD.mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { useScroll, useTransform } from "../_libs/framer-motion+[...].mjs";
import { motion } from "../_libs/motion.mjs";
import { servicesFaqs } from "./services-4ouNv_uU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-g0Ess8h3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var iconMap = {
	Database,
	Camera,
	Wifi,
	ShoppingBag,
	Settings,
	Briefcase,
	Activity,
	BookOpen,
	Server,
	Network,
	HardDrive,
	Cloud,
	Lock
};
var getIcon = (name) => name && iconMap[name] || Settings;
var sectionNav = [
	{
		id: "sla",
		label: "SLA Framework"
	},
	{
		id: "services",
		label: "Service Lines"
	},
	{
		id: "catalog",
		label: "Service Catalog"
	},
	{
		id: "technology",
		label: "Technology Stack"
	},
	{
		id: "managed",
		label: "Managed & Consultancy"
	},
	{
		id: "partners",
		label: "Partners"
	}
];
function scrollToSection(id) {
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function ServiceCard({ section }) {
	const Icon = getIcon(section.icon);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: { duration: .4 },
		className: "group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: section.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: section.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-1.5 text-left",
						children: [section.items.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "mt-0.5 size-3.5 shrink-0 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item)), section.items.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "pl-5 text-sm font-medium text-primary",
							children: [
								"+ ",
								section.items.length - 4,
								" more"
							]
						})]
					})
				]
			})]
		})
	});
}
function ServicesPage() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const opacity = useTransform(scrollYProgress, [0, .3], [1, .7]);
	const slaIcons = [
		Clock,
		LifeBuoy,
		Wrench,
		CircleCheck
	];
	const [activeSection, setActiveSection] = (0, import_react.useState)("sla");
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setActiveSection(entry.target.id);
			});
		}, { threshold: .3 });
		sectionNav.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Section navigation",
			className: "sticky top-0 z-30 hidden border-b border-border/40 bg-background/80 backdrop-blur-md lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex gap-6 overflow-x-auto py-3 text-sm font-medium",
					children: sectionNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollToSection(item.id),
							className: `whitespace-nowrap transition-colors hover:text-primary ${activeSection === item.id ? "border-b-2 border-primary pb-1 text-primary" : "text-muted-foreground"}`,
							children: item.label
						})
					}, item.id))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-pattern absolute inset-0 opacity-20",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_70%)] opacity-10",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							style: { opacity },
							className: "space-y-5 text-center sm:space-y-6 lg:text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									className: "border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs",
									children: "Enterprise IT Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl",
									children: [
										"Managed IT &",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "SLA-Backed Support"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl",
									children: "From mission-critical infrastructure to IP surveillance, networking, and licensing — delivered by certified engineers nationwide with a 30-minute SLA."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start",
									children: [
										{
											icon: Clock,
											label: "30-min SLA response"
										},
										{
											icon: ShieldCheck,
											label: "24/7 × 365 support"
										},
										{
											icon: MapPin,
											label: "8 hubs nationwide"
										}
									].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "inline-flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-3.5 text-hero-accent",
											"aria-hidden": "true"
										}), label]
									}, label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										className: "glow-ring w-full sm:w-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											hash: "request",
											children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "ml-2 size-4",
												"aria-hidden": "true"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "lg",
										className: "w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto",
										onClick: () => scrollToSection("sla"),
										children: "View SLA"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3",
							children: serviceSections.slice(0, 4).map((section) => {
								const Icon = getIcon(section.icon);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									whileHover: { scale: 1.03 },
									className: "rounded-xl border border-hero-border/60 bg-hero-foreground/5 p-3 backdrop-blur-sm transition-all hover:bg-hero-foreground/10 sm:p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5 text-hero-accent sm:size-6",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1.5 text-xs font-semibold text-hero-foreground sm:text-sm",
											children: section.title.split(" ").slice(0, 2).join(" ")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 line-clamp-2 text-[10px] text-hero-muted sm:text-xs",
											children: section.summary
										})
									]
								}, section.id);
							})
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "sla",
			className: "mx-auto max-w-7xl scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "SLA Framework"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: [
								"Clear, Measurable",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Service Parameters"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Backed by onsite intervention and spare parts availability — always."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4",
					children: slaParameters.map((parameter, index) => {
						const Icon = slaIcons[index % slaIcons.length];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 18
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-60px"
							},
							transition: {
								duration: .4,
								delay: index * .06
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "glass-card h-full border border-border/60 shadow-sm transition-all hover:shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-6 text-primary",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "text-base font-semibold",
									children: parameter.label
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
									className: "text-sm text-muted-foreground",
									children: parameter.value
								})]
							})
						}, parameter.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2",
					children: slaModels.map((model, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .4,
							delay: idx * .1
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "h-full border border-border/60 shadow-sm transition-all hover:shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "w-fit border-primary/20 bg-primary/10 text-primary hover:bg-primary/20",
								children: model.coverage
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "font-display text-xl sm:text-2xl",
								children: model.title
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2",
								children: model.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "mt-0.5 size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), point]
								}, point))
							}) })]
						})
					}, model.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 sm:mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-center font-display text-lg font-semibold sm:text-xl",
						children: "Core SLA Deliverables"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: slaDeliverables.map((deliverable) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								scale: .95
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: { duration: .3 },
							className: "flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm transition-all hover:shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "size-4 shrink-0 text-primary",
								"aria-hidden": "true"
							}), deliverable]
						}, deliverable))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "scroll-mt-20 border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "mb-4",
								children: "Expertise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
								children: [
									"Comprehensive",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Service Portfolio"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground sm:text-base",
								children: "End-to-end IT solutions from infrastructure to managed support."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 sm:mt-10 md:grid-cols-2",
						children: serviceSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { section }, section.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								hash: "request",
								children: ["Discuss Your Requirements", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "ml-2 size-4",
									"aria-hidden": "true"
								})]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "catalog",
			className: "mx-auto max-w-7xl scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "mb-4",
						children: "Explore in Detail"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: ["Individual ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Service Pages"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "Dive deep into each service line — capabilities, deliverables and SLA alignment."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((service, idx) => {
					const Icon = getIcon(service.icon);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .35,
							delay: idx * .04
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: service.path,
							className: "group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-semibold group-hover:text-primary",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground",
									children: service.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary",
									children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-3.5 transition-transform group-hover:translate-x-0.5",
										"aria-hidden": "true"
									})]
								})
							]
						})
					}, service.slug);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "technology",
			className: "scroll-mt-20 border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Technology Stack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: ["Full ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Technology Portfolio"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Over 14 core technology areas supported by our engineering teams."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: technologyPortfolio.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .3,
							delay: idx * .02
						},
						className: "flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm transition-all hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-3.5 shrink-0 text-primary",
							"aria-hidden": "true"
						}), item]
					}, item))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "managed",
			className: "mx-auto max-w-7xl scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Managed & Consultancy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: ["Operational ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "& Advisory"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Day-to-day IT operations management and strategic guidance."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .45 },
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-primary/10",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative p-6 sm:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
												className: "size-6",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl font-bold sm:text-2xl",
												children: "Managed Services"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: "End-to-end IT operations managed by certified engineers."
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-5 grid gap-2.5 sm:grid-cols-2",
										children: managedServices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "group/item flex items-start gap-2.5 rounded-lg border border-transparent px-2 py-2 transition-all hover:border-primary/20 hover:bg-primary/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-all group-hover/item:bg-primary group-hover/item:text-primary-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
													className: "size-3",
													"aria-hidden": "true"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm leading-snug text-muted-foreground",
												children: item
											})]
										}, item))
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .45,
							delay: .1
						},
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-primary/10",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative p-6 sm:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
												className: "size-6",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl font-bold sm:text-2xl",
												children: "Consultancy"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: "Strategic planning, architecture and knowledge transfer."
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-5 grid gap-2.5 sm:grid-cols-2",
										children: consultancyServices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "group/item flex items-start gap-2.5 rounded-lg border border-transparent px-2 py-2 transition-all hover:border-primary/20 hover:bg-primary/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-all group-hover/item:bg-primary group-hover/item:text-primary-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
													className: "size-3",
													"aria-hidden": "true"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm leading-snug text-muted-foreground",
												children: item
											})]
										}, item))
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .45,
						delay: .15
					},
					className: "relative mt-6 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-6 shadow-sm sm:mt-8 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/8 blur-3xl",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
									className: "size-6",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold sm:text-2xl",
									children: "Disaster Recovery & Business Continuity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Keep critical systems running — and recover them fast — with tested continuity plans."
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: disasterRecovery.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								initial: {
									opacity: 0,
									y: 10
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: {
									duration: .3,
									delay: idx * .05
								},
								className: "group/dr flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 p-3.5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md sm:p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover/dr:bg-primary group-hover/dr:text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "size-4",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium leading-snug",
									children: item
								})]
							}, item))
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "partners",
			className: "scroll-mt-20 border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Technology Alliances"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: ["Strategic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Partners"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Certified alignment with the world's leading enterprise technology vendors."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
					children: partners.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: partner.logo,
							alt: `${partner.name} — technology partner`,
							className: "h-8 w-auto object-contain opacity-80 dark:opacity-90",
							loading: "lazy",
							decoding: "async",
							width: 80,
							height: 32
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium text-muted-foreground sm:text-xs",
							children: partner.name
						})]
					}, partner.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "mb-4",
						children: "Why AI Power"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: [
							"What Sets Us",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Apart"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "Enterprise engineering discipline combined with nationwide responsiveness."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Users,
						title: "Certified Engineers",
						desc: "100+ skilled IT professionals across enterprise platforms — trained, certified, and field-tested."
					},
					{
						icon: Zap,
						title: "30-Minute Response",
						desc: "Contractual SLA with guaranteed initial response, 24 hours a day, 7 days a week."
					},
					{
						icon: Headset,
						title: "Nationwide Presence",
						desc: "Head office in Karachi plus 8 hubs across Pakistan — onsite intervention wherever you operate."
					},
					{
						icon: Award,
						title: "Multi-Vendor Expertise",
						desc: "Deep alignment with Microsoft, Red Hat, HPE, Dell, Cisco and Fujitsu technologies."
					}
				].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .3,
						delay: idx * .05
					},
					className: "rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "size-6",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-base font-semibold sm:text-lg",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-muted-foreground sm:text-sm",
							children: item.desc
						})
					]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "FAQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: [
								"Frequently Asked",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Questions"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Common questions about our services, SLA, and coverage."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-3",
					children: servicesFaqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.details, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .3,
							delay: index * .04
						},
						className: "group rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md [&_summary::-webkit-details-marker]:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer items-start justify-between gap-3 p-4 sm:p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-left text-sm font-semibold sm:text-base",
								children: faq.question
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-90",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "size-3",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "9 18 15 12 9 6" })
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border/60 px-4 pb-4 pt-3 text-sm text-muted-foreground sm:px-5 sm:pb-5",
							children: faq.answer
						})]
					}, faq.question))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-surface relative overflow-hidden rounded-2xl border border-hero-border px-5 py-10 text-center sm:px-10 sm:py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-pattern absolute inset-0 opacity-20",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "mx-auto size-8 text-hero-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-xl font-bold text-hero-foreground sm:text-2xl lg:text-3xl xl:text-4xl",
							children: "Ready to Secure Your Infrastructure?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-hero-muted sm:text-base",
							children: "Talk to our engineering team about servers, CCTV, networking, licensing and 30-minute SLA support — nationwide across Pakistan."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "glow-ring w-full sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									hash: "request",
									children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "ml-2 size-4",
										"aria-hidden": "true"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sla",
									children: "View SLA Details"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-hero-muted sm:text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: telLink(),
									className: "inline-flex items-center gap-1.5 transition-colors hover:text-hero-accent",
									"aria-label": `Call ${company.phone}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										className: "size-3.5",
										"aria-hidden": "true"
									}), company.phone]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappLink,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 transition-colors hover:text-hero-accent",
									"aria-label": "Chat on WhatsApp",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "size-3.5",
										"aria-hidden": "true"
									}), "WhatsApp"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${company.emails.sales}`,
									className: "inline-flex items-center gap-1.5 transition-colors hover:text-hero-accent",
									"aria-label": `Email ${company.emails.sales}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "size-3.5",
										"aria-hidden": "true"
									}), company.emails.sales]
								})
							]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
