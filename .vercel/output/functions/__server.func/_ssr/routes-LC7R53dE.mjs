import { __toESM } from "../_runtime.mjs";
import { approachSteps, cisco_default, clients, company, dell_default, fujitsu_default, hp_default, metrics, microsoft_default, pillars, redhat_default } from "./companyData-B8RcDcc2.mjs";
import { require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { Button } from "./button-WvLAgY56.mjs";
import { Activity, ArrowRight, Award, BookOpen, Briefcase, Building, Camera, Clock, Cpu, Database, FileText, Globe, GraduationCap, Headset, Heart, Layers, LifeBuoy, Lightbulb, MapPin, Network, PhoneCall, RefreshCw, Server, Settings, ShieldCheck, ShoppingBag, ShoppingCart, TrendingUp, Truck, Users, Wifi, Zap } from "../_libs/lucide-react.mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { AnimatePresence, useInView, useScroll, useTransform } from "../_libs/framer-motion+[...].mjs";
import { motion } from "../_libs/motion.mjs";
import { hero_networking_default, hero_servers_default } from "./hero-networking-BRWTbHS7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-LC7R53dE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var serviceWords = [
	{
		label: "SLA Support",
		image: "/assets/hero-sla-DB2yzM2M.jpg"
	},
	{
		label: "Servers",
		image: hero_servers_default
	},
	{
		label: "Storage",
		image: "/assets/hero-storage-DjVn4IPh.jpg"
	},
	{
		label: "Networking",
		image: hero_networking_default
	},
	{
		label: "CCTV",
		image: "/assets/hero-cctv-CHGgPXqe.jpg"
	},
	{
		label: "Managed Services",
		image: "/assets/hero-managed-CV7fxs2d.jpg"
	}
];
var AnimatedCounter = ({ value, label }) => {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (inView) {
			const num = parseInt(value.replace(/[^0-9]/g, ""));
			if (isNaN(num)) return;
			const duration = 1500;
			const startTime = performance.now();
			const update = (time) => {
				const progress = Math.min((time - startTime) / duration, 1);
				setCount(Math.floor(progress * num));
				if (progress < 1) requestAnimationFrame(update);
			};
			requestAnimationFrame(update);
		}
	}, [inView, value]);
	const display = value.includes("+") ? `${count}+` : value.includes("min") ? `${count} min` : `${count}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl font-bold text-primary lg:text-3xl transition-all",
			children: inView ? display : "0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
			children: label
		})]
	});
};
var useTypewriter = (words, onWordChange, typingSpeed = 55, deletingSpeed = 25, pauseDuration = 2500) => {
	const [text, setText] = (0, import_react.useState)("");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const current = words[index % words.length];
		if (!current) return;
		const timeout = setTimeout(() => {
			if (!isDeleting) {
				const newText = current.slice(0, text.length + 1);
				setText(newText);
				if (newText === current) {
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
		}, isDeleting ? deletingSpeed : typingSpeed);
		return () => clearTimeout(timeout);
	}, [
		text,
		isDeleting,
		index,
		words,
		typingSpeed,
		deletingSpeed,
		pauseDuration,
		onWordChange
	]);
	return { text };
};
var serviceCards = [
	{
		icon: Database,
		title: "Servers & Storage",
		desc: "High-performance computing, SAN/NAS, and backup infrastructure.",
		link: "/servers"
	},
	{
		icon: Wifi,
		title: "Networking",
		desc: "LAN/WAN, VPN, structured cabling, wireless, and security.",
		link: "/networking"
	},
	{
		icon: Camera,
		title: "CCTV & Surveillance",
		desc: "IP CCTV, central monitoring, recording, and maintenance.",
		link: "/cctv"
	},
	{
		icon: Settings,
		title: "Managed Services",
		desc: "Helpdesk, incident management, proactive maintenance.",
		link: "/managed-services"
	},
	{
		icon: ShoppingBag,
		title: "Software Licensing",
		desc: "Microsoft, Red Hat, asset management & compliance.",
		link: "/services#licensing"
	},
	{
		icon: Briefcase,
		title: "Consultancy",
		desc: "Advisory, architecture planning, and knowledge transfer.",
		link: "/services"
	},
	{
		icon: Activity,
		title: "Disaster Recovery",
		desc: "Business continuity, backup testing, and DRaaS.",
		link: "/services#disaster-recovery"
	},
	{
		icon: BookOpen,
		title: "Training",
		desc: "Customised training programs & knowledge transfer.",
		link: "/services"
	}
];
var sectors = [
	{
		icon: Building,
		label: "Financial Services"
	},
	{
		icon: Heart,
		label: "Healthcare"
	},
	{
		icon: GraduationCap,
		label: "Education"
	},
	{
		icon: TrendingUp,
		label: "Industry & Manufacturing"
	},
	{
		icon: Wifi,
		label: "Telecommunications"
	},
	{
		icon: ShoppingCart,
		label: "Retail & Distribution"
	},
	{
		icon: Truck,
		label: "Energy & Construction"
	},
	{
		icon: Cpu,
		label: "Technology"
	}
];
var particles = Array.from({ length: 20 }, (_, i) => ({
	id: i,
	x: Math.random() * 100,
	y: Math.random() * 100,
	size: 2 + Math.random() * 4,
	duration: 12 + Math.random() * 20,
	delay: Math.random() * 8,
	opacity: .1 + Math.random() * .2
}));
var pillarIcons = {
	Infrastructure: Server,
	Integration: Network,
	Licensing: FileText,
	Support: LifeBuoy,
	Consultancy: Lightbulb
};
var partnerBadges = [
	{
		name: "Microsoft",
		logo: microsoft_default
	},
	{
		name: "Red Hat",
		logo: redhat_default
	},
	{
		name: "Hewlett Packard",
		logo: hp_default
	},
	{
		name: "Dell Technologies",
		logo: dell_default
	},
	{
		name: "Cisco Systems",
		logo: cisco_default
	},
	{
		name: "Fujitsu",
		logo: fujitsu_default
	}
];
function HomePage() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const imageScale = useTransform(scrollYProgress, [0, 1], [1, .95]);
	const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
	const [currentServiceImage, setCurrentServiceImage] = (0, import_react.useState)(serviceWords[0]?.image || "/assets/hero-datacenter-3Yde_gt4.jpg");
	const { text: typedServices } = useTypewriter(serviceWords.map((w) => w.label), (word) => {
		const matched = serviceWords.find((w) => w.label === word);
		if (matched) setCurrentServiceImage(matched.image);
	}, 55, 25, 2500);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative flex min-h-[92vh] w-full items-center overflow-hidden bg-gradient-to-br from-sky-100/60 via-sky-50/40 to-blue-100/40 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/20 select-none",
			"aria-labelledby": "hero-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0EA5E9_0%,_transparent_60%)] opacity-[0.06] dark:opacity-[0.08]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-pattern opacity-[0.02] dark:opacity-[0.03]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 pointer-events-none",
					children: particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "absolute rounded-full bg-primary/20 dark:bg-primary/10",
						style: {
							width: p.size,
							height: p.size,
							top: p.y + "%",
							left: p.x + "%",
							opacity: p.opacity
						},
						animate: {
							y: [
								0,
								-30,
								0
							],
							x: [
								0,
								10,
								0
							],
							opacity: [
								p.opacity,
								p.opacity * 1.5,
								p.opacity
							]
						},
						transition: {
							duration: p.duration,
							repeat: Infinity,
							delay: p.delay,
							ease: "easeInOut"
						}
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						style: {
							y: contentY,
							opacity: useTransform(scrollYProgress, [0, .4], [1, .8])
						},
						className: "grid w-full items-center gap-4 lg:grid-cols-[1fr_0.9fr] lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								ease: "easeOut"
							},
							className: "flex flex-col items-center lg:items-start justify-center text-center lg:text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
									initial: {
										opacity: 0,
										scale: .95
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									transition: {
										duration: .4,
										delay: .1
									},
									className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary backdrop-blur-sm shadow-sm w-fit dark:bg-primary/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The Enterprise IT Partner" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									id: "hero-heading",
									className: "mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl xl:text-5xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enterprise IT Infrastructure," }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Managed Services & 24/7" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative after:content-['|'] after:animate-blink after:ml-1 bg-gradient-to-r from-primary via-sky-500 to-sky-400 bg-clip-text text-transparent",
											children: typedServices
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-lg text-sm text-muted-foreground sm:text-base leading-relaxed mx-auto lg:mx-0",
									children: company.description || "A technology‑driven partner for enterprise infrastructure, integration, managed services and technical support — across Pakistan and internationally."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										className: "h-11 px-5 text-sm font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-[0.98]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/services",
											children: ["Explore Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 size-4" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										className: "h-11 border-border bg-background/50 px-5 text-sm font-semibold text-foreground hover:bg-accent hover:border-primary/30 transition-all backdrop-blur-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											hash: "request",
											children: "SLA Consultation"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: .6,
										duration: .5
									},
									className: "mt-5 w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-center lg:justify-start gap-3 mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-0.5",
											children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "size-4 text-yellow-400 fill-yellow-400",
												xmlns: "http://www.w3.org/2000/svg",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })
											}, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold text-foreground/80",
											children: "Trusted by 1,000+ businesses"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap items-center justify-center lg:justify-start -space-x-2 sm:-space-x-3",
										children: partnerBadges.map((partner, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative group transition-all duration-300 hover:z-[100] hover:scale-110 hover:-translate-y-2",
											style: { zIndex: partnerBadges.length - idx },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-white/80 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-primary/30 dark:border-slate-800/80 dark:bg-slate-800/90",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: partner.logo,
													alt: `${partner.name} logo`,
													className: "h-full w-full object-contain p-1.5",
													loading: "lazy",
													decoding: "async"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[8px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap",
												children: partner.name
											})]
										}, partner.name))
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: .96
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: {
									duration: .7,
									delay: .15,
									ease: "easeOut"
								},
								className: "relative flex items-center justify-center w-full max-w-md lg:max-w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										style: { scale: imageScale },
										className: "relative w-full overflow-hidden rounded-2xl border border-border/50 shadow-2xl",
										whileHover: {
											scale: 1.02,
											transition: { duration: .3 }
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative w-full pt-[75%] sm:pt-[66%] lg:pt-[56%]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
												mode: "wait",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
													src: currentServiceImage,
													alt: "Enterprise IT Service",
													className: "absolute inset-0 w-full h-full object-cover object-center",
													initial: {
														opacity: 0,
														scale: .95
													},
													animate: {
														opacity: 1,
														scale: 1
													},
													exit: {
														opacity: 0,
														scale: .95
													},
													transition: {
														opacity: {
															duration: .4,
															ease: "easeInOut"
														},
														scale: {
															duration: .4,
															ease: "easeInOut"
														}
													},
													loading: "lazy",
													decoding: "async"
												}, currentServiceImage)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 15
										},
										animate: {
											opacity: 1,
											y: [
												0,
												-8,
												0
											]
										},
										transition: {
											y: {
												duration: 3,
												repeat: Infinity,
												ease: "easeInOut"
											},
											opacity: {
												delay: .5,
												duration: .5
											}
										},
										className: "absolute -bottom-2 left-2 rounded-xl border border-border/60 bg-white/90 px-2.5 py-2 shadow-xl backdrop-blur-md dark:bg-slate-900/90 sm:-bottom-3 sm:left-3 sm:px-3 sm:py-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-base font-extrabold text-primary sm:text-lg leading-none",
											children: "100+"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[8px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[9px]",
											children: "IT Professionals"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											x: -15
										},
										animate: {
											opacity: 1,
											y: [
												0,
												8,
												0
											]
										},
										transition: {
											y: {
												duration: 3.5,
												repeat: Infinity,
												ease: "easeInOut"
											},
											opacity: {
												delay: .7,
												duration: .5
											}
										},
										className: "absolute -top-2 right-2 rounded-xl border border-border/60 bg-white/90 px-2.5 py-2 shadow-xl backdrop-blur-md dark:bg-slate-900/90 sm:-top-3 sm:right-3 sm:px-3 sm:py-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-sm font-bold text-primary sm:text-base leading-none",
											children: "30 min"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[7px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[8px]",
											children: "SLA Response"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "grid grid-cols-3 gap-2 w-full max-w-xs mx-auto",
								children: [
									{
										icon: Clock,
										value: "30 min",
										label: "Response"
									},
									{
										icon: Headset,
										value: "24/7",
										label: "Support"
									},
									{
										icon: ShieldCheck,
										value: "8 hubs",
										label: "Nationwide"
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center rounded-xl border border-border/30 bg-white/40 p-2 backdrop-blur-sm dark:bg-slate-800/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-3.5 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-display text-xs font-bold text-foreground leading-none mt-1",
											children: item.value
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-[7px] uppercase tracking-widest text-muted-foreground",
											children: item.label
										})
									]
								}, item.label))
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: .3 },
					transition: {
						delay: 1.2,
						duration: 1
					},
					className: "absolute bottom-2 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-1 text-[9px] font-medium tracking-wider uppercase text-muted-foreground/60 pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						animate: { y: [
							0,
							6,
							0
						] },
						transition: {
							repeat: Infinity,
							duration: 1.6,
							ease: "easeInOut"
						},
						className: "h-3 w-px rounded-full bg-muted-foreground/40"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20",
			"aria-labelledby": "partners-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Alliances"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "partners-heading",
							className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl",
							children: ["Strategic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Technology Partners"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Certified alignment with the world's leading enterprise technology vendors."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-8 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "animate-marquee flex w-max gap-6 sm:gap-8 py-4",
							children: [
								...partnerBadges,
								...partnerBadges,
								...partnerBadges
							].map((partner, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex h-16 w-28 sm:h-20 sm:w-32 lg:h-24 lg:w-36 flex-shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-white/70 p-3 shadow-md backdrop-blur-sm transition-all duration-300 hover:z-20 hover:scale-110 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 dark:bg-slate-800/70 dark:border-slate-700/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: partner.logo,
									alt: `${partner.name} logo`,
									className: "h-full w-full object-contain transition-all duration-300 group-hover:scale-105",
									loading: "lazy",
									decoding: "async"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-bottom-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "whitespace-nowrap text-[8px] font-semibold uppercase tracking-widest text-muted-foreground/80",
										children: partner.name
									})
								})]
							}, `${partner.name}-${index}`))
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:hidden",
					children: partnerBadges.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-16 w-full items-center justify-center rounded-xl border-2 border-border/40 bg-white/70 p-2 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/30 hover:shadow-md dark:bg-slate-800/70",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: partner.logo,
							alt: `${partner.name} logo`,
							className: "h-full w-full object-contain",
							loading: "lazy",
							decoding: "async"
						})
					}, partner.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20",
			"aria-labelledby": "pillars-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-xs font-semibold uppercase tracking-widest text-primary",
						children: "Foundation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "pillars-heading",
						className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl",
						children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Core Pillars"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "The five disciplines that define our approach to enterprise technology."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5",
				children: pillars.map((pillar, index) => {
					const Icon = pillarIcons[pillar.title] || Server;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .4,
							delay: index * .05
						},
						className: "card-lift group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:shadow-xl hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-semibold text-foreground",
								children: pillar.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted-foreground",
								children: pillar.description
							})
						]
					}, pillar.title);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
			"aria-labelledby": "metrics-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-5 sm:grid-cols-4",
				children: metrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
					value: metric.value,
					label: metric.label
				}, metric.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20",
			"aria-labelledby": "services-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "services-heading",
							className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl",
							children: ["Key Areas of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Expertise"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Enterprise‑grade solutions across the full technology lifecycle."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: serviceCards.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .3,
							delay: index * .04
						},
						className: "card-lift group relative overflow-hidden rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary/40 hover:shadow-xl hover:-translate-y-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: service.link,
							className: "block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xs font-semibold text-foreground sm:text-sm",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[10px] leading-relaxed text-muted-foreground sm:text-xs",
									children: service.desc
								})
							]
						})
					}, service.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "default",
						className: "h-10 px-6 text-sm hover:border-primary/50 transition-all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 size-4" })]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-12 lg:py-16",
			"aria-labelledby": "sectors-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Industries"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "sectors-heading",
							className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl",
							children: ["Serving ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Diverse Sectors"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Our expertise spans across financial, industrial, public, and technology sectors."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-2 sm:gap-3",
					children: sectors.map((sector) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-background px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-all hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(sector.icon, { className: "size-3.5 sm:size-4 text-primary" }), sector.label]
					}, sector.label))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20",
			"aria-labelledby": "why-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-xs font-semibold uppercase tracking-widest text-primary",
						children: "Why AI Power"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "why-heading",
						className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl",
						children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Value Proposition"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "What sets us apart — and why organisations trust us with their critical IT environments."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3",
				children: [
					{
						icon: Users,
						text: "Experienced Technical Workforce"
					},
					{
						icon: MapPin,
						text: "Nationwide Service Coverage"
					},
					{
						icon: Cpu,
						text: "Enterprise Technology Expertise"
					},
					{
						icon: Globe,
						text: "Global Technology Partnerships"
					},
					{
						icon: Layers,
						text: "Integrated IT Solutions"
					},
					{
						icon: Headset,
						text: "Responsive Technical Support"
					},
					{
						icon: Settings,
						text: "Flexible Service Models"
					},
					{
						icon: ShieldCheck,
						text: "Preventive & Proactive Maintenance"
					},
					{
						icon: Award,
						text: "Customer‑Centric Service Delivery"
					},
					{
						icon: RefreshCw,
						text: "Long‑Term Technology Partnership"
					}
				].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					initial: {
						opacity: 0,
						x: -6
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: {
						duration: .3,
						delay: index * .02
					},
					className: "flex items-start gap-2 rounded-xl border border-border bg-card p-3 shadow-sm hover:shadow-md hover:border-primary/20 transition-all hover:-translate-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "mt-0.5 size-4 flex-shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-foreground sm:text-sm",
						children: item.text
					})]
				}, item.text))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5",
			"aria-labelledby": "clients-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-pattern absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-xs font-semibold uppercase tracking-widest text-primary",
								children: "Our Clients"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "clients-heading",
								className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl",
								children: ["Trusted by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Industry Leaders"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "A diversified client portfolio across financial services, industry, healthcare, education, telecommunications and technology."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:gap-6 md:grid-cols-3",
						children: [
							{
								title: "Banking & Financial",
								clients: clients.filter((c) => c.category === "bfsi").slice(0, 6),
								icon: Building
							},
							{
								title: "Industry & Manufacturing",
								clients: clients.filter((c) => c.category === "industrial").slice(0, 6),
								icon: TrendingUp
							},
							{
								title: "Healthcare, Education & Telecom",
								clients: clients.filter((c) => c.category === "public").slice(0, 6),
								icon: GraduationCap
							}
						].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm hover:border-primary/20 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-sm font-semibold text-foreground flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(group.icon, { className: "size-4 text-primary" }), group.title]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1",
								children: group.clients.map((client) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-xs text-muted-foreground",
									children: client.name
								}, client.name))
							})]
						}, group.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "border-border text-foreground hover:border-primary/50 transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/clients",
								children: "View Full Client List →"
							})
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20",
			"aria-labelledby": "sla-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Service Excellence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "sla-heading",
							className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl",
							children: ["Our SLA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Commitment"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Transparent, measurable service levels to keep your business running."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-hidden rounded-xl border border-border bg-card/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 sm:gap-3 p-3 sm:p-4 sm:grid-cols-3 lg:grid-cols-4",
						children: [
							{
								label: "Coverage",
								value: "24/7 × 365"
							},
							{
								label: "Initial Response",
								value: "Within 30 min"
							},
							{
								label: "Part Replacement",
								value: "Within 4 hrs"
							},
							{
								label: "Intervention",
								value: "Onsite with spares"
							},
							{
								label: "Mission-Critical",
								value: "24/7 model"
							},
							{
								label: "Business-Critical",
								value: "8/5 model"
							},
							{
								label: "Service Reporting",
								value: "Quarterly"
							}
						].map((param) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/30 p-2.5 sm:p-3 text-center hover:border-primary/30 hover:bg-primary/5 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: param.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-sm sm:text-base font-bold text-primary",
								children: param.value
							})]
						}, param.label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						className: "hover:border-primary/50 transition-all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sla",
							children: "View Full SLA Details →"
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card/30 py-16 lg:py-20",
			"aria-labelledby": "approach-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Delivery method"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "approach-heading",
							className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl",
							children: ["Our 6‑Step ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Implementation Approach"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "A disciplined delivery method that de‑risks every enterprise rollout."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: approachSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 14
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .35,
							delay: index * .05
						},
						className: "card-lift relative overflow-hidden rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-xl transition-all hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 font-display text-xs font-bold text-primary",
								children: step.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-semibold text-foreground",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted-foreground",
								children: step.description
							})
						]
					}, step.number))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-background to-primary/5 px-6 py-12 text-center sm:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0EA5E9_0%,_transparent_60%)] opacity-[0.04]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "mx-auto size-8 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl",
							children: "Ready to secure your infrastructure with a 30‑minute SLA?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Talk to our engineering team about servers, CCTV, networking, licensing and managed support — nationwide across Pakistan."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "h-12 px-6 text-sm bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-[0.98]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									hash: "request",
									children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "h-12 border-border bg-background/50 px-6 text-sm text-foreground hover:bg-accent hover:border-primary/30 transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "size-4" }), "View SLA Models"]
								})
							})]
						})
					]
				})]
			})
		})
	] });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
