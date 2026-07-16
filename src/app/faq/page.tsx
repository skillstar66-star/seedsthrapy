import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Parent FAQ | Seeds Therapy Center",
  description: "Get answers to frequently asked questions about pediatric occupational therapy, speech delay support, behavioral guidance, and assessment timing.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
