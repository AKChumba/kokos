import { motion } from "framer-motion";
import { Mail, Globe, BadgeCheck, ShieldCheck, ArrowRight } from "lucide-react";

const hostingServices = [
  {
    icon: Mail,
    title: "Business Email Hosting",
    description: "Custom domain email, done right.",
    features: ["Custom Domain Email", "Spam & Malware Protection", "Mailbox Management", "Calendar & Contacts"],
    cta: "Get Business Email",
  },
  {
    icon: Globe,
    title: "Web Hosting",
    description: "Fast, reliable, fully managed hosting.",
    features: ["Managed Hosting", "SSL & Security", "Performance Monitoring", "Backups"],
    cta: "Get Web Hosting",
  },
  {
    icon: BadgeCheck,
    title: "Domains",
    description: "Register and manage your domain names.",
    features: ["Domain Registration", "DNS Management", "Domain Renewal", "Transfer Support"],
    cta: "Register a Domain",
  },
];

const HostingEmail = () => {
  return (
    <section id="hosting" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Hosting & Business Email
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Get Your Business Online
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hostingServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <ShieldCheck className="w-4 h-4 text-accent" />
          Every hosting plan is backed by our cybersecurity team.
        </motion.div>
      </div>
    </section>
  );
};

export default HostingEmail;
