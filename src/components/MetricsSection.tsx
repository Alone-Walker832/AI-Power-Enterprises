import { motion } from "motion/react";
import { metrics } from "@/data/companyData";

export function MetricsSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto -mt-10 grid max-w-7xl gap-5 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="card-lift accent-bar relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <p className="font-display text-4xl font-bold text-gradient">{metric.value}</p>
            <p className="mt-3 text-sm font-semibold">{metric.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{metric.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
