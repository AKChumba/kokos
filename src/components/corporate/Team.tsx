import { motion } from "framer-motion";

const team = [
  {
    name: "Alvan",
    role: "Cybersecurity Lead",
    bio: "Leads cybersecurity operations and coordinates FutureTech Africa's on-the-ground presence in Namibia.",
    photo: "/images/alvan_changed.jpeg",
  },
  {
    name: "Brian",
    role: "Head of Software Engineering",
    bio: "Leads technical architecture and software development as a full-stack engineer.",
    photo: "/images/brian.png",
  },
  {
    name: "Theresa",
    role: "Marketing & Coordination Lead",
    bio: "Leads outreach, communications, and client coordination.",
    photo: "/images/theresa2.png",
  },
  {
    name: "Shalom",
    role: "Technology Associate",
    bio: "Supports software and technology projects across the team.",
    photo: "/images/shalom2.png",
  },
  {
    name: "Nehemiah",
    role: "Finance Coordinator",
    bio: "Manages budgets and financial coordination.",
    photo: "/images/nehemiah.png",
  },
  {
    name: "Moses",
    role: "Data Analyst",
    bio: "Turns data into insights that guide our work.",
    photo: "/images/moses.png",
  },
  {
    name: "Asahel",
    role: "Technology Integration Specialist",
    bio: "Supports technology integration and deployment for client projects.",
    photo: "/images/asahel.png",
  },
  {
    name: "Prof. Rhoda",
    role: "Advisor, Technology Education",
    bio: "Advises on curriculum design and educational innovation for our technology education programmes.",
    photo: "/images/prof-rhoda3.png",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            The People Behind FutureTech Africa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A small, focused team with deep local expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.08 }}
              className="text-center"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-card bg-secondary">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-accent font-medium mb-2">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
