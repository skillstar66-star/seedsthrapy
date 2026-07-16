import Header from "@/components/Header";
import ConditionsGrid from "@/components/ConditionsGrid";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Conditions We Support | Seeds Therapy Center",
  description: "Learn about the conditions we support, including Autism (ASD), ADHD, Developmental Delay, Speech Delay, and Sensory Processing Difficulties.",
};

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <ConditionsGrid />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
