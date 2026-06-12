"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Sun, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-12 md:py-20 bg-surface">
      <div className="container-main h-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden sm:block"
          >
            <div className="relative w-full lg:max-w-2xl aspect-[15/16] rounded-3xl overflow-hidden bg-gradient-to-br from-soft-green/40 to-bg shadow-medium">
              <img
                src="/images/poster.png"
                alt="Seeds Therapy Center - Grow Today, Thrive Tomorrow"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-surface rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-medium border border-soft-green/40 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">Nurturing Potential</div>
                  <div className="text-xs text-text-light">Every child can thrive</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
              <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-5 leading-tight">
              We Understand Children. We Support Families.
            </h2>

            <div className="space-y-3 sm:space-y-4 text-text-light leading-relaxed">
              <p className="text-base">
                At Seeds Therapy Center, we believe that every child deserves the chance to reach their full potential. We work closely with parents to understand developmental concerns, identify areas of support, and create a care plan that is practical, personalized, and focused on real progress.
              </p>
              <p className="text-base">
                Our mission is to create a space where children feel safe, understood, and encouraged, while parents feel supported, informed, and confident in the journey ahead.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: "Strengths-Based Approach", icon: Sun },
                { label: "Whole Child Focus", icon: Heart },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-3 rounded-xl bg-soft-green/30">
                    <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-text-main">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <a
              href="#conditions"
              className="group mt-6 sm:mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
            >
              Learn how we can help your child
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
