"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const conditions = [
  "Autism Spectrum Disorder (ASD)",
  "ADHD",
  "Global Developmental Delay (GDD)",
  "Intellectual Disability (ID)",
  "Specific Learning Disorder (SLD)",
  "Speech Delay",
  "Sensory Processing Difficulties",
  "Developmental Delay",
  "Behavioral Challenges",
  "Social Communication Difficulties",
];

export default function ConditionsGrid() {
  return (
    <section id="conditions" className="py-12 sm:py-16 md:py-28 bg-gradient-to-b from-soft-green/20 to-bg">
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <span className="inline-block px-3.5 sm:px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 border border-accent/20">
              Our Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-3 sm:mb-4 tracking-tight">
              Conditions We Support
            </h2>
            <p className="text-base sm:text-lg text-text-main mb-6 sm:mb-8 leading-relaxed font-normal">
              If your child is struggling with speech, behavior, movement, learning, or social interaction, early support can make a meaningful difference. Our team works with children who need care, structure, and personalized intervention.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-bold text-sm sm:text-base hover:bg-primary/90 transition-all shadow-medium hover:shadow-card-hover active:scale-95"
            >
              View All Conditions
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {conditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-soft-green shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm shadow-primary/30">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-text-main">{condition}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
