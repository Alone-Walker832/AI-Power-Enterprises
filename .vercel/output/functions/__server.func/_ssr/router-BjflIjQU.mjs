import { __toESM } from "../_runtime.mjs";
import { cva } from "../_libs/class-variance-authority+clsx.mjs";
import { breadcrumbSchema, clients, cn, company, faqPageSchema, hubs, localBusinessSchema, mailtoLink, navLinks, organizationKnowsAbout, organizationOfferCatalog, organizationSchema, partners, serviceNavLinks, serviceSchema, services, siteConfig, social, stripContext, telLink, websiteSchema, whatsappLink } from "./companyData-B8RcDcc2.mjs";
import { require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { Button } from "./button-WvLAgY56.mjs";
import { ArrowRight, ArrowUpRight, Building2, Camera, ChevronDown, CircleCheckBig, Clock, Globe, HardDrive, Headset, House, Info, Linkedin, Mail, MapPin, MessageCircle, Moon, Network, Phone, Server, Settings, ShieldCheck, Sparkles, Sun, Users, X } from "../_libs/lucide-react.mjs";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { aboutFaqs } from "./about-CsdoemFT.mjs";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useLocation, useRouter, useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { cctvFaqs } from "./cctv-C_Ybb_FQ.mjs";
import { clientsFaqs } from "./clients-DfdzxX7z.mjs";
import { contactFaqs } from "./contact-CsvVWSPF.mjs";
import { datacenterFaqs } from "./datacenter-DQw0_mtV.mjs";
import { managedFaqs } from "./managed-services-Aogmf8Q2.mjs";
import { networkingFaqs } from "./networking-C9_7hQhI.mjs";
import { hero_networking_default, hero_servers_default } from "./hero-networking-BRWTbHS7.mjs";
import { serversFaqs } from "./servers-D3qjqoA4.mjs";
import { servicesFaqs } from "./services-4ouNv_uU.mjs";
import { slaFaqs } from "./sla-B4idHaQ6.mjs";
import { storageFaqs } from "./storage-Cb9CHEtN.mjs";
import { QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-BgjoHEyx.js
var logo_default = "/assets/logo-DPTJKoTM.png";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BjflIjQU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C7OymZmu.css";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem("ape-theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initial = stored ?? (prefersDark ? "dark" : "light");
		setTheme(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
		setMounted(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		size: "icon",
		onClick: (0, import_react.useCallback)(() => {
			setTheme((current) => {
				const next = current === "dark" ? "light" : "dark";
				document.documentElement.classList.toggle("dark", next === "dark");
				window.localStorage.setItem("ape-theme", next);
				return next;
			});
		}, []),
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "min-h-11 min-w-11 rounded-full",
		children: mounted && theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
			className: "size-5",
			"aria-hidden": "true"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
			className: "size-5",
			"aria-hidden": "true"
		})
	});
}
var serviceColumns = [
	{
		title: "Infrastructure",
		items: [
			{
				label: "Data Centre",
				to: "/datacenter",
				icon: Building2,
				desc: "Racks, power, cooling & cabling"
			},
			{
				label: "Servers & Compute",
				to: "/servers",
				icon: Server,
				desc: "Enterprise servers & blades"
			},
			{
				label: "Storage & Backup",
				to: "/storage",
				icon: HardDrive,
				desc: "SAN, NAS & disaster recovery"
			}
		]
	},
	{
		title: "Connectivity & Security",
		items: [{
			label: "Networking",
			to: "/networking",
			icon: Network,
			desc: "LAN, WAN, Wi-Fi & firewalls"
		}, {
			label: "CCTV Surveillance",
			to: "/cctv",
			icon: Camera,
			desc: "IP surveillance & command rooms"
		}]
	},
	{
		title: "Operations",
		items: [{
			label: "Managed Services",
			to: "/managed-services",
			icon: Settings,
			desc: "Helpdesk, monitoring & AMC"
		}, {
			label: "SLA Support",
			to: "/sla",
			icon: ShieldCheck,
			desc: "24/7 mission-critical cover"
		}]
	}
];
var allServiceLinks = serviceColumns.flatMap((c) => c.items);
var BrandMark = (0, import_react.memo)(function BrandMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "group flex items-center gap-2 sm:gap-3 transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg",
		"aria-label": "AI Power Enterprises home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo_default,
			alt: "AI Power Enterprises Logo",
			className: "h-9 w-auto object-contain sm:h-11 lg:h-12",
			loading: "eager",
			decoding: "async"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-[10px] font-bold tracking-tight text-foreground sm:text-sm lg:text-base whitespace-nowrap",
				children: "AI POWER ENTERPRISES"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[7px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[9px] lg:text-[10px] whitespace-nowrap",
				children: "Enterprise IT Solutions"
			})]
		})]
	});
});
function Hamburger({ open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-5 w-5 sm:h-6 sm:w-6",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-0 top-0 h-0.5 w-full rounded-full bg-foreground transition-all duration-300 ease-out", open && "top-1/2 rotate-45 -translate-y-1/2") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-foreground transition-all duration-300 ease-out", open && "opacity-0") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-foreground transition-all duration-300 ease-out", open && "bottom-1/2 -rotate-45 translate-y-1/2") })
		]
	});
}
function ServicesDropdown({ pathname }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const triggerRef = (0, import_react.useRef)(null);
	const timeoutRef = (0, import_react.useRef)(null);
	const openMenu = (0, import_react.useCallback)(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setIsOpen(true);
	}, []);
	const closeMenu = (0, import_react.useCallback)(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
	}, []);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && isOpen) {
				setIsOpen(false);
				triggerRef.current?.focus();
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (e) => {
			if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false);
		};
		if (isOpen) document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);
	(0, import_react.useEffect)(() => () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
	}, []);
	const toggleDropdown = (0, import_react.useCallback)(() => setIsOpen((prev) => !prev), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref: containerRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			ref: triggerRef,
			className: cn("flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50", allServiceLinks.some((l) => l.to === pathname) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"),
			onClick: toggleDropdown,
			onMouseEnter: openMenu,
			onMouseLeave: closeMenu,
			"aria-expanded": isOpen,
			"aria-haspopup": "true",
			"aria-controls": "services-mega-menu",
			children: ["Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 transition-transform duration-300", isOpen && "rotate-180") })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "services-mega-menu",
			role: "menu",
			className: cn("absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 origin-top rounded-2xl border border-border bg-background shadow-2xl shadow-primary/10 transition-all duration-200 ease-out", "w-[min(calc(100vw-2rem),62rem)] overflow-hidden", isOpen ? "pointer-events-auto opacity-100 scale-100 translate-y-0" : "pointer-events-none opacity-0 scale-[0.98] -translate-y-1"),
			onMouseEnter: openMenu,
			onMouseLeave: closeMenu,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid flex-1 grid-cols-1 divide-y divide-border lg:grid-cols-3 lg:divide-x lg:divide-y-0",
					children: serviceColumns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 lg:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary",
							children: col.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-0.5",
							children: col.items.map((item) => {
								const Icon = item.icon;
								const isActive = pathname === item.to;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									role: "menuitem",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: item.to,
										onClick: () => setIsOpen(false),
										className: cn("group/item flex items-start gap-2.5 rounded-lg p-2 transition-all duration-200", isActive ? "bg-primary/10" : "hover:bg-muted/60"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("flex size-8 shrink-0 items-center justify-center rounded-md border transition-all duration-200", isActive ? "border-primary/40 bg-primary/15 text-primary" : "border-border bg-muted/50 text-muted-foreground group-hover/item:border-primary/40 group-hover/item:bg-primary/10 group-hover/item:text-primary"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex-1 leading-tight min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("text-sm font-semibold truncate", isActive ? "text-primary" : "text-foreground group-hover/item:text-primary"),
													children: item.label
												}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-3.5 shrink-0 text-primary" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 block text-[11px] leading-snug text-muted-foreground line-clamp-2",
												children: item.desc
											})]
										})]
									})
								}, item.to);
							})
						})]
					}, col.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative hidden w-72 shrink-0 bg-gradient-to-br from-primary via-primary to-primary/95 lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-pattern opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col p-5 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15 backdrop-blur",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground/85",
									children: "SLA Cover"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-display text-base font-bold leading-tight",
								children: [
									"30-minute response.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary-foreground/90",
										children: "Nationwide 24/7."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-1.5 text-[11px] text-primary-foreground/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 shrink-0" }), "Initial response"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 shrink-0" }), "8 hubs nationwide"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto space-y-2 pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: "w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										hash: "request",
										onClick: () => setIsOpen(false),
										children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-3.5" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: telLink(),
									className: "flex items-center justify-center gap-1.5 text-[11px] font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3" }), company.phone]
								})]
							})
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 border-t border-border bg-muted/30 px-4 py-2.5 lg:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted-foreground",
					children: "Explore our complete service portfolio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					onClick: () => setIsOpen(false),
					className: "group/all inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all",
					children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform group-hover/all:translate-x-0.5" })]
				})]
			})]
		})]
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
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
	const linkClass = (to) => {
		return cn("relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50", pathname === to ? "text-primary" : "text-muted-foreground hover:text-foreground");
	};
	const underlineClass = (to) => {
		return cn("absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary transition-all duration-300", pathname === to ? "opacity-100 w-6" : "opacity-0 w-0");
	};
	const mobileLinkClass = (to) => {
		return cn("group relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-primary/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50", pathname === to ? "bg-primary/10 text-primary" : "text-foreground hover:text-primary");
	};
	const navItems = [
		{
			label: "About",
			to: "/about"
		},
		{
			label: "Clients",
			to: "/clients"
		},
		{
			label: "Contact",
			to: "/contact"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("sticky top-8 z-40 w-full border-b transition-all duration-300", scrolled ? "border-border/40 bg-background/85 backdrop-blur-xl shadow-lg shadow-primary/5" : "border-transparent bg-background/60 backdrop-blur-md"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Primary",
			className: "mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2 sm:px-6 lg:px-8 sm:py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "hidden items-center gap-0.5 xl:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: linkClass("/"),
							"aria-current": pathname === "/" ? "page" : void 0,
							children: ["Home", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: underlineClass("/") })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesDropdown, { pathname }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sla",
							className: linkClass("/sla"),
							"aria-current": pathname === "/sla" ? "page" : void 0,
							children: ["SLA Support", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: underlineClass("/sla") })]
						}) }),
						navItems.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: link.to,
							className: linkClass(link.to),
							"aria-current": pathname === link.to ? "page" : void 0,
							children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: underlineClass(link.to) })]
						}) }, link.label))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "hidden sm:inline-flex h-9 px-4 text-sm font-semibold bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md shadow-primary/30 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition-all group rounded-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								hash: "request",
								children: ["Request Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "min-h-10 min-w-10 rounded-full hover:bg-primary/20 xl:hidden focus-visible:ring-2 focus-visible:ring-primary/50",
									"aria-label": "Toggle navigation menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hamburger, { open })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
								side: "right",
								className: "w-full max-w-sm border-l border-border/50 bg-background/95 p-0 shadow-2xl backdrop-blur-xl data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-full flex-col p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-border/50 pb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: logo_default,
													alt: "AI Power Enterprises Logo",
													className: "h-8 w-auto object-contain",
													loading: "lazy",
													decoding: "async"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-display text-sm font-bold text-foreground leading-tight",
													children: [
														"AI POWER",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "sm:hidden" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "hidden sm:inline",
															children: " "
														}),
														"ENTERPRISES"
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "ghost",
													size: "icon",
													className: "rounded-full hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-primary/50",
													"aria-label": "Close menu",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex-1 overflow-y-auto py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
												className: "flex flex-col gap-0.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/",
														onClick: () => setOpen(false),
														className: mobileLinkClass("/"),
														"aria-current": pathname === "/" ? "page" : void 0,
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4 shrink-0" }),
															"Home",
															pathname === "/" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "ml-auto size-4 text-primary" })
														]
													}) }),
													serviceColumns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "mt-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "px-4 text-[10px] font-semibold uppercase tracking-widest text-primary",
															children: col.title
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
															className: "mt-1 flex flex-col gap-0.5",
															children: col.items.map((link) => {
																const Icon = link.icon;
																const isActive = pathname === link.to;
																return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
																	to: link.to,
																	onClick: () => setOpen(false),
																	className: cn("flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50", isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"),
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }),
																		link.label,
																		isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "ml-auto size-4 text-primary" })
																	]
																}) }, link.to);
															})
														})]
													}, col.title)),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "mt-1",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
															to: "/services",
															onClick: () => setOpen(false),
															className: "flex items-center justify-between rounded-lg px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
															children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
														})
													}),
													navItems.map((link) => {
														let Icon = null;
														if (link.label === "About") Icon = Info;
														else if (link.label === "Clients") Icon = Users;
														else if (link.label === "Contact") Icon = Mail;
														return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
															className: "mt-3 first:mt-0",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
																to: link.to,
																onClick: () => setOpen(false),
																className: mobileLinkClass(link.to),
																"aria-current": pathname === link.to ? "page" : void 0,
																children: [
																	Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }),
																	link.label,
																	pathname === link.to && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "ml-auto size-4 text-primary" })
																]
															})
														}, link.label);
													})
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-auto space-y-4 border-t border-border/50 pt-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-2 gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 rounded-xl bg-primary/5 p-2.5 text-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] font-semibold text-foreground",
															children: "24/7 Support"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[9px] text-muted-foreground",
															children: "Instant response"
														})] })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 rounded-xl bg-primary/5 p-2.5 text-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headset, { className: "size-4" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] font-semibold text-foreground",
															children: "SLA"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[9px] text-muted-foreground",
															children: "30 min response"
														})] })]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													asChild: true,
													className: "w-full h-10 text-sm font-semibold bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all group rounded-lg",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/contact",
														hash: "request",
														onClick: () => setOpen(false),
														children: ["Request Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-center text-[9px] text-muted-foreground",
													children: [
														"© ",
														(/* @__PURE__ */ new Date()).getFullYear(),
														" AI Power Enterprises"
													]
												})
											]
										})
									]
								})
							})]
						})
					]
				})
			]
		})
	});
}
function TopHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sticky top-0 z-50 h-8 bg-[#2C3196] text-white border-b border-slate-800",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex h-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 sm:gap-4 flex-nowrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+922133382931",
						className: "flex items-center gap-1 sm:gap-1.5 hover:text-sky-300 transition-colors text-[10px] sm:text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3 sm:size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap",
							children: "+92 21 33382931"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block h-3 w-px bg-white/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:info@aipowerent.net",
						className: "flex items-center gap-1 sm:gap-1.5 hover:text-sky-300 transition-colors text-[10px] sm:text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3 sm:size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap",
							children: "info@aipowerent.net"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block h-3 w-px bg-white/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1 sm:gap-1.5 text-slate-300 text-[10px] sm:text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3 sm:size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap",
							children: "Karachi, Pakistan"
						})]
					})
				]
			})
		})
	});
}
var companyLinks = [
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "Our Clients",
		to: "/clients"
	},
	{
		label: "Contact",
		to: "/contact"
	},
	{
		label: "SLA Framework",
		to: "/sla"
	}
];
function SectionHeading({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
		className: "flex items-center justify-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-foreground md:justify-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block size-1.5 rounded-full bg-primary",
			"aria-hidden": "true"
		}), children]
	});
}
function FooterLink({ to, hash, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		...hash ? { hash } : {},
		className: "group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all hover:text-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "transition-transform group-hover:translate-x-0.5",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: "size-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100",
			"aria-hidden": "true"
		})]
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const safeServiceLinks = serviceNavLinks ?? [];
	const safeHubs = hubs ?? [];
	const remainingNavLinks = (navLinks ?? []).filter((link) => link.to !== "/" && !companyLinks.some((c) => c.to === link.to));
	const mergedCompanyLinks = [...companyLinks, ...remainingNavLinks.map((l) => ({
		label: l.label,
		to: l.to
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-background via-background to-card/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center sm:col-span-2 lg:col-span-4 lg:items-start lg:text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									className: "group flex items-center gap-3",
									"aria-label": "AI Power Enterprises — Home",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: logo_default,
										alt: "AI Power Enterprises logo",
										className: "h-11 w-auto object-contain transition-transform group-hover:scale-105",
										width: 44,
										height: 44
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-sm font-bold tracking-tight text-foreground",
											children: "AI POWER ENTERPRISES"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground",
											children: "Enterprise IT Solutions"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xs text-sm text-muted-foreground",
									children: company.promise
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex max-w-xs items-start gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-0.5 size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "leading-snug",
										children: company.address
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: social.linkedin,
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": "AI Power Enterprises on LinkedIn",
											className: "group inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
												className: "size-4",
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: whatsappLink,
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": "Chat on WhatsApp",
											className: "group inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
												className: "size-4",
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: telLink(),
											"aria-label": `Call ${company.phone}`,
											className: "group inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
												className: "size-4",
												"aria-hidden": "true"
											})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-6 sm:col-span-2 sm:gap-8 lg:contents",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center text-center md:items-start md:text-left lg:col-span-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { children: "Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2.5",
									children: safeServiceLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
										to: link.to,
										label: link.label
									}) }, link.to))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center text-center md:items-start md:text-left lg:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { children: "Company" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2.5",
									children: mergedCompanyLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
										to: link.to,
										label: link.label
									}) }, link.to))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center sm:col-span-2 md:items-start md:text-left lg:col-span-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { children: "Contact" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: telLink(),
											className: "group inline-flex items-center gap-2.5 text-sm transition-colors hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
													className: "size-3.5",
													"aria-hidden": "true"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: company.phone
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: whatsappLink,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground ring-1 ring-border/60 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
													className: "size-3.5",
													"aria-hidden": "true"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: mailtoLink(company.emails.sales, "Sales Enquiry"),
											className: "group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground ring-1 ring-border/60 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
													className: "size-3.5",
													"aria-hidden": "true"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: company.emails.sales
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: mailtoLink(company.emails.info, "General Enquiry"),
											className: "group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground ring-1 ring-border/60 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
													className: "size-3.5",
													"aria-hidden": "true"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: company.emails.info
											})]
										}) })
									]
								}),
								safeHubs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:justify-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
											className: "size-3",
											"aria-hidden": "true"
										}), "Onsite Coverage"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2.5 flex flex-wrap justify-center gap-1.5 md:justify-start",
										children: safeHubs.map((hub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block rounded-full border border-border/60 bg-muted/40 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary",
											children: hub.city
										}) }, hub.city))
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-col items-center justify-between gap-5 border-t border-border/60 pt-6 sm:flex-row sm:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-xs text-muted-foreground sm:text-left",
							children: [
								"© ",
								year,
								" ",
								company.name,
								". All rights reserved."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										className: "size-3.5 text-primary",
										"aria-hidden": "true"
									}), "30-Min SLA"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "hidden sm:inline-flex items-center gap-1.5",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-border",
										children: "·"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headset, {
										className: "size-3.5 text-primary",
										"aria-hidden": "true"
									}), "24/7 × 365"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "hidden sm:inline-flex items-center gap-1.5",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-border",
										children: "·"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-3.5 text-primary",
										"aria-hidden": "true"
									}), "8 Hubs"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "hidden sm:inline-flex items-center gap-1.5",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-border",
										children: "·"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "size-3.5 text-primary",
										"aria-hidden": "true"
									}), "Multi-Vendor Certified"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							hash: "request",
							className: "group inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80",
							children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
								"aria-hidden": "true"
							})]
						})
					]
				})]
			})
		]
	});
}
var WhatsAppBtn = (0, import_react.lazy)(() => import("./WhatsAppBtn-ClslvP13.mjs").then((m) => ({ default: m.WhatsAppBtn })));
var AIChatbot = (0, import_react.lazy)(() => import("./AIChatbot-CAK4ReUr.mjs").then((m) => ({ default: m.AIChatbot })));
var JSON_LD_GRAPH = {
	"@context": "https://schema.org",
	"@graph": [
		{
			...stripContext(organizationSchema),
			"@id": `${siteConfig.url}/#organization`,
			knowsAbout: organizationKnowsAbout,
			hasOfferCatalog: organizationOfferCatalog
		},
		{
			...stripContext(websiteSchema),
			"@id": `${siteConfig.url}/#website`
		},
		{
			...stripContext(localBusinessSchema),
			"@id": `${siteConfig.url}/#localbusiness`,
			parentOrganization: { "@id": `${siteConfig.url}/#organization` }
		}
	]
};
var THEME_INIT_SCRIPT = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    var root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  } catch(e) {}
})();
`;
function PremiumLoader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[60vh] items-center justify-center",
		role: "status",
		"aria-live": "polite",
		"aria-label": "Loading page content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-16 w-16 items-center justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "absolute h-full w-full animate-spin",
					viewBox: "0 0 100 100",
					style: { animationDuration: "1.2s" },
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "50",
						r: "40",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "4",
						className: "text-primary/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "50",
						r: "40",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "5",
						strokeLinecap: "round",
						strokeDasharray: "60 100",
						className: "text-primary"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "z-10 h-6 w-6 rounded-full bg-primary shadow-lg shadow-primary/30 animate-pulse" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Loading…"
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card relative z-10 w-full max-w-md rounded-3xl border border-primary/20 bg-background/80 p-8 md:p-10 text-center shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-700",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-7xl md:text-9xl font-black tracking-tight bg-gradient-to-br from-primary via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-xl",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl md:text-3xl font-bold tracking-tight",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "←"
						}), " Go back home"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center rounded-xl border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent hover:scale-105",
						children: "Contact us"
					})]
				})
			]
		})]
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const handleCopyError = async () => {
		try {
			await navigator.clipboard.writeText(error.stack || error.message);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,0,0,0.05),transparent_50%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card relative z-10 w-full max-w-lg rounded-3xl border border-destructive/30 bg-background/80 p-8 text-center shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-500",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-3xl",
					children: "⚠️"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight",
					children: "Unexpected Error"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Our systems encountered a technical issue. Please try again or contact support if the problem persists."
				}),
				false,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								router.invalidate();
								reset();
							},
							className: "inline-flex items-center rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105",
							children: "Try again"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-flex items-center rounded-xl border border-input bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:scale-105",
							children: "Go home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleCopyError,
							className: "inline-flex items-center rounded-xl border border-input bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:scale-105",
							children: copied ? "✓ Copied" : "Copy details"
						})
					]
				})
			]
		})]
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5"
			},
			{
				name: "theme-color",
				content: siteConfig.themeColor
			},
			{ title: siteConfig.defaultTitle },
			{
				name: "description",
				content: siteConfig.defaultDescription
			},
			{
				name: "keywords",
				content: siteConfig.defaultKeywords.join(", ")
			},
			{
				name: "author",
				content: company.name
			},
			{
				name: "publisher",
				content: company.name
			},
			{
				name: "application-name",
				content: company.name
			},
			{
				name: "robots",
				content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
			},
			{
				name: "googlebot",
				content: "index, follow"
			},
			{
				name: "referrer",
				content: "strict-origin-when-cross-origin"
			},
			{
				name: "format-detection",
				content: "telephone=no"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: company.name
			},
			{
				property: "og:title",
				content: siteConfig.defaultTitle
			},
			{
				property: "og:description",
				content: siteConfig.defaultDescription
			},
			{
				property: "og:url",
				content: siteConfig.url
			},
			{
				property: "og:image",
				content: `${siteConfig.url}${siteConfig.ogImage}`
			},
			{
				property: "og:image:type",
				content: "image/jpeg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: `${company.name} — ${company.tagline}`
			},
			{
				property: "og:locale",
				content: siteConfig.locale
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: siteConfig.defaultTitle
			},
			{
				name: "twitter:description",
				content: siteConfig.defaultDescription
			},
			{
				name: "twitter:image",
				content: `${siteConfig.url}${siteConfig.ogImage}`
			},
			{
				name: "twitter:image:alt",
				content: company.name
			},
			{
				name: "geo.region",
				content: "PK-SD"
			},
			{
				name: "geo.placename",
				content: "Karachi"
			},
			{
				name: "geo.position",
				content: `${company.geo.latitude};${company.geo.longitude}`
			},
			{
				name: "ICBM",
				content: `${company.geo.latitude}, ${company.geo.longitude}`
			},
			{
				name: "mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black-translucent"
			},
			{
				name: "apple-mobile-web-app-title",
				content: company.name
			},
			{
				name: "color-scheme",
				content: "light dark"
			}
		],
		links: [
			{
				rel: "canonical",
				href: siteConfig.url
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				as: "style",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		],
		scripts: [{ dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } }, {
			type: "application/ld+json",
			children: JSON.stringify(JSON_LD_GRAPH)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en-PK",
		dir: "ltr",
		className: "scroll-smooth antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-background font-sans text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#main-content",
					className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-xl focus:ring-2 focus:ring-white/50",
					children: "Skip to main content"
				}),
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		const handleAnchorClick = (e) => {
			const anchor = e.target.closest("a[href^=\"#\"]");
			if (!anchor) return;
			const href = anchor.getAttribute("href");
			if (!href || href === "#") return;
			const targetElement = document.querySelector(href);
			if (!targetElement) return;
			e.preventDefault();
			const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 90;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
			history.pushState(null, "", href);
		};
		document.addEventListener("click", handleAnchorClick);
		return () => document.removeEventListener("click", handleAnchorClick);
	}, []);
	(0, import_react.useEffect)(() => {
		if (location.hash) return;
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [location.pathname, location.hash]);
	(0, import_react.useEffect)(() => {
		const updateThemeColor = () => {
			const isDark = document.documentElement.classList.contains("dark");
			const meta = document.querySelector("meta[name=\"theme-color\"]");
			if (meta) meta.setAttribute("content", isDark ? "#0A192F" : siteConfig.themeColor);
		};
		const observer = new MutationObserver(updateThemeColor);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"]
		});
		updateThemeColor();
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					id: "main-content",
					className: "relative flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-in fade-in slide-in-from-bottom-2 duration-[400ms] fill-mode-both",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PremiumLoader, {}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
						})
					}, location.pathname)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppBtn, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIChatbot, {})
				})
			]
		})
	});
}
var hero_datacenter_default = "/assets/hero-datacenter-3Yde_gt4.jpg";
var $$splitComponentImporter$11 = () => import("./routes-LC7R53dE.mjs");
var HOME_PAGE_SCHEMA = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": "#organization",
			name: "AI Power Enterprises",
			url: "https://aipowerenterprises.com",
			logo: "https://aipowerenterprises.com/logo.png",
			description: "Enterprise IT infrastructure, managed services, CCTV, networking, servers and 24/7 SLA technical support across Pakistan.",
			foundingYear: "2015",
			numberOfEmployees: {
				"@type": "QuantitativeValue",
				value: "100+"
			},
			address: {
				"@type": "PostalAddress",
				addressLocality: "Karachi",
				addressCountry: "PK"
			},
			contactPoint: [{
				"@type": "ContactPoint",
				telephone: "+92-300-1234567",
				contactType: "sales",
				availableLanguage: ["English", "Urdu"]
			}, {
				"@type": "ContactPoint",
				telephone: "+92-300-7654321",
				contactType: "support",
				availableLanguage: ["English", "Urdu"]
			}],
			sameAs: ["https://facebook.com/aipowerenterprises", "https://linkedin.com/company/aipowerenterprises"]
		},
		{
			"@type": "WebSite",
			url: "https://aipowerenterprises.com",
			name: "AI Power Enterprises",
			description: "Enterprise IT solutions provider in Pakistan.",
			potentialAction: {
				"@type": "SearchAction",
				target: "https://aipowerenterprises.com/search?q={search_term_string}",
				"query-input": "required name=search_term_string"
			}
		},
		{
			"@type": "BreadcrumbList",
			itemListElement: [{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://aipowerenterprises.com"
			}, {
				"@type": "ListItem",
				position: 2,
				name: "Services",
				item: "https://aipowerenterprises.com/services"
			}]
		},
		{
			"@type": "Service",
			name: "Managed IT Services",
			description: "Dependable technical support, infrastructure monitoring, helpdesk, incident management, and preventive maintenance to reduce operational disruption.",
			provider: { "@id": "#organization" },
			serviceType: "Managed Services"
		},
		{
			"@type": "Service",
			name: "CCTV & Enterprise Security Surveillance",
			description: "IP-based CCTV surveillance systems, centralized monitoring, video recording, and integrated security infrastructure for corporate and industrial environments.",
			provider: { "@id": "#organization" },
			serviceType: "Security"
		},
		{
			"@type": "Service",
			name: "Enterprise Networking Solutions",
			description: "Structured cabling, routing/switching, wireless networking, network security, and optimization for reliable business connectivity.",
			provider: { "@id": "#organization" },
			serviceType: "Networking"
		},
		{
			"@type": "Service",
			name: "Servers & High-Performance Computing",
			description: "Enterprise server infrastructure, blade systems, high-performance computing, and unified compute platforms for mission-critical workloads.",
			provider: { "@id": "#organization" },
			serviceType: "Infrastructure"
		},
		{
			"@type": "Service",
			name: "Data Centre & Storage Solutions",
			description: "SAN/NAS storage, backup and recovery infrastructure, and centralized data management designed for availability, scalability, and business continuity.",
			provider: { "@id": "#organization" },
			serviceType: "Infrastructure"
		},
		{
			"@type": "Service",
			name: "SLA & Mission-Critical Support",
			description: "24/7/365 technical support, rapid response, onsite intervention, preventive maintenance, and structured service level frameworks.",
			provider: { "@id": "#organization" },
			serviceType: "Support"
		},
		{
			"@type": "LocalBusiness",
			name: "AI Power Enterprises",
			image: "https://aipowerenterprises.com/logo.png",
			"@id": "#localbusiness",
			url: "https://aipowerenterprises.com",
			telephone: "+92-300-1234567",
			priceRange: "$$$",
			address: {
				"@type": "PostalAddress",
				streetAddress: "IT Tower, Shahrah-e-Faisal",
				addressLocality: "Karachi",
				addressRegion: "Sindh",
				postalCode: "75400",
				addressCountry: "PK"
			},
			geo: {
				"@type": "GeoCoordinates",
				latitude: 24.8607,
				longitude: 67.0011
			},
			openingHoursSpecification: [{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday"
				],
				opens: "09:00",
				closes: "18:00"
			}, {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Saturday",
				opens: "10:00",
				closes: "14:00"
			}],
			sameAs: ["https://facebook.com/aipowerenterprises", "https://linkedin.com/company/aipowerenterprises"]
		}
	]
};
var Route$11 = createFileRoute("/")({
	head: () => ({
		title: "AI Power Enterprises | Enterprise IT Infrastructure & 24/7 SLA Support Pakistan",
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "description",
				content: "Enterprise IT infrastructure, managed services, CCTV, networking, servers and 24/7 SLA support across Pakistan. 100+ professionals, 8 technical hubs, 30-minute response commitment."
			},
			{
				name: "author",
				content: "AI Power Enterprises"
			},
			{
				name: "robots",
				content: "index, follow, max-snippet:-1, max-image-preview:large"
			},
			{
				name: "referrer",
				content: "strict-origin-when-cross-origin"
			},
			{
				name: "keywords",
				content: "IT infrastructure, managed services, CCTV, networking, servers, SLA support, enterprise IT, data centre, Pakistan, Karachi, Lahore, Islamabad"
			},
			{
				property: "og:title",
				content: "AI Power Enterprises | Enterprise IT Solutions Pakistan"
			},
			{
				property: "og:description",
				content: "Nationwide IT solutions with 24/7 SLA support – data centres, networking, CCTV, and managed services from Pakistan's trusted enterprise partner."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://aipowerenterprises.com"
			},
			{
				property: "og:image",
				content: "https://aipowerenterprises.com/og-image.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				property: "og:site_name",
				content: "AI Power Enterprises"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "AI Power Enterprises | Enterprise IT Solutions"
			},
			{
				name: "twitter:description",
				content: "Enterprise IT infrastructure, managed services, CCTV, networking, servers & 24/7 SLA support across Pakistan."
			},
			{
				name: "twitter:image",
				content: "https://aipowerenterprises.com/og-image.jpg"
			},
			{
				name: "theme-color",
				content: "#1a2a6c"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://aipowerenterprises.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "dns-prefetch",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preload",
				href: hero_datacenter_default,
				as: "image",
				fetchPriority: "high"
			},
			{
				rel: "preload",
				href: hero_servers_default,
				as: "image",
				fetchPriority: "low"
			},
			{
				rel: "preload",
				href: hero_networking_default,
				as: "image",
				fetchPriority: "low"
			},
			{
				rel: "preload",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
				as: "style"
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(HOME_PAGE_SCHEMA)
			},
			{ dangerouslySetInnerHTML: { __html: `
            (function(){
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                const root = document.documentElement;
                if (theme === 'dark') {
                  root.classList.add('dark');
                  root.style.colorScheme = 'dark';
                } else {
                  root.classList.remove('dark');
                  root.style.colorScheme = 'light';
                }
                const meta = document.querySelector('meta[name="theme-color"]');
                if (meta) {
                  meta.content = theme === 'dark' ? '#0d1a2b' : '#1a2a6c';
                }
              } catch(e) {}
            })();
          ` } },
			{
				async: true,
				src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
			},
			{ dangerouslySetInnerHTML: { __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          ` } }
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./about-B8mPADyT.mjs");
var PAGE_PATH$10 = "/about";
var PAGE_URL$10 = `${siteConfig.url}${PAGE_PATH$10}`;
var PAGE_TITLE$10 = "About AI Power Enterprises | Enterprise IT Partner in Pakistan";
var PAGE_DESCRIPTION$10 = "AI Power Enterprises is a technology-driven solutions and services company providing enterprise IT infrastructure, managed services, consultancy, and 24/7 SLA support across Pakistan.";
var PAGE_KEYWORDS$10 = [
	"about AI Power Enterprises",
	"enterprise IT company Pakistan",
	"IT services company Karachi",
	"systems integrator Pakistan",
	"managed services provider Karachi",
	"IT infrastructure partner Pakistan",
	"enterprise IT consultancy Karachi",
	"24/7 IT support company Pakistan",
	"Microsoft Red Hat Cisco partner Pakistan",
	"IT SLA provider Karachi"
];
var Route$10 = createFileRoute("/about")({
	head: () => {
		const breadcrumbLd = breadcrumbSchema([{
			name: "Home",
			url: "/"
		}, {
			name: "About",
			url: PAGE_PATH$10
		}]);
		const faqLd = faqPageSchema(aboutFaqs);
		const aboutLd = {
			"@context": "https://schema.org",
			"@type": "AboutPage",
			name: PAGE_TITLE$10,
			description: PAGE_DESCRIPTION$10,
			url: PAGE_URL$10,
			inLanguage: "en-PK",
			isPartOf: { "@id": `${siteConfig.url}/#website` },
			about: { "@id": `${siteConfig.url}/#organization` },
			mainEntity: { "@id": `${siteConfig.url}/#organization` }
		};
		return {
			meta: [
				{ title: PAGE_TITLE$10 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$10
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$10.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$10
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$10
				},
				{
					property: "og:url",
					content: PAGE_URL$10
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "About AI Power Enterprises — Enterprise IT Partner"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$10
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$10
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$10
			}],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify(aboutLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./cctv-BVvIEn70.mjs");
var PAGE_PATH$9 = "/cctv";
var PAGE_URL$9 = `${siteConfig.url}${PAGE_PATH$9}`;
var PAGE_TITLE$9 = "IP CCTV & Surveillance Solutions in Pakistan | Enterprise Grade";
var PAGE_DESCRIPTION$9 = "IP CCTV design, site assessment, network video transmission, storage, command rooms and preventive maintenance for enterprise sites across Pakistan.";
var PAGE_KEYWORDS$9 = [
	"CCTV solutions Pakistan",
	"IP camera installation Karachi",
	"enterprise surveillance Pakistan",
	"CCTV AMC Karachi",
	"IP CCTV design Pakistan",
	"NVR storage solutions Pakistan",
	"video management system Karachi",
	"ANPR cameras Pakistan",
	"thermal cameras Pakistan",
	"command room integration Karachi",
	"access control integration Pakistan",
	"24/7 CCTV maintenance Karachi"
];
var Route$9 = createFileRoute("/cctv")({
	head: () => {
		const cctvService = services.find((s) => s.slug === "cctv");
		const serviceLd = cctvService ? serviceSchema(cctvService) : null;
		const breadcrumbLd = breadcrumbSchema([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Services",
				url: "/services"
			},
			{
				name: "CCTV & Surveillance",
				url: PAGE_PATH$9
			}
		]);
		const faqLd = faqPageSchema(cctvFaqs);
		return {
			meta: [
				{ title: PAGE_TITLE$9 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$9
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$9.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$9
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$9
				},
				{
					property: "og:url",
					content: PAGE_URL$9
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "IP CCTV & Surveillance — AI Power Enterprises"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$9
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$9
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$9
			}],
			scripts: [
				...serviceLd ? [{
					type: "application/ld+json",
					children: JSON.stringify(serviceLd)
				}] : [],
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./clients-DZmZgfsK.mjs");
var PAGE_PATH$8 = "/clients";
var PAGE_URL$8 = `${siteConfig.url}${PAGE_PATH$8}`;
var PAGE_TITLE$8 = "Clients & Strategic Partners | AI Power Enterprises Pakistan";
var PAGE_DESCRIPTION$8 = "Trusted by leading banks, industrial groups, hospitals, universities and telecom operators across Pakistan, with Microsoft, Red Hat, Cisco, HPE and Dell partnerships.";
var PAGE_KEYWORDS$8 = [
	"AI Power Enterprises clients",
	"enterprise IT clients Pakistan",
	"BFSI IT services Pakistan",
	"banking IT support Karachi",
	"industrial IT services Pakistan",
	"healthcare IT Pakistan",
	"education IT services Karachi",
	"telecom IT Pakistan",
	"Microsoft partner Pakistan",
	"Cisco partner Karachi",
	"HPE partner Pakistan",
	"enterprise IT vendor Pakistan"
];
var Route$8 = createFileRoute("/clients")({
	head: () => {
		const breadcrumbLd = breadcrumbSchema([{
			name: "Home",
			url: "/"
		}, {
			name: "Clients",
			url: PAGE_PATH$8
		}]);
		const faqLd = faqPageSchema(clientsFaqs);
		const collectionLd = {
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: PAGE_TITLE$8,
			description: PAGE_DESCRIPTION$8,
			url: PAGE_URL$8,
			inLanguage: "en-PK",
			isPartOf: { "@id": `${siteConfig.url}/#website` },
			about: { "@id": `${siteConfig.url}/#organization` },
			mainEntity: {
				"@type": "ItemList",
				name: "Enterprise Clients",
				numberOfItems: clients.length,
				itemListElement: clients.map((client, i) => ({
					"@type": "ListItem",
					position: i + 1,
					name: client.name,
					description: `${client.tag} — AI Power Enterprises client`
				}))
			},
			mentions: {
				"@type": "ItemList",
				name: "Technology Partners",
				numberOfItems: partners.length,
				itemListElement: partners.map((p, i) => ({
					"@type": "ListItem",
					position: i + 1,
					name: p.name,
					description: p.focus
				}))
			}
		};
		return {
			meta: [
				{ title: PAGE_TITLE$8 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$8
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$8.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$8
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$8
				},
				{
					property: "og:url",
					content: PAGE_URL$8
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "Clients & Partners — AI Power Enterprises"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$8
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$8
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$8
			}],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify(collectionLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-Dq3jyuiK.mjs");
var PAGE_PATH$7 = "/contact";
var PAGE_URL$7 = `${siteConfig.url}${PAGE_PATH$7}`;
var PAGE_TITLE$7 = "Contact AI Power Enterprises | Karachi IT Services & 24/7 SLA Desk";
var PAGE_DESCRIPTION$7 = "Contact AI Power Enterprises in Karachi for SLA support, CCTV, servers, data centre and network cabling. Email, WhatsApp or call the 24/7 SLA desk.";
var PAGE_KEYWORDS$7 = [
	"contact AI Power Enterprises",
	"IT services Karachi contact",
	"SLA support contact Pakistan",
	"24/7 IT helpdesk Karachi",
	"IT company contact Karachi",
	"enterprise IT support contact",
	"IT services Shahrah-e-Faisal",
	"CCTV services contact Karachi"
];
var Route$7 = createFileRoute("/contact")({
	head: () => {
		const breadcrumbLd = breadcrumbSchema([{
			name: "Home",
			url: "/"
		}, {
			name: "Contact",
			url: PAGE_PATH$7
		}]);
		const faqLd = faqPageSchema(contactFaqs);
		const contactLd = {
			"@context": "https://schema.org",
			"@type": "ContactPage",
			name: PAGE_TITLE$7,
			description: PAGE_DESCRIPTION$7,
			url: PAGE_URL$7,
			inLanguage: "en-PK",
			isPartOf: { "@id": `${siteConfig.url}/#website` },
			about: { "@id": `${siteConfig.url}/#organization` },
			mainEntity: {
				"@type": "Organization",
				"@id": `${siteConfig.url}/#organization`,
				contactPoint: [{
					"@type": "ContactPoint",
					telephone: company.phone,
					contactType: "customer service",
					areaServed: "PK",
					availableLanguage: ["en", "ur"]
				}, {
					"@type": "ContactPoint",
					telephone: company.whatsapp,
					contactType: "technical support",
					areaServed: "PK",
					availableLanguage: ["en", "ur"]
				}]
			}
		};
		return {
			meta: [
				{ title: PAGE_TITLE$7 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$7
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$7.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$7
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$7
				},
				{
					property: "og:url",
					content: PAGE_URL$7
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "Contact AI Power Enterprises — Karachi, Pakistan"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$7
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$7
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$7
			}],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify(contactLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./datacenter-DewktX1E.mjs");
var PAGE_PATH$6 = "/datacenter";
var PAGE_URL$6 = `${siteConfig.url}${PAGE_PATH$6}`;
var PAGE_TITLE$6 = "Data Centre Solutions in Pakistan | Design, Build & Operate";
var PAGE_DESCRIPTION$6 = "End-to-end data centre solutions in Karachi & Pakistan — design, racks, structured cabling, power, cooling, monitoring and 24/7 support from certified engineers.";
var PAGE_KEYWORDS$6 = [
	"data centre solutions Pakistan",
	"data center design Karachi",
	"server rack installation Pakistan",
	"enterprise data centre Karachi",
	"structured cabling Pakistan",
	"data center cooling Karachi",
	"TIA-942 data centre Pakistan",
	"data centre build Pakistan",
	"DCIM Pakistan",
	"CRAC cooling Karachi",
	"data centre AMC Pakistan",
	"24/7 data centre support"
];
var Route$6 = createFileRoute("/datacenter")({
	head: () => {
		const dcService = services.find((s) => s.slug === "datacenter");
		const serviceLd = dcService ? serviceSchema(dcService) : null;
		const breadcrumbLd = breadcrumbSchema([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Services",
				url: "/services"
			},
			{
				name: "Data Centre",
				url: PAGE_PATH$6
			}
		]);
		const faqLd = faqPageSchema(datacenterFaqs);
		return {
			meta: [
				{ title: PAGE_TITLE$6 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$6
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$6.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$6
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$6
				},
				{
					property: "og:url",
					content: PAGE_URL$6
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "Data Centre Solutions — AI Power Enterprises"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$6
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$6
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$6
			}],
			scripts: [
				...serviceLd ? [{
					type: "application/ld+json",
					children: JSON.stringify(serviceLd)
				}] : [],
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./managed-services-BMDe_1PZ.mjs");
var PAGE_PATH$5 = "/managed-services";
var PAGE_URL$5 = `${siteConfig.url}${PAGE_PATH$5}`;
var PAGE_TITLE$5 = "Managed IT Services in Pakistan | 24/7 Helpdesk & Support";
var PAGE_DESCRIPTION$5 = "Managed IT services in Pakistan — 24/7 helpdesk, incident management, preventive maintenance, resident engineering and SLA-backed support across 8 national hubs.";
var PAGE_KEYWORDS$5 = [
	"managed IT services Pakistan",
	"24/7 IT support Karachi",
	"IT helpdesk Pakistan",
	"IT AMC Karachi",
	"resident engineer Pakistan",
	"managed services provider Pakistan",
	"remote infrastructure monitoring",
	"incident management Pakistan",
	"preventive maintenance IT",
	"outsourced IT operations Pakistan",
	"enterprise IT support Karachi",
	"SLA managed support Pakistan"
];
var Route$5 = createFileRoute("/managed-services")({
	head: () => {
		const managedService = services.find((s) => s.slug === "managed-services");
		const serviceLd = managedService ? serviceSchema(managedService) : null;
		const breadcrumbLd = breadcrumbSchema([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Services",
				url: "/services"
			},
			{
				name: "Managed Services",
				url: PAGE_PATH$5
			}
		]);
		const faqLd = faqPageSchema(managedFaqs);
		return {
			meta: [
				{ title: PAGE_TITLE$5 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$5
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$5.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$5
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$5
				},
				{
					property: "og:url",
					content: PAGE_URL$5
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "Managed IT Services — AI Power Enterprises"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$5
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$5
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$5
			}],
			scripts: [
				...serviceLd ? [{
					type: "application/ld+json",
					children: JSON.stringify(serviceLd)
				}] : [],
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./networking-BeSIuukE.mjs");
var PAGE_PATH$4 = "/networking";
var PAGE_URL$4 = `${siteConfig.url}${PAGE_PATH$4}`;
var PAGE_TITLE$4 = "Enterprise Networking Solutions in Pakistan | LAN, WAN, Wi-Fi";
var PAGE_DESCRIPTION$4 = "Structured cabling (Cat6/Cat6A/fibre), enterprise routing & switching, wireless, next-gen firewalls and VPN — designed, deployed and supported nationwide in Pakistan.";
var PAGE_KEYWORDS$4 = [
	"networking solutions Pakistan",
	"structured cabling Karachi",
	"enterprise Wi-Fi deployment",
	"Cisco networking Pakistan",
	"HPE Aruba networking Karachi",
	"next-gen firewall Pakistan",
	"VPN solutions Karachi",
	"LAN WAN solutions Pakistan",
	"fibre optic cabling Karachi",
	"data centre networking Pakistan",
	"network AMC Pakistan",
	"24/7 network support Karachi"
];
var Route$4 = createFileRoute("/networking")({
	head: () => {
		const networkService = services.find((s) => s.slug === "networking");
		const serviceLd = networkService ? serviceSchema(networkService) : null;
		const breadcrumbLd = breadcrumbSchema([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Services",
				url: "/services"
			},
			{
				name: "Networking",
				url: PAGE_PATH$4
			}
		]);
		const faqLd = faqPageSchema(networkingFaqs);
		return {
			meta: [
				{ title: PAGE_TITLE$4 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$4
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$4.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$4
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$4
				},
				{
					property: "og:url",
					content: PAGE_URL$4
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "Enterprise Networking Solutions — AI Power Enterprises"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$4
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$4
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$4
			}],
			scripts: [
				...serviceLd ? [{
					type: "application/ld+json",
					children: JSON.stringify(serviceLd)
				}] : [],
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./servers-B7AVKFPY.mjs");
var PAGE_PATH$3 = "/servers";
var PAGE_URL$3 = `${siteConfig.url}${PAGE_PATH$3}`;
var PAGE_TITLE$3 = "Enterprise Servers & Storage in Pakistan | HPE, Dell, Cisco";
var PAGE_DESCRIPTION$3 = "Enterprise servers, blade systems, SAN/NAS storage and backup infrastructure from HPE, Dell and Cisco — designed, deployed and supported nationwide in Pakistan.";
var PAGE_KEYWORDS$3 = [
	"enterprise servers Pakistan",
	"blade servers Karachi",
	"HPE ProLiant Pakistan",
	"Dell PowerEdge Karachi",
	"Cisco UCS Pakistan",
	"SAN NAS solutions Karachi",
	"server AMC Pakistan",
	"storage solutions Pakistan",
	"backup infrastructure Pakistan",
	"virtualization Pakistan",
	"VMware vSphere Pakistan",
	"Red Hat OpenShift Pakistan"
];
var Route$3 = createFileRoute("/servers")({
	head: () => {
		const serverService = services.find((s) => s.slug === "servers");
		const serviceLd = serverService ? serviceSchema(serverService) : null;
		const breadcrumbLd = breadcrumbSchema([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Services",
				url: "/services"
			},
			{
				name: "Servers & Compute",
				url: PAGE_PATH$3
			}
		]);
		const faqLd = faqPageSchema(serversFaqs);
		return {
			meta: [
				{ title: PAGE_TITLE$3 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$3
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$3.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$3
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$3
				},
				{
					property: "og:url",
					content: PAGE_URL$3
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "Enterprise Servers & Storage — AI Power Enterprises"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$3
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$3
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$3
			}],
			scripts: [
				...serviceLd ? [{
					type: "application/ld+json",
					children: JSON.stringify(serviceLd)
				}] : [],
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services-g0Ess8h3.mjs");
var PAGE_PATH$2 = "/services";
var PAGE_URL$2 = `${siteConfig.url}${PAGE_PATH$2}`;
var PAGE_TITLE$2 = "IT Services in Pakistan | Servers, CCTV, Networking, SLA";
var PAGE_DESCRIPTION$2 = "Enterprise IT services in Pakistan — servers, storage, networking, IP CCTV, software licensing, managed services and 24/7 SLA support with 30-minute response.";
var PAGE_KEYWORDS$2 = [
	"IT services Pakistan",
	"enterprise IT Karachi",
	"server solutions Pakistan",
	"CCTV installation Karachi",
	"networking solutions Pakistan",
	"enterprise software licensing Pakistan",
	"managed IT services Pakistan",
	"24/7 IT support Karachi",
	"SLA support Pakistan",
	"data centre solutions Pakistan",
	"storage solutions Pakistan",
	"systems integration Pakistan"
];
var Route$2 = createFileRoute("/services")({
	head: () => {
		const collectionLd = {
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: PAGE_TITLE$2,
			description: PAGE_DESCRIPTION$2,
			url: PAGE_URL$2,
			inLanguage: "en-PK",
			isPartOf: { "@id": `${siteConfig.url}/#website` },
			mainEntity: {
				"@type": "ItemList",
				name: "Enterprise IT Services",
				numberOfItems: services.length,
				itemListElement: services.map((s, i) => ({
					"@type": "ListItem",
					position: i + 1,
					name: s.title,
					description: s.summary,
					url: `${siteConfig.url}${s.path}`
				}))
			}
		};
		const breadcrumbLd = breadcrumbSchema([{
			name: "Home",
			url: "/"
		}, {
			name: "Services",
			url: PAGE_PATH$2
		}]);
		const faqLd = faqPageSchema(servicesFaqs);
		return {
			meta: [
				{ title: PAGE_TITLE$2 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$2
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$2.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$2
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$2
				},
				{
					property: "og:url",
					content: PAGE_URL$2
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "Enterprise IT Services — AI Power Enterprises"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$2
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$2
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$2
			}],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify(collectionLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./sla-BvfBdvw-.mjs");
var PAGE_PATH$1 = "/sla";
var PAGE_URL$1 = `${siteConfig.url}${PAGE_PATH$1}`;
var PAGE_TITLE$1 = "SLA-Based IT Support in Pakistan | 24/7 · 30-Min Response";
var PAGE_DESCRIPTION$1 = "Contractual SLA support in Pakistan — 30-minute initial response, 4-working-hour part replacement, 24/7 × 365 coverage, onsite intervention and quarterly reporting.";
var PAGE_KEYWORDS$1 = [
	"SLA support Pakistan",
	"24/7 IT support Karachi",
	"AMC services Pakistan",
	"SLA managed services",
	"30 minute SLA response",
	"mission critical IT support Pakistan",
	"onsite IT support Pakistan",
	"spare parts SLA Pakistan",
	"contractual IT support",
	"IT maintenance contract Pakistan",
	"enterprise SLA support",
	"business critical IT support"
];
var Route$1 = createFileRoute("/sla")({
	head: () => {
		const slaService = services.find((s) => s.slug === "sla");
		const serviceLd = slaService ? serviceSchema(slaService) : null;
		const breadcrumbLd = breadcrumbSchema([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Services",
				url: "/services"
			},
			{
				name: "SLA Support",
				url: PAGE_PATH$1
			}
		]);
		const faqLd = faqPageSchema(slaFaqs);
		return {
			meta: [
				{ title: PAGE_TITLE$1 },
				{
					name: "description",
					content: PAGE_DESCRIPTION$1
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS$1.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE$1
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION$1
				},
				{
					property: "og:url",
					content: PAGE_URL$1
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "SLA-Based IT Support — AI Power Enterprises"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE$1
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION$1
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL$1
			}],
			scripts: [
				...serviceLd ? [{
					type: "application/ld+json",
					children: JSON.stringify(serviceLd)
				}] : [],
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./storage-oa5OSCTk.mjs");
var PAGE_PATH = "/storage";
var PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
var PAGE_TITLE = "Enterprise Storage & Backup Solutions in Pakistan | SAN, NAS";
var PAGE_DESCRIPTION = "Enterprise storage & backup solutions in Pakistan — SAN, NAS, all-flash arrays, tape archival, replication and disaster recovery. Deployed and supported 24/7 nationwide.";
var PAGE_KEYWORDS = [
	"enterprise storage Pakistan",
	"SAN NAS solutions Karachi",
	"backup solutions Pakistan",
	"all-flash storage Karachi",
	"disaster recovery Pakistan",
	"storage area network Pakistan",
	"NAS storage Karachi",
	"ransomware protection Pakistan",
	"LTO tape archive Pakistan",
	"replication Pakistan",
	"storage AMC Pakistan",
	"24/7 storage support Karachi"
];
var Route = createFileRoute("/storage")({
	head: () => {
		const storageService = services.find((s) => s.slug === "storage");
		const serviceLd = storageService ? serviceSchema(storageService) : null;
		const breadcrumbLd = breadcrumbSchema([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Services",
				url: "/services"
			},
			{
				name: "Storage & Backup",
				url: PAGE_PATH
			}
		]);
		const faqLd = faqPageSchema(storageFaqs);
		return {
			meta: [
				{ title: PAGE_TITLE },
				{
					name: "description",
					content: PAGE_DESCRIPTION
				},
				{
					name: "keywords",
					content: PAGE_KEYWORDS.join(", ")
				},
				{
					name: "robots",
					content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: company.name
				},
				{
					property: "og:title",
					content: PAGE_TITLE
				},
				{
					property: "og:description",
					content: PAGE_DESCRIPTION
				},
				{
					property: "og:url",
					content: PAGE_URL
				},
				{
					property: "og:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "Enterprise Storage & Backup Solutions — AI Power Enterprises"
				},
				{
					property: "og:locale",
					content: siteConfig.locale
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: PAGE_TITLE
				},
				{
					name: "twitter:description",
					content: PAGE_DESCRIPTION
				},
				{
					name: "twitter:image",
					content: `${siteConfig.url}${siteConfig.ogImage}`
				}
			],
			links: [{
				rel: "canonical",
				href: PAGE_URL
			}],
			scripts: [
				...serviceLd ? [{
					type: "application/ld+json",
					children: JSON.stringify(serviceLd)
				}] : [],
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbLd)
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqLd)
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute: Route$10.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$12
	}),
	CctvRoute: Route$9.update({
		id: "/cctv",
		path: "/cctv",
		getParentRoute: () => Route$12
	}),
	ClientsRoute: Route$8.update({
		id: "/clients",
		path: "/clients",
		getParentRoute: () => Route$12
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$12
	}),
	DatacenterRoute: Route$6.update({
		id: "/datacenter",
		path: "/datacenter",
		getParentRoute: () => Route$12
	}),
	ManagedServicesRoute: Route$5.update({
		id: "/managed-services",
		path: "/managed-services",
		getParentRoute: () => Route$12
	}),
	NetworkingRoute: Route$4.update({
		id: "/networking",
		path: "/networking",
		getParentRoute: () => Route$12
	}),
	ServersRoute: Route$3.update({
		id: "/servers",
		path: "/servers",
		getParentRoute: () => Route$12
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$12
	}),
	SlaRoute: Route$1.update({
		id: "/sla",
		path: "/sla",
		getParentRoute: () => Route$12
	}),
	StorageRoute: Route.update({
		id: "/storage",
		path: "/storage",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
