"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "1. What are the signs that a child may need therapy?",
    a: "If your child has ongoing difficulties with speech, language, learning, behavior, social interaction, motor skills, sensory processing, emotional regulation, or daily activities, professional assessment may help identify their individual needs. At Seeds Therapy Center in Coimbatore, children can receive personalized support based on their developmental needs and therapy goals. Early identification and appropriate support can help children build functional skills and participate more confidently at home, school, and in everyday life.",
  },
  {
    q: "2. What is Occupational Therapy for children?",
    a: "Pediatric Occupational Therapy helps children develop skills needed for everyday activities, school participation, independence, fine motor development, sensory processing, coordination, attention, and functional participation. At Seeds Therapy Center, Occupational Therapy can be tailored to a child's individual developmental needs, helping them work toward practical goals for home, school, and everyday activities.",
  },
  {
    q: "3. What are the signs that a child may need emotional or behavioral support?",
    a: "Children may sometimes experience frequent emotional outbursts, anxiety, withdrawal, irritability, difficulty concentrating, changes in behavior, difficulty managing emotions, or challenges with social interaction. These signs can have different causes and do not necessarily indicate a mental health condition. If you are concerned about your child's emotional or behavioral development, a professional assessment can help understand their needs and identify appropriate support. At Seeds Therapy Center, Coimbatore, child-focused therapy can support areas such as emotional regulation, behavior, social skills, attention, communication, and everyday participation based on individual needs.",
  },
  {
    q: "4. What are the signs of an unhappy or emotionally struggling child?",
    a: "A child who is frequently irritable, withdrawn, unusually quiet, losing interest in activities, having frequent emotional outbursts, or struggling with everyday interactions may need additional attention and support. Parents who notice persistent or significant changes in their child's behavior can consider seeking professional guidance. At Seeds Therapy Center, our child-focused approach aims to understand each child's individual needs and provide appropriate developmental, behavioral, or therapeutic support.",
  },
  {
    q: "5. What does Speech Therapy help children with?",
    a: "Pediatric Speech Therapy can support children with speech delay, language delay, pronunciation and articulation difficulties, limited vocabulary, difficulty understanding or expressing language, social communication challenges, fluency difficulties, and communication needs. At Seeds Therapy Center in Coimbatore, speech therapy goals are personalized according to each child's communication abilities and developmental needs, with a focus on helping children communicate more effectively at home, school, and in everyday situations.",
  },
  {
    q: "6. Are parents involved in their child's therapy?",
    a: "Yes. Parent involvement is an important part of a child's therapy journey. Depending on the child's therapy plan, parents may receive progress updates, guidance, and practical strategies that can be incorporated into everyday routines at home. At Seeds Therapy Center, collaboration with parents can help reinforce therapy goals and support consistent skill development beyond individual therapy sessions.",
  },
  {
    q: "7. Which is the best therapy center for children in Coimbatore?",
    a: "The best therapy center for a child depends on the child's individual needs, the type of therapy required, therapist qualifications, personalized treatment approach, parent involvement, accessibility, and the quality of ongoing support. Seeds Therapy Center in Coimbatore provides child-focused therapy services including Occupational Therapy, Speech Therapy, Behavioral Therapy, and early developmental support, with therapy goals tailored to each child's individual needs. Parents can evaluate a therapy center based on the child's specific requirements, professional expertise, therapy approach, reviews, and the suitability of the services offered.",
  },
  {
    q: "8. Where can I find a child therapy center in Coimbatore?",
    a: "Parents searching for a child therapy center in Coimbatore can consider Seeds Therapy Center for personalized support in areas such as Speech Therapy, Occupational Therapy, Behavioral Therapy, communication development, social skills, emotional regulation, and developmental needs. The appropriate therapy depends on the child's individual concerns and should be determined through suitable professional assessment and guidance.",
  },
  {
    q: "9. What types of therapy are available for children at Seeds Therapy Center?",
    a: "Seeds Therapy Center provides child-focused therapy services designed to support different areas of child development, including Speech Therapy, Occupational Therapy, Behavioral Therapy, and early intervention support. Each therapy program can be planned around the child's developmental level, strengths, challenges, and individual goals.",
  },
  {
    q: "10. How do I choose the right therapy for my child?",
    a: "The right therapy depends on the child's specific developmental and functional needs. For example: Speech Therapy may support speech, language, pronunciation, and communication; Occupational Therapy may support fine motor skills, sensory processing, coordination, attention, and daily activities; Behavioral Therapy may support emotional regulation, positive behavior, social skills, routines, and participation; Early Intervention may provide developmental support when concerns are identified during early childhood. A professional assessment can help determine which type of support may be appropriate for your child.",
  },
  {
    q: "11. Does my child need Speech, Occupational, or Behavioral Therapy?",
    a: "Not every child needs therapy, and the appropriate service depends on the child's individual concerns. If you notice persistent difficulties with communication, speech, behavior, emotional regulation, sensory processing, motor skills, attention, social interaction, or everyday activities, professional assessment can help identify whether therapy may be beneficial.",
  },
  {
    q: "12. Why choose Seeds Therapy Center for child therapy in Coimbatore?",
    a: "Seeds Therapy Center focuses on child-centered and individualized therapy, with support based on each child's developmental needs and functional goals. Our services are designed to help children develop practical skills related to communication, behavior, emotional regulation, social interaction, motor development, independence, and everyday participation. Parents should consider therapist qualifications, experience, reviews, available services, and the suitability of the therapy approach when choosing a child therapy center.",
  },
  {
    q: "13. Does early therapy help children with developmental difficulties?",
    a: "Early support can be valuable when developmental concerns are identified. Depending on the child's needs, appropriate therapy may support communication, motor skills, behavior, social interaction, emotional regulation, independence, and everyday participation. A professional assessment can help identify the child's strengths and areas that may benefit from additional support.",
  },
  {
    q: "14. How can I find the best child therapy center near me in Coimbatore?",
    a: "When searching for a child therapy center near you in Coimbatore, consider the specific therapy your child needs, therapist qualifications, experience, location, parent reviews, personalized treatment approach, and communication with families. Seeds Therapy Center provides child-focused therapy services in Coimbatore across areas including Speech Therapy, Occupational Therapy, Behavioral Therapy, and early intervention support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-surface">
      <div className="container-main max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3.5 sm:px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-accent/20">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4 tracking-tight">
            Questions Parents Ask
          </h2>
          <p className="text-base sm:text-lg text-text-main max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed font-normal">
            We understand you have questions. Here are answers to the ones we hear most often.
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl border-2 border-soft-green/60 overflow-hidden shadow-sm bg-white"
              >
                <button
                  suppressHydrationWarning
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left bg-white hover:bg-soft-green/20 transition-colors duration-200 min-h-14 sm:min-h-auto active:bg-soft-green/30"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-primary pr-2">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-text-main leading-relaxed text-sm sm:text-base md:text-lg border-t border-soft-green/40">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
