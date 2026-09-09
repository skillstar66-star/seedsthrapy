import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { therapiesData, allTherapiesList } from "@/data/therapiesData";
import TherapyDetailView from "./TherapyDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allTherapiesList.map((therapy) => ({
    slug: therapy.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const therapy = therapiesData[slug];

  if (!therapy) {
    return {
      title: "Therapy Not Found | Seeds Therapy Center",
    };
  }

  const pageTitle = therapy.metaTitle || `${therapy.title} in Coimbatore | Seeds Therapy Center`;
  const pageDescription = therapy.metaDescription || `${therapy.heroDescription.slice(0, 160)}...`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords:
      therapy.metaKeywords && therapy.metaKeywords.length > 0
        ? therapy.metaKeywords
        : [
            therapy.title,
            `${therapy.shortTitle} Coimbatore`,
            `${therapy.shortTitle} for children`,
            "pediatric therapy Coimbatore",
            "Seeds Therapy Center",
            ...therapy.supportedConditions,
          ],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://www.seedstherapycenter.org/therapies/${therapy.slug}`,
      siteName: "Seeds Therapy Center",
      images: [
        {
          url: "https://www.seedstherapycenter.org/images/logo.png",
          width: 800,
          height: 800,
          alt: therapy.title,
        },
      ],
      type: "article",
    },
    alternates: {
      canonical: `https://www.seedstherapycenter.org/therapies/${therapy.slug}`,
    },
  };
}

export default async function TherapyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const therapy = therapiesData[slug];

  if (!therapy) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.seedstherapycenter.org/#organization",
        name: "Seeds Therapy Center",
        url: "https://www.seedstherapycenter.org",
        telephone: "+919597469409",
        address: {
          "@type": "PostalAddress",
          streetAddress: "No-77, Babyama Women Wellness & Paediatric Centre, Siddhapudur",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          postalCode: "641044",
          addressCountry: "IN",
        },
      },
      {
        "@type": "Service",
        name: therapy.title,
        serviceType: therapy.shortTitle,
        description: therapy.heroDescription,
        provider: {
          "@id": "https://www.seedstherapycenter.org/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Coimbatore",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.seedstherapycenter.org",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Therapies",
            item: "https://www.seedstherapycenter.org/therapies",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: therapy.shortTitle,
            item: `https://www.seedstherapycenter.org/therapies/${therapy.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: therapy.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen pt-14 sm:pt-16 md:pt-20">
        <TherapyDetailView therapy={therapy} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
