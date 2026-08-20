import { motion } from "framer-motion";
import { GraduationCap, Cloud, BookOpen, Users, Download, ExternalLink } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "AI & coding curriculum", detail: "Scratch, Python, and WebXR programming for schools" },
  { icon: Cloud, label: "Cloud-based learning", detail: "A hosted platform schools access from any device" },
  { icon: BookOpen, label: "Integrated textbooks", detail: "Curriculum-mapped digital learning materials" },
  { icon: Users, label: "Teacher training & support", detail: "Onboarding and ongoing support for educators" },
];

const WhatWeveBuilt = () => {
  return (
    <section id="what-weve-built" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-card-hover"
          >
            <img
              src="/images/kokosnam_logo.png"
              alt="Kokos Integrated Learning Platform"
              loading="lazy"
              className="w-full h-full object-contain bg-card p-10"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            >
              What We've Built
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              The Kokos Integrated Learning Platform
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg mb-8"
            >
              A real example of what we build: an integrated AI and coding learning platform for
              schools, developed with our education partners, giving learners a cloud-based
              curriculum, teacher training, and ongoing technical support.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-card rounded-xl p-4 shadow-card"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="/files/kokos_namibia-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                View Programme Brochure
              </a>
              <a
                href="https://kokos.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition-colors"
              >
                Visit kokos.ai
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeveBuilt;
