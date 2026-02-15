import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Building2, 
  Users, 
  Award, 
  BarChart3, 
  Badge, 
  GraduationCap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PartnershipForm from "@/components/PartnershipForm";

const partnershipFeatures = [
  {
    icon: Building2,
    title: "Official IAETDS School Login",
    items: [
      "Dedicated school admin dashboard",
      "School digital ID",
      "Institutional recognition"
    ]
  },
  {
    icon: Users,
    title: "Student Access to AI Learning App",
    items: [
      "AI-based quizzes",
      "Logical & math puzzles",
      "Skill assessments",
      "Future skills modules",
      "Offline-friendly access"
    ]
  },
  {
    icon: Award,
    title: "Digital Certification System",
    items: [
      "GTAP branded certificates",
      "QR-code verification",
      "AI skill completion awards",
      "Participation certificates"
    ]
  },
  {
    icon: BarChart3,
    title: "Quarterly School Skill Report",
    items: [
      "Student participation insights",
      "Skill development analytics",
      "Performance summary"
    ]
  },
  {
    icon: Badge,
    title: "AI-Enabled School Recognition Badge",
    items: [
      "AI-Enabled Partner School 2026",
      "Website listing",
      "Social media recognition",
      "Principal recognition certificate"
    ]
  },
  {
    icon: GraduationCap,
    title: "2 AI Awareness Workshops Per Year",
    items: [
      "AI introduction sessions",
      "Career guidance in AI",
      "Future technology awareness"
    ]
  }
];

const PartnershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="partnership" className="pt-32 pb-32 px-6 section-gradient" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-sans tracking-[0.35em] uppercase text-gold mb-6">
            Annual Partnership
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            <span className="gold-gradient-text">₹10,000 Annual Partnership</span> Includes
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital education transformation for forward-thinking institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partnershipFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card-gradient gold-border p-8 group hover:gold-glow transition-all duration-500"
            >
              <feature.icon className="w-8 h-8 text-gold mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="card-gradient gold-border p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-sans tracking-[0.35em] uppercase text-gold mb-4">
              About GTAP
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Global T.I.M.E.S Accreditation Panel
            </h3>
            <p className="font-sans text-sm text-muted-foreground mb-6">
              T.I.M.E.S stands for <span className="text-gold font-semibold">Training, Innovation, Mentorship, Education & Standards</span>
            </p>
          </div>
          <p className="font-sans text-base text-platinum leading-relaxed text-center max-w-3xl mx-auto">
            GTAP (Global T.I.M.E.S Accreditation Panel) is built on a media and education excellence ecosystem inspired by a legacy of innovation in learning and communication. It represents a global movement that bridges innovation, credibility, and world-class academic standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16"
        >
          <Button
            onClick={() => setIsFormOpen(true)}
            className="group relative inline-flex items-center px-12 py-5 font-sans text-sm font-semibold uppercase tracking-[0.3em] bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_60px_hsl(42_76%_55%_/_0.3)]"
          >
            Apply for Partnership
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Button>
        </motion.div>
      </div>

      <PartnershipForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default PartnershipSection;
