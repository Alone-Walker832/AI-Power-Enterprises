import { __toESM } from "../_runtime.mjs";
import { chatbotFaqs, cn } from "./companyData-B8RcDcc2.mjs";
import { require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { Button } from "./button-WvLAgY56.mjs";
import { Bot, MessageSquare, RefreshCw, Send, Sparkles, X } from "../_libs/lucide-react.mjs";
import { Corner, Root, ScrollAreaScrollbar, ScrollAreaThumb, Viewport } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AIChatbot-CAK4ReUr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var getFormattedTime = () => {
	return (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	});
};
var initialMessages = [{
	id: "init-0",
	role: "bot",
	text: "Hello! Welcome to AI Power Enterprises. How can I assist with your IT infrastructure today?",
	time: getFormattedTime()
}];
function AIChatbot() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)(initialMessages);
	const [inputValue, setInputValue] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const [hasInteracted, setHasInteracted] = (0, import_react.useState)(false);
	const messagesEndRef = (0, import_react.useRef)(null);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	(0, import_react.useEffect)(() => {
		if (open) scrollToBottom();
	}, [
		messages,
		isTyping,
		open
	]);
	const processQuery = (userQuery) => {
		if (!userQuery.trim() || isTyping) return;
		const userMsg = {
			id: Date.now().toString(),
			role: "user",
			text: userQuery,
			time: getFormattedTime()
		};
		setMessages((prev) => [...prev, userMsg]);
		setInputValue("");
		setHasInteracted(true);
		setIsTyping(true);
		setTimeout(() => {
			const lowerQuery = userQuery.toLowerCase();
			const matchedFaq = chatbotFaqs.find((faq) => faq.question.toLowerCase().includes(lowerQuery) || lowerQuery.includes(faq.question.toLowerCase()));
			let botResponse = "";
			if (matchedFaq) botResponse = matchedFaq.answer;
			else if (lowerQuery.includes("contact") || lowerQuery.includes("phone") || lowerQuery.includes("email")) botResponse = "You can reach our enterprise support team 24/7 at support@aipower.com or message us directly on WhatsApp below!";
			else if (lowerQuery.includes("quote") || lowerQuery.includes("price") || lowerQuery.includes("cost")) botResponse = "For enterprise quotes and custom SLA pricing, please visit our Request Quote section or chat with us on WhatsApp.";
			else botResponse = "Thank you! For custom IT architecture or hardware SLA queries, our support team is online 24/7. Connect via WhatsApp for an immediate response.";
			const botMsg = {
				id: (Date.now() + 1).toString(),
				role: "bot",
				text: botResponse,
				time: getFormattedTime()
			};
			setMessages((prev) => [...prev, botMsg]);
			setIsTyping(false);
		}, 600);
	};
	const handleReset = () => {
		setMessages([{
			id: Date.now().toString(),
			role: "bot",
			text: "Conversation restarted. Select a topic below or type your inquiry.",
			time: getFormattedTime()
		}]);
		setHasInteracted(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => setOpen(true),
		"aria-label": "Open AI Assistant",
		className: "group fixed bottom-24 right-6 z-40 flex h-12 items-center gap-2.5 rounded-full border border-primary/30 bg-gradient-to-r from-primary to-primary/90 px-4 font-sans text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 active:scale-95",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4.5 transition-transform duration-300 group-hover:rotate-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute -top-1 -right-1 flex size-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-emerald-400" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tracking-wide",
				children: "Ask AI Assistant"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-primary-foreground/80 opacity-80 group-hover:animate-spin" })
		]
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-label": "AI Assistant Window",
		className: "fixed bottom-24 right-6 z-50 w-[min(22rem,calc(100vw-2rem))] h-[28rem] animate-in fade-in slide-in-from-bottom-4 duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-full w-full rounded-2xl p-[2px] bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:300%_300%] animate-border-spin",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full w-full flex-col overflow-hidden rounded-2xl bg-background/95 backdrop-blur-xl dark:bg-card/95 shadow-2xl shadow-primary/20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-primary/20 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-4 py-3 backdrop-blur-sm shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex size-10 items-center justify-center rounded-xl from-primary/20 to-primary/5 p-1 ring-2 ring-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/assets/logo-DPTJKoTM.png",
									alt: "AI Power Enterprises",
									className: "h-full w-full rounded-lg object-contain"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-background" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm font-bold text-foreground",
									children: "AI Power Support"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-primary animate-pulse" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[9px] font-medium uppercase tracking-wider text-muted-foreground",
								children: "24/7 Automated SLA"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: handleReset,
								className: "size-8 rounded-lg text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary",
								title: "Reset Conversation",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => setOpen(false),
								className: "size-8 rounded-lg text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive",
								title: "Close Chat",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
						className: "flex-1 px-4 py-3 [&>div]:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("flex flex-col gap-1 max-w-[88%]", message.role === "user" ? "ml-auto items-end" : "items-start"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("rounded-2xl px-4 py-2.5 text-sm font-normal leading-relaxed shadow-sm", message.role === "user" ? "rounded-tr-xs bg-primary text-primary-foreground" : "rounded-tl-xs border border-primary/10 bg-muted/50 text-foreground backdrop-blur-sm"),
										children: message.text
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-1 text-[10px] text-muted-foreground/50",
										children: message.time
									})]
								}, message.id)),
								isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 max-w-[80%] rounded-2xl rounded-tl-xs border border-primary/10 bg-muted/50 px-4 py-2.5 text-sm backdrop-blur-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 animate-bounce rounded-full bg-primary/80 [animation-delay:-0.32s]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 animate-bounce rounded-full bg-primary/80 [animation-delay:-0.16s]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 animate-bounce rounded-full bg-primary/80" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-primary/10 bg-gradient-to-b from-background to-primary/5 p-3 backdrop-blur-sm shrink-0",
						children: !hasInteracted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 px-1 text-[10px] font-semibold text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Suggested Quick Questions:" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: chatbotFaqs.slice(0, 4).map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => processQuery(faq.question),
									className: "group flex items-center justify-between rounded-xl border border-primary/10 bg-background/80 px-3 py-2 text-left text-xs font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary active:scale-[0.98]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "line-clamp-1",
										children: faq.question
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3 shrink-0 opacity-30 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" })]
								}, faq.question))
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								processQuery(inputValue);
							},
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: inputValue,
								onChange: (e) => setInputValue(e.target.value),
								placeholder: "Ask a question...",
								className: "flex-1 rounded-full border border-primary/20 bg-background px-4 py-2 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "icon",
								disabled: !inputValue.trim() || isTyping,
								className: "size-9 shrink-0 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95 disabled:opacity-50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
							})]
						})
					})
				]
			})
		})
	})] });
}
//#endregion
export { AIChatbot };
