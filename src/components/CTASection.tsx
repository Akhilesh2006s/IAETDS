import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="apply" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-sans tracking-[0.35em] uppercase text-gold mb-8"
        >
          Limited Membership — By Evaluation Only
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
        >
          Redefining Educational Leadership Through{" "}
          <span className="gold-gradient-text">Intelligent Systems</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-lg text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          For institutions that intend to lead the future.
          Partnership is reserved for those who qualify.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/partnership"
            className="group relative inline-flex items-center px-12 py-5 font-sans text-sm font-semibold uppercase tracking-[0.3em] bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_60px_hsl(42_76%_55%_/_0.3)]"
          >
            Apply for Institutional Partnership
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 font-serif text-sm italic text-muted-foreground"
        >
          "Digital Excellence. Institutional Authority. National Recognition."
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
