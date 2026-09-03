import { Link } from "@tanstack/react-router";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="hero-surface relative overflow-hidden rounded-3xl border border-hero-border px-8 py-14 text-center sm:px-14">
        <div className="grid-pattern absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-hero-foreground sm:text-4xl">
            Ready to secure your infrastructure with a 30-minute SLA?
          </h2>
          <p className="mt-4 text-hero-muted">
            Talk to our engineering team about servers, CCTV, networking, licensing and managed
            support — nationwide across Pakistan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-7 text-base glow-ring">
              <Link to="/contact" hash="request">
                Request a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-hero-border bg-hero-foreground/5 px-7 text-base text-hero-foreground hover:bg-hero-foreground/15 hover:text-hero-foreground"
            >
              <Link to="/services">
                <PhoneCall className="size-4" aria-hidden="true" />
                View SLA Models
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
