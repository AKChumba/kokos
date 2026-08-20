import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, ShieldCheck, Code, Network, Award, Users, Clock, CheckCircle2, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const COURSES_URL = "https://courses.kitocha.com";

const courseTracks = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Essentials",
    description: "Master the fundamentals of cybersecurity, threat detection, and SOC operations used by enterprises across Africa.",
    level: "Beginner → Intermediate",
    modules: 8,
    highlight: true,
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Build modern web and enterprise applications with React, TypeScript, and secure backend architecture.",
    level: "Beginner → Advanced",
    modules: 12,
  },
  {
    icon: Network,
    title: "Networking & IT Infrastructure",
    description: "Learn enterprise networking, server administration, and cloud infrastructure from the ground up.",
    level: "Intermediate",
    modules: 10,
  },
  {
    icon: GraduationCap,
    title: "Penetration Testing",
    description: "Hands-on ethical hacking, vulnerability assessment, and red-team techniques with real-world labs.",
    level: "Advanced",
    modules: 9,
    highlight: true,
  },
];

const features = [
  { icon: Award, title: "Certificates of Completion", description: "Earn recognised certificates to showcase your new skills." },
  { icon: Users, title: "Expert Instructors", description: "Learn from certified cybersecurity and software engineering professionals." },
  { icon: Clock, title: "Learn at Your Pace", description: "On-demand lessons, downloadable PDFs, and hands-on exercises." },
  { icon: ShieldCheck, title: "Africa-Focused Content", description: "Curriculum tailored to the realities of African enterprises and learners." },
];

const Courses = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Courses in Cybersecurity & Software Development | FutureTech Africa";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Online courses in cybersecurity, SOC operations, penetration testing, software development, and IT infrastructure — built for African learners."
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevHref = canonical?.href;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://futuretechafrica.com/courses";

    return () => {
      document.title = prevTitle;
      if (canonical && prevHref) canonical.href = prevHref;
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-accent blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Learn. Build.
              <span className="block text-accent">Defend.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl"
            >
              Online courses in cybersecurity, software development, and IT infrastructure
              — taught by industry professionals and built for African learners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={COURSES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Browse All Courses
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="#tracks"
                className="inline-flex items-center justify-center gap-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20"
              >
                Explore Learning Tracks
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Learning Tracks
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Path
            </h2>
            <p className="text-muted-foreground text-lg">
              From cybersecurity fundamentals to advanced penetration testing — structured tracks
              that take you from beginner to job-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courseTracks.map((track, i) => {
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border ${
                    track.highlight
                      ? "border-primary/30 ring-1 ring-primary/10"
                      : "border-border hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    {track.highlight && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">{track.title}</h3>
                  <p className="text-muted-foreground mb-6">{track.description}</p>

                  <div className="flex items-center gap-6 text-sm text-foreground/70 mb-6">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {track.level}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {track.modules} modules
                    </span>
                  </div>

                  <a
                    href={COURSES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Start Learning
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Learn With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Training Built by Practitioners
            </h2>
            <p className="text-muted-foreground text-lg">
              Our courses are designed and taught by the same engineers and security professionals
              who deliver enterprise solutions across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                What's Included
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Everything you need to succeed
              </h2>
              <ul className="space-y-4">
                {[
                  "Video lessons hosted on YouTube and Vimeo",
                  "Downloadable PDF resources and lab guides",
                  "Hands-on exercises and real-world projects",
                  "Progress tracking across modules and lessons",
                  "Certificates of completion (Phase 2)",
                  "Instructor support and community access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-10 shadow-card-hover"
            >
              <ShieldCheck className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-3xl font-bold mb-4">Ready to start learning?</h3>
              <p className="text-primary-foreground/80 mb-8">
                Create a free student account on our learning platform and start your first lesson today.
                No credit card required.
              </p>
              <a
                href={COURSES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Go to Learning Platform
                <ExternalLink className="w-5 h-5" />
              </a>
              <p className="text-sm text-primary-foreground/60 mt-4">
                Opens our learning platform in a new tab
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
