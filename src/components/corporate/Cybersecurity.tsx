import { motion } from "framer-motion";
import { ShieldCheck, Search, Eye, ArrowRight } from "lucide-react";

const securityServices = [
  {
    icon: ShieldCheck,
    title: "Managed SOC",
    description: "24/7 monitoring and response.",
    features: ["24/7 Threat Monitoring", "SIEM Management", "Incident Response", "Threat Intelligence"],
    cta: "Learn About Managed SOC",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Find vulnerabilities before attackers do.",
    features: ["Web Application Testing", "Network Penetration", "Social Engineering", "Detailed Remediation Reports"],
    cta: "Request a Pen Test",
  },
  {
    icon: Eye,
    title: "Vulnerability Management",
    description: "Continuous scanning and remediation.",
    features: ["Continuous Scanning", "Risk Prioritisation", "Patch Management", "Compliance Reporting"],
    cta: "Get a Vulnerability Assessment",
  },
];

const Cybersecurity = () => {
  return (
    <section id="cybersecurity" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-4 h-4" />
            Cybersecurity
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Protecting African Organisations
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {securityServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary/30 ring-1 ring-primary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cybersecurity;
