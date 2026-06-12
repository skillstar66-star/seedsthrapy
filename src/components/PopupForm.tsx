"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Only show once per session or just wait 15 seconds after load
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Close the popup upon submission
    setIsOpen(false);
    alert("Thank you! We will get in touch with you soon.");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-card overflow-hidden"
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 max-h-[90vh] overflow-y-auto scrollbar-hide">
              <h3 className="text-2xl font-bold text-primary mb-2">Book an Assessment</h3>
              <p className="text-text-light text-sm mb-6">
                Take the first step towards a better journey. Fill out the details below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="popup-parent-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Parent/Guardian Name
                    </label>
                    <input
                      type="text"
                      id="popup-parent-name"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label htmlFor="popup-child-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Child's Name
                    </label>
                    <input
                      type="text"
                      id="popup-child-name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Enter child's name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="popup-phone"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="popup-email"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="popup-concern" className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Concern
                  </label>
                  <select
                    id="popup-concern"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                  >
                    <option value="">Select a concern...</option>
                    <option value="speech">Speech & Language</option>
                    <option value="occupational">Occupational Therapy</option>
                    <option value="behavioral">Behavioral Issues</option>
                    <option value="special-ed">Special Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="popup-message"
                    rows={2}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us briefly about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 mt-2 bg-primary text-white rounded-lg font-semibold gradient-btn-primary hover:gradient-btn-hover transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
