import { motion } from "framer-motion";
import { Cloud, Network, Lightbulb, Server, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud & Microsoft Solutions",
    description: "Cloud migration, Microsoft 365, and Azure support.",
    cta: "Talk Cloud Strategy",
  },
  {
    icon: Network,
    title: "Networking Solutions",
    description: "Reliable, high-performance connectivity.",
    cta: "Get Network Support",
  },
  {
    icon: Server,
    title: "IT Infrastructure & Support",
    description: "Day-to-day IT support that keeps things running.",
    cta: "Get IT Support",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Strategic guidance for digital transformation.",
    cta: "Book a Consultation",
  },
];

const CloudInfrastructure = () => {
  return (
    <section id="cloud-it" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Cloud, Infrastructure & Consulting
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Infrastructure That Just Works
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors"
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

export default CloudInfrastructure;
