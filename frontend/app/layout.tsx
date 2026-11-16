import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Udaipur Unfolded — Stay Closer. Explore Deeper.",
  description:
    "A boutique travel discovery platform and residential homestay near Ambamata Temple, Udaipur. Discover comfortable private rooms, verified partner stays, and curated itineraries.",
  keywords: [
    "Udaipur homestay",
    "Homestay near Ambamata Temple Udaipur",
    "Affordable rooms in Udaipur",
    "Places to visit in Udaipur",
    "Udaipur 2-day itinerary",
    "Best areas to stay in Udaipur",
    "Lake Pichola homestay",
  ],
  authors: [{ name: "Udaipur Unfolded" }],
  metadataBase: new URL("https://udaipurunfolded.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Udaipur Unfolded — Stay Closer. Explore Deeper.",
    description:
      "A boutique travel discovery platform and residential homestay near Ambamata Temple, Udaipur.",
    url: "https://udaipurunfolded.com",
    siteName: "Udaipur Unfolded",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Udaipur City Palace and Lake Pichola at sunset",
      },
    ],
    locale: "en_IN",
    type: "website",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Udaipur Unfolded Homestay",
    "description": "Two private guest rooms hosted in a peaceful residential home near Ambamata Temple, Udaipur, Rajasthan.",
    "url": "https://udaipurunfolded.com",
    "telephone": "+91 94140 XXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Ambamata Temple",
      "addressLocality": "Udaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "313001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.5854,
      "longitude": 73.6745
    },
    "priceRange": "₹1,650 - ₹1,850",
    "checkinTime": "13:00",
    "checkoutTime": "11:00",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free High-Speed Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24/7 Hot Water", "value": true }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#252820] antialiased selection:bg-[#B56B4B] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
