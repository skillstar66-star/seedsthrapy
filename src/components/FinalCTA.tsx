"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="book" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
            Begin Your Journey
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            Ready to Take the First Step?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-text-light mb-8 sm:mb-10 max-w-xl mx-auto">
            Let’s work together to create a brighter, more confident future for your child. If you have concerns about speech, behavior, development, or learning, book an assessment and get the right guidance early.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-primary text-white font-semibold text-base sm:text-base hover:bg-primary/90 transition-all duration-200 shadow-medium hover:shadow-card-hover active:scale-95"
            >
              Schedule Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919597469409"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full border-2 border-primary/20 text-primary font-semibold text-base sm:text-base hover:bg-primary/5 transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <p className="text-xs sm:text-sm text-text-light mt-6">
            Need quick help? Reach out and speak with our team today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
