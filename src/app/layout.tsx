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
    canonical: "https://www.seedstherapycenter.org",
  },
  openGraph: {
    title: "Seeds Therapy | Helping Children Thrive",
    description:
      "Personalized pediatric therapy programs designed to help children build confidence, independence, and life skills.",
    type: "website",
    locale: "en_US",
    siteName: "Seeds Therapy Center",
    images: [
      {
        url: "https://www.seedstherapycenter.org/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Seeds Therapy Center Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seeds Therapy | Helping Children Thrive",
    description:
      "Personalized pediatric therapy programs designed to help children build confidence, independence, and life skills.",
    images: ["https://www.seedstherapycenter.org/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
  verification: {
    google: "pOcD3IAbG-uf8b_nfhhlwaI7J_4dPvxWw0XI2ymdRHA",
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
