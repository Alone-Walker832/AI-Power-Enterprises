import { Phone, Mail, MapPin, ClipboardList, Truck, LogIn } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function TopHeader() {
  return (
    <div className="sticky top-0 z-50 h-8 bg-[#2C3196] text-white border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 h-full sm:px-6 lg:px-8">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="tel:+923434688216"
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
          >
            <Phone className="size-3.5" />
            <span>+92 2134000516</span>
          </a>
          <a
            href="mailto:info@aipowerent.net"
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
          >
            <Mail className="size-3.5" />
            <span>info@aipowerent.net</span>
          </a>
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="size-3.5" />
            <span>Karachi, Pakistan</span>
          </span>
        </div>

        {/* Right: Client Portal, Track Order, Sign In (Commented - Abhi add nahi karna) */}
        {/*
        <div className="flex items-center gap-4">
          <Link
            to="/client-portal"
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
          >
            <ClipboardList className="size-3.5" />
            <span>Client Portal</span>
          </Link>
          <Link
            to="/track-order"
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
          >
            <Truck className="size-3.5" />
            <span>Track Order</span>
          </Link>
          <Link
            to="/signin"
            className="flex items-center gap-1.5 rounded-full bg-sky-600 px-3 py-0.5 text-white hover:bg-sky-500 transition-colors"
          >
            <LogIn className="size-3.5" />
            <span>Sign In</span>
          </Link>
        </div>
        */}
      </div>
    </div>
  );
}