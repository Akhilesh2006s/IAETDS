import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 section-gradient" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-sans tracking-[0.35em] uppercase text-gold mb-8"
        >
          Who We Are
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight"
        >
          Where Visionary Institutions Become{" "}
          <span className="gold-gradient-text">National Benchmarks</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="divider-gold w-24 mx-auto mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6 text-platinum font-sans text-lg leading-relaxed"
        >
          <p>
            The Indian Association for Educational Technology & Digital Systems is not a service.
            It is not a platform. It is not a software subscription.
          </p>
          <p className="text-xl font-serif italic text-gold-light">
            It is an invitation to excellence.
          </p>
          <p>
            IAETDS partners exclusively with forward-thinking institutions that aspire to lead — not follow — India's educational transformation journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
