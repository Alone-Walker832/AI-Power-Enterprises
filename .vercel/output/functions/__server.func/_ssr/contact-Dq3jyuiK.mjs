import { __toESM } from "../_runtime.mjs";
import { cva } from "../_libs/class-variance-authority+clsx.mjs";
import { cn, company, servicePriorities, telLink, whatsappLink } from "./companyData-B8RcDcc2.mjs";
import { require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { Button } from "./button-WvLAgY56.mjs";
import { ArrowRight, Building2, Check, ChevronDown, ChevronUp, CircleCheck, Clock, Copy, Earth, ExternalLink, Headset, Mail, MapPin, MessageCircle, Navigation, Phone, ShieldCheck, Sparkles } from "../_libs/lucide-react.mjs";
import { Select as Select$1, SelectContent as SelectContent$1, SelectIcon, SelectItem as SelectItem$1, SelectItemIndicator, SelectItemText, SelectLabel as SelectLabel$1, SelectPortal, SelectScrollDownButton as SelectScrollDownButton$1, SelectScrollUpButton as SelectScrollUpButton$1, SelectSeparator as SelectSeparator$1, SelectTrigger as SelectTrigger$1, SelectValue as SelectValue$1, SelectViewport } from "../_libs/@radix-ui/react-select+[...].mjs";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "./card-DagizPkD.mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { motion } from "../_libs/motion.mjs";
import { Input } from "./input-Dc3-mRZ0.mjs";
import { contactFaqs } from "./contact-CsvVWSPF.mjs";
import { Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dq3jyuiK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var MAP_LOCATION = `${company.addressParts.street}, ${company.addressParts.city}, ${company.addressParts.region} ${company.addressParts.postalCode}, ${company.addressParts.countryName}`;
var MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_LOCATION)}&t=m&z=17&output=embed&iwloc=near`;
var MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_LOCATION)}`;
var MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_LOCATION)}&travelmode=driving`;
var emptyForm = {
	name: "",
	company: "",
	email: "",
	phone: "",
	priority: "",
	message: ""
};
function ContactInfoCard({ icon: Icon, title, href, children, copyValue }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const handleCopy = async () => {
		if (!copyValue) return;
		try {
			await navigator.clipboard.writeText(copyValue);
			setCopied(true);
			setTimeout(() => setCopied(false), 1800);
		} catch {}
	};
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-5",
			"aria-hidden": "true"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-sm font-medium text-foreground break-words",
			children
		})]
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md",
		children: [href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: href.startsWith("http") ? "_blank" : void 0,
			rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
			className: "flex min-w-0 flex-1 items-start gap-3",
			children: content
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-w-0 flex-1 items-start gap-3",
			children: content
		}), copyValue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: handleCopy,
			className: "mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary",
			"aria-label": `Copy ${title}`,
			title: copied ? "Copied" : "Copy",
			children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3.5",
				"aria-hidden": "true"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				className: "size-3.5",
				"aria-hidden": "true"
			})
		})]
	});
}
function ContactPage() {
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const validate = (state) => {
		const next = {};
		if (state.name.trim().length < 2) next.name = "Please enter your full name.";
		if (state.company.trim().length < 2) next.company = "Please enter your organization.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(state.email)) next.email = "Enter a valid email address.";
		if (state.phone.trim().length < 7) next.phone = "Enter a valid phone or WhatsApp number.";
		if (!state.priority) next.priority = "Select a service priority.";
		if (state.message.trim().length < 10) next.message = "Please describe your requirement.";
		return next;
	};
	const update = (key, value) => {
		setForm((prev) => {
			const next = {
				...prev,
				[key]: value
			};
			if (Object.keys(errors).length) setErrors(validate(next));
			return next;
		});
	};
	const onSubmit = (event) => {
		event.preventDefault();
		const validation = validate(form);
		setErrors(validation);
		if (Object.keys(validation).length === 0) {
			setSubmitted(true);
			setForm(emptyForm);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-border bg-gradient-to-br from-hero via-hero/95 to-hero/80 py-9 sm:py-12 lg:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-pattern absolute inset-0 opacity-25",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_70%)] opacity-10",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								className: "border-primary/30 bg-primary/20 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headset, {
									className: "mr-1.5 size-3.5",
									"aria-hidden": "true"
								}), "Contact Us"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-4xl lg:text-5xl",
								children: [
									"Talk to Our",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "24/7 SLA Desk"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-2xl text-base text-hero-muted sm:text-lg",
								children: "Share your requirement and our engineering team will respond quickly with a tailored proposal — usually within one business hour."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-hero-muted sm:text-sm",
								children: [
									{
										icon: Clock,
										label: "1-hour business response"
									},
									{
										icon: ShieldCheck,
										label: "30-min SLA response"
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
								className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "glow-ring w-full sm:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: whatsappLink,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
											className: "mr-2 size-4",
											"aria-hidden": "true"
										}), "Chat on WhatsApp"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: telLink(),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
												className: "mr-2 size-4",
												"aria-hidden": "true"
											}),
											"Call ",
											company.phone
										]
									})
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "request",
			className: "border-t border-border bg-card/30 py-9 sm:py-12 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Service Request"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl lg:text-4xl",
							children: [
								"Send Us Your",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Requirement"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Fill the form below and our engineering team will respond within one business hour."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "glass-card border-border/60 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
						className: "p-6 sm:p-8",
						children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .97
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							role: "status",
							className: "rounded-xl border border-primary/40 bg-accent p-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "mx-auto size-10 text-primary",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-lg font-semibold",
									children: "Request received"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Our team will contact you within one business hour. For urgent issues, call the 24/7 SLA desk."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-col justify-center gap-2 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										onClick: () => setSubmitted(false),
										className: "w-full sm:w-auto",
										children: "Send another request"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "w-full sm:w-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: telLink(),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
												className: "mr-1.5 size-4",
												"aria-hidden": "true"
											}), "Call SLA Desk"]
										})
									})]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							noValidate: true,
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "name",
													children: [
														"Full Name",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-destructive",
															children: "*"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "name",
													name: "name",
													autoComplete: "name",
													value: form.name,
													onChange: (e) => update("name", e.target.value),
													"aria-invalid": Boolean(errors.name),
													"aria-describedby": errors.name ? "name-error" : void 0,
													placeholder: "Enter your full name"
												}),
												errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "name-error",
													className: "text-xs text-destructive",
													children: errors.name
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "company",
													children: [
														"Company / Organization",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-destructive",
															children: "*"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "company",
													name: "company",
													autoComplete: "organization",
													value: form.company,
													onChange: (e) => update("company", e.target.value),
													"aria-invalid": Boolean(errors.company),
													"aria-describedby": errors.company ? "company-error" : void 0,
													placeholder: "Your organization name"
												}),
												errors.company && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "company-error",
													className: "text-xs text-destructive",
													children: errors.company
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "email",
													children: [
														"Official Email",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-destructive",
															children: "*"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "email",
													name: "email",
													type: "email",
													autoComplete: "email",
													inputMode: "email",
													value: form.email,
													onChange: (e) => update("email", e.target.value),
													"aria-invalid": Boolean(errors.email),
													"aria-describedby": errors.email ? "email-error" : void 0,
													placeholder: "you@company.com"
												}),
												errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "email-error",
													className: "text-xs text-destructive",
													children: errors.email
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "phone",
													children: [
														"Phone / WhatsApp",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-destructive",
															children: "*"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "phone",
													name: "phone",
													type: "tel",
													autoComplete: "tel",
													inputMode: "tel",
													value: form.phone,
													onChange: (e) => update("phone", e.target.value),
													"aria-invalid": Boolean(errors.phone),
													"aria-describedby": errors.phone ? "phone-error" : void 0,
													placeholder: "+92 3XX XXXXXXX"
												}),
												errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "phone-error",
													className: "text-xs text-destructive",
													children: errors.phone
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "priority",
											children: [
												"Service Priority",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: form.priority,
											onValueChange: (v) => update("priority", v),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "priority",
												"aria-invalid": Boolean(errors.priority),
												"aria-describedby": errors.priority ? "priority-error" : void 0,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a service category" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: servicePriorities.map((priority) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: priority,
												children: priority
											}, priority)) })]
										}),
										errors.priority && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "priority-error",
											className: "text-xs text-destructive",
											children: errors.priority
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "message",
											children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "message",
											name: "message",
											rows: 5,
											value: form.message,
											onChange: (e) => update("message", e.target.value),
											"aria-invalid": Boolean(errors.message),
											"aria-describedby": errors.message ? "message-error" : void 0,
											placeholder: "Briefly describe your requirement, current environment and any specific objectives."
										}),
										errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "message-error",
											className: "text-xs text-destructive",
											children: errors.message
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "By submitting, you agree to be contacted by our team. We never share your information."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										size: "lg",
										className: "w-full sm:w-auto",
										children: ["Submit Request", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "ml-2 size-4",
											"aria-hidden": "true"
										})]
									})]
								})
							]
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-5 lg:gap-10 lg:px-8 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactInfoCard, {
								icon: Phone,
								title: "Call / SLA Desk",
								href: telLink(),
								copyValue: company.phone,
								children: company.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactInfoCard, {
								icon: MessageCircle,
								title: "WhatsApp",
								href: whatsappLink,
								copyValue: company.whatsapp,
								children: company.whatsapp
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactInfoCard, {
								icon: Mail,
								title: "Sales Email",
								href: `mailto:${company.emails.sales}`,
								copyValue: company.emails.sales,
								children: company.emails.sales
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactInfoCard, {
								icon: Mail,
								title: "Official Email",
								href: `mailto:${company.emails.info}`,
								copyValue: company.emails.info,
								children: company.emails.info
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "border-border/60 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							className: "pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
								className: "flex items-center gap-2 text-base font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "size-4 text-primary",
									"aria-hidden": "true"
								}), "Business Hours"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: company.hours.weekdays
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: company.hours.display
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: company.hours.closed
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-muted-foreground",
										children: "Closed"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-start gap-2 rounded-lg bg-primary/5 p-3 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "mt-0.5 size-3.5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: company.hours.supportNote
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "border-border/60 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							className: "pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
								className: "flex items-center gap-2 text-base font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, {
									className: "size-4 text-primary",
									"aria-hidden": "true"
								}), "Coverage"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							className: "text-sm text-muted-foreground",
							children: "Nationwide service coverage through 8 regional technical hubs, plus overseas remote support for select engagements."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-5 lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "overflow-hidden border-border/60 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							className: "pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-start justify-between gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
										className: "flex items-center gap-2 text-base font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
											className: "size-4 text-primary",
											"aria-hidden": "true"
										}), "Head Office — Karachi"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm text-muted-foreground",
										children: company.address
									})]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-[16/10] w-full border-y border-border/60 bg-muted/30 sm:aspect-[16/9]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "AI Power Enterprises — Head Office location on Google Maps",
								src: MAP_EMBED_URL,
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade",
								allowFullScreen: true,
								className: "absolute inset-0 h-full w-full",
								style: { border: 0 }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "mt-0.5 size-3.5 shrink-0 text-primary",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Coordinates: ",
									company.geo.latitude.toFixed(4),
									",",
									" ",
									company.geo.longitude.toFixed(4)
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "sm",
									className: "w-full sm:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: MAP_DIRECTIONS_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
											className: "mr-1.5 size-3.5",
											"aria-hidden": "true"
										}), "Get Directions"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "sm",
									className: "w-full sm:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: MAP_OPEN_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
											className: "mr-1.5 size-3.5",
											"aria-hidden": "true"
										}), "Open in Google Maps"]
									})
								})]
							})]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
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
						children: ["Common ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Questions"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground sm:text-base",
						children: "Quick answers to help you reach us faster."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-3",
				children: contactFaqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.details, {
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
							children: "Need to speak with us urgently?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-hero-muted sm:text-base",
							children: "Our 24/7 SLA desk is available for mission-critical contracts. For everything else, WhatsApp is the fastest route."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "glow-ring w-full sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: telLink(),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "mr-2 size-4",
											"aria-hidden": "true"
										}),
										"Call ",
										company.phone
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "w-full border-hero-border text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappLink,
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "mr-2 size-4",
										"aria-hidden": "true"
									}), "WhatsApp Us"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-xs text-hero-muted/70",
							children: [
								"Explore our",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "text-hero-accent underline-offset-4 hover:underline",
									children: "services"
								}),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sla",
									className: "text-hero-accent underline-offset-4 hover:underline",
									children: "SLA framework"
								}),
								" ",
								"or",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "text-hero-accent underline-offset-4 hover:underline",
									children: "about us"
								}),
								"."
							]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { ContactPage as component };
