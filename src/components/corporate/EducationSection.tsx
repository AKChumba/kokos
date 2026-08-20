import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, ShieldCheck, Code, Network } from "lucide-react";

const tracks = [
  { icon: Code, label: "Coding for Schools", detail: "Grades 1–8" },
  { icon: ShieldCheck, label: "Cybersecurity Essentials" },
  { icon: Network, label: "Networking & IT Infrastructure" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
            >
              <GraduationCap className="w-4 h-4" />
              Coding & Technology Education
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Building Africa's Next Generation of Tech Talent
            </motion.h2>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {tracks.map((track, index) => {
                const Icon = track.icon;
                return (
                  <motion.div
                    key={track.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-card rounded-xl p-4 shadow-card"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{track.label}</p>
                    {track.detail && <p className="text-xs text-muted-foreground mt-0.5">{track.detail}</p>}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
              >
                Explore our courses
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]"
          >
            <img
              src="/images/bg2.jpg"
              alt="Coding and technology education"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-card">
              <p className="text-sm font-semibold text-foreground">Code the Future</p>
              <p className="text-xs text-muted-foreground mt-0.5">Hands-on coding and technology skills for learners across Africa.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
