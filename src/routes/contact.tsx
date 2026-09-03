import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CheckCircle2, Globe2, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { company, servicePriorities, whatsappLink } from "@/data/companyData";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AI Power Enterprises | Karachi IT Services & SLA Desk" },
      {
        name: "description",
        content:
          "Contact AI Power Enterprises in Karachi for SLA support, CCTV, servers, data centre and network cabling. Email, WhatsApp or call the 24/7 SLA desk.",
      },
      { property: "og:title", content: "Contact AI Power Enterprises" },
      {
        property: "og:description",
        content: "Reach our Karachi head office and 24/7 SLA desk for enterprise IT support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  priority: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  priority: "",
  message: "",
};

function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (state: FormState) => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (state.name.trim().length < 2) next.name = "Please enter your full name.";
    if (state.company.trim().length < 2) next.company = "Please enter your organization.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(state.email)) next.email = "Enter a valid email address.";
    if (state.phone.trim().length < 7) next.phone = "Enter a valid phone or WhatsApp number.";
    if (!state.priority) next.priority = "Select a service priority.";
    if (state.message.trim().length < 10) next.message = "Please describe your requirement.";
    return next;
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (Object.keys(errors).length) setErrors(validate(next));
      return next;
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setForm(emptyForm);
    }
  };

  return (
    <div>
      <section className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h1 className="max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            Talk to our <span className="text-gradient">24/7 SLA desk</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Share your requirement and our engineering team will respond quickly with a tailored
            proposal.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <Card className="glass-card">
            <CardHeader className="flex-row items-center gap-3">
              <MapPin className="size-5 text-primary" aria-hidden="true" />
              <CardTitle className="text-base">Headquarters</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{company.address}</CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Mail className="size-5 text-primary" aria-hidden="true" />
                <CardTitle className="text-base">Official Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${company.emails.info}`}
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  {company.emails.info}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Mail className="size-5 text-primary" aria-hidden="true" />
                <CardTitle className="text-base">Sales Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${company.emails.sales}`}
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  {company.emails.sales}
                </a>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <Globe2 className="size-5 text-primary" aria-hidden="true" />
              <CardTitle className="text-base">Coverage</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Nationwide service coverage through 8 regional technical hubs, plus overseas remote
              support.
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 flex-1">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 flex-1">
              <a href={`tel:${company.phone}`}>
                <Phone className="size-4" aria-hidden="true" />
                Call 24/7 SLA Desk
              </a>
            </Button>
          </div>

          <Card className="overflow-hidden">
            <div className="grid-pattern relative flex h-56 items-center justify-center bg-navy/90">
              <div className="text-center">
                <MapPin className="mx-auto size-8 text-electric-soft" aria-hidden="true" />
                <p className="mt-2 font-display text-lg font-semibold text-electric-soft">
                  Shahrah-e-Faisal, Karachi
                </p>
                <p className="text-xs text-electric-soft/80">Anum Blessings, Office #516</p>
              </div>
            </div>
            <CardContent className="pt-4">
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Anum+Blessings+Shahrah-e-Faisal+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div id="request">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display text-2xl">Service Request</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="status"
                  className="rounded-xl border border-primary/40 bg-accent p-6 text-center"
                >
                  <CheckCircle2 className="mx-auto size-8 text-primary" aria-hidden="true" />
                  <p className="mt-3 font-display text-lg font-semibold">Request received</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our team will contact you shortly. For urgent issues, call the 24/7 SLA desk.
                  </p>
                  <Button className="mt-4" variant="outline" onClick={() => setSubmitted(false)}>
                    Send another request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organization</Label>
                      <Input
                        id="company"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? "company-error" : undefined}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-xs text-destructive">
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Official Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-xs text-destructive">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Service Priority</Label>
                    <Select value={form.priority} onValueChange={(v) => update("priority", v)}>
                      <SelectTrigger id="priority" aria-invalid={Boolean(errors.priority)}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {servicePriorities.map((priority) => (
                          <SelectItem key={priority} value={priority}>
                            {priority}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.priority && (
                      <p className="text-xs text-destructive">{errors.priority}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="h-12 w-full">
                    Submit Request
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
