import { motion } from "framer-motion";
import { Code2, Smartphone, Boxes, Workflow, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Web & Mobile Apps",
    description: "Custom-built for how your business works.",
  },
  {
    icon: Boxes,
    title: "Enterprise Systems",
    description: "Tools and dashboards that replace manual processes.",
  },
  {
    icon: Workflow,
    title: "API Development",
    description: "Clean, documented APIs that connect your systems.",
  },
  {
    icon: Smartphone,
    title: "Cloud-Native Solutions",
    description: "Scalable, resilient, security-first from day one.",
  },
];

const SoftwareShowcase = () => {
  return (
    <section id="software" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Software Development
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              We Build the Software Your Business Runs On
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-card rounded-xl p-5 shadow-card"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Discuss your software project
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* UI mockup visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card shadow-card-hover overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-accent/70" />
                <span className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="ml-4 flex-1 h-6 rounded-md bg-background/80" />
              </div>
              {/* Mock dashboard body */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1 h-20 rounded-xl bg-primary/10" />
                  <div className="col-span-1 h-20 rounded-xl bg-accent/15" />
                  <div className="col-span-1 h-20 rounded-xl bg-primary/10" />
                </div>
                <div className="h-32 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-end p-4 gap-2">
                  {[40, 70, 55, 90, 65, 80, 50].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-primary/40" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded-full bg-muted" />
                  <div className="h-3 w-1/2 rounded-full bg-muted" />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-card shadow-card p-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Built for scale</p>
                <p className="text-xs text-muted-foreground">Security-first architecture</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;
