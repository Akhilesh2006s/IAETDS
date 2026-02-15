import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import digitalClassroom from "@/assets/digital-classroom.jpg";
import leadership from "@/assets/leadership.jpg";

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 section-gradient" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-sans tracking-[0.35em] uppercase text-gold mb-6">
            Our Ecosystem
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Where Educational Vision Meets{" "}
            <span className="gold-gradient-text">Technological Mastery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative gold-border overflow-hidden">
              <img
                src={digitalClassroom}
                alt="AI-powered digital classroom"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <p className="absolute bottom-4 left-4 font-sans text-xs tracking-[0.2em] uppercase text-gold">
                AI-Integrated Learning
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative gold-border overflow-hidden">
              <img
                src={leadership}
                alt="Institutional leadership strategy"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <p className="absolute bottom-4 left-4 font-sans text-xs tracking-[0.2em] uppercase text-gold">
                Strategic Leadership
              </p>
            </div>
          </motion.div>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {[
            "Digital governance meets academic precision",
            "AI-powered learning enhances student performance",
            "Structured digital systems replace outdated workflows",
            "Institutional branding gains national-level authority",
            "Leadership teams gain strategic technology direction",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-sans text-sm text-platinum">
              <span className="text-gold mt-0.5 text-lg leading-none">◆</span>
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default EcosystemSection;
