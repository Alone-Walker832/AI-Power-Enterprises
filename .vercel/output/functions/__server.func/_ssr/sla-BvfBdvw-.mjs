import { __toESM } from "../_runtime.mjs";
import { company, hubs, partners, services, slaDeliverables, slaModels, slaParameters, telLink, whatsappLink } from "./companyData-B8RcDcc2.mjs";
import { require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { Button } from "./button-WvLAgY56.mjs";
import { Activity, ArrowRight, Award, Building2, Calendar, Check, ChevronRight, CircleCheck, Clock, Earth, Factory, FileCheck, Gauge, Headset, HeartPulse, LifeBuoy, Lock, Mail, MapPin, MessageCircle, PhoneCall, ShieldCheck, Sparkles, Target, TrendingUp, Users, Wrench, X, Zap } from "../_libs/lucide-react.mjs";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "./card-DagizPkD.mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { useScroll, useTransform } from "../_libs/framer-motion+[...].mjs";
import { motion } from "../_libs/motion.mjs";
import { slaFaqs } from "./sla-B4idHaQ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sla-BvfBdvw-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StatCard({ value, label, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-6 text-hero-accent sm:size-8",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-lg font-bold text-hero-foreground sm:mt-3 sm:text-2xl lg:text-3xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-center text-[10px] font-medium uppercase tracking-wider text-hero-muted sm:text-xs",
				children: label
			})
		]
	});
}
var slaSteps = [
	{
		icon: PhoneCall,
		label: "Call Management",
		desc: "24/7 centralised support for incidents and service requests."
	},
	{
		icon: Activity,
		label: "Problem Diagnosis",
		desc: "Systematic identification of root causes and technical issues."
	},
	{
		icon: FileCheck,
		label: "Action Plan",
		desc: "Defined corrective actions to restore service efficiently."
	},
	{
		icon: Wrench,
		label: "Onsite Intervention",
		desc: "Deployment of technical personnel for repair and replacement."
	},
	{
		icon: ShieldCheck,
		label: "Spare Parts",
		desc: "Access to replacement components for timely restoration."
	},
	{
		icon: Calendar,
		label: "Preventive Maintenance",
		desc: "Scheduled health checks to reduce equipment failure."
	}
];
var industries = [
	{
		icon: Building2,
		title: "Banking & Financial Services",
		desc: "Branches, ATMs, core banking infrastructure and 24/7 uptime for regulated environments."
	},
	{
		icon: Factory,
		title: "Industrial, Oil & Gas, FMCG",
		desc: "SCADA-adjacent compute, plant-floor networks and always-on infrastructure for production lines."
	},
	{
		icon: HeartPulse,
		title: "Healthcare & Hospitals",
		desc: "HIS, PACS, and critical medical systems that cannot afford unplanned downtime."
	},
	{
		icon: Earth,
		title: "Telecom & Public Sector",
		desc: "Network operations, data centres and distributed sites across Pakistan."
	}
];
var slaCommitment = [
	{
		icon: Clock,
		title: "30-Minute Response",
		desc: "Initial acknowledgement and triage within 30 minutes of ticket logging, 24 hours a day."
	},
	{
		icon: Wrench,
		title: "4-Hour Part Replacement",
		desc: "Replacement hardware deployed within 4 working hours for covered infrastructure."
	},
	{
		icon: Users,
		title: "Named Engineers",
		desc: "Dedicated technical contacts who know your environment — not anonymous helpdesk agents."
	},
	{
		icon: Zap,
		title: "Proactive Monitoring",
		desc: "Preventive health checks that catch failures before they impact operations."
	},
	{
		icon: Lock,
		title: "Contractual Backing",
		desc: "Signed SLA with defined KPIs, escalation matrix and reporting cadence."
	},
	{
		icon: TrendingUp,
		title: "Continuous Improvement",
		desc: "Quarterly service reviews identifying performance trends and optimisation opportunities."
	}
];
var comparisonRows = [
	{
		feature: "Coverage Window",
		standard: "Business hours only",
		sla: "24/7 × 365 contractual"
	},
	{
		feature: "Initial Response",
		standard: "Best effort",
		sla: "30 minutes guaranteed"
	},
	{
		feature: "Part Replacement",
		standard: "Ad-hoc, per incident",
		sla: "Within 4 working hours"
	},
	{
		feature: "Spare Parts",
		standard: "Procurement lead times",
		sla: "Dedicated / shared pool"
	},
	{
		feature: "Onsite Intervention",
		standard: "Scheduled at availability",
		sla: "Priority mobilisation"
	},
	{
		feature: "Preventive Maintenance",
		standard: "Reactive only",
		sla: "Scheduled health checks"
	},
	{
		feature: "Reporting",
		standard: "None",
		sla: "Quarterly service reviews"
	},
	{
		feature: "Escalation Path",
		standard: "Informal",
		sla: "Defined matrix with SLAs"
	}
];
function SlaPage() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const opacity = useTransform(scrollYProgress, [0, .3], [1, .6]);
	const slaIcons = [
		Clock,
		LifeBuoy,
		Wrench,
		CircleCheck
	];
	const relatedServices = services.filter((s) => s.slug !== "sla").slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative overflow-hidden bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-14 sm:py-16 lg:py-9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-pattern absolute inset-0 opacity-25",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)_0%,_transparent_60%)] opacity-10",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							style: { opacity },
							className: "space-y-5 sm:space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									className: "border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headset, {
										className: "mr-1.5 size-3.5",
										"aria-hidden": "true"
									}), "SLA Managed Support"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl xl:text-6xl",
									children: [
										"Contractual SLA Support with a",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "30-Minute Response"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl text-base text-hero-muted sm:text-lg lg:text-xl",
									children: "Round-the-clock call management, onsite hardware intervention and spare parts availability — backed by measurable service parameters and quarterly reporting."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-wrap gap-x-4 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm",
									children: [
										"24/7 × 365 Coverage",
										"Signed SLA Contract",
										"8 Nationwide Hubs"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "inline-flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											className: "size-3.5 text-hero-accent",
											"aria-hidden": "true"
										}), item]
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										className: "glow-ring w-full sm:w-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											hash: "request",
											children: ["Get SLA Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
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
											children: "All Services"
										})
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:gap-4",
							children: [
								{
									value: "30 min",
									label: "Initial Response",
									icon: Clock
								},
								{
									value: "4 hrs",
									label: "Part Replacement",
									icon: Wrench
								},
								{
									value: "24/7 × 365",
									label: "Coverage Window",
									icon: Headset
								},
								{
									value: "8 hubs",
									label: "Onsite Reach",
									icon: MapPin
								}
							].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, { ...stat }, stat.label))
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
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Service Parameters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: [
								"Measurable,",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Auditable Commitments"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Every SLA is backed by clear, quantifiable metrics that ensure accountability."
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
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
					className: "mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2",
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
							className: "h-full overflow-hidden border border-border/60 shadow-sm transition-all hover:shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-0 right-0 h-20 w-20 rounded-full bg-primary/5 blur-2xl",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "w-fit border-primary/20 bg-primary/10 text-primary hover:bg-primary/20",
										children: model.coverage
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "font-display text-xl sm:text-2xl",
										children: model.title
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
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
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-14 sm:py-16 lg:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "mb-4",
								children: "Why Contractual SLA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
								children: [
									"Standard Support vs",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Contractual SLA"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground sm:text-base",
								children: "The difference between “best effort” and a contractually guaranteed, measurable service."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 hidden overflow-hidden rounded-xl border border-border bg-card shadow-sm md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-left font-semibold",
											children: "Feature"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-center font-semibold text-muted-foreground",
											children: "Standard Support"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-center font-semibold text-primary",
											children: "Contractual SLA"
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: comparisonRows.map((row, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: i < arr.length - 1 ? "border-b border-border/50" : "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-medium",
										children: row.feature
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-center text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
												className: "size-3.5 text-muted-foreground/60",
												"aria-hidden": "true"
											}), row.standard]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-center font-medium text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "size-3.5",
												"aria-hidden": "true"
											}), row.sla]
										})
									})
								]
							}, row.feature)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-3 md:hidden",
						children: comparisonRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-4 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: row.feature
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2 rounded-lg bg-muted/40 px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
										className: "mt-0.5 size-3.5 shrink-0 text-muted-foreground/60",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Standard"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: row.standard
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2 rounded-lg bg-primary/10 px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-0.5 size-3.5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-wider text-primary/70",
											children: "SLA"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium text-primary",
											children: row.sla
										})]
									})]
								})]
							})]
						}, row.feature))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "mb-4",
						children: "How It Works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: ["End-to-End ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "SLA Process"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "From call to resolution — a disciplined, transparent workflow."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3",
				children: slaSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						delay: index * .05
					},
					className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
							className: "size-4",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: step.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: step.desc
					})] })]
				}, step.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-14 sm:py-16 lg:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Our Commitment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: [
								"What a Contractual SLA",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Actually Delivers"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Beyond response times — the operational discipline behind every commitment."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: slaCommitment.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							delay: index * .05
						},
						className: "rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg",
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
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "mb-4",
						children: "Deliverables"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: [
							"What You Get",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "In Every SLA"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "A complete set of operational and reporting services."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
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
					className: "group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-all hover:border-primary/30 hover:shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						className: "size-4 shrink-0 text-primary transition-transform group-hover:scale-110",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: deliverable
					})]
				}, deliverable))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-14 sm:py-16 lg:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Industries"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: [
								"Enterprises That",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Rely on Our SLA"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Sectors where uptime, compliance and rapid response are not optional."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: industries.map((industry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							delay: index * .05
						},
						className: "rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(industry.icon, {
									className: "size-6",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-semibold",
								children: industry.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-muted-foreground sm:text-sm",
								children: industry.desc
							})
						]
					}, industry.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "mb-4",
						children: "Coverage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: [
							"Onsite SLA Intervention",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Across Pakistan"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "Head office in Karachi, regional hubs in Islamabad and Lahore, plus field support in key industrial cities."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: hubs.map((hub, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						delay: index * .04
					},
					className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "mt-0.5 size-4 shrink-0 text-primary",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: hub.city
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: hub.role
						})]
					})]
				}, hub.city))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-14 sm:py-16",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold sm:text-2xl lg:text-3xl",
							children: "Multi-Vendor SLA Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "We service mission-critical infrastructure across leading enterprise platforms."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
					children: partners.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: partner.logo,
							alt: `${partner.name} — technology partner for SLA support`,
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
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "mb-4",
						children: "Why It Matters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Peace of Mind"
						}), " Through Contractual Guarantees"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "An SLA isn't just a document — it's a promise backed by real operational discipline."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Target,
						title: "Accountability",
						desc: "Clear response times and escalation paths ensure every issue is tracked and resolved."
					},
					{
						icon: Gauge,
						title: "Performance Visibility",
						desc: "Regular reporting gives you full visibility into service performance and trends."
					},
					{
						icon: Award,
						title: "Risk Reduction",
						desc: "Proactive maintenance and spare parts availability minimise downtime and business impact."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .3 },
					className: "rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "size-6",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-lg font-semibold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: item.desc
						})
					]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-14 sm:py-16 lg:py-20",
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
							children: "Everything you need to know about our SLA-based support model."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-3",
					children: slaFaqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.details, {
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
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90",
								"aria-hidden": "true"
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
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
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
							children: "SLA support is one piece of our end-to-end IT infrastructure portfolio."
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
			className: "mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20",
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
							children: "Ready to Define Your SLA?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-hero-muted sm:text-base",
							children: "Let's structure a support model that fits your operational criticality and budget."
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
export { SlaPage as component };
