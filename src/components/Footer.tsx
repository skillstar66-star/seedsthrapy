"use client";

import { Heart, Phone, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  navigate: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Therapies", href: "#therapies" },
    { label: "Conditions We Support", href: "#conditions" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    "Occupational Therapy",
    "Speech Therapy",
    "Behavioral Therapy",
    "Early Intervention",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="container-main py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <img src="/images/logo.png" alt="Seeds Therapy Center" className="h-10 md:h-12 w-10 md:w-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-wide">SEEDS</span>
                <span className="text-xs font-semibold text-white/70 tracking-wider">THERAPY CENTER</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Seeds Therapy Center provides personalized, evidence-based therapy support to help children grow in communication, independence, behavior, and development in a caring and family-friendly environment.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <Heart className="w-4 h-4 text-accent" />
              <span>Care you can trust</span>
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <Heart className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/60" />
                  <span className="leading-relaxed">[Insert Full Local Address]</span>
                </div>
              </li>
              <li>
                <a
                  href="tel:[Insert Phone Number]"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-white/60" />
                  <span>[Insert Phone Number]</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:[Insert Email Address]"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-white/60" />
                  <span>[Insert Email Address]</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-white/40">
            &copy; {new Date().getFullYear()} Seeds Therapy. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
