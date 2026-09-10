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
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-bg to-soft-green/40">
      <div className="container-main">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-soft-green text-primary border border-primary/15 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-sm">
            Our Approach
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
            Why Families Choose Us
          </h2>
        </motion.div>
        {/* Mobile/Tablet: Horizontal Carousel */}
        <div className="md:hidden mb-8 sm:mb-10 mt-6">
          <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-64 sm:w-72 text-center p-5 sm:p-6 rounded-2xl bg-white border border-soft-green hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-card-hover snap-start flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-primary">
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
                className="group text-center p-8 rounded-2xl bg-white border border-soft-green hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-lg font-bold text-primary">
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
