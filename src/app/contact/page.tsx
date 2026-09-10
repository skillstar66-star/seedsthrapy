import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Contact Us & Book a Consultation | Seeds Therapy Center Coimbatore",
  description:
    "Get in touch with Seeds Therapy Center in Coimbatore. Schedule an initial pediatric assessment, consultation, or visit our clinic at Seeds Therapy Center, Siddhapudur.",
  keywords: [
    "Contact Seeds Therapy Center",
    "Book therapy appointment Coimbatore",
    "Child therapy center in Siddhapudur Coimbatore",
    "Child therapist contact Coimbatore",
    "Seeds Therapy Center phone number",
  ],
  alternates: {
    canonical: "https://www.seedstherapycenter.org/contact",
  },
  openGraph: {
    title: "Contact Us & Book a Consultation | Seeds Therapy Center Coimbatore",
    description:
      "Schedule a pediatric therapy assessment or consultation with our specialists in Coimbatore.",
    url: "https://www.seedstherapycenter.org/contact",
    siteName: "Seeds Therapy Center",
    type: "website",
    images: [
      {
        url: "https://www.seedstherapycenter.org/images/logo.png",
        width: 800,
        height: 800,
        alt: "Contact Seeds Therapy Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Book a Consultation | Seeds Therapy Center Coimbatore",
    description:
      "Schedule a pediatric therapy assessment or consultation with our specialists in Coimbatore.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.seedstherapycenter.org/contact#webpage",
      url: "https://www.seedstherapycenter.org/contact",
      name: "Contact Seeds Therapy Center",
      description: "Contact Seeds Therapy Center to schedule a consultation or pediatric assessment.",
      mainEntity: {
        "@type": "MedicalBusiness",
        "@id": "https://www.seedstherapycenter.org/#organization",
        name: "Seeds Therapy Center",
        url: "https://www.seedstherapycenter.org",
        telephone: "+919597469409",
        email: "seedstherapycenter@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "No-77, Seeds Therapy Center, Siddhapudur",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          postalCode: "641044",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 11.0168,
          longitude: 76.9558,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

