"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Phone } from "lucide-react";

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
      className="relative min-h-screen flex items-center pt-20 pb-12 sm:pt-24 md:pt-28 md:pb-20 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-soft-green/60 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-soft-green/50 blur-3xl animate-blob" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-soft-green/40 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="container-main w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1 mr-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-soft-green/70 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Early support. Early intervention.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance text-primary mb-3 sm:mb-4"
            >
              Understanding. Supporting. Helping Them Thrive.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base sm:text-lg md:text-lg text-text-light leading-relaxed max-w-xl mb-5 sm:mb-6"
            >
              At Seeds Therapy Center, we provide personalized, evidence-based therapy support for children who need help with communication, development, behavior, learning, and daily life skills. Our goal is simple: to help every child grow with confidence in a safe, caring, and nurturing environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col mb-5 sm:mb-6"
            >
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-5 py-3.5 sm:py-2.5 rounded-full bg-primary text-white font-semibold sm:font-medium text-base sm:text-sm hover:bg-primary/90 transition-all duration-200 shadow-medium hover:shadow-card-hover active:scale-95"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-5 py-3.5 sm:py-2.5 rounded-full border-2 border-primary/15 text-primary font-semibold sm:font-medium text-base sm:text-sm hover:bg-primary/5 transition-all duration-200 active:scale-95"
                >
                  Watch Our Story
                </a>
              </div>
              <p className="text-sm text-text-light/80 italic">Not sure what your child needs? Start with a consultation and get clear guidance from our team.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-2.5 sm:gap-y-3"
            >
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm text-text-light">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-2 relative hidden sm:block"
          >
            <div className="relative w-full max-w-sm lg:max-w-lg aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-soft-green/60 to-bg shadow-medium">
              {/* Therapy Image */}
              <img
                src="/images/hero.png"
                alt="Child occupational therapy session at Seeds Therapy Center"
                className="w-full h-full object-cover"
              />

              {/* Floating accent shapes */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-accent/20 animate-float" />
              <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: "-3s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
