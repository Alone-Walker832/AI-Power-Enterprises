import { __toESM } from "../_runtime.mjs";
import { company, services, telLink, whatsappLink } from "./companyData-B8RcDcc2.mjs";
import { require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { Button } from "./button-WvLAgY56.mjs";
import { Activity, ArrowRight, Award, Camera, Cctv, Clock, Eye, HardDrive, Headset, Layers, Lock, Mail, MapPin, MessageCircle, MonitorPlay, Network, PhoneCall, Settings, ShieldCheck, Sparkles, Target, Users, Wrench } from "../_libs/lucide-react.mjs";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "./card-DagizPkD.mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { useScroll, useTransform } from "../_libs/framer-motion+[...].mjs";
import { motion } from "../_libs/motion.mjs";
import { cctvFaqs } from "./cctv-C_Ybb_FQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cctv-BVvIEn70.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var capabilities = [
	{
		icon: Camera,
		title: "Site Assessment & Design",
		description: "Coverage mapping, camera selection, lux and lens calculations per zone, and detailed site surveys."
	},
	{
		icon: Network,
		title: "Network Video Transmission",
		description: "PoE switching, fibre backbone, VLAN-segmented surveillance networks with QoS for reliable video streaming."
	},
	{
		icon: MonitorPlay,
		title: "Command & Control Rooms",
		description: "Video walls, centralized VMS, role-based access, retention policies and live monitoring stations."
	},
	{
		icon: HardDrive,
		title: "Storage & Retention",
		description: "NVR/SAN sizing for compliant retention with redundancy, archiving and fast retrieval."
	},
	{
		icon: Wrench,
		title: "Preventive Maintenance",
		description: "Scheduled health checks, lens cleaning, firmware updates, fault repair and spare parts availability."
	},
	{
		icon: Settings,
		title: "Analytics & Integration",
		description: "Motion detection, intrusion, ANPR, access-control integration and AI-based event correlation."
	}
];
var securityComponents = [
	{
		icon: Camera,
		title: "IP Cameras",
		desc: "Fixed, dome, PTZ and thermal cameras — indoor and outdoor — with night vision and WDR."
	},
	{
		icon: Network,
		title: "PoE Switches & Fibre",
		desc: "PoE+ switches, fibre transceivers, media converters for long-distance connectivity."
	},
	{
		icon: HardDrive,
		title: "Storage Appliances",
		desc: "NVRs and SAN storage with RAID, redundancy and scalable capacity."
	},
	{
		icon: MonitorPlay,
		title: "VMS Software",
		desc: "Centralized video management with recording, search, export and camera control."
	}
];
var integrationItems = [
	{
		icon: Network,
		title: "Network Integration",
		desc: "VLAN segmentation, QoS, PoE, and secure remote access for surveillance traffic."
	},
	{
		icon: Layers,
		title: "Access Control Integration",
		desc: "Connect with door controllers, biometrics and intercom for unified security."
	},
	{
		icon: HardDrive,
		title: "Unified Storage",
		desc: "Consolidated storage pools for video, access logs and server backups."
	},
	{
		icon: MonitorPlay,
		title: "Centralized Management",
		desc: "Single VMS for all cameras, with real-time alerts and incident playback."
	}
];
var implementationSteps = [
	{
		step: "01",
		title: "Site Survey",
		text: "Site walk, camera placement, lighting and network assessment."
	},
	{
		step: "02",
		title: "Design & BOM",
		text: "Detailed design, camera specs, switch ports, storage sizing and cabling plan."
	},
	{
		step: "03",
		title: "Installation",
		text: "Camera mounting, cabling, switch configuration and network integration."
	},
	{
		step: "04",
		title: "Commissioning",
		text: "System testing, camera calibration, storage verification and handover."
	},
	{
		step: "05",
		title: "Managed Support",
		text: "24/7 monitoring, preventive maintenance, SLA-backed response."
	}
];
var cctvPartners = [
	{
		name: "Hikvision",
		badge: "Authorized Partner"
	},
	{
		name: "Dahua",
		badge: "Authorized Partner"
	},
	{
		name: "Axis Communications",
		badge: "Technology Partner"
	},
	{
		name: "Bosch Security",
		badge: "Technology Partner"
	}
];
function CctvPage() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const opacity = useTransform(scrollYProgress, [0, .3], [1, .6]);
	const relatedServices = services.filter((s) => s.slug !== "cctv").slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-pattern absolute inset-0 opacity-25",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_60%)] opacity-10",
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cctv, {
										className: "mr-1.5 size-3.5",
										"aria-hidden": "true"
									}), "CCTV & Surveillance"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl",
									children: [
										"Enterprise IP CCTV Surveillance,",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "Designed & Maintained"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto max-w-xl text-base text-hero-muted sm:text-lg lg:mx-0 lg:text-xl",
									children: "End-to-end IP surveillance from site assessment to command room — with 24/7 preventive maintenance and SLA-backed support nationwide."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start",
									children: [
										{
											icon: Eye,
											label: "Full lifecycle delivery"
										},
										{
											icon: Lock,
											label: "Access control ready"
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
											children: ["Request CCTV Survey", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
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
									value: "End-to-End",
									label: "Design to command room",
									icon: Camera
								},
								{
									value: "24/7 × 365",
									label: "Maintenance cover",
									icon: ShieldCheck
								},
								{
									value: "8 hubs",
									label: "Nationwide install",
									icon: MapPin
								},
								{
									value: "30 min",
									label: "SLA response",
									icon: Clock
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
										className: "mt-2 text-center font-display text-base font-bold text-hero-foreground sm:mt-3 sm:text-xl lg:text-2xl",
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
					className: "pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl",
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
						children: [
							"Complete",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Surveillance Stack"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "From site assessment to command room — we cover every layer of the surveillance pipeline."
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
							children: "Security Components"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: [
								"End-to-End",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Surveillance Hardware & Software"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Cameras, networking, storage and management — all integrated."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4",
					children: securityComponents.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						children: "Integrated Security"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: [
							"Unified",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Security & IT Infrastructure"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "CCTV seamlessly integrates with your network, access control and IT management systems."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2",
				children: integrationItems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
									"Surveillance Support",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Commitments"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground sm:text-base",
								children: "Contractual response and maintenance for your CCTV systems."
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
							"From Survey to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Managed Support"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "A structured methodology ensures your surveillance system is deployed right and stays reliable."
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
									children: "Security Vendors"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "We work with leading global brands to deliver enterprise-grade surveillance."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4",
					children: cctvPartners.map((partner, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
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
						className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base font-bold text-foreground sm:text-lg",
							children: partner.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs",
							children: partner.badge
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
						children: "Full-lifecycle surveillance expertise — from design to managed support."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Users,
						title: "Certified Engineers",
						desc: "Trained security engineers across Hikvision, Dahua, Axis and Bosch platforms with enterprise deployment experience."
					},
					{
						icon: Target,
						title: "Design-Led Approach",
						desc: "Every project starts with a site survey, camera placement plan, lux calculations and network design."
					},
					{
						icon: Activity,
						title: "Integrated Systems",
						desc: "CCTV + access control + network designed together — not bolted on as separate systems."
					},
					{
						icon: Award,
						title: "SLA-Backed Support",
						desc: "30-minute response, 4-hour part replacement, 24/7 × 365 — contractually guaranteed."
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
							children: "Common questions about CCTV design, deployment, integration and SLA coverage."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-3",
					children: cctvFaqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.details, {
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
							children: "CCTV is one piece of our end-to-end IT infrastructure portfolio."
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
							children: "Ready to Secure Your Site?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-hero-muted sm:text-base",
							children: "Let's design and deploy a surveillance system that covers every angle — with SLA-backed maintenance and response."
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
									children: ["Request a Survey", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
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
export { CctvPage as component };
