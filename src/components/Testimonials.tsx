"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    childAge: "4 years",
    therapyType: "Occupational Therapy & Speech Therapy",
    quote:
      "When we first came to Seeds, my son could barely make eye contact or express his needs. After six months of therapy, he started initiating conversations, making friends, and his preschool teacher can't believe the transformation. Seeds didn't just help my son — they gave our whole family hope and practical tools for every day.",
    rating: 5,
    initial: "S",
    color: "bg-secondary/20 text-secondary",
  },
  {
    name: "James & Lisa R.",
    childAge: "7 years",
    therapyType: "Behavioral Therapy & Learning Support",
    quote:
      "Our daughter struggled with ADHD and was falling behind in school. The team at Seeds created a plan that worked with her energy instead of against it. They taught her strategies that actually stuck. She's now thriving in second grade, and more importantly, she believes in herself again. We are forever grateful.",
    rating: 5,
    initial: "J",
    color: "bg-accent/20 text-accent",
  },
  {
    name: "Priya K.",
    childAge: "3 years",
    therapyType: "Early Intervention Program",
    quote:
      "As a first-time mom, I was terrified when our pediatrician suggested early intervention. Seeds made the entire process feel gentle and empowering. My daughter met every milestone they worked on together, and I learned how to support her development at home. The warmth and expertise of this team is unmatched.",
    rating: 5,
    initial: "P",
    color: "bg-soft-green text-primary",
  },
  {
    name: "Michael T.",
    childAge: "10 years",
    therapyType: "Sensory Integration Therapy",
    quote:
      "Our son has ASD and sensory processing challenges that made everyday situations overwhelming. The sensory integration work at Seeds has been life-changing. He can now handle transitions, tolerate different textures, and participate in family activities that used to be impossible. The team truly understands our son.",
    rating: 5,
    initial: "M",
    color: "bg-primary/10 text-primary",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="hidden lg:block py-16 sm:py-20 md:py-28 bg-surface">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Parent Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Stories of Growth &amp; Hope
          </h2>
          <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto">
            The voices of families we&apos;ve had the privilege to support.
          </p>
        </motion.div>

        {/* Mobile: Horizontal Swipe Carousel */}
        <div className="md:hidden">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-96 rounded-3xl bg-gradient-to-br from-bg to-soft-green/20 border border-soft-green/40 shadow-card p-6 sm:p-8 snap-center"
              >
                <div className="text-5xl leading-none text-accent/30 font-serif mb-4">&ldquo;</div>
                <p className="text-base sm:text-lg text-text-main leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${t.color} flex items-center justify-center text-lg font-bold`}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-base">{t.name}</div>
                    <div className="text-xs sm:text-sm text-text-light">
                      Parent of {t.childAge} &middot; {t.therapyType}
                    </div>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-soft-green hover:bg-secondary/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Carousel with Navigation */}
        <div className="hidden md:block max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bg to-soft-green/20 border border-soft-green/40 shadow-card p-8 md:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Quote marks */}
                <div className="text-6xl leading-none text-accent/30 font-serif mb-4">&ldquo;</div>

                <p className="text-lg md:text-xl text-text-main leading-relaxed mb-8 italic">
                  {t.quote}
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center text-lg font-bold`}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{t.name}</div>
                    <div className="text-sm text-text-light">
                      Parent of {t.childAge} &middot; {t.therapyType}
                    </div>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-soft-green/30">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-soft-green hover:bg-secondary/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full bg-soft-green/50 flex items-center justify-center hover:bg-soft-green transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full bg-soft-green/50 flex items-center justify-center hover:bg-soft-green transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
