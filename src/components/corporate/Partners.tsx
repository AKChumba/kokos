import { motion } from "framer-motion";
import LogoLoop from "@/components/LogoLoop";

const partnerLogos = [
  { src: "/images/kokos_logo.png", alt: "Kokos.ai", href: "https://kokos.ai" },
  { src: "/images/exposoft_logo.png", alt: "Exposoft India", href: "https://www.exposoft.in" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Our Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Trusted Organisations
          </motion.h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <LogoLoop logos={partnerLogos} speed={60} logoHeight={48} gap={80} fadeOut pauseOnHover />
      </motion.div>
    </section>
  );
};

export default Partners;
