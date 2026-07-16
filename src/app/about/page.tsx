import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "About Us | Seeds Therapy Center",
  description: "Learn about Seeds Therapy Center. We believe that every child deserves the chance to reach their full potential through personalized therapy.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <AboutSection />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
