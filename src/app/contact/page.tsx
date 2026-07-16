import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Book a Consultation | Seeds Therapy Center",
  description: "Contact Seeds Therapy Center. Schedule an initial assessment, consultation, or visit our clinic at Babyama Women Wellness in Coimbatore.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
