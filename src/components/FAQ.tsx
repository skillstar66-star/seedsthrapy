"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I know if my child needs therapy?",
    a: "If your child has delays in speech, behavior, social interaction, sensory response, attention, or motor development, an assessment can help identify the right support.",
  },
  {
    q: "At what age should therapy start?",
    a: "Therapy can begin as early as concerns are noticed. Early support often leads to better long-term progress.",
  },
  {
    q: "Can therapy help children with autism or ADHD?",
    a: "Yes. Children with autism or ADHD can benefit from structured, personalized therapy based on their specific needs.",
  },
  {
    q: "Will parents be involved in the process?",
    a: "Yes. Parent involvement is an important part of the therapy journey because it helps children apply skills at home and in daily life.",
  },
  {
    q: "Do you offer an initial assessment?",
    a: "Yes. An initial consultation or assessment helps us understand your child’s needs and recommend the right therapy plan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-surface">
      <div className="container-main max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Questions Parents Ask
          </h2>
          <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 sm:px-0">
            We understand you have questions. Here are answers to the ones we hear most often.
          </p>
        </motion.div>

        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl border border-soft-green/40 overflow-hidden shadow-soft"
              >
                <button
                  suppressHydrationWarning
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left bg-gradient-to-r from-bg to-surface hover:from-soft-green/20 hover:to-soft-green/10 transition-colors duration-200 min-h-14 sm:min-h-auto active:bg-soft-green/30"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-base font-semibold text-primary pr-2">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-text-light leading-relaxed text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
