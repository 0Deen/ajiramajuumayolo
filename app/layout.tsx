import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/chat/ChatWidget";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import AppShell from "@/components/app/AppShell";
import JsonLd from "@/components/app/JsonLd";
import { COMPANY, SITE_URL as BASE_URL } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#4B1E8C",
};

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = BASE_URL; // set NEXT_PUBLIC_SITE_URL in your environment to change

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Ajira Majuu — Private Overseas Recruitment Agency in Kenya",
    template: "%s | Ajira Majuu",
  },

  description:
    "Ajira Majuu is a private overseas recruitment agency in Kenya. Connecting Kenyan talent to global opportunities in Qatar, Saudi Arabia, the UAE, Oman, Kuwait and Bahrain. Browse current jobs, apply without an account, or WhatsApp us. Njoo, Tusafiri Ughaibuni.",

  keywords: [
    "Ajira Majuu",
    "recruitment agency in Kenya",
    "overseas recruitment agency Kenya",
    "jobs abroad Kenya",
    "jobs abroad for Kenyans",
    "Gulf jobs Kenya",
    "Kenya to Saudi Arabia jobs",
    "Kenya to Qatar jobs",
    "Kenya to UAE jobs",
    "Kenya to Dubai jobs",
    "Kenya to Kuwait jobs",
    "Kenya to Bahrain jobs",
    "Kenya to Oman jobs",
    "caregiver jobs Qatar",
    "caregiver jobs Saudi Arabia",
    "housemaid jobs Saudi Arabia",
    "domestic worker jobs Gulf",
    "driver jobs Saudi Arabia",
    "security jobs Gulf",
    "hospitality jobs Dubai",
    "construction jobs Gulf",
    "cleaning jobs abroad",
    "private overseas recruitment agency Kenya",
    "overseas jobs Kenya",
    "manpower agency Kenya",
    "labour export agency Kenya",
    "employment agency Nairobi",
    "how to get a job abroad from Kenya",
    "safe overseas recruitment Kenya",
  ],

  applicationName: "Ajira Majuu",
  authors: [{ name: "Ajira Majuu" }],
  creator: "Ajira Majuu",
  publisher: "Ajira Majuu",
  category: "Recruitment / Employment Services",

  alternates: {
    canonical: "/",
    // languages: {
    //   "en-KE": "/",
    //   "sw-KE": "/sw",
    // },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: "Ajira Majuu",
    title: "Ajira Majuu — Private Overseas Recruitment Agency in Kenya",
    description:
      "Connecting Kenyan talent to global opportunities in the Gulf. Browse current jobs and apply without an account.",
    images: [
      {
        url: "/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Ajira Majuu logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ajira Majuu",
    description:
      "Private overseas recruitment agency in Kenya. Connecting Kenyan talent to global opportunities.",
    images: ["/logo.png"],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Ajira Majuu", statusBarStyle: "black-translucent" },
  formatDetection: { telephone: false },

  // Add these once you register with Google Search Console / Bing Webmaster Tools
  // verification: {
  //   google: "your-google-site-verification-code",
  //   other: { "msvalidate.01": "your-bing-verification-code" },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY.name,
              legalName: COMPANY.name,
              description: COMPANY.legalDescriptor,
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              email: COMPANY.primaryEmail,
              telephone: COMPANY.phoneDisplay,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Twiga Towers, Murang'a Road",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              areaServed: [
                { "@type": "Country", name: "Kenya" },
                { "@type": "Country", name: "Qatar" },
                { "@type": "Country", name: "Kuwait" },
                { "@type": "Country", name: "Saudi Arabia" },
                { "@type": "Country", name: "United Arab Emirates" },
                { "@type": "Country", name: "Bahrain" },
                { "@type": "Country", name: "Oman" },
              ],
              knowsAbout: [
                "Overseas recruitment",
                "International employment opportunities",
                "Gulf jobs for Kenyan candidates",
                "Candidate recruitment and screening",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: COMPANY.name,
              alternateName: "Ajira Majuu Kenya",
              url: SITE_URL,
              inLanguage: ["en-KE", "sw-KE"],
            },
          ]}
        />
        <LanguageProvider>
          <AppShell>{children}</AppShell>
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}