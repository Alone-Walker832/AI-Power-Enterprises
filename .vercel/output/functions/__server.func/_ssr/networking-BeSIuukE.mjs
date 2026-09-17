import { __toESM } from "../_runtime.mjs";
import { company, partners, services, telLink, whatsappLink } from "./companyData-B8RcDcc2.mjs";
import { require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { Button } from "./button-WvLAgY56.mjs";
import { Activity, ArrowRight, Award, Cable, Clock, Cpu, Globe, Headset, Layers, Lock, Mail, MapPin, MessageCircle, Network, PhoneCall, Router, Server, ShieldCheck, Sparkles, Target, TrendingUp, Users, Wifi, Wrench } from "../_libs/lucide-react.mjs";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "./card-DagizPkD.mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { useScroll, useTransform } from "../_libs/framer-motion+[...].mjs";
import { motion } from "../_libs/motion.mjs";
import { networkingFaqs } from "./networking-C9_7hQhI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/networking-BeSIuukE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var capabilities = [
	{
		icon: Cable,
		title: "Structured Cabling",
		description: "Cat6, Cat6A and high-speed fibre-optic cabling with professional installation and Fluke-certified testing."
	},
	{
		icon: Server,
		title: "Data Centre Infrastructure",
		description: "Server rack planning, installation, cable management, cable trays and structured layouts."
	},
	{
		icon: Layers,
		title: "Containment & Pathways",
		description: "Conduits, cable pathways, containment systems, patch panels and passive infrastructure."
	},
	{
		icon: Router,
		title: "Routing & Switching",
		description: "Enterprise routing, core switching, distribution, and access-layer infrastructure."
	},
	{
		icon: Wifi,
		title: "Wireless Networking",
		description: "Scalable corporate Wi-Fi with enterprise APs, controllers, secure authentication and centralised management."
	},
	{
		icon: Lock,
		title: "Network Security",
		description: "Next-gen firewalls, VPN gateways, secure network access, and threat management."
	}
];
var networkComponents = [
	{
		icon: Cable,
		title: "Copper & Fibre Cabling",
		desc: "Cat6, Cat6A, single-mode and multi-mode fibre — terminated and tested to standards."
	},
	{
		icon: Server,
		title: "Racks & Enclosures",
		desc: "19-inch server racks, wall-mount enclosures, cable management and cooling accessories."
	},
	{
		icon: Cpu,
		title: "Switches & Routers",
		desc: "Cisco, HPE Aruba and Dell switches — from access to core with full redundancy."
	},
	{
		icon: Wifi,
		title: "Wireless Access Points",
		desc: "Indoor/outdoor APs with centralised controllers and seamless roaming."
	}
];
var securityItems = [
	{
		icon: Lock,
		title: "Next-Gen Firewalls",
		desc: "App-aware, identity-based policies with threat prevention and SSL inspection."
	},
	{
		icon: Globe,
		title: "VPN & Secure Remote Access",
		desc: "Site-to-site and client VPN with multi-factor authentication and encryption."
	},
	{
		icon: ShieldCheck,
		title: "Network Access Control",
		desc: "802.1X, device profiling, and posture assessment for endpoint security."
	},
	{
		icon: Activity,
		title: "Monitoring & Threat Detection",
		desc: "Real-time traffic analysis, anomaly detection, and incident response."
	}
];
var implementationSteps = [
	{
		step: "01",
		title: "Site Assessment",
		text: "Survey physical layout, distance, and existing infrastructure."
	},
	{
		step: "02",
		title: "Design & BOM",
		text: "Detailed cabling plan, switch port count, fibre runs, and equipment list."
	},
	{
		step: "03",
		title: "Installation",
		text: "Cable pulling, termination, rack mounting, and switch configuration."
	},
	{
		step: "04",
		title: "Testing & Commissioning",
		text: "Fluke testing, performance verification, and documentation handover."
	},
	{
		step: "05",
		title: "Managed Support",
		text: "24/7 monitoring, preventive maintenance, and SLA-backed response."
	}
];
var networkingPartners = partners.filter((p) => [
	"Cisco Systems",
	"Hewlett Packard Enterprise",
	"Red Hat",
	"Microsoft"
].includes(p.name));
function NetworkingPage() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const opacity = useTransform(scrollYProgress, [0, .3], [1, .6]);
	const relatedServices = services.filter((s) => s.slug !== "networking").slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-pattern absolute inset-0 opacity-25",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_60%)] opacity-10",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									className: "border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, {
										className: "mr-1.5 size-3.5",
										"aria-hidden": "true"
									}), "Network Infrastructure"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl",
									children: [
										"Enterprise Networking —",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "Passive & Active"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl",
									children: "Structured cabling through to core switching, wireless and perimeter security — designed, deployed and supported nationwide with a 30-minute SLA."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start",
									children: [
										{
											icon: Cable,
											label: "Fluke-certified cabling"
										},
										{
											icon: ShieldCheck,
											label: "Next-gen firewall"
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
											children: ["Request Network Assessment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
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
											children: "SLA Support Details"
										})
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:gap-4",
							children: [
								{
									value: "10 Gbps",
									label: "Fibre backbone",
									icon: Cable
								},
								{
									value: "30 min",
									label: "SLA response",
									icon: Clock
								},
								{
									value: "24/7 × 365",
									label: "Network support",
									icon: Headset
								},
								{
									value: "8 hubs",
									label: "Nationwide install",
									icon: MapPin
								}
							].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: .94
								},
								whileInView: {
									opacity: 1,
									scale: 1
								},
								viewport: { once: true },
								transition: { duration: .45 },
								className: "flex flex-col items-center rounded-2xl border border-hero-border bg-hero-foreground/5 p-4 backdrop-blur-sm sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, {
										className: "size-6 text-hero-accent sm:size-8",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display text-lg font-bold text-hero-foreground sm:mt-3 sm:text-2xl lg:text-3xl",
										children: stat.value
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-center text-[10px] font-medium uppercase tracking-wider text-hero-muted sm:text-xs",
										children: stat.label
									})
								]
							}, stat.label))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl",
					"aria-hidden": "true"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "mb-4",
						children: "Capabilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: ["Complete ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Network Stack"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "From passive cabling to active security — we cover every layer."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3",
				children: capabilities.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						delay: index * .05
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-card h-full border border-border/60 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-display text-base sm:text-lg",
							children: item.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							className: "text-sm text-muted-foreground",
							children: item.description
						})]
					})
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Components"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: [
								"Passive & Active",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Infrastructure"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "All the hardware and cabling that forms the foundation of your network."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4",
					children: networkComponents.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						className: "rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-semibold",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-muted-foreground",
								children: item.desc
							})
						]
					}, item.title))
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
						children: "Security"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: [
							"Perimeter &",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Internal Security"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "Protect your network with layered security that spans edge to endpoint."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2",
				children: securityItems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: item.desc
						})]
					})]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "mb-4",
								children: "SLA Cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
								children: [
									"Network Support",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Commitments"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground sm:text-base",
								children: "Contractual response and maintenance for your network infrastructure."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								icon: Clock,
								label: "Response Time",
								value: "30 min"
							},
							{
								icon: Wrench,
								label: "Part Replacement",
								value: "4 hours"
							},
							{
								icon: Headset,
								label: "Support Coverage",
								value: "24/7 × 365"
							},
							{
								icon: MapPin,
								label: "Onsite Reach",
								value: "8 hubs"
							}
						].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .95
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: {
								duration: .3,
								delay: idx * .05
							},
							className: "rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "mx-auto size-6 text-primary",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-xl font-bold sm:text-2xl",
									children: item.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs",
									children: item.label
								})
							]
						}, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sla",
								children: ["View Full SLA Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
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
			className: "mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "mb-4",
						children: "Implementation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: [
							"From Assessment to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Managed Support"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "A methodical approach that ensures your network is built right and stays reliable."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3",
				children: implementationSteps.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary",
							children: item.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-base font-semibold sm:text-lg",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: item.text
						})
					]
				}, item.step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Technology Partners"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: [
								"Certified",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Networking Vendors"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "We work with industry leaders to deliver enterprise-grade networking."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4",
					children: networkingPartners.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: partner.logo,
							alt: `${partner.name} — networking partner`,
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
						children: ["What Sets Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Apart"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "Certified engineers, disciplined delivery, and contractual accountability."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Users,
						title: "Certified Engineers",
						desc: "Cisco, HPE Aruba and Fortinet-trained engineers across passive and active infrastructure."
					},
					{
						icon: Target,
						title: "Design-Led Approach",
						desc: "Every deployment starts with a site survey, capacity plan, and rack-level bill of materials."
					},
					{
						icon: TrendingUp,
						title: "Scalable Architecture",
						desc: "Networks designed for growth — from a single floor to campus-wide, multi-site deployments."
					},
					{
						icon: Award,
						title: "SLA-Backed Support",
						desc: "30-minute response, 4-hour part replacement, 24/7/365 — contractually guaranteed."
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
							children: "Common questions about cabling, switching, wireless, security and SLA coverage."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-3",
					children: networkingFaqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.details, {
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Explore More"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: ["Related ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Services"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Networking is one piece of our end-to-end IT infrastructure portfolio."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: relatedServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: service.path,
						className: "group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold group-hover:text-primary",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
								children: service.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary",
								children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-3.5 transition-transform group-hover:translate-x-0.5",
									"aria-hidden": "true"
								})]
							})
						]
					}, service.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "ml-2 size-4",
								"aria-hidden": "true"
							})]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-9 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16",
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
							children: "Ready to Build a Reliable Network?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-hero-muted sm:text-base",
							children: "Let's assess your cabling, switching, wireless, and security needs — with a 30-minute SLA guarantee."
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
									children: ["Request Assessment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
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
									to: "/services",
									children: "Explore All Services"
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
export { NetworkingPage as component };
