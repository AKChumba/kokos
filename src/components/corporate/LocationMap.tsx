import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = {
  namibia: {
    label: "Namibia",
    address: "ERF Academy, Windhoek, Namibia",
    query: "ERF Academy, Windhoek, Namibia",
  },
  kenya: {
    label: "Kenya",
    address: "Nairobi, Kenya",
    query: "Nairobi, Kenya",
  },
} as const;

type LocationKey = keyof typeof locations;

const LocationMap = () => {
  const [active, setActive] = useState<LocationKey>("namibia");
  const location = locations[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        {(Object.keys(locations) as LocationKey[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === key
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground border border-border hover:border-primary/30"
            }`}
          >
            <MapPin className="w-4 h-4" />
            {locations[key].label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden border border-border shadow-card">
        <iframe
          key={active}
          title={`FutureTech Africa — ${location.label}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(location.query)}&output=embed`}
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-center text-sm text-muted-foreground mt-3">{location.address}</p>
    </motion.div>
  );
};

export default LocationMap;
