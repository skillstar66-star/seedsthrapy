import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import JourneySection from "@/components/JourneySection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Pediatric Therapies | Seeds Therapy Center",
  description: "Explore our pediatric therapy services including Speech Therapy, Occupational Therapy, and Behavioral Therapy personalized for your child's needs.",
};

export default function TherapiesPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <ServicesSection />
        <JourneySection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
