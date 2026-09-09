import { Phone, Mail, MapPin } from "lucide-react";

export function TopHeader() {
  return (
    <div className="sticky top-0 z-50 h-8 bg-[#2C3196] text-white border-b border-slate-800">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-2 sm:gap-4 flex-nowrap">
          <a
            href="tel:+922133382931"
            className="flex items-center gap-1 sm:gap-1.5 hover:text-sky-300 transition-colors text-[10px] sm:text-sm"
          >
            <Phone className="size-3 sm:size-3.5 shrink-0" />
            <span className="whitespace-nowrap">+92 21 33382931</span>
          </a>

          <span className="hidden sm:block h-3 w-px bg-white/20" />

          <a
            href="mailto:info@aipowerent.net"
            className="flex items-center gap-1 sm:gap-1.5 hover:text-sky-300 transition-colors text-[10px] sm:text-sm"
          >
            <Mail className="size-3 sm:size-3.5 shrink-0" />
            <span className="whitespace-nowrap">info@aipowerent.net</span>
          </a>

          <span className="hidden sm:block h-3 w-px bg-white/20" />

          <span className="flex items-center gap-1 sm:gap-1.5 text-slate-300 text-[10px] sm:text-sm">
            <MapPin className="size-3 sm:size-3.5 shrink-0" />
            <span className="whitespace-nowrap">Karachi, Pakistan</span>
          </span>
        </div>
      </div>
    </div>
  );
}