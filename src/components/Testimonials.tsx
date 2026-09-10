"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reviews = [
  {
    id: 1,
    name: "Karthik & Revathi S.",
    badge: "Local Guide · 14 reviews",
    service: "Speech & Communication Therapy",
    time: "3 months ago",
    initial: "K",
    avatarBg: "bg-blue-600 text-white",
    quote:
      "When we first came to Seeds Therapy Center in Coimbatore, my son could barely make eye contact or express his needs. After six months of speech therapy and child-focused therapy, he started initiating conversations, making friends, and communicating more confidently. His preschool teacher can't believe the transformation. Seeds didn't just help my son — they gave our whole family hope and practical tools for everyday life. We are truly grateful to have found such a caring child therapy center in Coimbatore.",
    rating: 5,
  },
  {
    id: 2,
    name: "Senthil & Deepa M.",
    badge: "Verified Parent · Coimbatore",
    service: "ADHD & Behavioral Therapy",
    time: "2 months ago",
    initial: "S",
    avatarBg: "bg-emerald-600 text-white",
    quote:
      "Our daughter struggled with ADHD and was falling behind in school. The team at Seeds Therapy Center created a personalized plan that worked with her energy instead of against it. Through behavioral therapy and developmental support, they taught her practical strategies that actually stayed with her. She's now thriving in second grade, and more importantly, she believes in herself again. We are forever grateful to Seeds for providing such supportive behavioral therapy for children in Coimbatore.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya R.",
    badge: "Verified Parent · Coimbatore",
    service: "Early Intervention",
    time: "1 month ago",
    initial: "A",
    avatarBg: "bg-amber-600 text-white",
    quote:
      "As a first-time mom, I was terrified when our pediatrician suggested early intervention therapy. Seeds Therapy Center in Coimbatore made the entire process feel gentle, supportive, and empowering. My daughter worked on her developmental milestones with the therapy team, and I also learned practical ways to support her development at home. The warmth, guidance, and child-centered approach of this team made such a difference. We are very happy with our experience at Seeds.",
    rating: 5,
  },
  {
    id: 4,
    name: "Venkatesh & Meera K.",
    badge: "Local Guide · 8 reviews",
    service: "Autism & Occupational Therapy",
    time: "4 months ago",
    initial: "V",
    avatarBg: "bg-purple-600 text-white",
    quote:
      "Our son has autism (ASD) and sensory processing challenges that made everyday situations overwhelming. The occupational therapy and sensory integration activities at Seeds Therapy Center have made a meaningful difference in his daily life. He can now handle transitions better, tolerate different textures, and participate in family activities that were previously very difficult. The team takes time to understand our son's individual needs, which is exactly what we were looking for in a child therapy center in Coimbatore.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const r = reviews[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-14 sm:py-20 md:py-28 bg-surface/80">
      <div className="container-main">
        {/* Header with Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          {/* Google Summary Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-soft-green shadow-soft mb-4">
            <GoogleIcon className="w-5 h-5" />
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-text-main">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-text-main border-l border-gray-200 pl-2.5">
              Verified Google Reviews
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 tracking-tight">
            What Parents Say About Seeds Therapy
          </h2>
          <p className="text-base sm:text-lg text-text-main max-w-2xl mx-auto px-2 leading-relaxed font-normal">
            Real experiences from families whose children have grown, communicated, and flourished at Seeds Therapy Center in Coimbatore.
          </p>
        </motion.div>

        {/* Carousel Slide Card Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-white border-2 border-soft-green/60 shadow-card p-6 sm:p-8 md:p-10 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-full ${r.avatarBg} flex items-center justify-center text-lg font-bold shadow-sm`}
                      >
                        {r.initial}
                      </div>
                      <div>
                        <div className="font-bold text-text-main text-base sm:text-lg flex items-center gap-1.5">
                          {r.name}
                          <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500/20" />
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-text-light">{r.badge}</div>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
                      <GoogleIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stars + Time + Service Pill */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-text-light">· {r.time}</span>
                    <span className="inline-block px-3 py-1 rounded-full bg-soft-green text-primary text-xs sm:text-sm font-bold border border-primary/10">
                      {r.service}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-base sm:text-lg md:text-xl text-text-main leading-relaxed font-normal">
                    “{r.quote}”
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-text-main">
                  <span className="font-semibold text-primary">
                    Seeds Therapy Center · Coimbatore
                  </span>
                  <span className="inline-flex items-center gap-1 text-secondary font-bold">
                    <CheckCircle className="w-4 h-4" />
                    Verified Google Review
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation & Indicators */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    suppressHydrationWarning
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-gray-200 hover:bg-secondary/40 w-2.5"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex gap-2">
                <button
                  suppressHydrationWarning
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full bg-soft-green/50 flex items-center justify-center hover:bg-soft-green text-primary transition-colors active:scale-95"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  suppressHydrationWarning
                  onClick={goNext}
                  className="w-10 h-10 rounded-full bg-soft-green/50 flex items-center justify-center hover:bg-soft-green text-primary transition-colors active:scale-95"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


