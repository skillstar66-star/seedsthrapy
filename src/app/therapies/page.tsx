import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import JourneySection from "@/components/JourneySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Pediatric Therapies in Coimbatore | Seeds Therapy Center",
  description:
    "Explore our pediatric therapy services including Occupational Therapy, Speech Therapy, Behavioral Therapy, and Early Intervention personalized for your child's developmental goals.",
};

export default function TherapiesPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <ServicesSection showEarlyIntervention={true} />
        <JourneySection />
        <WhyChooseUs />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

