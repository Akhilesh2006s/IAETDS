import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium institutional architecture"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block text-sm font-sans tracking-[0.35em] uppercase text-gold-light mb-6">
            By Invitation Only
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <img 
            src="/IAEDTS.jpg" 
            alt="IAETDS Logo" 
            className="h-32 md:h-40 lg:h-48 w-auto mx-auto object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif text-lg md:text-xl text-platinum italic mb-10 tracking-wide"
        >
          Indian Association for Educational Technology & Digital Systems
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="divider-gold w-32 mx-auto mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-sans text-xl md:text-2xl text-platinum-light font-light max-w-3xl mx-auto mb-14 leading-relaxed text-balance"
        >
          India's Premier Consortium for Digital Education Leadership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/partnership"
            className="group relative inline-flex items-center px-10 py-4 font-sans text-sm font-semibold uppercase tracking-[0.25em] bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsl(42_76%_55%_/_0.3)]"
          >
            Apply for Partnership
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <a
            href="#about"
            className="inline-flex items-center px-10 py-4 font-sans text-sm uppercase tracking-[0.25em] text-platinum gold-border transition-all duration-300 hover:bg-primary/10"
          >
            Discover More
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          Apply · Qualify · Lead
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
