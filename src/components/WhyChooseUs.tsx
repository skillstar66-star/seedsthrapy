"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Award,
  Home,
  FlaskConical,
  HeartHandshake,
  BarChart3,
  Users,
} from "lucide-react";

const trustPoints = [
  {
    title: "Individualized therapy plans for each child",
    icon: FileText,
  },
  {
    title: "Experienced and certified therapists",
    icon: Award,
  },
  {
    title: "Play-based, child-friendly sessions",
    icon: Home,
  },
  {
    title: "Parent training and involvement",
    icon: HeartHandshake,
  },
  {
    title: "Progress tracking with regular updates",
    icon: BarChart3,
  },
  {
    title: "Evidence-based intervention methods",
    icon: FlaskConical,
  },
  {
    title: "Warm, welcoming environment for children and families",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-28 bg-surface">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">
            Why Parents Trust Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Compassion. Expertise. Results That Matter.
          </h2>
          <p className="text-base sm:text-lg text-text-light mb-4">
            Parents do not just want therapy. They want clarity, progress, and a team they can trust. That is why our approach is built around support, consistency, and measurable growth.
          </p>
          <p className="text-base sm:text-lg text-text-main font-medium">
            We do not believe in one-size-fits-all therapy. Every session is designed to meet your child where they are and help them move forward with confidence, one step at a time.
          </p>
        </motion.div>

        {/* Mobile/Tablet: Horizontal Carousel */}
        <div className="md:hidden">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-2">
            {trustPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex-shrink-0 w-[80vw] sm:w-80 flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-bg to-surface border border-soft-green/40 shadow-card snap-start hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-primary leading-snug">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Standard Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-bg to-surface border border-soft-green/40 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-primary leading-snug">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}