import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { itinerariesData } from "@/lib/data";
import ItineraryDetailClient from "./ItineraryDetailClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return itinerariesData.map((itinerary) => ({
    slug: itinerary.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const itinerary = itinerariesData.find((it) => it.slug === params.slug);
  if (!itinerary) {
    return {
      title: "Itinerary Not Found — Udaipur Unfolded",
    };
  }

  return {
    title: `${itinerary.title} | Udaipur Unfolded`,
    description: itinerary.overview,
    openGraph: {
      title: `${itinerary.title} — Curated Travel Plan`,
      description: itinerary.overview,
      images: [
        {
          url: itinerary.coverImage,
          width: 1200,
          height: 630,
          alt: itinerary.title,
        },
      ],
    },
  };
}

export default function ItineraryPage({ params }: PageProps) {
  const itinerary = itinerariesData.find((it) => it.slug === params.slug);

  if (!itinerary) {
    notFound();
  }

  return <ItineraryDetailClient itinerary={itinerary} />;
}
