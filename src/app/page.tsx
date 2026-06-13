import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ConditionsGrid from "@/components/ConditionsGrid";
import ServicesSection from "@/components/ServicesSection";
import JourneySection from "@/components/JourneySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PopupForm from "@/components/PopupForm";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://seedstherapy.com/#organization",
      "name": "Seeds Therapy Center",
      "url": "https://seedstherapy.com",
      "telephone": "+919597469409",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No-77, Babyama Women Wellness & Paediatric Centre, Siddhapudur",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641044",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Occupational Therapy",
      "provider": {
        "@id": "https://seedstherapy.com/#organization"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Speech Therapy",
      "provider": {
        "@id": "https://seedstherapy.com/#organization"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Behavioral Therapy",
      "provider": {
        "@id": "https://seedstherapy.com/#organization"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Early Intervention",
      "provider": {
        "@id": "https://seedstherapy.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know if my child needs therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your child has delays in speech, behavior, social interaction, sensory response, attention, or motor development, an assessment can help identify the right support."
          }
        },
        {
          "@type": "Question",
          "name": "At what age should therapy start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Therapy can begin as early as concerns are noticed. Early support often leads to better long-term progress."
          }
        },
        {
          "@type": "Question",
          "name": "Can therapy help children with autism or ADHD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Children with autism or ADHD can benefit from structured, personalized therapy based on their specific needs."
          }
        },
        {
          "@type": "Question",
          "name": "Will parents be involved in the process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Parent involvement is an important part of the therapy journey because it helps children apply skills at home and in daily life."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer an initial assessment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. An initial consultation or assessment helps us understand your child’s needs and recommend the right therapy plan."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <ConditionsGrid />
        <ServicesSection />
        <JourneySection />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <PopupForm />
    </>
  );
}
