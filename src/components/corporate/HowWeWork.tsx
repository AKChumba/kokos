import { motion } from "framer-motion";
import { MessageCircle, PenTool, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Discover & Scope",
    description: "We start with a conversation to understand your business, your systems, and what you actually need.",
  },
  {
    icon: PenTool,
    title: "Design & Build",
    description: "We design and build the solution — software, infrastructure, or security programme — with regular check-ins.",
  },
  {
    icon: Rocket,
    title: "Deploy & Secure",
    description: "We deploy with a security-first approach, testing thoroughly before anything goes live.",
  },
  {
    icon: LifeBuoy,
    title: "Support & Grow",
    description: "We stay on as your technology partner, providing ongoing support as your organisation grows.",
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            A Straightforward Process
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-3xl font-display font-bold text-primary/20">0{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(100%-1rem)] w-8 h-px bg-border" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
