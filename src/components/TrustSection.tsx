"use client";

import { motion } from "framer-motion";
import { Award, Heart, Clock, Users } from "lucide-react";

const stats = [
  { label: "Child-Centered Care", icon: Heart },
  { label: "Experienced Therapy Team", icon: Clock },
  { label: "Multiple Therapy Services", icon: Award },
  { label: "Parent-Focused Support", icon: Users },
];

export default function TrustSection() {
  return (
    <section className="py-12 sm:py-14 md:py-24 bg-gradient-to-b from-bg to-soft-green/30">
      <div className="container-main">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            Our Approach
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Why Families Choose Us
          </h2>
        </motion.div>
        {/* Mobile/Tablet: Horizontal Carousel */}
        <div className="md:hidden mb-8 sm:mb-10 mt-8">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-64 sm:w-72 text-center p-4 sm:p-6 rounded-2xl bg-surface border border-soft-green/40 hover:border-secondary/20 transition-all duration-300 shadow-card hover:shadow-card-hover snap-start flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-base font-semibold text-primary">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Standard Grid */}
        <div className="hidden md:grid grid-cols-4 gap-6 mt-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-surface border border-soft-green/40 hover:border-secondary/20 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-lg font-semibold text-primary">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
