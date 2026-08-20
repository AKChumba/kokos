import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Server, Cloud, Mail } from "lucide-react";

const CorporateHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-20 md:pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-10 right-5 md:right-20 w-48 h-48 md:w-[500px] md:h-[500px] rounded-full bg-accent blur-[90px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.16, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute bottom-10 left-3 md:left-20 w-40 h-40 md:w-96 md:h-96 rounded-full bg-primary-foreground blur-[70px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight"
          >
            Build. Connect.
            <span className="block text-accent">Secure. Support.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl"
          >
            Software, hosting, cloud, cybersecurity, and IT support for African businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-7 py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-7 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20"
            >
              <Mail className="w-5 h-5" />
              Contact Us Today
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 text-primary-foreground/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              Custom Software
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-accent" />
              Hosting & Domains
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-accent" />
              Cloud & Microsoft
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              Namibia & Kenya
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 max-w-2xl"
        >
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Full-Spectrum Technology Partner</h3>
            <p className="text-sm text-primary-foreground/70">
              One team for software, hosting, cloud, cybersecurity, and IT support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateHero;
