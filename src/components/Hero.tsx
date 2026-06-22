"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const features = [
  "Child-centered approach",
  "Experienced therapists",
  "Family involvement",
  "Safe and nurturing environment",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 sm:pt-28 md:pt-32 lg:pt-20 lg:pb-8 lg:h-screen lg:max-h-[900px] lg:min-h-[600px] lg:flex lg:items-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-soft-green/60 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-soft-green/50 blur-3xl animate-blob" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-soft-green/40 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="container-main w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1 mr-auto max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-soft-green/70 text-primary text-xs font-medium mb-2.5 sm:mb-3">
                EARLY INTERVENTION. EARLY SUPPORT.
              </span> 
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance text-primary mb-1.5 sm:mb-2"
            >
              Understanding. Supporting. Helping Them Thrive.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xs sm:text-sm md:text-base text-text-light leading-relaxed max-w-lg mb-3 sm:mb-4"
            >
              At Seeds Therapy Center, we provide personalized, evidence-based therapy support for children who need help with communication, development, behavior, learning, and daily life skills. Our goal is simple: To help every child grow with confidence in a safe, caring, and nurturing environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col mb-3.5 sm:mb-4"
            >
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mb-1.5">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center sm:justify-start gap-1.5 px-4 py-2 sm:py-2 rounded-full bg-primary text-white font-semibold sm:font-medium text-xs sm:text-sm hover:bg-primary/90 transition-all duration-200 shadow-medium hover:shadow-card-hover active:scale-95"
                >
                  Book a Consultation
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2 rounded-full border-2 border-primary/15 text-primary font-semibold sm:font-medium text-xs sm:text-sm hover:bg-primary/5 transition-all duration-200 active:scale-95"
                >
                  Watch Our Story
                </a>
              </div>
              <p className="text-[11px] sm:text-xs text-text-light/80 italic hidden sm:block">Not sure what your child needs? Start with a consultation and get clear guidance from our team.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5"
            >
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary/30"
                  >
                    <Check className="w-2 h-2 text-white stroke-[3]" />
                  </motion.div>
                  <span className="text-xs text-text-light font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-2 relative block w-full"
          >
            <div className="relative w-full max-w-md lg:max-w-xl mx-auto aspect-[4/3] lg:aspect-[4/3] rounded-[20px] overflow-hidden bg-gradient-to-br from-soft-green/60 to-bg shadow-medium">
              {/* Therapy Image */}
              <Image
                src="/images/hero.png"
                alt="Child occupational therapy session at Seeds Therapy Center"
                fill
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
