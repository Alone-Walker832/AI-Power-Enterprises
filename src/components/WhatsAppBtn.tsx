import { MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { whatsappLink } from "@/data/companyData";

export function WhatsAppBtn() {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with AI Power Enterprises on WhatsApp"
            className="group fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-2xl hover:shadow-[#25D366]/50 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
          >
            {/* Animated Ping Glow Ring */}
            <span className="absolute -inset-1 -z-10 rounded-full bg-[#25D366]/40 opacity-75 blur-sm transition-all group-hover:bg-[#25D366]/60 group-hover:blur-md" />
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-35 duration-1000" />

            {/* Online Status Indicator Badge */}
            <span className="absolute top-0 right-0 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-3.5 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
            </span>

            {/* Icon */}
            <MessageCircle className="size-7 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true" />
          </a>
        </TooltipTrigger>
        <TooltipContent
          side="left"
          sideOffset={12}
          className="flex items-center gap-2 border border-emerald-500/20 bg-background/95 px-3.5 py-2 font-sans text-xs font-semibold text-foreground shadow-xl backdrop-blur-md dark:bg-slate-900/95"
        >
          <span className="size-2 rounded-full bg-[#25D366]" />
          <span>Chat with our team on WhatsApp</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}