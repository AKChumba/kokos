import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Layers,
  Mail,
  BadgeCheck,
  Cloud,
  ShieldCheck,
  Network,
  Lightbulb,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const coreServices = [
  {
    icon: Code,
    title: "Software Development",
    description: "Web and mobile apps, enterprise systems, and APIs.",
    cta: "Discuss Your Project",
    href: "#software",
    highlight: true,
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, modern websites built around your business.",
    cta: "Discuss Your Project",
    href: "#software",
  },
  {
    icon: Layers,
    title: "Digital Solutions",
    description: "Tools and integrations that digitise your workflows.",
    cta: "Discuss Your Project",
    href: "#software",
  },
  {
    icon: Mail,
    title: "Web & Email Hosting",
    description: "Business email and web hosting, done right.",
    cta: "Get Business Email",
    href: "#hosting",
    highlight: true,
  },
  {
    icon: BadgeCheck,
    title: "Domains",
    description: "Domain registration and management.",
    cta: "Register a Domain",
    href: "#hosting",
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft Solutions",
    description: "Cloud migration, Microsoft 365, and Azure support.",
    cta: "Talk Cloud Strategy",
    href: "#cloud-it",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Managed SOC, penetration testing, and vulnerability management.",
    cta: "Learn About Cybersecurity",
    href: "#cybersecurity",
    highlight: true,
  },
  {
    icon: Network,
    title: "IT Infrastructure & Support",
    description: "Network design and day-to-day IT support.",
    cta: "Get IT Support",
    href: "#cloud-it",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Strategic guidance for your technology roadmap.",
    cta: "Book a Consultation",
    href: "#cloud-it",
  },
  {
    icon: GraduationCap,
    title: "Coding & Technology Education",
    description: "Courses and school programmes in coding and IT.",
    cta: "Explore Courses",
    href: "#education",
  },
];

const CorporateServices = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Everything Your Business Needs From One Technology Partner
          </motion.h2>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border ${
                  service.highlight
                    ? "border-primary/30 ring-1 ring-primary/10"
                    : "border-border hover:border-primary/20"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300 ${
                    service.highlight
                      ? "bg-primary/15 group-hover:bg-primary/25"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {service.highlight && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">Core Service</span>
                  )}

                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">{service.description}</p>

                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CorporateServices;
