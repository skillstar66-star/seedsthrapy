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
      className="relative h-screen max-h-[900px] min-h-[600px] flex items-center pt-20 pb-8 sm:pt-24 md:pt-28 overflow-hidden"
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
          <div className="order-1 lg:order-1 mr-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-soft-green/70 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                EARLY INTERVENTION. EARLY SUPPORT.
              </span> 
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance text-primary mb-2 sm:mb-3"
            >
              Understanding. Supporting. Helping Them Thrive.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-sm sm:text-base md:text-lg text-text-light leading-relaxed max-w-xl mb-4 sm:mb-5"
            >
              At Seeds Therapy Center, we provide personalized, evidence-based therapy support for children who need help with communication, development, behavior, learning, and daily life skills. Our goal is simple: To help every child grow with confidence in a safe, caring, and nurturing environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col mb-4 sm:mb-5"
            >
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 mb-2">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center sm:justify-start gap-2 px-5 sm:px-5 py-3 sm:py-2.5 rounded-full bg-primary text-white font-semibold sm:font-medium text-sm hover:bg-primary/90 transition-all duration-200 shadow-medium hover:shadow-card-hover active:scale-95"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full border-2 border-primary/15 text-primary font-semibold sm:font-medium text-sm hover:bg-primary/5 transition-all duration-200 active:scale-95"
                >
                  Watch Our Story
                </a>
              </div>
              <p className="text-xs sm:text-sm text-text-light/80 italic hidden sm:block">Not sure what your child needs? Start with a consultation and get clear guidance from our team.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2"
            >
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary/30"
                  >
                    <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                  </motion.div>
                  <span className="text-xs sm:text-sm text-text-light font-medium">{feature}</span>
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
            <div className="relative w-full max-w-md lg:max-w-2xl mx-auto aspect-[4/3] lg:aspect-[4/3] rounded-[20px] overflow-hidden bg-gradient-to-br from-soft-green/60 to-bg shadow-medium">
              {/* Therapy Image */}
              <Image
                src="/images/hero-new.png"
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
