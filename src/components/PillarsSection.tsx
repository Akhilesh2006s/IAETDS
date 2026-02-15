import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Brain, Award, Settings, Compass } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Strategic Digital Transformation",
    description: "Digital governance meets academic precision through structured technology implementation.",
  },
  {
    icon: Brain,
    title: "AI-Integrated Ecosystems",
    description: "AI-powered learning enhances student performance with intelligent, adaptive systems.",
  },
  {
    icon: Award,
    title: "Institutional Prestige",
    description: "National-level authority through structured standards and recognized excellence.",
  },
  {
    icon: Settings,
    title: "Technology Standards",
    description: "Structured digital systems replace outdated workflows with precision-engineered solutions.",
  },
  {
    icon: Compass,
    title: "Innovation Roadmap",
    description: "Long-term strategic technology direction for sustained institutional leadership.",
  },
];

const PillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-sans tracking-[0.35em] uppercase text-gold mb-6">
            The Consortium
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            A National Digital Education{" "}
            <span className="gold-gradient-text">Excellence Consortium</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Membership is structured for institutions that value precision, prestige, and progress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className={`card-gradient gold-border p-8 group hover:gold-glow transition-all duration-500 ${
                index === 4 ? "md:col-start-1 lg:col-start-2" : ""
              }`}
            >
              <pillar.icon className="w-8 h-8 text-gold mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
