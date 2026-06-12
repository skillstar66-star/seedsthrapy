"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-14 md:py-28 bg-surface pb-16 sm:pb-20 md:pb-28">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            We&apos;re Here To Help
          </h2>
          <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 sm:px-0">
            Reach out to us for questions, assessments, or to schedule a visit. We look forward to hearing from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            {[
              {
                icon: MapPin,
                label: "Visit Us",
                value: "[Insert Full Local Address]",
                href: null,
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "[Insert Phone Number]",
                href: "tel:[Insert Phone Number]",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "[Insert Email Address]",
                href: "mailto:[Insert Email Address]",
              },
              {
                icon: Clock,
                label: "Business Hours",
                value: "Mon - Fri: 10:00 AM - 8:00 PM\nSat: 10:00 AM - 8:00 PM",
                href: null,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-bg border border-soft-green/40">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-semibold text-primary mb-0.5 sm:mb-1">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-text-light hover:text-primary transition-colors whitespace-pre-line block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-text-light whitespace-pre-line">{item.value}</div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919597469409"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-soft-green/60 to-soft-green/30 border border-soft-green hover:shadow-card-hover transition-all duration-200 group min-h-16 sm:min-h-auto"
            >
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-semibold text-primary">Chat with us on WhatsApp</div>
                <div className="text-xs text-text-light">Quick responses during business hours</div>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-bg rounded-2xl p-5 sm:p-8 border border-soft-green/40 shadow-card"
          >
            <h3 className="text-base sm:text-lg font-semibold text-primary mb-5 sm:mb-6">Send Us a Message</h3>
            <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-text-main mb-1.5 sm:mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3.5 rounded-xl border border-soft-green bg-surface text-text-main placeholder:text-text-light/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-base"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-text-main mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3.5 rounded-xl border border-soft-green bg-surface text-text-main placeholder:text-text-light/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-text-main mb-1.5 sm:mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3.5 rounded-xl border border-soft-green bg-surface text-text-main placeholder:text-text-light/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-base"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-text-main mb-1.5 sm:mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl border border-soft-green bg-surface text-text-main placeholder:text-text-light/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none text-base"
                  placeholder="Tell us about your child and how we can support your family..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-200 shadow-soft active:scale-95 text-base min-h-14"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
