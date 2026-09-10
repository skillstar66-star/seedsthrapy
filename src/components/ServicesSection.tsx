"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Speech,
  Brain,
  Baby,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";

const primaryServices = [
  {
    title: "Occupational Therapy",
    desc: "Helping children build the skills they need for everyday life, school readiness, independence, fine motor development, sensory regulation, and functional play.",
    icon: Stethoscope,
    bestFor: [
      "Sensory processing",
      "Fine motor skills",
      "Handwriting readiness",
      "Attention and focus",
      "Daily routines",
      "Self-care skills",
      "Motor coordination",
    ],
    link: "/therapies/occupational-therapy",
  },
  {
    title: "Speech Therapy",
    desc: "Supporting children to speak more clearly, communicate better, understand language, and build stronger social communication skills.",
    icon: Speech,
    bestFor: [
      "Speech delay",
      "Language delay",
      "Pronunciation issues",
      "Limited vocabulary",
      "Social communication",
      "Stammering or fluency challenges",
      "Difficulty expressing needs",
    ],
    link: "/therapies/speech-therapy",
  },
  {
    title: "Behavioral Therapy",
    desc: "Helping children improve emotional regulation, positive behavior, social interaction, attention, and response to routines and transitions.",
    icon: Brain,
    bestFor: [
      "Challenging behavior",
      "Emotional outbursts",
      "Poor attention span",
      "Social skill difficulties",
      "Routine resistance",
      "Impulse control",
      "Adaptation to school and home settings",
    ],
    link: "/therapies/behavioral-therapy",
  },
];

const earlyInterventionService = {
  title: "Early Intervention",
  desc: "Providing children with the right developmental support during their early years to help them learn, grow, communicate, and build essential life skills.",
  icon: Baby,
  bestFor: [
    "Early milestone delays",
    "Speech and language support",
    "Motor and movement skills",
    "Sensory processing",
    "Social play and interaction",
    "Preschool readiness",
    "Parent guidance & home strategies",
  ],
  link: "/therapies/early-intervention",
};

interface ServicesSectionProps {
  showEarlyIntervention?: boolean;
}

export default function ServicesSection({
  showEarlyIntervention = false,
}: ServicesSectionProps) {
  const services = showEarlyIntervention
    ? [...primaryServices, earlyInterventionService]
    : primaryServices;

  return (
    <section id="therapies" className="py-12 sm:py-16 md:py-28 bg-surface">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-soft-green text-primary border border-primary/15 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 shadow-sm">
            Our Therapies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4 tracking-tight">
            Personalized Therapies for Every Child
          </h2>
          <p className="text-base sm:text-lg text-text-main max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed font-normal">
            Every child develops differently. Some need support with speech. Some need help with sensory processing, attention, behavior, or daily activities. At Seeds Therapy Center, we create therapy plans based on your child’s unique needs, strengths, and developmental goals.
          </p>
        </motion.div>

        {/* Mobile/Tablet: Horizontal Carousel */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex-shrink-0 w-[85vw] sm:w-96 bg-white rounded-2xl p-5 sm:p-6 border-2 border-soft-green/60 shadow-card snap-start hover:shadow-card-hover transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-text-main leading-relaxed mb-4">{service.desc}</p>
                  
                  <div className="mb-6 flex-grow">
                    <p className="text-sm sm:text-base font-bold text-primary mb-2.5">Best for children who need support with:</p>
                    <ul className="space-y-2">
                      {service.bestFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-text-main font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={service.link} className="inline-flex items-center gap-2 text-primary font-bold text-sm sm:text-base group hover:text-secondary transition-colors mt-auto">
                    Learn More & Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Standard Grid */}
        <div
          className={`hidden md:grid gap-6 ${
            showEarlyIntervention
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
              : "grid-cols-1 lg:grid-cols-3"
          }`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -6 }}
                className="group flex flex-col bg-white rounded-2xl p-7 border-2 border-soft-green/60 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-text-main leading-relaxed mb-5">{service.desc}</p>
                
                <div className="mb-6 flex-grow">
                  <p className="text-sm sm:text-base font-bold text-primary mb-3">Best for children who need support with:</p>
                  <ul className="space-y-2">
                    {service.bestFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-text-main font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={service.link} className="inline-flex items-center gap-2 text-primary font-bold text-sm sm:text-base group-hover:text-secondary transition-colors mt-auto">
                  Learn More & Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
