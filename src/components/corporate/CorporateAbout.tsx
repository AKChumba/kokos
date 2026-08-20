import { motion } from "framer-motion";
import { Award, ShieldCheck, Globe, Layers } from "lucide-react";

const stats = [
  { icon: ShieldCheck, value: "24/7", label: "Support & Monitoring" },
  { icon: Layers, value: "Full-Spectrum", label: "Technology Services" },
  { icon: Award, value: "Security-First", label: "Methodology" },
  { icon: Globe, value: "Namibia & Kenya", label: "Presence" },
];

const CorporateAbout = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            >
              About FutureTech Africa
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Building Africa's Digital Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg mb-8"
            >
              We build, connect, secure, and support the technology modern African
              businesses run on — with a security-first methodology and deep local market
              understanding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <div className="bg-card rounded-xl px-6 py-4 shadow-card">
                <div className="text-sm text-muted-foreground">Focus</div>
                <div className="font-semibold text-foreground">Full-Spectrum IT</div>
              </div>
              <div className="bg-card rounded-xl px-6 py-4 shadow-card">
                <div className="text-sm text-muted-foreground">Founded</div>
                <div className="font-semibold text-foreground">2025</div>
              </div>
              <div className="bg-card rounded-xl px-6 py-4 shadow-card">
                <div className="text-sm text-muted-foreground">Methodology</div>
                <div className="font-semibold text-foreground">Security-First</div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-2xl p-4 sm:p-6 shadow-card text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateAbout;
