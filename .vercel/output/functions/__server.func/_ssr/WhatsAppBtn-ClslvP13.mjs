import { __toESM } from "../_runtime.mjs";
import { cn, whatsappLink } from "./companyData-B8RcDcc2.mjs";
import { require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { MessageCircle } from "../_libs/lucide-react.mjs";
import { Content2, Portal, Provider, Root3, Trigger } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhatsAppBtn-ClslvP13.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function WhatsAppBtn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 200,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: whatsappLink,
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "Chat with AI Power Enterprises on WhatsApp",
				className: "group fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-2xl hover:shadow-[#25D366]/50 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -inset-1 -z-10 rounded-full bg-[#25D366]/40 opacity-75 blur-sm transition-all group-hover:bg-[#25D366]/60 group-hover:blur-md" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-35 duration-1000" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute top-0 right-0 flex size-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-3.5 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "size-7 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110",
						"aria-hidden": "true"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, {
			side: "left",
			sideOffset: 12,
			className: "flex items-center gap-2 border border-emerald-500/20 bg-background/95 px-3.5 py-2 font-sans text-xs font-semibold text-foreground shadow-xl backdrop-blur-md dark:bg-slate-900/95",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-[#25D366]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chat with our team on WhatsApp" })]
		})] })
	});
}
//#endregion
export { WhatsAppBtn };
