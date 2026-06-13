"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Target,
  Heart,
  Handshake,
  TrendingUp,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Assessment",
    desc: "We begin with a comprehensive evaluation to understand your child's strengths, challenges, and unique needs.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "Goal Planning",
    desc: "Together with you, we establish meaningful, achievable goals that align with your family's priorities and values.",
    icon: Target,
  },
  {
    step: 3,
    title: "Personalized Therapy",
    desc: "Your child receives one-on-one therapy sessions designed around their specific needs, learning style, and interests.",
    icon: Heart,
  },
  {
    step: 4,
    title: "Parent Collaboration",
    desc: "We partner with you through regular updates, home strategies, and guidance to extend progress beyond our sessions.",
    icon: Handshake,
  },
  {
    step: 5,
    title: "Progress Tracking",
    desc: "We continuously monitor and document your child's growth, adjusting approaches to ensure steady, meaningful progress.",
    icon: TrendingUp,
  },
  {
    step: 6,
    title: "Growth & Independence",
    desc: "Your child builds the confidence and skills they need to thrive at home, in school, and in the community.",
    icon: Sparkles,
  },
];

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="journey" className="hidden lg:block py-16 sm:py-20 md:py-28 bg-gradient-to-b from-bg to-soft-green/20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            The Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Your Child&apos;s Development Journey
          </h2>
          <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 sm:px-0">
            A clear, supportive path from first contact to lasting growth and independence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-16">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === item.step;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Desktop: offset every other row */}
                  <div className={`lg:flex lg:flex-col ${index >= 3 ? "lg:mt-8" : ""}`}>
                    {/* Step circle container */}
                    <div className="relative flex justify-center mb-4 sm:mb-5">
                      {/* Connecting line for desktop (between items in a row) */}
                      {(index === 0 || index === 3) && (
                        <div className="hidden lg:block absolute top-1/2 left-1/2 w-[calc(100%+2rem)] h-0.5 bg-gradient-to-r from-secondary/20 to-accent/20 -translate-y-1/2 z-0" />
                      )}
                      {(index === 1 || index === 4) && (
                        <div className="hidden lg:block absolute top-1/2 left-1/2 w-[calc(100%+2rem)] h-0.5 bg-gradient-to-r from-accent/20 to-secondary/20 -translate-y-1/2 z-0" />
                      )}

                      <button
                        onClick={() => setActiveStep(isActive ? null : item.step)}
                        onMouseEnter={() => setActiveStep(item.step)}
                        onMouseLeave={() => setActiveStep(null)}
                        className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 min-h-14 ${isActive
                            ? "bg-primary shadow-medium scale-110"
                            : "bg-surface border-2 border-soft-green hover:border-primary/30 shadow-soft active:scale-95"
                          }`}
                        aria-label={`View details for step ${item.step}: ${item.title}`}
                      >
                        <Icon
                          className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-secondary"
                            }`}
                        />

                      </button>
                    </div>

                    {/* Content */}
                    <div
                      className={`text-center transition-all duration-300 px-2 sm:px-0 ${isActive ? "scale-105" : ""
                        }`}
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-text-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
