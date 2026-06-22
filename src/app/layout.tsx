import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

import Script from "next/script";

export const viewport = "width=device-width, initial-scale=1";

export const metadata: Metadata = {
  title: "Seeds Therapy | Helping Children Thrive",
  description:
    "Personalized pediatric therapy programs designed to help children build confidence, independence, communication, learning, and everyday life skills.",
  keywords: [
    "kids therapy center",
    "occupational therapy for children",
    "autism therapy",
    "ADHD therapy",
    "child development center",
    "pediatric occupational therapy",
    "early intervention program",
    "developmental therapy for kids",
    "speech therapy for children",
    "behavioral therapy for kids",
  ],
  alternates: {
    canonical: "https://seedstherapy.com", // Replace with real domain later
  },
  openGraph: {
    title: "Seeds Therapy | Helping Children Thrive",
    description:
      "Personalized pediatric therapy programs designed to help children build confidence, independence, and life skills.",
    type: "website",
    locale: "en_US",
    siteName: "Seeds Therapy Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seeds Therapy | Helping Children Thrive",
    description:
      "Personalized pediatric therapy programs designed to help children build confidence, independence, and life skills.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="remove-fdprocessedid"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Remove fdprocessedid attributes before React hydration
                  var removeIds = function() {
                    var elements = document.querySelectorAll("[fdprocessedid]");
                    for (var i = 0; i < elements.length; i++) {
                      elements[i].removeAttribute("fdprocessedid");
                    }
                  };
                  
                  // Run immediately
                  removeIds();
                  
                  // Also observe for dynamically added elements
                  if (window.MutationObserver) {
                    var observer = new MutationObserver(function(mutations) {
                      for (var i = 0; i < mutations.length; i++) {
                        if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'fdprocessedid') {
                          mutations[i].target.removeAttribute("fdprocessedid");
                        }
                      }
                    });
                    observer.observe(document.documentElement, {
                      attributes: true,
                      subtree: true,
                      attributeFilter: ['fdprocessedid']
                    });
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
